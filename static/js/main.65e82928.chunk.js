(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(11),u=a(1),o=a(13),d=a(5),m="GET_MAIN_INFO",s="GET_TIME",p="GET_DATE",h="GET_LINK",v=[];var E={};var f="";var g="";var y=Object(u.combineReducers)({reducerMainInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case m:return n;default:return e}},reducerDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case p:return n;default:return e}},reducerTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case s:return n;default:return e}},reducerLink:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case h:return n;default:return e}}}),b=a(14),k=a(15),C=a(17),T=a(16),j=a(18),w=function(e){return{type:m,payload:e}},I=function(e){return{type:s,payload:e}},N=function(e){return{type:p,payload:e}},_=function(e){return{type:h,payload:e}},O=(a(28),["january","february","march","april","may","june","july","august","september","october","november","december"]),x=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(C.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={arr:[],date:{},time:"10:00",link:"",reminder:!1},a.handleChangeMainInfo=function(e){var t=e.target.value.split("\n");t.splice(0,1),t.splice(2,4),t.splice(4,1),t.splice(7),a.setState({arr:t})},a.handleChangeLink=function(e){var t=e.target.value;a.setState({link:t})},a.handleChangeDate=function(e){var t=e.target.value;if(t){var n=t.split("-"),r=n[1].replace(/^0+/,"");a.setState({date:{month:O[r-1],day:n[2]}})}else a.setState({date:{}})},a.handleChangeReminder=function(e){a.setState({reminder:e.target.checked})},a.handleChangeTime=function(e){var t=e.target.value;a.setState({time:t})},a.handleSubmit=function(e){e.preventDefault(),a.props.getMainInfo(a.state.arr),a.props.getDate(a.state.date),a.props.getTime(a.state.time),a.props.getLink(a.state.link)},a}return Object(j.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e,t=this.state.reminder,a=this.props,n=a.reducerDate,l=a.reducerTime,c=a.reducerMainInfo,i=a.reducerLink;return e=this.state.reminder?r.a.createElement("div",null,r.a.createElement("pre",null,"$natural on the ",n.day,"th of ",n.month," at ",l," send @everyone"),r.a.createElement("pre",null,c[4]),r.a.createElement("pre",null,"\u0421\u0442\u0430\u0440\u0442: ",c[0]," ( ",c[1]," )"),r.a.createElement("pre",null,c[5]),r.a.createElement("pre",null,c[6]),r.a.createElement("pre",null,i," to #\u0430\u043d\u043e\u043d\u0441 ")):r.a.createElement("div",null,r.a.createElement("pre",null,"@everyone"),r.a.createElement("pre",null,c[4]),r.a.createElement("pre",null,"\u0421\u0442\u0430\u0440\u0442: ",c[0]," ( ",c[1]," )"),r.a.createElement("pre",null,c[5]),r.a.createElement("pre",null,c[6]),r.a.createElement("pre",null,i)),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("textarea",{onChange:this.handleChangeMainInfo,className:"textarea header__textarea",placeholder:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043e\u043d\u043e\u0432\u0435"}),r.a.createElement("input",{type:"text",onChange:this.handleChangeLink,className:"link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u043e\u043d\u0432\u043e\u0439"})),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",onChange:this.handleChangeReminder}),"Reminder-Bot")),r.a.createElement("div",{className:"flexbox"},r.a.createElement("div",null,r.a.createElement("input",{type:"date",onChange:this.handleChangeDate,className:"input__time date",disabled:!t}),r.a.createElement("input",{type:"time",onChange:this.handleChangeTime,className:"input__time time",disabled:!t,value:this.state.time})),r.a.createElement("div",null,r.a.createElement("button",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))),r.a.createElement("hr",null),e)),r.a.createElement("div",{className:"column"},r.a.createElement("textarea",{className:"textarea textarea__right",placeholder:"\u0414\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"}))))}}]),t}(n.Component),D=Object(d.b)(function(e){return{reducerMainInfo:e.reducerMainInfo,reducerTime:e.reducerTime,reducerDate:e.reducerDate,reducerLink:e.reducerLink}},function(e){return Object(u.bindActionCreators)({getMainInfo:w,getTime:I,getDate:N,getLink:_},e)})(x),M=(a(29),Object(u.createStore)(y,Object(i.composeWithDevTools)(Object(u.applyMiddleware)(o.a))));c.a.render(r.a.createElement(d.a,{store:M},r.a.createElement(D,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.65e82928.chunk.js.map