"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[133],{9133:function(e,r,s){s.r(r),s.d(r,{default:function(){return x}});var a=s(1413),n=s(4165),i=s(5861),l="Signin_form__ho-Ga",t=s(1134),c=s(6727),o=s(4695),d=s(1912),m=s(2791),u=s(7689),p=s(184);var x=function(e){var r=(0,m.useContext)(d.V),s=r.signin,x=r.user,f=c.Ry({email:c.Z_().required("Il faut pr\xe9ciser votre email").email("l'email n'est pas valide"),password:c.Z_().required("Il faut pr\xe9ciser votre mot de passe").min(6,"Mot de passe trop court")}),h=(0,t.cI)({defaultValues:{email:"",password:"",generic:""},resolver:(0,o.X)(f)}),v=h.handleSubmit,j=h.register,g=h.formState,b=g.errors,w=g.isSubmitting,N=h.setError,y=h.clearErrors,Z=v(function(){var e=(0,i.Z)((0,n.Z)().mark((function e(r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(),e.next=4,s(r);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),a=e.t0.message,N("generic",{type:"generic",message:a});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}());return(0,p.jsx)(p.Fragment,{children:x?(0,p.jsx)(u.Fg,{to:"/profile"}):(0,p.jsx)("div",{className:"flex-fill d-flex align-items-center justify-content-center",children:(0,p.jsxs)("form",{onSubmit:Z,className:"".concat(l," d-flex flex-column card p-20"),children:[(0,p.jsx)("h2",{className:"mb-10",children:"Connexion"}),(0,p.jsxs)("div",{className:"mb-10 d-flex flex-column",children:[(0,p.jsx)("label",{htmlFor:"email",children:"Email"}),(0,p.jsx)("input",(0,a.Z)({type:"text",id:"email"},j("email"))),(null===b||void 0===b?void 0:b.email)&&(0,p.jsx)("p",{className:"form-error",children:b.email.message})]}),(0,p.jsxs)("div",{className:"mb-10 d-flex flex-column",children:[(0,p.jsx)("label",{htmlFor:"password",children:"Password"}),(0,p.jsx)("input",(0,a.Z)({type:"password",id:"password"},j("password"))),(null===b||void 0===b?void 0:b.password)&&(0,p.jsx)("p",{className:"form-error",children:b.password.message})]}),(null===b||void 0===b?void 0:b.generic)&&(0,p.jsx)("div",{className:"mb-10",children:(0,p.jsx)("p",{className:"form-error",children:b.generic.message})}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{disabled:w,className:"btn btn-primary",children:"Connexion"})})]})})})}}}]);
//# sourceMappingURL=133.1124acab.chunk.js.map