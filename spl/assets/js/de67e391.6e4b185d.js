"use strict";(self.webpackChunksolana_spl_docs=self.webpackChunksolana_spl_docs||[]).push([[920],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7788:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Token Swap Program"},s=void 0,p={unversionedId:"token-swap",id:"token-swap",isDocsHomePage:!1,title:"Token Swap Program",description:"A Uniswap-like exchange for the Token program on the Solana blockchain,",source:"@site/src/token-swap.md",sourceDirName:".",slug:"/token-swap",permalink:"/solana-program-library/spl/token-swap",tags:[],version:"current",frontMatter:{title:"Token Swap Program"},sidebar:"docs",previous:{title:"Token Program",permalink:"/solana-program-library/spl/token"},next:{title:"Token-Lending Program",permalink:"/solana-program-library/spl/token-lending"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Background",id:"background",children:[],level:2},{value:"Source",id:"source",children:[],level:2},{value:"Interface",id:"interface",children:[],level:2},{value:"Operational overview",id:"operational-overview",children:[{value:"Creating a new token swap pool",id:"creating-a-new-token-swap-pool",children:[],level:3},{value:"Swapping",id:"swapping",children:[],level:3},{value:"Depositing liquidity",id:"depositing-liquidity",children:[],level:3},{value:"Withdrawing liquidity",id:"withdrawing-liquidity",children:[],level:3}],level:2},{value:"Curves",id:"curves",children:[{value:"Constant product",id:"constant-product",children:[],level:3},{value:"Constant price",id:"constant-price",children:[],level:3},{value:"Stable (under construction)",id:"stable-under-construction",children:[],level:3},{value:"Offset",id:"offset",children:[],level:3}],level:2},{value:"Testing",id:"testing",children:[{value:"Property testing",id:"property-testing",children:[],level:3},{value:"Fuzzing",id:"fuzzing",children:[],level:3}],level:2}],u={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Uniswap-like exchange for the Token program on the Solana blockchain,\nimplementing multiple automated market maker (AMM) curves."),(0,r.kt)("p",null,"Here is some important developer information regarding the program deployed on devnet,\ntestnet, and mainnet-beta:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Information"),(0,r.kt)("th",{parentName:"tr",align:null},"Account Address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Token Swap Program"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fee Owner"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HfoTxFR1Tm6kGmWgYWD6J7YHVy1UwqSULUGVLXkJqaKN"))))),(0,r.kt)("p",null,"Check out\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/tree/master/token-swap"},"program repository"),"\nfor more developer information."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,'The Token Swap Program allows simple trading of token pairs without a\ncentralized limit order book. The program uses a mathematical formula called\n"curve" to calculate the price of all trades.  Curves aim to mimic normal market\ndynamics: for example, as traders buy a lot of one token type, the value of the\nother token type goes up.'),(0,r.kt)("p",null,"Depositors in the pool provide liquidity for the token pair. That\nliquidity enables trade execution at spot price. In exchange for their\nliquidity, depositors receive pool tokens, representing their fractional\nownership in the pool. During each trade, a program withholds a portion of the\ninput token as a fee. That fee increases the value of pool tokens by being\nstored in the pool."),(0,r.kt)("p",null,"This program was heavily inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://uniswap.org/"},"Uniswap")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://balancer.finance/"},"Balancer"),". More information is available in their\nexcellent documentation and whitepapers."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Solana's programming model and the definitions of the Solana terms used in this\ndocument are available at:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/apps"},"https://docs.solana.com/apps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/terminology"},"https://docs.solana.com/terminology"))),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,"The Token Swap Program's source is available on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library"},"github"),"."),(0,r.kt)("h2",{id:"interface"},"Interface"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/js/src/index.ts"},"JavaScript\nbindings"),"\nare available that support loading the Token Swap Program on to a chain and\nissuing instructions."),(0,r.kt)("p",null,"Example user interface built and maintained by Serum team is available\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/project-serum/oyster-swap"},"here")),(0,r.kt)("h2",{id:"operational-overview"},"Operational overview"),(0,r.kt)("p",null,"The following explains the instructions available in the Token Swap Program.\nNote that each instruction has a simple code example that can be found in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/js/cli/token-swap-test.ts"},"end-to-end tests"),"."),(0,r.kt)("h3",{id:"creating-a-new-token-swap-pool"},"Creating a new token swap pool"),(0,r.kt)("p",null,"The creation of a pool showcases the account, instruction, and authorization\nmodels on Solana, which can be very different compared to other blockchains."),(0,r.kt)("p",null,'Initialization of a pool between two token types, which we\'ll call "A"\nand "B" for simplicity, requires the following accounts:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"empty pool state account"),(0,r.kt)("li",{parentName:"ul"},"pool authority"),(0,r.kt)("li",{parentName:"ul"},"token A account"),(0,r.kt)("li",{parentName:"ul"},"token B account"),(0,r.kt)("li",{parentName:"ul"},"pool token mint"),(0,r.kt)("li",{parentName:"ul"},"pool token fee account"),(0,r.kt)("li",{parentName:"ul"},"pool token recipient account"),(0,r.kt)("li",{parentName:"ul"},"token program")),(0,r.kt)("p",null,"The pool state account simply needs to be created using\n",(0,r.kt)("inlineCode",{parentName:"p"},"system_instruction::create_account")," with the correct size and enough lamports\nto be rent-free."),(0,r.kt)("p",null,"The pool authority is a\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses"},"program derived address"),'\nthat can "sign" instructions towards other programs. This is\nrequired for the Token Swap Program to mint pool tokens and transfer tokens from\nits token A and B accounts.'),(0,r.kt)("p",null,"The token A / B accounts, pool token mint, and pool token accounts must all be\ncreated (using ",(0,r.kt)("inlineCode",{parentName:"p"},"system_instruction::create_account"),") and initialized (using\n",(0,r.kt)("inlineCode",{parentName:"p"},"spl_token::instruction::initialize_mint")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"spl_token::instruction::initialize_account"),").  The token A and B accounts must\nbe funded with tokens, and their owner set to the swap authority, and the mint\nmust also be owned by the swap authority."),(0,r.kt)("p",null,"Once all of these accounts are created, the Token Swap ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," instruction\nwill properly set everything up and allow for immediate trading.  Note\nthat the pool state account is not required to be a signer on ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize"),",\nso it's important to perform the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," instruction in the same transaction\nas its ",(0,r.kt)("inlineCode",{parentName:"p"},"system_instruction::create_account"),"."),(0,r.kt)("h3",{id:"swapping"},"Swapping"),(0,r.kt)("p",null,"Once a pool is created, users can immediately begin trading on it using\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"swap")," instruction.  The swap instruction transfers tokens from a user's source\naccount into the swap's source token account, and then transfers tokens from\nits destination token account into the user's destination token account."),(0,r.kt)("p",null,"Since Solana programs require all accounts to be declared in the instruction,\nusers need to gather all account information from the pool state account:\nthe token A and B accounts, pool token mint, and fee account."),(0,r.kt)("p",null,"Additionally, the user must allow for tokens to be transferred from their source\ntoken account.  The best practice is to ",(0,r.kt)("inlineCode",{parentName:"p"},"spl_token::instruction::approve")," a\nprecise amount to a new throwaway Keypair, and then have that new Keypair sign\nthe swap transaction.  This limits the amount of tokens that can be taken\nfrom the user's account by the program."),(0,r.kt)("h3",{id:"depositing-liquidity"},"Depositing liquidity"),(0,r.kt)("p",null,"To allow any trading, the pool needs liquidity provided from the\noutside. Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"deposit_all_token_types")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"deposit_single_token_type_exact_amount_in")," instructions, anyone can provide\nliquidity for others to trade, and in exchange, depositors receive a pool token\nrepresenting fractional ownership of all A and B tokens in the pool."),(0,r.kt)("p",null,"Additionally, the user will need to approve a delegate to transfer tokens from\ntheir A and B token accounts.  This limits the amount of tokens that can be taken\nfrom the user's account by the program."),(0,r.kt)("h3",{id:"withdrawing-liquidity"},"Withdrawing liquidity"),(0,r.kt)("p",null,'At any time, pool token holders may redeem their pool tokens in exchange for\ntokens A and B, returned at the current "fair" rate as determined by the curve.\nIn the ',(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_all_token_types")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_single_token_type_exact_amount_out")," instructions, pool tokens are\nburned, and tokens A and B are transferred into the user's accounts."),(0,r.kt)("p",null,"Additionally, the user will need to approve a delegate to transfer tokens from\ntheir pool token account.  This limits the amount of tokens that can be taken\nfrom the user's account by the program."),(0,r.kt)("h2",{id:"curves"},"Curves"),(0,r.kt)("p",null,"The Token Swap Program is completely customizable for any possible trading curve\nthat implements the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/calculator.rs"},"CurveCalculator"),"\ntrait.  If you would like to implement a new automated market maker, it may be\nas easy as forking the Token Swap Program and implementing a new curve.  The\nfollowing curves are all provided out of the box for reference."),(0,r.kt)("h3",{id:"constant-product"},"Constant product"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/constant_product.rs"},"constant product\ncurve"),"\nis the well-known Uniswap and Balancer style curve that preserves an invariant\non all swaps, expressed as the product of the quantity of token A and token B\nin the swap."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"A_total * B_total = invariant\n")),(0,r.kt)("p",null,"If a trader wishes to put in token A for some amount of token B, the calculation\nfor token B becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(A_total + A_in) * (B_total - B_out) = invariant\n")),(0,r.kt)("p",null,"For example, if the swap has 100 token A and 5,000 token B, and a trader wishes\nto put in 10 token A, we can solve for the ",(0,r.kt)("inlineCode",{parentName:"p"},"invariant")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"B_out"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"A_total * B_total = 100 * 5,000 = 500,000 = invariant\n")),(0,r.kt)("p",null,"And"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(A_total + A_in) * (B_total - B_out) = invariant\n(100 + 10) * (5,000 - B_out) = 500,000\n5,000 - B_out = 500,000 / 110\n5,000 - (500,000 / 110) = B_out\nB_out = 454.5454...\n")),(0,r.kt)("p",null,"More information can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://uniswap.org/whitepaper.pdf"},"Uniswap\nwhitepaper")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://balancer.finance/whitepaper/"},"Balancer\nwhitepaper"),"."),(0,r.kt)("h3",{id:"constant-price"},"Constant price"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/constant_price.rs"},"constant price curve"),"\nis a simple curve that always maintains the price of token A with respect to\ntoken B.  At initialization, the swap creator sets the cost for 1 token B in\nterms of token A. For example, if the price is set to 17, 17 token A will always\nbe required to receive 1 token B, and 1 token B will always be required to\nreceive 17 token A."),(0,r.kt)("p",null,"Note that this curve does not follow traditional market dynamics, since the\nprice is always the same."),(0,r.kt)("p",null,'Constant price curves are most useful for fixed offerings of new tokens that\nexplicitly should not have market dynamics. For example, a decentralized\ngame creator wants to sell new "SOLGAME" tokens to be used in their\ngame, so they create a constant price swap of 2 USDC per SOLGAME, and supply all\nof the SOLGAME tokens at swap creation. Users can go to the swap and purchase all\nof the tokens they want and not worry about the market making SOLGAME tokens too\nexpensive.'),(0,r.kt)("h3",{id:"stable-under-construction"},"Stable (under construction)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/stable.rs"},"stable curve"),"\nfrom ",(0,r.kt)("a",{parentName:"p",href:"https://www.curve.fi/"},"curve.fi"),', has a different shape to prioritize\n"stable" trading, meaning prices that stay constant through trading. Most\nimportantly, prices don\'t change as quickly as the constant product curve, so a\nstable swap between two coins that represent the same value should be as close\nto 1:1 as possible. For example, stablecoins that represent a value in USD (USDC,\nTUSD, USDT, DAI), should not have big price discrepancies due to the amount of\ntokens in the swap.'),(0,r.kt)("p",null,"The curve mirrors the dynamics of the curve\nMore information can be found on their ",(0,r.kt)("a",{parentName:"p",href:"https://www.curve.fi/stableswap-paper.pdf"},"whitepaper"),"."),(0,r.kt)("p",null,"The Token Swap Program implementation of the stable curve is under construction,\nand a more complete version can be found at the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/michaelhly/stable-swap-program/"},"stable-swap-program"),"."),(0,r.kt)("h3",{id:"offset"},"Offset"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/offset.rs"},"offset curve"),'\ncan be seen as a combination of the constant price and constant product curve.\nIt follows the constant product curve dynamics, but allows for the pool\ncreator to set an "offset" on one side. The invariant for the curve is:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(A_total) * (B_total + B_offset) = invariant\n")),(0,r.kt)("p",null,"This is useful for initial token\nofferings, where the token creator wants to sell some new token as a swap without\nputting up the capital to fund the other side of the swap. This is similar to the\nconstant price curve, but the key difference is that the offset curve captures\nnormal market dynamics, in that the offered token price will increase as it is\nbought."),(0,r.kt)("p",null,'For example, a decentralized betting application creator wants to sell new "SOLBET"\ntokens on the market in exchange for USDC, and they believe each token is worth\nat least 4 USDC.  They create a pool between SOLBET and USDC, funding\none side with 1,000 SOLBET, and the other side with 0 USDC, but an offset\nof 4,000 USDC.'),(0,r.kt)("p",null,"If a trader tries to buy SOLBET with 40 USDC, the invariant is calculated\nwith the offset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(SOLBET_total) * (USDC_total + USDC_offset) = invariant\n1,000 * (0 + 4,000) = 4,000,000\n\n(SOLBET_total - SOLBET_out) * (USDC_total + USDC_offset + USDC_in) = invariant\nSOLBET_out = 9.901\n")),(0,r.kt)("p",null,"The trader received 9.901 SOLBET for 40 USDC, so the price per SOLBET was\nroughly 4.04, slightly higher than the minimum of 4 USDC per SOLBET."),(0,r.kt)("p",null,"Conversely, if a trader tries to buy USDC with SOLBET immediately after creation,\nit will fail because there is no USDC actually present in the pool."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"The token-swap program is tested using various strategies, including unit tests,\nintegration tests, property tests, and fuzzing.  Since unit tests and integration\ntests are well-known, we highlight property tests and fuzzing here."),(0,r.kt)("h3",{id:"property-testing"},"Property testing"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://altsysrq.github.io/proptest-book/intro.html"},"proptest"),"\ncrate, we test specific mathematical properties of curves, specifically to avoid\nleaking value on any trades, deposits, or withdrawals.  It is out of scope of\nthis document to explain property testing, but the specific property tests for\nthe Token Swap Program can be found in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/constant_product.rs"},"curves"),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/math.rs"},"math"),"\nportions of the repo."),(0,r.kt)("h3",{id:"fuzzing"},"Fuzzing"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rust-fuzz/honggfuzz-rs"},"honggfuzz"),", we regularly\ntest all possible inputs to the Token Swap Program, ensuring that the program\ndoes not crash unexpectedly or leak tokens.  It is out of scope of this document\nto explain fuzzing, but the specific implementation for the program can be found\nin the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/fuzz/src/instructions.rs"},"instruction fuzz\ntests"),"\nof the repo."))}h.isMDXComponent=!0}}]);