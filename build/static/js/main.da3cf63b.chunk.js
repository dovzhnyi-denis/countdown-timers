(this.webpackJsonpcountdown_timers=this.webpackJsonpcountdown_timers||[]).push([[0],{18:function(e,t,n){e.exports=n(27)},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),l=n.n(o),c=n(17),s=n(5),i=n(6),u=n(8),m=n(7),d=n(29),f=n(28),h=n(16);function p(e,t,n,a){var r=(a-90)*Math.PI/180;return{x:e+n*Math.cos(r),y:t+n*Math.sin(r)}}function v(e,t,n,a,r){var o=p(e,t,n,r),l=p(e,t,n,a),c=r-a<=180?"0":"1";return["M",o.x,o.y,"A",n,n,0,c,0,l.x,l.y].join(" ")}function E(e,t,n,a,r){return(e-t)*(r-a)/(n-t)+a}var w=function(e){var t=e.radius;return r.a.createElement("svg",{className:"countdown-svg"},r.a.createElement("path",{fill:"none",stroke:"#f7c5bf",strokeWidth:"4",d:v(50,50,48,0,t)}))},y=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",endDate:0,timeLeft:0},e.millisecToDate=function(t){var n=t;e.years=Math.floor(n/31104e6),n-=31104e6*e.years,e.months=Math.floor(n/2592e6),n-=2592e6*e.months,e.days=Math.floor(n/864e5),n-=864e5*e.days,e.hours=Math.floor(n/36e5),n-=36e5*e.hours,e.min=Math.floor(n/6e4),n-=6e4*e.min,e.sec=Math.floor(n/1e3)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(){return{name:e.props.count.name,endDate:e.props.count.endDate}})),this.updateIntervalId=setInterval((function(){return e.updateCount()}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateIntervalId)}},{key:"updateCount",value:function(){var e=this.state.endDate-(new Date).getTime();e>0?this.setState((function(t){return{timeLeft:e}})):this.props.remove(this.state.name)}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.timeLeft;this.millisecToDate(a);var o=E(this.months,12,0,0,360),l=E(this.days,30,0,0,360),c=E(this.hours,24,0,0,360),s=E(this.min,60,0,0,360),i=E(this.sec,60,0,0,360);return r.a.createElement(f.a,{className:"d-flex justify-content-center"},r.a.createElement(h.a,{xs:4,className:"d-flex align-items-center  justify-content-center name"},r.a.createElement("p",null,n)),r.a.createElement(h.a,{className:"countdown-item"},r.a.createElement("p",null,this.years),r.a.createElement("span",null,"YEARS")),r.a.createElement(h.a,{className:"countdown-item"},r.a.createElement(w,{radius:o}),r.a.createElement("p",null,this.months),r.a.createElement("span",null,"MONTHS")),r.a.createElement(h.a,{className:"countdown-item"},r.a.createElement(w,{radius:l}),r.a.createElement("p",null,this.days),r.a.createElement("span",null,"DAYS")),r.a.createElement(h.a,{className:"countdown-item"},r.a.createElement(w,{radius:c}),r.a.createElement("p",null,this.hours),r.a.createElement("span",null,"HOURS")),r.a.createElement(h.a,{className:"countdown-item"},r.a.createElement(w,{radius:s}),r.a.createElement("p",null,this.min),r.a.createElement("span",null,"MINUTES")),r.a.createElement(h.a,{className:"countdown-item"},r.a.createElement(w,{radius:i}),r.a.createElement("p",null,this.sec),r.a.createElement("span",null,"SECONDS")),r.a.createElement(h.a,{xs:1},r.a.createElement("button",{type:"button",className:"close ml-3","aria-label":"Close",onClick:function(){return e.props.remove(n)}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))}}]),n}(r.a.Component);function b(e){var t,n=[];e.forEach((function(e){n.push(Object.assign({},e))}));do{t=0;for(var a=0;a<n.length;++a)if(a<n.length-1&&n[a].endDate>n[a+1].endDate){var r={};Object.assign(r,n[a]),Object.assign(n[a],n[a+1]),Object.assign(n[a+1],r),t=1}}while(t);return n}var g=n(30),N=n(31);function S(e){var t=e.addCountdown,n={};return r.a.createElement(f.a,{className:"bg-primary main-bar main-bar-h sticky-top"},r.a.createElement(h.a,{md:3,lg:4,className:"d-flex flex-row align-items-center justify-content-center "},r.a.createElement("h3",null,"Countdown Timers.")),r.a.createElement(h.a,{className:"d-flex flex-row justify-content-end align-items-center"},r.a.createElement("p",{className:"text-danger invalid-name",style:{visibility:"hidden"},ref:function(e){return n.errMsg=e}},"Unique name required")),r.a.createElement(g.a,{onSubmit:function(e){e.preventDefault(),t(n)||e.currentTarget.reset()},className:"d-flex flex-row align-items-center"},r.a.createElement(g.a.Row,null,r.a.createElement(h.a,{xs:5},r.a.createElement(g.a.Control,{type:"text",ref:function(e){return n.inputName=e},placeholder:"Enter countdown's name",required:!0})),r.a.createElement(h.a,{xs:3},r.a.createElement("input",{type:"date","aria-label":"input date",ref:function(e){return n.inputDate=e},required:!0})),r.a.createElement(h.a,null,r.a.createElement(N.a,{variant:"secondary",type:"submit",value:""},"Add Countdown")))))}n(26);var M=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={countdowns:[]},e.addCountdown=function(t){var n=t.errMsg,a=t.inputName,r=t.inputDate,o=a.value,l=r.value.match(/\d+/g);if(!l&&l.length>0)return n.innerHTML="Enter valid date",n.style.visibility="visible",-1;var s={name:o,endDate:new Date(l).getTime()};return e.state.countdowns.find((function(e){return e.name===o}))?(n.innerHTML="Unique name required",n.style.visibility="visible",-1):(e.setState((function(e){var t={countdowns:b([].concat(Object(c.a)(e.countdowns),[s]))};return n.style.visibility="hidden",localStorage.countdowns=JSON.stringify(t.countdowns),t})),0)},e.removeCountdown=function(t){e.setState((function(e){var n={countdowns:e.countdowns.filter((function(e){return e.name!==t}))};return localStorage.countdowns=JSON.stringify(n.countdowns),n}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("countdowns"));e?this.setState((function(){return{countdowns:e}})):this.setState((function(){return{countdowns:[]}}))}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{className:"bg-info"},r.a.createElement(S,{addCountdown:this.addCountdown}),r.a.createElement(f.a,null,r.a.createElement(h.a,null,this.state.countdowns.map((function(t){return r.a.createElement(y,{count:t,key:t.name,remove:e.removeCountdown})})))))}}]),n}(a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.da3cf63b.chunk.js.map