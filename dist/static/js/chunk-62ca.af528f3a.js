(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-62ca"],{A8qg:function(t,e,a){},AUVF:function(t,e,a){"use strict";a.r(e);var i=a("m1cH"),o=a.n(i),s=a("QbLZ"),n=a.n(s),r=a("P2sY"),d=a.n(r),c=a("L2JU"),l={id:void 0,user_id:void 0,items:[],status:"",coupons:[],discount:0},u={name:"OrderEditor",data:function(){return{formData:d()({},l),isEdit:!1,loading:!1,searching:!1,product:"",couponCode:"",modalAddItems:!1,clientList:[],statuses:[{value:"pending",label:"Pendente"},{value:"cancelled",label:"Cancelado"},{value:"paid",label:"Pago"},{value:"shipped",label:"Enviado"},{value:"finished",label:"Finalizado"}]}},computed:n()({},Object(c.b)({order:"currentOrder",products:"products",users:"users"}),{productList:function(){return this.products&&this.products.data&&this.products.data.length>0?this.products.data:[]},orderSubtotal:function(){var t=0;return this.formData.items.map(function(e){t+=e.product.price*e.quantity}),t},orderTotal:function(){return this.orderSubtotal-this.formData.discount},canSave:function(){return!(this.formData.items.length>=1&&void 0!==this.formData.user_id)},title:function(){return this.isEdit?"Editar Pedido #"+this.formData.id:"Novo Pedido"},canApplyDiscount:function(){return this.couponCode.length>3}}),watch:{couponCode:function(t){this.couponCode=t.toUpperCase()}},created:function(){this.tempRoute=d()({},this.$route),this.$route.params&&this.$route.params.id?this.isEdit=!0:this.isEdit=!1},mounted:function(){this.isEdit&&this.findOrder(this.$route.params.id)},methods:{updateNavigationTab:function(){var t=d()({},this.tempRoute,{title:this.title});this.$store.dispatch("updateVisitedView",t)},deleteNavigationtab:function(){var t=d()({},this.tempRoute,{title:""+this.formData.name});this.$store.dispatch("delVisitedView",t)},findOrder:function(t){var e=this;this.loading=!0,this.$store.dispatch("findOrder",t).then(function(){e.loading=!1,e.fillForm()})},fillForm:function(){this.formData=d()({},this.order),this.order.user&&(this.formData.user_id=this.order.user.id,this.clientList.push(this.order.user)),this.updateNavigationTab()},searchProduct:function(){var t=this;this.searching=!0,this.$store.dispatch("fetchProducts",{title:this.product}).then(function(){return t.searching=!1})},searchClient:function(t){var e=this;this.searching=!0,this.$store.dispatch("fetchUsers",{name:t}).then(function(){var t;e.searching=!1,(t=e.clientList).push.apply(t,o()(e.users.data))})},clientLabel:function(t){return t&&t.name?t.name+" "+t.surname:""},addToCart:function(t){this.formData.items.filter(function(e){return e.product.id===t.id})[0]?this.formData.items=this.formData.items.map(function(e){return e.product.id===t.id&&e.quantity++,e}):this.formData.items.unshift({product:t,quantity:1}),this.$message({message:"Item Adicionado com sucesso!",type:"success",duration:1e3})},removeFromCart:function(t){this.formData.items=this.formData.items.filter(function(e){return e.product.id!==t})},prepareToSave:function(t){var e=t.id,a=t.user_id,i=t.items;return{id:e,user_id:a,status:t.status,items:i.map(function(t){return{id:t.id?t.id:void 0,product_id:t.product.id,quantity:t.quantity}})}},handleSave:function(){var t=this;this.$store.dispatch("saveOrder",this.prepareToSave(this.formData)).then(function(){t.$message({message:"Salvo com Sucesso!",type:"success",duration:3e3}),t.fillForm(),t.isEdit||t.$router.push({name:"EditOrder",params:{id:t.formData.id}})})},showModalAddItems:function(){this.modalAddItems=!0,this.$store.dispatch("fetchProducts")},handleApplyDiscount:function(t){var e=this;t&&(this.loading=!0,this.$store.dispatch("applyDiscount",{id:this.formData.id,code:t}).then(function(t){e.$message({message:t.message,type:t.success?"success":"warning",duration:3e3}),e.loading=!1,e.fillForm(),e.updateDiscounts()}).catch(function(){return e.loading=!1}))},handleRemoveDiscount:function(t){var e=this;this.loading=!0,this.$store.dispatch("destroyDiscount",{id:this.formData.id,discount_id:t}).then(function(t){e.formData.discounts=e.formData.discounts.filter(function(e){return e.id!==t}),e.$message({message:"Desconto Removido",type:"warning",duration:3e3}),e.loading=!1,e.updateDiscounts()}).catch(function(){return e.loading=!1})},updateDiscounts:function(){var t=0;this.formData.discounts.map(function(e){t+=e.amount}),this.formData.discount=t}}},p=(a("SV7U"),a("CJQJ"),a("KHd+")),m=Object(p.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-dialog",{attrs:{visible:t.modalAddItems,title:"Adicionar Itens ao Carrinho",fullscreen:""},on:{"update:visible":function(e){t.modalAddItems=e}}},[a("el-row",[a("el-input",{attrs:{placeholder:"Buscar Produtos","suffix-icon":"el-icon-search",clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchProduct(e):null}},model:{value:t.product,callback:function(e){t.product=e},expression:"product"}})],1),t._v(" "),a("el-row",{staticStyle:{"padding-top":"10px"},attrs:{gutter:10}},t._l(t.productList.filter(function(e){return e.name.toLowerCase().includes(t.product.toLowerCase())}),function(e){return a("el-col",{key:e.id,staticStyle:{"margin-top":"10px"},attrs:{span:4}},[a("el-card",{staticClass:"box-card-component"},[a("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[a("img",{attrs:{src:e.image&&e.image.url?e.image.url:"/static/sem-imagem.png",alt:e.image&&e.image.original_name?e.image.original_name:"Sem Imagem"}})]),t._v(" "),a("div",[a("span",[a("strong",[t._v(t._s(e.name))])]),t._v(" "),a("br"),t._v(" "),a("span",[a("strong",[t._v("R$")]),t._v("\n              "+t._s(e.price)+"\n            ")]),t._v(" "),a("div",{staticStyle:{"padding-top":"10px"}},[a("el-button",{attrs:{type:"success"},on:{click:function(a){t.addToCart(e)}}},[t._v("Adicionar!")])],1)])])],1)}))],1),t._v(" "),a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.title))])]),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:17}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Itens do Pedido")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.showModalAddItems}},[t._v("Adicionar Itens")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.formData.items}},[a("el-table-column",{attrs:{label:"ID",prop:"product.id",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"Imagem",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"product-thumbnail",attrs:{src:t.row.product&&t.row.product.image?t.row.product.image.url:"/static/sem-imagem.png"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Nome",prop:"product.name"}}),t._v(" "),a("el-table-column",{attrs:{label:"Preço",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("R$ "+t._s(e.row.product.price.toFixed(2)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Quantidade",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{attrs:{min:1,max:100,size:"mini"},model:{value:e.row.quantity,callback:function(a){t.$set(e.row,"quantity",a)},expression:"scope.row.quantity"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"subtotal"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("R$ "+t._s(parseFloat(e.row.quantity*e.row.product.price).toFixed(2)))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.removeFromCart(e.row.product.id)}}},[a("i",{staticClass:"el-icon-close"})])]}}])})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Informações do Pedido")])]),t._v(" "),a("div",[a("el-form",{ref:"form",attrs:{"label-position":"top"}},[a("el-form-item",{attrs:{label:"Cliente"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{"remote-method":t.searchClient,loading:t.searching,placeholder:"Buscar Cliente",filterable:"",remote:""},model:{value:t.formData.user_id,callback:function(e){t.$set(t.formData,"user_id",e)},expression:"formData.user_id"}},t._l(t.clientList,function(e,i){return a("el-option",{key:i,attrs:{label:t.clientLabel(e),value:e.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"Status"}},[a("el-select",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},t._l(t.statuses,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"Cupom de Desconto"}},[t.isEdit?a("el-input",{attrs:{placeholder:"Insira o código"},model:{value:t.couponCode,callback:function(e){t.couponCode=e},expression:"couponCode"}},[a("el-button",{staticStyle:{"margin-right":"-5px"},attrs:{slot:"suffix",type:t.canApplyDiscount?"primary":"default",icon:"el-icon-success"},on:{click:function(e){t.handleApplyDiscount(t.couponCode)}},slot:"suffix"})],1):a("el-tooltip",{attrs:{content:"Voce precisa salvar o pedido antes de adicionar desconto!",placement:"top"}},[a("el-input",{attrs:{placeholder:"Insira o código","suffix-icon":"el-icon-warning",disabled:""}})],1)],1),t._v(" "),a("div",{staticClass:"order-info"},[a("h4",[t._v("Subtotal")]),t._v(" "),a("span",[t._v("R$ "+t._s(t.orderSubtotal.toFixed(2)))])]),t._v(" "),a("div",{staticClass:"order-info"},[a("h4",[t._v("Descontos")]),t._v(" "),a("span",[t._v("R$ "+t._s(t.formData.discount))])]),t._v(" "),t._l(t.formData.discounts,function(e,i){return a("el-row",{key:i,staticClass:"order-info-discount"},[a("small",[t._v(t._s(e.coupon))]),t._v(" "),a("el-button",{staticClass:"remove-btn",attrs:{type:"text"},on:{click:function(a){t.handleRemoveDiscount(e.id)}}},[a("i",{staticClass:"el-icon-close"})]),t._v(" "),a("span",[t._v("R$ "+t._s(e.amount))])],1)}),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"order-info"},[a("h4",[t._v("Total")]),t._v(" "),a("span",[t._v("R$ "+t._s(t.orderTotal.toFixed(2)))])])],2),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.formData.id,expression:"formData.id"}],attrs:{type:"danger"}},[a("i",{staticClass:"el-icon-delete"})]),t._v(" "),a("el-button",{staticStyle:{float:"right","margin-bottom":"10px"},attrs:{disabled:t.canSave,type:"primary"},on:{click:t.handleSave}},[t._v("Salvar")])],1)])],1)],1)],1)],1)},[],!1,null,"45c2a035",null);m.options.__file="editor.vue";e.default=m.exports},CJQJ:function(t,e,a){"use strict";var i=a("A8qg");a.n(i).a},SBBv:function(t,e,a){},SV7U:function(t,e,a){"use strict";var i=a("SBBv");a.n(i).a}}]);