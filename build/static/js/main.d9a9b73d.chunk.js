(this["webpackJsonpnews-reader"]=this["webpackJsonpnews-reader"]||[]).push([[0],{119:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(25),i=t.n(r),s=(t(90),t(91),t(38)),o=t.n(s),l=t(53),u=t(13),j=t(180),d=t(170),p=t(175),h=t(178),x=t(176),m=t(177),b=t(179),f=t(172),g=t(174),O=t(181),v=t(173),y=t(182),w=t(75),N=t(184),k=t(168),C=t(74),F=t.n(C),T=t(169),I=t(2);var P=function(e){var n,t=e.onClose,a=e.selectedValue,c=e.open,r=e.data,i=r.hasOwnProperty("data")?function(e){var n={};return e.forEach((function(e){n.hasOwnProperty(e.TopicName)||(n[e.TopicName]={TopicName:e.TopicName,clips:[]}),n[e.TopicName].clips.push(e)})),Object.keys(n).map((function(e){return n[e]}))}(r.data):[],s=r.hasOwnProperty("data")?i[0].clips[0].PersonFullName:"";return Object(I.jsx)(T.a,{onClose:function(){t(a)},open:c,scroll:"body",children:Object(I.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",margin:"20px"},children:[Object(I.jsxs)(g.a,{sx:{display:"flex",margin:"10px",alignItems:"flex-end"},children:[Object(I.jsx)("img",{src:"/images/unsplash-senate-building.jpg",height:"200px",width:"200px"}),Object(I.jsx)(v.a,{variant:"h4",sx:{margin:"0 10px 0 10px"},children:s})]}),Object(I.jsx)(v.a,{variant:"h6",sx:{alignSelf:"center"},children:"Recent Discussions"}),(n=i,Object(I.jsx)("div",{children:n.map((function(e){return Object(I.jsxs)("div",{children:[Object(I.jsx)(v.a,{variant:"h6",sx:{margin:"10px"},children:e.TopicName}),e.clips.map((function(e){return Object(I.jsxs)(g.a,{sx:{display:"flex",margin:"10px",alignItems:"center"},children:[Object(I.jsxs)(v.a,{children:[e.VideoName," ",e.StartTime," - ",e.EndTime," "]}),Object(I.jsx)(d.a,{href:e.VideoURL,children:" Watch "})]})}))]})}))}))]})})},S=t(55),D=t.n(S),E=Object(w.a)(),R=Object(k.a)((function(e){return{toolbar:{backgroundColor:"#5B8C5A"},intro:{margin:"20vh 0 20vh 0"},font:{color:"#222"},subFont:{color:"#696969"}}})),B=function(e,n){return Object(I.jsx)(c.a.Fragment,{children:e.map((function(e){return Object(I.jsx)(f.a,{item:!0,xs:12,sm:6,md:4,children:Object(I.jsx)(p.a,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},children:Object(I.jsxs)(g.a,{sx:{flexDirection:"column",justifyContent:"space-between",alignItems:"center"},children:[Object(I.jsx)(x.a,{children:Object(I.jsx)(m.a,{className:"card-img",component:"img",sx:{width:"180px",height:"240px"},image:e.imageUrl,alt:"random"})}),Object(I.jsx)(h.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(I.jsx)(d.a,{size:"small",onClick:function(){return n(e.FullName)},children:e.FullName})})]})})},e.title)}))})},H=function(e){if(void 0===e||!e.hasOwnProperty("data"))return console.log("Err - Person query result undefined."),[];var n=e.data.Items,t=[];return n.forEach((function(e){var n={imageUrl:"/images/unsplash-senate-building.jpg",FullName:e.FullName};t.push(n)})),t};function L(){var e=R(),n=Object(a.useState)(!1),t=Object(u.a)(n,2),c=t[0],r=t[1],i=Object(a.useState)([]),s=Object(u.a)(i,2),d=s[0],p=s[1],h=Object(a.useState)({}),x=Object(u.a)(h,2),m=x[0],w=x[1];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()("/news-reader/people").catch((function(e){console.log("request failed.")}));case 2:n=e.sent,t=H(n),p(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var k=function(e){function n(){return(n=Object(l.a)(o.a.mark((function n(){var t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D.a.post("/news-reader/clips",{params:{fullName:e}}).catch((function(e){console.log("request failed.")}));case 2:t=n.sent,w(null!=t?t:{}),r(!0);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()};return Object(I.jsxs)("div",{children:[Object(I.jsxs)(N.a,{theme:E,children:[Object(I.jsx)(b.a,{}),Object(I.jsxs)(g.a,{sx:{display:"flex",flexDirection:"column",bgcolor:"background.paper",flexGrow:1,p:0},children:[Object(I.jsx)(j.a,{sx:{position:"fixed",zIndex:E.zIndex.drawer+1},children:Object(I.jsxs)(O.a,{className:e.toolbar,children:[Object(I.jsx)(F.a,{sx:{mr:2}}),Object(I.jsx)(v.a,{variant:"h6",color:"inherit",noWrap:!0,children:"HearingRoom"})]})}),Object(I.jsx)(O.a,{}),Object(I.jsxs)(y.a,{className:e.intro,maxWidth:"sm",children:[Object(I.jsx)(v.a,{component:"h1",variant:"h2",align:"center",className:e.font,gutterBottom:!0,children:"HearingRoom"}),Object(I.jsx)(v.a,{variant:"h6",align:"center",className:e.subFont,paragraph:!0,children:"HearingRoom combines Symbl.ai and Machine Learning to create a catalogue of speaking points from various political figures."}),Object(I.jsx)(v.a,{variant:"h6",align:"center",className:e.subFont,paragraph:!0,children:"The main topics and interests of figures are viewable from this easy to use web app."})]}),Object(I.jsxs)(y.a,{sx:{py:0},maxWidth:"md",children:[Object(I.jsx)(v.a,{variant:"h3",align:"center",sx:{marginBottom:"10vh"},children:"Candidates"}),Object(I.jsx)(f.a,{container:!0,spacing:4,children:B(d,(function(e){k(e)}))})]})]}),Object(I.jsxs)(g.a,{sx:{bgcolor:"background.paper",p:6},component:"footer",children:[Object(I.jsx)(v.a,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p",children:"Thanks for checking out our hackathon project!"}),Object(I.jsx)(W,{})]})]}),Object(I.jsx)(P,{open:c,onClose:function(e){r(!1)},data:m})]})}function W(){return Object(I.jsxs)(v.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 HearingRoom Hackathon Team ",(new Date).getFullYear()]})}var q=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(L,{})})},z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,185)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(q,{})}),document.getElementById("root")),z()},90:function(e,n,t){},91:function(e,n,t){}},[[119,1,2]]]);
//# sourceMappingURL=main.d9a9b73d.chunk.js.map