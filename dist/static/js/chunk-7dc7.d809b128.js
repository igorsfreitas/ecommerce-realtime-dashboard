(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7dc7"],{D7By:function(t,e,a){},EBDN:function(t,e,a){"use strict";var i=a("zM5g");a.n(i).a},HKPr:function(t,e,a){"use strict";var i=a("YPLS");a.n(i).a},Hvaj:function(t,e,a){"use strict";var i=a("rfXi"),n=a.n(i),o=a("m1cH"),s=a.n(o),r=a("QbLZ"),l=a.n(r),c=a("P2sY"),u=a.n(c),d=a("L2JU"),g=a("7Qib"),m={name:"MediaManager",props:{visibility:{required:!0,default:!1,type:Boolean},image:{type:null|Object,default:null,required:!0}},data:function(){return{opened:!1,activeTab:"gallery",uploadError:null,uploadFieldName:"images",uploadCount:0,isUploading:!1,activeImage:this.image?u()({},this.image):{}}},computed:l()({},Object(d.b)({images:"images"}),{fileList:function(){return[].concat(s()(this.images.data))},hasActiveImage:function(){return this.activeImage&&this.activeImage.id}}),watch:{visibility:function(t){t?(this.opened=!0,this.$emit("update:visibility",!0)):(this.opened=!1,this.$emit("update:visibility",!1))},opened:function(t){t?this.$emit("update:visibility",!0):this.$emit("update:visibility",!1)}},created:function(){this.getImages()},mounted:function(){this.reset()},methods:{getImages:function(){return this.$store.dispatch("getImages")},reset:function(){this.uploadError=null},save:function(t){var e=this;this.isUploading=!0,this.activeTab="gallery",this.$store.dispatch("uploadImages",t).then(function(t){e.uploadCount=0,e.isUploading=!1}).catch(function(t){e.uploadCount=0,e.isUploading=!1,e.uploadError=t.response})},filesChange:function(t,e){var a=new FormData;e.length&&(n()(Array(e.length).keys()).map(function(i){a.append(t,e[i],e[i].name)}),this.uploadCount=e.length,this.save(a))},isActive:function(t){return this.activeImage&&this.activeImage.id===t?"active":""},setActiveImage:function(t){this.activeImage&&this.activeImage.id===t.id?this.activeImage={}:this.activeImage=t},formatSize:function(t){return Object(g.b)(t)},use:function(){this.$store.dispatch("updateImage",this.activeImage),this.opened=!1,this.$emit("selectImage",this.activeImage)},destroyImage:function(){var t=this;this.$store.dispatch("destroyImage",this.activeImage.id).then(function(){t.$message({message:"Deletado com sucesso!",type:"warning",showClose:!0,duration:1e3}),t.activeImage={}})}}},p=(a("PGqW"),a("EBDN"),a("KHd+")),f=Object(p.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.opened,fullscreen:"",title:"Gerenciador de Mídias"},on:{"update:visible":function(e){t.opened=e}}},[a("el-row",{staticStyle:{"margin-top":"-30px"}},[a("el-col",{attrs:{span:t.hasActiveImage?19:24}},[a("el-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"Galeria",name:"gallery"}},[a("el-row",[a("section",{},[a("el-col",[a("div",[a("ul",{staticClass:"gallery-elements"},[t._l(t.uploadCount,function(e){return a("li",{directives:[{name:"show",rawName:"v-show",value:t.isUploading,expression:"isUploading"}],key:"loading_"+e,staticClass:"gallery-element"},[a("div",{staticClass:"element-content"},[a("div",{staticClass:"spinner"},[a("div",{staticClass:"animation"},[a("div",{staticClass:"circle one"})]),t._v(" "),a("div",{staticClass:"animation"},[a("div",{staticClass:"circle two"})]),t._v(" "),a("div",{staticClass:"animation"},[a("div",{staticClass:"circle three"})]),t._v(" "),a("div",{staticClass:"animation"},[a("div",{staticClass:"circle four"})]),t._v(" "),a("div",{staticClass:"animation"},[a("div",{staticClass:"circle five"})])]),t._v(" "),a("span",[t._v("Loading...")])])])}),t._v(" "),t._l(t.fileList,function(e,i){return a("li",{key:i,class:"gallery-element "+t.isActive(e.id),on:{click:function(a){t.setActiveImage(e)}}},[a("div",{staticClass:"element-content thumbnail"},[a("img",{attrs:{src:e.url,alt:e.title}})])])})],2)])])],1)])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Upload",name:"upload"}},[a("el-row",[a("form",{staticStyle:{"padding-right":"20px"},attrs:{enctype:"multipart/form-data",novalidate:""}},[a("div",{staticClass:"dropbox"},[a("input",{staticClass:"input-file",attrs:{name:t.uploadFieldName,disabled:t.isUploading,type:"file",multiple:"",accept:"image/*"},on:{change:function(e){t.filesChange(e.target.name,e.target.files),t.fileCount=e.target.files.length}}}),t._v(" "),t.isUploading?t._e():a("p",[t._v("Arraste e solte os arquivos aqui\n                    "),a("br"),t._v("Ou Clique para procurar\n                  ")])])])])],1)],1)],1),t._v(" "),t.hasActiveImage?a("el-col",{attrs:{span:5}},[a("el-card",{staticClass:"box-card-component",staticStyle:{"margin-top":"40px"}},[a("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[a("img",{staticClass:"image",staticStyle:{"margin-left":"auto","margin-right":"auto",width:"100%",height:"100%","max-width":"350px"},attrs:{src:t.activeImage.url}})]),t._v(" "),a("span",[t._v(t._s(t.formatSize(t.activeImage.size)))]),t._v(" "),a("el-row",[a("el-form",{attrs:{"label-position":"left"},model:{value:t.activeImage,callback:function(e){t.activeImage=e},expression:"activeImage"}},[a("el-form-item",{attrs:{label:"Título"}},[a("el-input",{model:{value:t.activeImage.original_name,callback:function(e){t.$set(t.activeImage,"original_name",e)},expression:"activeImage.original_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"URL"}},[a("el-input",{attrs:{readonly:""},model:{value:t.activeImage.url,callback:function(e){t.$set(t.activeImage,"url",e)},expression:"activeImage.url"}})],1),t._v(" "),a("el-button",{staticStyle:{width:"60%"},attrs:{type:"primary"},on:{click:function(e){return e.preventDefault(),t.use(e)}}},[t._v("Usar esta")]),t._v(" "),a("el-button",{staticStyle:{width:"25%"},attrs:{type:"danger"},on:{click:function(e){return e.preventDefault(),t.destroyImage(e)}}},[a("i",{staticClass:"el-icon-delete"})])],1)],1)],1)],1):t._e()],1)],1)],1)},[],!1,null,"12479201",null);f.options.__file="index.vue";e.a=f.exports},Mz3J:function(t,e,a){"use strict";Math.easeInOutQuad=function(t,e,a,i){return(t/=i/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e};var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function n(t,e,a){var n=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,o=t-n,s=0;e=void 0===e?500:e;!function t(){s+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(s,n,o,e)),s<e?i(t):a&&"function"==typeof a&&a()}()}var o={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&n(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&n(0,800)}}},s=(a("HKPr"),a("KHd+")),r=Object(s.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"cebf2f0c",null);r.options.__file="index.vue";e.a=r.exports},PGqW:function(t,e,a){"use strict";var i=a("yVfq");a.n(i).a},YPLS:function(t,e,a){},kkYx:function(t,e,a){"use strict";a.r(e);var i=a("P2sY"),n=a.n(i),o=a("QbLZ"),s=a.n(o),r=a("Mz3J"),l=a("L2JU"),c=a("LvDl"),u=a("Hvaj"),d={title:"",description:""},g={name:"CategoriesListing",components:{Pagination:r.a,MediaManager:u.a},data:function(){return{query:{title:void 0,page:this.categories&&this.categories.pagination.page?this.categories.pagination.page:1,limit:10},loading:!1,dialogVisible:!1,innerVisible:!1,mediaManager:!1,formData:this.category?this.category:{},isEdit:!1}},computed:s()({},Object(l.b)({categories:"categories",category:"currentCategory"}),{orderedCategories:function(){return Object(c.orderBy)(this.categories.data,"id")}}),created:function(){this.$route.query&&this.$route.query.page&&(this.query.page=parseInt(this.$route.query.page))},mounted:function(){this.fetch(),this.formData=n()({},d)},methods:{fetch:function(){var t=this;return this.loading=!0,this.updateQueryParameters(),this.$store.dispatch("fetchCategories",this.query).then(function(){t.loading=!1})},handleSearch:function(){var t=this;this.loading=!0,this.fetch().then(function(){return t.loading=!1})},handleClearSearch:function(){var t=this;this.query.title=void 0,this.loading=!0,this.fetch().then(function(){return t.loading=!1})},handleEdit:function(t){var e=this;this.isEdit=!0,this.loading=!0,this.$store.dispatch("findCategory",t).then(function(){e.formData=n()({},e.category),e.loading=!1,e.dialogVisible=!0})},handleCreate:function(){this.isEdit=!1,this.formData=n()({},d),this.dialogVisible=!0},handleSave:function(){var t=this;this.loading=!0,this.$store.dispatch("saveCategory",this.formData).then(function(){t.loading=!1,t.$message({message:"Salvo com sucesso!",type:"success",showClose:!0,duration:1e4}),t.formData=n()({},t.category),t.isEdit=!0})},handleDelete:function(){var t=this;this.loading=!0,this.$store.dispatch("destroyCategory",this.formData.id).then(function(){t.loading=!1,t.innerVisible=!1,t.dialogVisible=!1,t.$message({message:"Deletado com sucesso!",type:"warning",showClose:!0,duration:1e3})})},changeImage:function(t){this.formData.image_id=t.id,this.formData.image=t},updateQueryParameters:function(){this.query.page>1?this.$router.replace({query:{page:this.query.page}}):1===this.query.page&&this.$router.replace({query:{}})}}},m=(a("yrEH"),a("KHd+")),p=Object(m.a)(g,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleCreate}},[t._v("Nova Categoria")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.orderedCategories.filter(function(e){return!t.query.title||e.title.toLowerCase().includes(t.query.title.toLowerCase())}),fit:""}},[a("el-table-column",{attrs:{label:"ID",prop:"id",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{label:"Nome",prop:"title"}}),t._v(" "),a("el-table-column",{attrs:{label:"Imagem"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"product-tumbnail"},[a("img",{attrs:{src:t.row.image&&t.row.image.url?t.row.image.url:"/static/sem-imagem.png",alt:t.row.image&&t.row.image.orginal_name?t.row.image.orginal_name:"Sem Imagem"}})])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"right",width:"200"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("el-input",{key:e.row?e.row.id:"",attrs:{size:"mini",placeholder:"Filtrar",clearable:""},on:{clear:t.handleClearSearch},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleSearch(e):null}},model:{value:t.query.title,callback:function(e){t.$set(t.query,"title",e)},expression:"query.title"}})]}},{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.row.id)}}},[t._v("Editar")])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.categories.pagination.total&&t.categories.pagination.total>0,expression:"categories.pagination.total && categories.pagination.total > 0"}],attrs:{total:t.categories.pagination.total?t.categories.pagination.total:0,page:t.query.page,limit:t.query.limit},on:{"update:page":function(e){t.$set(t.query,"page",e)},"update:limit":function(e){t.$set(t.query,"limit",e)},pagination:t.fetch}}),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible,title:(t.isEdit?"Editar":"Criar")+" Categoria",width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-dialog",{attrs:{visible:t.innerVisible,width:"50%",title:"Confirmação","append-to-body":"",center:""},on:{"update:visible":function(e){t.innerVisible=e}}},[a("span",[t._v("\n        Tem certeza que deseja deletar a categoria:\n        "),a("b",[t._v(t._s(t.formData.title))])]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.innerVisible=!1}}},[t._v("Cancelar")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleDelete}},[t._v("Confirmar")])],1)]),t._v(" "),a("el-col",{attrs:{span:7}},[a("div",{staticClass:"category-thumb",on:{click:function(e){t.mediaManager=!0}}},[a("img",{staticClass:"category-image",attrs:{src:t.formData.image&&t.formData.image.url?t.formData.image.url:"/static/sem-imagem.png",alt:t.formData.image&&t.formData.image.original_name?t.formData.image.original_name:"Sem Imagem"}})])]),t._v(" "),a("el-col",{attrs:{span:16,push:1}},[a("el-form",{ref:"form",attrs:{model:t.formData}},[a("el-form-item",{attrs:{label:"Título"}},[a("el-input",{attrs:{placeholder:"Nome da Categoria"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Description"}},[a("el-input",{attrs:{type:"textarea",placeholder:"Descrição"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.formData.id?a("el-button",{staticStyle:{float:"left"},attrs:{type:"danger"},on:{click:function(e){t.innerVisible=!0}}},[t._v("Deletar")]):t._e(),t._v(" "),a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancelar")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleSave}},[t._v("Confirmar")])],1)],1),t._v(" "),a("media-manager",{attrs:{visibility:t.mediaManager,image:t.formData.image},on:{"update:visibility":function(e){t.mediaManager=e},selectImage:t.changeImage}})],1)},[],!1,null,"54a8d3f6",null);p.options.__file="categories.vue";e.default=p.exports},yVfq:function(t,e,a){},yrEH:function(t,e,a){"use strict";var i=a("D7By");a.n(i).a},zM5g:function(t,e,a){}}]);