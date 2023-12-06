// import {
//   AlphaRouter,
//   UniswapMulticallProvider,
//   // V2PoolProvider,
//   // TokenPropertiesProvider,
//   // NodeJSCache,
//   // CachingV3PoolProvider,
//   // V3PoolProvider,
//   //   FallbackTenderlySimulator,
//   //   TenderlySimulator,
//   V2SubgraphProvider,
//   V3SubgraphProvider,
//   //   EthEstimateGasSimulator,
//   SwapType,
// } from '../src';
// import JSBI from 'jsbi';
// import Erc20ABI from '../src/abis/erc20.json';

// // import NodeCache from 'node-cache';
// import { ethers } from 'ethers';
// // import { OnChainTokenFeeFetcher } from '../src/providers/token-fee-fetcher';
// // import { PortionProvider } from '../src/providers/portion-provider';
// import {
//   Percent,
//   CurrencyAmount,
//   TradeType,
//   Token,
// } from '@myunidavid/sdk-core';
// import { Protocol } from '@myunidavid/router-sdk';
// let rpc = 'https://goerli.blockpi.network/v1/rpc/public';
// const provider = new ethers.providers.JsonRpcProvider(rpc);
// const chainId = 5;
// const multicall2Provider = new UniswapMulticallProvider(chainId, provider);
// // const tokenFeeFetcher = new OnChainTokenFeeFetcher(chainId, provider);
// // const tokenPropertiesProvider = new TokenPropertiesProvider(
// //   chainId,
// //   new NodeJSCache(new NodeCache({ stdTTL: 360, useClones: false })),
// //   tokenFeeFetcher
// // );
// // const v2PoolProvider = new V2PoolProvider(
// //   chainId,
// //   multicall2Provider,
// //   tokenPropertiesProvider
// // );
// // const v3PoolProvider = new CachingV3PoolProvider(
// //   chainId,
// //   new V3PoolProvider(chainId, multicall2Provider),
// //   new NodeJSCache(new NodeCache({ stdTTL: 360, useClones: false }))
// // );

// const LU9 = new Token(
//   5,
//   '0x1e096a15b319c4edef7ee256b8d346ee208a3ecd',
//   18,
//   'LU9',
//   'LearnUni9'
// );
// const LU4 = new Token(
//   5,
//   '0x6627b4c81ce0be6c2a33c5b32aed99469a1e4fc5',
//   18,
//   'LU4',
//   'LearnUni4'
// );

// const LU3 = new Token(
//   5,
//   '0xfaa62fe4142b3e7e067a77d2ce537323e2f1212a',
//   18,
//   'LU3',
//   'LearnUni3'
// );

// const CurrentConfig = {
//   wallet: {
//     address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
//     privateKey:
//       '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
//   },
//   tokens: {
//     in: LU3,
//     amountIn: 100000,
//     out: LU9,
//   },
// };

// // console.log(v3PoolProvider);
// async function generateRoute() {
//   const router = new AlphaRouter({
//     chainId: chainId,
//     provider: provider,
//     multicall2Provider,
//     v2SubgraphProvider: new V2SubgraphProvider(chainId),
//     v3SubgraphProvider: new V3SubgraphProvider(chainId),
//     // v2PoolProvider,
//     // v3PoolProvider,
//   });
//   const options = {
//     recipient: '0x417b72DEEf701Ce7Eb9aC9ac32c2Aa5f275aEB8b',
//     slippageTolerance: new Percent(50, 10_000),
//     deadline: Math.floor(Date.now() / 1000 + 1800),
//     type: SwapType.SWAP_ROUTER_02,
//     forceMixedRoutes: true,
//   };
//   const route = await router.route(
//     CurrencyAmount.fromRawAmount(
//       CurrentConfig.tokens.in,
//       fromReadableAmount(
//         CurrentConfig.tokens.amountIn,
//         CurrentConfig.tokens.in.decimals
//       ).toString()
//     ),
//     CurrentConfig.tokens.out,
//     TradeType.EXACT_INPUT,
//     options,
//     { protocols: [Protocol.V2] }
//   );

//   return route;
// }
// function fromReadableAmount(amount: number, decimals: number): JSBI {
//   const extraDigits = Math.pow(10, countDecimals(amount));
//   const adjustedAmount = amount * extraDigits;
//   return JSBI.divide(
//     JSBI.multiply(
//       JSBI.BigInt(adjustedAmount),
//       JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(decimals))
//     ),
//     JSBI.BigInt(extraDigits)
//   );
// }

// // function toReadableAmount(rawAmount: number, decimals: number): string {
// //   return JSBI.divide(
// //     JSBI.BigInt(rawAmount),
// //     JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(decimals))
// //   ).toString();
// // }

// function countDecimals(x: number) {
//   if (Math.floor(x) === x) {
//     return 0;
//   }
//   return x.toString().split('.')[1].length || 0;
// }

// async function run() {
//   const r = await generateRoute();
//   console.log(r ? 'getRouter' : 'noRouter');
//   if (r) {
//     console.log(r.route[0].poolAddresses);
//   }
//   const wallet = new ethers.Wallet(
//     'ed63a785a13c43d5bbf8e1cc2014e3ccf841a528389d59d28a320e7dca2fdda3',
//     provider
//   );
//   // const tokenContract = new ethers.Contract(
//   //   CurrentConfig.tokens.in.address,
//   //   Erc20,
//   //   wallet
//   // );
//   // const tokenApproval = await tokenContract.approve(
//   //   ,
//   //   ethers.BigNumber.from(rawTokenAmountIn.toString())
//   // );
// }
// run();
