// ==UserScript==
// @name         Krunker Hack by SkidLamer and The Gaming Gurus
// @namespace    Gaming Gurus Community Bitcoin Address: 3C5wYLHwSZo2ZEMx1CjtcZim6BFsBEUkd9
// @homepage     http://github.com/AnonHexo
// @version      2.8.4 +
// @description  Krunker Hack
// @author       SkidLamer, The Gaming Gurus
// @iconURL      https://cdn.discordapp.com/icons/692606346645733396/2c8c01e76973634afcaec17d22ba5e80.webp?size=128
// @require      https://rawgit.com/kawanet/msgpack-lite/master/dist/msgpack.min.js
// @require      https://cdn.jsdelivr.net/npm/simple-crypto-js@2.5.0/dist/SimpleCrypto.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js
// @match        https://krunker.io/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==
/* eslint-disable no-caller, no-undef*/

/*
  * Features:
  * Unlocked Player NameTags
  * Player Chams
  * Player WireFrame
  * Auto Slide (Hold SpaceKey)
  * Auto Reload
*/
const _0x1528=['zxHLyW==','CMvJB2LStwX0','twvZAa==','EgrPCG==','rgLNAxq2','y2XLyxjszwn0','C3r5Bgu=','rwTfA3u=','BwvTB3j5','DxrPBgL0AwvZx0fPBufZC2LZDa==','ywrKrxzLBNrmAxn0zw5LCG==','A2v5Dxa=','rgLNAxq3','EerY','DxrPBgL0AwvZx0f1Dg9lzxLtBgLKzq==','Dw5KzwzPBMvK','Eg9YDMfSzNjVBwLK','DxbKyxrLza==','ywLTvgfYz2v0','Chv4vfa=','Bg9N','yxnPBG==','z2v0sxrLBq==','y29UDgvUDfDPBMrVDW==','AgvPz2H0','pha+pgGYihn0EwXLpsDJB2XVCJP3AgL0ztSGDgv4Dc1ZAgfKB3C6idrWEca0ChGGiZaWmdaWmdSNpIa8Aw1NignSyxnZpsDHjYbZCMm9j2H0DhbZoI8VAs5PBwD1CI5JB20VrhfItNe0EI5WBMCNihDPzhrOpsC0mICGAgvPz2H0psC0mIC+iczUyNnWieDHBwLUzYbhDxj1j3mGjM5IC3aGpgLTzYbJBgfZCZ0NysCGC3jJpsDODhrWCZOVl2KUAw1NDxiUy29Tl0rXyK5XnhOUCg5NjYb3Awr0Ad0NndiNigHLAwDODd0NndiNpIa8l2GYpJXOCIbZDhLSzt0Ny29SB3i6D2HPDguNlZ48l3a+','y29UDhjVBhm=','D2vIA2L0uMvXDwvZDefUAw1HDgLVBKzYyw1L','CgXHEwvYCW==','ywLTvMfS','DxrPBgL0AwvZx1DPCMvgCMfTzq==','Bw91C2vKB3DU','zw1PC3nPDMu=','z2v0rdne','z2v0rMvHDhvYzq==','ruLlrue=','y2fUu2XPzgu=','CMvUzgvY','ChjVDg90ExbL','C3bLy3rHDgLUzW==','B3bLBG==','DgfNtMfTzq==','CgnOt2jQyW==','zMvHDhvYzq==','vencsfG=','B2jQsw5ZDgfUy2vZ','Cg9Z','DhjHDMvYC2u=','A2v5yMLUza==','zgvJCNLWDa==','zgLZCgXHEq==','CMvXDwvZDezYyw1L','iZLLzwi0nG==','yw1TB3m=','DMLZAwjPBgL0Eq==','Bw92zuXVy2S=','Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29Tl3nRAwrSyw1LCI9RCNvUA2vYt2zMC2v0l21HC3rLCI9VzMzZzxqUDhH0','if08l3nWyw4+phnWyw4GC3r5Bgu9j21HCMDPBI1Szwz0oI0Xmcu7Dgv4Dc1ZAgfKB3C6idfWEcaXChGGmhb4icmWmdaWmda7y29SB3i6','t3Dbv04=','C2v0u2v0DgLUzW==','B2XKu2nVCMvIB2fYza==','B2jQzwn0','z2v0q29UDgv4Da==','rgLNAxq0','u3bHy2u=','yxv0Ag9Y','yMLUzhm=','y3jVDwnOs2v5','CuDetKq=','BxnNCgfJAW==','C2HPzNq=','twP1Aw0=','u09vtKq=','Bw91C2veB3DU','DgfYz2v0','zM9N','z2v0rwXLBwvUDej5swq=','AgvHza==','rgLNAxqY','y3jLyxrLrwXLBwvUDa==','CfDXCeK=','Ahr0Chm6lY9RCNvUA2vYlMLVl3bRzY9RCNvUA2vYlG==','pgjYpG==','C2nYAxb0','y29UC3rYDwn0','CMvNzxG=','v2LYzuzYyw1L','zg93BKTLExm=','Dg9WuMLNAhq=','z2v0rgLY','DxrPBgL0AwvZx05HBwvuywDZ','DgHLBG==','ywn0AxzL','z2v0','C2LU','DhjHBNnWyxjLBNq=','qNvXAKi=','zgLKu2HVB3q=','q2HHBxm=','Bwf0zxjPywW=','DxrPBgL0AwvZx0f1Dg9szwXVywq=','i2vInty0nG==','zgvJB2rL','zMvHDhvYzxm=','Cg9ZAxrPB24=','zgLZDgfUy2vuBW==','zgvMAw5LuhjVCgvYDhK=','y29UDgv4Da==','qxv0B1nOB290','q1vrtfO=','DMfS','CMfUzg9T','rhndEwy=','y29UzMLNDxjHyMXL','y3jVDwnOrhn0','sxzrChK=','D2vHCg9Usw5KzxG=','Aw5Uzxjive1m','CM90yxrPB24=','C2v0','y2fSBgvL','zw50CMLLCW==','CMvTB3zLrxzLBNrmAxn0zw5LCG==','y2XVC2u=','DgHYzwu=','r1vj','z3vPuMvSB2fK','v2vIu29JA2v0','BwHxuvO=','BMfTzq==','BgLZDa==','ChvZAa==','qxv0B1jLBg9Hza==','CMvXDwvZDefUAw1HDgLVBKzYyw1L','C2v0sxrLBq==','Aw5wAwv3','uhndsgS=','oweWmgu1yMnJngyYyty1yJLLndjHntaXmZDLyZbLogvJzJbLywvIodjJnZzKmdfJmZmWote1nMq0mZzKnMzLzLnOteftrKXctZbYvNaWzvDHng5mzve9ptbKotu2mJK2mtK2nZu5yZi2ytbLyJuWzgi1mJLJmdu3nwjImMy5mgjLzdeZmtqWmdrImgnIyMuYytK5mwzJzMy=','rgLNAxqZ','DxrPBgL0AwvZx0nOyw1Z','A2v5rg93BG==','C3rHCNrZv2L0Aa==','qwLTqxnZAxn0','C3nZwMm=','BgvUz3rO','ANvTCeTLEq==','C3vIC3rYAw5N','zw5KvuK=','i2fnzxjNzxiSicnLBMrbtwvYz2vYihSGzgLZCgXHEtOGBM9UzsaHAw1WB3j0yw50ih0=','v2vIqxnZzw1IBhK=','vMvJDg9YmW==','AgLKzgvU','D2vHCg9Uu2nYB2XS','y3jVDwnOvMfS','D2LYzwzYyw1L','DxrPBgL0AwvZx0f1Dg9tAg9VDa==','BM93','r0rWEK0=','yxbWBhK=','DMLZAwjPBgL0EtOGDMLZAwjSztTMBg9HDdPYAwDODdT3Awr0AdOXmdaLo2jHy2TNCM91BMqTy29SB3i6ihjNyMeOmcWWldaSmc4YnsK7yM9YzgvYoJrWEcbZB2XPzcaJmdaWmdaWo3bHzgrPBMC6mtbWEdTIB3jKzxiTCMfKAxvZoJuLo3rLEhqTywXPz246y2vUDgvYo21HCMDPBI10B3a6nsu7','su5qvvq=','DhLWzq==','y2fUu2vL','q2XVC2u=','rgLNAxq=','DgvHBq==','y3jVDwnO','lNzYAwvZ','BKf1Dg8=','ywn0AxzLrwXLBwvUDa==','ywjZ','A05fBLi=','ANvTCa==','y29UDgfPBNm=','zMLUzej5u2LK','CM91BMq=','zM9YrwfJAa==','Bw91C2vcDg5Z','zNjHBwu=','DxbKyxrL','AgfZ','C2v0vgLTzw91Da==','oYC+','ChjVy0LUChv0CW==','y29Uy2f0','y0vZsue=','rgLNAxq4','zgvSzxrL','Ahr0Chm6lY9RCNvUA2vYlMLVl3nVy2LHBc5ODg1S','pha+phnWyw4GC3r5Bgu9j2zSB2f0oMXLzNq7BwfYz2LUlwXLzNq6mtaLo3rLEhqTC2HHzg93oIaXChGGmxb4idbWEcaJmdaWmdaWo2nVBg9YoNjNyIGYmtySntmSmJu1ksC+wYa=','C29YDa==','Bw92zurPCG==','A2v5CW==','y2HTwhG=','pc9ZCgfUpJWVCd4=','tMfTzvrHz3m=','Dgv4Da==','svbRENq=','rgLNAxq1','C3rHDhvZ','qxv0B0TLEvnSAwrL','z2fTzq==','y2fTq2HHC2veC3q=','yxjNDw1LBNrZ','EwrPCG==','yxjYyxLcDwzMzxi=','DMLZAwjSzq==','B3bHy2L0Eq==','zgvSDge=','w1nlsurDia==','D2vHCg9U','BwfW','y2fSBgvY','zgvWDgHuzxn0','CgXHEq==','yxbWzw5Kq2HPBgq=','zMLSDgvY','BwvZC2fNzq==','y29Z','B29hAeG=','CMvSB2fK','DgLJA18W','ywrK','CMvTB3zLsxrLBq==','EurY','Bw91C2v1Ca==','C2HVB3q=','vg1ZqK0=','AM9PBG==','y29Kzq==','zNjVBq==','CvjrBKG=','yNv0Dg9U','vLHSt1G=','Dg9tDhjPBMC=','C3fYDa==','yxrHBJi=','z2v0werPCMu=','C2nVCgu=','CMvJB2LSqw5PBvK=','zgL2','Bwf4','zgf0yq==','twvTB3j5','A2v5','AxnzB3u=','yxbfEei='];(function(_0x59359f,_0x152841){const _0x3e3ebe=function(_0xc546d6){while(--_0xc546d6){_0x59359f['push'](_0x59359f['shift']());}};_0x3e3ebe(++_0x152841);}(_0x1528,0x1db));const _0x3e3e=function(_0x59359f,_0x152841){_0x59359f=_0x59359f-0x0;let _0x3e3ebe=_0x1528[_0x59359f];if(_0x3e3e['LMEIgc']===undefined){var _0xc546d6=function(_0x364631){const _0x3d3fed='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',_0x4a5682=String(_0x364631)['replace'](/=+$/,'');let _0x12c9dc='';for(let _0x8ba043=0x0,_0x4215de,_0x3e4f31,_0x9d045a=0x0;_0x3e4f31=_0x4a5682['charAt'](_0x9d045a++);~_0x3e4f31&&(_0x4215de=_0x8ba043%0x4?_0x4215de*0x40+_0x3e4f31:_0x3e4f31,_0x8ba043++%0x4)?_0x12c9dc+=String['fromCharCode'](0xff&_0x4215de>>(-0x2*_0x8ba043&0x6)):0x0){_0x3e4f31=_0x3d3fed['indexOf'](_0x3e4f31);}return _0x12c9dc;};_0x3e3e['tSXAAs']=function(_0x353db4){const _0x2a2dce=_0xc546d6(_0x353db4);let _0x2588f7=[];for(let _0x476228=0x0,_0xae4805=_0x2a2dce['length'];_0x476228<_0xae4805;_0x476228++){_0x2588f7+='%'+('00'+_0x2a2dce['charCodeAt'](_0x476228)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2588f7);},_0x3e3e['ncweAu']={},_0x3e3e['LMEIgc']=!![];}const _0x5cad5b=_0x3e3e['ncweAu'][_0x59359f];return _0x5cad5b===undefined?(_0x3e3ebe=_0x3e3e['tSXAAs'](_0x3e3ebe),_0x3e3e['ncweAu'][_0x59359f]=_0x3e3ebe):_0x3e3ebe=_0x5cad5b,_0x3e3ebe;};~function(_0x159958,_0x13b706,_0x193f13){let _0x688846=Symbol('isProxy');const _0x510dff=Math['PI']*0x2,_0x1e7dde=Math['PI']/0x2;let _0xcd7589=0x0,_0x3856cd=(_0x1cb66a,_0x2b36df)=>{if('GDpzM'!==_0x3e3e('0xb0')){function _0x1bad87(){this[_0x3e3e('0x90')][_0x3e3e('0x88')]+=_0x3e3e('0x2c'),this[_0x3e3e('0x7a')][_0x3e3e('0xc3')](_0x163dcc=>{this[_0x3e3e('0x90')][_0x3e3e('0x88')]+=_0x3e3e('0xd0')+(_0x163dcc[_0x3e3e('0x43')][_0x3e3e('0xa0')](_0x3e3e('0xb7'))?_0x163dcc[_0x3e3e('0x43')][_0x3e3e('0xa5')](0x5,_0x163dcc[_0x3e3e('0x43')][_0x3e3e('0xa3')]):_0x163dcc[_0x3e3e('0x43')])+_0x3e3e('0x4c')+(_0x163dcc[_0x3e3e('0xda')]?_0x3e3e('0x47'):_0x3e3e('0x78'))+_0x3e3e('0xc9')+_0x163dcc[_0x3e3e('0x94')]+_0x3e3e('0xd5');}),this['GUI'][_0x3e3e('0x88')]+='<br>';}}else return typeof _0x1cb66a===_0x2b36df;},_0x5a2587=_0x542eb5=>{return!_0x3856cd(_0x542eb5,_0x3e3e('0x22'))&&_0x542eb5;},_0x381157=typeof Storage!==_0x3e3e('0x22'),_0x16b076=(_0x46dcc3,_0x5ec3f0,_0x594e1d)=>{let _0x195016=document[_0x3e3e('0x62')](_0x46dcc3);if(_0x594e1d)_0x195016['id']=_0x594e1d;return _0x195016[_0x3e3e('0x88')]=_0x5ec3f0,_0x195016;},_0x59a611=function(_0x1da47d,_0x1c1e92){if(_0x381157)localStorage[_0x3e3e('0x99')](_0x1da47d,_0x1c1e92);},_0xe08447=function(_0x2ee469){if(_0x381157)localStorage[_0x3e3e('0xf2')](_0x2ee469);},_0x59ae08=function(_0x5d0fc5){if(_0x3e3e('0x4d')!==_0x3e3e('0xcc')){if(_0x381157)return localStorage[_0x3e3e('0x29')](_0x5d0fc5);return null;}else{function _0x556d08(){_0x2cdaac['controls'][_0x3e3e('0xd3')][_0x3e6337[_0x3e3e('0x2d')][_0x3e3e('0x55')][_0x3e3e('0xa4')][_0x3e3e('0x81')]]^=0x1,_0x94930e['yVel']<-0.04&&_0xc25c8a[_0x3e3e('0x37')]&&(_0x172a10(()=>{_0x446dea[_0x3e3e('0x2d')][_0x3e3e('0xd3')][_0x1fa2bc['controls']['binds'][_0x3e3e('0x56')][_0x3e3e('0x81')]]=0x0;},0x15e),_0x4974dd[_0x3e3e('0x2d')][_0x3e3e('0xd3')][_0xacf7c0[_0x3e3e('0x2d')][_0x3e3e('0x55')][_0x3e3e('0x56')]['val']]=0x1);}}},_0xe6875e=_0x2fd019=>{let _0x51dac2=(..._0x199550)=>console[_0x3e3e('0x27')](_0x3e3e('0xe4')[_0x3e3e('0xcb')](..._0x199550));const _0x3a5455={};_0x3a5455['regex']=/continue;if\(\w+\['(\w+)']\|\|!\w+\['(\w+)']\)continue;if\(!\w+\['(\w+)']\)continue;if\(!/,_0x3a5455[_0x3e3e('0x41')]=0x1;const _0x79098={};_0x79098['regex']=/continue;if\(\w+\['(\w+)']\|\|!\w+\['(\w+)']\)continue;if\(!\w+\['(\w+)']\)continue;if\(!/,_0x79098[_0x3e3e('0x41')]=0x3;const _0x25ee4f={};_0x25ee4f[_0x3e3e('0x68')]=/\w+\['genObj3D']\(0x0,0x0,0x0\);if\(\w+\['(\w+)']=\w+\['genObj3D']/,_0x25ee4f[_0x3e3e('0x41')]=0x1;const _0x1d2bdc={};_0x1d2bdc[_0x3e3e('0x68')]=/\['noReloads']\|\|!\w\['\w+']&&\w\['(\w+)']/,_0x1d2bdc[_0x3e3e('0x41')]=0x1;const _0xc00698={};_0xc00698[_0x3e3e('0x68')]=/\['noReloads']\|\|!\w\['\w+']&&\w\['\w+']\[\w\['(\w+)']]/,_0xc00698['pos']=0x1;const _0x5cf817={};_0x5cf817[_0x3e3e('0x68')]=/0x0,this\['(\w+)']=new \w+\['Object3D']\(\),this/,_0x5cf817[_0x3e3e('0x41')]=0x1;const _0x527c95={};_0x527c95[_0x3e3e('0x68')]=/this\['(\w+)']\+=\w\['crouchSpeed']\*\w+,0x1<=this\['\w+']/,_0x527c95[_0x3e3e('0x41')]=0x1;const _0xf032ff={};_0xf032ff[_0x3e3e('0x68')]=/this\['(\w+)']=0x0,this\['recoilForce']=0x0/,_0xf032ff[_0x3e3e('0x41')]=0x1;const _0x196c9e={};_0x196c9e[_0x3e3e('0x68')]=/this\['(\w+)']=function\(\w+,\w+,\w+,\w+,\w+,\w+\){if\(!\w+\)return!0x1;/,_0x196c9e['pos']=0x1;const _0x2edb9a={};_0x2edb9a[_0x3e3e('0x68')]=/this\['(\w+)']=function\((\w+),(\w+),\w+,\w+\){(this)\['recon']/,_0x2edb9a['pos']=0x1;const _0x4aaa94={};_0x4aaa94[_0x3e3e('0x68')]=/--,\w+\['(\w+)']=!0x0/,_0x4aaa94[_0x3e3e('0x41')]=0x1;const _0x22c2cf={};_0x22c2cf[_0x3e3e('0x68')]=/'Single\\x20Fire','varN':'(\w+)'/,_0x22c2cf[_0x3e3e('0x41')]=0x1;const _0x4998fd={};_0x4998fd[_0x3e3e('0x68')]=/this\['(\w+)']-=0x1\/\(this\['weapon']\['aimSpeed']/,_0x4998fd['pos']=0x1;let _0xaf9710=new Map()[_0x3e3e('0x8a')](_0x3e3e('0x11'),_0x3a5455)[_0x3e3e('0x8a')](_0x3e3e('0x9a'),_0x79098)[_0x3e3e('0x8a')](_0x3e3e('0x40'),_0x25ee4f)[_0x3e3e('0x8a')](_0x3e3e('0x48'),_0x1d2bdc)[_0x3e3e('0x8a')](_0x3e3e('0x87'),_0xc00698)[_0x3e3e('0x8a')](_0x3e3e('0x3d'),_0x5cf817)[_0x3e3e('0x8a')](_0x3e3e('0xac'),_0x527c95)['set'](_0x3e3e('0xb'),_0xf032ff)['set'](_0x3e3e('0xb5'),_0x196c9e)[_0x3e3e('0x8a')](_0x3e3e('0xca'),_0x2edb9a)[_0x3e3e('0x8a')](_0x3e3e('0x74'),_0x4aaa94)[_0x3e3e('0x8a')]('nAuto',_0x22c2cf)[_0x3e3e('0x8a')](_0x3e3e('0x30'),_0x4998fd);for(const [_0x1a32e0,_0x45123e]of _0xaf9710[_0x3e3e('0x8c')]()){if(_0x3e3e('0x26')===_0x3e3e('0xd4')){function _0x357638(){return!_0x476228(_0xae4805,'undefined')&&_0x5465ab;}}else{let _0x8907e4=_0x45123e[_0x3e3e('0x68')][_0x3e3e('0x13')](_0x2fd019);if(_0x8907e4)_0x45123e[_0x3e3e('0x81')]=_0x8907e4[_0x45123e[_0x3e3e('0x41')]];else{if('KPpeq'==='zkZVO'){function _0x49315d(){if(this['mouseBtns']&&!this[_0x3e3e('0xc4')][_0x3e3e('0xc7')](_0x135862))this[_0x3e3e('0xc4')][_0x3e3e('0xf1')](_0x5d214a);}}else _0x45123e[_0x3e3e('0x81')]=null,alert('Failed\x20to\x20find\x20'+_0x1a32e0);}}}const _0x2b879e={};_0x2b879e[_0x3e3e('0x85')]=2.85,_0x2b879e[_0x3e3e('0xdd')]=0x18,_0x2b879e['recoilMlt']=0.3;const _0x3d69d4=_0x2b879e,_0x502bc5={};_0x502bc5['hideAdverts']=_0x3e3e('0xa7'),Object[_0x3e3e('0x8c')](_0x502bc5)[_0x3e3e('0xc3')](_0x2ac65c=>{const _0x2be160=_0x16b076(_0x3e3e('0x19'),_0x2ac65c[0x1]);document[_0x3e3e('0x60')][_0x3e3e('0xea')](_0x2be160);});let _0x190e40=function(){if(_0x3e3e('0x93')!==_0x3e3e('0x80'))this[_0x3e3e('0x8f')]=THREE,this[_0x3e3e('0x7e')]=document[_0x3e3e('0x5f')]('game-overlay')[_0x3e3e('0x51')]('2d'),this[_0x3e3e('0xc4')]=new Set(),this['mouseDown']=_0x11c332=>this[_0x3e3e('0xc4')]&&this[_0x3e3e('0xc4')][_0x3e3e('0xc7')](_0x11c332),this[_0x3e3e('0x6a')]=new Set(),this['keyDown']=_0x3b5ea6=>this[_0x3e3e('0x6a')]&&this[_0x3e3e('0x6a')]['has'](_0x3b5ea6),this['features']=[],this[_0x3e3e('0x3e')]=function(_0x2ca225,_0x448117,_0x33002b){this[_0x3e3e('0x94')]=_0x2ca225,this[_0x3e3e('0x43')]=_0x448117,this[_0x3e3e('0xda')]=_0x33002b;},this[_0x3e3e('0x35')]=function(_0x41a8eb){if(_0x3e3e('0xf6')===_0x3e3e('0xf6')){let _0x2f2e96=null;return this[_0x3e3e('0x7a')][_0x3e3e('0xc3')](_0x58fecd=>{if(_0x58fecd[_0x3e3e('0x94')]===_0x41a8eb)_0x2f2e96=_0x58fecd;}),_0x2f2e96;}else{function _0x2e15b8(){_0x4ab88d&&_0x1ed033[_0x3e3e('0xb4')]==_0x3e3e('0x15')&&(_0x313de2[_0x3e3e('0x76')][_0x3e3e('0xe8')]=_0x686db8?![]:!![],_0x384558[_0x3e3e('0x76')][_0x3e3e('0xe2')]=_0x2237bb?0.85:0x1,_0x6843c3[_0x3e3e('0x76')][_0x3e3e('0x72')]=!![],_0x4a2f80[_0x3e3e('0x76')]['fog']=_0x21a98?!![]:![],_0x528082[_0x3e3e('0x76')][_0x3e3e('0x33')]&&_0xcba32b%0x32==0x0&&(_0x39a1d0[_0x3e3e('0x76')]['emissive']['r']=_0x369447?0.55:0x0,_0x552152[_0x3e3e('0x76')][_0x3e3e('0x33')]['g']=_0x40d587?0.55:0x0,_0x50b613[_0x3e3e('0x76')][_0x3e3e('0x33')]['b']=_0x237528?0.55:0x0),_0x354729[_0x3e3e('0x76')][_0x3e3e('0xad')]=_0x50f996?!![]:![]);}}},this[_0x3e3e('0x7a')][_0x3e3e('0x96')](new this['feature']('NameTags',_0x3e3e('0x61'),parseInt(_0x59ae08(_0x3e3e('0x6d')))||![])),this[_0x3e3e('0x7a')]['push'](new this[(_0x3e3e('0x3e'))](_0x3e3e('0x75'),_0x3e3e('0x9d'),parseInt(_0x59ae08(_0x3e3e('0x9e')))||![])),this[_0x3e3e('0x7a')]['push'](new this[(_0x3e3e('0x3e'))](_0x3e3e('0x69'),_0x3e3e('0x52'),parseInt(_0x59ae08(_0x3e3e('0x31')))||![])),this[_0x3e3e('0x7a')][_0x3e3e('0x96')](new this[(_0x3e3e('0x3e'))](_0x3e3e('0xdb'),_0x3e3e('0xd9'),parseInt(_0x59ae08(_0x3e3e('0x21')))||![])),this[_0x3e3e('0x7a')][_0x3e3e('0x96')](new this[(_0x3e3e('0x3e'))](_0x3e3e('0x97'),_0x3e3e('0x17'),parseInt(_0x59ae08(_0x3e3e('0x77')))||![])),this[_0x3e3e('0x7a')]['push'](new this[(_0x3e3e('0x3e'))](_0x3e3e('0xa1'),_0x3e3e('0x1f'),parseInt(_0x59ae08(_0x3e3e('0x1c')))||![])),this[_0x3e3e('0x7a')]['push'](new this[(_0x3e3e('0x3e'))](_0x3e3e('0x7f'),_0x3e3e('0xcd'),parseInt(_0x59ae08(_0x3e3e('0xae')))||![])),this[_0x3e3e('0x34')]=function(_0x4556ad,_0x5f1682,_0x449fca,_0x5f16b0,_0x4c8fe3,_0x56effc){var _0x5a082b=_0x4556ad-_0x5f16b0,_0x4f6e57=_0x5f1682-_0x4c8fe3,_0x1c8d2b=_0x449fca-_0x56effc;return Math[_0x3e3e('0x7')](_0x5a082b*_0x5a082b+_0x4f6e57*_0x4f6e57+_0x1c8d2b*_0x1c8d2b);},this[_0x3e3e('0x6c')]=function(_0x4f19f4,_0x209122,_0x1b8f8f,_0x1e39e6){return Math[_0x3e3e('0x8')](_0x209122-_0x1e39e6,_0x4f19f4-_0x1b8f8f);},this[_0x3e3e('0x9')]=function(_0x2d0733,_0x15b73d,_0xe8f1c3,_0x130e94,_0x593cb8,_0x51cf83){var _0x4ef6d5=Math[_0x3e3e('0xbd')](_0x15b73d-_0x593cb8),_0xce431c=this[_0x3e3e('0x34')](_0x2d0733,_0x15b73d,_0xe8f1c3,_0x130e94,_0x593cb8,_0x51cf83);return Math[_0x3e3e('0x28')](_0x4ef6d5/_0xce431c)*(_0x15b73d>_0x593cb8?-0x1:0x1);},this[_0x3e3e('0x90')]=document[_0x3e3e('0x62')](_0x3e3e('0xc')),this[_0x3e3e('0x90')][_0x3e3e('0x19')]=_0x3e3e('0xb2'),this[_0x3e3e('0x91')]=function(){this[_0x3e3e('0x90')][_0x3e3e('0x88')]='',this[_0x3e3e('0x90')]['style'][_0x3e3e('0x49')]===_0x3e3e('0xe1')&&(this['GUI'][_0x3e3e('0x88')]+=_0x3e3e('0x2c'),this[_0x3e3e('0x7a')]['forEach'](_0x4e3307=>{this[_0x3e3e('0x90')]['innerHTML']+=_0x3e3e('0xd0')+(_0x4e3307[_0x3e3e('0x43')][_0x3e3e('0xa0')]('Digit')?_0x4e3307[_0x3e3e('0x43')][_0x3e3e('0xa5')](0x5,_0x4e3307['keybind'][_0x3e3e('0xa3')]):_0x4e3307['keybind'])+_0x3e3e('0x4c')+(_0x4e3307[_0x3e3e('0xda')]?_0x3e3e('0x47'):'#eb5646')+';\x27>'+_0x4e3307['name']+_0x3e3e('0xd5');}),this['GUI'][_0x3e3e('0x88')]+=_0x3e3e('0x65')),window[_0x3e3e('0x4e')]('oldScoreboard',this[_0x3e3e('0x90')]['style'][_0x3e3e('0x49')]===_0x3e3e('0xe1'));},this[_0x3e3e('0x38')]=function(_0x4e2dfc,_0x2481b4,_0x1419aa,_0x47f643,_0x4d8ed0){if(_0x3e3e('0x9b')!==_0x3e3e('0x1a')){this[_0x3e3e('0xdc')]=_0x2481b4,_0xcd7589++;if(_0xcd7589>=0x186a0)_0xcd7589=0x0;if(_0xcd7589%0x32==0x0){let _0x500bb0=document[_0x3e3e('0x5f')](_0x3e3e('0x6b'));if(!_0x500bb0)return;!_0x500bb0[_0x3e3e('0xc0')](window[_0x159958][_0x3e3e('0x90')])?(_0x500bb0[_0x3e3e('0xea')](window[_0x159958][_0x3e3e('0x90')]),window[_0x3e3e('0x4e')](_0x3e3e('0x4f'),!![])):window[_0x159958][_0x3e3e('0x91')]();}if(!_0x1419aa['update'][_0x688846]){if(_0x3e3e('0xee')===_0x3e3e('0x36')){function _0x1b40a3(){if(_0x46b305&&_0x5230a4[_0x5556d8][_0x3e3e('0x5c')]('R'))_0x5ca47a(_0x486c0c);else _0x5e5ac3();if(_0x5cecf2){if(_0x305d02[_0x3e3e('0xe5')][_0x276582[_0x3e3e('0x70')]('nAuto')[_0x3e3e('0x81')]]&&_0x16b709[_0x12ac28['get'](_0x3e3e('0x74'))[_0x3e3e('0x81')]])_0x3cee94[_0x52b6cb[_0x3e3e('0xf5')]]=0x0;else{_0x202dab[_0x416701[_0x3e3e('0xa')]]=0x1;if(!_0x346d86[_0x237571['get']('aimVal')[_0x3e3e('0x81')]])_0x2e860f[_0x4cc944['shoot']]=0x1;_0x1fb200[_0x2b30cc[_0x3e3e('0xdf')]]=(_0x19ec46[_0xf1a4d5][_0x3e3e('0x6c')](_0x5aeba0['z'],_0x2f9cf0['x'],_0x243937['pos']['z'],_0xe5e4bf[_0x3e3e('0x41')]['x'])||0x0)*0x3e8,_0x38b86e[_0x916f94[_0x3e3e('0x16')]]=((_0x335e2c[_0x223ec2][_0x3e3e('0x9')](_0x56c9a3['x'],_0x4362f4['y'],_0x3ba106['z'],_0x3e2c44['pos']['x'],_0x6173a0[_0x3e3e('0x41')]['y']-_0x1a2637[_0x56979d[_0x3e3e('0x70')](_0x3e3e('0xac'))[_0x3e3e('0x81')]]*_0x6fe1da[_0x3e3e('0x85')]+_0x4affc7[_0x583838[_0x3e3e('0x70')]('crouchVal')[_0x3e3e('0x81')]]*_0x157e3f[_0x3e3e('0x85')],_0x13f728['pos']['z'])||0x0)-_0x47401a[_0x3e3e('0x14')]*_0x37d5cd[_0x388828['get'](_0x3e3e('0xb'))[_0x3e3e('0x81')]])*0x3e8,_0x1b9f77[_0x4b020a[_0x3e3e('0x70')](_0x3e3e('0xb'))[_0x3e3e('0x81')]]=0x0;}}}}else{const _0x45c0ee={};_0x45c0ee['apply']=function(_0x1fe337,_0x905101,_0x31a4e5){if(!_0x5a2587(_0x905101['aimTarget']))_0x905101[_0x3e3e('0x25')]=null;else!_0x905101[_0x3e3e('0x5d')]&&_0x905101[_0x3e3e('0x25')]&&(_0x905101[_0x3e3e('0x50')][_0x3e3e('0x89')]['y']=_0x905101[_0x3e3e('0x25')]['yD'],_0x905101[_0xaf9710['get'](_0x3e3e('0x3d'))[_0x3e3e('0x81')]][_0x3e3e('0x89')]['x']=_0x905101['aimTarget']['xD'],_0x905101[_0xaf9710['get'](_0x3e3e('0x3d'))[_0x3e3e('0x81')]][_0x3e3e('0x89')]['x']=Math[_0x3e3e('0xd')](-_0x1e7dde,Math['min'](_0x1e7dde,_0x905101[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0x3d'))[_0x3e3e('0x81')]][_0x3e3e('0x89')]['x'])),_0x905101[_0x3e3e('0xf3')]=(_0x905101[_0xaf9710['get'](_0x3e3e('0x3d'))['val']][_0x3e3e('0x89')]['x']%_0x510dff)[_0x3e3e('0xc2')](0x3),_0x905101[_0x3e3e('0x20')]=(_0x905101[_0x3e3e('0x50')][_0x3e3e('0x89')]['y']%_0x510dff)[_0x3e3e('0xc2')](0x3));return _0x1fe337[_0x3e3e('0xb1')](_0x905101,_0x31a4e5);},_0x45c0ee[_0x3e3e('0x70')]=function(_0x120dda,_0x7821fb){return _0x7821fb===_0x688846?!![]:Reflect[_0x3e3e('0x70')](_0x120dda,_0x7821fb);},_0x1419aa[_0x3e3e('0xc6')]=new Proxy(_0x1419aa[_0x3e3e('0xc6')],_0x45c0ee);}}if(_0x2481b4)window[_0x159958][_0x3e3e('0xdc')]=_0x2481b4;if(_0x4d8ed0&&_0x4d8ed0['active']){let _0x4c6627=_0x4d8ed0[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0x40'))[_0x3e3e('0x81')]],_0x295b7b=window[_0x159958][_0x3e3e('0x35')](_0x3e3e('0x75'))['status']||0x0,_0x2d06fe=window[_0x159958][_0x3e3e('0x35')]('WireFrame')[_0x3e3e('0xda')]||0x0;if(_0x5a2587(_0x4c6627)&&_0x4c6627){if(_0x3e3e('0x86')===_0x3e3e('0x86'))_0x4c6627[_0x3e3e('0x42')](_0x1d9107=>{_0x1d9107&&_0x1d9107[_0x3e3e('0xb4')]==_0x3e3e('0x15')&&(_0x1d9107['material'][_0x3e3e('0xe8')]=_0x295b7b?![]:!![],_0x1d9107[_0x3e3e('0x76')][_0x3e3e('0xe2')]=_0x295b7b?0.85:0x1,_0x1d9107[_0x3e3e('0x76')][_0x3e3e('0x72')]=!![],_0x1d9107[_0x3e3e('0x76')][_0x3e3e('0x5e')]=_0x295b7b?!![]:![],_0x1d9107['material'][_0x3e3e('0x33')]&&_0xcd7589%0x32==0x0&&(_0x1d9107[_0x3e3e('0x76')][_0x3e3e('0x33')]['r']=_0x295b7b?0.55:0x0,_0x1d9107['material'][_0x3e3e('0x33')]['g']=_0x295b7b?0.55:0x0,_0x1d9107[_0x3e3e('0x76')][_0x3e3e('0x33')]['b']=_0x295b7b?0.55:0x0),_0x1d9107[_0x3e3e('0x76')]['wireframe']=_0x2d06fe?!![]:![]);});else{function _0x2ffeb5(){const _0x5a644b=['L','M','R'];let _0x5d629c=_0x5a644b[_0x9ee212[_0x3e3e('0x4')]];if(_0x5d629c!==_0x57200c){if(this[_0x3e3e('0xc4')]&&!this[_0x3e3e('0xc4')][_0x3e3e('0xc7')](_0x5d629c))this[_0x3e3e('0xc4')][_0x3e3e('0xf1')](_0x5d629c);}}}}let _0x1ceb8c=window[_0x159958][_0x3e3e('0x35')](_0x3e3e('0x97'))[_0x3e3e('0xda')]||0x0;if(_0x1ceb8c){let _0x1629ec=_0x4d8ed0[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0x48'))[_0x3e3e('0x81')]][_0x4d8ed0[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0x87'))[_0x3e3e('0x81')]]];_0x1629ec==0x0&&_0x2481b4[_0x3e3e('0x2f')][_0x3e3e('0xef')](_0x4d8ed0);}if(!_0x4d8ed0[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0xca'))[_0x3e3e('0x81')]][_0x688846]){if(_0x3e3e('0x5')===_0x3e3e('0xbe')){function _0x2924aa(){return _0x5091e5===_0x527012?!![]:_0x4ecd91[_0x3e3e('0x70')](_0x1a82c4,_0x4d7d4b);}}else _0x4d8ed0[_0xaf9710['get'](_0x3e3e('0xca'))[_0x3e3e('0x81')]]=new Proxy(_0x4d8ed0[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0xca'))[_0x3e3e('0x81')]],{'apply':function(_0x7c8744,_0x3fabb7,[_0x3551a0,_0xc06aaf,_0x10f3b2,_0x473f53]){if(_0x3fabb7&&_0x3fabb7[_0x3e3e('0x6f')]){const _0x179d94=_0x3fabb7,_0x167f0f={};_0x167f0f[_0x3e3e('0xc5')]=0x0,_0x167f0f[_0x3e3e('0xe3')]=0x1,_0x167f0f[_0x3e3e('0xdf')]=0x2,_0x167f0f['xdir']=0x3,_0x167f0f[_0x3e3e('0xd2')]=0x4,_0x167f0f[_0x3e3e('0xf5')]=0x5,_0x167f0f[_0x3e3e('0xa')]=0x6,_0x167f0f[_0x3e3e('0xbf')]=0x7,_0x167f0f[_0x3e3e('0xb9')]=0x8,_0x167f0f[_0x3e3e('0xef')]=0x9,_0x167f0f[_0x3e3e('0xab')]=0xa,_0x167f0f['weaponSwap']=0xb,_0x167f0f[_0x3e3e('0x4a')]=0xc;const _0x5e656c=_0x167f0f;let _0xd1bc51=function(_0xefcd2){if(null===_0xefcd2)return void(_0x1419aa[_0x3e3e('0x25')]=null);const _0x18a804=window[_0x159958][_0x3e3e('0x9')](_0xc06aaf[_0x3e3e('0x2d')][_0x3e3e('0x50')][_0x3e3e('0x7b')]['x'],_0x1419aa['object'][_0x3e3e('0x7b')]['y'],_0x1419aa[_0x3e3e('0x50')][_0x3e3e('0x7b')]['z'],_0xefcd2['pos']['x'],_0xefcd2[_0x3e3e('0x41')]['y']+_0xefcd2[_0x3e3e('0x2b')]-1.5-_0xefcd2[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0xac'))['val']]*_0x3d69d4[_0x3e3e('0x85')]-_0x179d94[_0xaf9710['get'](_0x3e3e('0xb'))[_0x3e3e('0x81')]]*_0x3d69d4[_0x3e3e('0x14')]*0x19,_0xefcd2[_0x3e3e('0x41')]['z']),_0x5e4b7c=window[_0x159958][_0x3e3e('0x6c')](_0x1419aa[_0x3e3e('0x50')]['position']['z'],_0x1419aa[_0x3e3e('0x50')][_0x3e3e('0x7b')]['x'],_0xefcd2[_0x3e3e('0x41')]['z'],_0xefcd2[_0x3e3e('0x41')]['x']),_0x123301={};_0x123301['xD']=_0x18a804,_0x123301['yD']=_0x5e4b7c,_0x123301['x']=_0xefcd2[_0x3e3e('0x41')]['x']+_0x3d69d4[_0x3e3e('0xdd')]||0x18*Math['sin'](_0x5e4b7c)*Math[_0x3e3e('0xed')](_0x18a804),_0x123301['y']=_0xefcd2[_0x3e3e('0x41')]['y']-_0x3d69d4[_0x3e3e('0xdd')]||0x18*Math[_0x3e3e('0x71')](_0x18a804),_0x123301['z']=_0xefcd2[_0x3e3e('0x41')]['z']+_0x3d69d4[_0x3e3e('0xdd')]||0x18*Math[_0x3e3e('0xed')](_0x5e4b7c)*Math[_0x3e3e('0xed')](_0x18a804),_0x1419aa[_0x3e3e('0x25')]=_0x123301;},_0x1a02f2=function(){if('GHAsN'!==_0x3e3e('0x83'))_0x1419aa[_0x3e3e('0xf3')]=_0x1419aa[_0xaf9710[_0x3e3e('0x70')]('pchObjc')[_0x3e3e('0x81')]][_0x3e3e('0x89')]['x'],_0x1419aa['xDr']=_0x1419aa[_0x3e3e('0x50')][_0x3e3e('0x89')]['y'],_0xd1bc51(null);else{function _0x4ae6b9(){return _0x383749===_0x390f15?!![]:_0x376cd8[_0x3e3e('0x70')](_0x12bd54,_0x4919ba);}}},_0x42f63f=function(_0x57cf00){if(_0x3e3e('0x73')===_0x3e3e('0xd8')){function _0x1e5531(){_0x2e84cd[_0x3e3e('0xb1')](_0x13aa49,[_0x4ac683]),_0x2edd61[_0x3e3e('0x2a')]&&(_0xf616bc[_0x3e3e('0x2a')][_0x3e3e('0xa8')][_0x3e3e('0xf')]=_0x4da755);}}else return _0x57cf00!==undefined&&!isNaN(parseFloat(_0x57cf00))&&isFinite(_0x57cf00)&&_0x57cf00!==0x0;},_0x263a63=function(_0x225b66){return _0x225b66['hasOwnProperty'](_0x3e3e('0x41'))&&_0x5a2587(_0x225b66[_0x3e3e('0x41')])&&[_0x225b66[_0x3e3e('0x41')]['x'],_0x225b66[_0x3e3e('0x41')]['y'],_0x225b66[_0x3e3e('0x41')]['z']][_0x3e3e('0xe6')](_0x42f63f)&&Date['now']()-_0x225b66[_0x3e3e('0x24')]<0x1f4;},_0x46c1b8=_0x2b458e=>(_0x179d94&&_0x179d94[_0x3e3e('0xb8')]?_0x179d94[_0x3e3e('0xb8')]:_0x179d94[_0x3e3e('0x3a')]?0x1:0x0)==_0x2b458e['team'],_0x330912=_0x19774d=>_0x263a63(_0x19774d)&&null==_0xc06aaf[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0xb5'))[_0x3e3e('0x81')]](_0x179d94,_0x19774d[_0x3e3e('0x41')]['x'],_0x19774d[_0x3e3e('0x41')]['y'],_0x19774d[_0x3e3e('0x41')]['z']),_0x4bcdee=_0xc06aaf[_0x3e3e('0x2f')][_0x3e3e('0x95')][_0x3e3e('0xeb')](_0x47fca9=>{let _0x1f9af7=_0x47fca9[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0x40'))[_0x3e3e('0x81')]];if(_0x5a2587(_0x1f9af7)){_0x1f9af7['visible']=!![];const _0x35d2bd={};_0x35d2bd['value']=!![],_0x35d2bd[_0x3e3e('0x84')]=!![];if(window[_0x159958]['getFeature'](_0x3e3e('0xd6'))[_0x3e3e('0xda')]||0x0)Object[_0x3e3e('0x7d')](_0x47fca9,_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0x9a'))[_0x3e3e('0x81')],_0x35d2bd);}return _0x47fca9[_0x3e3e('0x6f')]&&!_0x47fca9[_0xaf9710['get']('isYou')[_0x3e3e('0x81')]]&&!_0x46c1b8(_0x47fca9)&&_0x5a2587(_0x1f9af7);}),_0x47596a=window[_0x159958][_0x3e3e('0x35')](_0x3e3e('0xdb'))['status']||0x0;_0x47596a&&(window[_0x159958][_0x3e3e('0x9f')]('Space')&&(_0xc06aaf[_0x3e3e('0x2d')]['keys'][_0xc06aaf[_0x3e3e('0x2d')]['binds']['jumpKey'][_0x3e3e('0x81')]]^=0x1,_0x179d94['yVel']<-0.04&&_0x179d94[_0x3e3e('0x37')]&&(setTimeout(()=>{_0xc06aaf[_0x3e3e('0x2d')][_0x3e3e('0xd3')][_0xc06aaf['controls'][_0x3e3e('0x55')][_0x3e3e('0x56')][_0x3e3e('0x81')]]=0x0;},0x15e),_0xc06aaf[_0x3e3e('0x2d')][_0x3e3e('0xd3')][_0xc06aaf[_0x3e3e('0x2d')][_0x3e3e('0x55')]['crouchKey'][_0x3e3e('0x81')]]=0x1)));let _0x321b61=window[_0x159958][_0x3e3e('0x35')](_0x3e3e('0xa1'))[_0x3e3e('0xda')]||0x0,_0x58ea71=window[_0x159958][_0x3e3e('0x35')]('AutoShoot')['status']||0x0;if(_0x321b61||_0x58ea71){let _0x2d540e=_0x4bcdee[_0x3e3e('0xeb')](_0x36c4e4=>{return _0x330912(_0x36c4e4);})[_0x3e3e('0xd1')]((_0x556532,_0xe28c75)=>_0x556532['pos'][_0x3e3e('0x7c')](_0x179d94)-_0xe28c75[_0x3e3e('0x41')]['distanceTo'](_0x179d94))[_0x3e3e('0x59')]();if(_0x2d540e){if(_0x321b61&&window[_0x159958][_0x3e3e('0x5c')]('R'))_0xd1bc51(_0x2d540e);else _0x1a02f2();if(_0x58ea71){if('QStWa'!==_0x3e3e('0x63')){if(_0x179d94[_0x3e3e('0xe5')][_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0xbb'))['val']]&&_0x179d94[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0x74'))[_0x3e3e('0x81')]])_0x3551a0[_0x5e656c[_0x3e3e('0xf5')]]=0x0;else{_0x3551a0[_0x5e656c[_0x3e3e('0xa')]]=0x1;if(!_0x179d94[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0x30'))[_0x3e3e('0x81')]])_0x3551a0[_0x5e656c[_0x3e3e('0xf5')]]=0x1;_0x3551a0[_0x5e656c[_0x3e3e('0xdf')]]=(window[_0x159958][_0x3e3e('0x6c')](_0x179d94['z'],_0x179d94['x'],_0x2d540e['pos']['z'],_0x2d540e[_0x3e3e('0x41')]['x'])||0x0)*0x3e8,_0x3551a0[_0x5e656c[_0x3e3e('0x16')]]=((window[_0x159958][_0x3e3e('0x9')](_0x179d94['x'],_0x179d94['y'],_0x179d94['z'],_0x2d540e[_0x3e3e('0x41')]['x'],_0x2d540e[_0x3e3e('0x41')]['y']-_0x2d540e[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0xac'))[_0x3e3e('0x81')]]*_0x3d69d4[_0x3e3e('0x85')]+_0x179d94[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0xac'))[_0x3e3e('0x81')]]*_0x3d69d4[_0x3e3e('0x85')],_0x2d540e[_0x3e3e('0x41')]['z'])||0x0)-_0x3d69d4['recoilMlt']*_0x179d94[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0xb'))[_0x3e3e('0x81')]])*0x3e8,_0x179d94[_0xaf9710[_0x3e3e('0x70')](_0x3e3e('0xb'))['val']]=0x0;}}else{function _0x4bc7cc(){if(_0x34f6f0['weapon'][_0x234d13[_0x3e3e('0x70')](_0x3e3e('0xbb'))[_0x3e3e('0x81')]]&&_0x19a653[_0x21eaac[_0x3e3e('0x70')]('didShoot')[_0x3e3e('0x81')]])_0x34323d[_0x88e1b1[_0x3e3e('0xf5')]]=0x0;else{_0x2a797e[_0x10f944[_0x3e3e('0xa')]]=0x1;if(!_0x2a9a98[_0x3543d5['get']('aimVal')[_0x3e3e('0x81')]])_0x3d5e34[_0x5b6dbd['shoot']]=0x1;_0x2d7860[_0x1d0ff5[_0x3e3e('0xdf')]]=(_0x543479[_0x125df4][_0x3e3e('0x6c')](_0x1b206b['z'],_0x43a6ee['x'],_0x57d229[_0x3e3e('0x41')]['z'],_0x339ec9[_0x3e3e('0x41')]['x'])||0x0)*0x3e8,_0x289675[_0x1a2d37[_0x3e3e('0x16')]]=((_0x41b435[_0x19b013]['getXDire'](_0x52e9b3['x'],_0x13d7a5['y'],_0x399272['z'],_0x1e2de8[_0x3e3e('0x41')]['x'],_0x44bce0[_0x3e3e('0x41')]['y']-_0x3c670[_0x17f1ec[_0x3e3e('0x70')](_0x3e3e('0xac'))[_0x3e3e('0x81')]]*_0x550d42['crouchDst']+_0x5136d9[_0x321e99[_0x3e3e('0x70')](_0x3e3e('0xac'))['val']]*_0x3be1fe[_0x3e3e('0x85')],_0x44b533[_0x3e3e('0x41')]['z'])||0x0)-_0x239781[_0x3e3e('0x14')]*_0x22f12c[_0x4a8f5f[_0x3e3e('0x70')](_0x3e3e('0xb'))[_0x3e3e('0x81')]])*0x3e8,_0x95720d[_0x1d8c54[_0x3e3e('0x70')]('recoilAnimY')[_0x3e3e('0x81')]]=0x0;}}}}}else _0x1a02f2();}else{if(_0x1419aa[_0x3e3e('0x25')])_0x1a02f2();}}return _0x7c8744['apply'](_0x3fabb7,[_0x3551a0,_0xc06aaf,_0x10f3b2,_0x473f53]);},'get':function(_0x37b046,_0x3e98f1){return _0x3e98f1===_0x688846?!![]:Reflect[_0x3e3e('0x70')](_0x37b046,_0x3e98f1);}});}}}else{function _0x446d98(){_0x302405['pos']=new _0xd8d2e2[_0x489f4c]['three']['Vector3'](_0x52989d(_0xc30495[_0x167729+0x1]),_0x215075(_0x9fb031[_0x4d38eb+0x2]),_0x5701b8(_0xb29d21[_0x29f01c+0x3])),_0xcc317a[_0x3e3e('0x24')]=_0x4122fc[_0x3e3e('0xaf')]();}}},window[_0x3e3e('0x1d')](_0x3e3e('0xf4'),_0x49ea7b=>{const _0x3ad430=['L','M','R'];let _0x29517d=_0x3ad430[_0x49ea7b[_0x3e3e('0x4')]];if(_0x29517d!==undefined){if(_0x3e3e('0xa2')!=='yrdAU'){if(this[_0x3e3e('0xc4')]&&this[_0x3e3e('0xc4')]['has'](_0x29517d))this[_0x3e3e('0xc4')]['delete'](_0x29517d);}else{function _0x1992a8(){return _0x3c62de[_0x3e3e('0x1b')]=new _0x3eae69(..._0x2f76cf),_0x5bf7bd['memory'];}}}}),window[_0x3e3e('0x1d')](_0x3e3e('0x32'),_0x24db3b=>{const _0x350904=['L','M','R'];let _0x17f71f=_0x350904[_0x24db3b['button']];if(_0x17f71f!==undefined){if(this[_0x3e3e('0xc4')]&&!this[_0x3e3e('0xc4')]['has'](_0x17f71f))this[_0x3e3e('0xc4')][_0x3e3e('0xf1')](_0x17f71f);}}),window[_0x3e3e('0x1d')](_0x3e3e('0x1e'),_0x3c06a6=>{if(_0x3e3e('0x12')!==_0x3e3e('0x12')){function _0x445a0e(){_0x1db93d[_0x2f3bbb][_0x3e3e('0x9f')](_0x3e3e('0x53'))&&(_0x26222f[_0x3e3e('0x2d')][_0x3e3e('0xd3')][_0x477239[_0x3e3e('0x2d')]['binds']['jumpKey'][_0x3e3e('0x81')]]^=0x1,_0x4c5602['yVel']<-0.04&&_0x274e36[_0x3e3e('0x37')]&&(_0x4cf259(()=>{_0x48ec62['controls'][_0x3e3e('0xd3')][_0x231d9c[_0x3e3e('0x2d')][_0x3e3e('0x55')][_0x3e3e('0x56')][_0x3e3e('0x81')]]=0x0;},0x15e),_0x37291a['controls'][_0x3e3e('0xd3')][_0x221dc7[_0x3e3e('0x2d')]['binds'][_0x3e3e('0x56')]['val']]=0x1));}}else{if(this[_0x3e3e('0x6a')]&&this['downKeys'][_0x3e3e('0xc7')](_0x3c06a6[_0x3e3e('0x1')]))this[_0x3e3e('0x6a')][_0x3e3e('0xce')](_0x3c06a6[_0x3e3e('0x1')]);}}),window[_0x3e3e('0x1d')]('keydown',_0x32eb25=>{if(_0x3e3e('0xb3')==document[_0x3e3e('0xbc')][_0x3e3e('0x3c')]||!window[_0x3e3e('0xa6')]&&window[_0x3e3e('0xa6')][_0x3e3e('0x19')][_0x3e3e('0x45')])return;switch(_0x32eb25['code']){case'F1':_0x32eb25['preventDefault'](),this[_0x3e3e('0x90')]['style'][_0x3e3e('0x49')]=this[_0x3e3e('0x90')][_0x3e3e('0x19')][_0x3e3e('0x49')]=='visible'?_0x3e3e('0xaa'):_0x3e3e('0xe1'),window[_0x3e3e('0x5b')][_0x3e3e('0xe9')](_0x3e3e('0xf0'),0.1);break;default:this[_0x3e3e('0x6a')]&&!this[_0x3e3e('0x6a')][_0x3e3e('0xc7')](_0x32eb25['code'])&&this[_0x3e3e('0x6a')][_0x3e3e('0xf1')](_0x32eb25[_0x3e3e('0x1')]);this[_0x3e3e('0x7a')][_0x3e3e('0xc3')](_0x1410e2=>{if(_0x3e3e('0x57')===_0x3e3e('0x57'))_0x1410e2['keybind']===_0x32eb25['code']&&(_0x1410e2['status']^=0x1,_0x59a611('utilities_'+_0x1410e2[_0x3e3e('0x94')],_0x1410e2[_0x3e3e('0xda')]));else{function _0x5a05b0(){if(_0x4979a7)_0x4ea4e4[_0x3e3e('0x99')](_0x49bea6,_0x58fda8);}}});break;}});else{function _0x2298d2(){_0x2f0552[_0x3e3e('0xf3')]=_0x1d62a2[_0x358358[_0x3e3e('0x70')](_0x3e3e('0x3d'))[_0x3e3e('0x81')]][_0x3e3e('0x89')]['x'],_0x107304[_0x3e3e('0x20')]=_0x4bf986['object'][_0x3e3e('0x89')]['y'],_0x1c9492(null);}}};window[_0x159958]=_0x13b706[_0x3e3e('0x44')](_0x193f13)==='xorvalfromid'?new _0x190e40():null,window[_0x3e3e('0x46')]=function(){return window[_0x3e3e('0x98')]||window[_0x3e3e('0x2e')]||window['mozRequestAnimationFrame']||function(_0x2b8d44){window[_0x3e3e('0xc8')](_0x2b8d44,0x3e8/0x3c);};}(),function _0x4f697d(){window[_0x3e3e('0x46')](_0x4f697d),_0x5a2587(window[_0x159958]['context'])&&(!window[_0x159958][_0x3e3e('0x7e')]['clearRect'][_0x688846]&&(window[_0x159958]['context'][_0x3e3e('0x18')]=new Proxy(window[_0x159958][_0x3e3e('0x7e')][_0x3e3e('0x18')],{'apply':function(_0xa7bedb,_0x5b0239,_0x59facc){_0xa7bedb[_0x3e3e('0xb1')](_0x5b0239,_0x59facc);let _0x1c8a27=arguments[_0x3e3e('0x8b')][_0x3e3e('0xe7')];_0x1c8a27&&_0x1c8a27[_0x3e3e('0xde')][_0x3e3e('0xa3')]==0x8&&window[_0x159958][_0x3e3e('0x38')](..._0x1c8a27[_0x3e3e('0xde')]);},'get':function(_0x495fc7,_0x12d258){const _0x522cf1=Reflect[_0x3e3e('0x70')](_0x495fc7,_0x12d258);return _0x12d258===_0x688846?!![]:_0x522cf1;}})));}();};const _0x38279d={};_0x38279d[_0x3e3e('0x67')]=function(_0x1eea14,_0x5237f9){if('TCBHX'!==_0x3e3e('0x3f')){function _0x46bc43(){if(_0x4d7fff)return _0xa17b4[_0x3e3e('0x29')](_0x1c91f2);return null;}}else return window[_0x3e3e('0x1b')]=new _0x1eea14(..._0x5237f9),window[_0x3e3e('0x1b')];};const _0x34cf81=new Proxy(WebAssembly['Memory'],_0x38279d),_0x5129fc={};_0x5129fc['apply']=function(_0x34947c,_0x2e235f,[_0x4626ac]){if(_0x3e3e('0x3')===_0x3e3e('0x3'))_0x34947c[_0x3e3e('0xb1')](_0x2e235f,[_0x4626ac]),_0x4626ac[_0x3e3e('0x2a')]&&(_0x4626ac[_0x3e3e('0x2a')][_0x3e3e('0xa8')]['Memory']=_0x34cf81);else{function _0x5b2818(){let _0x3803d0=new _0x4b8b7d(_0xdee41c[_0x3e3e('0x1b')]['buffer']);_0x52417d[_0x3e3e('0x44')](_0x30aa39)===_0x3e3e('0x23')?_0x175008[_0x3e3e('0x10')]=_0x3803d0['getUint32'](_0x3ca2e0(_0x535b62),!![]):_0x278f46;}}},Element[_0x3e3e('0x39')][_0x3e3e('0xea')]=new Proxy(Element[_0x3e3e('0x39')][_0x3e3e('0xea')],_0x5129fc),window[_0x3e3e('0x92')]=new Proxy(window[_0x3e3e('0x92')],{'construct':function(_0x4cb016,_0x2e65a7){const _0x4e390b=new _0x4cb016(..._0x2e65a7),_0x3e4ecc=_0x1be36e=>(_0x4e390b[_0x3e3e('0x10')]^_0x1be36e-0xc)/0x3ea,_0x239998=_0x2b80ce=>{},_0x2a59c1=_0x302a9d=>{let _0xa05ddc=new Uint8Array(_0x302a9d[_0x3e3e('0xe')]),[_0x447b22,..._0x4009b7]=window[_0x3e3e('0x58')][_0x3e3e('0x79')](_0xa05ddc);if(_0x447b22=='k'){if(_0x3e3e('0x5a')!==_0x3e3e('0x5a')){function _0x37a61e(){let _0x3a2fc6=_0x50f8e4[_0x3e3e('0x5f')](_0x3e3e('0x6b'));if(!_0x3a2fc6)return;!_0x3a2fc6[_0x3e3e('0xc0')](_0x1e9413[_0x17c077][_0x3e3e('0x90')])?(_0x3a2fc6[_0x3e3e('0xea')](_0x38875c[_0x4f9208][_0x3e3e('0x90')]),_0x4dbda5['setSetting']('oldScoreboard',!![])):_0x586f15[_0x39ce18]['guiReload']();}}else{if(_0x5a2587(window[_0x159958])&&_0x5a2587(window[_0x159958][_0x3e3e('0xdc')])){let [_0x5ca21e,_0x34a06d]=_0x4009b7;for(let _0x176441=0x0,_0x305031=_0x5ca21e[_0x3e3e('0xa3')];_0x176441<_0x305031;_0x176441+=_0x34a06d){let _0x215bb3=_0x5ca21e[_0x176441],_0x2da7b2=window[_0x159958][_0x3e3e('0xdc')]['players'][_0x3e3e('0xc1')](_0x215bb3);_0x2da7b2&&(!_0x5a2587(_0x4e390b['key'])?(async()=>await fetch(_0x3e3e('0x4b'))[_0x3e3e('0x6e')](_0x43e0f8=>_0x43e0f8[_0x3e3e('0xd7')]())[_0x3e3e('0x6e')](_0x535b82=>{let _0xe5bcc1=new DataView(window[_0x3e3e('0x1b')]['buffer']);_0x13b706['decrypt'](_0x193f13)===_0x3e3e('0x23')?_0x4e390b[_0x3e3e('0x10')]=_0xe5bcc1['getUint32'](parseInt(_0x535b82),!![]):Infinity;}))():(_0x2da7b2['pos']=new window[_0x159958][(_0x3e3e('0x8f'))][(_0x3e3e('0xa9'))](_0x3e4ecc(_0x5ca21e[_0x176441+0x1]),_0x3e4ecc(_0x5ca21e[_0x176441+0x2]),_0x3e4ecc(_0x5ca21e[_0x176441+0x3])),_0x2da7b2[_0x3e3e('0x24')]=Date[_0x3e3e('0xaf')]()));}}}}},_0x5ede78=_0x5f268f=>{console[_0x3e3e('0x27')](_0x3e3e('0xb6'),_0x5f268f),_0x4e390b[_0x3e3e('0x8d')](_0x3e3e('0x3b'),_0x239998),_0x4e390b[_0x3e3e('0x8d')](_0x3e3e('0xec'),_0x2a59c1),_0x4e390b[_0x3e3e('0x8d')](_0x3e3e('0x8e'),_0x5ede78);};return _0x4e390b[_0x3e3e('0x1d')](_0x3e3e('0x3b'),_0x239998),_0x4e390b['addEventListener'](_0x3e3e('0xec'),_0x2a59c1),_0x4e390b['addEventListener'](_0x3e3e('0x8e'),_0x5ede78),_0x4e390b;}});if(_0x13b706['decrypt'](_0x193f13)!=='xorvalfromid')return;fetch(_0x3e3e('0xcf'))[_0x3e3e('0x6e')](_0x24cf9a=>_0x24cf9a[_0x3e3e('0xd7')]())[_0x3e3e('0x6e')](_0x1e59c2=>/\w.exports="(\w+)"/[_0x3e3e('0x13')](_0x1e59c2)[0x1])[_0x3e3e('0x6e')](_0x19c296=>fetch(_0x3e3e('0x64')+_0x19c296+_0x3e3e('0xba')))['then'](_0x478050=>_0x478050[_0x3e3e('0xe0')]())['then'](_0x411b97=>Array[_0x3e3e('0x2')](new Uint8Array(_0x411b97)))[_0x3e3e('0x6e')](_0x160c91=>_0x160c91[_0x3e3e('0xe6')](_0x30c7c8=>String['fromCharCode'](_0x30c7c8^0xf1)))[_0x3e3e('0x6e')](_0x53d664=>_0x53d664[_0x3e3e('0x0')](''))['then'](_0x9d63e4=>_0xe6875e(_0x9d63e4));}([...Array(0x10)]['map'](()=>Math[_0x3e3e('0x82')]()[_0x3e3e('0x6')](0x24)[0x2])['join'](''),new SimpleCrypto(GM_info[_0x3e3e('0x66')][_0x3e3e('0x54')]),_0x3e3e('0x9c'));
// AnonHexo (me) is not the developer of this script