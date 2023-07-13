(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[284],{8284:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var r=t(2791),a=t(2007),i=t.n(a),s=t(9434),o=t(6052),c=t(1686),u=t(184);function l(e){var n=e.name,t=e.id,r=e.phone,a=(0,s.I0)();return(0,u.jsxs)("li",{children:[(0,u.jsxs)("p",{children:[n,": ",(0,u.jsx)("span",{children:r})]}),(0,u.jsx)("button",{type:"button",onClick:function(){var e;e=t,a((0,o.xX)(e)),c.Notify.success("Contact whith name ".concat(n," successfully added to phonebook!"))},children:"Delete"})]},t)}var p=l;l.propType={name:i().string.isRequired,id:i().string.isRequired,number:i().number.isRequired,deleteContact:i().func.isRequired};var d,m,f=t(168),h=t(5706),x=h.Z.h2(d||(d=(0,f.Z)(["\n  text-align: center;\n"]))),b=h.Z.ul(m||(m=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 350px;\n  width: 100%;\n  margin: 20px auto 25px;\n  gap: 16px;\n\n  list-style: none;\n"]))),y=function(e){return e.appContacts.contacts},v=function(e){return e.appContacts.filter},g=function(e){return e.appContacts.isLoading},j=function(e){return e.appContacts.error};function C(e){var n=e.title,t=e.contacts,r=e.deleteContact,a=(0,s.v9)(v),i=t.filter((function(e){var n=e.name;return null===n||void 0===n?void 0:n.toLowerCase().includes(a.toLowerCase())}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x,{children:n}),(0,u.jsx)(b,{children:i.map((function(e){var n=e.name,t=e.id,a=e.number;return(0,u.jsx)(p,{name:n,id:t,phone:a,deleteContact:r},t)}))})]})}var w,R,k=C;C.propType={deleteContact:i().func.isRequired,title:i().string.isRequired,contacts:i().arrayOf({name:i().string.isRequired,id:i().string.isRequired,number:i().number.isRequired}).isRequired};var q=h.Z.p(w||(w=(0,f.Z)(["\n  text-align: center;\n"]))),T=h.Z.div(R||(R=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  max-width: 350px;\n  margin: 20px auto 25px;\n  gap: 16px;\n"]))),Z=t(1538);var _,N=function(){var e=(0,s.v9)(v),n=(0,s.I0)();return(0,u.jsxs)(T,{children:[(0,u.jsx)(q,{children:"Find contacts by name"}),(0,u.jsx)("input",{value:e,type:"text",required:!0,onChange:function(e){return n((0,Z.T)(e.currentTarget.value))}})]})},O=t(9439),I=h.Z.form(_||(_=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  max-width: 350px;\n  width: 100%;\n  margin: 20px auto 25px;\n  gap: 16px;\n\n  .form-label {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .form-btn {\n    border: none;\n    background: #000;\n    color: #fff;\n    padding: 15px;\n    border-radius: 10px;\n    cursor: pointer;\n  }\n"])));function S(e){var n=e.title,t=(0,r.useState)(""),a=(0,O.Z)(t,2),i=a[0],l=a[1],p=(0,r.useState)(""),d=(0,O.Z)(p,2),m=d[0],f=d[1],h=(0,s.I0)(),x=(0,s.v9)(y),b=function(e){var n=e.currentTarget,t=n.name,r=n.value;"name"===t?l(r):"number"===t&&f(r)};return(0,u.jsxs)(I,{onSubmit:function(e){e.preventDefault();var n={name:i,number:m},t=n.name.toLowerCase();x.some((function(e){return e.name.toLowerCase()===t}))?alert("Contact whith name ".concat(n.name," is already exists")):(h((0,o.je)(n)),c.Notify.success("Contact whith name ".concat(n.name," successfully added to phonebook!")),l(""),f(""))},children:[(0,u.jsx)("h2",{children:n}),(0,u.jsxs)("label",{className:"form-label",children:[(0,u.jsx)("span",{children:"Name"}),(0,u.jsx)("input",{type:"text",name:"name",id:"contactName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:i,onChange:b})]}),(0,u.jsxs)("label",{className:"form-label",children:[(0,u.jsx)("span",{children:"Number"}),(0,u.jsx)("input",{type:"tel",name:"number",id:"ContactNumber",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"number number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:m,onChange:b})]}),(0,u.jsx)("button",{className:"form-btn",type:"submit",children:"Add contact"})]})}S.propType={onSubmit:i().func.isRequired,title:i().string.isRequired};var A=t(7197),E=t(4289);function L(){var e=(0,s.I0)(),n=(0,s.v9)(y),t=(0,s.v9)(j),a=(0,s.v9)(g),i=(0,s.v9)(E.M7);return(0,r.useEffect)((function(){i&&e((0,o.yF)())}),[e,i]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(S,{title:"Phonebook"}),n.length>0&&!a&&(0,u.jsx)(N,{}),n.length>0?(0,u.jsx)(k,{contacts:n,title:"Contacts"}):(0,u.jsx)("p",{children:"Your phone book is empty"}),a&&!t&&(0,u.jsx)(A.Z,{}),t&&(0,u.jsxs)("p",{children:["Error: ",t]})]})}},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=284.b81f07ef.chunk.js.map