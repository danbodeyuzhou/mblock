(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1280:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(26),r=a(19),i=a(4),m=a.n(i),c=a(13),o=a(1163),p=a(1176),h=a(1174),E=a(67);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class g extends n.a.Component{constructor(e){super(e),d(this,"handleCancel",()=>{c.a.replace("/")}),d(this,"handleSubmit",()=>{const{name:e}=this.state;this.validNewName(this.state.name)&&(this.props.saveProject(!0,{name:e}),c.a.replace("/"))}),d(this,"renderTitle",()=>{const{intlr:e}=this.props,{params:t}=this.props.match;return"tomy"===t.type?n.a.createElement("div",{className:"pwd-title title-tac"},e.messages["MENU.FILE.SAVEMY"]):n.a.createElement("div",{className:"pwd-title title-tac"},e.messages["MENU.FILE.SAVEAS"])}),d(this,"handleChange",e=>{const t=m.a.trim(e.target.value);this.validNewName(t,!0)}),d(this,"validNewName",(e,t=!1)=>{const{intlr:a}=this.props;return t||!m.a.isNull(e)&&""!==e?e.length>48&&e.length>=this.state.name.length?(this.setState({errMsg:a.messages["FORM.FIELD.NEWNAME.MAX.MSG"]}),!1):(this.setState({name:e,errMsg:""}),!0):(this.setState({errMsg:a.messages["FORM.FIELD.NEWNAME.REQUIRE.MSG"]}),!1)});const{project:t}=e,{params:a}=e.match;this.state={name:r.a.getNewProjectName(t.name||a.name,t.projects),errMsg:""}}render(){const{intlr:e}=this.props,t=this.state,a=""===t.errMsg?{marginTop:"10px"}:{marginTop:"10px",borderColor:"#f5222d"};return n.a.createElement(o.a,{visible:!0,title:this.renderTitle(),width:"100%",className:"small-modal",maskClosable:!1,keyboard:!1,closable:!1,onCancel:this.handleCancel,footer:null},n.a.createElement(p.a,null,n.a.createElement(p.a.Item,null,n.a.createElement("label",{style:{paddingLeft:"2px"}},e.messages["MENU.FILE.SAVE.NAME"]),n.a.createElement(h.a,{style:a,value:t.name,type:"text",placeholder:e.messages["MENU.FILE.SAVE.NAME"],onChange:this.handleChange}),n.a.createElement("div",{className:"ant-form-explain",style:{color:"#f5222d"}},t.errMsg)),n.a.createElement(p.a.Item,{style:{marginTop:"40px"}},n.a.createElement(E.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{width:"100%",marginTop:"10px"},onClick:this.handleSubmit},e.messages["BUTTON.OK.TEXT"]),n.a.createElement(E.a,{style:{width:"100%",marginTop:"10px"},onClick:this.handleCancel},e.messages["BUTTON.CANCEL.TEXT"]))))}}t.default=Object(l.connect)(e=>({intlr:e.intlr,project:e.project}),e=>({saveProject:(t,a,s)=>e(t,a,s)}))(g)}}]);