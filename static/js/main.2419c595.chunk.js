(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{58:function(A,e,n){},59:function(A,e,n){},97:function(A,e,n){"use strict";n.r(e);var t=n(1),r=n.n(t),a=n(43),c=(n(58),n(4)),o=(n(59),n(2)),s=function(){return Object(o.jsx)("div",{className:"loadingContainer",children:Object(o.jsx)("div",{className:"loading",children:Object(o.jsx)("div",{})})})},i=n(25),u=n(18),d=n.n(u),f=n(26),l=n.n(f);function g(A){return A.charAt(0).toUpperCase()+A.slice(1)}var p,v,b,B,j,h,w,C,O=["height","weight","stats","types","sprites","abilites","types"],P=function(){var A=Object(i.a)(d.a.mark((function A(e){var n;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n="https://pokeapi.co/api/v2/pokemon/"+e,A.next=3,l.a.get(n).catch((function(A){return""}));case 3:return A.abrupt("return",A.sent);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),m=function(){var A=Object(i.a)(d.a.mark((function A(){return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return"https://pokeapi.co/api/v2/type",A.next=3,l.a.get("https://pokeapi.co/api/v2/type").catch((function(A){return""}));case 3:return A.abrupt("return",A.sent);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),x=function(){var A=Object(i.a)(d.a.mark((function A(e){var n;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n="https://pokeapi.co/api/v2/type/"+e,A.next=3,l.a.get(n).catch((function(A){return""}));case 3:return A.abrupt("return",A.sent);case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),E=function(A){return Object.fromEntries(Object.entries(A).filter((function(A){var e=Object(c.a)(A,1)[0];for(var n in O)if(e===O[n])return!0})))},X=n(6),D=n(7),V=D.a.li(p||(p=Object(X.a)(["\n  width: 400px;\n  height: 153px;\n  border: 1px solid ivory;\n  border-radius: 20px;\n  box-shadow: 0px 0px 10px 2px darkgray;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  .listPhoto {\n    height: 90px;\n  }\n  margin: 10px;\n"]))),Q=function(A){var e=A.pokemon,n=A.id,t=A.handleSelectPokemon;return Object(o.jsxs)(V,{onClick:function(){return t(n)},children:[Object(o.jsx)("h3",{children:g(n)}),Object(o.jsx)("img",{className:"listPhoto",src:e.sprites.front_default,alt:"FAIL"})]})},q=D.a.div(v||(v=Object(X.a)(["\n  position: absolute;\n  left: 0;\n  z-index: -1000;\n  .background {\n    display: block;\n    width: 100%;\n    min-width: 1100px;\n  }\n  .skyBackground {\n    background-color: ",";\n  }\n"])),(function(A){return A.isDarkTheme?"#19213f":"#7acaf9"})),I=n.p+"static/media/BackgroundNightEarth.5b73ca99.png",k=function(A){var e=A.listLength,n=A.isDarkTheme;return Object(o.jsxs)(q,{isDarkTheme:n,children:[Object(o.jsx)("div",{className:"skyBackground",style:{height:"".concat(175*e-350,"px")},alt:"background"}),Object(o.jsx)("img",{className:"background",src:n?I:"data:image/png;base64,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DAABAhgAAgQwAAQIYAAIEMAAECCAASBAAANAgAAGgAABDAABAhgAAgQwAAQIYAAIEMAAECCAASBAAANAgAAGgAABDAABAhgAAgQwAAQIYAAIEMAAECCAASBAAANAgAAGgAABDAABAhgAAgQwAAT8HsB//+WzfvO613t4/anf18v6p1/vrR+ve/3A6wLY62O9/tTv62X906/31o/XvX7gdQHs9bFef+r39bL+6dd768frXj/wugD2+livP/X7eln/9Ou99eN1rx94fVp9yFVVVVVVPaUKYFVVVVUNVAGsqqqqqoEqgFVVVVU1UKcemlBVVVXVp1UBrKqqqqqBKoBVVVVVNVAFsKqqqqoGqr+EpaqqqqqBKoBVVVVVNVAFsKqqqqoGqgBWVVVV1UD1l7BUVVVVNVAFsKqqqqoGqgBWVVVV1UAVwKqqqqoaqP4SlqqqqqoGqgBWVVVV1UAVwKqqqqoaqAJYVVVVVQPVX8JSVVVV1UAVwKqqqqoaqAJYVVVVVQNVAKuqqqpqoE5/f3v/0LVr165du3Z9+rUAdu3atWvXrgPXAti1a9euXbsOXAtg165du3btOnA9/R0AuJwABoAAAQwAAQIYAAIEMAAECGAACBDAABAggAEgQAADQIAABoAAAQwAAQIYAAIEMAAECGAACBDAABAggAEgQAADQIAABoAAAQwAAQIYAAKm/wYAXE4AA0CAAAaAAAEMAAHTfwcALieAASBAAANAgAAGgIDpfwAAlxPAABAggAEgQAADQMD0P9/+1y+f//x5/W3t9e/X5t639J65zy3ta+t7176j5jM+P2err729t+hr7ruXPuP79bXPL73Ha32VruvSvdtS+jl7ei25t2v7uPZezN3TI89JyVxb93atv7191ezx2s9aundPXs9R5xi976+fCeDaz/h+eEsX++iBUdvX3Hcvfcb362ufX3qP1/oqXdele7el9HP29Fpyb9f2ce29mLunR56Tkrm27u1af3v7qtnjtZ+1dO+evJ6jzjF6318/E8C1n/H98JYu9tEDo7avue9e+ozv19c+v/Qer/VVuq5L925L6efs6bXk3q7t49p7MXdPjzwnJXNt3du1/vb2VbPHaz9r6d49eT1HnWP0vr9+JoBrP+P74S1d7KMHRm1fc9+99Bnfr699fuk9XuurdF2X7t2W0s/Z02vJvV3bx7X3Yu6e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",alt:"background"})]})},z=D.a.div(b||(b=Object(X.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n  background-color: ",";\n  box-shadow: 0px 4px 8px rgba(160, 170, 190, 0.7);\n  .searchBar {\n    padding: 6px 7px;\n    border: 1px solid lightgray;\n    box-sizing: border-box;\n    box-shadow: 0px 4px 8px rgba(110, 120, 140, 0.4);\n    border-radius: 25px;\n    width: calc(50px + 15vw);\n  }\n  .icon {\n    border: 1px solid gray;\n    border-radius: 10px;\n    padding: 5px;\n    margin: 0 3px;\n    cursor: pointer;\n  }\n  .description {\n    display: flex;\n    align-items: center;\n  }\n"])),(function(A){return A.isDarkTheme?"darkgray":"white"})),y=n(48),S=n(47),H=n(9),L=n(17),F=n(5),M=function(A,e,n){return void 0===e.payload&&(A[n].error="error",!0)},W=Object(L.b)({name:"pokeSlice",initialState:{pokemons:{},selectedPokemons:{},pokemonTypes:[],isLoading:!1},reducers:{addPokemon:function(A,e){if(M(A,e,"pokemons"))return A;var n=E(e.payload);A.pokemons[e.payload.name]=n},setSelectedPokemons:function(A,e){if(M(A,e,"selectedPokemons"))return A;if(Object(F.a)(A).pokemons[e.payload.name])return A.selectedPokemons[e.payload.name]=Object(F.a)(A).pokemons[e.payload.name],A;var n=E(e.payload);A.selectedPokemons[e.payload.name]=n},setPokemonTypes:function(A,e){A.pokemonTypes=e.payload},setIsLoading:function(A,e){A.isLoading=e.payload},clearSelectedPokemons:function(A,e){A.selectedPokemons={}}}}),G=W.reducer,N=W.actions,T=N.addPokemon,R=N.setSelectedPokemons,J=N.clearSelectedPokemons,Y=N.setPokemonTypes,Z=N.setIsLoading,K=n(22),U=Object(L.b)({name:"settingsSlice",initialState:{isDarkTheme:!1,columnNum:1},reducers:{changeTheme:function(A,e){A.isDarkTheme=!Object(F.a)(A).isDarkTheme},changeListMode:function(A,e){A.columnNum=1===Object(F.a)(A).columnNum?2:1}}}),_=U.reducer,$=U.actions,AA=$.changeTheme,eA=$.changeListMode,nA=n(50),tA=function(A){var e=A.searched,n=A.setSearched,r=A.setSelectedType,a=A.setListState,s=Object(t.useState)(null),i=Object(c.a)(s,2),u=i[0],d=i[1],f=Object(H.c)((function(A){return A.rootReducer.pokemonReducer.pokemonTypes})),l=Object(H.c)((function(A){return A.rootReducer.settingsReducer})),p=l.columnNum,v=l.isDarkTheme,b=Object(H.b)(),B=function(){u&&(n(u.toLowerCase()),a("searched"))},j=e?S.a:y.a,h=1===p?K.d:K.a,w=v?K.b:K.c,C=f.map((function(A){var e=A.name;return{value:e,label:g(e)}}));return C.unshift({value:null,label:"None"}),Object(o.jsxs)(z,{isDarkTheme:v,children:[Object(o.jsxs)("div",{className:"description",children:[Object(o.jsx)("input",{className:"searchBar",placeholder:"Search Pokemon",onChange:function(A){return d(A.target.value)},onKeyDown:function(A){"Enter"===A.key&&B()}}),Object(o.jsx)(j,{className:"icon",onClick:e?function(){n(null),a("normal"),b(J())}:B})]}),Object(o.jsxs)("div",{className:"description",children:["Filter by Type:",Object(o.jsx)(nA.a,{options:C,onChange:function(A){var e=A.value;b(J()),n(null),a(e?"filtered":"normal"),r(e)},defaultValue:C[0]}),Object(o.jsx)(h,{className:"icon",onClick:function(){return b(eA())},size:22}),Object(o.jsx)(w,{className:"icon",onClick:function(){return b(AA())},size:22})]})]})},rA=D.a.div(B||(B=Object(X.a)(["\n  width: 500px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .stats {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .photos {\n    display: flex;\n    justify-content: center;\n  }\n  .photo {\n    position: relative;\n    width: 150px;\n  }\n"]))),aA=n(49),cA=Object(aA.a)((function(){return n.e(3).then(n.bind(null,99))})),oA=cA.GiBroadsword,sA=cA.GiRosaShield,iA=cA.GiHearts,uA=cA.GiFluffyWing,dA=cA.GiPointySword,fA=cA.GiEyeShield,lA=cA.GiWeight,gA=cA.GiBodyHeight,pA=cA.GiStarFormation,vA={attack:Object(o.jsx)(oA,{}),defense:Object(o.jsx)(sA,{}),hp:Object(o.jsx)(iA,{}),speed:Object(o.jsx)(uA,{}),"special-attack":Object(o.jsx)(dA,{}),"special-defense":Object(o.jsx)(fA,{}),weight:Object(o.jsx)(lA,{}),height:Object(o.jsx)(gA,{}),types:Object(o.jsx)(pA,{})},bA=function(A){var e=A.id,n=A.pokemons[e],r=n.stats.map((function(A){return Object(o.jsxs)("div",{children:[vA[A.stat.name]," ",A.stat.name+" :"+A.base_stat]},A.stat.name)})),a=[r[5],r[3]];r[3]=a[0],r[5]=a[1];var s=[r[5],r[4]];r[4]=s[0],r[5]=s[1],r.push(Object(o.jsxs)("div",{children:[vA.weight,"weight: "+n.weight]},"weight")),r.push(Object(o.jsxs)("div",{children:[vA.height,"height: "+n.height]},"height"));var i=n.types.map((function(A){return A.type.name}));r.push(Object(o.jsxs)("div",{children:[vA.types,"types: "+i]},"types"));var u=Object(t.useState)(!1),d=Object(c.a)(u,2),f=d[0],l=d[1];return Object(o.jsxs)(rA,{children:[Object(o.jsx)("h3",{children:g(e)}),Object(o.jsx)("div",{className:"photos",onMouseOver:function(){return l(!0)},onMouseOut:function(){return l(!1)},children:Object(o.jsx)("img",{className:"photo",src:f?n.sprites.back_default:n.sprites.front_default,alt:"img"})}),Object(o.jsx)("div",{className:"stats",children:r})]})},BA=n(16),jA=n(11),hA=D.a.button(j||(j=Object(X.a)(["\n  cursor: pointer;\n  border: none;\n  background-color: gray;\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),wA=Object(D.a)(hA)(h||(h=Object(X.a)(["\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),CA=Object(D.a)(hA)(w||(w=Object(X.a)(["\n  background: transparent;\n"]))),OA=Object(D.a)(hA)(C||(C=Object(X.a)(["\n  background: darkgray;\n  margin: 10px;\n  padding: 5px;\n  border: 1px solid ivory;\n  border-radius: 4px;\n  box-shadow: 1px 1px 5px 1px darkgray;\n"]))),PA=n(51),mA=["variant","children"];var xA,EA,XA,DA,VA=function(A){var e=A.variant,n=A.children,r=Object(jA.a)(A,mA),a=r.to,c=Object(t.useMemo)((function(){switch(e){case"inline":return wA;case"regular":default:return OA;case"iconButton":return CA}}),[e]),s=Object(t.useMemo)((function(){return Object(o.jsx)(c,Object(BA.a)(Object(BA.a)({},r),{},{children:n}))}),[r,n]);return a?Object(o.jsx)(PA.a,Object(BA.a)(Object(BA.a)({},r),{},{children:s})):Object(o.jsx)(o.Fragment,{children:s})},QA=n(15),qA=D.a.aside(xA||(xA=Object(X.a)(["\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 150;\n"]))),IA=D.a.div(EA||(EA=Object(X.a)(["\n  background: #fff;\n  position: absolute;\n  margin: auto;\n  width: ",";\n  height: ",";\n  box-shadow: darkgray;\n  padding: 25px 50px;\n  border-radius: 15px;\n  > * {\n    display: flex;\n    flex-direction: column;\n    * {\n      margin-top: 5px;\n    }\n    > :nth-child(2) {\n      // background-color: red;\n    }\n  }\n"])),(function(A){return A.isStatic?"250px":"fit-content"}),(function(A){return A.isStatic?"200px":"fit-content"})),kA=D.a.div(XA||(XA=Object(X.a)(["\n  position: absolute;\n  right: 7px;\n  top: 5px;\n  cursor: pointer;\n  font-size: 20px;\n"])));function zA(A){var e=A.children,n=A.isStatic,t=A.hideModal,r=A.testContainer;return Object(QA.createPortal)(Object(o.jsx)(qA,{onClick:t,children:Object(o.jsxs)(IA,{isStatic:n,onClick:function(A){return A.stopPropagation()},children:[Object(o.jsx)(kA,{onClick:t,children:"\xd7"}),e]})}),r||document.querySelector("#modal"))}var yA=D.a.ul(DA||(DA=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n  list-style: none;\n  color: ",";\n  .filler {\n    height: 200px;\n  }\n  .listWrapper {\n    display: ",";\n    flex-direction: column;\n    grid-template-columns: 1fr 1fr;\n  }\n"])),(function(A){return A.isDarkTheme?"white":"black"}),(function(A){return 1===A.columnNum?"flex":"grid"})),SA=function(A){var e=A.loadTo,n=A.loadFrom,r=A.searched,a=A.selectedType,c=Object(H.b)(),o=Object(t.useCallback)((function(){c(Z(!0));for(var A=n+1;A<=e;A++)P(A).then((function(A){return c(T(A.data))}))}),[e,n,c]),s=Object(t.useCallback)((function(A){c(Z(!0)),P(A).then((function(A){c(J()),c(R(A.data))}))}),[c]);Object(t.useEffect)((function(){r?s(r):o()}),[o,r,s]),Object(t.useEffect)((function(){m().then((function(A){var e=A.data.results;c(Y(e))}))}),[c]),Object(t.useEffect)((function(){a&&(c(Z(!0)),x(a).then((function(A){var n=A.data.pokemon.map((function(A){return A.pokemon.name}));console.log(e);for(var t=1;t<=e;t++)P(n[t]).then((function(A){return c(R(A.data))}))})))}),[c,a,e,n])},HA=function(A,e,n){return A?Object.keys(e).map((function(A){return Object(o.jsx)(Q,{id:A,handleSelectPokemon:n,pokemon:e[A]},A)})):null},LA=function(A){var e=A.searched,n=A.selectedType,r=A.listState,a=A.loadedDataLength,i=A.setLoadedDataLength,u=Object(t.useState)(!1),d=Object(c.a)(u,2),f=d[0],l=d[1],g=Object(t.useState)(null),p=Object(c.a)(g,2),v=p[0],b=p[1],B=Object(H.c)((function(A){return A.rootReducer.pokemonReducer})),j=B.selectedPokemons,h=B.pokemons,w=B.isLoading,C=Object(H.c)((function(A){return A.rootReducer.settingsReducer})),O=C.columnNum,P=C.isDarkTheme,m=a+20;SA({loadTo:m,loadFrom:a,searched:e,selectedType:n});var x=Object(H.b)(),E=function(A){b(A),l(!0)},X=HA(h,h,E),D=HA(h,j,E),V=h.error+j.error?"error":"",Q="searched"!==r?Math.ceil(m/O):4;return("normal"===r&&m===X.length||"filtered"===r&&m===D.length||e)&&x(Z(!1)),Object(o.jsxs)(yA,{columnNum:O,isDarkTheme:P,children:[Object(o.jsxs)("div",{className:"listWrapper",children:[Object(o.jsx)(k,{listLength:Q,isDarkTheme:P}),w?Object(o.jsx)(s,{}):function(){switch(r+V){case"normal":return X;case"searched":case"filtered":return D;default:return"Error- check searched value, internet connection or try to reload a site"}}(),f?Object(o.jsx)(zA,{hideModal:function(){return l(!1)},children:Object(o.jsx)(t.Suspense,{fallback:Object(o.jsx)(s,{}),children:Object(o.jsx)(bA,{id:v,pokemons:"normal"===r?h:j})})}):null]}),Object(o.jsx)(VA,{onClick:function(){return"searched"!==r?i(a+20):{}},children:"LoadMore"})]})};var FA=function(){var A=Object(t.useState)(),e=Object(c.a)(A,2),n=e[0],r=e[1],a=Object(t.useState)(null),s=Object(c.a)(a,2),i=s[0],u=s[1],d=Object(t.useState)("normal"),f=Object(c.a)(d,2),l=f[0],g=f[1],p=Object(t.useState)(0),v=Object(c.a)(p,2),b=v[0],B=v[1];return b>1180&&alert("Hold on! The pokemons are running out!"),Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",minHeight:"400px"},children:[Object(o.jsx)(tA,{searched:n,setSearched:r,setSelectedType:u,setListState:g}),Object(o.jsx)(LA,{searched:n,selectedType:i,listState:l,setLoadedDataLength:B,loadedDataLength:b})]})},MA=function(A){A&&A instanceof Function&&n.e(4).then(n.bind(null,100)).then((function(e){var n=e.getCLS,t=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(A),t(A),r(A),a(A),c(A)}))},WA=n(12),GA=Object(WA.b)({pokemonReducer:G,settingsReducer:_}),NA=Object(L.a)({reducer:{rootReducer:GA}}),TA=document.getElementById("root");Object(a.createRoot)(TA).render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(H.a,{store:NA,children:Object(o.jsx)(FA,{})})})),MA()}},[[97,1,2]]]);
//# sourceMappingURL=main.2419c595.chunk.js.map