(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(155)),i={title:"Memo Program"},c={id:"memo",isDocsHomePage:!1,title:"Memo Program",description:"The Memo program is a simple program that validates a string of UTF-8 encoded",source:"@site/src/memo.md",permalink:"/solana-program-library/spl/memo",sidebar:"docs",previous:{title:"Associated Token Account Program",permalink:"/solana-program-library/spl/associated-token-account"},next:{title:"Name Service",permalink:"/solana-program-library/spl/name-service"}},s=[{value:"Background",id:"background",children:[]},{value:"Source",id:"source",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Operational Notes",id:"operational-notes",children:[{value:"Logs",id:"logs",children:[]},{value:"Compute Limits",id:"compute-limits",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Memo program is a simple program that validates a string of UTF-8 encoded\ncharacters and verifies that any accounts provided are signers of the\ntransaction. The program also logs the memo, as well as any verified signer\naddresses, to the transaction log, so that anyone can easily observe memos and\nknow they were approved by zero or more addresses by inspecting the transaction\nlog from a trusted provider."),Object(a.b)("h2",{id:"background"},"Background"),Object(a.b)("p",null,"Solana's programming model and the definitions of the Solana terms used in this\ndocument are available at:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.solana.com/apps"}),"https://docs.solana.com/apps")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.solana.com/terminology"}),"https://docs.solana.com/terminology"))),Object(a.b)("h2",{id:"source"},"Source"),Object(a.b)("p",null,"The Memo Program's source is available on\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library"}),"github")),Object(a.b)("h2",{id:"interface"},"Interface"),Object(a.b)("p",null,"The on-chain Memo Program is written in Rust and available on crates.io as\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://crates.io/crates/spl-memo"}),"spl-memo")," and\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.rs/spl-memo"}),"docs.rs"),"."),Object(a.b)("p",null,"The crate provides a ",Object(a.b)("inlineCode",{parentName:"p"},"build_memo()")," method to easily create a properly\nconstructed Instruction."),Object(a.b)("h2",{id:"operational-notes"},"Operational Notes"),Object(a.b)("p",null,"If zero accounts are provided to the signed-memo instruction, the program\nsucceeds when the memo is valid UTF-8, and logs the memo to the transaction log."),Object(a.b)("p",null,"If one or more accounts are provided to the signed-memo instruction, all must be\nvalid signers of the transaction for the instruction to succeed."),Object(a.b)("h3",{id:"logs"},"Logs"),Object(a.b)("p",null,"This section details expected log output for memo instructions."),Object(a.b)("p",null,"Logging begins with entry into the program:\n",Object(a.b)("inlineCode",{parentName:"p"},"Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr invoke [1]")),Object(a.b)("p",null,"The program will include a separate log for each verified signer:\n",Object(a.b)("inlineCode",{parentName:"p"},"Program log: Signed by <BASE_58_ADDRESS>")),Object(a.b)("p",null,"Then the program logs the memo length and UTF-8 text:\n",Object(a.b)("inlineCode",{parentName:"p"},'Program log: Memo (len 4): "\ud83d\udc06"')),Object(a.b)("p",null,"If UTF-8 parsing fails, the program will log the failure point:\n",Object(a.b)("inlineCode",{parentName:"p"},"Program log: Invalid UTF-8, from byte 4")),Object(a.b)("p",null,"Logging ends with the status of the instruction, one of:\n",Object(a.b)("inlineCode",{parentName:"p"},"Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr success"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr failed: missing required signature for instruction"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr failed: invalid instruction data")),Object(a.b)("p",null,"For more information about exposing program logs on a node, head to the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.solana.com/developing/on-chain-programs/debugging#logging"}),"developer\ndocs")),Object(a.b)("h3",{id:"compute-limits"},"Compute Limits"),Object(a.b)("p",null,"Like all programs, the Memo Program is subject to the cluster's ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.solana.com/developing/programming-model/runtime#compute-budget"}),"compute\nbudget"),".\nIn Memo, compute is used for parsing UTF-8, verifying signers, and logging,\nlimiting the memo length and number of signers that can be processed\nsuccessfully in a single instruction. The longer or more complex the UTF-8 memo,\nthe fewer signers can be supported, and vice versa."),Object(a.b)("p",null,"As of v1.5.1, an unsigned instruction can support single-byte UTF-8 of up to 566\nbytes. An instruction with a simple memo of 32 bytes can support up to 12\nsigners."))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);