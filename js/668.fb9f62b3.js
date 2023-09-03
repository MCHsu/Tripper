"use strict";(self["webpackChunktripper"]=self["webpackChunktripper"]||[]).push([[668],{107:function(t,e,s){function r(t){const e=t.toLocaleString("zh-TW",{style:"currency",currency:"TWD",minimumFractionDigits:0});return e}s.d(e,{P:function(){return r}})},1610:function(t,e,s){s.d(e,{C:function(){return o}});s(7658);var r=s(4870),i=s(3396),l=s(1020),n=s(4779);const o=(0,l.Q_)("wishList",(()=>{const t=(0,r.iH)(JSON.parse(localStorage.getItem("wishList"))||[]),e=(0,i.Fl)((()=>t.value.length)),{products:s}=(0,l.Jk)((0,n.a)());function o(e){const s=t.value.findIndex((t=>t===e.id));-1===s?t.value.push(e.id):t.value.splice(s,1)}function u(){const e=[];for(const r of t.value){const t=s.value.find((t=>t.id===r));t&&e.push(t)}return e}return(0,i.YP)(t.value,(()=>{localStorage.setItem("wishList",JSON.stringify(t.value))})),{wishLists:t,wishListItemNum:e,toggleWishList:o,getWishListItems:u}}))},5198:function(t,e,s){s.d(e,{Z:function(){return v}});var r=s(3396),i=s(4870),l=s(7139),n=s(1165),o=s(107);const u={class:"relative w-full"},c={class:"relative flex aspect-video w-full overflow-hidden rounded-2xl"},a=["src"],d={class:"py-3"},p={class:"text-14-r mb-1 w-max rounded-md bg-[#F6F8F0] py-1 px-1.5 text-[#57af34]"},f={class:"text-16-r mb-2 line-clamp-2"},m={class:"text-16-sb mt-4"},g=(0,r._)("span",{class:"mr-1"},"TWD",-1);var h={__name:"ProductCard",props:{product:{type:Object,default(){return{}},required:!0}},setup(t){const e=t,s=(0,r.Fl)((()=>`product/${e.product.id}`)),h=(0,o.P)(e.product.price);return(e,o)=>{const w=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(w,{to:(0,i.SU)(s),class:"flex flex-shrink-0 flex-col rounded-2xl"},{default:(0,r.w5)((()=>[(0,r._)("div",c,[(0,r._)("img",{src:t.product.image,alt:"product image",class:"w-full object-cover object-center transition duration-1000 ease-out hover:scale-125"},null,8,a)]),(0,r._)("div",d,[(0,r._)("p",p,(0,l.zw)(t.product.category),1),(0,r._)("p",f,(0,l.zw)(t.product.name),1),(0,r._)("div",m,[g,(0,r._)("span",null,(0,l.zw)((0,i.SU)(h)),1)])])])),_:1},8,["to"]),(0,r.Wm)(n.Z,{class:"absolute top-0 right-0 h-12 w-12 p-3",theme:"solid",product:t.product},null,8,["product"])])}}};const w=h;var v=w},557:function(t,e,s){s.d(e,{Z:function(){return d}});var r=s(3396),i=s(7139),l=s(2176);const n={class:"flex flex-col items-center justify-center gap-4"},o=(0,r._)("img",{src:l,alt:"result-not-found",class:"w-60"},null,-1),u={class:"text-18-m mb-6 text-font-gray-1"};var c={__name:"ResultNotFound",props:{text:{type:String,required:!1,default:"No search results found"}},setup(t){return(e,s)=>((0,r.wg)(),(0,r.iD)("div",n,[o,(0,r._)("p",u,(0,i.zw)(t.text),1)]))}};const a=c;var d=a},1165:function(t,e,s){s.d(e,{Z:function(){return a}});var r=s(3396),i=s(4870),l=s(7139),n=s(1610),o=s(6846),u={__name:"WishListButton",props:{product:{type:Object,default(){return{}}},theme:{type:String,required:!0}},setup(t){const e=t,s=(0,n.C)(),u=(0,r.Fl)((()=>s.wishLists.includes(e.product.id)));return(e,n)=>((0,r.wg)(),(0,r.iD)("button",{onClick:n[0]||(n[0]=e=>(0,i.SU)(s).toggleWishList(t.product))},[(0,r.Wm)((0,i.SU)(o),{class:(0,l.C_)(["h-full w-full stroke-2","transition duration-500  ease-in-out hover:scale-110","outline"===t.theme&&!(0,i.SU)(u)&&" fill-transparent stroke-font-dark","outline"===t.theme&&(0,i.SU)(u)&&"fill-error stroke-error","solid"===t.theme&&!(0,i.SU)(u)&&" fill-black/60 stroke-white","solid"===t.theme&&(0,i.SU)(u)&&"fill-error stroke-white"])},null,8,["class"])]))}};const c=u;var a=c},8668:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var r=s(3396),i=s(7139),l=s(4870),n=s(5198),o=s(557),u=s(1610);const c={key:0,class:"grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},a={key:1,class:"flex flex-grow items-center justify-center"};var d={__name:"ProductWishlist",setup(t){const e=(0,u.C)();return(t,s)=>0!=(0,l.SU)(e).wishLists.length?((0,r.wg)(),(0,r.iD)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,l.SU)(e).getWishListItems(),(t=>((0,r.wg)(),(0,r.j4)(n.Z,{key:t.id,product:t},null,8,["product"])))),128))])):((0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(o.Z,{text:"Your wish list is empty!"})]))}};const p=d;var f=p;const m={id:"wishlist",class:"flex min-h-full flex-col"},g={class:"container mb-6 mt-6 flex h-full flex-grow flex-col lg:mb-14 lg:mt-12"},h={class:"flex"},w={class:"mb-6"},v={class:"text-16-r align-middle"};var x={__name:"WishlistView",setup(t){const e=(0,u.C)();return(t,s)=>((0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("section",g,[(0,r._)("div",h,[(0,r._)("h2",w,[(0,r.Uk)(" Wish List "),(0,r._)("span",v,"("+(0,i.zw)((0,l.SU)(e).wishListItemNum)+" items)",1)])]),(0,r.Wm)(f)])]))}};const _=x;var b=_},2176:function(t,e,s){t.exports=s.p+"img/result-not-found.89bb6a94.svg"}}]);
//# sourceMappingURL=668.fb9f62b3.js.map