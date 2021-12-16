(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(9),r=(n(0),n(155)),i={title:"Token Swap Program"},s={id:"token-swap",isDocsHomePage:!1,title:"Token Swap Program",description:"A Uniswap-like exchange for the Token program on the Solana blockchain,",source:"@site/src/token-swap.md",permalink:"/solana-program-library/spl/token-swap",sidebar:"docs",previous:{title:"Token Program",permalink:"/solana-program-library/spl/token"},next:{title:"Token-Lending Program",permalink:"/solana-program-library/spl/token-lending"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Background",id:"background",children:[]},{value:"Source",id:"source",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Operational overview",id:"operational-overview",children:[{value:"Creating a new token swap pool",id:"creating-a-new-token-swap-pool",children:[]},{value:"Swapping",id:"swapping",children:[]},{value:"Depositing liquidity",id:"depositing-liquidity",children:[]},{value:"Withdrawing liquidity",id:"withdrawing-liquidity",children:[]}]},{value:"Curves",id:"curves",children:[{value:"Constant product",id:"constant-product",children:[]},{value:"Constant price",id:"constant-price",children:[]},{value:"Stable (under construction)",id:"stable-under-construction",children:[]},{value:"Offset",id:"offset",children:[]}]},{value:"Testing",id:"testing",children:[{value:"Property testing",id:"property-testing",children:[]},{value:"Fuzzing",id:"fuzzing",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A Uniswap-like exchange for the Token program on the Solana blockchain,\nimplementing multiple automated market maker (AMM) curves."),Object(r.b)("p",null,"Here is some important developer information regarding the program deployed on devnet,\ntestnet, and mainnet-beta:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Information"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Account Address"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Token Swap Program"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fee Owner"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"HfoTxFR1Tm6kGmWgYWD6J7YHVy1UwqSULUGVLXkJqaKN"))))),Object(r.b)("p",null,"Check out\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library/tree/master/token-swap"}),"program repository"),"\nfor more developer information."),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,'The Token Swap Program allows simple trading of token pairs without a\ncentralized limit order book. The program uses a mathematical formula called\n"curve" to calculate the price of all trades.  Curves aim to mimic normal market\ndynamics: for example, as traders buy a lot of one token type, the value of the\nother token type goes up.'),Object(r.b)("p",null,"Depositors in the pool provide liquidity for the token pair. That\nliquidity enables trade execution at spot price. In exchange for their\nliquidity, depositors receive pool tokens, representing their fractional\nownership in the pool. During each trade, a program withholds a portion of the\ninput token as a fee. That fee increases the value of pool tokens by being\nstored in the pool."),Object(r.b)("p",null,"This program was heavily inspired by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://uniswap.org/"}),"Uniswap")," and\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://balancer.finance/"}),"Balancer"),". More information is available in their\nexcellent documentation and whitepapers."),Object(r.b)("h2",{id:"background"},"Background"),Object(r.b)("p",null,"Solana's programming model and the definitions of the Solana terms used in this\ndocument are available at:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.solana.com/apps"}),"https://docs.solana.com/apps")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.solana.com/terminology"}),"https://docs.solana.com/terminology"))),Object(r.b)("h2",{id:"source"},"Source"),Object(r.b)("p",null,"The Token Swap Program's source is available on\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library"}),"github"),"."),Object(r.b)("h2",{id:"interface"},"Interface"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/js/src/index.ts"}),"JavaScript\nbindings"),"\nare available that support loading the Token Swap Program on to a chain and\nissuing instructions."),Object(r.b)("p",null,"Example user interface built and maintained by Serum team is available\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/project-serum/oyster-swap"}),"here")),Object(r.b)("h2",{id:"operational-overview"},"Operational overview"),Object(r.b)("p",null,"The following explains the instructions available in the Token Swap Program.\nNote that each instruction has a simple code example that can be found in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/js/cli/token-swap-test.ts"}),"end-to-end tests"),"."),Object(r.b)("h3",{id:"creating-a-new-token-swap-pool"},"Creating a new token swap pool"),Object(r.b)("p",null,"The creation of a pool showcases the account, instruction, and authorization\nmodels on Solana, which can be very different compared to other blockchains."),Object(r.b)("p",null,'Initialization of a pool between two token types, which we\'ll call "A"\nand "B" for simplicity, requires the following accounts:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"empty pool state account"),Object(r.b)("li",{parentName:"ul"},"pool authority"),Object(r.b)("li",{parentName:"ul"},"token A account"),Object(r.b)("li",{parentName:"ul"},"token B account"),Object(r.b)("li",{parentName:"ul"},"pool token mint"),Object(r.b)("li",{parentName:"ul"},"pool token fee account"),Object(r.b)("li",{parentName:"ul"},"pool token recipient account"),Object(r.b)("li",{parentName:"ul"},"token program")),Object(r.b)("p",null,"The pool state account simply needs to be created using\n",Object(r.b)("inlineCode",{parentName:"p"},"system_instruction::create_account")," with the correct size and enough lamports\nto be rent-free."),Object(r.b)("p",null,"The pool authority is a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses"}),"program derived address"),'\nthat can "sign" instructions towards other programs. This is\nrequired for the Token Swap Program to mint pool tokens and transfer tokens from\nits token A and B accounts.'),Object(r.b)("p",null,"The token A / B accounts, pool token mint, and pool token accounts must all be\ncreated (using ",Object(r.b)("inlineCode",{parentName:"p"},"system_instruction::create_account"),") and initialized (using\n",Object(r.b)("inlineCode",{parentName:"p"},"spl_token::instruction::initialize_mint")," or\n",Object(r.b)("inlineCode",{parentName:"p"},"spl_token::instruction::initialize_account"),").  The token A and B accounts must\nbe funded with tokens, and their owner set to the swap authority, and the mint\nmust also be owned by the swap authority."),Object(r.b)("p",null,"Once all of these accounts are created, the Token Swap ",Object(r.b)("inlineCode",{parentName:"p"},"initialize")," instruction\nwill properly set everything up and allow for immediate trading.  Note\nthat the pool state account is not required to be a signer on ",Object(r.b)("inlineCode",{parentName:"p"},"initialize"),",\nso it's important to perform the ",Object(r.b)("inlineCode",{parentName:"p"},"initialize")," instruction in the same transaction\nas its ",Object(r.b)("inlineCode",{parentName:"p"},"system_instruction::create_account"),"."),Object(r.b)("h3",{id:"swapping"},"Swapping"),Object(r.b)("p",null,"Once a pool is created, users can immediately begin trading on it using\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"swap")," instruction.  The swap instruction transfers tokens from a user's source\naccount into the swap's source token account, and then transfers tokens from\nits destination token account into the user's destination token account."),Object(r.b)("p",null,"Since Solana programs require all accounts to be declared in the instruction,\nusers need to gather all account information from the pool state account:\nthe token A and B accounts, pool token mint, and fee account."),Object(r.b)("p",null,"Additionally, the user must allow for tokens to be transferred from their source\ntoken account.  The best practice is to ",Object(r.b)("inlineCode",{parentName:"p"},"spl_token::instruction::approve")," a\nprecise amount to a new throwaway Keypair, and then have that new Keypair sign\nthe swap transaction.  This limits the amount of tokens that can be taken\nfrom the user's account by the program."),Object(r.b)("h3",{id:"depositing-liquidity"},"Depositing liquidity"),Object(r.b)("p",null,"To allow any trading, the pool needs liquidity provided from the\noutside. Using the ",Object(r.b)("inlineCode",{parentName:"p"},"deposit_all_token_types")," or\n",Object(r.b)("inlineCode",{parentName:"p"},"deposit_single_token_type_exact_amount_in")," instructions, anyone can provide\nliquidity for others to trade, and in exchange, depositors receive a pool token\nrepresenting fractional ownership of all A and B tokens in the pool."),Object(r.b)("p",null,"Additionally, the user will need to approve a delegate to transfer tokens from\ntheir A and B token accounts.  This limits the amount of tokens that can be taken\nfrom the user's account by the program."),Object(r.b)("h3",{id:"withdrawing-liquidity"},"Withdrawing liquidity"),Object(r.b)("p",null,'At any time, pool token holders may redeem their pool tokens in exchange for\ntokens A and B, returned at the current "fair" rate as determined by the curve.\nIn the ',Object(r.b)("inlineCode",{parentName:"p"},"withdraw_all_token_types")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"withdraw_single_token_type_exact_amount_out")," instructions, pool tokens are\nburned, and tokens A and B are transferred into the user's accounts."),Object(r.b)("p",null,"Additionally, the user will need to approve a delegate to transfer tokens from\ntheir pool token account.  This limits the amount of tokens that can be taken\nfrom the user's account by the program."),Object(r.b)("h2",{id:"curves"},"Curves"),Object(r.b)("p",null,"The Token Swap Program is completely customizable for any possible trading curve\nthat implements the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/calculator.rs"}),"CurveCalculator"),"\ntrait.  If you would like to implement a new automated market maker, it may be\nas easy as forking the Token Swap Program and implementing a new curve.  The\nfollowing curves are all provided out of the box for reference."),Object(r.b)("h3",{id:"constant-product"},"Constant product"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/constant_product.rs"}),"constant product\ncurve"),"\nis the well-known Uniswap and Balancer style curve that preserves an invariant\non all swaps, expressed as the product of the quantity of token A and token B\nin the swap."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"A_total * B_total = invariant\n")),Object(r.b)("p",null,"If a trader wishes to put in token A for some amount of token B, the calculation\nfor token B becomes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"(A_total + A_in) * (B_total - B_out) = invariant\n")),Object(r.b)("p",null,"For example, if the swap has 100 token A and 5,000 token B, and a trader wishes\nto put in 10 token A, we can solve for the ",Object(r.b)("inlineCode",{parentName:"p"},"invariant")," and then ",Object(r.b)("inlineCode",{parentName:"p"},"B_out"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"A_total * B_total = 100 * 5,000 = 500,000 = invariant\n")),Object(r.b)("p",null,"And"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"(A_total + A_in) * (B_total - B_out) = invariant\n(100 + 10) * (5,000 - B_out) = 500,000\n5,000 - B_out = 500,000 / 110\n5,000 - (500,000 / 110) = B_out\nB_out = 454.5454...\n")),Object(r.b)("p",null,"More information can be found on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://uniswap.org/whitepaper.pdf"}),"Uniswap\nwhitepaper")," and the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://balancer.finance/whitepaper/"}),"Balancer\nwhitepaper"),"."),Object(r.b)("h3",{id:"constant-price"},"Constant price"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/constant_price.rs"}),"constant price curve"),"\nis a simple curve that always maintains the price of token A with respect to\ntoken B.  At initialization, the swap creator sets the cost for 1 token B in\nterms of token A. For example, if the price is set to 17, 17 token A will always\nbe required to receive 1 token B, and 1 token B will always be required to\nreceive 17 token A."),Object(r.b)("p",null,"Note that this curve does not follow traditional market dynamics, since the\nprice is always the same."),Object(r.b)("p",null,'Constant price curves are most useful for fixed offerings of new tokens that\nexplicitly should not have market dynamics. For example, a decentralized\ngame creator wants to sell new "SOLGAME" tokens to be used in their\ngame, so they create a constant price swap of 2 USDC per SOLGAME, and supply all\nof the SOLGAME tokens at swap creation. Users can go to the swap and purchase all\nof the tokens they want and not worry about the market making SOLGAME tokens too\nexpensive.'),Object(r.b)("h3",{id:"stable-under-construction"},"Stable (under construction)"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/stable.rs"}),"stable curve"),"\nfrom ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.curve.fi/"}),"curve.fi"),', has a different shape to prioritize\n"stable" trading, meaning prices that stay constant through trading. Most\nimportantly, prices don\'t change as quickly as the constant product curve, so a\nstable swap between two coins that represent the same value should be as close\nto 1:1 as possible. For example, stablecoins that represent a value in USD (USDC,\nTUSD, USDT, DAI), should not have big price discrepancies due to the amount of\ntokens in the swap.'),Object(r.b)("p",null,"The curve mirrors the dynamics of the curve\nMore information can be found on their ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.curve.fi/stableswap-paper.pdf"}),"whitepaper"),"."),Object(r.b)("p",null,"The Token Swap Program implementation of the stable curve is under construction,\nand a more complete version can be found at the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/michaelhly/stable-swap-program/"}),"stable-swap-program"),"."),Object(r.b)("h3",{id:"offset"},"Offset"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/offset.rs"}),"offset curve"),'\ncan be seen as a combination of the constant price and constant product curve.\nIt follows the constant product curve dynamics, but allows for the pool\ncreator to set an "offset" on one side. The invariant for the curve is:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"(A_total) * (B_total + B_offset) = invariant\n")),Object(r.b)("p",null,"This is useful for initial token\nofferings, where the token creator wants to sell some new token as a swap without\nputting up the capital to fund the other side of the swap. This is similar to the\nconstant price curve, but the key difference is that the offset curve captures\nnormal market dynamics, in that the offered token price will increase as it is\nbought."),Object(r.b)("p",null,'For example, a decentralized betting application creator wants to sell new "SOLBET"\ntokens on the market in exchange for USDC, and they believe each token is worth\nat least 4 USDC.  They create a pool between SOLBET and USDC, funding\none side with 1,000 SOLBET, and the other side with 0 USDC, but an offset\nof 4,000 USDC.'),Object(r.b)("p",null,"If a trader tries to buy SOLBET with 40 USDC, the invariant is calculated\nwith the offset:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"(SOLBET_total) * (USDC_total + USDC_offset) = invariant\n1,000 * (0 + 4,000) = 4,000,000\n\n(SOLBET_total - SOLBET_out) * (USDC_total + USDC_offset + USDC_in) = invariant\nSOLBET_out = 9.901\n")),Object(r.b)("p",null,"The trader received 9.901 SOLBET for 40 USDC, so the price per SOLBET was\nroughly 4.04, slightly higher than the minimum of 4 USDC per SOLBET."),Object(r.b)("p",null,"Conversely, if a trader tries to buy USDC with SOLBET immediately after creation,\nit will fail because there is no USDC actually present in the pool."),Object(r.b)("h2",{id:"testing"},"Testing"),Object(r.b)("p",null,"The token-swap program is tested using various strategies, including unit tests,\nintegration tests, property tests, and fuzzing.  Since unit tests and integration\ntests are well-known, we highlight property tests and fuzzing here."),Object(r.b)("h3",{id:"property-testing"},"Property testing"),Object(r.b)("p",null,"Using the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://altsysrq.github.io/proptest-book/intro.html"}),"proptest"),"\ncrate, we test specific mathematical properties of curves, specifically to avoid\nleaking value on any trades, deposits, or withdrawals.  It is out of scope of\nthis document to explain property testing, but the specific property tests for\nthe Token Swap Program can be found in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/constant_product.rs"}),"curves"),"\nand\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/src/curve/math.rs"}),"math"),"\nportions of the repo."),Object(r.b)("h3",{id:"fuzzing"},"Fuzzing"),Object(r.b)("p",null,"Using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rust-fuzz/honggfuzz-rs"}),"honggfuzz"),", we regularly\ntest all possible inputs to the Token Swap Program, ensuring that the program\ndoes not crash unexpectedly or leak tokens.  It is out of scope of this document\nto explain fuzzing, but the specific implementation for the program can be found\nin the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/solana-labs/solana-program-library/blob/master/token-swap/program/fuzz/src/instructions.rs"}),"instruction fuzz\ntests"),"\nof the repo."))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,d=b["".concat(i,".").concat(h)]||b[h]||u[h]||r;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);