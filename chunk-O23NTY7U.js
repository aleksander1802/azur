import{A as i,B as p,E as l,F as _,G as h,H as m,Ha as V,J as C,Ja as j,K as b,Q as M,S as P,T as O,W as y,ea as T,f as g,fa as F,ga as E,ha as f,ia as w,ja as I,la as S,ma as N,na as q,oa as A,p as n,q as k,r as d,s as a,sa as $,t as x,v,va as z,wa as D,z as r}from"./chunk-DR3H7YNZ.js";function R(t,c){if(t&1&&(r(0,"small"),_(1),i()),t&2){let o=l(2).$implicit;n(),m(" ",o("feedback_form_name_error")," ")}}function B(t,c){if(t&1&&(r(0,"div",22),d(1,R,2,1,"small",23),i()),t&2){let o=l(2);n(),a("ngIf",o.getError("name","required"))}}function L(t,c){if(t&1&&(r(0,"small"),_(1),i()),t&2){let o=l(2).$implicit;n(),m(" ",o("feedback_form_phone_error")," ")}}function H(t,c){if(t&1&&(r(0,"div",22),d(1,L,2,1,"small",23),i()),t&2){let o=l(2);n(),a("ngIf",o.getError("phone","required"))}}function J(t,c){if(t&1&&(r(0,"small"),_(1),i()),t&2){let o=l(2).$implicit;n(),m(" ",o("feedback_form_email_required_error")," ")}}function K(t,c){if(t&1&&(r(0,"small"),_(1),i()),t&2){let o=l(2).$implicit;n(),m(" ",o("feedback_form_email_invalid_error")," ")}}function Q(t,c){if(t&1&&(r(0,"div",22),d(1,J,2,1,"small",23)(2,K,2,1,"small",23),i()),t&2){let o=l(2);n(),a("ngIf",o.getError("email","required")),n(),a("ngIf",o.getError("email","email"))}}function U(t,c){if(t&1&&(r(0,"small"),_(1),i()),t&2){let o=l(3).$implicit;n(),m(" ",o("feedback_form_text_required_error")," ")}}function W(t,c){if(t&1&&(r(0,"div",22),d(1,U,2,1,"small",23),i()),t&2){let o=l(3);n(),a("ngIf",o.getError("feedbackText","required"))}}var u=t=>({invalid:t});function X(t,c){if(t&1&&(r(0,"div",24),p(1,"textarea",25),d(2,W,2,1,"div",11),i()),t&2){let o=l().$implicit,e=l();a("ngClass",b(3,u,(e.feedbackText==null?null:e.feedbackText.touched)&&(e.feedbackText==null?null:e.feedbackText.invalid))),n(),a("placeholder",o("feedback_form_text_placeholder")),n(),a("ngIf",(e.feedbackText==null?null:e.feedbackText.touched)&&(e.feedbackText==null?null:e.feedbackText.invalid))}}function Y(t,c){if(t&1&&(r(0,"div",3)(1,"p",4),_(2),i(),r(3,"div",5)(4,"h2"),_(5),i(),r(6,"div",6),p(7,"app-logo-circle"),i()(),r(8,"form",7)(9,"div",8)(10,"div",9),p(11,"input",10),d(12,B,2,1,"div",11),i(),r(13,"div",9),p(14,"input",12),d(15,H,2,1,"div",11),i(),r(16,"div",9),p(17,"input",13),d(18,Q,3,2,"div",11),i(),d(19,X,3,5,"div",14),i(),r(20,"div",15)(21,"div",16),p(22,"input",17)(23,"span",18),i(),r(24,"label",19),_(25),i(),r(26,"div",20)(27,"button",21),_(28),i()()()()()),t&2){let o=c.$implicit,e=l();n(2),m(" ",o("feedback_subtitle")," "),n(3),h(o(e.feedbackTitle)),n(),x("hide",e.feedbackTextArea),n(2),a("formGroup",e.feedbackForm),n(2),a("ngClass",b(17,u,(e.name==null?null:e.name.touched)&&(e.name==null?null:e.name.invalid))),n(),a("placeholder",o("feedback_form_name_placeholder")),n(),a("ngIf",(e.name==null?null:e.name.touched)&&(e.name==null?null:e.name.invalid)),n(),a("ngClass",b(19,u,(e.phone==null?null:e.phone.touched)&&(e.phone==null?null:e.phone.invalid))),n(),a("placeholder",o("feedback_form_phone_placeholder")),n(),a("ngIf",(e.phone==null?null:e.phone.touched)&&(e.phone==null?null:e.phone.invalid)),n(),a("ngClass",b(21,u,(e.email==null?null:e.email.touched)&&(e.email==null?null:e.email.invalid))),n(2),a("ngIf",(e.email==null?null:e.email.touched)&&(e.email==null?null:e.email.invalid)),n(),v(19,e.feedbackTextArea?19:-1),n(6),m(" ",o("feedback_form_privacy")," "),n(2),a("disabled",e.feedbackForm.invalid),n(),m(" ",o("feedback_form_submit_button")," ")}}var Z=t=>({"background-image":t}),_e=(()=>{let c=class c{constructor(e){this.fb=e,this.backgroundImage="assets/images/rent/rent_second_full_1.jpg",this.feedbackTextArea=!1,this.feedbackTitle="feedback_title_default"}ngOnInit(){this.initForm()}initForm(){this.feedbackForm=this.fb.group({name:["",[f.required]],phone:["",[f.required]],email:["",[f.required,f.email]],privacyPolicy:[!1,f.requiredTrue],feedbackText:["",this.feedbackTextArea&&f.required]})}get name(){return this.feedbackForm.get("name")}get email(){return this.feedbackForm.get("email")}get phone(){return this.feedbackForm.get("phone")}get feedbackText(){return this.feedbackForm.get("feedbackText")}getError(e,s){return this.feedbackForm.get(e)?.hasError(s)}};c.\u0275fac=function(s){return new(s||c)(k($))},c.\u0275cmp=g({type:c,selectors:[["app-feedback"]],inputs:{backgroundImage:"backgroundImage",feedbackTextArea:"feedbackTextArea",feedbackTitle:"feedbackTitle"},standalone:!0,features:[C],decls:4,vars:4,consts:[[1,"feedback",3,"ngStyle"],[1,"feedback_wrapper"],["class","container",4,"transloco","translocoRead"],[1,"container"],[1,"feedback__subtitle"],[1,"feedback__title"],[1,"feedback__title_circle"],[1,"feedback__form",3,"formGroup"],[1,"feedback__form_controls"],[1,"feedback__form_control",3,"ngClass"],["id","name","type","text","formControlName","name","autocomplete","name",3,"placeholder"],["class","validation",4,"ngIf"],["id","phone","type","number","formControlName","phone","autocomplete","phone",3,"placeholder"],["id","email","type","email","formControlName","email","autocomplete","email","placeholder","Email"],["class","feedback__form_control feedback__form_control-textarea",3,"ngClass"],[1,"feedback__form_checkbox_wrapper"],[1,"feedback__form_checkbox"],["type","checkbox","id","privacyCheckbox","formControlName","privacyPolicy",1,"feedback__form_checkbox-input"],[1,"feedback__form_checkbox-checkmark"],["for","privacyCheckbox",1,"feedback__form_checkbox-label"],[1,"feedback__form__submit"],["type","submit",1,"feedback__form__submit-button",3,"disabled"],[1,"validation"],[4,"ngIf"],[1,"feedback__form_control","feedback__form_control-textarea",3,"ngClass"],["id","feedbackText","formControlName","feedbackText",1,"feedback__form_control-textarea",3,"placeholder"]],template:function(s,G){s&1&&(r(0,"div",0)(1,"div",1),d(2,Y,29,23,"div",2),i(),p(3,"app-navigation-bottom-links"),i()),s&2&&(a("ngStyle",b(2,Z,"url("+G.backgroundImage+")")),n(2),a("translocoRead","feedback"))},dependencies:[y,M,P,O,j,z,S,E,N,F,w,I,q,A,T,V,D],styles:['.container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}.feedback[_ngcontent-%COMP%]{position:relative;min-height:100vh;background-repeat:no-repeat;background-size:cover;background-position:center}.feedback_wrapper[_ngcontent-%COMP%]{padding-top:305px;padding-bottom:310px;background:#000000b3;min-height:100vh}.feedback__subtitle[_ngcontent-%COMP%]{width:max-content}.feedback__title[_ngcontent-%COMP%]{position:relative;text-align:center}.feedback__title_circle[_ngcontent-%COMP%]{display:inline-block;position:absolute;top:-1.7rem;right:-4rem}.feedback__form[_ngcontent-%COMP%]{width:430px;display:flex;flex-direction:column;gap:27px}.feedback__form_controls[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:space-between;gap:21px;margin-top:39px}.feedback__form_controls[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .feedback__form_controls[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;height:100%;outline:none;border:1px solid var(--primary-half);background-color:transparent;border-radius:13px;padding:11px 21px;font-size:20px}.feedback__form_controls[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .feedback__form_controls[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:var(--primary-half)}.feedback__form_controls[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .feedback__form_controls[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .feedback__form_controls[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-outer-spin-button, .feedback__form_controls[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.feedback__form_controls[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill, .feedback__form_controls[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-webkit-autofill{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:var(--primary)}.feedback__form_controls[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:autofill, .feedback__form_controls[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:autofill{-webkit-text-fill-color:var(--primary)}.feedback__form_control[_ngcontent-%COMP%]{height:54px}.feedback__form_control-textarea[_ngcontent-%COMP%]{height:100px;resize:none}.feedback__form_checkbox[_ngcontent-%COMP%]{position:relative;width:18px;height:18px;cursor:pointer}.feedback__form_checkbox_wrapper[_ngcontent-%COMP%]{grid-column:1/3;display:flex;align-items:center;justify-content:center}.feedback__form_checkbox-label[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:pointer;color:var(--primary-half)}.feedback__form_checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;left:0;opacity:0;cursor:pointer;width:18px;height:18px;z-index:2}.feedback__form_checkbox-checkmark[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:18px;height:18px;background-color:transparent;border-radius:6px;border:1px solid rgba(255,255,255,.5)}.feedback__form_checkbox-checkmark[_ngcontent-%COMP%]:before{content:"";position:absolute;display:none;left:5px;top:2px;width:4px;height:8px;border:solid var(--accent);border-width:0 2px 2px 0;transform:rotate(45deg)}.feedback__form_checkbox_wrapper[_ngcontent-%COMP%]{display:flex;gap:15px}.feedback__form_checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .feedback__form_checkbox-checkmark[_ngcontent-%COMP%]{background-color:transparent}.feedback__form_checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .feedback__form_checkbox-checkmark[_ngcontent-%COMP%]:before{display:block}.feedback__form__submit-button[_ngcontent-%COMP%]{padding:6px 11px;cursor:pointer;background-color:transparent;border:1px solid var(--primary-half);color:var(--primary-half);border-radius:13px;line-height:160%;font-size:20px}.feedback__form__submit-button[_ngcontent-%COMP%]:hover{color:var(--primary-semihalf);border:1px solid var(--primary-semihalf)}.feedback__form__submit-button[_ngcontent-%COMP%]:disabled:hover{color:var(--primary-half);border:1px solid var(--primary-half)}.validation[_ngcontent-%COMP%]{position:absolute;color:var(--danger-color);filter:drop-shadow(0 0 .75rem crimson);background-image:linear-gradient(to right,#0000,#000,#0000);text-align:center;width:430px}.invalid[_ngcontent-%COMP%], small[_ngcontent-%COMP%]{color:var(--danger-color)}.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], small[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid var(--danger-color);outline-color:var(--danger-color);color:var(--danger-color)}.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, small[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:var(--danger-color)}.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, small[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{color:var(--danger-color);border:1px solid var(--danger-color);outline-color:var(--danger-color)}.hide[_ngcontent-%COMP%]{display:none}']});let t=c;return t})();export{_e as a};
