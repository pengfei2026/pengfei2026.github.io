if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,c,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/06/15/hexo搭建教程，奶妈级/index.html",revision:"0bbc545a45bc894793c7a916a61cf48a"},{url:"2021/06/15/windwos10奶妈级美化/index.html",revision:"e66d8fd0c33d3c971d32d5681dea770c"},{url:"2021/06/15/个人求职/index.html",revision:"84773b74c0941d2b8fc4083fd16a3353"},{url:"2021/06/15/梦开始的地方/index.html",revision:"be30e0be7cdc1a0b9bf40151c44160a3"},{url:"2021/06/15/欢迎来到cool/index.html",revision:"39b1a0dcfe8606ecbf6fb044a539cb4f"},{url:"2021/06/15/白嫖爱给网素材/index.html",revision:"9362a8b388083f7060f1e264a392a854"},{url:"2021/06/15/破解老王家wifi/index.html",revision:"7061f40e8324b4207687113111c55940"},{url:"2021/06/23/关于我们/index.html",revision:"35ebb55f841fe057b4d550fd9b0a08c6"},{url:"2021/06/27/给想做自媒体的朋友/index.html",revision:"f9b4d7310194a923d643464d0279a3bd"},{url:"archives/2021/06/index.html",revision:"40a7c76a97c457757ea9ea117fd86d95"},{url:"archives/2021/index.html",revision:"367da919605026e1d242e313e9217df2"},{url:"archives/index.html",revision:"10443e6fd8d6de42840c5a6bc8e9ebb9"},{url:"categories/index.html",revision:"5f287403baeee9382b4d869aedb2e229"},{url:"css/index.css",revision:"9753e4f48e1f3f90edc888787fba7a16"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/1.jpg",revision:"aaadc7d03186012a274ede281b00682a"},{url:"img/10.jpg",revision:"b4ad50d7751e1827a268412e8c44c173"},{url:"img/11.png",revision:"3f5faba531d2bfd60bc9044abb61a32a"},{url:"img/12.jpg",revision:"e2d8fe39412af56159e9c06d87084217"},{url:"img/13.jpg",revision:"9a649de2efa22951207d7da7bc95a850"},{url:"img/2.jpg",revision:"4e8c8d0ba0878e9512522bac53a7c494"},{url:"img/3.jpg",revision:"5ae2a6c5c7803f0a12abf4638758925d"},{url:"img/3b0b068a255f4850a7248b4792351bfc.jpg",revision:"2d0f72b21c37c950d8be6a11b0dec352"},{url:"img/4.jpg",revision:"b43ce586a99bef74426dd3ee46775c85"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/41d3dd4d1ce14c42a3934c3fb2685fb1.jpg",revision:"7ca8cfd0e3c76ae88ff291013873926f"},{url:"img/5.jpg",revision:"97c7ac0f76357c0bde34e3ac0a60eb16"},{url:"img/6.jpg",revision:"fd8457726592a553d03b785516e41958"},{url:"img/62bca41e881011ebb6edd017c2d2eca2.jpg",revision:"5c6b1d0a54e0562630f01b5ab8b01223"},{url:"img/7.jpg",revision:"b4c37b72e2d931acc8c9b308d041cf31"},{url:"img/8.jpg",revision:"81f1f8eedc2987a82689c480dbdf5008"},{url:"img/9.jpg",revision:"fdcfdf0c4a4ecdb4273e35cf514d7bc8"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"75ff2cd92f901adea9beac5efe6d6b4e"},{url:"img/b1.png",revision:"a8b96c55052ed1ebbba3e787cdf58cf6"},{url:"img/b2.png",revision:"4cfdf58196e926459376aa9849b5305b"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/hexojianzhan1.png",revision:"90d88eebd2e823eb496926cba7d626a9"},{url:"img/hexojianzhan10.png",revision:"c27c8572fdb98b0d25d663acd675e7d0"},{url:"img/hexojianzhan11.png",revision:"6d55781728b6d9de84b377a66d205d41"},{url:"img/hexojianzhan12.png",revision:"73d4c8487c78732374524394dc4f35bc"},{url:"img/hexojianzhan13.png",revision:"bbcd472bafe39002fe7027b48eb6ccf4"},{url:"img/hexojianzhan14.png",revision:"aba0d18661e0906425fb1f4218a3fcff"},{url:"img/hexojianzhan15.png",revision:"c33276347c3134ff53dbed3ea0148333"},{url:"img/hexojianzhan16.png",revision:"459fc33b72613c9b3826e084d8d1ab61"},{url:"img/hexojianzhan17.png",revision:"0d67928d0fd8547f7122cf55f9ce93db"},{url:"img/hexojianzhan18.png",revision:"67a911a784127e462d0adf0cc8aca61c"},{url:"img/hexojianzhan19.png",revision:"5ea6818decb3c23ac64478e8b9d031cc"},{url:"img/hexojianzhan2.png",revision:"a435c2b836757cab03e16eea0341d745"},{url:"img/hexojianzhan20.png",revision:"863f97202edfc447ce32e7d77a41278b"},{url:"img/hexojianzhan21.png",revision:"62027281e5360fcf356cec510aa3c668"},{url:"img/hexojianzhan22.png",revision:"12faa0640f352967ac5c031fc493d930"},{url:"img/hexojianzhan23.png",revision:"8647fbf1a62485a385c2c20c19012849"},{url:"img/hexojianzhan24.png",revision:"ff2eb6626984e3767cd7f5298aa637fa"},{url:"img/hexojianzhan25.png",revision:"96bbf63136d9fc84cd884e4ed05a9ee4"},{url:"img/hexojianzhan26.png",revision:"7eb7cd9da75812a7d70e2466018b674c"},{url:"img/hexojianzhan27.png",revision:"7b619f1f51b324c24262ed72ca07fb7e"},{url:"img/hexojianzhan28.png",revision:"368df5a195b045877def14c8fc039ad3"},{url:"img/hexojianzhan29.png",revision:"d0976348520188f03595e9e9f0da7f22"},{url:"img/hexojianzhan3.png",revision:"6b64e68654c661b6dec0a3b9449966f7"},{url:"img/hexojianzhan30.png",revision:"8a8c2c4321cf071d408b2e2cc58830d3"},{url:"img/hexojianzhan4.png",revision:"3fea29d7e7ff90e4bac842af30c257ff"},{url:"img/hexojianzhan5.png",revision:"62aa6bc0d899859ec1c9185070f8c3ad"},{url:"img/hexojianzhan6.png",revision:"dc2ff5f3722bc1aa1ba14900841deeb6"},{url:"img/hexojianzhan7.png",revision:"1594669df246494f0860a49d3dcf41e6"},{url:"img/hexojianzhan8.png",revision:"5abebee8ef4c9ffa52a133115db2a525"},{url:"img/hexojianzhan9.png",revision:"e7d8c6184a83e955116039ab80cfff4f"},{url:"img/hf01.png",revision:"467329fd1461cf9b832a38e7f2dcf5cf"},{url:"img/hf02.jpg",revision:"9bd55ce17e7332e468d4ababa3f4dbef"},{url:"img/hf03.jpg",revision:"00e44ee7a1545deb5bb1be065eed5362"},{url:"img/hf5.jpg",revision:"f03c5d3fc878986af17f200c0baeb484"},{url:"img/mksddf.jpg",revision:"5ae2a6c5c7803f0a12abf4638758925d"},{url:"img/QQ图片20210606223819.jpg",revision:"fd8457726592a553d03b785516e41958"},{url:"img/QQ图片20210606225238.jpg",revision:"35b5c20350b15e585ada758a8c2cf459"},{url:"img/QQ图片20210606225300.jpg",revision:"3b17487e238b6241c37a2e93e9f0b09f"},{url:"img/QQ图片20210606225304.jpg",revision:"8da7aed00708722a8e5778582782109f"},{url:"img/qz01.jpg",revision:"aeeebfbfa278e511d3116afb3c497fa2"},{url:"img/qz010.jpg",revision:"4c7e255836ccdf8d2e7150635de99ee5"},{url:"img/qz011.jpg",revision:"caf165e5ea7fc996dcae5c374d8b45d6"},{url:"img/qz012.jpg",revision:"3d3564d6b1649483a54f242853797ba0"},{url:"img/qz013.jpg",revision:"e4e845be0fb801c5495e7585401f06bf"},{url:"img/qz014.jpg",revision:"c68dcac2273b5bb2999f9563f68dcc46"},{url:"img/qz015.jpg",revision:"bc4e82d5a720f8ee8212f71b984d2e1b"},{url:"img/qz02.jpg",revision:"8eb8032ac3401b2c6f5d2c60988ba279"},{url:"img/qz03.jpg",revision:"75648c108167258e9524903c2d93c38a"},{url:"img/qz04.jpg",revision:"b6f9509e4957fb259a8883c8038711f6"},{url:"img/qz05.jpg",revision:"ebbc4f7952500858926c761e38a054b5"},{url:"img/qz06.jpg",revision:"c5acf06e6e82980201d5480546e39f8d"},{url:"img/qz07.png",revision:"219017231f1d94ada70549fb872c0682"},{url:"img/qz08.jpg",revision:"52497d8ea0ad28882c2dc443177dc0f9"},{url:"img/qz08.png",revision:"c9105aa9dfbd7af3cce8ec24e94a457c"},{url:"img/qz09.jpg",revision:"eafd215c1654d0c3cd8ee19abb42f60e"},{url:"img/wechat.jpg",revision:"65cb90eba52a573fdb80698e83cad8e3"},{url:"img/wifi1.jpg",revision:"5c67c2b231be0270f9cbe4a9bef0f7cc"},{url:"img/wifi1.png",revision:"343eb7cfcba3a5ef918a842f04509f15"},{url:"img/wifi2.png",revision:"4bd2e2961c3415a0bc65aa849eac4194"},{url:"img/wifi3.png",revision:"cc33af179a4e54ca7ee02c7029308dc3"},{url:"img/wifi4.png",revision:"39c9a7ef990f9fed26a837e28d6b36ad"},{url:"img/wydj01.png",revision:"0cfe9a4327cfbe4329483f5e7e7ae798"},{url:"img/wydj02.png",revision:"1d424fe67ac6139faf6d3389fa26f365"},{url:"img/wydj03.png",revision:"d95632dabebe32dc948b7259316e402c"},{url:"img/wydj04.png",revision:"4f6a145d66c4dd4da451089bfa946b0f"},{url:"img/wydj05.png",revision:"d2ca545d97258d2b70e5fc23a07420f0"},{url:"img/wydj06.png",revision:"0e82c9d7e1c2962e36af2aeeb816acf2"},{url:"index.html",revision:"c8f0de6f77858ed6dd456674497b0cbc"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"ee05185ddd2145d73110fa7773bc1eff"},{url:"tags/index.html",revision:"678c44d6ec105c5d46ebe7215425ad4c"},{url:"xxxxx/index.html",revision:"a983196026c0696262802ce102d7bcbe"},{url:"zz/81b15bfc97604e3fa335dc09c4180081.png",revision:"44a1f17c77d00d9da4677695a25dfe3f"},{url:"zz/agw01.png",revision:"c72ac4590635ca077aaef11dde175c92"},{url:"zz/agw02.png",revision:"2686504808145b216deb069e216a274e"},{url:"zz/agw03.png",revision:"19b38342aa44073ee166837cc2ffe02d"},{url:"zz/agw04.png",revision:"9a97f93d034b5119dbba3dbd165ded2c"},{url:"zz/agw05.png",revision:"da3c3414fb3f6180ecfccdd4e7a0975a"},{url:"zz/agw06.png",revision:"8d9b020ea7dba4470b56df31f101a196"},{url:"zz/agw07.png",revision:"cae314f53dfc05f1c5a551077b720f6f"},{url:"zz/agw08.png",revision:"e220583376d84d9204cc06bb85336a10"},{url:"zz/agw09.png",revision:"284d80ce270203ff193dcf1c6f44d034"},{url:"zz/agw10.png",revision:"608cfe0888b95f156da151ac81dbab22"},{url:"zz/agw11.png",revision:"fa9998e62a522ec5f4dce33d212d36c5"},{url:"zz/agw12.png",revision:"d0420fa2aa2414295aefdae69de93e56"},{url:"zz/agw13.png",revision:"2975c749d41d689994523f0a5a0d83fa"},{url:"zz/agw14.png",revision:"f400bf377c1dcce91c848d729f025b9a"},{url:"zz/agw15.png",revision:"1545ec253a46b52401c593d4c6c58f81"},{url:"zz/js01.jpg",revision:"f9f41c48b0445b83d12a5099a4cedc3f"},{url:"zz/zmt01.jpg",revision:"002c076292ec57edcd9c06b40a4d9d9e"}],{})}));
//# sourceMappingURL=service-worker.js.map
