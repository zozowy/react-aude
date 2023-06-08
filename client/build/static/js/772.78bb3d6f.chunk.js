"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[772],{2122:function(e,r,t){t.d(r,{DI:function(){return m},G3:function(){return l},eI:function(){return f},iM:function(){return u},kW:function(){return x}});var n=t(4925),c=t(4165),a=t(5861),i=["_id"],s="https://restapi.fr/api/recipes";function u(e){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,c.Z)().mark((function e(r){var t,n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s).concat(r?"?".concat(r):""));case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",Array.isArray(n)?n:[n]);case 10:throw new Error("Error fetch recipes");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,c.Z)().mark((function e(r){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/").concat(r));case 2:if(!(t=e.sent).ok){e.next=7;break}return e.abrupt("return",t.json());case 7:throw new Error("Error fetch getRecipe");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,c.Z)().mark((function e(r){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/").concat(r),{method:"DELETE"});case 2:if(!e.sent.ok){e.next=7;break}return e.abrupt("return",r);case 7:throw new Error("Error delete recipe");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,c.Z)().mark((function e(r){var t,a,u;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r._id,a=(0,n.Z)(r,i),e.next=3,fetch("".concat(s,"/").concat(t),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:if(!(u=e.sent).ok){e.next=8;break}return e.abrupt("return",u.json());case 8:throw new Error("Error update recipe");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)((0,c.Z)().mark((function e(r){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 2:if(!(t=e.sent).ok){e.next=7;break}return e.abrupt("return",t.json());case 7:throw new Error("Error create recipe");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},8772:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(4165),c=t(1413),a=t(5861),i="AdminRecipeForm_RecipeForm__c2lMI",s=t(6727),u=t(1134),o=t(4695),l=t(2122),p=t(7689),f=t(5330),d=t(277),m=t(184);var h=function(){var e=(0,p.UO)().recipeId,r=(0,f.useRecoilValue)((0,d.B0)(e)),t=(0,p.s0)(),h={title:r?r.title:"",image:r?r.image:""},x=s.Ry({title:s.Z_().required("le titre de la recette doit \xeatre renseign\xe9").min(10,"Le titre doit faire 10 caract\xe8res min et 30 max").max(30,"Le titre doit faire 10 caract\xe8res min et 30 max"),image:s.Z_().required("il faut renseigner une url d'image").url("L'image doit \xeatre un lien valide")}),b=(0,u.cI)({defaultValues:h,resolver:(0,o.X)(x)}),k=b.formState,y=k.errors,Z=k.isSubmitting,g=b.register,v=b.handleSubmit,w=b.reset,j=b.setError,E=b.clearErrors;function N(){return(N=(0,a.Z)((0,n.Z)().mark((function e(a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,E(),!r){e.next=8;break}return e.next=5,(0,l.DI)((0,c.Z)((0,c.Z)({},a),{},{_id:r._id}));case 5:t("/admin/recipes/list"),e.next=11;break;case 8:return e.next=10,(0,l.kW)(a);case 10:w(h);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),j("generic",{type:"generic",message:"un erreur est survenue"});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return(0,m.jsxs)("form",{onSubmit:v((function(e){return N.apply(this,arguments)})),className:"d-flex flex-column card p-20 ".concat(i),children:[(0,m.jsx)("h2",{className:"mb-20",children:" Ajouter une recette"}),(0,m.jsxs)("div",{className:"d-flex flex-column mb-20",children:[(0,m.jsx)("label",{children:"Titre de la recette"}),(0,m.jsx)("input",(0,c.Z)((0,c.Z)({},g("title")),{},{type:"text"})),y.title&&(0,m.jsx)("p",{className:"form-error",children:y.title.message})]}),(0,m.jsxs)("div",{className:"d-flex flex-column mb-20",children:[(0,m.jsx)("label",{children:"Image de la recette"}),(0,m.jsx)("input",(0,c.Z)((0,c.Z)({},g("image")),{},{type:"text"})),y.image&&(0,m.jsx)("p",{className:"form-error",children:y.image.message})]}),y.generic&&(0,m.jsx)("p",{className:"form-error",children:y.generic.message}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{disabled:Z,className:"btn btn-primary",children:" Sauvegarder"})})]})}},277:function(e,r,t){t.d(r,{IB:function(){return n},B0:function(){return o},b5:function(){return u}});var n=(0,t(5330).atom)({key:"recipesState",default:[]}),c=t(4165),a=t(5861),i=t(5330),s=t(2122),u=(0,i.selectorFamily)({key:"selectFilteredRecipes",get:function(e){return function(r){var t=(0,r.get)(n);return t.length&&t.filter((function(r){return r.title.toLowerCase().startsWith(e)}))}}}),o=(0,i.selectorFamily)({key:"selectActiveRecipe",get:function(e){return(0,a.Z)((0,c.Z)().mark((function r(){return(0,c.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.t0=e,!r.t0){r.next=5;break}return r.next=4,(0,s.G3)(e);case 4:r.t0=r.sent;case 5:return r.abrupt("return",r.t0);case 6:case"end":return r.stop()}}),r)})))}})}}]);
//# sourceMappingURL=772.78bb3d6f.chunk.js.map