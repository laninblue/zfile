(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-569f4781"],{"00f6":function(e,t,a){"use strict";var o=a("ca88"),r=a.n(o);r.a},"245d":function(e,t,a){"use strict";var o={aliyun:[{name:"华东 1（杭州）",val:"oss-cn-hangzhou.aliyuncs.com"},{name:"华东 2（上海）",val:"oss-cn-shanghai.aliyuncs.com"},{name:"华北 1（青岛）",val:"oss-cn-qingdao.aliyuncs.com"},{name:"华北 2（北京）",val:"oss-cn-beijing.aliyuncs.com"},{name:"华北 3（张家口）",val:"oss-cn-zhangjiakou.aliyuncs.com"},{name:"华北 5（呼和浩特）",val:"oss-cn-huhehaote.aliyuncs.com"},{name:"华南 1（深圳）",val:"oss-cn-shenzhen.aliyuncs.com"},{name:"西南 1（成都）",val:"oss-cn-chengdu.aliyuncs.com"},{name:"中国（香港）",val:"oss-cn-hongkong.aliyuncs.com"},{name:"美国西部 1 （硅谷）",val:"oss-us-west-1.aliyuncs.com"},{name:"美国东部 1 （弗吉尼亚）",val:"oss-us-east-1.aliyuncs.com"},{name:"亚太东南 1 （新加坡）",val:"oss-ap-southeast-1.aliyuncs.com"},{name:"亚太东南 2 （悉尼）",val:"oss-ap-southeast-2.aliyuncs.com"},{name:"亚太东南 3 （吉隆坡）",val:"oss-ap-southeast-3.aliyuncs.com"},{name:"亚太东南 5 （雅加达）",val:"oss-ap-southeast-5.aliyuncs.com"},{name:"亚太东北 1 （日本）",val:"oss-ap-northeast-1.aliyuncs.com"},{name:"亚太南部 1 （孟买）",val:"oss-ap-south-1.aliyuncs.com"},{name:"欧洲中部 1 （法兰克福）",val:"oss-eu-central-1.aliyuncs.com"},{name:"英国（伦敦）",val:"oss-eu-west-1.aliyuncs.com"},{name:"中东东部 1 （迪拜）",val:"oss-me-east-1.aliyuncs.com"}],tencent:[{name:"北京",val:"cos.ap-beijing.myqcloud.com"},{name:"上海",val:"cos.ap-shanghai.myqcloud.com"},{name:"广州",val:"cos.ap-guangzhou.myqcloud.com"},{name:"成都",val:"cos.ap-chengdu.myqcloud.com"},{name:"重庆",val:"cos.ap-chongqing.myqcloud.com"},{name:"深圳金融",val:"cos.ap-shenzhen-fsi.myqcloud.com"},{name:"上海金融",val:"cos.ap-shanghai-fsi.myqcloud.com"},{name:"北京金融",val:"cos.ap-beijing-fsi.myqcloud.com"},{name:"中国香港",val:"cos.ap-hongkong.myqcloud.com"},{name:"新加坡",val:"cos.ap-singapore.myqcloud.com"},{name:"孟买",val:"cos.ap-mumbai.myqcloud.com"},{name:"首尔",val:"cos.ap-seoul.myqcloud.com"},{name:"曼谷",val:"cos.ap-bangkok.myqcloud.com"},{name:"东京",val:"cos.ap-tokyo.myqcloud.com"},{name:"硅谷",val:"cos.na-siliconvalley.myqcloud.com"},{name:"弗吉尼亚",val:"cos.na-ashburn.myqcloud.com"},{name:"多伦多",val:"cos.na-toronto.myqcloud.com"},{name:"法兰克福",val:"cos.eu-frankfurt.myqcloud.com"},{name:"莫斯科",val:"cos.eu-moscow"}],huawei:[{name:"非洲-约翰内斯堡",val:"obs.af-south-1.myhuaweicloud.com"},{name:"华北-北京四",val:"obs.cn-north-4.myhuaweicloud.com"},{name:"华北-北京一",val:"obs.cn-north-1.myhuaweicloud.com"},{name:"华东-上海二",val:"obs.cn-east-2.myhuaweicloud.com"},{name:"华东-上海一",val:"obs.cn-east-3.myhuaweicloud.com"},{name:"华南-广州",val:"obs.cn-south-1.myhuaweicloud.com"},{name:"西南-贵阳一",val:"obs.cn-southwest-2.myhuaweicloud.com"},{name:"亚太-曼谷",val:"obs.ap-southeast-2.myhuaweicloud.com"},{name:"亚太-香港",val:"obs.ap-southeast-1.myhuaweicloud.com"},{name:"亚太-新加坡",val:"obs.ap-southeast-3.myhuaweicloud.com"}],qiniu:[{name:"华东",val:"s3-cn-east-1.qiniucs.com"},{name:"华北",val:"s3-cn-north-1.qiniucs.com"},{name:"华南",val:"s3-cn-south-1.qiniucs.com"},{name:"北美",val:"s3-us-north-1.qiniucs.com"},{name:"东南亚",val:"s3-ap-southeast-1.qiniucs.com"}]};t["a"]=o},4127:function(e,t,a){"use strict";var o=a("d233"),r=a("b313"),n={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Date.prototype.toISOString,i={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,a,r,n,s,l,c,u,m,f,p,d){var y=t;if("function"===typeof c)y=c(a,y);else if(y instanceof Date)y=f(y);else if(null===y){if(n)return l&&!d?l(a,i.encoder):a;y=""}if("string"===typeof y||"number"===typeof y||"boolean"===typeof y||o.isBuffer(y)){if(l){var g=d?a:l(a,i.encoder);return[p(g)+"="+p(l(y,i.encoder))]}return[p(a)+"="+p(String(y))]}var h,v=[];if("undefined"===typeof y)return v;if(Array.isArray(c))h=c;else{var b=Object.keys(y);h=u?b.sort(u):b}for(var w=0;w<h.length;++w){var S=h[w];s&&null===y[S]||(v=Array.isArray(y)?v.concat(e(y[S],r(a,S),r,n,s,l,c,u,m,f,p,d)):v.concat(e(y[S],a+(m?"."+S:"["+S+"]"),r,n,s,l,c,u,m,f,p,d)))}return v};e.exports=function(e,t){var a=e,s=t?o.assign({},t):{};if(null!==s.encoder&&void 0!==s.encoder&&"function"!==typeof s.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof s.delimiter?i.delimiter:s.delimiter,u="boolean"===typeof s.strictNullHandling?s.strictNullHandling:i.strictNullHandling,m="boolean"===typeof s.skipNulls?s.skipNulls:i.skipNulls,f="boolean"===typeof s.encode?s.encode:i.encode,p="function"===typeof s.encoder?s.encoder:i.encoder,d="function"===typeof s.sort?s.sort:null,y="undefined"!==typeof s.allowDots&&s.allowDots,g="function"===typeof s.serializeDate?s.serializeDate:i.serializeDate,h="boolean"===typeof s.encodeValuesOnly?s.encodeValuesOnly:i.encodeValuesOnly;if("undefined"===typeof s.format)s.format=r["default"];else if(!Object.prototype.hasOwnProperty.call(r.formatters,s.format))throw new TypeError("Unknown format option provided.");var v,b,w=r.formatters[s.format];"function"===typeof s.filter?(b=s.filter,a=b("",a)):Array.isArray(s.filter)&&(b=s.filter,v=b);var S,k=[];if("object"!==typeof a||null===a)return"";S=s.arrayFormat in n?s.arrayFormat:"indices"in s?s.indices?"indices":"repeat":"indices";var j=n[S];v||(v=Object.keys(a)),d&&v.sort(d);for(var O=0;O<v.length;++O){var q=v[O];m&&null===a[q]||(k=k.concat(l(a[q],q,j,u,m,f?p:null,b,d,y,g,w,h)))}var x=k.join(c),A=!0===s.addQueryPrefix?"?":"";return x.length>0?A+x:""}},4328:function(e,t,a){"use strict";var o=a("4127"),r=a("9e6a"),n=a("b313");e.exports={formats:n,parse:r,stringify:o}},"9e6a":function(e,t,a){"use strict";var o=a("d233"),r=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},s=function(e,t){for(var a={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,s=t.parameterLimit===1/0?void 0:t.parameterLimit,i=o.split(t.delimiter,s),l=0;l<i.length;++l){var c,u,m=i[l],f=m.indexOf("]="),p=-1===f?m.indexOf("="):f+1;-1===p?(c=t.decoder(m,n.decoder),u=t.strictNullHandling?null:""):(c=t.decoder(m.slice(0,p),n.decoder),u=t.decoder(m.slice(p+1),n.decoder)),r.call(a,c)?a[c]=[].concat(a[c]).concat(u):a[c]=u}return a},i=function(e,t,a){for(var o=t,r=e.length-1;r>=0;--r){var n,s=e[r];if("[]"===s)n=[],n=n.concat(o);else{n=a.plainObjects?Object.create(null):{};var i="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,l=parseInt(i,10);!isNaN(l)&&s!==i&&String(l)===i&&l>=0&&a.parseArrays&&l<=a.arrayLimit?(n=[],n[l]=o):n[i]=o}o=n}return o},l=function(e,t,a){if(e){var o=a.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,l=n.exec(o),c=l?o.slice(0,l.index):o,u=[];if(c){if(!a.plainObjects&&r.call(Object.prototype,c)&&!a.allowPrototypes)return;u.push(c)}var m=0;while(null!==(l=s.exec(o))&&m<a.depth){if(m+=1,!a.plainObjects&&r.call(Object.prototype,l[1].slice(1,-1))&&!a.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+o.slice(l.index)+"]"),i(u,t,a)}};e.exports=function(e,t){var a=t?o.assign({},t):{};if(null!==a.decoder&&void 0!==a.decoder&&"function"!==typeof a.decoder)throw new TypeError("Decoder has to be a function.");if(a.ignoreQueryPrefix=!0===a.ignoreQueryPrefix,a.delimiter="string"===typeof a.delimiter||o.isRegExp(a.delimiter)?a.delimiter:n.delimiter,a.depth="number"===typeof a.depth?a.depth:n.depth,a.arrayLimit="number"===typeof a.arrayLimit?a.arrayLimit:n.arrayLimit,a.parseArrays=!1!==a.parseArrays,a.decoder="function"===typeof a.decoder?a.decoder:n.decoder,a.allowDots="boolean"===typeof a.allowDots?a.allowDots:n.allowDots,a.plainObjects="boolean"===typeof a.plainObjects?a.plainObjects:n.plainObjects,a.allowPrototypes="boolean"===typeof a.allowPrototypes?a.allowPrototypes:n.allowPrototypes,a.parameterLimit="number"===typeof a.parameterLimit?a.parameterLimit:n.parameterLimit,a.strictNullHandling="boolean"===typeof a.strictNullHandling?a.strictNullHandling:n.strictNullHandling,""===e||null===e||"undefined"===typeof e)return a.plainObjects?Object.create(null):{};for(var r="string"===typeof e?s(e,a):e,i=a.plainObjects?Object.create(null):{},c=Object.keys(r),u=0;u<c.length;++u){var m=c[u],f=l(m,r[m],a);i=o.merge(i,f,a)}return o.compact(i)}},b313:function(e,t,a){"use strict";var o=String.prototype.replace,r=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,r,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},ca88:function(e,t,a){},d233:function(e,t,a){"use strict";var o=Object.prototype.hasOwnProperty,r=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),n=function(e){var t;while(e.length){var a=e.pop();if(t=a.obj[a.prop],Array.isArray(t)){for(var o=[],r=0;r<t.length;++r)"undefined"!==typeof t[r]&&o.push(t[r]);a.obj[a.prop]=o}}return t},s=function(e,t){for(var a=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)"undefined"!==typeof e[o]&&(a[o]=e[o]);return a},i=function e(t,a,r){if(!a)return t;if("object"!==typeof a){if(Array.isArray(t))t.push(a);else{if("object"!==typeof t)return[t,a];(r.plainObjects||r.allowPrototypes||!o.call(Object.prototype,a))&&(t[a]=!0)}return t}if("object"!==typeof t)return[t].concat(a);var n=t;return Array.isArray(t)&&!Array.isArray(a)&&(n=s(t,r)),Array.isArray(t)&&Array.isArray(a)?(a.forEach((function(a,n){o.call(t,n)?t[n]&&"object"===typeof t[n]?t[n]=e(t[n],a,r):t.push(a):t[n]=a})),t):Object.keys(a).reduce((function(t,n){var s=a[n];return o.call(t,n)?t[n]=e(t[n],s,r):t[n]=s,t}),n)},l=function(e,t){return Object.keys(t).reduce((function(e,a){return e[a]=t[a],e}),e)},c=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},u=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),a="",o=0;o<t.length;++o){var n=t.charCodeAt(o);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?a+=t.charAt(o):n<128?a+=r[n]:n<2048?a+=r[192|n>>6]+r[128|63&n]:n<55296||n>=57344?a+=r[224|n>>12]+r[128|n>>6&63]+r[128|63&n]:(o+=1,n=65536+((1023&n)<<10|1023&t.charCodeAt(o)),a+=r[240|n>>18]+r[128|n>>12&63]+r[128|n>>6&63]+r[128|63&n])}return a},m=function(e){for(var t=[{obj:{o:e},prop:"o"}],a=[],o=0;o<t.length;++o)for(var r=t[o],s=r.obj[r.prop],i=Object.keys(s),l=0;l<i.length;++l){var c=i[l],u=s[c];"object"===typeof u&&null!==u&&-1===a.indexOf(u)&&(t.push({obj:s,prop:c}),a.push(u))}return n(t)},f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},p=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:s,assign:l,compact:m,decode:c,encode:u,isBuffer:p,isRegExp:f,merge:i}},f8a7:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10,offset:7}},[a("el-card",{staticClass:"box-card",attrs:{"align-center":"",shadow:"always"}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"auto","status-icon":!0,"element-loading-text":"保存并初始化中."}},[a("el-form-item",{attrs:{label:"站点名称",prop:"siteName"}},[a("el-input",{model:{value:e.form.siteName,callback:function(t){e.$set(e.form,"siteName",t)},expression:"form.siteName"}})],1),a("el-form-item",{attrs:{label:"管理员账号",prop:"username"}},[a("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"===typeof t?t.trim():t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"管理员密码",prop:"password"}},[a("el-input",{model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),a("el-form-item",{attrs:{label:"站点地址/域名",prop:"domain"}},[a("el-input",{model:{value:e.form.domain,callback:function(t){e.$set(e.form,"domain","string"===typeof t?t.trim():t)},expression:"form.domain"}})],1),a("el-form-item",{attrs:{label:"存储策略"}},[a("el-select",{attrs:{placeholder:"请选择存储策略"},model:{value:e.form.storageStrategy,callback:function(t){e.$set(e.form,"storageStrategy",t)},expression:"form.storageStrategy"}},e._l(e.supportStrategy,(function(e){return a("el-option",{key:e.key,attrs:{label:e.description,value:e.key}})})),1)],1),e._l(e.storageStrategyForm,(function(t){return a("el-form-item",{key:t.title,attrs:{label:t.title,prop:"storageStrategyForm"+t.key}},["endPoint"===t.key&&e.region.hasOwnProperty(e.form.storageStrategy)?a("el-select",{model:{value:e.form.storageStrategyConfig.endPoint,callback:function(t){e.$set(e.form.storageStrategyConfig,"endPoint",t)},expression:"form.storageStrategyConfig.endPoint"}},e._l(e.region[e.form.storageStrategy],(function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.val}})})),1):"pathStyle"===t.key?a("div",[a("el-select",{staticStyle:{width:"50%"},model:{value:e.form.storageStrategyConfig.pathStyle,callback:function(t){e.$set(e.form.storageStrategyConfig,"pathStyle",t)},expression:"form.storageStrategyConfig.pathStyle"}},[a("el-option",{attrs:{label:"bucket-virtual-hosting",value:"bucket-virtual-hosting"}}),a("el-option",{attrs:{label:"path-style",value:"path-style"}})],1),a("el-link",{staticClass:"zfile-word-aux",attrs:{target:"_blank",icon:"el-icon-document",href:"https://docs.aws.amazon.com/zh_cn/AmazonS3/latest/dev/VirtualHosting.html#path-style-access"}},[e._v("查看 S3 API 说明文档")])],1):"isPrivate"===t.key?a("div",[a("el-switch",{model:{value:e.form.storageStrategyConfig.isPrivate,callback:function(t){e.$set(e.form.storageStrategyConfig,"isPrivate",t)},expression:"form.storageStrategyConfig.isPrivate"}}),a("span",{staticClass:"zfile-word-aux"},[e._v("私有空间会生成带签名的下载链接")])],1):a("el-input",{attrs:{placeholder:""},on:{input:function(t){return e.change(t)}},model:{value:e.form.storageStrategyConfig[t.key],callback:function(a){e.$set(e.form.storageStrategyConfig,t.key,a)},expression:"form.storageStrategyConfig[item.key]"}}),"base-path"===t.key?a("div",[a("span",{staticClass:"zfile-word-aux",staticStyle:{"margin-left":"0"}},[e._v("基路径表示从哪个路径开始文件, 不填写表示从根开始")])]):e._e(),"domain"===t.key&&"ftp"===e.form.storageStrategy?a("div",[a("span",{staticClass:"zfile-word-aux",staticStyle:{"margin-left":"0"}},[e._v("此域名表示 http 访问域名")])]):e._e()],1)})),"onedrive"===e.form.storageStrategy?a("el-form-item",[a("el-link",{attrs:{target:"_blank",icon:"el-icon-edit",href:"https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=09939809-c617-43c8-a220-a93c1513c5d4&response_type=code&redirect_uri=https://zfile.jun6.net/onedrive/callback&scope=offline_access%20User.Read%20Files.ReadWrite.All"}},[e._v("前往获取授权")])],1):e._e(),"onedrive-china"===e.form.storageStrategy?a("el-form-item",[a("el-link",{attrs:{target:"_blank",icon:"el-icon-edit",href:"https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize?client_id=4a72d927-1907-488d-9eb2-1b465c53c1c5&response_type=code&redirect_uri=https://zfile.jun6.net/onedrive/china-callback&scope=offline_access%20User.Read%20Files.ReadWrite.All"}},[e._v("前往获取授权")])],1):e._e(),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("确认")])],1)],2)],1)],1)],1)},r=[],n=a("4328"),s=a.n(n),i=a("245d"),l={name:"Install",data:function(){return{active:1,form:{siteName:"",storageStrategy:"",username:"",password:"",domain:window.location.protocol+"//"+window.location.host,storageStrategyConfig:{endPoint:""}},loading:!1,storageStrategyForm:[],supportStrategy:[],region:i["a"],rules:{siteName:[{required:!0,message:"请输入站点名称",trigger:"change"}],username:[{required:!0,message:"请输入管理员账号",trigger:"change"}],password:[{required:!0,message:"请输入管理员密码",trigger:"change"}],domain:[{required:!0,type:"url",message:"请输入正确的域名, 需以 http:// 或 https:// 开头",trigger:"change"}],storageStrategyFormdomain:[{required:"ftp"!==this.storageStrategy,type:"url",message:"请输入正确的域名, 需以 http:// 或 https:// 开头",trigger:"change"}],storageStrategyFormusername:[{required:"upyun"===this.storageStrategy,message:"操作员名称不能为空"}],storageStrategyFormpassword:[{required:"upyun"===this.storageStrategy,message:"操作员密码不能为空"}],storageStrategyFormendPoint:[{required:!0,message:"区域不能为空"}],storageStrategyFormaccessKey:[{required:!0,message:"AccessKey 不能为空"}],storageStrategyFormsecretKey:[{required:!0,message:"SecretKey 不能为空"}],"storageStrategyFormbucket-name":[{required:!0,message:"此项不能为空"}],storageStrategyFormhost:[{required:!0,message:"域名或 IP 不能为空"}],storageStrategyFormport:[{required:!0,message:"端口不能为空"}],storageStrategyFormaccessToken:[{required:!0,message:"访问令牌不能为空"}],storageStrategyFormrefreshToken:[{required:!0,message:"刷新令牌不能为空"}],storageStrategyFormsecretId:[{required:!0,message:"SecretId 不能为空"}]}}},watch:{"form.storageStrategy":function(e){var t=this;this.$http.get("form",{params:{storageType:e}}).then((function(e){t.form.storageStrategyConfig.endPoint=null,t.storageStrategyForm=e.data.data}))}},methods:{change:function(){this.$forceUpdate()},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return t.loading=!1,!1;t.loading=!0;var a=t;t.$http.post("install",s.a.stringify(t.form)).then((function(e){t.loading=!1;var o=e.data;t.$message({message:o.msg,type:0===o.code?"success":"error",duration:1500,onClose:function(){a.$router.push("/main")}})}))}))}},created:function(){var e=this;this.$http.get("is-installed").then((function(t){var a=t.data;0!==a.code&&e.$router.push("/main")}))},mounted:function(){var e=this;this.$http.get("common/support-strategy").then((function(t){e.supportStrategy=t.data.data}))}},c=l,u=(a("00f6"),a("2877")),m=Object(u["a"])(c,o,r,!1,null,"4811005a",null);t["default"]=m.exports}}]);