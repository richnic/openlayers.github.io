(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{291:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(3),i=a(26),o=a(96),c=a(63),g=a(12),s=a(2),w=a(10),d=a(85),h=a(5),u=a(20);function m(e,t){return new w.c({image:new d.a({anchor:[.5,.96],crossOrigin:"anonymous",src:e,img:t,imgSize:t?[t.width,t.height]:void 0})})}var l=new n.a(new i.a([0,0]));l.set("style",m("data/icon.png",void 0));var v=new r.a({layers:[new h.a({source:new c.a({layer:"watercolor"})}),new u.a({style:function(e){return e.get("style")},source:new g.a({features:[l]})})],target:document.getElementById("map"),view:new s.a({center:[0,0],zoom:3})}),p={},y=new o.a({style:function(e){var t=e.get("style").getImage().getImage();if(!p[t.src]){var a=document.createElement("canvas"),n=a.getContext("2d");a.width=t.width,a.height=t.height,n.drawImage(t,0,0,t.width,t.height);for(var r=n.getImageData(0,0,a.width,a.height),i=r.data,o=0,c=i.length;o<c;o+=o%4==2?2:1)i[o]=255-i[o];n.putImageData(r,0,0),p[t.src]=m(void 0,a)}return p[t.src]}});v.addInteraction(y),v.on("pointermove",(function(e){v.getTargetElement().style.cursor=v.hasFeatureAtPixel(e.pixel)?"pointer":""}))}},[[291,0]]]);
//# sourceMappingURL=icon-negative.js.map