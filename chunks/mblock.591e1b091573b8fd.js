(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[3],{1013:function(e,n,t){"use strict";t.r(n);var a=t(3),o=t.n(a),i=t(0),s=t.n(i),r=t(11),l=t(35),c=t.n(l),d=t(12),m=t(6),p=t(69),u=t(886),b=t(1011),g=t(16),h=t(14);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}const x='<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>',w=e=>e.replace(/\sid="(-?(\d+?.)?\d+?)"/g,' id="id$1"');class C extends s.a.PureComponent{constructor(e){super(e),Object(r.bindAll)(this,["handleUpdateName","handleUpdateImage"]),Object(h.injectPCReducer)("scratchPaint",b.a)}handleUpdateName(e){this.props.vm.renameCostume(this.props.selectedCostumeIndex,e),this.props.vm.refreshWorkspace()}handleUpdateImage(e,n,t,a){e?this.props.vm.updateSvg(this.props.selectedCostumeIndex,n,t,a):this.props.vm.updateBitmap(this.props.selectedCostumeIndex,n,t,a,2)}render(){let{image:e,imageFormat:n}=this.props;return this.props.imageId?(e&&-1===e.indexOf("</html>")||(e=x),"svg"===n&&(e=w(e)),s.a.createElement(b.b,f({},this.props,{image:e,onUpdateName:this.handleUpdateName,onUpdateImage:this.handleUpdateImage}))):null}}C.propTypes={name:o.a.string,rotationCenterX:o.a.number,rotationCenterY:o.a.number,selectedCostumeIndex:o.a.number.isRequired,imageId:o.a.string,image:o.a.string,vm:o.a.instanceOf(c.a)};var k=Object(g.connect)((e,{selectedCostumeIndex:n})=>{const t=e.vm.editingTarget.id,a=e.vm.editingTarget.sprite,o=n<a.costumes.length?n:a.costumes.length-1,i=e.vm.editingTarget.sprite.costumes[o];return{name:i&&i.name,rotationCenterX:i&&i.rotationCenterX,rotationCenterY:i&&i.rotationCenterY,imageId:t&&`${t}${i.skinId}`,imageFormat:i&&i.dataFormat,image:e.vm.getCostume(o),rtl:e.intl.rtl,zoomLevelId:t,selectedCostumeIndex:o}})(C),y=t(118),v=t(17),F=t(23),_=t(169),T=t(39),E=t(55),O=t(251);function B(){return(B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}const I=()=>null,R=()=>null,D={addLibraryBackdropMsg:s.a.createElement(v.a,{defaultMessage:"Add Backdrop From Library",description:"Button to add a backdrop in the editor tab",id:"gui.costumeTab.addBackdrop"}),addLibraryCostumeMsg:s.a.createElement(v.a,{defaultMessage:"Add Costume From Library",description:"Button to add a costume in the editor tab",id:"gui.costumeTab.addCostume"}),addBlankBackdropMsg:s.a.createElement(v.a,{defaultMessage:"Add Blank Backdrop",description:"Button to add a blank backdrop in the editor tab",id:"gui.costumeTab.addBlankBackdrop"}),addBlankCostumeMsg:s.a.createElement(v.a,{defaultMessage:"Add Blank Costume",description:"Button to add a blank costume in the editor tab",id:"gui.costumeTab.addBlankCostume"})};class L extends s.a.PureComponent{constructor(e){super(e),Object(r.bindAll)(this,["handleSelectCostume","handleDeleteCostume","handleShowPrompt","handlePromptClose","handleNewBlankCostume","handleDuplicateCostume","handleNewCostume","handleDrop","handleExport"]);const{editingTarget:n,sprites:t,stage:a}=e,o=n&&t[n]?t[n]:a;o&&o.currentCostume?this.state={selectedCostumeIndex:o.currentCostume}:this.state={selectedCostumeIndex:0}}componentDidUpdate(e){const{editingTarget:n,sprites:t,stage:a}=this.props,o=n&&t[n]?t[n]:a;if(o&&o.costumes)if(e.editingTarget===n){(e.sprites[n]?e.sprites[n]:e.stage).costumeCount!==o.costumeCount&&this.setState({selectedCostumeIndex:o.currentCostume})}else this.setState({selectedCostumeIndex:o.currentCostume})}handleSelectCostume(e){this.props.vm.editingTarget.setCostume(e),this.setState({selectedCostumeIndex:e})}handleDeleteCostume(){this.props.vm.deleteCostume(this.state.prompt.deleteId),this.handlePromptClose()}handleDuplicateCostume(e){this.props.vm.duplicateCostume(e)}handleNewCostume(e){this.props.vm.addCostume(e.md5,e)}handleNewBlankCostume(){const e={name:this.props.vm.editingTarget.isStage?"backdrop1":"costume1",md5:"cd21514d0531fdffb22204e0ec5ed84a.svg",rotationCenterX:0,rotationCenterY:0,bitmapResolution:1,skinId:null};this.handleNewCostume(e)}handleDrop(e){if(e.dragType===E.a.COSTUME){const n=this.props.vm.editingTarget.sprite,t=n.costumes[this.state.selectedCostumeIndex];this.props.vm.reorderCostume(this.props.vm.editingTarget.id,e.index,e.newIndex),this.setState({selectedCostumeIndex:n.costumes.indexOf(t)})}else e.dragType===E.a.BACKPACK_COSTUME?this.props.vm.addCostume(e.payload.body,{name:e.payload.name}):e.dragType===E.a.BACKPACK_SOUND&&this.props.vm.addSound({md5:e.payload.body,name:e.payload.name})}handleShowPrompt(e){const{editingTarget:n}=this.props.vm;n&&this.setState({prompt:{deleteId:e,title:Object(F.a)(n.isStage?"gui.backdrop.deleteTitle":"gui.costume.deleteTitle"),message:Object(F.a)(n.isStage?"gui.backdrop.deleteMessage":"gui.costume.deleteMessage")}})}handleExport(e){const{editingTarget:n}=this.props.vm,t=n.sprite.costumes[e],a=new Blob([t.asset.data],{type:t.asset.assetType.contentType});Object(O.a)(`${t.name}.${t.asset.dataFormat}`,a)}handlePromptClose(){this.setState({prompt:null})}formatCostumeDetails(e,n){const t=n||1;return`${Math.ceil(e[0]/t)} x ${Math.ceil(e[1]/t)}`}render(){const{onNewLibraryBackdropClick:e,onNewLibraryCostumeClick:n,costumeLibraryVisible:t,backdropLibraryVisible:a,onRequestCloseCostumeLibrary:o,onRequestCloseBackdropLibrary:i,vm:r,sprites:l,stage:c,...d}=this.props;if(!r.editingTarget)return null;const m=r.editingTarget.isStage,p=r.editingTarget.sprite,b=m?D.addLibraryBackdropMsg:D.addLibraryCostumeMsg,g=m?e:n,h=m?"icon--add-backdrop-lib":"icon-add-costume-lib",f=p.costumes?p.costumes.map(e=>({name:e.name,asset:e.asset,details:e.size?this.formatCostumeDetails(e.size,e.bitmapResolution):null,dragPayload:e})):[];return s.a.createElement(u.a,{buttons:[{message:b,iconFontType:h,onClick:g}],dragType:E.a.COSTUME,items:f,selectedItemIndex:this.state.selectedCostumeIndex,onDeleteClick:f.length>1?this.handleShowPrompt:null,onDuplicateClick:this.handleDuplicateCostume,onExportButtonClick:this.handleExport,onDrop:this.handleDrop,onItemClick:this.handleSelectCostume,rtl:d.rtl},p.costumes?s.a.createElement(k,B({vm:r},d,{selectedCostumeIndex:this.state.selectedCostumeIndex})):null,t?s.a.createElement(I,{vm:r,onRequestClose:o}):null,a?s.a.createElement(R,{vm:r,onRequestClose:i}):null,this.state.prompt?s.a.createElement(_.a,{label:this.state.prompt.message,title:this.state.prompt.title,noInput:!0,onCancel:this.handlePromptClose,onOk:this.handleDeleteCostume}):null)}}L.propTypes={backdropLibraryVisible:o.a.bool,costumeLibraryVisible:o.a.bool,editingTarget:o.a.string,onNewLibraryBackdropClick:o.a.func.isRequired,onNewLibraryCostumeClick:o.a.func.isRequired,onRequestCloseBackdropLibrary:o.a.func.isRequired,onRequestCloseCostumeLibrary:o.a.func.isRequired,sprites:o.a.shape({id:o.a.shape({costumes:o.a.arrayOf(o.a.shape({url:o.a.string,name:o.a.string.isRequired,skinId:o.a.number}))})}),stage:o.a.shape({sounds:o.a.arrayOf(o.a.shape({name:o.a.string.isRequired}))}),vm:o.a.instanceOf(c.a)};n.default=Object(y.a)("Costume Tab")(Object(g.connect)(({targets:e,modals:n})=>({editingTarget:e.editingTarget,sprites:e.sprites,stage:e.stage,costumeLibraryVisible:n.costumeLibrary,backdropLibraryVisible:n.backdropLibrary}),e=>({onNewLibraryBackdropClick:n=>{n.preventDefault(),d.b.isInMblock5Env()?m.a.emit(p.a.layout.openBackdropLibrary):e(Object(T.i)())},onNewLibraryCostumeClick:n=>{n.preventDefault(),d.b.isInMblock5Env()?m.a.emit(p.a.layout.openCostumeLibrary):e(Object(T.j)())},onRequestCloseBackdropLibrary:()=>{e(Object(T.a)())},onRequestCloseCostumeLibrary:()=>{e(Object(T.b)())}}))(L))},876:function(e,n,t){"use strict";var a=t(3),o=t.n(a),i=t(0),s=t.n(i),r=t(8),l=t.n(r),c=t(883),d=t.n(c);const m=({img:e,iconFontType:n,className:t,title:a,onClick:o,disabled:i})=>s.a.createElement("div",{className:l()(d.a.container,t,i?d.a.disabled:null),role:"button",onClick:i?null:o},n?s.a.createElement("svg",{className:d.a.icon,width:20,height:20,"aria-hidden":"true",fill:"var(--PRIMARY-COLOR)"},s.a.createElement("use",{xlinkHref:"#icon-"+n})):s.a.createElement("img",{className:d.a.icon,src:e}),s.a.createElement("div",{className:d.a.title},a));m.propTypes={className:o.a.string,disabled:o.a.bool,img:o.a.string,iconFontType:o.a.string,onClick:o.a.func.isRequired,title:o.a.oneOfType([o.a.string.isRequired,o.a.object.isRequired])},n.a=m},879:function(e,n,t){var a=t(880);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0};t(21)(a,o);a.locals&&(e.exports=a.locals)},880:function(e,n,t){(n=e.exports=t(20)(!1)).push([e.i,"/* origin is 0.625rem 0.55rem 0.6rem */\n\n/* layout contants from `layout-constants.js` */\n\n/* 3.6rem; */\n\n/* blocks 区样式 */\n\n/* mobile style */\n\n/* Theme2 */\n\n/* 通用的间隔 */\n\n/* 圆角大小 */\n\n/* 弹窗标题高度 */\n\n/* 弹窗底部高度 */\n\n/* 侧边栏阴影 */\n\n/*\n  舞台下方编辑区域、代码编辑主区域、toolbox 区域\n*/\n\n/* #E5F0FF */\n\n/* #E9F1FC */\n\n/* #D9E3F2 */\n\n/* 90% transparent version of motion-primary */\n\n/* #FFFFFF */\n\n/* 25% transparent version of ui-white */\n\n/* 15% transparent version of black */\n\n/* #575E75 */\n\n/* #4C97FF */\n\n/* #3373CC */\n\n/* 35% transparent version of motion-primary */\n\n/* #FF661A */\n\n/* #E64D00 */\n\n/* #CF63CF */\n\n/* #BD42BD */\n\n/* #FFAB19 */\n\n/* #FF8C1A */\n\n/* #0FBD8C */\n\n/* 主页面背景颜色 */\n\n/* tab 栏常规 */\n\n/* 主色调颜色（蓝色）：包含：选中的字体颜色、主要按钮颜色 */\n\n/* border 颜色 */\n\n/* 灰色提示文字颜色 */\n\n/* 辅助文字颜色 */\n\n/* 分割线颜色 */\n\n/* 一般字体颜色 */\n\n/* 主要按钮hover颜色 */\n\n/* 按钮点击颜色 */\n\n/* 危险按钮颜色 */\n\n/* 危险按钮hover颜色 */\n\n/* mobile style */\n\n/* 25% transparent version of ui-white */\n\n.asset-panel_wrapper {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    background: white;\n    font-size: 0.85rem;\n    z-index: 90;\n    border-radius: 12px;\n}\n\n.asset-panel_detail-area {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -webkit-flex-shrink: 0;\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n    border-left: 1px solid var(--LINE-COLOR);\n    overflow: auto;\n}\n\n/* PaintEditor组件中的弹窗层级 */\n\n.Popover-below {\n    z-index: 1500;\n}\n\n.asset-panel_rtl .asset-panel_selector {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n    direction: rtl;\n}\n\n.asset-panel_rtl .asset-panel_detail-area {\n    border-right: 1px solid var(--LINE-COLOR);\n    border-left: 0;\n}\n",""]),n.locals={wrapper:"asset-panel_wrapper","detail-area":"asset-panel_detail-area",detailArea:"asset-panel_detail-area",rtl:"asset-panel_rtl",selector:"asset-panel_selector"}},881:function(e,n,t){var a=t(882);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0};t(21)(a,o);a.locals&&(e.exports=a.locals)},882:function(e,n,t){(n=e.exports=t(20)(!1)).push([e.i,"/*\n  舞台下方编辑区域、代码编辑主区域、toolbox 区域\n*/\n/* #E5F0FF */\n/* #E9F1FC */\n/* #D9E3F2 */\n/* 90% transparent version of motion-primary */\n/* #FFFFFF */\n/* 25% transparent version of ui-white */\n/* 15% transparent version of black */\n/* #575E75 */\n/* #4C97FF */\n/* #3373CC */\n/* 35% transparent version of motion-primary */\n/* #FF661A */\n/* #E64D00 */\n/* #CF63CF */\n/* #BD42BD */\n/* #FFAB19 */\n/* #FF8C1A */\n/* #0FBD8C */\n/* 主页面背景颜色 */\n/* tab 栏常规 */\n/* 主色调颜色（蓝色）：包含：选中的字体颜色、主要按钮颜色 */\n/* border 颜色 */\n/* 灰色提示文字颜色 */\n/* 辅助文字颜色 */\n/* 分割线颜色 */\n/* 一般字体颜色 */\n/* 主要按钮hover颜色 */\n/* 按钮点击颜色 */\n/* 危险按钮颜色 */\n/* 危险按钮hover颜色 */\n/* mobile style */\n/* 25% transparent version of ui-white */\n/* origin is 0.625rem 0.55rem 0.6rem */\n/* layout contants from `layout-constants.js` */\n/* 3.6rem; */\n/* blocks 区样式 */\n/* mobile style */\n/* Theme2 */\n/* 通用的间隔 */\n/* 圆角大小 */\n/* 弹窗标题高度 */\n/* 弹窗底部高度 */\n/* 侧边栏阴影 */\n.selector_wrapper {\n    width: 150px;\n    position: relative;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    border-radius: 12px 0 0 12px;\n}\n.selector_new-buttons {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n    margin: 1.25rem 0;\n    color: hsla(215, 100%, 65%, 1);\n    text-align: center;\n}\n.selector_new-button {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 0.75rem;\n    cursor: pointer;\n    -webkit-transition: 0.2s;\n    -o-transition: 0.2s;\n    transition: 0.2s;\n}\n.selector_new-button:hover {\n    -webkit-transform: scale(1.2);\n        -ms-transform: scale(1.2);\n            transform: scale(1.2);\n}\n.selector_new-button + .selector_new-button {\n    margin-top: 1.25rem;\n}\n.selector_new-button-icon + .selector_new-button-label {\n    margin-top: 0.5rem;\n}\n.selector_list-area {\n    /* Must have some height (recalculated by flex-grow) in order to scroll */\n    padding: .5rem;\n    height: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    overflow-y: auto;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.selector_list-item {\n    width: 5rem;\n    min-height: 5rem;\n    margin: .5rem auto;\n}\n.selector_list-item > canvas + div {\n    margin-top: .5rem;\n}\n.selector_placeholder {\n    background: black;\n    -webkit-filter: opacity(15%) brightness(20%);\n            filter: opacity(15%) brightness(20%);\n}\n@media only screen and (max-width: 1249px) {\n    .selector_wrapper {\n        width: 80px;\n    }\n\n    .selector_list-item {\n        width: 4rem;\n        min-height: 4rem;\n    }\n}",""]),n.locals={wrapper:"selector_wrapper","new-buttons":"selector_new-buttons",newButtons:"selector_new-buttons","new-button":"selector_new-button",newButton:"selector_new-button","new-button-icon":"selector_new-button-icon",newButtonIcon:"selector_new-button-icon","new-button-label":"selector_new-button-label",newButtonLabel:"selector_new-button-label","list-area":"selector_list-area",listArea:"selector_list-area","list-item":"selector_list-item",listItem:"selector_list-item",placeholder:"selector_placeholder"}},883:function(e,n,t){var a=t(884);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0};t(21)(a,o);a.locals&&(e.exports=a.locals)},884:function(e,n,t){(n=e.exports=t(20)(!1)).push([e.i,'/*\n  舞台下方编辑区域、代码编辑主区域、toolbox 区域\n*/\n/* #E5F0FF */\n/* #E9F1FC */\n/* #D9E3F2 */\n/* 90% transparent version of motion-primary */\n/* #FFFFFF */\n/* 25% transparent version of ui-white */\n/* 15% transparent version of black */\n/* #575E75 */\n/* #4C97FF */\n/* #3373CC */\n/* 35% transparent version of motion-primary */\n/* #FF661A */\n/* #E64D00 */\n/* #CF63CF */\n/* #BD42BD */\n/* #FFAB19 */\n/* #FF8C1A */\n/* #0FBD8C */\n/* 主页面背景颜色 */\n/* tab 栏常规 */\n/* 主色调颜色（蓝色）：包含：选中的字体颜色、主要按钮颜色 */\n/* border 颜色 */\n/* 灰色提示文字颜色 */\n/* 辅助文字颜色 */\n/* 分割线颜色 */\n/* 一般字体颜色 */\n/* 主要按钮hover颜色 */\n/* 按钮点击颜色 */\n/* 危险按钮颜色 */\n/* 危险按钮hover颜色 */\n/* mobile style */\n/* 25% transparent version of ui-white */\n.icon-button_container {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    -webkit-transition: 0.2s;\n    -o-transition: 0.2s;\n    transition: 0.2s;\n    font-size: 0.75rem;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    color: hsla(215, 100%, 65%, 1);\n}\n.icon-button_container:hover {\n    opacity: .75;\n}\n.icon-button_container:active img{\n    -webkit-transform: translate3d(0, 0, 0) scale(.8);\n            transform: translate3d(0, 0, 0) scale(.8);\n}\n.icon-button_container + .icon-button_container {\n    margin-top: 1.25rem;\n}\n.icon-button_title {\n    margin-top: 0.5rem;\n    white-space: nowrap;\n    color: var(--PRIMARY-COLOR);\n}\n.icon-button_disabled {\n    opacity: 0.5;\n    pointer-events: none;\n}\n.icon-button_icon{\n    width: 20px;\n    height: 20px;\n}\n',""]),n.locals={container:"icon-button_container",title:"icon-button_title",disabled:"icon-button_disabled",icon:"icon-button_icon"}},886:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(8),s=t.n(i),r=t(13),l=t(3),c=t.n(l),d=t(252),m=t(876),p=t(55),u=t(881),b=t.n(u),g=t(253),h=t(254);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}const x=e=>{const{buttons:n,items:t,dragType:a,selectedItemIndex:i,onDeleteClick:l,onItemClick:c,onDuplicateClick:p,containerRef:u,className:h,ordering:x,draggingType:w,draggingIndex:C,onAddSortable:k,onRemoveSortable:y,onExportClick:v,...F}=e,_=w===a;return o.a.createElement(r.a,{className:s()(b.a.wrapper,h),componentRef:u},o.a.createElement(r.a,{className:b.a.listArea},t.map((e,n)=>o.a.createElement(g.a,{key:e.name,index:_?x.indexOf(n):n,onAddSortable:k,onRemoveSortable:y},o.a.createElement(d.a,f({className:s()(b.a.listItem,{[b.a.placeholder]:_&&n===C}),asset:e.asset,costumeURL:e.url,details:e.details,dragPayload:e.dragPayload,dragType:a,id:n,index:n,number:n+1,name:e.name,selected:n===i,onClick:c,onDeleteButtonClick:l,onDuplicateButtonClick:p},F))))),o.a.createElement(r.a,{className:b.a.newButtons},n.map(({message:e,img:n,iconFontType:t,onClick:a},i)=>o.a.createElement(m.a,{img:n,iconFontType:t,key:i,title:e,onClick:a}))))};x.propTypes={buttons:c.a.arrayOf(c.a.shape({message:c.a.node.isRequired,img:c.a.string,iconFontType:c.a.string,onClick:c.a.func.isRequired})),items:c.a.arrayOf(c.a.shape({url:c.a.string,name:c.a.string.isRequired})),dragType:c.a.oneOf(Object.keys(p.a)),onDeleteClick:c.a.func,onItemClick:c.a.func.isRequired,selectedItemIndex:c.a.number.isRequired};var w=Object(h.a)(x),C=t(879),k=t.n(C);function y(){return(y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}const v=e=>o.a.createElement(r.a,{className:s()(k.a.wrapper,{[k.a.rtl]:e.rtl})},o.a.createElement(w,y({className:k.a.selector},e)),o.a.createElement(r.a,{className:k.a.detailArea},e.children));v.propTypes={...w.propTypes};n.a=v}}]);
//# sourceMappingURL=mblock.591e1b091573b8fd.js.map