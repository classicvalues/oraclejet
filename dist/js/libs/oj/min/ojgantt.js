/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","jquery","ojs/ojcomponentcore","ojs/ojtime-base","ojs/ojgantt-toolkit","ojs/ojkeyset","ojs/ojdvttimecomponentscale","ojs/ojlogger","ojs/ojconverter-datetime","ojs/ojconverter-number","ojs/ojthemeutils"],function(e,t,a,o,r,n,s,i,l,p,d){"use strict";var u;e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,(u={properties:{animationOnDataChange:{type:"string",enumValues:["auto","none"],value:"none"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},as:{type:"string",value:""},axisPosition:{type:"string",enumValues:["bottom","top"],value:"top"},dependencies:{type:"Array<Object>|Promise"},dependencyData:{type:"object",extension:{webelement:{exceptionStatus:[{type:"deprecated",since:"11.0.0",description:"Data sets from a DataProvider cannot be sent to WebDriverJS; use ViewModels or page variables instead."}]}}},dnd:{type:"object",properties:{move:{type:"object",properties:{tasks:{type:"string",enumValues:["disabled","enabled"],value:"disabled"}}}}},dragMode:{type:"string",enumValues:["pan","select"],value:"pan"},end:{type:"string",value:""},expanded:{type:"KeySet",writeback:!0},gridlines:{type:"object",properties:{horizontal:{type:"string",enumValues:["auto","hidden","visible"],value:"auto"},vertical:{type:"string",enumValues:["auto","hidden","visible"],value:"auto"}}},majorAxis:{type:"object",properties:{converter:{type:"object",properties:{days:{type:"object"},default:{type:"object"},hours:{type:"object"},minutes:{type:"object"},months:{type:"object"},quarters:{type:"object"},seconds:{type:"object"},weeks:{type:"object"},years:{type:"object"}}},height:{type:"number"},scale:{type:"string|DvtTimeComponentScale",enumValues:["days","hours","minutes","months","quarters","seconds","weeks","years"]},zoomOrder:{type:"Array<(string|DvtTimeComponentScale)>"}}},minorAxis:{type:"object",properties:{converter:{type:"object",properties:{days:{type:"object"},default:{type:"object"},hours:{type:"object"},minutes:{type:"object"},months:{type:"object"},quarters:{type:"object"},seconds:{type:"object"},weeks:{type:"object"},years:{type:"object"}}},height:{type:"number"},scale:{type:"string|DvtTimeComponentScale",enumValues:["days","hours","minutes","months","quarters","seconds","weeks","years"]},zoomOrder:{type:"Array<(string|DvtTimeComponentScale)>"}}},referenceObjects:{type:"Array<Object>",value:[]},rowAxis:{type:"object",properties:{label:{type:"object",properties:{renderer:{type:"function"}}},maxWidth:{type:"string",value:"none"},rendered:{type:"string",enumValues:["off","on"],value:"off"},width:{type:"string",value:"max-content"}}},rowDefaults:{type:"object",properties:{height:{type:"number"}}},rows:{type:"Array<Object>|Promise"},scrollPosition:{type:"object",writeback:!0,value:{y:0},properties:{offsetY:{type:"number"},rowIndex:{type:"number"},y:{type:"number",value:0}}},selection:{type:"Array<any>",writeback:!0,value:[]},selectionMode:{type:"string",enumValues:["multiple","none","single"],value:"none"},start:{type:"string",value:""},taskData:{type:"object",extension:{webelement:{exceptionStatus:[{type:"deprecated",since:"11.0.0",description:"Data sets from a DataProvider cannot be sent to WebDriverJS; use ViewModels or page variables instead."}]}}},taskDefaults:{type:"object",properties:{baseline:{type:"object",properties:{borderRadius:{type:"string"},height:{type:"number"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},borderRadius:{type:"string"},height:{type:"number"},labelPosition:{type:"string|Array<string>",enumValues:["end","innerCenter","innerEnd","innerStart","none","start"],value:["end","innerCenter","start","max"]},overlap:{type:"object",properties:{behavior:{type:"string",enumValues:["auto","overlay","stack","stagger"],value:"auto"},offset:{type:"number"}}},progress:{type:"object",properties:{borderRadius:{type:"string"},height:{type:"string",value:"100%"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},resizable:{type:"string",enumValues:["disabled","enabled"],value:"disabled"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},type:{type:"string",enumValues:["auto","milestone","normal","summary"],value:"auto"}}},tooltip:{type:"object",properties:{renderer:{type:"function"}}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{accessibleDependencyInfo:{type:"string"},accessiblePredecessorInfo:{type:"string"},accessibleSuccessorInfo:{type:"string"},accessibleTaskTypeMilestone:{type:"string"},accessibleTaskTypeSummary:{type:"string"},componentName:{type:"string"},finishFinishDependencyAriaDesc:{type:"string"},finishStartDependencyAriaDesc:{type:"string"},labelAndValue:{type:"string"},labelBaselineDate:{type:"string"},labelBaselineEnd:{type:"string"},labelBaselineStart:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelDate:{type:"string"},labelEnd:{type:"string"},labelInvalidData:{type:"string"},labelLabel:{type:"string"},labelLevel:{type:"string"},labelMoveBy:{type:"string"},labelNoData:{type:"string"},labelProgress:{type:"string"},labelResizeBy:{type:"string"},labelRow:{type:"string"},labelStart:{type:"string"},startFinishDependencyAriaDesc:{type:"string"},startStartDependencyAriaDesc:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"},taskMoveCancelled:{type:"string"},taskMoveFinalized:{type:"string"},taskMoveInitiated:{type:"string"},taskMoveInitiatedInstruction:{type:"string"},taskMoveSelectionInfo:{type:"string"},taskResizeCancelled:{type:"string"},taskResizeEndHandle:{type:"string"},taskResizeEndInitiated:{type:"string"},taskResizeFinalized:{type:"string"},taskResizeInitiatedInstruction:{type:"string"},taskResizeSelectionInfo:{type:"string"},taskResizeStartHandle:{type:"string"},taskResizeStartInitiated:{type:"string"},tooltipZoomIn:{type:"string"},tooltipZoomOut:{type:"string"}}},valueFormats:{type:"object",properties:{baselineDate:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},baselineEnd:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},baselineStart:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},date:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},end:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},label:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},progress:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},row:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},start:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}}}},viewportEnd:{type:"string",value:""},viewportStart:{type:"string",value:""}},methods:{getContextByNode:{},getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojMove:{},ojResize:{},ojViewportChange:{}},extension:{}}).extension._WIDGET_NAME="ojGantt",e.CustomElementBridge.register("oj-gantt",{metadata:u});var y={properties:{predecessorTaskId:{type:"any"},shortDesc:{type:"string"},successorTaskId:{type:"any"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},type:{type:"string",enumValues:["finishFinish","finishStart","startFinish","startStart"],value:"finishStart"}},extension:{}};y.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-gantt-dependency",{metadata:y});var g={properties:{baseline:{type:"object",properties:{borderRadius:{type:"string"},end:{type:"string",value:""},height:{type:"number"},start:{type:"string",value:""},svgClassName:{type:"string"},svgStyle:{type:"object"}}},borderRadius:{type:"string"},end:{type:"string",value:""},height:{type:"number"},label:{type:"string",value:""},labelPosition:{type:"string|Array<string>",enumValues:["end","innerCenter","innerEnd","innerStart","none","start"]},labelStyle:{type:"object",value:{}},overlap:{type:"object",properties:{behavior:{type:"string",enumValues:["auto","overlay","stack","stagger"]}}},progress:{type:"object",properties:{borderRadius:{type:"string"},height:{type:"string"},svgClassName:{type:"string"},svgStyle:{type:"object"},value:{type:"number"}}},rowId:{type:"any"},shortDesc:{type:"string|function"},start:{type:"string",value:""},svgClassName:{type:"string"},svgStyle:{type:"object"},type:{type:"string",enumValues:["auto","milestone","normal","summary"]}},extension:{}};g.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-gantt-task",{metadata:g});var c={properties:{label:{type:"string",value:""},labelStyle:{type:"object",value:{}}},extension:{}};function m(){return{default:null,seconds:new l.IntlDateTimeConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),minutes:new l.IntlDateTimeConverter({hour:"numeric",minute:"2-digit"}),hours:new l.IntlDateTimeConverter({hour:"numeric"}),days:new l.IntlDateTimeConverter({month:"numeric",day:"2-digit"}),weeks:new l.IntlDateTimeConverter({month:"numeric",day:"2-digit"}),months:new l.IntlDateTimeConverter({month:"long"}),quarters:new l.IntlDateTimeConverter({month:"long"}),years:new l.IntlDateTimeConverter({year:"numeric"})}}c.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-gantt-row",{metadata:c}),e.__registerWidget("oj.ojGantt",t.oj.dvtTimeComponent,{widgetEventPrefix:"oj",options:{axisPosition:"top",animationOnDataChange:"none",animationOnDisplay:"none",as:"",dependencies:null,dependencyData:null,dnd:{move:{tasks:"disabled"}},dragMode:"pan",end:"",expanded:new e.KeySetImpl,gridlines:{horizontal:"auto",vertical:"auto"},minorAxis:{converter:void 0,height:null,scale:null,zoomOrder:null},majorAxis:{converter:void 0,height:null,scale:null,zoomOrder:null},referenceObjects:[],rowAxis:{rendered:"off",maxWidth:"none",width:"max-content",label:{renderer:null}},rowDefaults:{height:null},rows:null,scrollPosition:{y:0,rowIndex:null,offsetY:null},selection:[],selectionMode:"none",start:"",taskData:null,taskDefaults:{borderRadius:void 0,labelPosition:["end","innerCenter","start","max"],height:null,overlap:{behavior:"auto",offset:null},resizable:"disabled",svgClassName:"",svgStyle:{},type:"auto",progress:{borderRadius:void 0,height:"100%",svgClassName:"",svgStyle:{}},baseline:{borderRadius:void 0,height:null,svgClassName:"",svgStyle:{}}},tooltip:{renderer:null},valueFormats:{row:{tooltipLabel:void 0,tooltipDisplay:"auto"},start:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},end:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},date:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},label:{tooltipLabel:void 0,tooltipDisplay:"auto"},progress:{converter:void 0,tooltipLabel:void 0,tooltipDisplay:"auto"},baselineStart:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},baselineEnd:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},baselineDate:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"}},viewportEnd:"",viewportStart:"",viewportChange:null,move:null,resize:null},_CreateDvtComponent:function(e,t,a){return e.styleClasses=this._getComponentStyleMap(),r.Gantt.newInstance(e,t,a)},_AfterCreate:function(){if("alta"===d.parseJSONFromFontFamily("oj-theme-json").behavior){var e=void 0!==this.options.taskDefaults.borderRadius,t=void 0!==this.options.taskDefaults.baseline.borderRadius,a=void 0!==this.options.taskDefaults.progress.borderRadius;this._super(),e||(this.options.taskDefaults.borderRadius="0"),t||(this.options.taskDefaults.baseline.borderRadius="0"),a||(this.options.taskDefaults.progress.borderRadius="0")}else this._super()},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-gantt"),e},_getComponentStyleMap:function(){return{databody:"oj-gantt-container",dependencyLine:"oj-gantt-dependency-line",dependencyLineConnector:"oj-gantt-dependency-line-connector",dependencyLineCustom:"oj-gantt-dependency-line-custom",nodata:"oj-gantt-no-data-message",hgridline:"oj-gantt-horizontal-gridline",majorvgridline:"oj-gantt-major-vertical-gridline",minorvgridline:"oj-gantt-minor-vertical-gridline",majorAxis:"oj-gantt-major-axis",majorAxisTicks:"oj-gantt-major-axis-separator",majorAxisLabels:"oj-gantt-major-axis-label",minorAxis:"oj-gantt-minor-axis",minorAxisTicks:"oj-gantt-minor-axis-separator",minorAxisLabels:"oj-gantt-minor-axis-label",row:"oj-gantt-row",rowLabel:"oj-gantt-row-label",task:"oj-gantt-task",taskCustom:"oj-gantt-task-custom",taskBar:"oj-gantt-task-bar",taskBackdrop:"oj-gantt-task-backdrop",taskMilestone:"oj-gantt-task-milestone",taskSummary:"oj-gantt-task-summary",taskSummaryProgress:"oj-gantt-task-summary-progress",taskDragImage:"oj-gantt-task-drag-image",taskResizeHandle:"oj-gantt-task-resize-handle",baseline:"oj-gantt-baseline",baselineBar:"oj-gantt-baseline-bar",baselineMilestone:"oj-gantt-baseline-milestone",taskLabel:"oj-gantt-task-label",taskProgress:"oj-gantt-task-progress",taskUnprogress:"oj-gantt-task-progress-container",tooltipLabel:"oj-dvt-datatip-label",tooltipValue:"oj-dvt-datatip-value",tooltipTable:"oj-dvt-datatip-table",referenceObjectInnerLine:"oj-gantt-reference-object-inner-line",referenceObjectLine:"oj-gantt-reference-object-line",referenceObjectArea:"oj-gantt-reference-object-area",selected:"oj-selected",hover:"oj-hover",focus:"oj-focus",draggable:"oj-draggable",activeDrop:"oj-active-drop",invalidDrop:"oj-invalid-drop"}},_IsDraggable:function(){var e=this.options.dnd&&this.options.dnd.move&&"enabled"===this.options.dnd.move.tasks,t=this.options.taskDefaults&&"enabled"===this.options.taskDefaults.resizable;return e||t},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-gantt-taskbar"===t?t="taskbar["+e.rowIndex+"]["+e.index+"]":"oj-gantt-row-label"===t?t="rowLabel["+e.index+"]":"oj-gantt-dependency"===t?t="dependency["+e.index+"]":"oj-gantt-tooltip"===t&&(t="tooltip"),t},_ConvertSubIdToLocator:function(e){var t,a={};return 0===e.indexOf("taskbar")?(t=this._GetIndexPath(e),a.subId="oj-gantt-taskbar",a.rowIndex=t[0],a.index=t[1]):0===e.indexOf("rowLabel")?(t=this._GetIndexPath(e),a.subId="oj-gantt-row-label",a.index=t[0]):0===e.indexOf("dependency")?(t=this._GetIndexPath(e),a.subId="oj-gantt-dependency",a.index=t[0]):"tooltip"===e&&(a.subId="oj-gantt-tooltip"),a},_GetChildStyleClasses:function(){var e=this._super();return e["oj-gantt"]={path:"_resources/animationDuration",property:"ANIM_DUR"},e["oj-gantt-major-axis"]={path:"_resources/majorAxis/height",property:"height"},e["oj-gantt-major-axis-label"]={path:"_resources/majorAxisLabelFontProp",property:"TEXT"},e["oj-gantt-minor-axis"]={path:"_resources/minorAxis/height",property:"height"},e["oj-gantt-minor-axis-label"]={path:"_resources/minorAxisLabelFontProp",property:"TEXT"},e["oj-gantt-container"]={path:"_resources/chartArea/strokeWidth",property:"stroke-width"},e["oj-gantt-horizontal-gridline"]={path:"_resources/horizontalGridlineWidth",property:"stroke-width"},e["oj-gantt-task-label"]=[{path:"_resources/taskLabelFontProp",property:"TEXT"},{path:"_resources/taskLabelMarginLeft",property:"margin-left"},{path:"_resources/taskLabelMarginRight",property:"margin-right"}],e["oj-gantt-row"]=[{path:"_resources/rowPaddingTop",property:"padding-top"},{path:"_resources/rowPaddingBottom",property:"padding-bottom"}],e["oj-gantt-row-label"]=[{path:"_resources/rowLabelFontProp",property:"TEXT"},{path:"_resources/rowLabelPaddingLeft",property:"padding-left"},{path:"_resources/rowLabelPaddingRight",property:"padding-right"}],e["oj-gantt-task"]=[{path:"_resources/taskDefaults/height",property:"height"},{path:"_resources/taskPaddingLeft",property:"padding-left"},{path:"_resources/taskPaddingRight",property:"padding-right"},{path:"_resources/taskMarginLeft",property:"margin-left"},{path:"_resources/taskMarginRight",property:"margin-right"},{path:"taskDefaults/borderRadius",property:"border-top-left-radius"}],e["oj-gantt-task-progress"]={path:"taskDefaults/progress/borderRadius",property:"border-top-left-radius"},e["oj-gantt-baseline"]={path:"taskDefaults/baseline/borderRadius",property:"border-top-left-radius"},e["oj-gantt-baseline-milestone"]={path:"_resources/milestoneBaselineBorderRadius",property:"border-top-left-radius"},e["oj-gantt-baseline-bar"]=[{path:"_resources/taskDefaults/baseline/height",property:"height"},{path:"_resources/baselineMarginTop",property:"margin-top"}],e},_LoadResources:function(){this._super();var e=this.options._resources;e.zoomIn="oj-fwk-icon oj-fwk-icon-plus",e.zoomOut="oj-fwk-icon oj-fwk-icon-minus",e.closed="oj-fwk-icon oj-fwk-icon-caret-end",e.open="oj-fwk-icon oj-fwk-icon-caret-s",e.percentConverter=new p.IntlNumberConverter({style:"percent"})},_ProcessOptions:function(){this._super(),this.options.taskData&&(this._fetchDataHandler=this._getFetchDataHandler("taskData"))},_GetComponentRendererOptions:function(){return[{path:"tooltip/renderer",slot:"tooltipTemplate"},{path:"rowAxis/label/renderer",slot:"rowAxisLabelTemplate"},{path:"taskContent/renderer",slot:"taskContentTemplate"},{path:"dependencyContent/renderer",slot:"dependencyContentTemplate"}]},_HandleEvent:function(e){var t=e.type;if("viewportChange"===t){var a=new Date(e.viewportStart).toISOString(),o=new Date(e.viewportEnd).toISOString(),r=e.majorAxisScale,n=e.minorAxisScale,s={viewportStart:a,viewportEnd:o,majorAxisScale:r,minorAxisScale:n};this._UserOptionChange("viewportStart",a),this._UserOptionChange("viewportEnd",o),this._UserOptionChange("majorAxis.scale",r),this._UserOptionChange("minorAxis.scale",n),this._trigger("viewportChange",null,s)}else if("move"===t){var i={taskContexts:e.taskContexts,value:e.value,start:e.start,end:e.end,baselineStart:e.baselineStart,baselineEnd:e.baselineEnd,rowContext:e.rowContext};this._trigger("move",null,i)}else if("resize"===t){var l={taskContexts:e.taskContexts,value:e.value,start:e.start,end:e.end,type:e.typeDetail};this._trigger("resize",null,l)}else if("scrollPositionChange"===t){var p={y:e.y,rowIndex:e.rowIndex,offsetY:e.offsetY};this._UserOptionChange("scrollPosition",p),this._trigger("scrollPositionChange",null,p)}else if("expand"===t){var d={rowData:e.rowData,id:e.id,itemData:e.itemData},u=this;this._NotReady(),(this.options.taskData?this._fetchDataHandler(this.options.taskData,e.expanded,d.rowData,d.id):Promise.resolve()).then(function(){u._UserOptionChange("expanded",e.expanded),u._Render(),u._trigger("expand",null,d)})}else if("collapse"===t){var y={rowData:e.rowData,itemData:e.itemData};this._UserOptionChange("expanded",e.expanded),this._Render(),this._trigger("collapse",null,y)}else this._super(e)},_RemoveKeys:function(e){var t;this._super(e);var a=this.options.expanded;a&&!a.isAddAll()&&(e.forEach(function(e){a.has(e)&&(a=a.delete([e]),t=!0)}),t&&this._UserOptionChange("expanded",a))},_GetComponentNoClonePaths:function(){var e=this._super();return e.start=!0,e.end=!0,e.viewportStart=!0,e.viewportEnd=!0,e.referenceObjects={value:!0},e.majorAxis={scale:!0,zoomOrder:!0},e.minorAxis={scale:!0,zoomOrder:!0},e},_GetComponentDeferredDataPaths:function(){return{root:["rows","dependencies","taskData","dependencyData"]}},_GetSimpleDataProviderConfigs:function(){var e={dependencyData:{templateName:"dependencyTemplate",templateElementName:"oj-gantt-dependency",resultPath:"dependencies"},taskData:{templateName:"taskTemplate",templateElementName:"oj-gantt-task",resultPath:"rows",derivedTemplates:["rowTemplate"]}};return Object.defineProperty(e.taskData,"expandedKeySet",{get:function(){return this.options.expanded}.bind(this)}),e},_GetDataProviderSeriesConfig:function(){return{dataProperty:"taskData",defaultSingleSeries:!1,idAttribute:"rowId",itemsKey:"tasks",templateName:"rowTemplate",templateElementName:"oj-gantt-row"}},_OptionChangeHandler:function(e){Object.prototype.hasOwnProperty.bind(e)("expanded")&&this._ClearDataProviderState("taskData"),this._super(e)},_ProcessTemplates:function(e,t,a,o,r,n,s){var l=n?this._TemplateHandler.getComponentResults(e):null;if(!l){var p=this._super(e,t,a,o,r,n,s);if("taskData"===e&&o){var d=this._GetSimpleDataProviderConfigs()[e],u=this._GetDataProviderSeriesConfig(),y=u.templateName,g=u.templateElementName,c=this._TemplateHandler.getTemplates()[y],m=this.element[0],b=function(t,o,r){for(var n=0;n<t.length;n++){var s=t[n],l=null!=s.rowId?s.rowId:s.id,p={id:l,tasks:[s]};if(c){var u={data:s._itemData,index:n,key:s.id,parentData:o,parentKey:r},y={componentElement:m,id:l,index:n,tasks:[u]};try{var v=this._TemplateHandler.processNodeTemplate(e,a,c[0],g,y,l);v.id=p.id,v.tasks=p.tasks,p=v}catch(e){i.error(e)}}var h=s[d.resultPath];if(h){s[d.resultPath]=void 0;var j=o.slice(0);j.push(s._itemData),p.rows=b(h,j,s.id)}t[n]=p}return t}.bind(this);l={paths:p.paths,values:[b(p.values[0],[],void 0)]}}else l=p;n&&this._TemplateHandler.setComponentResults(e,l)}return l},getContextByNode:function(e){var t=this.getSubIdByNode(e);return t&&"oj-gantt-tooltip"!==t.subId?t:null}}),a.setDefaultOptions({ojGantt:{majorAxis:{converter:a.createDynamicPropertyGetter(function(){return m()})},minorAxis:{converter:a.createDynamicPropertyGetter(function(){return m()})},valueFormats:{progress:{converter:a.createDynamicPropertyGetter(function(){return new p.IntlNumberConverter({style:"percent"})})}}}})});
//# sourceMappingURL=ojgantt.js.map