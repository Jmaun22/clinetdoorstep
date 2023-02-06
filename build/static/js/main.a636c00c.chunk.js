(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{115:function(e,t,n){},131:function(e,t,n){},136:function(e,t,n){},139:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(40),s=n.n(r),i=(n(131),n(3)),o=n(19),l=n(10),d=n(120),j=n(160),b=n(162),h=n(159),u=n(118),O=n(17),p=n(20),m=n(28),x=n(5);function g(e,t,n){return new Promise((function(c,a){var r,s,i,o=window.indexedDB.open("at-your-door",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("dishes",{keyPath:"_id"}),t.createObjectStore("myDishes",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,s=r.transaction(e,"readwrite"),i=s.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":i.put(n),c(n);break;case"get":var l=i.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":i.delete(n._id);break;default:console.log("No valid method")}s.oncomplete=function(){r.close()}}}))}var f=n(6),y=n(24),v="UPDATE_DISHES",w="ADD_TO_CART",N="ADD_MULTIPLE_TO_CART",k="REMOVE_FROM_CART",C="UPDATE_CART_QUANTITY",_="TOGGLE_CART",S="UPDATE_CATEGORIES",I="UPDATE_CURRENT_CATEGORY",T=function(e,t){switch(t.type){case v:return Object(i.a)(Object(i.a)({},e),{},{dishes:Object(y.a)(t.dishes)});case w:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(y.a)(e.cart),[t.dish])});case N:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(y.a)(e.cart),Object(y.a)(t.dishes))});case C:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case k:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case _:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});case S:return Object(i.a)(Object(i.a)({},e),{},{categories:Object(y.a)(t.categories)});case I:return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var $=n(0),D=["value"],E=Object(c.createContext)(),A=E.Provider,F=function(e){e.value;var t,n=Object(f.a)(e,D),a=(t={dishes:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(c.useReducer)(T,t)),r=Object(x.a)(a,2),s=r[0],o=r[1];return Object($.jsx)(A,Object(i.a)({value:[s,o]},n))},Q=function(){return Object(c.useContext)(E)};var P,R,L,U,B,G,Y=function(e){var t=Q(),n=Object(x.a)(t,2),c=n[0],a=n[1],r=e.image,s=e.name,l=e._id,d=e.price,j=(e.quantity,c.cart);return Object($.jsxs)("div",{className:"card px-1 py-1",children:[Object($.jsxs)(o.b,{to:"/dishes/".concat(l),style:{textDecoration:"none"},children:[Object($.jsx)("img",{className:"dish-img-size",alt:s,src:"/images/".concat(r)}),Object($.jsx)("p",{style:{textDecoration:"none"},children:s})]}),Object($.jsx)("div",{children:Object($.jsxs)("span",{children:["$",d]})}),Object($.jsx)("button",{onClick:function(){var t=j.find((function(e){return e._id===l}));t?(a({type:C,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),g("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:w,dish:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),g("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},q=n(122),W=n(25),M=n(161),H=Object(M.a)(P||(P=Object(W.a)(["\n  query getDishes($category: ID) {\n    dishes(category: $category) {\n      _id\n      name\n      description\n      image\n      price\n      ingredients\n      category {\n        _id\n      }\n    }\n  }\n"]))),z=Object(M.a)(R||(R=Object(W.a)(["\n  query getMyDishes($prepper: ID) {\n    myDishes(prepper: $prepper) {\n      _id\n      name\n      description\n      image\n      price\n      ingredients\n      category {\n        _id\n      }\n    }\n  }\n"]))),J=Object(M.a)(L||(L=Object(W.a)(["\n  query getCheckout($dishes: [ID]!) {\n    checkout(dishes: $dishes) {\n      session\n    }\n  }\n"]))),V=(Object(M.a)(U||(U=Object(W.a)(["\n  {\n    dishes {\n      _id\n      name\n      description\n      price\n      ingredients\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(M.a)(B||(B=Object(W.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),K=Object(M.a)(G||(G=Object(W.a)(["\n  {\n    user {\n      firstName\n      lastName\n      email\n      password\n      address\n      state\n      city\n      phoneNumber\n      orders {\n        _id\n        purchaseDate\n        dishes {\n          _id\n          name\n          description\n          image\n          price\n          ingredients\n        }\n      }\n    }\n  }\n"]))),X=n.p+"static/media/spinner.7e729fec.gif";var Z,ee,te,ne,ce,ae=function(){var e=Q(),t=Object(x.a)(e,2),n=t[0],a=t[1],r=n.currentCategory,s=Object(q.b)(H),i=s.loading,o=s.data;return Object(c.useEffect)((function(){console.log("--------Loading---------"),console.log(o),o?(a({type:v,dishes:o.dishes}),o.dishes.forEach((function(e){g("dishes","put",e)}))):i||g("dishes","get").then((function(e){a({type:v,dishes:e})}))}),[o,i,a]),Object($.jsxs)("div",{className:"my-2",children:[Object($.jsx)("h2",{children:"Our Food:  \ud83e\udd57"}),n.dishes.length?Object($.jsx)("div",{className:"flex-row-customer dish-css",children:(r?n.dishes.filter((function(e){return e.category._id===r})):n.dishes).map((function(e){return Object($.jsx)(Y,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object($.jsx)("h3",{children:"You haven't added any dishes yet!"}),i?Object($.jsx)("img",{src:X,alt:"loading"}):null]})},re=n(116),se=n(154),ie=function(e){var t=e.item,n=Q(),c=Object(x.a)(n,2)[1];return Object($.jsxs)("div",{className:"flex-row",children:[Object($.jsx)("div",{children:Object($.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object($.jsxs)("div",{children:[Object($.jsxs)("div",{children:[t.name,", $",t.price]}),Object($.jsxs)("div",{children:[Object($.jsx)("span",{children:"Qty:"}),Object($.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(c({type:k,_id:t._id}),g("cart","delete",Object(i.a)({},t))):(console.log(t),c({type:C,_id:t._id,purchaseQuantity:parseInt(n)}),console.log(t),g("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object($.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){c({type:k,_id:e._id}),g("cart","delete",Object(i.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},oe=n(57),le=n(58),de=n(107),je=n.n(de),be=new(function(){function e(){Object(oe.a)(this,e)}return Object(le.a)(e,[{key:"getProfile",value:function(){return je()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return je()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),he=(n(136),Object(re.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),ue=function(){var e=Q(),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(se.a)(J),s=Object(x.a)(r,2),i=s[0],o=s[1].data;function l(){a({type:_})}return Object(c.useEffect)((function(){o&&he.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(c.useEffect)((function(){function e(){return(e=Object(m.a)(Object(p.a)().mark((function e(){var t;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("cart","get");case 2:t=e.sent,a({type:N,dishes:Object(y.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,a]),n.cartOpen?Object($.jsxs)("div",{className:"cart",children:[Object($.jsx)("div",{className:"close",onClick:l,children:"[close]"}),Object($.jsx)("h2",{children:"Shopping Cart"}),n.cart.length?Object($.jsxs)("div",{children:[n.cart.map((function(e){return Object($.jsx)(ie,{item:e},e._id)})),Object($.jsxs)("div",{className:"flex-row space-between",children:[Object($.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),be.loggedIn()?Object($.jsx)("button",{onClick:function(){var e=[];console.log(n.cart),n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),i({variables:{dishes:e}})},children:"Checkout"}):Object($.jsx)("span",{children:"(log in to check out)"})]})]}):Object($.jsxs)("h3",{children:[Object($.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"Shopping cart empty"]})]}):Object($.jsx)("div",{className:"cart-closed",onClick:l,children:Object($.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\udecd"})})},Oe=(n(115),n(48)),pe=n(71),me=n(72),xe=n(156),ge=n(117),fe=n(157),ye=n(121),ve=n(163),we=n(155),Ne=Object(M.a)(Z||(Z=Object(W.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ke=Object(M.a)(ee||(ee=Object(W.a)(["\n  mutation addDish($name: String!, $ingredients: String!, $price: String!, $category: String!, $description: String, $image: String) {\n    addDish(name: $name, ingredients: $ingredients, price: $price, category: $category, description: $description, image: $image) {\n      _id\n      name\n   }\n  }\n"]))),Ce=Object(M.a)(te||(te=Object(W.a)(["\n  mutation removeDish($dishId: ID!) {\n    removeDish( _id: $dishId) {\n      _id\n      name\n   }\n  }\n"]))),_e=Object(M.a)(ne||(ne=Object(W.a)(["\n  mutation addOrder($dishes: [ID]!) {\n    addOrder(dishes: $dishes) {\n      purchaseDate\n      dishes {\n        _id\n        name\n        description\n        price\n        ingredients\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Se=Object(M.a)(ce||(ce=Object(W.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n    $address: String!\n    $state: String!\n    $city: String!\n    $phoneNumber: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n      address: $address\n      state: $state\n      city: $city\n      phoneNumber: $phoneNumber\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var Ie=function(){var e=Object(q.b)(z),t=e.loading,n=e.data,c=(null===n||void 0===n?void 0:n.myDishes)||{},a=Object(we.a)(Ce),r=Object(x.a)(a,2),s=r[0],i=(r[1].error,function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){var n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(be.loggedIn()?be.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,console.log(t),e.next=7,s({variables:{dishId:t}});case 7:n=e.sent,n.data,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}());return t?Object($.jsx)("h2",{children:"LOADING..."}):Object($.jsxs)("div",{className:"my-2",children:[c.length?Object($.jsx)("div",{className:"flex-row",children:c.map((function(e){return Object($.jsxs)("div",{children:[Object($.jsx)(Y,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id),Object($.jsx)("button",{onClick:function(){return i(e._id)},children:"Delete"})]})}))}):Object($.jsx)("h3",{children:"You haven't added any dishes yet!"}),t?Object($.jsx)("img",{src:X,alt:"loading"}):null]})},Te=function(){var e=Object(c.useState)({name:"",description:"",image:"",price:"",category:"",ingredients:""}),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(we.a)(ke),s=Object(x.a)(r,2),l=s[0],d=(s[1].error,function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){var c,a;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),alert("sumbitted ".concat(n.name)),console.log("working"),console.log(n),e.prev=4,console.log(n.name),console.log(n.price),console.log(n.category),console.log(n.ingredients),console.log(n.description),console.log(n.image),e.next=13,l({variables:{name:n.name,ingredients:n.ingredients,price:n.price,category:n.category,description:n.description,image:n.image}});case 13:c=e.sent,a=c.mutationResponse,console.log(a),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}()),j=function(e){var t=e.target,c=t.name,r=t.value;a(Object(i.a)(Object(i.a)({},n),{},Object(O.a)({},c,r)))},b=Object(c.useState)(!1),h=Object(x.a)(b,2),u=h[0],g=h[1],f=function(){return g(!1)};return Object($.jsxs)("div",{className:"homepage-container",children:[Object($.jsx)("div",{className:"homepageBackground",children:Object($.jsx)("button",{children:Object($.jsx)(o.b,{to:"/prepper",className:"prepperbtn",children:"Click here to see your dishes"})})}),Object($.jsxs)("div",{children:[Object($.jsxs)("div",{className:"prepper-module",children:[Object($.jsx)("h1",{children:" Lets get started as a Prepper \ud83d\ude80"}),Object($.jsx)("button",{onClick:function(){return g(!0)},id:"module-btn",children:"Get prepping add a Dish!!\ud83c\udf72"})]}),Object($.jsxs)(pe.a,{show:u,onHide:f,children:[Object($.jsx)(pe.a.Header,{closeButton:!0,children:Object($.jsx)(pe.a.Title,{children:"Add your dish here"})}),Object($.jsx)(pe.a.Body,{children:Object($.jsxs)(me.a,{onSubmit:d,children:[Object($.jsxs)(me.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object($.jsxs)(xe.a,{className:"mb-3",children:[Object($.jsx)(xe.a.Text,{id:"basic-addon1",children:"\ud83c\udf72"}),Object($.jsx)(ge.a,{name:"name",onChange:j,placeholder:"Dish Name","aria-label":"Username","aria-describedby":"basic-addon1"})]}),Object($.jsxs)(xe.a,{className:"mb-3",children:[Object($.jsx)(xe.a.Text,{id:"basic-addon1",children:"\ud83d\udcdd"}),Object($.jsx)(ge.a,{name:"description",onChange:j,placeholder:"Dish Description","aria-label":"Username","aria-describedby":"basic-addon1"})]}),Object($.jsxs)(xe.a,{className:"mb-3",children:[Object($.jsx)(xe.a.Text,{id:"basic-addon1",children:"\ud83d\uddbc\ufe0f"}),Object($.jsx)(ge.a,{name:"image",onChange:j,placeholder:"URL","aria-label":"Username","aria-describedby":"basic-addon1"})]}),Object($.jsxs)(xe.a,{className:"mb-3",children:[Object($.jsx)(xe.a.Text,{children:"\ud83d\udcb0$"}),Object($.jsx)(xe.a.Text,{children:".00"}),Object($.jsx)(ge.a,{"aria-label":"Amount (to the nearest dollar)",name:"price",onChange:j})]}),Object($.jsx)(me.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object($.jsx)(ge.a,{type:"",name:"ingredients",placeholder:"\ud83e\uddc2Ingredients",onChange:j})}),Object($.jsxs)(xe.a,{className:"mb-3",children:[Object($.jsxs)(fe.a,{variant:"outline-secondary",title:"\ud83e\udd58Dish Category",id:"input-group-dropdown-1",children:[Object($.jsx)(ye.a.Item,{href:"#"}),Object($.jsx)(ye.a.Item,{href:"#",children:"Vagetarian"}),Object($.jsx)(ye.a.Item,{href:"#",children:"Mexican"}),Object($.jsx)(ye.a.Item,{href:"#",children:"Chinese"}),Object($.jsx)(ye.a.Item,{href:"#",children:"Italian"}),Object($.jsx)(ye.a.Item,{href:"#",children:"Desserts"}),Object($.jsx)(ye.a.Item,{href:"#",children:"Beverages"}),Object($.jsx)(ye.a.Item,{href:"#",children:"Baked Goods"})]}),Object($.jsx)(ge.a,{"aria-label":"Text input with dropdown button",name:"category",onChange:j})]})]}),Object($.jsx)(me.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object($.jsx)(me.a.Check,{type:"checkbox",label:"Check me out"})}),Object($.jsx)(Oe.a,{variant:"primary",type:"submit",onClick:d,children:"Submit"})]})}),Object($.jsxs)(pe.a.Footer,{children:[Object($.jsx)(Oe.a,{variant:"secondary",onClick:f,children:"Close"}),Object($.jsx)(Oe.a,{variant:"primary",onClick:f,children:"Save Changes"})]})]})]}),Object($.jsxs)("div",{className:"prepper-benfits",children:[Object($.jsxs)(ve.a,{className:"bg-dark text-white",children:[Object($.jsx)(ve.a.Img,{src:"images/cash.jpg",alt:"Card image"}),Object($.jsxs)(ve.a.ImgOverlay,{children:[Object($.jsx)(ve.a.Title,{children:"Cash\u2618\ufe0f"}),Object($.jsx)(ve.a.Text,{children:" Make some meal earn some extra cash!!"})]})]}),Object($.jsxs)(ve.a,{className:"bg-dark text-white",children:[Object($.jsx)(ve.a.Img,{src:"images/schedule.jpg",alt:"Card image"}),Object($.jsxs)(ve.a.ImgOverlay,{children:[Object($.jsx)(ve.a.Title,{children:"Own your schedule\ud83d\uddd3"}),Object($.jsx)(ve.a.Text,{children:"Make meals on your own time and schedule them to be made at your own time!!"})]})]}),Object($.jsxs)(ve.a,{className:"bg-dark text-white",children:[Object($.jsx)(ve.a.Img,{src:"images/call.jpg",alt:"Card image"}),Object($.jsxs)(ve.a.ImgOverlay,{children:[Object($.jsx)(ve.a.Title,{children:"Support at every turn\ud83d\udcde"}),Object($.jsx)(ve.a.Text,{children:"Get support every step of the way reach out to us!"})]})]})]}),Object($.jsxs)("div",{className:"our-dishes",children:[Object($.jsx)("h1",{children:"Your prepper dishes \ud83e\udd63"}),Object($.jsx)("div",{style:{width:"100%"},children:Object($.jsx)(Ie,{})})]}),Object($.jsx)("div",{children:Object($.jsx)(ue,{})})]})};var $e=function(){var e=Q(),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(l.g)().id,s=Object(c.useState)({}),d=Object(x.a)(s,2),j=d[0],b=d[1],h=Object(q.b)(H),u=h.loading,O=h.data,p=n.dishes,m=n.cart;return Object(c.useEffect)((function(){p.length?b(p.find((function(e){return e._id===r}))):O?(a({type:v,dishes:O.dishes}),O.dishes.forEach((function(e){g("dishes","put",e)}))):u||g("dishes","get").then((function(e){a({type:v,dishes:e})}))}),[p,O,u,a,r]),Object($.jsxs)($.Fragment,{children:[j&&m?Object($.jsxs)("div",{className:"container my-1",children:[Object($.jsx)(o.b,{to:"/",children:"\u2190 Back to Dishes"}),Object($.jsx)("h2",{children:j.name}),Object($.jsx)("p",{children:j.description}),Object($.jsxs)("p",{children:[Object($.jsx)("strong",{children:"Price:"}),"$",j.price," ",Object($.jsx)("button",{onClick:function(){var e=m.find((function(e){return e._id===r}));e?(a({type:C,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),g("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:w,dish:Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})}),g("cart","put",Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object($.jsx)("button",{disabled:!m.find((function(e){return e._id===j._id})),onClick:function(){a({type:k,_id:j._id}),g("cart","delete",Object(i.a)({},j))},children:"Remove from Cart"})]}),Object($.jsx)("img",{src:"/images/".concat(j.image),alt:j.name})]}):null,u?Object($.jsx)("img",{src:X,alt:"loading"}):null,Object($.jsx)(ue,{})]})};var De=function(e){var t=e.children;return Object($.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},Ee=function(){return Object($.jsx)("div",{children:Object($.jsxs)(De,{children:[Object($.jsx)("h1",{children:"404 Page Not Found"}),Object($.jsx)("h1",{children:Object($.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})};var Ae=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(x.a)(t,2),a=n[0],r=n[1],s=Object(we.a)(Ne),l=Object(x.a)(s,2),d=l[0],j=l[1].error,b=function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){var n,c;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,be.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.target,n=t.name,c=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(O.a)({},n,c)))};return Object($.jsxs)("div",{className:"login-container my-1",children:[Object($.jsx)(o.b,{className:"go-to-signup",to:"/signup",children:"\u2190 Go to Signup"}),Object($.jsx)("h2",{children:"Login"}),Object($.jsxs)("form",{onSubmit:b,children:[Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object($.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:h})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object($.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:h})]}),j?Object($.jsx)("div",{children:Object($.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object($.jsx)("div",{className:"flex-row flex-end",children:Object($.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var Fe=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(x.a)(t,2),a=n[0],r=n[1],s=Object(we.a)(Se),l=Object(x.a)(s,1)[0],d=function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){var n,c;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName,address:a.address,state:a.state,city:a.city,phoneNumber:a.phoneNumber}});case 3:n=e.sent,c=n.data.addUser.token,be.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,c=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(O.a)({},n,c)))};return Object($.jsxs)("div",{className:"login-container my-1",children:[Object($.jsx)(o.b,{className:"go-to-signup",to:"/login",children:"\u2190 Go to Login"}),Object($.jsx)("h2",{children:"Signup"}),Object($.jsxs)("form",{onSubmit:d,children:[Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object($.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object($.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"email",children:"Email:"}),Object($.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object($.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"address",children:"Address:"}),Object($.jsx)("input",{placeholder:"Your address here",name:"address",type:"address",id:"address",onChange:j})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"state",children:"State:"}),Object($.jsx)("input",{placeholder:"ie FL, GA, NY",name:"state",type:"state",id:"state",onChange:j})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"city",children:"City:"}),Object($.jsx)("input",{placeholder:"Your city here",name:"city",type:"city",id:"city",onChange:j})]}),Object($.jsxs)("div",{className:"flex-row space-between my-2",children:[Object($.jsx)("label",{htmlFor:"phoneNumber",children:"Phone Number:"}),Object($.jsx)("input",{placeholder:"123-456-7891",name:"phoneNumber",type:"phoneNumber",id:"phoneNumer",onChange:j})]}),Object($.jsx)("div",{className:"flex-row flex-end",children:Object($.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var Qe=function(){return Object($.jsxs)("header",{className:"flex-row-header px-1",children:[Object($.jsx)("h1",{children:Object($.jsxs)(o.b,{to:"/",children:[Object($.jsx)("img",{style:{width:45},className:"ayd-logo-class",src:"images/aydLogo.png",alt:"Logo"}),Object($.jsx)("span",{style:{textSizeAdjust:"10px",verticalAlign:"middle"},children:"   At Your Doorstep"})]})}),Object($.jsx)("nav",{children:be.loggedIn()?Object($.jsx)("div",{className:"login-signup",children:Object($.jsxs)("ul",{className:"flex-row-signup",children:[Object($.jsx)("li",{className:"mx-1",children:Object($.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object($.jsx)("li",{className:"mx-1",children:Object($.jsx)("a",{href:"/",onClick:function(){return be.logout()},children:"Logout"})})]})}):Object($.jsx)("div",{className:"login-signup",children:Object($.jsxs)("ul",{className:"flex-row",children:[Object($.jsx)("li",{className:"mx-1",children:Object($.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object($.jsx)("li",{className:"mx-1",children:Object($.jsx)(o.b,{to:"/login",children:"Login"})})]})})})]})};var Pe=function(){var e=Object(we.a)(_e),t=Object(x.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(m.a)(Object(p.a)().mark((function e(){var n,c,a,r;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{dishes:c}});case 7:a=e.sent,r=a.data,r.addOrder.dishes.forEach((function(e){g("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object($.jsx)("div",{children:Object($.jsxs)(De,{children:[Object($.jsx)("h1",{children:"Success!"}),Object($.jsx)("h2",{children:"Thank you for your purchase!"}),Object($.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var Re=function(){var e,t=Object(q.b)(K).data;return t&&(e=t.user),Object($.jsx)($.Fragment,{children:Object($.jsxs)("div",{className:"container my-1",children:[Object($.jsx)(o.b,{to:"/",children:"\u2190 Back to Dishes"}),e?Object($.jsxs)($.Fragment,{children:[Object($.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object($.jsxs)("div",{className:"my-2",children:[Object($.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object($.jsx)("div",{className:"flex-row",children:e.dishes.map((function(e,t){var n=e._id,c=e.image,a=e.name,r=e.price;return Object($.jsxs)("div",{className:"card px-1 py-1",children:[Object($.jsxs)(o.b,{to:"/dishes/".concat(n),children:[Object($.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object($.jsx)("p",{children:a})]}),Object($.jsx)("div",{children:Object($.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})};var Le=function(){var e=Q(),t=Object(x.a)(e,2),n=t[0],a=t[1],r=n.categories,s=Object(q.b)(V),i=s.loading,o=s.data;return Object(c.useEffect)((function(){o?(a({type:S,categories:o.categories}),o.categories.forEach((function(e){g("categories","put",e)}))):i||g("categories","get").then((function(e){a({type:S,categories:e})}))}),[o,i,a]),Object($.jsxs)("div",{children:[Object($.jsx)("h2",{children:"Choose a Category: \u2699\ufe0f"}),r.map((function(e){return Object($.jsx)("button",{onClick:function(){var t;t=e._id,a({type:I,currentCategory:t})},children:e.name},e._id)}))]})},Ue=n(47),Be=(n(139),function(){return Object($.jsxs)("div",{className:"homepage-container",children:[Object($.jsxs)(Ue.a,{children:[Object($.jsxs)(Ue.a.Item,{children:[Object($.jsx)("img",{className:"d-block w-100",src:"images/food-bags.jpg",alt:"First slide"}),Object($.jsxs)(Ue.a.Caption,{children:[Object($.jsx)("h3",{children:"Feed your Family"}),Object($.jsx)("p",{children:"Sign up for tasty meals!"})]})]}),Object($.jsxs)(Ue.a.Item,{children:[Object($.jsx)("img",{className:"d-block w-100",src:"images/preped-food.jpg",alt:"Second slide"}),Object($.jsxs)(Ue.a.Caption,{children:[Object($.jsx)("h3",{children:"Spice up your palete!!"}),Object($.jsx)("p",{children:"Try some truely authentic food from one of our preppers."})]})]}),Object($.jsxs)(Ue.a.Item,{children:[Object($.jsx)("img",{className:"d-block w-100",src:"images/kitchen-food.jpg",alt:"Third slide"}),Object($.jsxs)(Ue.a.Caption,{children:[Object($.jsx)("h3",{children:"Want to make some extra cash??"}),Object($.jsx)("p",{children:"Quick sign up to be a prepper to start earning."})]})]})]}),Object($.jsxs)("div",{className:"customer-bottom",children:[Object($.jsx)("h1",{children:"Add a dish to your Cart\xa0\ud83d\uded2"}),Object($.jsx)(Le,{}),Object($.jsx)(ae,{})]}),Object($.jsx)(ue,{})]})}),Ge=Object(d.a)({uri:"/graphql"}),Ye=Object(u.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),qe=new j.a({link:Ye.concat(Ge),cache:new b.a});var We=function(){return Object($.jsx)(h.a,{client:qe,children:Object($.jsx)(o.a,{children:Object($.jsx)("div",{children:Object($.jsxs)(F,{children:[Object($.jsx)(Qe,{}),Object($.jsxs)(l.c,{children:[Object($.jsx)(l.a,{path:"/",element:Object($.jsx)(Te,{})}),Object($.jsx)(l.a,{path:"/login",element:Object($.jsx)(Ae,{})}),Object($.jsx)(l.a,{path:"/signup",element:Object($.jsx)(Fe,{})}),Object($.jsx)(l.a,{path:"/success",element:Object($.jsx)(Pe,{})}),Object($.jsx)(l.a,{path:"/orderHistory",element:Object($.jsx)(Re,{})}),Object($.jsx)(l.a,{path:"/prepper",element:Object($.jsx)(Be,{})}),Object($.jsx)(l.a,{path:"/dishes/:id",element:Object($.jsx)($e,{})}),Object($.jsx)(l.a,{path:"*",element:Object($.jsx)(Ee,{})})]})]})})})})},Me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function He(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(140);s.a.render(Object($.jsx)(a.a.StrictMode,{children:Object($.jsx)(We,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Me?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):He(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):He(t,e)}))}}()}},[[141,1,2]]]);
//# sourceMappingURL=main.a636c00c.chunk.js.map