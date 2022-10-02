"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[5061],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8709:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={title:"Query extras"},l=void 0,u={unversionedId:"api/start/api.query.other",id:"api/start/api.query.other",title:"Query extras",description:"In previous sections we took a walk through queries, showing how to use one-shot queries, how to subscribe to results and how to combine multiple queries into one. This section will aim to extend that knowledge showing some other features and utilities that are available on the api.query interfaces.",source:"@site/docs/api/start/api.query.other.md",sourceDirName:"api/start",slug:"/api/start/api.query.other",permalink:"/docs/api/start/api.query.other",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/api.query.other.md",tags:[],version:"current",frontMatter:{title:"Query extras"},sidebar:"reference",previous:{title:"Multi queries",permalink:"/docs/api/start/api.query.multi"},next:{title:"Transactions",permalink:"/docs/api/start/api.tx"}},p={},c=[{value:"State at a specific block",id:"state-at-a-specific-block",level:2},{value:"Map keys &amp; entries",id:"map-keys--entries",level:2},{value:"State entries",id:"state-entries",level:2},{value:"Entry metadata",id:"entry-metadata",level:2},{value:"Let&#39;s transact already!",id:"lets-transact-already",level:2}],h={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In previous sections we took a walk through queries, showing how to use one-shot queries, how to subscribe to results and how to combine multiple queries into one. This section will aim to extend that knowledge showing some other features and utilities that are available on the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query")," interfaces."),(0,i.kt)("h2",{id:"state-at-a-specific-block"},"State at a specific block"),(0,i.kt)("p",null,"Quite often it is useful (taking pruning into account, more on this later) to retrieve the state at a specific block. For instance we may wish to retrieve the current balance as well as the balance at a previous block for a specific account -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n// Retrieve the current block header\nconst lastHdr = await api.rpc.chain.getHeader();\n\n// Get a decorated api instance at a specific block\nconst apiAt = await api.at(lastHdr.hash);\n\n// query the balance at this point of the chain\nconst { data: { free } } = await apiAt.query.system.account(ADDR);\n\n// Display the free balance\nconsole.log(`The current free is ${free.toString()}`);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".at")," queries are all single-shot, i.e. there are no subscription option to these, since the state for a previous block should be static. (This is true to a certain extent, i.e. when blocks have been finalized)."),(0,i.kt)("p",null,"An additional point to take care of (briefly mentioned above), is state pruning. By default a Polkadot/Substrate node will only keep state for the last 256 blocks, unless it is explicitly run in archive mode. This means that querying state further back than the pruning period will result in an error returned from the Node. (Generally most public RPC nodes only run with default settings, which includes aggressive state pruning)"),(0,i.kt)("h2",{id:"map-keys--entries"},"Map keys & entries"),(0,i.kt)("p",null,"When working maps and double-maps, it is possible to retrieve a list of all the keys and entries for the map. For this we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},".entries(<args>): [StorageKey, Type][]")," queries. For example we may want to know the current list of validator exposures at a current era in the staking module -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n// Retrieve the active era\nconst activeEra = await api.query.staking.activeEra();\n\n// retrieve all exposures for the active era\nconst exposures = await api.query.staking.erasStakers.entries(activeEra.unwrap().index);\n\nexposures.forEach(([key, exposure]) => {\n  console.log('key arguments:', key.args.map((k) => k.toHuman()));\n  console.log('     exposure:', exposure.toHuman());\n});\n")),(0,i.kt)("p",null,"To understand the usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"key.args"),", you need to understand that map/doublemap keys are stored alongside their lookups. This means that the raw key has hashed parts as well as the raw data. The API will decode the keys and provide the raw key arguments in args. This would mean -"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if we are querying ",(0,i.kt)("inlineCode",{parentName:"li"},"api.query.staking.validators(validatorId: AccountId)")," via ",(0,i.kt)("inlineCode",{parentName:"li"},"entries"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"key.args")," would be ",(0,i.kt)("inlineCode",{parentName:"li"},"[AccountId]")),(0,i.kt)("li",{parentName:"ul"},"if we are querying ",(0,i.kt)("inlineCode",{parentName:"li"},"api.query.staking.erasStakers(era: EraIndex, validatorId: AccountId)")," via ",(0,i.kt)("inlineCode",{parentName:"li"},"entries"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"key.args")," would be ",(0,i.kt)("inlineCode",{parentName:"li"},"[EraIndex, AccountId]"))),(0,i.kt)("p",null,"the same applies to ",(0,i.kt)("inlineCode",{parentName:"p"},".keys()")," - here the list of keys also have the decoded args, as specified. You can think of ",(0,i.kt)("inlineCode",{parentName:"p"},".args")," as a tuple with the same types as the types required to retrieve a single entry in the map."),(0,i.kt)("p",null,"In the first example we are querying a double-map, so we supply 1 argument. No arguments on double-maps will be very costly, retrieving all the eras and associated entries. In the same way as above we can simply do ",(0,i.kt)("inlineCode",{parentName:"p"},".keys(activeEra.unwrap().index): StorageKey[]")," to retrieve all the keys here, including the individual keys args (available on maps with decodable hashing functions) -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// retrieve all the nominator keys\nconst keys = await api.query.staking.nominators.keys();\n\n// extract the first key argument [AccountId] as string\nconst nominatorIds = keys.map(({ args: [nominatorId] }) => nominatorId);\n\nconsole.log('all nominators:', nominatorIds.join(', '));\n")),(0,i.kt)("p",null,"There is also the ",(0,i.kt)("inlineCode",{parentName:"p"},"keysAt(<hash>)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"entriesAt(<hash>)")," methods for another source of single-shot calls to retrieve lists from a particular block. Note, that the state pruning limits described above also apply here."),(0,i.kt)("h2",{id:"state-entries"},"State entries"),(0,i.kt)("p",null,"In addition to using ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query")," to make actual on-chain queries, it can also be used to retrieve some information on the state entries. For instance to retrieve both the hash and size of an existing entry, we can make the following calls -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n// Retrieve the hash & size of the entry as stored on-chain\nconst [entryHash, entrySize] = await Promise.all([\n  api.query.system.account.hash(ADDR),\n  api.query.system.account.size(ADDR)\n]);\n\n// Output the info\nconsole.log(`The current size is ${entrySize} bytes with a hash of ${entryHash}`);\n")),(0,i.kt)("p",null,"As per the previous examples, the params here apply explicitly to the actual needed values to identify an entry. As with ",(0,i.kt)("inlineCode",{parentName:"p"},".at")," queries, there are no subscription versions for these queries, rather they are seen as one-shot values at a specific point in time."),(0,i.kt)("h2",{id:"entry-metadata"},"Entry metadata"),(0,i.kt)("p",null,"It has been explained that the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query")," interfaces are decorated from the metadata. This also means that there is some information that we can gather from the entry, as decorated -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Extract the info\nconst { meta, method, section } = api.query.system.account;\n\n// Display some info on a specific entry\nconsole.log(`${section}.${method}: ${meta.documentation.join(' ')}`);\nconsole.log(`query key: ${api.query.system.account.key(ADDR)}`);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"section")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"method")," is an indication of where it is exposed on the API. In addition the ",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," holds an array with the metadata documentation for the entry."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," endpoint requires some explanation. In the chain state, the key values (identified by the module, method & params) are hashed and this is used as a lookup. So underlying a single-shot query would utilize the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.rpc.state.getStorage")," entry, passing the output of ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," (which is a hashed representation of the values). Apart from the hashing, the API also takes care of type formatting, handling optional values and merging results across multiple subscriptions."),(0,i.kt)("h2",{id:"lets-transact-already"},"Let's transact already!"),(0,i.kt)("p",null,"At this point you are already burning to actually make some transactions. Making queries is cool, but just how do ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/start/api.tx"},"you actually submit transactions on-chain"),"."))}d.isMDXComponent=!0}}]);