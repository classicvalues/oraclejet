/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(['exports', 'jquery', 'ojs/ojcore-base', 'ojs/ojpopupcore', 'ojs/ojdomutils'], function (exports, $, oj, ojpopupcore, DomUtils) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  oj = oj && Object.prototype.hasOwnProperty.call(oj, 'default') ? oj['default'] : oj;

  /**
   * @private
   */
   const _ARIA_READONLY = 'aria-readonly';

  /**
   * @private
   */
  const _DATA_OJ_TABMOD = 'data-oj-tabmod';

  /**
   * @private
   */
  const _TAB_INDEX = 'tabIndex';

  /**
   * @private
   */
  const _DATA_OJ_ARIA_READONLY_MOD = 'data-oj-ariareadonlymod';

  /**
   * @private
   */
  const _FOCUSABLE_ELEMENTS_QUERY = 'input, select, button, a[href], textarea, object, [tabIndex]:not([tabIndex="-1"])';

  /**
   * @private
   */
  const _ACTIONABLE_ELEMENTS_QUERY = '[' + _DATA_OJ_TABMOD + '], ' + _FOCUSABLE_ELEMENTS_QUERY;


  /** ******************* focusable/editable element related methods *****************/

  /**
   * Check if the specified element is visible
   * @param {Element} element
   * @export
   */
  const checkVisibility = function (element) {
    return !(element.offsetHeight === 0 || element.offsetWidth === 0);
  };

  /**
   * @export
   */
  const isActionableElement = function (node) {
    var parentNode = node.parentNode;
    if (parentNode != null) {
      var nodes = parentNode.querySelectorAll(_ACTIONABLE_ELEMENTS_QUERY);
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[0] === node) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * Finds all the focusable elements in a node
   * @param {Element} node
   * @param {boolean=} skipVisibilityCheck
   * @return {Element[]} An array of all of the focusable elements in a node
   * @export
   */
  const getFocusableElementsInNode = function (node, skipVisibilityCheck) {
    var inputElems = [];

    // a nodes without href are not focusable
    var agentInfo = oj.AgentUtils.getAgentInfo();
    var check = true;
    if (oj.AgentUtils.BROWSER.IE === agentInfo.browser) {
      if (node.parentNode == null) {
        check = false;
      }
    }
    if (check) {
      var nodes = node.querySelectorAll(_FOCUSABLE_ELEMENTS_QUERY);
      var nodeCount = nodes.length;
      // in IE, each 'option' after 'select' elem will be counted as an input element(and cause duplicate input elems returned)
      // this will cause problem with TAB/Shift-TAB (recognizing whether to go to next cell or to tab within the current cell
      for (var i = 0; i < nodeCount; i++) {
        var elem = nodes[i];
        if (!elem.disabled && (skipVisibilityCheck || checkVisibility(elem))) {
          var tabIndex = parseInt(elem.getAttribute(_TAB_INDEX), 10);
          if (isNaN(tabIndex) || tabIndex >= 0) {
            inputElems.push(elem);
          }
        }
      }
    }
    return inputElems;
  };

  /**
   * Remove the aria-readonly attribute from the specified element
   * @param {Element} element
   * @export
   */
  const removeAriaReadonly = function (element) {
    var ariaReadonly = element.getAttribute(_ARIA_READONLY);
    // store the aria-readonly value as an attribute
    element.setAttribute(_DATA_OJ_ARIA_READONLY_MOD, ariaReadonly); // @HTMLUpdateOK
    element.removeAttribute(_ARIA_READONLY);
  };

  /**
   * Make the specified element unfocusable
   * @param {Element} element
   * @export
   */
  const disableElement = function (element) {
    var tabIndex = parseInt(element.getAttribute(_TAB_INDEX), 10);
    // store the tabindex as an attribute
    element.setAttribute(_DATA_OJ_TABMOD, tabIndex); // @HTMLUpdateOK
    element.setAttribute(_TAB_INDEX, -1); // @HTMLUpdateOK
  };

  /**
   * Make all focusable elements within the specified element unfocusable
   * @param {Element} element
   * @param {boolean=} skipVisibilityCheck
   * @param {boolean=} excludeActiveElement
   * @param {boolean=} includeReadonly
   * @return {Element[]} An array of the disabled elements
   * @export
   */
  const disableAllFocusableElements = function (element, skipVisibilityCheck,
    excludeActiveElement, includeReadonly) {
    var disabledElems = [];
    // make all focusable elements non-focusable, since we want to manage tab stops
    var focusElems = getFocusableElementsInNode(element, skipVisibilityCheck);
    for (var i = 0; i < focusElems.length; i++) {
      if (!excludeActiveElement || focusElems[i] !== document.activeElement) {
        disableElement(focusElems[i]);
        disabledElems.push(focusElems[i]);
      }
      if (includeReadonly && focusElems[i].hasAttribute(_ARIA_READONLY)) {
        removeAriaReadonly(focusElems[i]);
      }
    }
    return disabledElems;
  };

  /**
   * Enable all focusable elements within the specified element that were previously disabled
   * @param {Element} element
   * @return {NodeList} An array of the enabled elements
   * @export
   */
  const enableAllFocusableElements = function (element) {
    // make all non-focusable elements focusable again
    var focusElems = element.querySelectorAll('[' + _DATA_OJ_TABMOD + ']');
    for (var i = 0; i < focusElems.length; i++) {
      var tabIndex =
        parseInt(focusElems[i].getAttribute(_DATA_OJ_TABMOD), 10);
      focusElems[i].removeAttribute(_DATA_OJ_TABMOD);
      // restore tabIndex as needed
      if (isNaN(tabIndex)) {
        focusElems[i].removeAttribute(_TAB_INDEX);
      } else {
        focusElems[i].setAttribute(_TAB_INDEX, tabIndex); // @HTMLUpdateOK
      }
      if (focusElems[i].hasAttribute(_DATA_OJ_ARIA_READONLY_MOD)) {
        var ariaReadonly = focusElems[i].getAttribute(_DATA_OJ_ARIA_READONLY_MOD);
        focusElems[i].removeAttribute(_DATA_OJ_ARIA_READONLY_MOD);
        focusElems[i].setAttribute(_ARIA_READONLY, ariaReadonly); // @HTMLUpdateOK
      }
    }
    return focusElems;
  };

  /**
   * Components that open popups (such as ojSelect, ojCombobox, ojInputDate, etc.) will trigger
   * focusout, but components don't want to exit actionable/edit mode in those cases.
   * This method should be used inside the component's focusout handler.
   * @param elem the component element
   * @return the logical popup element if one has been launched from within the component, null otherwise.
   */
  const getLogicalChildPopup = function (componentElement) {
    var popups = oj.ZOrderUtils.findOpenPopups();
    for (var i = 0; i < popups.length; i++) {
      // Get the launcher of the popup.
      // popups[i] is just a wrapper with the real popup as its child.
      var popupElem = popups[i].firstElementChild;
      var launcher = DomUtils.getLogicalParent($(popupElem));

      // Check if the component contains the launcher
      if (launcher != null && $(componentElement).has(launcher.get(0)).length > 0) {
        // only return the popup if the child popup is currently open
        if (oj.ZOrderUtils.getStatus(popupElem) === oj.ZOrderUtils.STATUS.OPEN) {
          return popupElem;
        }
      }
    }
    return null;
  };

  exports.checkVisibility = checkVisibility;
  exports.disableAllFocusableElements = disableAllFocusableElements;
  exports.disableElement = disableElement;
  exports.enableAllFocusableElements = enableAllFocusableElements;
  exports.getFocusableElementsInNode = getFocusableElementsInNode;
  exports.getLogicalChildPopup = getLogicalChildPopup;
  exports.isActionableElement = isActionableElement;

  Object.defineProperty(exports, '__esModule', { value: true });

});
