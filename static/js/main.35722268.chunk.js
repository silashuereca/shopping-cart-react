(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),s=(n(15),n(6)),i=n(3),l=n(4),d=n(7),u=n(5),p=n(8),m=(n(16),function(){return r.a.createElement("div",{className:"header-container"})}),h=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Products"),r.a.createElement("div",{className:"product-container"},e.products.map(function(t){return r.a.createElement("div",{key:t.key},r.a.createElement("h3",null,t.product),r.a.createElement("p",null,t.price.toFixed(2)),r.a.createElement("button",{onClick:e.onAddProduct,value:"".concat(t.product," ").concat(t.price)},"Buy"))})))},E=function(e){return r.a.createElement("div",{className:"cartbtn-container"},r.a.createElement("p",{onClick:e.onOpen},"Cart ",e.numberOfOrders.length))},f=function(e){for(var t=e.orders.map(function(e){return parseInt(e.price)}),n=0,a=0;a<t.length;a++)n+=t[a];return console.log(n),r.a.createElement("div",{className:"cart-container",style:{right:"".concat(e.position,"px")}},r.a.createElement("div",{onClick:e.onClose,className:"close"}),r.a.createElement("div",{className:"orders"}),r.a.createElement("p",{className:"total"},"Total: $",n),r.a.createElement("div",{className:"order-container"},e.orders.map(function(t){return r.a.createElement("div",{key:t.key,className:"order"},r.a.createElement("div",{className:"product"},r.a.createElement("h4",null,t.product)),r.a.createElement("div",{className:"price-container"},r.a.createElement("p",{className:"delete",onClick:function(){return e.deleteItem(t.key)}},"Delete"),r.a.createElement("p",{className:"price"},t.price)))})))},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={cartPosition:-500,products:[{product:"Shoes",price:9,key:1},{product:"Pants",price:45,key:2},{product:"Shirt",price:25,key:3},{product:"Hat",price:45,key:4},{product:"Socks",price:13,key:5},{product:"Boxers",price:25,key:6}],cartProducts:[]},n.handleClose=function(){return n.setState({cartPosition:-500})},n.handleOpen=function(){return n.setState({cartPosition:0})},n.handleAddProduct=function(e){var t=e.target.value.split(" "),a={product:t[0],price:parseInt(t[1]).toFixed(2),key:Date.now()},r=[].concat(Object(s.a)(n.state.cartProducts),[a]);n.setState({cartProducts:r})},n.deleteItem=function(e){var t=n.state.cartProducts.filter(function(t){return t.key!==e});n.setState({cartProducts:t})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.state.cartProducts),r.a.createElement("div",{className:"App"},r.a.createElement(E,{onOpen:this.handleOpen,numberOfOrders:this.state.cartProducts}),r.a.createElement(f,{position:this.state.cartPosition,onClose:this.handleClose,orders:this.state.cartProducts,deleteItem:this.deleteItem}),r.a.createElement(m,null),r.a.createElement(h,{onAddProduct:this.handleAddProduct,products:this.state.products}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.35722268.chunk.js.map