webpackJsonp([1],{0:function(n,l,e){n.exports=e("cDNt")},YuZA:function(n,l){function e(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="YuZA"},cDNt:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=e("LMZF"),t=function(){},u=e("TMwh"),i=(e("U6yM"),function(){function n(n){this.http=n,this.years_available=[2012,2013,2014,2015,2016]}return n.prototype.yearsAvailable=function(){return this.years_available},n.prototype.get=function(n){return this.http.get("data/abdn_RoadSafety_Accidents_"+n+".json").map(this.extractData)},n.prototype.extractData=function(n){if(n.status<200||n.status>=300)throw new Error("Bad response status: "+n.status);this.service_data=n.json();for(var l=0;l<this.service_data.length;l++){var e=this.service_data[l];e.Longitude=parseFloat(e.Longitude),e.Latitude=parseFloat(e.Latitude)}return this.service_data},n.prototype.junctionDetail=function(n){var l;switch(n){case"0":l="Not near a junction";break;case"1":l="Roundabout";break;case"2":l="Mini Roundabout";break;case"3":l="T or staggered junction";break;case"4":l="Slip road";break;case"5":l="Crossroad";break;case"6":l="Junction with more than 4 arms (mpr RAB)";break;case"7":l="Using private drive or entrance";break;case"8":l="Other";break;default:l="Other"}return l},n.prototype.junctionControl=function(n){var l;switch(n){case"1":l="Authorised person";break;case"2":l="Automated traffic signal";break;case"3":l="Stop sign";break;case"4":l="Give way or uncontrolled";break;default:l="Unknown"}return l},n.prototype.pedestrianCrossingControl=function(n){var l;switch(n){case"0":l="None within 50 metres";break;case"1":l="Control by school crossing patrol";break;case"2":l="Control by authorised person";break;default:l="Unknown pedestrian crossing control"}return l},n.prototype.pedestrianCrossingFacilities=function(n){var l;switch(n){case"0":l="No crossing facility within 50 metres";break;case"1":l="Zebra Crossing";break;case"4":l="Pelican, puffin, toucan or similar light crossing";break;case"5":l="Pedestrian phase at traffic light junction";break;case"7":l="Footbridge or subway";break;case"8":l="Central refuge with no other controls";break;default:l="Unknown pedestrian crossing facility"}return l},n.prototype.roadType=function(n){var l;switch(n){case"1":l="Roundabout";break;case"2":l="One way street";break;case"3":l="Dual carriageway";break;case"6":l="Single carriageway";break;case"7":l="Slip road";break;case"9":l="Unknown road type";break;default:l="Unknown road type"}return l},n.prototype.weatherConditions=function(n){var l;switch(n){case"1":l="Fine";break;case"2":l="Raining";break;case"3":l="Snowing";break;case"4":l="Fine with high winds";break;case"5":l="Raining with high winds";break;case"6":l="Snowing with high winds";break;case"7":l="Fog or mist";break;case"8":l="Other";break;case"9":l="Unknown weather";break;default:l="Unknown weather"}return l},n.prototype.lightConditions=function(n){var l;switch(n){case"1":l="Daylight";break;case"4":l="Dark with lit street lights";break;case"5":l="Dark with unlit street lights";break;case"6":l="No Street Lights";break;case"7":l="Unknown lighting";break;default:l="Unknown lighting"}return l},n.prototype.roadSurfaceConditions=function(n){var l;switch(n){case"1":l="Dry";break;case"2":l="Wet / Damp";break;case"3":l="Snow";break;case"4":l="Frost / Ice";break;case"5":l="Flooded (surface water over 3cm deep)";break;default:l="Unknown road conditions"}return l},n.prototype.specialConditionsAtSite=function(n){var l;switch(n){case"0":l="None";break;case"1":l="Auto traffic signal out";break;case"2":l="Auto traffic signal partially defective";break;case"3":l="Permanent road signing or marking defective or obscured";break;case"4":l="Roadworks";break;case"5":l="Road surface defective";break;case"6":l="Oil or diesel";break;case"7":l="Mud";break;default:l="Unknown special conditions"}return l},n.prototype.carriagewayHazards=function(n){var l;switch(n){case"0":l="None";break;case"1":l="Dislodged vehicle load in carriageway";break;case"2":l="Other object in carriageway";break;case"3":l="Involvement with previous accident";break;case"6":l="Pedestrian in carriageway - not injured";break;case"7":l="Any animal in carriageway (except ridden horse)";break;default:l="Unknown carriageway hazards"}return l},n.prototype.policeOfficerAttendScene=function(n){var l;switch(n){case"1":l="Yes";break;case"2":l="No";break;default:l="Unknown"}return l},n.prototype.accidentSeverity=function(n){var l;switch(n){case"1":l="Fatal";break;case"2":l="Serious";break;case"3":l="Slight";break;default:l="Unknown"}return l},n}()),o=function(){function n(n){this.collisionData=n,this.lat=57.149717,this.lng=-2.094278,this.years_available=this.collisionData.yearsAvailable(),this.incident_count=0,this.infoWindowOpened=null}return n.prototype.ngOnInit=function(){this.changeYear(this.years_available[0])},n.prototype.changeYear=function(n){var l=this;this.infoWindowOpened=null,this.year_selected=n,this.collisionData.get(n).subscribe(function(n){l.data=n,l.incident_count=n.length})},n.prototype.clickedMarker=function(n,l,e){this.infoWindowOpened!==l&&(null!==this.infoWindowOpened&&this.infoWindowOpened.close(),this.infoWindowOpened=l)},n.prototype.aboutDialog=function(){console.log("tba")},n}(),r=e("hzkV"),c=e("ZsUR"),s=e("R1vt"),_=e("Un6q"),d=e("8Xfy"),b=e("57RD"),h=e("dY6p"),f=e("65yS"),g=e("MVht"),p=e("KdOF"),k=function(n){this.collisionData=n},m=a.V({encapsulation:2,styles:[],data:{}});function w(n){return a._14(0,[(n()(),a.X(0,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),a._13(1,null,["Accident index ",""])),(n()(),a._13(-1,null,["\n"])),(n()(),a.X(3,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),a._13(-1,null,["\n"])),(n()(),a.X(5,0,null,null,32,"table",[["border","0"],["width","100%"]],null,null,null,null,null)),(n()(),a._13(-1,null,["\n"])),(n()(),a.X(7,0,null,null,30,"tbody",[],null,null,null,null,null)),(n()(),a.X(8,0,null,null,8,"tr",[],null,null,null,null,null)),(n()(),a._13(-1,null,["\n    "])),(n()(),a.X(10,0,null,null,2,"td",[["width","50%"]],null,null,null,null,null)),(n()(),a.X(11,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),a._13(-1,null,["Junction Type"])),(n()(),a._13(-1,null,["\n    "])),(n()(),a.X(14,0,null,null,1,"td",[["width","50%"]],null,null,null,null,null)),(n()(),a._13(15,null,["",""])),(n()(),a._13(-1,null,["\n"])),(n()(),a._13(-1,null,["\n"])),(n()(),a.X(18,0,null,null,8,"tr",[],null,null,null,null,null)),(n()(),a._13(-1,null,["\n    "])),(n()(),a.X(20,0,null,null,2,"td",[],null,null,null,null,null)),(n()(),a.X(21,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),a._13(-1,null,["Junction Control"])),(n()(),a._13(-1,null,["\n    "])),(n()(),a.X(24,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),a._13(25,null,["",""])),(n()(),a._13(-1,null,["\n"])),(n()(),a._13(-1,null,["\n"])),(n()(),a.X(28,0,null,null,8,"tr",[],null,null,null,null,null)),(n()(),a._13(-1,null,["\n    "])),(n()(),a.X(30,0,null,null,2,"td",[],null,null,null,null,null)),(n()(),a.X(31,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),a._13(-1,null,["Road Type"])),(n()(),a._13(-1,null,["\n    "])),(n()(),a.X(34,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),a._13(35,null,["",""])),(n()(),a._13(-1,null,["\n"])),(n()(),a._13(-1,null,["\n"]))],null,function(n,l){var e=l.component;n(l,1,0,e.location.Accident_Index),n(l,15,0,e.collisionData.junctionDetail(e.location.Junction_Detail)),n(l,25,0,e.collisionData.junctionControl(e.location.Junction_Control)),n(l,35,0,e.collisionData.roadType(e.location.Road_Type))})}var y=e("SMsG"),v=e("YXpL"),X=e("V8+5"),D=e("ESfO"),C=e("ghl+"),S=e("OFGE"),F=e("l6RC"),W=e("yxpl"),j=e("vgc3"),x=e("Fb1h"),O=e("BfPg"),R=e("DCX4"),U=e("Ds4W"),A=e("9fk+"),M=e("mECe"),T=e("7PDj"),N=e("wW3n"),E=e("t+Rn"),L=e("pvRN"),P=e("Ioj9"),z=a.V({encapsulation:2,styles:[],data:{}});function Y(n){return a._14(0,[(n()(),a.X(0,0,null,null,2,"button",[["class","mat-menu-item"],["mat-menu-item",""],["role","menuitem"]],[[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0]],[[null,"click"],[null,"mouseenter"]],function(n,l,e){var t=!0,u=n.component;return"click"===l&&(t=!1!==a._7(n,1)._checkDisabled(e)&&t),"mouseenter"===l&&(t=!1!==a._7(n,1)._emitHoverEvent()&&t),"click"===l&&(t=!1!==u.changeYear(n.context.$implicit)&&t),t},c.c,c.b)),a.W(1,180224,[[2,4]],0,s.d,[a.i,_.b,d.f],null,null),(n()(),a._13(2,0,["\n        Data for ","\n    "]))],null,function(n,l){n(l,0,0,a._7(l,1)._highlighted,a._7(l,1)._triggersSubmenu,a._7(l,1)._getTabIndex(),a._7(l,1).disabled.toString(),a._7(l,1).disabled||null),n(l,2,0,l.context.$implicit)})}function I(n){return a._14(0,[(n()(),a.X(0,0,null,null,10,"agm-marker",[],null,[[null,"markerClick"]],function(n,l,e){var t=!0;return"markerClick"===l&&(t=!1!==n.component.clickedMarker(n.context.$implicit.label,a._7(n,5),n.context.index)&&t),t},null,null)),a.W(1,1720320,null,1,b.a,[h.a],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},{markerClick:"markerClick"}),a._11(603979776,4,{infoWindow:1}),(n()(),a._13(-1,null,["\n      "])),(n()(),a.X(4,0,null,null,5,"agm-info-window",[],null,null,null,f.b,f.a)),a.W(5,770048,[[4,4],["infoWindow",4]],0,g.a,[p.a,a.i],null,null),(n()(),a._13(-1,0,["\n        "])),(n()(),a.X(7,0,null,0,1,"markerInfo",[],null,null,null,w,m)),a.W(8,49152,null,0,k,[i],{location:[0,"location"]},null),(n()(),a._13(-1,0,["\n      "])),(n()(),a._13(-1,null,["\n    "]))],function(n,l){n(l,1,0,l.context.$implicit.Latitude,l.context.$implicit.Longitude,"https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=glyphish_walk|FFFF00"),n(l,5,0),n(l,8,0,l.context.$implicit)},null)}function H(n){return a._14(0,[(n()(),a.X(0,0,null,null,53,"div",[],null,null,null,null,null)),(n()(),a._13(-1,null,["\n  "])),(n()(),a.X(2,0,null,null,15,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,y.b,y.a)),a.W(3,4243456,null,1,v.a,[a.i,X.a,_.b],{color:[0,"color"]},null),a._11(603979776,1,{_toolbarRows:1}),(n()(),a._13(-1,0,["\n    "])),(n()(),a.X(6,0,null,0,1,"span",[["class","title"]],null,null,null,null,null)),(n()(),a._13(-1,null,["Aberdeen Traffic Collision Heatmap"])),(n()(),a._13(-1,0,["\n    "])),(n()(),a.X(9,16777216,null,0,7,"button",[["aria-haspopup","true"],["mat-icon-button",""]],[[8,"disabled",0]],[[null,"mousedown"],[null,"keydown"],[null,"click"]],function(n,l,e){var t=!0;return"mousedown"===l&&(t=!1!==a._7(n,11)._handleMousedown(e)&&t),"keydown"===l&&(t=!1!==a._7(n,11)._handleKeydown(e)&&t),"click"===l&&(t=!1!==a._7(n,11)._handleClick(e)&&t),t},D.b,D.a)),a.W(10,180224,null,0,C.b,[a.i,X.a,d.f],null,null),a.W(11,1196032,null,0,s.f,[S.a,a.i,a.H,s.b,[2,s.c],[8,null],[2,F.c],d.f],{_deprecatedMatMenuTriggerFor:[0,"_deprecatedMatMenuTriggerFor"]},null),(n()(),a._13(-1,0,["\n      "])),(n()(),a.X(13,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],null,null,null,W.b,W.a)),a.W(14,638976,null,0,j.b,[a.i,j.d,[8,null]],null,null),(n()(),a._13(-1,0,["more_vert"])),(n()(),a._13(-1,0,["\n    "])),(n()(),a._13(-1,0,["\n  "])),(n()(),a._13(-1,null,["\n\n  "])),(n()(),a.X(19,0,null,null,11,"mat-menu",[["x-position","before"]],null,null,null,c.d,c.a)),a.W(20,1228800,[["menu",4]],2,s.c,[a.i,a.t,s.a],null,null),a._11(603979776,2,{items:1}),a._11(335544320,3,{lazyContent:0}),(n()(),a._13(-1,0,["\n    "])),(n()(),a.S(16777216,null,0,1,null,Y)),a.W(25,802816,null,0,_.e,[a.H,a.E,a.o],{ngForOf:[0,"ngForOf"]},null),(n()(),a._13(-1,0,["\n    "])),(n()(),a.X(27,0,null,0,2,"button",[["class","mat-menu-item"],["mat-menu-item",""],["role","menuitem"]],[[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0]],[[null,"click"],[null,"mouseenter"]],function(n,l,e){var t=!0,u=n.component;return"click"===l&&(t=!1!==a._7(n,28)._checkDisabled(e)&&t),"mouseenter"===l&&(t=!1!==a._7(n,28)._emitHoverEvent()&&t),"click"===l&&(t=!1!==u.aboutDialog()&&t),t},c.c,c.b)),a.W(28,180224,[[2,4]],0,s.d,[a.i,_.b,d.f],null,null),(n()(),a._13(-1,0,["About"])),(n()(),a._13(-1,0,["\n  "])),(n()(),a._13(-1,null,["\n\n  "])),(n()(),a.X(32,0,null,null,13,"agm-map",[],[[2,"sebm-google-map-container",null]],null,null,x.b,x.a)),a._9(4608,null,h.a,h.a,[O.a,a.t]),a._9(4608,null,p.a,p.a,[O.a,a.t,h.a]),a._9(4608,null,R.a,R.a,[O.a,a.t]),a._9(4608,null,U.a,U.a,[O.a,a.t]),a._9(4608,null,A.a,A.a,[O.a,a.t]),a._9(4608,null,M.a,M.a,[O.a,a.t]),a._9(4608,null,T.a,T.a,[O.a,a.t]),a._9(512,null,O.a,O.a,[N.a,a.t]),a.W(41,770048,null,0,E.a,[a.i,O.a],{longitude:[0,"longitude"],latitude:[1,"latitude"],zoom:[2,"zoom"]},null),(n()(),a._13(-1,0,["\n    "])),(n()(),a.S(16777216,null,0,1,null,I)),a.W(44,802816,null,0,_.e,[a.H,a.E,a.o],{ngForOf:[0,"ngForOf"]},null),(n()(),a._13(-1,0,["\n  "])),(n()(),a._13(-1,null,["\n\n  "])),(n()(),a.X(47,0,null,null,5,"mat-card",[["class","mat-card"]],null,null,null,L.b,L.a)),a.W(48,49152,null,0,P.a,[],null,null),(n()(),a._13(-1,0,["\n    "])),(n()(),a.X(50,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),a._13(51,null,["Showing data for "," incidents in ","."])),(n()(),a._13(-1,0,["\n  "])),(n()(),a._13(-1,null,["\n\n"]))],function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,11,0,a._7(l,20)),n(l,14,0),n(l,25,0,e.years_available),n(l,41,0,e.lng,e.lat,12),n(l,44,0,e.data)},function(n,l){var e=l.component;n(l,2,0,a._7(l,3)._toolbarRows.length,!a._7(l,3)._toolbarRows.length),n(l,9,0,a._7(l,10).disabled||null),n(l,27,0,a._7(l,28)._highlighted,a._7(l,28)._triggersSubmenu,a._7(l,28)._getTabIndex(),a._7(l,28).disabled.toString(),a._7(l,28).disabled||null),n(l,32,0,!0),n(l,51,0,e.incident_count,e.year_selected)})}var J=a.T("app-root",o,function(n){return a._14(0,[(n()(),a.X(0,0,null,null,1,"app-root",[],null,null,null,H,z)),a.W(1,114688,null,0,o,[i],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),V=e("RyBE"),Z=e("S0PE"),q=e("MCDL"),B=e("4jwp"),$=e("9iV4"),G=e("w24y"),K=e("fAeS"),Q=e("niyx"),nn=e("wvx+"),ln=e("j5BN"),en=e("CZgk"),an=function(){},tn=e("q+Vp"),un=a.U(t,[o],function(n){return a._3([a._4(512,a.h,a.Q,[[8,[r.a,J]],[3,a.h],a.r]),a._4(5120,a.q,a._10,[[3,a.q]]),a._4(4608,_.g,_.f,[a.q,[2,_.j]]),a._4(4608,a.g,a.g,[]),a._4(5120,a.a,a.Z,[]),a._4(5120,a.o,a._5,[]),a._4(5120,a.p,a._8,[]),a._4(4608,V.c,V.r,[_.b]),a._4(6144,a.B,null,[V.c]),a._4(4608,V.f,V.g,[]),a._4(5120,V.d,function(n,l,e,a,t){return[new V.k(n,l),new V.o(e),new V.n(a,t)]},[_.b,a.t,_.b,_.b,V.f]),a._4(4608,V.e,V.e,[V.d,a.t]),a._4(135680,V.m,V.m,[_.b]),a._4(4608,V.l,V.l,[V.e,V.m]),a._4(5120,Z.a,q.d,[]),a._4(5120,Z.c,q.e,[]),a._4(4608,Z.b,q.c,[Z.a,Z.c]),a._4(5120,a.z,q.f,[V.l,Z.b,a.t]),a._4(6144,V.p,null,[V.m]),a._4(4608,a.F,a.F,[a.t]),a._4(4608,V.h,V.h,[_.b]),a._4(4608,V.i,V.i,[_.b]),a._4(4608,u.c,u.c,[]),a._4(4608,u.g,u.b,[]),a._4(5120,u.i,u.j,[]),a._4(4608,u.h,u.h,[u.c,u.g,u.i]),a._4(4608,u.f,u.a,[]),a._4(5120,u.d,u.k,[u.h,u.f]),a._4(6144,F.b,null,[_.b]),a._4(4608,F.c,F.c,[[2,F.b]]),a._4(4608,X.a,X.a,[]),a._4(4608,d.h,d.h,[X.a]),a._4(4608,d.g,d.g,[d.h,a.t,_.b]),a._4(136192,d.c,d.b,[[3,d.c],_.b]),a._4(5120,d.k,d.j,[[3,d.k],[2,d.i],_.b]),a._4(5120,d.f,d.d,[[3,d.f],a.t,X.a]),a._4(5120,B.c,B.a,[[3,B.c],a.t,X.a]),a._4(5120,B.f,B.e,[[3,B.f],X.a,a.t]),a._4(4608,S.g,S.g,[B.c,B.f,a.t,_.b]),a._4(5120,S.c,S.h,[[3,S.c],_.b]),a._4(4608,S.f,S.f,[B.f,_.b]),a._4(5120,S.d,S.k,[[3,S.d],_.b]),a._4(4608,S.a,S.a,[S.g,S.c,a.h,S.f,S.d,a.e,a.n,a.t,_.b]),a._4(5120,S.i,S.j,[S.a]),a._4(5120,s.b,s.g,[S.a]),a._4(5120,j.d,j.a,[[3,j.d],[2,$.a],V.c,[2,_.b]]),a._4(5120,G.b,G.c,[S.a]),a._4(4608,G.d,G.d,[S.a,a.n,[2,_.c],[2,G.a],G.b,[3,G.d],S.c]),a._4(4608,K.b,q.b,[a.z,V.b]),a._4(4608,Q.c,Q.c,[]),a._4(4608,Q.b,Q.b,[]),a._4(4608,N.a,nn.b,[nn.a,Q.c,Q.b]),a._4(4608,i,i,[u.d]),a._4(512,_.a,_.a,[]),a._4(1024,a.j,V.q,[]),a._4(1024,a.b,function(n){return[V.t(n)]},[[2,a.s]]),a._4(512,a.c,a.c,[[2,a.b]]),a._4(131584,a.e,a.e,[a.t,a.R,a.n,a.j,a.h,a.c]),a._4(512,a.d,a.d,[a.e]),a._4(512,V.a,V.a,[[3,V.a]]),a._4(512,u.e,u.e,[]),a._4(512,F.a,F.a,[]),a._4(256,ln.a,!0,[]),a._4(512,ln.c,ln.c,[[2,ln.a]]),a._4(512,X.b,X.b,[]),a._4(512,ln.e,ln.e,[]),a._4(512,d.a,d.a,[]),a._4(512,C.c,C.c,[]),a._4(512,en.f,en.f,[]),a._4(512,B.b,B.b,[]),a._4(512,S.e,S.e,[]),a._4(512,s.e,s.e,[]),a._4(512,v.b,v.b,[]),a._4(512,j.c,j.c,[]),a._4(512,P.c,P.c,[]),a._4(512,G.f,G.f,[]),a._4(512,an,an,[]),a._4(512,q.a,q.a,[]),a._4(512,tn.a,tn.a,[]),a._4(512,t,t,[]),a._4(256,s.a,{overlapTrigger:!0,xPosition:"after",yPosition:"below"},[]),a._4(256,nn.a,{apiKey:"AIzaSyD8uYj3QN77h_yGc8oy-1aJCQGhYxbaW_M",libraries:["visualization"]},[])])});Object(a.L)(),V.j().bootstrapModuleFactory(un).catch(function(n){return console.log(n)})}},[0]);