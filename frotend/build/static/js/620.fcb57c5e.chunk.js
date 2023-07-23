"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[620],{60620:function(e,n,s){s.r(n),s.d(n,{default:function(){return te}});var r,a,t,i,c,o=s(29439),l=s(72791),d=s(5805),h=s(30168),u=s(28789),m=s(78820),x=s(80184),j=u.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: auto;\n  background-color: #f2f2f2;\n  border-radius: 25px;\n  padding: 5px;\n\n  @media (max-width: 768px) {\n    width: 90%;\n  }\n"]))),p=u.ZP.input(a||(a=(0,h.Z)(["\n  width: 100%;\n  outline: none;\n  background-color: transparent;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 1.1rem;\n  padding: 5px 8px 0px 8px;\n  border: none;\n"]))),f=u.ZP.button(t||(t=(0,h.Z)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n  cursor: pointer;\n"]))),g=(0,u.ZP)(m.RB5)(i||(i=(0,h.Z)(["\n  color: #000000;\n  font-size: 1.7rem;\n  transition: color 0.2s ease-in-out;\n  &:hover {\n    color: #E30605;\n  }\n"]))),v=(0,u.ZP)(m.oHP)(c||(c=(0,h.Z)(["\n  color: #000000;\n  font-size: 1.7rem;\n  transition: color 0.2s ease-in-out;\n  &:hover {\n    color: #E30605;\n  }\n"]))),N=function(e){var n=e.handleSearchButtonClick,s=e.handleCrossButtonClick,r=e.searchBarActive,a=e.handleSearchFormSubmit,t=e.handleSearchInputChange,i=e.searchValue;return(0,x.jsxs)(x.Fragment,{children:[!r&&(0,x.jsx)(f,{onClick:n,children:(0,x.jsx)(g,{})}),r&&(0,x.jsxs)(j,{children:[(0,x.jsx)(f,{onClick:a,children:(0,x.jsx)(g,{})}),(0,x.jsx)("form",{onSubmit:a,className:"search_from",children:(0,x.jsx)(p,{type:"text",placeholder:"Search.........",value:i,onChange:t})}),(0,x.jsx)(f,{onClick:s,children:(0,x.jsx)(v,{})})]})]})},b=s(22637),S=s(24364),Z=s(38596),C=s(95269),k=s(82626),y=s(84701),I=s(70478),D=[{code:"in",label:"India",flag:"https://flagcdn.com/in.svg"},{code:"us",label:"USA",flag:"https://flagcdn.com/us.svg"},{code:"gb",label:"UK",flag:"https://flagcdn.com/gb.svg"},{code:"fr",label:"France",flag:"https://flagcdn.com/fr.svg"}],w=(0,I.Z)((function(){return{flagIcon:{width:15,height:15,alignSelf:"center",paddingRight:"1px"},countryName:{fontSize:12,color:"white",alignSelf:"center",fontFamily:"Roboto",marginLeft:5},menuItem:{display:"flex",alignItems:"center",justifyContent:"center",color:"white",backgroundColor:"black"}}})),U=function(e){var n=e.value,s=void 0===n?"in":n,r=e.onChange,a=w(),t=function(e){e.target.src="https://via.placeholder.com/16x12?text=?"};return(0,x.jsx)(y.Z,{value:s,onChange:r,sx:{display:"flex",alignItems:"center",border:"none","&:focus":{border:"none"},"&:before":{border:"none"},height:20,width:"auto","& .MuiSelect-icon":{color:"white"}},children:D.map((function(e){return(0,x.jsxs)(k.Z,{value:e.code,className:a.menuItem,children:[(0,x.jsx)("img",{src:e.flag,alt:"".concat(e.label," flag"),className:a.flagIcon,onError:t}),(0,x.jsx)("span",{className:a.countryName,children:e.label})]},e.code)}))})},B=s(1588),A=s(91523),z=s(79271),_=s(97979),L=s(59434),E=s(56534),F=s(79756),P=s(79112),R=s(97656),M=s(45190),T=s(54715),V=s(30014),H=s(39122),O=s(68535),K=s(50521),Y=function(e){var n=e.handleSideBarMenu,s=e.isAuthenticated,r=e.user,a=(0,L.I0)(),t=(0,E.VY)();return(0,x.jsxs)("div",{className:"sidebar-container",children:[(0,x.jsx)("button",{className:"sidebar-close-btn",onClick:n,children:(0,x.jsx)(V.Z,{})}),(0,x.jsxs)("ul",{className:"sidebar-menu",children:[s&&"admin"===r.role&&(0,x.jsx)(A.rU,{to:"/admin/dashboard",style:{color:"inherit",textDecoration:"none"},children:(0,x.jsxs)("li",{className:"sidebar-menu-item",children:[(0,x.jsx)(T.Z,{fontSize:"large"}),(0,x.jsx)("span",{className:"sidebar-menu-item-text",children:"Dashboard"})]})}),(0,x.jsx)(A.rU,{to:"/",style:{color:"inherit",textDecoration:"none"},children:(0,x.jsxs)("li",{className:"sidebar-menu-item",children:[(0,x.jsx)(P.Z,{fontSize:"large"}),(0,x.jsx)("span",{className:"sidebar-menu-item-text",children:"Home"})]})}),(0,x.jsx)(A.rU,{to:"/products",style:{color:"inherit",textDecoration:"none"},children:(0,x.jsxs)("li",{className:"sidebar-menu-item",children:[(0,x.jsx)(H.Z,{fontSize:"large"}),(0,x.jsx)("span",{className:"sidebar-menu-item-text",children:"Products"})]})}),(0,x.jsx)(A.rU,{to:"/contact",style:{color:"inherit",textDecoration:"none"},children:(0,x.jsxs)("li",{className:"sidebar-menu-item",children:[(0,x.jsx)(O.Z,{fontSize:"large"}),(0,x.jsx)("span",{className:"sidebar-menu-item-text",children:"Contact"})]})}),(0,x.jsx)(A.rU,{to:"/about_us",style:{color:"inherit",textDecoration:"none"},children:(0,x.jsxs)("li",{className:"sidebar-menu-item",children:[(0,x.jsx)(R.Z,{fontSize:"large"}),(0,x.jsx)("span",{className:"sidebar-menu-item-text",children:"About Us"})]})}),(0,x.jsx)(A.rU,{to:"/account",style:{color:"inherit",textDecoration:"none"},children:(0,x.jsxs)("li",{className:"sidebar-menu-item",children:[(0,x.jsx)(F.Z,{fontSize:"large"}),(0,x.jsx)("span",{className:"sidebar-menu-item-text",children:"Account"})]})}),s?(0,x.jsx)(A.rU,{to:"/",style:{color:"inherit",textDecoration:"none"},children:(0,x.jsxs)("li",{className:"sidebar-menu-item",onClick:function(){a((0,_.kS)()),t.success("Logout Successfully")},children:[(0,x.jsx)(M.Z,{fontSize:"large"}),(0,x.jsx)("span",{className:"sidebar-menu-item-text",children:"Logout"})]})}):(0,x.jsx)(A.rU,{to:"/login",style:{color:"inherit",textDecoration:"none"},children:(0,x.jsxs)("li",{className:"sidebar-menu-item",style:{textDecorationLine:"none",textDecoration:"none"},children:[(0,x.jsx)(K.Z,{fontSize:"large"}),(0,x.jsx)("span",{className:"sidebar-menu-item-text",children:"Login"})]})})]})]})},G=s(18086),J=s(31159),W=s(94613),q=s(38174),Q=s(40501),X=s(17269),$=s(70272),ee=s(78106),ne=s(28237),se=function(e){var n=e.user,s=e.isAuthenticated,r=(0,E.VY)(),a=(0,L.I0)(),t=(0,z.k6)(),i=(0,l.useState)(!1),c=(0,o.Z)(i,2),d=c[0],h=c[1],u=(0,l.useRef)(null);(0,l.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&h(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"profile-icon",onClick:function(e){e.stopPropagation(),h((function(e){return!e}))},children:[(0,x.jsx)(Q.Z,{className:"icon smaller ".concat(d?"active":""),fontSize:"large"}),d?(0,x.jsx)(W.Z,{className:"arrow-icon"}):(0,x.jsx)(ne.Z,{className:"arrow-icon"})]}),d&&(0,x.jsx)(X.Z,{open:d,onClose:function(){h(!1)},className:"modal-container",children:(0,x.jsxs)("div",{className:"modal-content",ref:u,children:[s?(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"profile-info",children:[(0,x.jsx)($.Z,{src:n.avatar.url,alt:"User Avatar",className:"avatar",style:{width:"68px",height:"68px"}}),(0,x.jsxs)("p",{className:"user-id",children:[(0,x.jsx)("strong",{children:"ID :"})," ",n._id.substring(0,8)]}),(0,x.jsxs)("p",{className:"user-name",children:[(0,x.jsx)("strong",{children:"Name :"})," ",n.name]}),(0,x.jsxs)("p",{className:"user-email",children:[(0,x.jsx)("strong",{children:"Email :"})," ",n.email]}),(0,x.jsxs)("p",{className:"created-at",children:[(0,x.jsx)("strong",{children:"Joined at:"})," ",function(e){var n=new Date(e.createdAt);return new Intl.DateTimeFormat("en-IN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0,timeZone:"Asia/Kolkata"}).format(n)}(n)]})]})}):(0,x.jsxs)("div",{className:"welcome-message",children:[(0,x.jsx)("strong",{children:"Welcome!"}),(0,x.jsx)("p",{children:"To access your account and manage orders, please log in."})]}),(0,x.jsx)("div",{className:"divider"}),(0,x.jsxs)("div",{className:"profile-menu",children:[n&&"admin"===n.role&&(0,x.jsxs)("div",{className:"menu-item",onClick:function(){h(!1),t.push("/admin/dashboard")},children:[(0,x.jsx)(T.Z,{className:"menu-icon"}),(0,x.jsx)("span",{children:"Dashboard"})]}),(0,x.jsxs)("div",{className:"menu-item",onClick:function(){h(!1),t.push("/account")},children:[(0,x.jsx)(ee.Z,{className:"menu-icon"}),(0,x.jsx)("span",{children:"Profile"})]}),(0,x.jsxs)("div",{className:"menu-item",onClick:function(){h(!1),t.push("/orders")},children:[(0,x.jsx)(J.Z,{className:"menu-icon"}),(0,x.jsx)("span",{children:"Orders"})]}),(0,x.jsxs)("div",{className:"menu-item",onClick:function(){h(!1),t.push("/cart")},children:[(0,x.jsx)(G.Z,{className:"menu-icon"}),(0,x.jsx)("span",{children:"Cart"})]}),s?(0,x.jsxs)("div",{className:"menu-item",onClick:function(){h(!1),a((0,_.kS)()),r.success("Logout Successfully")},children:[(0,x.jsx)(M.Z,{className:"menu-icon"}),(0,x.jsx)("span",{children:"Logout"})]}):(0,x.jsxs)("div",{className:"menu-item",onClick:function(){h(!1),t.push("/login")},children:[(0,x.jsx)(q.Z,{className:"menu-icon"}),(0,x.jsx)("span",{children:"Login"})]})]})]})})]})},re=(0,Z.Z)((function(e){return{badge:{backgroundColor:"#ed1c24",color:"#fff","&:hover":{backgroundColor:"#ed1c24",color:"#fff"}},cartIcon:{fontSize:"1.7rem",cursor:"pointer",marginBottom:e.spacing(.8)},popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)}}}));function ae(e){var n=e.cartItemCount,s=re(),r=(0,l.useState)(null),a=(0,o.Z)(r,2),t=a[0],i=a[1],c=function(){i(null)},d=Boolean(t);return(0,x.jsxs)("div",{children:[(0,x.jsx)(S.Z,{badgeContent:n,color:"primary",classes:{badge:s.badge},children:(0,x.jsx)(b.Z,{onMouseEnter:function(e){i(e.currentTarget)},onMouseLeave:c,className:s.cartIcon})}),!n&&(0,x.jsx)(C.ZP,{className:s.popover,classes:{paper:s.paper},open:d,anchorEl:t,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:(0,x.jsx)("div",{children:"Cart is empty"})})]})}var te=function(){var e=(0,z.k6)(),n=(0,L.v9)((function(e){return e.userData})),r=n.isAuthenticated,a=n.user,t=(0,L.v9)((function(e){return e.cart})).cartItems,i=(0,l.useState)(!1),c=(0,o.Z)(i,2),h=c[0],u=c[1],m=(0,l.useState)(0),j=(0,o.Z)(m,2),p=j[0],f=j[1],g=(0,l.useState)("in"),v=(0,o.Z)(g,2),b=v[0],S=v[1],Z=(0,l.useState)(!1),C=(0,o.Z)(Z,2),k=C[0],y=C[1],I=(0,l.useState)(""),D=(0,o.Z)(I,2),w=D[0],E=D[1],F=(0,L.I0)();(0,l.useEffect)((function(){f(t.length),F((0,_.Vv)())}),[F,t]);var P=function(){u(!h)},R=function(e){E(e.target.value)},M=function(n){n.preventDefault(),w.trim()?e.push("/products/".concat(w)):e.push("/products")},T=function(){E(""),u(!h)};return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"header",children:[(0,x.jsxs)("div",{className:"headerTop",children:[(0,x.jsx)("div",{className:"headerTopLeft",children:(0,x.jsx)("p",{children:"Free Shipping over SGD100"})}),(0,x.jsxs)("div",{className:"headerTopRight",children:[(0,x.jsxs)("div",{className:"headerRetailer",children:[(0,x.jsx)("span",{children:(0,x.jsx)(B.Z,{className:"headerRetailer_Svg"})}),(0,x.jsx)("span",{children:"FIND A RETAILER"})]}),(0,x.jsx)("div",{className:"headerFlag",children:(0,x.jsx)("span",{children:(0,x.jsx)(U,{value:b,onChange:function(e){S(e.target.value)}})})}),(0,x.jsx)("div",{className:"headerLogin",children:r?(0,x.jsx)(A.rU,{to:"/account",style:{color:"inherit",textDecoration:"none"},children:(0,x.jsx)("button",{children:"My Account"})}):(0,x.jsx)(A.rU,{to:"/signup",style:{color:"inherit",textDecoration:"none"},children:(0,x.jsx)("button",{children:"Sign Up"})})})]})]}),(0,x.jsxs)("div",{className:"headerBottom",children:[(0,x.jsx)("div",{className:"headerBottom__logo",children:(0,x.jsxs)("div",{className:"header_mobile_menu",children:[(0,x.jsxs)("span",{children:[(0,x.jsx)(d.Z,{onClick:function(){return y(!k)},sx:{fontSize:26,color:"black","&:hover":{color:"#e7070f",cursor:"pointer"}}}),k&&(0,x.jsx)(Y,{handleSideBarMenu:function(){y(!k)},isAuthenticated:r,user:a})]}),(0,x.jsx)("span",{children:(0,x.jsx)(N,{searchBarActive:h,searchValue:w,handleCrossButtonClick:T,handleSearchButtonClick:P,handleSearchInputChange:R,handleSearchFormSubmit:M})})]})}),!h&&(0,x.jsx)(A.rU,{to:"/",children:(0,x.jsx)("img",{src:s(35756),alt:"logo",className:"headerBottom__logo_main"})}),!h&&(0,x.jsx)("div",{className:"headerBottom_navMenu",children:(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(A.rU,{to:"/",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(A.rU,{to:"/products",children:"Product"})}),(0,x.jsx)("li",{children:(0,x.jsx)(A.rU,{to:"/contact",children:"Contact"})}),(0,x.jsx)("li",{children:(0,x.jsx)(A.rU,{to:"/about_us",children:"About"})})]})}),(0,x.jsxs)("div",{className:"headerBotttom_icons",children:[(0,x.jsx)("div",{className:"search_Bar",children:(0,x.jsx)(N,{searchBarActive:h,searchValue:w,handleCrossButtonClick:T,handleSearchButtonClick:P,handleSearchInputChange:R,handleSearchFormSubmit:M})}),(0,x.jsx)("span",{children:(0,x.jsx)(A.rU,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:(0,x.jsx)(ae,{cartItemCount:p})})}),(0,x.jsx)("span",{children:(0,x.jsx)(se,{user:a,isAuthenticated:r})})]})]})]})})}},35756:function(e,n,s){e.exports=s.p+"static/media/logo.1263e68b0e4cb77606c2.png"}}]);
//# sourceMappingURL=620.fcb57c5e.chunk.js.map