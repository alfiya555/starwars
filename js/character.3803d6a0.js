(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["character"],{5930:function(t,a,s){"use strict";s("e3f5")},"80a7":function(t,a,s){},c708:function(t,a,s){"use strict";s("80a7")},e3f5:function(t,a,s){},ecbd:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper"},[s("div",[s("CharacterImage",{attrs:{name:t.character.name}})],1),s("div",{staticClass:"character-info"},[s("div",{staticClass:"character-info-item"},[s("span",{staticClass:"info-title"},[t._v("Имя: ")]),t._v(t._s(t.character.name))]),s("div",{staticClass:"character-info-item"},[s("span",{staticClass:"info-title"},[t._v("Дата создания: ")]),t._v(t._s(t.createdDateFormat(t.character.created)))]),s("div",{staticClass:"character-info-item"},[s("span",{staticClass:"info-title"},[t._v("Год рождения: ")]),t._v(t._s(t.character.birth_year))]),s("div",{staticClass:"character-info-item"},[s("span",{staticClass:"info-title"},[t._v("Пол: ")]),t._v(t._s(t.character.gender))]),t.character.starships&&t.character.starships.length>0?s("div",{staticClass:"info-starships"},[s("span",{staticClass:"info-title"},[t._v("Корабли: ")]),t._l(t.character.starships,(function(t){return s("ul",{key:t},[s("li",[s("CharacterStarship",{attrs:{starshipUrl:t}})],1)])}))],2):t._e()])])},r=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("p",{staticClass:"info"},[s("span",{staticClass:"info-subtitle"},[t._v("Модель")]),t._v(" - "+t._s(t.starship.model)+",")]),s("p",{staticClass:"info"},[s("span",{staticClass:"info-subtitle"},[t._v("название")]),t._v(" - "+t._s(t.starship.name)+" ")])])},c=[],n=s("bc3a"),l=s.n(n),o={data:function(){return{starship:{}}},props:{starshipUrl:{type:String,required:!0}},watch:{starshipUrl:{immediate:!0,handler:function(t){var a=this;l.a.get("".concat(t)).then((function(t){a.starship=t.data}))}}}},h=o,p=(s("5930"),s("2877")),u=Object(p["a"])(h,i,c,!1,null,"6dc692b7",null),f=u.exports,d=s("3837"),v={data:function(){return{}},components:{CharacterStarship:f,CharacterImage:d["a"]},props:{slug:{type:String,required:!0},character:{type:Object,required:!0}},methods:{createdDateFormat:function(t){var a=new Date(Date.parse(t));return a.getDate()+"."+(a.getMonth()+1)+"."+a.getFullYear()}}},_=v,C=(s("c708"),Object(p["a"])(_,e,r,!1,null,"4be6bced",null));a["default"]=C.exports}}]);
//# sourceMappingURL=character.3803d6a0.js.map