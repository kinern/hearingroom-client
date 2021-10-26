(this["webpackJsonpnews-reader"]=this["webpackJsonpnews-reader"]||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),i=n.n(c),s=(n(97),n(98),n(39)),o=n.n(s),l=n(58),j=n(13),u=n(169),x=n(176),h=n(177),d=n(178),p=n(172),b=n(179),f=n(171),m=n(180),g=n(181),O=n(170),v=n(175),y=n(81),w=n(182),N=n(163),k=n(80),C=n.n(k),F=n(164),S=n(173),T=n(166),I=n(168),H=n(2),D=function(e){for(var t=[],n=0,a=Object.entries(e);n<a.length;n++){var r=Object(j.a)(a[n],2),c=r[0],i=r[1];t.push({TopicName:c,clips:i})}return Object(H.jsx)("div",{children:t.map((function(e){return Object(H.jsxs)("div",{children:[Object(H.jsx)(O.a,{variant:"h6",sx:{margin:"10px"},children:B(e.TopicName)}),e.clips.map((function(e){return Object(H.jsxs)(f.a,{sx:{display:"flex",margin:"10px",alignItems:"center"},children:[Object(H.jsx)(O.a,{sx:{marginRight:"20px"},children:Object(H.jsx)("strong",{children:e.VideoName})}),Object(H.jsx)(p.a,{href:e.TimestampURL,variant:"outlined",children:" Watch "})]})}))]})}))})},B=function(e){return e&&e[0].toUpperCase()+e.slice(1)},R=function(e){for(var t=[],n=0,a=Object.entries(e);n<a.length;n++){var r=Object(j.a)(a[n],2),c=r[0],i=r[1];t.push({title:c,value:i})}return Object(H.jsx)(S.a,{sx:{margin:"0px"},children:t.map((function(e){return Object(H.jsxs)(T.a,{sx:{display:"flex",flexDirection:"row",margin:"0px",padding:"0px"},children:[Object(H.jsx)(O.a,{sx:{marginRight:"10px"},children:Object(H.jsx)("strong",{children:e.title})}),Object(H.jsx)(O.a,{children:e.value})]},e.title)}))})};var A=function(e){var t=e.onClose,n=e.selectedValue,a=e.open,r=e.data;if(!r.hasOwnProperty("data"))return null;var c=r.data.Items[0],i=c.FullName;return Object(H.jsx)(F.a,{onClose:function(){t(n)},open:a,scroll:"body",children:Object(H.jsxs)(f.a,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",margin:"20px"},children:[Object(H.jsxs)(f.a,{sx:{display:"flex",margin:"10px",alignItems:"flex-end"},children:[Object(H.jsx)(I.a,{alt:i,src:c.Headshot,sx:{width:200,height:200},variant:"rounded"}),Object(H.jsxs)(f.a,{sx:{display:"flex",flexDirection:"column",margin:"10px"},children:[Object(H.jsx)(O.a,{variant:"h4",children:c.FullName}),R(c.Info)]})]}),Object(H.jsx)(O.a,{variant:"h5",sx:{alignSelf:"center",marginTop:"20px"},children:"Recent Discussions"}),D(c.Topics)]})})},E=n(61),P=n.n(E),W=function(e){var t=e.classes;return Object(H.jsx)(v.a,{className:t.intro,maxWidth:"lg",children:Object(H.jsxs)(f.a,{sx:{maxWidth:"600px"},children:[Object(H.jsx)(O.a,{variant:"h3",className:t.introTitle,gutterBottom:!0,children:"See clips from public speakers,"}),Object(H.jsxs)(O.a,{variant:"h3",className:t.introTitle,gutterBottom:!0,children:["with ",Object(H.jsx)("strong",{children:"topics you care about."})]}),Object(H.jsxs)("div",{style:{marginTop:"45px"},children:[Object(H.jsx)(O.a,{variant:"h6",className:t.introSubtitle,paragraph:!0,children:"HearingRoom combines Symbl.ai and Machine Learning to create a catalogue of speaking points from videos of public figures."}),Object(H.jsx)(O.a,{variant:"h6",className:t.introSubtitle,paragraph:!0,children:"Each person has a list of topics and links to time-stamped videos that go directly to where they spoke."})]})]})})},z=Object(y.a)(),L=Object(N.a)((function(e){return{toolbar:{backgroundColor:"#5B8C5A"},intro:{margin:"20vh 0 20vh 0"},font:{color:"#222"},subFont:{color:"#696969"},introTitle:{color:"#222",textAlign:"left",whiteSpace:"nowrap"},introSubtitle:{color:"#696969",textAlign:"left"},footer:{backgroundColor:"#5B8C5A",color:"#fff",marginTop:"20vh"}}})),q=function(e,t){return Object(H.jsx)(r.a.Fragment,{children:e.map((function(e){return Object(H.jsx)(u.a,{item:!0,xs:12,sm:6,md:4,children:Object(H.jsxs)(x.a,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},children:[Object(H.jsx)(h.a,{className:"card-img",component:"img",sx:{height:"240px"},image:e.Headshot,alt:e.FullName}),Object(H.jsx)(d.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(H.jsx)(p.a,{size:"small",onClick:function(){return t(e.FullName)},children:e.FullName})})]})},e.title)}))})},J=function(e){if(void 0===e||!e.hasOwnProperty("data"))return console.log("Err - Person query result undefined."),[];var t=e.data.Items,n=[];return t.forEach((function(e){console.log(e.Headshot);var t={Headshot:e.Headshot,FullName:e.FullName};n.push(t)})),n};function M(){var e=L(),t=Object(a.useState)(!1),n=Object(j.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)([]),s=Object(j.a)(i,2),x=s[0],h=s[1],d=Object(a.useState)({}),p=Object(j.a)(d,2),y=p[0],N=p[1];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()("/news-reader/all-people").catch((function(e){console.log("request failed.")}));case 2:t=e.sent,n=J(t),h(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var k=function(e){function t(){return(t=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.post("/news-reader/person-details",{params:{fullName:e}}).catch((function(e){console.log("request failed.")}));case 2:null!=(n=t.sent)&&(N(n),c(!0));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()};return Object(H.jsxs)("div",{children:[Object(H.jsxs)(w.a,{theme:z,children:[Object(H.jsx)(b.a,{}),Object(H.jsxs)(f.a,{sx:{display:"flex",flexDirection:"column",bgcolor:"background.paper",flexGrow:1,p:0},children:[Object(H.jsx)(m.a,{sx:{position:"fixed",zIndex:z.zIndex.drawer+1},children:Object(H.jsxs)(g.a,{className:e.toolbar,children:[Object(H.jsx)(C.a,{sx:{mr:2,fontSize:40}}),Object(H.jsx)(O.a,{variant:"h6",color:"inherit",noWrap:!0,children:"HearingRoom"})]})}),Object(H.jsx)(g.a,{}),Object(H.jsx)(W,{classes:e}),Object(H.jsxs)(v.a,{sx:{py:0},maxWidth:"lg",children:[Object(H.jsx)(O.a,{variant:"h3",align:"left",sx:{marginBottom:"10vh"},children:"Speakers"}),Object(H.jsx)(u.a,{container:!0,spacing:4,children:q(x,(function(e){k(e)}))})]})]}),Object(H.jsxs)(f.a,{sx:{p:6},className:e.footer,component:"footer",children:[Object(H.jsx)(O.a,{variant:"subtitle1",align:"center",component:"p",children:"Thanks for checking out our hackathon project!"}),Object(H.jsx)(U,{})]})]}),Object(H.jsx)(A,{open:r,onClose:function(e){c(!1)},data:y})]})}function U(){return Object(H.jsxs)(O.a,{variant:"body2",align:"center",children:["Copyright \xa9 HearingRoom Hackathon Team ",(new Date).getFullYear()]})}var V=function(){return Object(H.jsx)("div",{className:"App",children:Object(H.jsx)(M,{})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,183)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(H.jsx)(r.a.StrictMode,{children:Object(H.jsx)(V,{})}),document.getElementById("root")),G()},97:function(e,t,n){},98:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.e8340716.chunk.js.map