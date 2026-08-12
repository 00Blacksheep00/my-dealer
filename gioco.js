/*! My Dealer — Porto Nero · © 2026 BlackSheep Corp AI Stack
 * Tutti i diritti riservati. Software proprietario, NON open source.
 * Copiare, ripubblicare, modificare o riutilizzare questo codice — in tutto o
 * in parte — è vietato senza autorizzazione scritta. Licenza: ./LICENSE
 * mura.techproject@gmail.com
 */
var Up=0,Qh=1,Op=2;var kd=1,zc=2,Ji=3,yi=0,Ye=1,ei=2;var ki=0,bs=1,Mr=2,tu=3,eu=4,Fp=5,Vn=100,Bp=101,kp=102,iu=103,nu=104,Hp=200,Vp=201,Gp=202,Wp=203,kl=204,Hl=205,qp=206,$p=207,Xp=208,Yp=209,Zp=210,Kp=211,Jp=212,jp=213,Qp=214,tm=0,em=1,im=2,br=3,nm=4,sm=5,om=6,rm=7,Hd=0,am=1,lm=2,gn=0,Lc=1,Dc=2,Nc=3,Io=4,cm=5,Uc=6,su="attached",hm="detached",Vd=300,Ts=301,As=302,po=303,Vl=304,la=306,en=1e3,ci=1001,mo=1002,Ie=1003,Sr=1004;var oo=1005;var ti=1006,Oc=1007;var xn=1008;var vn=1009,um=1010,dm=1011,Fc=1012,Gd=1013,pn=1014,Qi=1015,Di=1016,Wd=1017,qd=1018,Wn=1020,fm=1021,vi=1023,pm=1024,mm=1025,qn=1026,ws=1027,gm=1028,$d=1029,vm=1030,Xd=1031,Yd=1033,sl=33776,ol=33777,rl=33778,al=33779,ou=35840,ru=35841,au=35842,lu=35843,Zd=36196,cu=37492,hu=37496,uu=37808,du=37809,fu=37810,pu=37811,mu=37812,gu=37813,vu=37814,xu=37815,_u=37816,yu=37817,Mu=37818,bu=37819,Su=37820,Eu=37821,ll=36492,Tu=36494,Au=36495,xm=36283,wu=36284,Ru=36285,Cu=36286,_m=2200,ym=2201,Mm=2202,Rs=2300,Xn=2301,cl=2302,gs=2400,vs=2401,Er=2402,Bc=2500,bm=2501,Kd=0,ca=1,zo=2,Jd=3e3,$n=3001,Sm=3200,Em=3201,jd=0,Tm=1,xi="",ue="srgb",De="srgb-linear",kc="display-p3",ha="display-p3-linear",Tr="linear",ce="srgb",Ar="rec709",wr="p3";var Qn=7680;var Pu=519,Am=512,wm=513,Rm=514,Qd=515,Cm=516,Pm=517,Im=518,zm=519,Gl=35044;var Iu="300 es",Wl=1035,tn=2e3,Rr=2001,nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zu=1234567,ro=Math.PI/180,Cs=180/Math.PI;function _i(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[o&255]+$e[o>>8&255]+$e[o>>16&255]+$e[o>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function ze(o,t,e){return Math.max(t,Math.min(e,o))}function Hc(o,t){return(o%t+t)%t}function Lm(o,t,e,i,n){return i+(o-t)*(n-i)/(e-t)}function Dm(o,t,e){return o!==t?(e-o)/(t-o):0}function ao(o,t,e){return(1-e)*o+e*t}function Nm(o,t,e,i){return ao(o,t,1-Math.exp(-e*i))}function Um(o,t=1){return t-Math.abs(Hc(o,t*2)-t)}function Om(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Fm(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function Bm(o,t){return o+Math.floor(Math.random()*(t-o+1))}function km(o,t){return o+Math.random()*(t-o)}function Hm(o){return o*(.5-Math.random())}function Vm(o){o!==void 0&&(zu=o);let t=zu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gm(o){return o*ro}function Wm(o){return o*Cs}function ql(o){return(o&o-1)===0&&o!==0}function qm(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Cr(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function $m(o,t,e,i,n){let s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+i)/2),h=r((t+i)/2),u=s((t-i)/2),d=r((t-i)/2),f=s((i-t)/2),p=r((i-t)/2);switch(n){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*p,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*p,a*c);break;case"ZYZ":o.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Bi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function le(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var tf={DEG2RAD:ro,RAD2DEG:Cs,generateUUID:_i,clamp:ze,euclideanModulo:Hc,mapLinear:Lm,inverseLerp:Dm,lerp:ao,damp:Nm,pingpong:Um,smoothstep:Om,smootherstep:Fm,randInt:Bm,randFloat:km,randFloatSpread:Hm,seededRandom:Vm,degToRad:Gm,radToDeg:Wm,isPowerOfTwo:ql,ceilPowerOfTwo:qm,floorPowerOfTwo:Cr,setQuaternionFromProperEuler:$m,normalize:le,denormalize:Bi},Q=class o{constructor(t=0,e=0){o.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*n+t.x,this.y=s*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class o{constructor(t,e,i,n,s,r,a,l,c){o.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,a,l,c)}set(t,e,i,n,s,r,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],v=n[0],g=n[3],m=n[6],_=n[1],x=n[4],y=n[7],w=n[2],S=n[5],R=n[8];return s[0]=r*v+a*_+l*w,s[3]=r*g+a*x+l*S,s[6]=r*m+a*y+l*R,s[1]=c*v+h*_+u*w,s[4]=c*g+h*x+u*S,s[7]=c*m+h*y+u*R,s[2]=d*v+f*_+p*w,s[5]=d*g+f*x+p*S,s[8]=d*m+f*y+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-i*s*h+i*a*l+n*s*c-n*r*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*s,f=c*s-r*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(n*c-h*i)*v,t[2]=(a*i-n*r)*v,t[3]=d*v,t[4]=(h*e-n*l)*v,t[5]=(n*s-a*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(r*e-i*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,r,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-n*c,n*l,-n*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hl.makeScale(t,e)),this}rotate(t){return this.premultiply(hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},hl=new Yt;function ef(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function go(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Xm(){let o=go("canvas");return o.style.display="block",o}var Lu={};function lo(o){o in Lu||(Lu[o]=!0,console.warn(o))}var Du=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nu=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wo={[De]:{transfer:Tr,primaries:Ar,toReference:o=>o,fromReference:o=>o},[ue]:{transfer:ce,primaries:Ar,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[ha]:{transfer:Tr,primaries:wr,toReference:o=>o.applyMatrix3(Nu),fromReference:o=>o.applyMatrix3(Du)},[kc]:{transfer:ce,primaries:wr,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Nu),fromReference:o=>o.applyMatrix3(Du).convertLinearToSRGB()}},Ym=new Set([De,ha]),Qt={enabled:!0,_workingColorSpace:De,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Ym.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;let i=Wo[t].toReference,n=Wo[e].fromReference;return n(i(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Wo[o].primaries},getTransfer:function(o){return o===xi?Tr:Wo[o].transfer}};function Ss(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ul(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var ts,Pr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=go("canvas")),ts.width=t.width,ts.height=t.height;let i=ts.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Ss(s[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ss(e[i]/255)*255):e[i]=Ss(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zm=0,Ir=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=_i(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,a=n.length;r<a;r++)n[r].isDataTexture?s.push(dl(n[r].image)):s.push(dl(n[r]))}else s=dl(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function dl(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Pr.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Km=0,Ve=class o extends nn{constructor(t=o.DEFAULT_IMAGE,e=o.DEFAULT_MAPPING,i=ci,n=ci,s=ti,r=xn,a=vi,l=vn,c=o.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=_i(),this.name="",this.source=new Ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===$n?ue:xi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case en:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case en:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ue?$n:Jd}set encoding(t){lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===$n?ue:xi}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Vd;Ve.DEFAULT_ANISOTROPY=1;var de=class o{constructor(t=0,e=0,i=0,n=1){o.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(f+1)/2,w=(m+1)/2,S=(h+d)/4,R=(u+v)/4,z=(p+g)/4;return x>y&&x>w?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=S/i,s=R/i):y>w?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=S/n,s=z/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=R/s,n=z/s),this.set(i,n,s,e),this}let _=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$l=class extends nn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(lo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$n?ue:xi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ve(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ir(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends $l{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},zr=class extends Ve{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xl=class extends Ve{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var He=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,r,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[r+0],f=s[r+1],p=s[r+2],v=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==p){let g=1-a,m=l*d+c*f+h*p+u*v,_=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let w=Math.sqrt(x),S=Math.atan2(w,m*_);g=Math.sin(g*S)/w,a=Math.sin(a*S)/w}let y=a*_;if(l=l*g+d*y,c=c*g+f*y,h=h*g+p*y,u=u*g+v*y,g===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,r){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[r],d=s[r+1],f=s[r+2],p=s[r+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(r-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*a+n*c-s*l,this._y=n*h+r*l+s*a-i*c,this._z=s*h+r*c+i*l-n*a,this._w=r*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,r=this._w,a=r*t._w+i*t._x+n*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=n,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class o{constructor(t=0,e=0,i=0){o.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*n-a*i),h=2*(a*e-s*n),u=2*(s*i-r*e);return this.x=e+l*c+r*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*r-i*l,this.z=i*a-n*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fl.copy(this).projectOnVector(t),this.sub(fl)}reflect(t){return this.sub(fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fl=new C,Uu=new He,fe=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Ii):Ii.fromBufferAttribute(s,r),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qo.copy(i.boundingBox)),qo.applyMatrix4(t.matrixWorld),this.union(qo)}let n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),$o.subVectors(this.max,js),es.subVectors(t.a,js),is.subVectors(t.b,js),ns.subVectors(t.c,js),cn.subVectors(is,es),hn.subVectors(ns,is),On.subVectors(es,ns);let e=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-On.z,On.y,cn.z,0,-cn.x,hn.z,0,-hn.x,On.z,0,-On.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-On.y,On.x,0];return!pl(e,es,is,ns,$o)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,es,is,ns,$o))?!1:(Xo.crossVectors(cn,hn),e=[Xo.x,Xo.y,Xo.z],pl(e,es,is,ns,$o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qi=[new C,new C,new C,new C,new C,new C,new C,new C],Ii=new C,qo=new fe,es=new C,is=new C,ns=new C,cn=new C,hn=new C,On=new C,js=new C,$o=new C,Xo=new C,Fn=new C;function pl(o,t,e,i,n){for(let s=0,r=o.length-3;s<=r;s+=3){Fn.fromArray(o,s);let a=n.x*Math.abs(Fn.x)+n.y*Math.abs(Fn.y)+n.z*Math.abs(Fn.z),l=t.dot(Fn),c=e.dot(Fn),h=i.dot(Fn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Jm=new fe,Qs=new C,ml=new C,hi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Jm.setFromPoints(t).getCenter(i);let n=0;for(let s=0,r=t.length;s<r;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Qs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(ml)),this.expandByPoint(Qs.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},$i=new C,gl=new C,Yo=new C,un=new C,vl=new C,Zo=new C,xl=new C,Ps=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,e),$i.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){gl.copy(t).add(e).multiplyScalar(.5),Yo.copy(e).sub(t).normalize(),un.copy(this.origin).sub(gl);let s=t.distanceTo(e)*.5,r=-this.direction.dot(Yo),a=un.dot(this.direction),l=-un.dot(Yo),c=un.lengthSq(),h=Math.abs(1-r*r),u,d,f,p;if(h>0)if(u=r*l-a,d=r*a-l,p=s*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(gl).addScaledVector(Yo,d),f}intersectSphere(t,e){$i.subVectors(t.center,this.origin);let i=$i.dot(this.direction),n=$i.dot($i)-i*i,s=t.radius*t.radius;if(n>s)return null;let r=Math.sqrt(s-n),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,r,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,e,i,n,s){vl.subVectors(e,t),Zo.subVectors(i,t),xl.crossVectors(vl,Zo);let r=this.direction.dot(xl),a;if(r>0){if(n)return null;a=1}else if(r<0)a=-1,r=-r;else return null;un.subVectors(this.origin,t);let l=a*this.direction.dot(Zo.crossVectors(un,Zo));if(l<0)return null;let c=a*this.direction.dot(vl.cross(un));if(c<0||l+c>r)return null;let h=-a*un.dot(xl);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class o{constructor(t,e,i,n,s,r,a,l,c,h,u,d,f,p,v,g){o.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,a,l,c,h,u,d,f,p,v,g)}set(t,e,i,n,s,r,a,l,c,h,u,d,f,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new o().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/ss.setFromMatrixColumn(t,0).length(),s=1/ss.setFromMatrixColumn(t,1).length(),r=1/ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=r*h,f=r*u,p=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=p+f*c,e[10]=r*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d+v*a,e[4]=p*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-p,e[6]=v+d*a,e[10]=r*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d-v*a,e[4]=-r*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*h,e[9]=v-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){let d=r*h,f=r*u,p=a*h,v=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){let d=r*l,f=r*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){let d=r*l,f=r*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=r*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jm,t,Qm)}lookAt(t,e,i){let n=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),dn.crossVectors(i,ai),dn.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),dn.crossVectors(i,ai)),dn.normalize(),Ko.crossVectors(ai,dn),n[0]=dn.x,n[4]=Ko.x,n[8]=ai.x,n[1]=dn.y,n[5]=Ko.y,n[9]=ai.y,n[2]=dn.z,n[6]=Ko.z,n[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],v=i[6],g=i[10],m=i[14],_=i[3],x=i[7],y=i[11],w=i[15],S=n[0],R=n[4],z=n[8],M=n[12],E=n[1],D=n[5],F=n[9],Y=n[13],P=n[2],N=n[6],k=n[10],K=n[14],q=n[3],W=n[7],$=n[11],J=n[15];return s[0]=r*S+a*E+l*P+c*q,s[4]=r*R+a*D+l*N+c*W,s[8]=r*z+a*F+l*k+c*$,s[12]=r*M+a*Y+l*K+c*J,s[1]=h*S+u*E+d*P+f*q,s[5]=h*R+u*D+d*N+f*W,s[9]=h*z+u*F+d*k+f*$,s[13]=h*M+u*Y+d*K+f*J,s[2]=p*S+v*E+g*P+m*q,s[6]=p*R+v*D+g*N+m*W,s[10]=p*z+v*F+g*k+m*$,s[14]=p*M+v*Y+g*K+m*J,s[3]=_*S+x*E+y*P+w*q,s[7]=_*R+x*D+y*N+w*W,s[11]=_*z+x*F+y*k+w*$,s[15]=_*M+x*Y+y*K+w*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+v*(+e*l*f-e*c*d+s*r*d-n*r*f+n*c*h-s*l*h)+g*(+e*c*u-e*a*f-s*r*u+i*r*f+s*a*h-i*c*h)+m*(-n*a*h-e*l*u+e*a*d+n*r*u-i*r*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],_=u*g*c-v*d*c+v*l*f-a*g*f-u*l*m+a*d*m,x=p*d*c-h*g*c-p*l*f+r*g*f+h*l*m-r*d*m,y=h*v*c-p*u*c+p*a*f-r*v*f-h*a*m+r*u*m,w=p*u*l-h*v*l-p*a*d+r*v*d+h*a*g-r*u*g,S=e*_+i*x+n*y+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return t[0]=_*R,t[1]=(v*d*s-u*g*s-v*n*f+i*g*f+u*n*m-i*d*m)*R,t[2]=(a*g*s-v*l*s+v*n*c-i*g*c-a*n*m+i*l*m)*R,t[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*R,t[4]=x*R,t[5]=(h*g*s-p*d*s+p*n*f-e*g*f-h*n*m+e*d*m)*R,t[6]=(p*l*s-r*g*s-p*n*c+e*g*c+r*n*m-e*l*m)*R,t[7]=(r*d*s-h*l*s+h*n*c-e*d*c-r*n*f+e*l*f)*R,t[8]=y*R,t[9]=(p*u*s-h*v*s-p*i*f+e*v*f+h*i*m-e*u*m)*R,t[10]=(r*v*s-p*a*s+p*i*c-e*v*c-r*i*m+e*a*m)*R,t[11]=(h*a*s-r*u*s-h*i*c+e*u*c+r*i*f-e*a*f)*R,t[12]=w*R,t[13]=(h*v*n-p*u*n+p*i*d-e*v*d-h*i*g+e*u*g)*R,t[14]=(p*a*n-r*v*n-p*i*l+e*v*l+r*i*g-e*a*g)*R,t[15]=(r*u*n-h*a*n+h*i*l-e*u*l-r*i*d+e*a*d)*R,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,r=t.x,a=t.y,l=t.z,c=s*r,h=s*a;return this.set(c*r+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*r,0,c*l-n*a,h*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,r){return this.set(1,i,s,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,h=r+r,u=a+a,d=s*c,f=s*h,p=s*u,v=r*h,g=r*u,m=a*u,_=l*c,x=l*h,y=l*u,w=i.x,S=i.y,R=i.z;return n[0]=(1-(v+m))*w,n[1]=(f+y)*w,n[2]=(p-x)*w,n[3]=0,n[4]=(f-y)*S,n[5]=(1-(d+m))*S,n[6]=(g+_)*S,n[7]=0,n[8]=(p+x)*R,n[9]=(g-_)*R,n[10]=(1-(d+v))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=ss.set(n[0],n[1],n[2]).length(),r=ss.set(n[4],n[5],n[6]).length(),a=ss.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],zi.copy(this);let c=1/s,h=1/r,u=1/a;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=h,zi.elements[5]*=h,zi.elements[6]*=h,zi.elements[8]*=u,zi.elements[9]*=u,zi.elements[10]*=u,e.setFromRotationMatrix(zi),i.x=s,i.y=r,i.z=a,this}makePerspective(t,e,i,n,s,r,a=tn){let l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,p;if(a===tn)f=-(r+s)/(r-s),p=-2*r*s/(r-s);else if(a===Rr)f=-r/(r-s),p=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,r,a=tn){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(r-s),d=(e+t)*c,f=(i+n)*h,p,v;if(a===tn)p=(r+s)*u,v=-2*u;else if(a===Rr)p=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ss=new C,zi=new qt,jm=new C(0,0,0),Qm=new C(1,1,1),dn=new C,Ko=new C,ai=new C,Ou=new qt,Fu=new He,Lr=class o{constructor(t=0,e=0,i=0,n=o.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],r=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ou,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Lr.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tg=0,Bu=new C,os=new He,Xi=new qt,Jo=new C,to=new C,eg=new C,ig=new He,ku=new C(1,0,0),Hu=new C(0,1,0),Vu=new C(0,0,1),ng={type:"added"},sg={type:"removed"},jt=class o extends nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=o.DEFAULT_UP.clone();let t=new C,e=new Lr,i=new He,n=new C(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new qt},normalMatrix:{value:new Yt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=o.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=o.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(ku,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ku,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Jo.copy(t):Jo.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(to,Jo,this.up):Xi.lookAt(Jo,to,this.up),this.quaternion.setFromRotationMatrix(Xi),n&&(Xi.extractRotation(n.matrixWorld),os.setFromRotationMatrix(Xi),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ng)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sg)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,eg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,r=n.length;s<r;s++){let a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function r(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};jt.DEFAULT_UP=new C(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=new C,Yi=new C,_l=new C,Zi=new C,rs=new C,as=new C,Gu=new C,yl=new C,Ml=new C,bl=new C,jo=!1,xs=class o{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Li.subVectors(t,e),n.cross(Li);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Li.subVectors(n,e),Yi.subVectors(i,e),_l.subVectors(t,e);let r=Li.dot(Li),a=Li.dot(Yi),l=Li.dot(_l),c=Yi.dot(Yi),h=Yi.dot(_l),u=r*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(r*h-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getUV(t,e,i,n,s,r,a,l){return jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jo=!0),this.getInterpolation(t,e,i,n,s,r,a,l)}static getInterpolation(t,e,i,n,s,r,a,l){return this.getBarycoord(t,e,i,n,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(r,Zi.y),l.addScaledVector(a,Zi.z),l)}static isFrontFacing(t,e,i,n){return Li.subVectors(i,e),Yi.subVectors(t,e),Li.cross(Yi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),Li.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return o.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return o.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jo=!0),o.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return o.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return o.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return o.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,r,a;rs.subVectors(n,i),as.subVectors(s,i),yl.subVectors(t,i);let l=rs.dot(yl),c=as.dot(yl);if(l<=0&&c<=0)return e.copy(i);Ml.subVectors(t,n);let h=rs.dot(Ml),u=as.dot(Ml);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(rs,r);bl.subVectors(t,s);let f=rs.dot(bl),p=as.dot(bl);if(p>=0&&f<=p)return e.copy(s);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(as,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Gu.subVectors(s,n),a=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(Gu,a);let m=1/(g+v+d);return r=v*m,a=d*m,e.copy(i).addScaledVector(rs,r).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Sl(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}var st=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=Hc(t,1),e=ze(e,0,1),i=ze(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=Sl(r,s,t+1/3),this.g=Sl(r,s,t),this.b=Sl(r,s,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=ue){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){let i=nf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=ul(t.r),this.g=ul(t.g),this.b=ul(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return Qt.fromWorkingColorSpace(Xe.copy(this),t),Math.round(ze(Xe.r*255,0,255))*65536+Math.round(ze(Xe.g*255,0,255))*256+Math.round(ze(Xe.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Xe.copy(this),e);let i=Xe.r,n=Xe.g,s=Xe.b,r=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+r)/2;if(a===r)l=0,c=0;else{let u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=ue){Qt.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,i=Xe.g,n=Xe.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL(Qo);let i=ao(fn.h,Qo.h,e),n=ao(fn.s,Qo.s,e),s=ao(fn.l,Qo.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new st;st.NAMES=nf;var og=0,ui=class extends nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=bs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Hl,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Hl&&(i.blendDst=this.blendDst),this.blendEquation!==Vn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let r=[];for(let a in s){let l=s[a];delete l.metadata,r.push(l)}return r}if(e){let s=n(t.textures),r=n(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Me=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Re=new C,tr=new Q,Te=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}};var Nr=class extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ur=class extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var re=class extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}};var rg=0,gi=new qt,El=new jt,ls=new C,li=new fe,eo=new fe,Be=new C,Ce=class o extends nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ef(t)?Ur:Nr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,i){return gi.makeTranslation(t,e,i),this.applyMatrix4(gi),this}scale(t,e,i){return gi.makeScale(t,e,i),this.applyMatrix4(gi),this}lookAt(t){return El.lookAt(t),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(li.min,eo.min),li.expandByPoint(Be),Be.addVectors(li.max,eo.max),li.expandByPoint(Be)):(li.expandByPoint(eo.min),li.expandByPoint(eo.max))}li.getCenter(i);let n=0;for(let s=0,r=t.count;s<r;s++)Be.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Be));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(t,c),Be.add(ls)),n=Math.max(n,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,r=e.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new C,h[E]=new C;let u=new C,d=new C,f=new C,p=new Q,v=new Q,g=new Q,m=new C,_=new C;function x(E,D,F){u.fromArray(n,E*3),d.fromArray(n,D*3),f.fromArray(n,F*3),p.fromArray(r,E*2),v.fromArray(r,D*2),g.fromArray(r,F*2),d.sub(u),f.sub(u),v.sub(p),g.sub(p);let Y=1/(v.x*g.y-g.x*v.y);isFinite(Y)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(f,-v.y).multiplyScalar(Y),_.copy(f).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(Y),c[E].add(m),c[D].add(m),c[F].add(m),h[E].add(_),h[D].add(_),h[F].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,D=y.length;E<D;++E){let F=y[E],Y=F.start,P=F.count;for(let N=Y,k=Y+P;N<k;N+=3)x(i[N+0],i[N+1],i[N+2])}let w=new C,S=new C,R=new C,z=new C;function M(E){R.fromArray(s,E*3),z.copy(R);let D=c[E];w.copy(D),w.sub(R.multiplyScalar(R.dot(D))).normalize(),S.crossVectors(z,D);let Y=S.dot(h[E])<0?-1:1;l[E*4]=w.x,l[E*4+1]=w.y,l[E*4+2]=w.z,l[E*4+3]=Y}for(let E=0,D=y.length;E<D;++E){let F=y[E],Y=F.start,P=F.count;for(let N=Y,k=Y+P;N<k;N+=3)M(i[N+0]),M(i[N+1]),M(i[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new C,s=new C,r=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Te(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new o,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wu=new qt,Bn=new Ps,er=new hi,qu=new C,cs=new C,hs=new C,us=new C,Tl=new C,ir=new C,nr=new Q,sr=new Q,or=new Q,$u=new C,Xu=new C,Yu=new C,rr=new C,ar=new C,Lt=class extends jt{constructor(t=new Ce,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){ir.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Tl.fromBufferAttribute(u,t),r?ir.addScaledVector(Tl,h):ir.addScaledVector(Tl.sub(e),h))}e.add(ir)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),er.copy(i.boundingSphere),er.applyMatrix4(s),Bn.copy(t.ray).recast(t.near),!(er.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(er,qu)===null||Bn.origin.distanceToSquared(qu)>(t.far-t.near)**2))&&(Wu.copy(s).invert(),Bn.copy(t.ray).applyMatrix4(Wu),!(i.boundingBox!==null&&Bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,i){let n,s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=r[g.materialIndex],_=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=x;y<w;y+=3){let S=a.getX(y),R=a.getX(y+1),z=a.getX(y+2);n=lr(this,m,t,i,c,h,u,S,R,z),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let _=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);n=lr(this,r,t,i,c,h,u,_,x,y),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=r[g.materialIndex],_=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,w=x;y<w;y+=3){let S=y,R=y+1,z=y+2;n=lr(this,m,t,i,c,h,u,S,R,z),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let _=g,x=g+1,y=g+2;n=lr(this,r,t,i,c,h,u,_,x,y),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function ag(o,t,e,i,n,s,r,a){let l;if(t.side===Ye?l=i.intersectTriangle(r,s,n,!0,a):l=i.intersectTriangle(n,s,r,t.side===yi,a),l===null)return null;ar.copy(a),ar.applyMatrix4(o.matrixWorld);let c=e.ray.origin.distanceTo(ar);return c<e.near||c>e.far?null:{distance:c,point:ar.clone(),object:o}}function lr(o,t,e,i,n,s,r,a,l,c){o.getVertexPosition(a,cs),o.getVertexPosition(l,hs),o.getVertexPosition(c,us);let h=ag(o,t,e,i,cs,hs,us,rr);if(h){n&&(nr.fromBufferAttribute(n,a),sr.fromBufferAttribute(n,l),or.fromBufferAttribute(n,c),h.uv=xs.getInterpolation(rr,cs,hs,us,nr,sr,or,new Q)),s&&(nr.fromBufferAttribute(s,a),sr.fromBufferAttribute(s,l),or.fromBufferAttribute(s,c),h.uv1=xs.getInterpolation(rr,cs,hs,us,nr,sr,or,new Q),h.uv2=h.uv1),r&&($u.fromBufferAttribute(r,a),Xu.fromBufferAttribute(r,l),Yu.fromBufferAttribute(r,c),h.normal=xs.getInterpolation(rr,cs,hs,us,$u,Xu,Yu,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};xs.getNormal(cs,hs,us,u.normal),h.face=u}return h}var Ze=class o extends Ce{constructor(t=1,e=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};let a=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,r,s,0),p("z","y","x",1,-1,i,e,-t,r,s,1),p("x","z","y",1,1,t,i,e,n,r,2),p("x","z","y",1,-1,t,i,-e,n,r,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function p(v,g,m,_,x,y,w,S,R,z,M){let E=y/R,D=w/z,F=y/2,Y=w/2,P=S/2,N=R+1,k=z+1,K=0,q=0,W=new C;for(let $=0;$<k;$++){let J=$*D-Y;for(let rt=0;rt<N;rt++){let G=rt*E-F;W[v]=G*_,W[g]=J*x,W[m]=P,c.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[m]=S>0?1:-1,h.push(W.x,W.y,W.z),u.push(rt/R),u.push(1-$/z),K+=1}}for(let $=0;$<z;$++)for(let J=0;J<R;J++){let rt=d+J+N*$,G=d+J+N*($+1),tt=d+(J+1)+N*($+1),pt=d+(J+1)+N*$;l.push(rt,G,pt),l.push(G,tt,pt),q+=6}a.addGroup(f,q,M),f+=q,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Is(o){let t={};for(let e in o){t[e]={};for(let i in o[e]){let n=o[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Qe(o){let t={};for(let e=0;e<o.length;e++){let i=Is(o[e]);for(let n in i)t[n]=i[n]}return t}function lg(o){let t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function sf(o){return o.getRenderTarget()===null?o.outputColorSpace:Qt.workingColorSpace}var En={clone:Is,merge:Qe},cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pe=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=lg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Or=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Le=class extends Or{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ro*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,e-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ds=-90,fs=1,Yl=class extends jt{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Le(ds,fs,t,e);n.layers=this.layers,this.add(n);let s=new Le(ds,fs,t,e);s.layers=this.layers,this.add(s);let r=new Le(ds,fs,t,e);r.layers=this.layers,this.add(r);let a=new Le(ds,fs,t,e);a.layers=this.layers,this.add(a);let l=new Le(ds,fs,t,e);l.layers=this.layers,this.add(l);let c=new Le(ds,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,r,a,l]=e;for(let c of e)this.remove(c);if(t===tn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Fr=class extends Ve{constructor(t,e,i,n,s,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,i,n,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zl=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(lo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===$n?ue:xi),this.texture=new Fr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ze(5,5,5),s=new Pe({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:ki});s.uniforms.tEquirect.value=e;let r=new Lt(n,s),a=e.minFilter;return e.minFilter===xn&&(e.minFilter=ti),new Yl(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(s)}},Al=new C,ug=new C,dg=new Yt,ji=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Al.subVectors(i,e).cross(ug.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Al),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||dg.getNormalMatrix(t),n=this.coplanarPoint(Al).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},kn=new hi,cr=new C,vo=class{constructor(t=new ji,e=new ji,i=new ji,n=new ji,s=new ji,r=new ji){this.planes=[t,e,i,n,s,r]}set(t,e,i,n,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=tn){let i=this.planes,n=t.elements,s=n[0],r=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],p=n[9],v=n[10],g=n[11],m=n[12],_=n[13],x=n[14],y=n[15];if(i[0].setComponents(l-s,d-c,g-f,y-m).normalize(),i[1].setComponents(l+s,d+c,g+f,y+m).normalize(),i[2].setComponents(l+r,d+h,g+p,y+_).normalize(),i[3].setComponents(l-r,d-h,g-p,y-_).normalize(),i[4].setComponents(l-a,d-u,g-v,y-x).normalize(),e===tn)i[5].setComponents(l+a,d+u,g+v,y+x).normalize();else if(e===Rr)i[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(cr.x=n.normal.x>0?t.max.x:t.min.x,cr.y=n.normal.y>0?t.max.y:t.min.y,cr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function of(){let o=null,t=!1,e=null,i=null;function n(s,r){e(s,r),i=o.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(n),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function fg(o,t){let e=t.isWebGL2,i=new WeakMap;function n(c,h){let u=c.array,d=c.usage,f=u.byteLength,p=o.createBuffer();o.bindBuffer(h,p),o.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=o.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=o.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=o.SHORT;else if(u instanceof Uint32Array)v=o.UNSIGNED_INT;else if(u instanceof Int32Array)v=o.INT;else if(u instanceof Int8Array)v=o.BYTE;else if(u instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,h,u){let d=h.array,f=h._updateRange,p=h.updateRanges;if(o.bindBuffer(u,c),f.count===-1&&p.length===0&&o.bufferSubData(u,0,d),p.length!==0){for(let v=0,g=p.length;v<g;v++){let m=p[v];e?o.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):o.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(o.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:r,remove:a,update:l}}var sn=class o extends Ce{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,r=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let _=m*d-r;for(let x=0;x<c;x++){let y=x*u-s;p.push(y,-_,0),v.push(0,0,1),g.push(x/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let x=_+c*m,y=_+c*(m+1),w=_+1+c*(m+1),S=_+1+c*m;f.push(x,y,S),f.push(y,w,S)}this.setIndex(f),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.width,t.height,t.widthSegments,t.heightSegments)}},pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ag=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Og=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",qg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,C0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,I0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,j0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,av=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Mv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:pg,alphahash_pars_fragment:mg,alphamap_fragment:gg,alphamap_pars_fragment:vg,alphatest_fragment:xg,alphatest_pars_fragment:_g,aomap_fragment:yg,aomap_pars_fragment:Mg,batching_pars_vertex:bg,batching_vertex:Sg,begin_vertex:Eg,beginnormal_vertex:Tg,bsdfs:Ag,iridescence_fragment:wg,bumpmap_pars_fragment:Rg,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Pg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:zg,color_fragment:Lg,color_pars_fragment:Dg,color_pars_vertex:Ng,color_vertex:Ug,common:Og,cube_uv_reflection_fragment:Fg,defaultnormal_vertex:Bg,displacementmap_pars_vertex:kg,displacementmap_vertex:Hg,emissivemap_fragment:Vg,emissivemap_pars_fragment:Gg,colorspace_fragment:Wg,colorspace_pars_fragment:qg,envmap_fragment:$g,envmap_common_pars_fragment:Xg,envmap_pars_fragment:Yg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:a0,envmap_vertex:Kg,fog_vertex:Jg,fog_pars_vertex:jg,fog_fragment:Qg,fog_pars_fragment:t0,gradientmap_pars_fragment:e0,lightmap_fragment:i0,lightmap_pars_fragment:n0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:o0,lights_pars_begin:r0,lights_toon_fragment:l0,lights_toon_pars_fragment:c0,lights_phong_fragment:h0,lights_phong_pars_fragment:u0,lights_physical_fragment:d0,lights_physical_pars_fragment:f0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:g0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:_0,logdepthbuf_vertex:y0,map_fragment:M0,map_pars_fragment:b0,map_particle_fragment:S0,map_particle_pars_fragment:E0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:A0,morphcolor_vertex:w0,morphnormal_vertex:R0,morphtarget_pars_vertex:C0,morphtarget_vertex:P0,normal_fragment_begin:I0,normal_fragment_maps:z0,normal_pars_fragment:L0,normal_pars_vertex:D0,normal_vertex:N0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:B0,iridescence_pars_fragment:k0,opaque_fragment:H0,packing:V0,premultiplied_alpha_fragment:G0,project_vertex:W0,dithering_fragment:q0,dithering_pars_fragment:$0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:K0,shadowmap_vertex:J0,shadowmask_pars_fragment:j0,skinbase_vertex:Q0,skinning_pars_vertex:tv,skinning_vertex:ev,skinnormal_vertex:iv,specularmap_fragment:nv,specularmap_pars_fragment:sv,tonemapping_fragment:ov,tonemapping_pars_fragment:rv,transmission_fragment:av,transmission_pars_fragment:lv,uv_pars_fragment:cv,uv_pars_vertex:hv,uv_vertex:uv,worldpos_vertex:dv,background_vert:fv,background_frag:pv,backgroundCube_vert:mv,backgroundCube_frag:gv,cube_vert:vv,cube_frag:xv,depth_vert:_v,depth_frag:yv,distanceRGBA_vert:Mv,distanceRGBA_frag:bv,equirect_vert:Sv,equirect_frag:Ev,linedashed_vert:Tv,linedashed_frag:Av,meshbasic_vert:wv,meshbasic_frag:Rv,meshlambert_vert:Cv,meshlambert_frag:Pv,meshmatcap_vert:Iv,meshmatcap_frag:zv,meshnormal_vert:Lv,meshnormal_frag:Dv,meshphong_vert:Nv,meshphong_frag:Uv,meshphysical_vert:Ov,meshphysical_frag:Fv,meshtoon_vert:Bv,meshtoon_frag:kv,points_vert:Hv,points_frag:Vv,shadow_vert:Gv,shadow_frag:Wv,sprite_vert:qv,sprite_frag:$v},ht={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Fi={basic:{uniforms:Qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new st(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Qe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Qe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new st(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Qe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Qe([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Qe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Qe([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Qe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Qe([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Qe([ht.common,ht.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Qe([ht.lights,ht.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Fi.physical={uniforms:Qe([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var hr={r:0,b:0,g:0};function Xv(o,t,e,i,n,s,r){let a=new st(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function p(g,m){let _=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?e:t).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),_=!0);let y=o.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===la)?(h===void 0&&(h=new Lt(new Ze(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:Is(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ce,(u!==x||d!==x.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=o.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Lt(new sn(2,2),new Pe({name:"BackgroundMaterial",uniforms:Is(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=o.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,m){g.getRGB(hr,sf(o)),i.buffers.color.setClear(hr.r,hr.g,hr.b,m,r)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),l=m,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(a,l)},render:p}}function Yv(o,t,e,i){let n=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,a={},l=g(null),c=l,h=!1;function u(P,N,k,K,q){let W=!1;if(r){let $=v(K,k,N);c!==$&&(c=$,f(c.object)),W=m(P,K,k,q),W&&_(P,K,k,q)}else{let $=N.wireframe===!0;(c.geometry!==K.id||c.program!==k.id||c.wireframe!==$)&&(c.geometry=K.id,c.program=k.id,c.wireframe=$,W=!0)}q!==null&&e.update(q,o.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,z(P,N,k,K),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return i.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(P){return i.isWebGL2?o.bindVertexArray(P):s.bindVertexArrayOES(P)}function p(P){return i.isWebGL2?o.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,N,k){let K=k.wireframe===!0,q=a[P.id];q===void 0&&(q={},a[P.id]=q);let W=q[N.id];W===void 0&&(W={},q[N.id]=W);let $=W[K];return $===void 0&&($=g(d()),W[K]=$),$}function g(P){let N=[],k=[],K=[];for(let q=0;q<n;q++)N[q]=0,k[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:K,object:P,attributes:{},index:null}}function m(P,N,k,K){let q=c.attributes,W=N.attributes,$=0,J=k.getAttributes();for(let rt in J)if(J[rt].location>=0){let tt=q[rt],pt=W[rt];if(pt===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&(pt=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&(pt=P.instanceColor)),tt===void 0||tt.attribute!==pt||pt&&tt.data!==pt.data)return!0;$++}return c.attributesNum!==$||c.index!==K}function _(P,N,k,K){let q={},W=N.attributes,$=0,J=k.getAttributes();for(let rt in J)if(J[rt].location>=0){let tt=W[rt];tt===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor));let pt={};pt.attribute=tt,tt&&tt.data&&(pt.data=tt.data),q[rt]=pt,$++}c.attributes=q,c.attributesNum=$,c.index=K}function x(){let P=c.newAttributes;for(let N=0,k=P.length;N<k;N++)P[N]=0}function y(P){w(P,0)}function w(P,N){let k=c.newAttributes,K=c.enabledAttributes,q=c.attributeDivisors;k[P]=1,K[P]===0&&(o.enableVertexAttribArray(P),K[P]=1),q[P]!==N&&((i.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),q[P]=N)}function S(){let P=c.newAttributes,N=c.enabledAttributes;for(let k=0,K=N.length;k<K;k++)N[k]!==P[k]&&(o.disableVertexAttribArray(k),N[k]=0)}function R(P,N,k,K,q,W,$){$===!0?o.vertexAttribIPointer(P,N,k,q,W):o.vertexAttribPointer(P,N,k,K,q,W)}function z(P,N,k,K){if(i.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let q=K.attributes,W=k.getAttributes(),$=N.defaultAttributeValues;for(let J in W){let rt=W[J];if(rt.location>=0){let G=q[J];if(G===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let tt=G.normalized,pt=G.itemSize,Mt=e.get(G);if(Mt===void 0)continue;let vt=Mt.buffer,Pt=Mt.type,Ut=Mt.bytesPerElement,bt=i.isWebGL2===!0&&(Pt===o.INT||Pt===o.UNSIGNED_INT||G.gpuType===Gd);if(G.isInterleavedBufferAttribute){let Dt=G.data,I=Dt.stride,lt=G.offset;if(Dt.isInstancedInterleavedBuffer){for(let Z=0;Z<rt.locationSize;Z++)w(rt.location+Z,Dt.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Z=0;Z<rt.locationSize;Z++)y(rt.location+Z);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Z=0;Z<rt.locationSize;Z++)R(rt.location+Z,pt/rt.locationSize,Pt,tt,I*Ut,(lt+pt/rt.locationSize*Z)*Ut,bt)}else{if(G.isInstancedBufferAttribute){for(let Dt=0;Dt<rt.locationSize;Dt++)w(rt.location+Dt,G.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Dt=0;Dt<rt.locationSize;Dt++)y(rt.location+Dt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Dt=0;Dt<rt.locationSize;Dt++)R(rt.location+Dt,pt/rt.locationSize,Pt,tt,pt*Ut,pt/rt.locationSize*Dt*Ut,bt)}}else if($!==void 0){let tt=$[J];if(tt!==void 0)switch(tt.length){case 2:o.vertexAttrib2fv(rt.location,tt);break;case 3:o.vertexAttrib3fv(rt.location,tt);break;case 4:o.vertexAttrib4fv(rt.location,tt);break;default:o.vertexAttrib1fv(rt.location,tt)}}}}S()}function M(){F();for(let P in a){let N=a[P];for(let k in N){let K=N[k];for(let q in K)p(K[q].object),delete K[q];delete N[k]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;let N=a[P.id];for(let k in N){let K=N[k];for(let q in K)p(K[q].object),delete K[q];delete N[k]}delete a[P.id]}function D(P){for(let N in a){let k=a[N];if(k[P.id]===void 0)continue;let K=k[P.id];for(let q in K)p(K[q].object),delete K[q];delete k[P.id]}}function F(){Y(),h=!0,c!==l&&(c=l,f(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:Y,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:y,disableUnusedAttributes:S}}function Zv(o,t,e,i){let n=i.isWebGL2,s;function r(h){s=h}function a(h,u){o.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,d){if(d===0)return;let f,p;if(n)f=o,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,h,u,d),e.update(u,s,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(h[p],u[p]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];e.update(p,s,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Kv(o,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),d=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_TEXTURE_SIZE),p=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),g=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),m=o.getParameter(o.MAX_VARYING_VECTORS),_=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=r||t.has("OES_texture_float"),w=x&&y,S=r?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:S}}function Jv(o){let t=this,e=null,i=0,n=!1,s=!1,r=new ji,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=o.get(u);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{let _=s?0:i,x=_*4,y=m.clippingState||null;l.value=y,y=h(p,d,x,f);for(let w=0;w!==x;++w)y[w]=e[w];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,y=f;x!==v;++x,y+=4)r.copy(u[x]).applyMatrix4(_,a),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function jv(o){let t=new WeakMap;function e(r,a){return a===po?r.mapping=Ts:a===Vl&&(r.mapping=As),r}function i(r){if(r&&r.isTexture){let a=r.mapping;if(a===po||a===Vl)if(t.has(r)){let l=t.get(r).texture;return e(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Zl(l.height/2);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",n),e(c.texture,r.mapping)}else return null}}return r}function n(r){let a=r.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var _n=class extends Or{constructor(t=-1,e=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,r=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_s=4,Zu=[.125,.215,.35,.446,.526,.582],Gn=20,wl=new _n,Ku=new st,Rl=null,Cl=0,Pl=0,Hn=(1+Math.sqrt(5))/2,ps=1/Hn,Ju=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Hn,ps),new C(0,Hn,-ps),new C(ps,0,Hn),new C(-ps,0,Hn),new C(Hn,ps,0),new C(-Hn,ps,0)],zs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rl,Cl,Pl),t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Di,format:vi,colorSpace:De,depthBuffer:!1},n=ju(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qv(s)),this._blurMaterial=tx(s,t,e)}return n}_compileMaterial(t){let e=new Lt(this._lodPlanes[0],t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,i,n){let a=new Le(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ku),h.toneMapping=gn,h.autoClear=!1;let f=new Me({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),p=new Lt(new Ze,f),v=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Ku),v=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let x=this._cubeSize;ur(n,_*x,m>2?x:0,x,x),h.setRenderTarget(n),v&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Ts||t.mapping===As;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());let s=n?this._cubemapMaterial:this._equirectMaterial,r=new Lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ur(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,wl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=Ju[(n-1)%Ju.length];this._blur(t,n-1,n,s,r)}e.autoClear=i}_blur(t,e,i,n,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",s),this._halfBlur(r,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,r,a){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Lt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),v=s/p,g=isFinite(s)?1+Math.floor(h*v):Gn;g>Gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gn}`);let m=[],_=0;for(let R=0;R<Gn;++R){let z=R/v,M=Math.exp(-z*z/2);m.push(M),R===0?_+=M:R<g&&(_+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-i;let y=this._sizeLods[n],w=3*y*(n>x-_s?n-x+_s:0),S=4*(this._cubeSize-y);ur(e,w,S,3*y,2*y),l.setRenderTarget(e),l.render(u,wl)}};function Qv(o){let t=[],e=[],i=[],n=o,s=o-_s+1+Zu.length;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let l=1/a;r>o-_s?l=Zu[r-o+_s-1]:r===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*f),x=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let S=0;S<f;S++){let R=S%3*2/3-1,z=S>2?0:-1,M=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];_.set(M,v*p*S),x.set(d,g*p*S);let E=[S,S,S,S,S,S];y.set(E,m*p*S)}let w=new Ce;w.setAttribute("position",new Te(_,v)),w.setAttribute("uv",new Te(x,g)),w.setAttribute("faceIndex",new Te(y,m)),t.push(w),n>_s&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ju(o,t,e){let i=new ii(o,t,e);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(o,t,e,i,n){o.viewport.set(t,e,i,n),o.scissor.set(t,e,i,n)}function tx(o,t,e){let i=new Float32Array(Gn),n=new C(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Qu(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function td(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ex(o){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===po||l===Vl,h=l===Ts||l===As;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new zs(o)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new zs(o));let d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function ix(o){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function nx(o,t,e,i){let n={},s=new WeakMap;function r(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}d.removeEventListener("dispose",r),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],o.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],o.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let x=0,y=_.length;x<y;x+=3){let w=_[x+0],S=_[x+1],R=_[x+2];d.push(w,S,S,R,R,w)}}else if(p!==void 0){let _=p.array;v=p.version;for(let x=0,y=_.length/3-1;x<y;x+=3){let w=x+0,S=x+1,R=x+2;d.push(w,S,S,R,R,w)}}else return;let g=new(ef(d)?Ur:Nr)(d,1);g.version=v;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sx(o,t,e,i){let n=i.isWebGL2,s;function r(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,p){o.drawElements(s,p,a,f*l),e.update(p,s,1)}function u(f,p,v){if(v===0)return;let g,m;if(n)g=o,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,f*l,v),e.update(p,s,v)}function d(f,p,v){if(v===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(f[m]/l,p[m]);else{g.multiDrawElementsWEBGL(s,p,0,a,f,0,v);let m=0;for(let _=0;_<v;_++)m+=p[_];e.update(m,s,1)}}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ox(o){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function rx(o,t){return o[0]-t[0]}function ax(o,t){return Math.abs(t[1])-Math.abs(o[1])}function lx(o,t,e){let i={},n=new Float32Array(8),s=new WeakMap,r=new de,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0,v=s.get(h);if(v===void 0||v.count!==p){let P=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],z=0;_===!0&&(z=1),x===!0&&(z=2),y===!0&&(z=3);let M=h.attributes.position.count*z,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let D=new Float32Array(M*E*4*p),F=new zr(D,M,E,p);F.type=Qi,F.needsUpdate=!0;let Y=z*4;for(let N=0;N<p;N++){let k=w[N],K=S[N],q=R[N],W=M*E*4*N;for(let $=0;$<k.count;$++){let J=$*Y;_===!0&&(r.fromBufferAttribute(k,$),D[W+J+0]=r.x,D[W+J+1]=r.y,D[W+J+2]=r.z,D[W+J+3]=0),x===!0&&(r.fromBufferAttribute(K,$),D[W+J+4]=r.x,D[W+J+5]=r.y,D[W+J+6]=r.z,D[W+J+7]=0),y===!0&&(r.fromBufferAttribute(q,$),D[W+J+8]=r.x,D[W+J+9]=r.y,D[W+J+10]=r.z,D[W+J+11]=q.itemSize===4?r.w:1)}}v={count:p,texture:F,size:new Q(M,E)},s.set(h,v),h.addEventListener("dispose",P)}let g=0;for(let _=0;_<d.length;_++)g+=d[_];let m=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(o,"morphTargetBaseInfluence",m),u.getUniforms().setValue(o,"morphTargetInfluences",d),u.getUniforms().setValue(o,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{let f=d===void 0?0:d.length,p=i[h.id];if(p===void 0||p.length!==f){p=[];for(let x=0;x<f;x++)p[x]=[x,0];i[h.id]=p}for(let x=0;x<f;x++){let y=p[x];y[0]=x,y[1]=d[x]}p.sort(ax);for(let x=0;x<8;x++)x<f&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(rx);let v=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let x=0;x<8;x++){let y=a[x],w=y[0],S=y[1];w!==Number.MAX_SAFE_INTEGER&&S?(v&&h.getAttribute("morphTarget"+x)!==v[w]&&h.setAttribute("morphTarget"+x,v[w]),g&&h.getAttribute("morphNormal"+x)!==g[w]&&h.setAttribute("morphNormal"+x,g[w]),n[x]=S,m+=S):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),g&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),n[x]=0)}let _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(o,"morphTargetBaseInfluence",_),u.getUniforms().setValue(o,"morphTargetInfluences",n)}}return{update:l}}function cx(o,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function r(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}var Br=class extends Ve{constructor(t,e,i,n,s,r,a,l,c,h){if(h=h!==void 0?h:qn,h!==qn&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===qn&&(i=pn),i===void 0&&h===ws&&(i=Wn),super(null,n,s,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=l!==void 0?l:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rf=new Ve,af=new Br(1,1);af.compareFunction=Qd;var lf=new zr,cf=new Xl,hf=new Fr,ed=[],id=[],nd=new Float32Array(16),sd=new Float32Array(9),od=new Float32Array(4);function ks(o,t,e){let i=o[0];if(i<=0||i>0)return o;let n=t*e,s=ed[n];if(s===void 0&&(s=new Float32Array(n),ed[n]=s),t!==0){i.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function Ne(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function Ue(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function ua(o,t){let e=id[t];e===void 0&&(e=new Int32Array(t),id[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function hx(o,t){let e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function ux(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;o.uniform2fv(this.addr,t),Ue(e,t)}}function dx(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;o.uniform3fv(this.addr,t),Ue(e,t)}}function fx(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;o.uniform4fv(this.addr,t),Ue(e,t)}}function px(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;od.set(i),o.uniformMatrix2fv(this.addr,!1,od),Ue(e,i)}}function mx(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;sd.set(i),o.uniformMatrix3fv(this.addr,!1,sd),Ue(e,i)}}function gx(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,i))return;nd.set(i),o.uniformMatrix4fv(this.addr,!1,nd),Ue(e,i)}}function vx(o,t){let e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function xx(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;o.uniform2iv(this.addr,t),Ue(e,t)}}function _x(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;o.uniform3iv(this.addr,t),Ue(e,t)}}function yx(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;o.uniform4iv(this.addr,t),Ue(e,t)}}function Mx(o,t){let e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function bx(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;o.uniform2uiv(this.addr,t),Ue(e,t)}}function Sx(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;o.uniform3uiv(this.addr,t),Ue(e,t)}}function Ex(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;o.uniform4uiv(this.addr,t),Ue(e,t)}}function Tx(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n);let s=this.type===o.SAMPLER_2D_SHADOW?af:rf;e.setTexture2D(t||s,n)}function Ax(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||cf,n)}function wx(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||hf,n)}function Rx(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||lf,n)}function Cx(o){switch(o){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return vx;case 35667:case 35671:return xx;case 35668:case 35672:return _x;case 35669:case 35673:return yx;case 5125:return Mx;case 36294:return bx;case 36295:return Sx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Rx}}function Px(o,t){o.uniform1fv(this.addr,t)}function Ix(o,t){let e=ks(t,this.size,2);o.uniform2fv(this.addr,e)}function zx(o,t){let e=ks(t,this.size,3);o.uniform3fv(this.addr,e)}function Lx(o,t){let e=ks(t,this.size,4);o.uniform4fv(this.addr,e)}function Dx(o,t){let e=ks(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Nx(o,t){let e=ks(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Ux(o,t){let e=ks(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Ox(o,t){o.uniform1iv(this.addr,t)}function Fx(o,t){o.uniform2iv(this.addr,t)}function Bx(o,t){o.uniform3iv(this.addr,t)}function kx(o,t){o.uniform4iv(this.addr,t)}function Hx(o,t){o.uniform1uiv(this.addr,t)}function Vx(o,t){o.uniform2uiv(this.addr,t)}function Gx(o,t){o.uniform3uiv(this.addr,t)}function Wx(o,t){o.uniform4uiv(this.addr,t)}function qx(o,t,e){let i=this.cache,n=t.length,s=ua(e,n);Ne(i,s)||(o.uniform1iv(this.addr,s),Ue(i,s));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||rf,s[r])}function $x(o,t,e){let i=this.cache,n=t.length,s=ua(e,n);Ne(i,s)||(o.uniform1iv(this.addr,s),Ue(i,s));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||cf,s[r])}function Xx(o,t,e){let i=this.cache,n=t.length,s=ua(e,n);Ne(i,s)||(o.uniform1iv(this.addr,s),Ue(i,s));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||hf,s[r])}function Yx(o,t,e){let i=this.cache,n=t.length,s=ua(e,n);Ne(i,s)||(o.uniform1iv(this.addr,s),Ue(i,s));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||lf,s[r])}function Zx(o){switch(o){case 5126:return Px;case 35664:return Ix;case 35665:return zx;case 35666:return Lx;case 35674:return Dx;case 35675:return Nx;case 35676:return Ux;case 5124:case 35670:return Ox;case 35667:case 35671:return Fx;case 35668:case 35672:return Bx;case 35669:case 35673:return kx;case 5125:return Hx;case 36294:return Vx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return Yx}}var Kl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Cx(e.type)}},Jl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zx(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,r=n.length;s!==r;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},Il=/(\w+)(\])?(\[|\.)?/g;function rd(o,t){o.seq.push(t),o.map[t.id]=t}function Kx(o,t,e){let i=o.name,n=i.length;for(Il.lastIndex=0;;){let s=Il.exec(i),r=Il.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===n){rd(e,c===void 0?new Kl(a,o,t):new Jl(a,o,t));break}else{let u=e.map[a];u===void 0&&(u=new jl(a),rd(e,u)),e=u}}}var Es=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),r=t.getUniformLocation(e,s.name);Kx(s,r,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,r=e.length;s!==r;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.id in e&&i.push(r)}return i}};function ad(o,t,e){let i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}var Jx=37297,jx=0;function Qx(o,t){let e=o.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=n;r<s;r++){let a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function t_(o){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(o),i;switch(t===e?i="":t===wr&&e===Ar?i="LinearDisplayP3ToLinearSRGB":t===Ar&&e===wr&&(i="LinearSRGBToLinearDisplayP3"),o){case De:case ha:return[i,"LinearTransferOETF"];case ue:case kc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[i,"LinearTransferOETF"]}}function ld(o,t,e){let i=o.getShaderParameter(t,o.COMPILE_STATUS),n=o.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let r=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Qx(o.getShaderSource(t),r)}else return n}function e_(o,t){let e=t_(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function i_(o,t){let e;switch(t){case Lc:e="Linear";break;case Dc:e="Reinhard";break;case Nc:e="OptimizedCineon";break;case Io:e="ACESFilmic";break;case Uc:e="AgX";break;case cm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function n_(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function s_(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ys).join(`
`)}function o_(o){let t=[];for(let e in o){let i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function r_(o,t){let e={},i=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=o.getActiveAttrib(t,n),r=s.name,a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function ys(o){return o!==""}function cd(o,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hd(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(o){return o.replace(a_,c_)}var l_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function c_(o,t){let e=Gt[t];if(e===void 0){let i=l_.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ql(e)}var h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(o){return o.replace(h_,u_)}function u_(o,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function dd(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function d_(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===kd?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function f_(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p_(o){let t="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===As&&(t="ENVMAP_MODE_REFRACTION"),t}function m_(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Hd:t="ENVMAP_BLENDING_MULTIPLY";break;case am:t="ENVMAP_BLENDING_MIX";break;case lm:t="ENVMAP_BLENDING_ADD";break}return t}function g_(o){let t=o.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function v_(o,t,e,i){let n=o.getContext(),s=e.defines,r=e.vertexShader,a=e.fragmentShader,l=d_(e),c=f_(e),h=p_(e),u=m_(e),d=g_(e),f=e.isWebGL2?"":n_(e),p=s_(e),v=o_(s),g=n.createProgram(),m,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ys).join(`
`),m.length>0&&(m+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ys).join(`
`),_.length>0&&(_+=`
`)):(m=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),_=[f,dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gn?"#define TONE_MAPPING":"",e.toneMapping!==gn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==gn?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,e_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),r=Ql(r),r=cd(r,e),r=hd(r,e),a=Ql(a),a=cd(a,e),a=hd(a,e),r=ud(r),a=ud(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=x+m+r,w=x+_+a,S=ad(n,n.VERTEX_SHADER,y),R=ad(n,n.FRAGMENT_SHADER,w);n.attachShader(g,S),n.attachShader(g,R),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function z(F){if(o.debug.checkShaderErrors){let Y=n.getProgramInfoLog(g).trim(),P=n.getShaderInfoLog(S).trim(),N=n.getShaderInfoLog(R).trim(),k=!0,K=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(n,g,S,R);else{let q=ld(n,S,"vertex"),W=ld(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+q+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(P===""||N==="")&&(K=!1);K&&(F.diagnostics={runnable:k,programLog:Y,vertexShader:{log:P,prefix:m},fragmentShader:{log:N,prefix:_}})}n.deleteShader(S),n.deleteShader(R),M=new Es(n,g),E=r_(n,g)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let E;this.getAttributes=function(){return E===void 0&&z(this),E};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=n.getProgramParameter(g,Jx)),D},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=R,this}var x_=0,tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ec(t),e.set(t,i)),i}},ec=class{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}};function __(o,t,e,i,n,s,r){let a=new Dr,l=new tc,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function g(M,E,D,F,Y){let P=F.fog,N=Y.geometry,k=M.isMeshStandardMaterial?F.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),q=K&&K.mapping===la?K.image.height:null,W=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,J=$!==void 0?$.length:0,rt=0;N.morphAttributes.position!==void 0&&(rt=1),N.morphAttributes.normal!==void 0&&(rt=2),N.morphAttributes.color!==void 0&&(rt=3);let G,tt,pt,Mt;if(W){let Ke=Fi[W];G=Ke.vertexShader,tt=Ke.fragmentShader}else G=M.vertexShader,tt=M.fragmentShader,l.update(M),pt=l.getVertexShaderID(M),Mt=l.getFragmentShaderID(M);let vt=o.getRenderTarget(),Pt=Y.isInstancedMesh===!0,Ut=Y.isBatchedMesh===!0,bt=!!M.map,Dt=!!M.matcap,I=!!K,lt=!!M.aoMap,Z=!!M.lightMap,ot=!!M.bumpMap,X=!!M.normalMap,Et=!!M.displacementMap,mt=!!M.emissiveMap,T=!!M.metalnessMap,b=!!M.roughnessMap,O=M.anisotropy>0,nt=M.clearcoat>0,et=M.iridescence>0,j=M.sheen>0,yt=M.transmission>0,ut=O&&!!M.anisotropyMap,xt=nt&&!!M.clearcoatMap,At=nt&&!!M.clearcoatNormalMap,Bt=nt&&!!M.clearcoatRoughnessMap,it=et&&!!M.iridescenceMap,ee=et&&!!M.iridescenceThicknessMap,Zt=j&&!!M.sheenColorMap,Nt=j&&!!M.sheenRoughnessMap,Tt=!!M.specularMap,_t=!!M.specularColorMap,Vt=!!M.specularIntensityMap,oe=yt&&!!M.transmissionMap,Se=yt&&!!M.thicknessMap,$t=!!M.gradientMap,ct=!!M.alphaMap,L=M.alphaTest>0,dt=!!M.alphaHash,ft=!!M.extensions,It=!!N.attributes.uv1,wt=!!N.attributes.uv2,pe=!!N.attributes.uv3,me=gn;return M.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(me=o.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:tt,defines:M.defines,customVertexShaderID:pt,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ut,instancing:Pt,instancingColor:Pt&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:De,map:bt,matcap:Dt,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:q,aoMap:lt,lightMap:Z,bumpMap:ot,normalMap:X,displacementMap:d&&Et,emissiveMap:mt,normalMapObjectSpace:X&&M.normalMapType===Tm,normalMapTangentSpace:X&&M.normalMapType===jd,metalnessMap:T,roughnessMap:b,anisotropy:O,anisotropyMap:ut,clearcoat:nt,clearcoatMap:xt,clearcoatNormalMap:At,clearcoatRoughnessMap:Bt,iridescence:et,iridescenceMap:it,iridescenceThicknessMap:ee,sheen:j,sheenColorMap:Zt,sheenRoughnessMap:Nt,specularMap:Tt,specularColorMap:_t,specularIntensityMap:Vt,transmission:yt,transmissionMap:oe,thicknessMap:Se,gradientMap:$t,opaque:M.transparent===!1&&M.blending===bs,alphaMap:ct,alphaTest:L,alphaHash:dt,combine:M.combine,mapUv:bt&&v(M.map.channel),aoMapUv:lt&&v(M.aoMap.channel),lightMapUv:Z&&v(M.lightMap.channel),bumpMapUv:ot&&v(M.bumpMap.channel),normalMapUv:X&&v(M.normalMap.channel),displacementMapUv:Et&&v(M.displacementMap.channel),emissiveMapUv:mt&&v(M.emissiveMap.channel),metalnessMapUv:T&&v(M.metalnessMap.channel),roughnessMapUv:b&&v(M.roughnessMap.channel),anisotropyMapUv:ut&&v(M.anisotropyMap.channel),clearcoatMapUv:xt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&v(M.sheenRoughnessMap.channel),specularMapUv:Tt&&v(M.specularMap.channel),specularColorMapUv:_t&&v(M.specularColorMap.channel),specularIntensityMapUv:Vt&&v(M.specularIntensityMap.channel),transmissionMapUv:oe&&v(M.transmissionMap.channel),thicknessMapUv:Se&&v(M.thicknessMap.channel),alphaMapUv:ct&&v(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(X||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:wt,vertexUv3s:pe,pointsUvs:Y.isPoints===!0&&!!N.attributes.uv&&(bt||ct),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:rt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:me,useLegacyLights:o._useLegacyLights,decodeVideoTexture:bt&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ce,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ei,flipSided:M.side===Ye,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ft&&M.extensions.derivatives===!0,extensionFragDepth:ft&&M.extensions.fragDepth===!0,extensionDrawBuffers:ft&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(E,M),x(E,M),E.push(o.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function _(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){let E=p[M.type],D;if(E){let F=Fi[E];D=En.clone(F.uniforms)}else D=M.uniforms;return D}function w(M,E){let D;for(let F=0,Y=c.length;F<Y;F++){let P=c[F];if(P.cacheKey===E){D=P,++D.usedTimes;break}}return D===void 0&&(D=new v_(o,E,M,s),c.push(D)),D}function S(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:w,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:z}}function y_(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function i(s,r,a){o.get(s)[r]=a}function n(){o=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function M_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function fd(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function pd(){let o=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function r(u,d,f,p,v,g){let m=o[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},o[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),t++,m}function a(u,d,f,p,v,g){let m=r(u,d,f,p,v,g);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,d,f,p,v,g){let m=r(u,d,f,p,v,g);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||M_),i.length>1&&i.sort(d||fd),n.length>1&&n.sort(d||fd)}function h(){for(let u=t,d=o.length;u<d;u++){let f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function b_(){let o=new WeakMap;function t(i,n){let s=o.get(i),r;return s===void 0?(r=new pd,o.set(i,[r])):n>=s.length?(r=new pd,s.push(r)):r=s[n],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function S_(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new st};break;case"SpotLight":e={position:new C,direction:new C,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new C,halfWidth:new C,halfHeight:new C};break}return o[t.id]=e,e}}}function E_(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}var T_=0;function A_(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function w_(o,t){let e=new S_,i=E_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new C);let s=new C,r=new qt,a=new qt;function l(h,u){let d=0,f=0,p=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let v=0,g=0,m=0,_=0,x=0,y=0,w=0,S=0,R=0,z=0,M=0;h.sort(A_);let E=u===!0?Math.PI:1;for(let F=0,Y=h.length;F<Y;F++){let P=h[F],N=P.color,k=P.intensity,K=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*k*E,f+=N.g*k*E,p+=N.b*k*E;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],k);M++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){let $=P.shadow,J=i.get(P);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,n.directionalShadow[v]=J,n.directionalShadowMap[v]=q,n.directionalShadowMatrix[v]=P.shadow.matrix,y++}n.directional[v]=W,v++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(k*E),W.distance=K,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[m]=W;let $=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,$.updateMatrices(P),P.castShadow&&z++),n.spotLightMatrix[m]=$.matrix,P.castShadow){let J=i.get(P);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,n.spotShadow[m]=J,n.spotShadowMap[m]=q,S++}m++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(N).multiplyScalar(k),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=W,_++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*E),W.distance=P.distance,W.decay=P.decay,P.castShadow){let $=P.shadow,J=i.get(P);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(k*E),W.groundColor.copy(P.groundColor).multiplyScalar(k*E),n.hemi[x]=W,x++}}_>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;let D=n.hash;(D.directionalLength!==v||D.pointLength!==g||D.spotLength!==m||D.rectAreaLength!==_||D.hemiLength!==x||D.numDirectionalShadows!==y||D.numPointShadows!==w||D.numSpotShadows!==S||D.numSpotMaps!==R||D.numLightProbes!==M)&&(n.directional.length=v,n.spot.length=m,n.rectArea.length=_,n.point.length=g,n.hemi.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+R-z,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=M,D.directionalLength=v,D.pointLength=g,D.spotLength=m,D.rectAreaLength=_,D.hemiLength=x,D.numDirectionalShadows=y,D.numPointShadows=w,D.numSpotShadows=S,D.numSpotMaps=R,D.numLightProbes=M,n.version=T_++)}function c(h,u){let d=0,f=0,p=0,v=0,g=0,m=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){let y=h[_];if(y.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(y.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:n}}function md(o,t){let e=new w_(o,t),i=[],n=[];function s(){i.length=0,n.length=0}function r(u){i.push(u)}function a(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function R_(o,t){let e=new WeakMap;function i(s,r=0){let a=e.get(s),l;return a===void 0?(l=new md(o,t),e.set(s,[l])):r>=a.length?(l=new md(o,t),a.push(l)):l=a[r],l}function n(){e=new WeakMap}return{get:i,dispose:n}}var ic=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nc=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function I_(o,t,e){let i=new vo,n=new Q,s=new Q,r=new de,a=new ic({depthPacking:Em}),l=new nc,c={},h=e.maxTextureSize,u={[yi]:Ye,[Ye]:yi,[ei]:ei},d=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:C_,fragmentShader:P_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ce;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Lt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kd;let m=this.type;this.render=function(S,R,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let M=o.getRenderTarget(),E=o.getActiveCubeFace(),D=o.getActiveMipmapLevel(),F=o.state;F.setBlending(ki),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Y=m!==Ji&&this.type===Ji,P=m===Ji&&this.type!==Ji;for(let N=0,k=S.length;N<k;N++){let K=S[N],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);let W=q.getFrameExtents();if(n.multiply(W),s.copy(q.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/W.x),n.x=s.x*W.x,q.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/W.y),n.y=s.y*W.y,q.mapSize.y=s.y)),q.map===null||Y===!0||P===!0){let J=this.type!==Ji?{minFilter:Ie,magFilter:Ie}:{};q.map!==null&&q.map.dispose(),q.map=new ii(n.x,n.y,J),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();let $=q.getViewportCount();for(let J=0;J<$;J++){let rt=q.getViewport(J);r.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),F.viewport(r),q.updateMatrices(K,J),i=q.getFrustum(),y(R,z,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Ji&&_(q,z),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,o.setRenderTarget(M,E,D)};function _(S,R){let z=t.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ii(n.x,n.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,o.setRenderTarget(S.mapPass),o.clear(),o.renderBufferDirect(R,null,z,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,o.setRenderTarget(S.map),o.clear(),o.renderBufferDirect(R,null,z,f,v,null)}function x(S,R,z,M){let E=null,D=z.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)E=D;else if(E=z.isPointLight===!0?l:a,o.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let F=E.uuid,Y=R.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let N=P[Y];N===void 0&&(N=E.clone(),P[Y]=N,R.addEventListener("dispose",w)),E=N}if(E.visible=R.visible,E.wireframe=R.wireframe,M===Ji?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=o.properties.get(E);F.light=z}return E}function y(S,R,z,M,E){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Ji)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld);let Y=t.update(S),P=S.material;if(Array.isArray(P)){let N=Y.groups;for(let k=0,K=N.length;k<K;k++){let q=N[k],W=P[q.materialIndex];if(W&&W.visible){let $=x(S,W,M,E);S.onBeforeShadow(o,S,R,z,Y,$,q),o.renderBufferDirect(z,null,Y,$,S,q),S.onAfterShadow(o,S,R,z,Y,$,q)}}}else if(P.visible){let N=x(S,P,M,E);S.onBeforeShadow(o,S,R,z,Y,N,null),o.renderBufferDirect(z,null,Y,N,S,null),S.onAfterShadow(o,S,R,z,Y,N,null)}}let F=S.children;for(let Y=0,P=F.length;Y<P;Y++)y(F[Y],R,z,M,E)}function w(S){S.target.removeEventListener("dispose",w);for(let z in c){let M=c[z],E=S.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function z_(o,t,e){let i=e.isWebGL2;function n(){let L=!1,dt=new de,ft=null,It=new de(0,0,0,0);return{setMask:function(wt){ft!==wt&&!L&&(o.colorMask(wt,wt,wt,wt),ft=wt)},setLocked:function(wt){L=wt},setClear:function(wt,pe,me,Oe,Ke){Ke===!0&&(wt*=Oe,pe*=Oe,me*=Oe),dt.set(wt,pe,me,Oe),It.equals(dt)===!1&&(o.clearColor(wt,pe,me,Oe),It.copy(dt))},reset:function(){L=!1,ft=null,It.set(-1,0,0,0)}}}function s(){let L=!1,dt=null,ft=null,It=null;return{setTest:function(wt){wt?Ut(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(wt){dt!==wt&&!L&&(o.depthMask(wt),dt=wt)},setFunc:function(wt){if(ft!==wt){switch(wt){case tm:o.depthFunc(o.NEVER);break;case em:o.depthFunc(o.ALWAYS);break;case im:o.depthFunc(o.LESS);break;case br:o.depthFunc(o.LEQUAL);break;case nm:o.depthFunc(o.EQUAL);break;case sm:o.depthFunc(o.GEQUAL);break;case om:o.depthFunc(o.GREATER);break;case rm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ft=wt}},setLocked:function(wt){L=wt},setClear:function(wt){It!==wt&&(o.clearDepth(wt),It=wt)},reset:function(){L=!1,dt=null,ft=null,It=null}}}function r(){let L=!1,dt=null,ft=null,It=null,wt=null,pe=null,me=null,Oe=null,Ke=null;return{setTest:function(ge){L||(ge?Ut(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(ge){dt!==ge&&!L&&(o.stencilMask(ge),dt=ge)},setFunc:function(ge,Je,Oi){(ft!==ge||It!==Je||wt!==Oi)&&(o.stencilFunc(ge,Je,Oi),ft=ge,It=Je,wt=Oi)},setOp:function(ge,Je,Oi){(pe!==ge||me!==Je||Oe!==Oi)&&(o.stencilOp(ge,Je,Oi),pe=ge,me=Je,Oe=Oi)},setLocked:function(ge){L=ge},setClear:function(ge){Ke!==ge&&(o.clearStencil(ge),Ke=ge)},reset:function(){L=!1,dt=null,ft=null,It=null,wt=null,pe=null,me=null,Oe=null,Ke=null}}}let a=new n,l=new s,c=new r,h=new WeakMap,u=new WeakMap,d={},f={},p=new WeakMap,v=[],g=null,m=!1,_=null,x=null,y=null,w=null,S=null,R=null,z=null,M=new st(0,0,0),E=0,D=!1,F=null,Y=null,P=null,N=null,k=null,K=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,$=o.getParameter(o.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),q=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=W>=2);let J=null,rt={},G=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),pt=new de().fromArray(G),Mt=new de().fromArray(tt);function vt(L,dt,ft,It){let wt=new Uint8Array(4),pe=o.createTexture();o.bindTexture(L,pe),o.texParameteri(L,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(L,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let me=0;me<ft;me++)i&&(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)?o.texImage3D(dt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(dt+me,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return pe}let Pt={};Pt[o.TEXTURE_2D]=vt(o.TEXTURE_2D,o.TEXTURE_2D,1),Pt[o.TEXTURE_CUBE_MAP]=vt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pt[o.TEXTURE_2D_ARRAY]=vt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Pt[o.TEXTURE_3D]=vt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ut(o.DEPTH_TEST),l.setFunc(br),mt(!1),T(Qh),Ut(o.CULL_FACE),X(ki);function Ut(L){d[L]!==!0&&(o.enable(L),d[L]=!0)}function bt(L){d[L]!==!1&&(o.disable(L),d[L]=!1)}function Dt(L,dt){return f[L]!==dt?(o.bindFramebuffer(L,dt),f[L]=dt,i&&(L===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=dt),L===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=dt)),!0):!1}function I(L,dt){let ft=v,It=!1;if(L)if(ft=p.get(dt),ft===void 0&&(ft=[],p.set(dt,ft)),L.isWebGLMultipleRenderTargets){let wt=L.texture;if(ft.length!==wt.length||ft[0]!==o.COLOR_ATTACHMENT0){for(let pe=0,me=wt.length;pe<me;pe++)ft[pe]=o.COLOR_ATTACHMENT0+pe;ft.length=wt.length,It=!0}}else ft[0]!==o.COLOR_ATTACHMENT0&&(ft[0]=o.COLOR_ATTACHMENT0,It=!0);else ft[0]!==o.BACK&&(ft[0]=o.BACK,It=!0);It&&(e.isWebGL2?o.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function lt(L){return g!==L?(o.useProgram(L),g=L,!0):!1}let Z={[Vn]:o.FUNC_ADD,[Bp]:o.FUNC_SUBTRACT,[kp]:o.FUNC_REVERSE_SUBTRACT};if(i)Z[iu]=o.MIN,Z[nu]=o.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(Z[iu]=L.MIN_EXT,Z[nu]=L.MAX_EXT)}let ot={[Hp]:o.ZERO,[Vp]:o.ONE,[Gp]:o.SRC_COLOR,[kl]:o.SRC_ALPHA,[Zp]:o.SRC_ALPHA_SATURATE,[Xp]:o.DST_COLOR,[qp]:o.DST_ALPHA,[Wp]:o.ONE_MINUS_SRC_COLOR,[Hl]:o.ONE_MINUS_SRC_ALPHA,[Yp]:o.ONE_MINUS_DST_COLOR,[$p]:o.ONE_MINUS_DST_ALPHA,[Kp]:o.CONSTANT_COLOR,[Jp]:o.ONE_MINUS_CONSTANT_COLOR,[jp]:o.CONSTANT_ALPHA,[Qp]:o.ONE_MINUS_CONSTANT_ALPHA};function X(L,dt,ft,It,wt,pe,me,Oe,Ke,ge){if(L===ki){m===!0&&(bt(o.BLEND),m=!1);return}if(m===!1&&(Ut(o.BLEND),m=!0),L!==Fp){if(L!==_||ge!==D){if((x!==Vn||S!==Vn)&&(o.blendEquation(o.FUNC_ADD),x=Vn,S=Vn),ge)switch(L){case bs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mr:o.blendFunc(o.ONE,o.ONE);break;case tu:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case eu:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case bs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mr:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case tu:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case eu:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,w=null,R=null,z=null,M.set(0,0,0),E=0,_=L,D=ge}return}wt=wt||dt,pe=pe||ft,me=me||It,(dt!==x||wt!==S)&&(o.blendEquationSeparate(Z[dt],Z[wt]),x=dt,S=wt),(ft!==y||It!==w||pe!==R||me!==z)&&(o.blendFuncSeparate(ot[ft],ot[It],ot[pe],ot[me]),y=ft,w=It,R=pe,z=me),(Oe.equals(M)===!1||Ke!==E)&&(o.blendColor(Oe.r,Oe.g,Oe.b,Ke),M.copy(Oe),E=Ke),_=L,D=!1}function Et(L,dt){L.side===ei?bt(o.CULL_FACE):Ut(o.CULL_FACE);let ft=L.side===Ye;dt&&(ft=!ft),mt(ft),L.blending===bs&&L.transparent===!1?X(ki):X(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let It=L.stencilWrite;c.setTest(It),It&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ut(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function mt(L){F!==L&&(L?o.frontFace(o.CW):o.frontFace(o.CCW),F=L)}function T(L){L!==Up?(Ut(o.CULL_FACE),L!==Y&&(L===Qh?o.cullFace(o.BACK):L===Op?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),Y=L}function b(L){L!==P&&(q&&o.lineWidth(L),P=L)}function O(L,dt,ft){L?(Ut(o.POLYGON_OFFSET_FILL),(N!==dt||k!==ft)&&(o.polygonOffset(dt,ft),N=dt,k=ft)):bt(o.POLYGON_OFFSET_FILL)}function nt(L){L?Ut(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function et(L){L===void 0&&(L=o.TEXTURE0+K-1),J!==L&&(o.activeTexture(L),J=L)}function j(L,dt,ft){ft===void 0&&(J===null?ft=o.TEXTURE0+K-1:ft=J);let It=rt[ft];It===void 0&&(It={type:void 0,texture:void 0},rt[ft]=It),(It.type!==L||It.texture!==dt)&&(J!==ft&&(o.activeTexture(ft),J=ft),o.bindTexture(L,dt||Pt[L]),It.type=L,It.texture=dt)}function yt(){let L=rt[J];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ut(){try{o.compressedTexImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{o.texSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(){try{o.texSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Zt(){try{o.texStorage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{o.texStorage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{o.texImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{o.texImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(L){pt.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),pt.copy(L))}function oe(L){Mt.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),Mt.copy(L))}function Se(L,dt){let ft=u.get(dt);ft===void 0&&(ft=new WeakMap,u.set(dt,ft));let It=ft.get(L);It===void 0&&(It=o.getUniformBlockIndex(dt,L.name),ft.set(L,It))}function $t(L,dt){let It=u.get(dt).get(L);h.get(dt)!==It&&(o.uniformBlockBinding(dt,It,L.__bindingPointIndex),h.set(dt,It))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),i===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},J=null,rt={},f={},p=new WeakMap,v=[],g=null,m=!1,_=null,x=null,y=null,w=null,S=null,R=null,z=null,M=new st(0,0,0),E=0,D=!1,F=null,Y=null,P=null,N=null,k=null,pt.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ut,disable:bt,bindFramebuffer:Dt,drawBuffers:I,useProgram:lt,setBlending:X,setMaterial:Et,setFlipSided:mt,setCullFace:T,setLineWidth:b,setPolygonOffset:O,setScissorTest:nt,activeTexture:et,bindTexture:j,unbindTexture:yt,compressedTexImage2D:ut,compressedTexImage3D:xt,texImage2D:Tt,texImage3D:_t,updateUBOMapping:Se,uniformBlockBinding:$t,texStorage2D:Zt,texStorage3D:Nt,texSubImage2D:At,texSubImage3D:Bt,compressedTexSubImage2D:it,compressedTexSubImage3D:ee,scissor:Vt,viewport:oe,reset:ct}}function L_(o,t,e,i,n,s,r){let a=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,b){return f?new OffscreenCanvas(T,b):go("canvas")}function v(T,b,O,nt){let et=1;if((T.width>nt||T.height>nt)&&(et=nt/Math.max(T.width,T.height)),et<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let j=b?Cr:Math.floor,yt=j(et*T.width),ut=j(et*T.height);u===void 0&&(u=p(yt,ut));let xt=O?p(yt,ut):u;return xt.width=yt,xt.height=ut,xt.getContext("2d").drawImage(T,0,0,yt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+yt+"x"+ut+")."),xt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function g(T){return ql(T.width)&&ql(T.height)}function m(T){return a?!1:T.wrapS!==ci||T.wrapT!==ci||T.minFilter!==Ie&&T.minFilter!==ti}function _(T,b){return T.generateMipmaps&&b&&T.minFilter!==Ie&&T.minFilter!==ti}function x(T){o.generateMipmap(T)}function y(T,b,O,nt,et=!1){if(a===!1)return b;if(T!==null){if(o[T]!==void 0)return o[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=b;if(b===o.RED&&(O===o.FLOAT&&(j=o.R32F),O===o.HALF_FLOAT&&(j=o.R16F),O===o.UNSIGNED_BYTE&&(j=o.R8)),b===o.RED_INTEGER&&(O===o.UNSIGNED_BYTE&&(j=o.R8UI),O===o.UNSIGNED_SHORT&&(j=o.R16UI),O===o.UNSIGNED_INT&&(j=o.R32UI),O===o.BYTE&&(j=o.R8I),O===o.SHORT&&(j=o.R16I),O===o.INT&&(j=o.R32I)),b===o.RG&&(O===o.FLOAT&&(j=o.RG32F),O===o.HALF_FLOAT&&(j=o.RG16F),O===o.UNSIGNED_BYTE&&(j=o.RG8)),b===o.RGBA){let yt=et?Tr:Qt.getTransfer(nt);O===o.FLOAT&&(j=o.RGBA32F),O===o.HALF_FLOAT&&(j=o.RGBA16F),O===o.UNSIGNED_BYTE&&(j=yt===ce?o.SRGB8_ALPHA8:o.RGBA8),O===o.UNSIGNED_SHORT_4_4_4_4&&(j=o.RGBA4),O===o.UNSIGNED_SHORT_5_5_5_1&&(j=o.RGB5_A1)}return(j===o.R16F||j===o.R32F||j===o.RG16F||j===o.RG32F||j===o.RGBA16F||j===o.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function w(T,b,O){return _(T,O)===!0||T.isFramebufferTexture&&T.minFilter!==Ie&&T.minFilter!==ti?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function S(T){return T===Ie||T===Sr||T===oo?o.NEAREST:o.LINEAR}function R(T){let b=T.target;b.removeEventListener("dispose",R),M(b),b.isVideoTexture&&h.delete(b)}function z(T){let b=T.target;b.removeEventListener("dispose",z),D(b)}function M(T){let b=i.get(T);if(b.__webglInit===void 0)return;let O=T.source,nt=d.get(O);if(nt){let et=nt[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(T),Object.keys(nt).length===0&&d.delete(O)}i.remove(T)}function E(T){let b=i.get(T);o.deleteTexture(b.__webglTexture);let O=T.source,nt=d.get(O);delete nt[b.__cacheKey],r.memory.textures--}function D(T){let b=T.texture,O=i.get(T),nt=i.get(b);if(nt.__webglTexture!==void 0&&(o.deleteTexture(nt.__webglTexture),r.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(O.__webglFramebuffer[et]))for(let j=0;j<O.__webglFramebuffer[et].length;j++)o.deleteFramebuffer(O.__webglFramebuffer[et][j]);else o.deleteFramebuffer(O.__webglFramebuffer[et]);O.__webglDepthbuffer&&o.deleteRenderbuffer(O.__webglDepthbuffer[et])}else{if(Array.isArray(O.__webglFramebuffer))for(let et=0;et<O.__webglFramebuffer.length;et++)o.deleteFramebuffer(O.__webglFramebuffer[et]);else o.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&o.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&o.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let et=0;et<O.__webglColorRenderbuffer.length;et++)O.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(O.__webglColorRenderbuffer[et]);O.__webglDepthRenderbuffer&&o.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let et=0,j=b.length;et<j;et++){let yt=i.get(b[et]);yt.__webglTexture&&(o.deleteTexture(yt.__webglTexture),r.memory.textures--),i.remove(b[et])}i.remove(b),i.remove(T)}let F=0;function Y(){F=0}function P(){let T=F;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),F+=1,T}function N(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function k(T,b){let O=i.get(T);if(T.isVideoTexture&&Et(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){let nt=T.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(O,T,b);return}}e.bindTexture(o.TEXTURE_2D,O.__webglTexture,o.TEXTURE0+b)}function K(T,b){let O=i.get(T);if(T.version>0&&O.__version!==T.version){pt(O,T,b);return}e.bindTexture(o.TEXTURE_2D_ARRAY,O.__webglTexture,o.TEXTURE0+b)}function q(T,b){let O=i.get(T);if(T.version>0&&O.__version!==T.version){pt(O,T,b);return}e.bindTexture(o.TEXTURE_3D,O.__webglTexture,o.TEXTURE0+b)}function W(T,b){let O=i.get(T);if(T.version>0&&O.__version!==T.version){Mt(O,T,b);return}e.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+b)}let $={[en]:o.REPEAT,[ci]:o.CLAMP_TO_EDGE,[mo]:o.MIRRORED_REPEAT},J={[Ie]:o.NEAREST,[Sr]:o.NEAREST_MIPMAP_NEAREST,[oo]:o.NEAREST_MIPMAP_LINEAR,[ti]:o.LINEAR,[Oc]:o.LINEAR_MIPMAP_NEAREST,[xn]:o.LINEAR_MIPMAP_LINEAR},rt={[Am]:o.NEVER,[zm]:o.ALWAYS,[wm]:o.LESS,[Qd]:o.LEQUAL,[Rm]:o.EQUAL,[Im]:o.GEQUAL,[Cm]:o.GREATER,[Pm]:o.NOTEQUAL};function G(T,b,O){if(O?(o.texParameteri(T,o.TEXTURE_WRAP_S,$[b.wrapS]),o.texParameteri(T,o.TEXTURE_WRAP_T,$[b.wrapT]),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,$[b.wrapR]),o.texParameteri(T,o.TEXTURE_MAG_FILTER,J[b.magFilter]),o.texParameteri(T,o.TEXTURE_MIN_FILTER,J[b.minFilter])):(o.texParameteri(T,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(T,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(b.wrapS!==ci||b.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(T,o.TEXTURE_MAG_FILTER,S(b.magFilter)),o.texParameteri(T,o.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==Ie&&b.minFilter!==ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(o.texParameteri(T,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(T,o.TEXTURE_COMPARE_FUNC,rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let nt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ie||b.minFilter!==oo&&b.minFilter!==xn||b.type===Qi&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===Di&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(o.texParameterf(T,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function tt(T,b){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",R));let nt=b.source,et=d.get(nt);et===void 0&&(et={},d.set(nt,et));let j=N(b);if(j!==T.__cacheKey){et[j]===void 0&&(et[j]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,O=!0),et[j].usedTimes++;let yt=et[T.__cacheKey];yt!==void 0&&(et[T.__cacheKey].usedTimes--,yt.usedTimes===0&&E(b)),T.__cacheKey=j,T.__webglTexture=et[j].texture}return O}function pt(T,b,O){let nt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=o.TEXTURE_3D);let et=tt(T,b),j=b.source;e.bindTexture(nt,T.__webglTexture,o.TEXTURE0+O);let yt=i.get(j);if(j.version!==yt.__version||et===!0){e.activeTexture(o.TEXTURE0+O);let ut=Qt.getPrimaries(Qt.workingColorSpace),xt=b.colorSpace===xi?null:Qt.getPrimaries(b.colorSpace),At=b.colorSpace===xi||ut===xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Bt=m(b)&&g(b.image)===!1,it=v(b.image,Bt,!1,n.maxTextureSize);it=mt(b,it);let ee=g(it)||a,Zt=s.convert(b.format,b.colorSpace),Nt=s.convert(b.type),Tt=y(b.internalFormat,Zt,Nt,b.colorSpace,b.isVideoTexture);G(nt,b,ee);let _t,Vt=b.mipmaps,oe=a&&b.isVideoTexture!==!0&&Tt!==Zd,Se=yt.__version===void 0||et===!0,$t=w(b,it,ee);if(b.isDepthTexture)Tt=o.DEPTH_COMPONENT,a?b.type===Qi?Tt=o.DEPTH_COMPONENT32F:b.type===pn?Tt=o.DEPTH_COMPONENT24:b.type===Wn?Tt=o.DEPTH24_STENCIL8:Tt=o.DEPTH_COMPONENT16:b.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===qn&&Tt===o.DEPTH_COMPONENT&&b.type!==Fc&&b.type!==pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=pn,Nt=s.convert(b.type)),b.format===ws&&Tt===o.DEPTH_COMPONENT&&(Tt=o.DEPTH_STENCIL,b.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Wn,Nt=s.convert(b.type))),Se&&(oe?e.texStorage2D(o.TEXTURE_2D,1,Tt,it.width,it.height):e.texImage2D(o.TEXTURE_2D,0,Tt,it.width,it.height,0,Zt,Nt,null));else if(b.isDataTexture)if(Vt.length>0&&ee){oe&&Se&&e.texStorage2D(o.TEXTURE_2D,$t,Tt,Vt[0].width,Vt[0].height);for(let ct=0,L=Vt.length;ct<L;ct++)_t=Vt[ct],oe?e.texSubImage2D(o.TEXTURE_2D,ct,0,0,_t.width,_t.height,Zt,Nt,_t.data):e.texImage2D(o.TEXTURE_2D,ct,Tt,_t.width,_t.height,0,Zt,Nt,_t.data);b.generateMipmaps=!1}else oe?(Se&&e.texStorage2D(o.TEXTURE_2D,$t,Tt,it.width,it.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,it.width,it.height,Zt,Nt,it.data)):e.texImage2D(o.TEXTURE_2D,0,Tt,it.width,it.height,0,Zt,Nt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){oe&&Se&&e.texStorage3D(o.TEXTURE_2D_ARRAY,$t,Tt,Vt[0].width,Vt[0].height,it.depth);for(let ct=0,L=Vt.length;ct<L;ct++)_t=Vt[ct],b.format!==vi?Zt!==null?oe?e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,_t.width,_t.height,it.depth,Zt,_t.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,Tt,_t.width,_t.height,it.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,_t.width,_t.height,it.depth,Zt,Nt,_t.data):e.texImage3D(o.TEXTURE_2D_ARRAY,ct,Tt,_t.width,_t.height,it.depth,0,Zt,Nt,_t.data)}else{oe&&Se&&e.texStorage2D(o.TEXTURE_2D,$t,Tt,Vt[0].width,Vt[0].height);for(let ct=0,L=Vt.length;ct<L;ct++)_t=Vt[ct],b.format!==vi?Zt!==null?oe?e.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,_t.width,_t.height,Zt,_t.data):e.compressedTexImage2D(o.TEXTURE_2D,ct,Tt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage2D(o.TEXTURE_2D,ct,0,0,_t.width,_t.height,Zt,Nt,_t.data):e.texImage2D(o.TEXTURE_2D,ct,Tt,_t.width,_t.height,0,Zt,Nt,_t.data)}else if(b.isDataArrayTexture)oe?(Se&&e.texStorage3D(o.TEXTURE_2D_ARRAY,$t,Tt,it.width,it.height,it.depth),e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Zt,Nt,it.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,Tt,it.width,it.height,it.depth,0,Zt,Nt,it.data);else if(b.isData3DTexture)oe?(Se&&e.texStorage3D(o.TEXTURE_3D,$t,Tt,it.width,it.height,it.depth),e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Zt,Nt,it.data)):e.texImage3D(o.TEXTURE_3D,0,Tt,it.width,it.height,it.depth,0,Zt,Nt,it.data);else if(b.isFramebufferTexture){if(Se)if(oe)e.texStorage2D(o.TEXTURE_2D,$t,Tt,it.width,it.height);else{let ct=it.width,L=it.height;for(let dt=0;dt<$t;dt++)e.texImage2D(o.TEXTURE_2D,dt,Tt,ct,L,0,Zt,Nt,null),ct>>=1,L>>=1}}else if(Vt.length>0&&ee){oe&&Se&&e.texStorage2D(o.TEXTURE_2D,$t,Tt,Vt[0].width,Vt[0].height);for(let ct=0,L=Vt.length;ct<L;ct++)_t=Vt[ct],oe?e.texSubImage2D(o.TEXTURE_2D,ct,0,0,Zt,Nt,_t):e.texImage2D(o.TEXTURE_2D,ct,Tt,Zt,Nt,_t);b.generateMipmaps=!1}else oe?(Se&&e.texStorage2D(o.TEXTURE_2D,$t,Tt,it.width,it.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,Zt,Nt,it)):e.texImage2D(o.TEXTURE_2D,0,Tt,Zt,Nt,it);_(b,ee)&&x(nt),yt.__version=j.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Mt(T,b,O){if(b.image.length!==6)return;let nt=tt(T,b),et=b.source;e.bindTexture(o.TEXTURE_CUBE_MAP,T.__webglTexture,o.TEXTURE0+O);let j=i.get(et);if(et.version!==j.__version||nt===!0){e.activeTexture(o.TEXTURE0+O);let yt=Qt.getPrimaries(Qt.workingColorSpace),ut=b.colorSpace===xi?null:Qt.getPrimaries(b.colorSpace),xt=b.colorSpace===xi||yt===ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let At=b.isCompressedTexture||b.image[0].isCompressedTexture,Bt=b.image[0]&&b.image[0].isDataTexture,it=[];for(let ct=0;ct<6;ct++)!At&&!Bt?it[ct]=v(b.image[ct],!1,!0,n.maxCubemapSize):it[ct]=Bt?b.image[ct].image:b.image[ct],it[ct]=mt(b,it[ct]);let ee=it[0],Zt=g(ee)||a,Nt=s.convert(b.format,b.colorSpace),Tt=s.convert(b.type),_t=y(b.internalFormat,Nt,Tt,b.colorSpace),Vt=a&&b.isVideoTexture!==!0,oe=j.__version===void 0||nt===!0,Se=w(b,ee,Zt);G(o.TEXTURE_CUBE_MAP,b,Zt);let $t;if(At){Vt&&oe&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Se,_t,ee.width,ee.height);for(let ct=0;ct<6;ct++){$t=it[ct].mipmaps;for(let L=0;L<$t.length;L++){let dt=$t[L];b.format!==vi?Nt!==null?Vt?e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,_t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,dt.width,dt.height,Nt,Tt,dt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,_t,dt.width,dt.height,0,Nt,Tt,dt.data)}}}else{$t=b.mipmaps,Vt&&oe&&($t.length>0&&Se++,e.texStorage2D(o.TEXTURE_CUBE_MAP,Se,_t,it[0].width,it[0].height));for(let ct=0;ct<6;ct++)if(Bt){Vt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,it[ct].width,it[ct].height,Nt,Tt,it[ct].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,_t,it[ct].width,it[ct].height,0,Nt,Tt,it[ct].data);for(let L=0;L<$t.length;L++){let ft=$t[L].image[ct].image;Vt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,ft.width,ft.height,Nt,Tt,ft.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,_t,ft.width,ft.height,0,Nt,Tt,ft.data)}}else{Vt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Nt,Tt,it[ct]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,_t,Nt,Tt,it[ct]);for(let L=0;L<$t.length;L++){let dt=$t[L];Vt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,Nt,Tt,dt.image[ct]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,_t,Nt,Tt,dt.image[ct])}}}_(b,Zt)&&x(o.TEXTURE_CUBE_MAP),j.__version=et.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function vt(T,b,O,nt,et,j){let yt=s.convert(O.format,O.colorSpace),ut=s.convert(O.type),xt=y(O.internalFormat,yt,ut,O.colorSpace);if(!i.get(b).__hasExternalTextures){let Bt=Math.max(1,b.width>>j),it=Math.max(1,b.height>>j);et===o.TEXTURE_3D||et===o.TEXTURE_2D_ARRAY?e.texImage3D(et,j,xt,Bt,it,b.depth,0,yt,ut,null):e.texImage2D(et,j,xt,Bt,it,0,yt,ut,null)}e.bindFramebuffer(o.FRAMEBUFFER,T),X(b)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,nt,et,i.get(O).__webglTexture,0,ot(b)):(et===o.TEXTURE_2D||et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,nt,et,i.get(O).__webglTexture,j),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(T,b,O){if(o.bindRenderbuffer(o.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let nt=a===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(O||X(b)){let et=b.depthTexture;et&&et.isDepthTexture&&(et.type===Qi?nt=o.DEPTH_COMPONENT32F:et.type===pn&&(nt=o.DEPTH_COMPONENT24));let j=ot(b);X(b)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,j,nt,b.width,b.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,j,nt,b.width,b.height)}else o.renderbufferStorage(o.RENDERBUFFER,nt,b.width,b.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){let nt=ot(b);O&&X(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,nt,o.DEPTH24_STENCIL8,b.width,b.height):X(b)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,nt,o.DEPTH24_STENCIL8,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,T)}else{let nt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let et=0;et<nt.length;et++){let j=nt[et],yt=s.convert(j.format,j.colorSpace),ut=s.convert(j.type),xt=y(j.internalFormat,yt,ut,j.colorSpace),At=ot(b);O&&X(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,xt,b.width,b.height):X(b)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,xt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,xt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ut(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);let nt=i.get(b.depthTexture).__webglTexture,et=ot(b);if(b.depthTexture.format===qn)X(b)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,nt,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,nt,0);else if(b.depthTexture.format===ws)X(b)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,nt,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function bt(T){let b=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ut(b.__webglFramebuffer,T)}else if(O){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]=o.createRenderbuffer(),Pt(b.__webglDepthbuffer[nt],T,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Pt(b.__webglDepthbuffer,T,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(T,b,O){let nt=i.get(T);b!==void 0&&vt(nt.__webglFramebuffer,T,T.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),O!==void 0&&bt(T)}function I(T){let b=T.texture,O=i.get(T),nt=i.get(b);T.addEventListener("dispose",z),T.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture()),nt.__version=b.version,r.memory.textures++);let et=T.isWebGLCubeRenderTarget===!0,j=T.isWebGLMultipleRenderTargets===!0,yt=g(T)||a;if(et){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let xt=0;xt<b.mipmaps.length;xt++)O.__webglFramebuffer[ut][xt]=o.createFramebuffer()}else O.__webglFramebuffer[ut]=o.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)O.__webglFramebuffer[ut]=o.createFramebuffer()}else O.__webglFramebuffer=o.createFramebuffer();if(j)if(n.drawBuffers){let ut=T.texture;for(let xt=0,At=ut.length;xt<At;xt++){let Bt=i.get(ut[xt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&X(T)===!1){let ut=j?b:[b];O.__webglMultisampledFramebuffer=o.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xt=0;xt<ut.length;xt++){let At=ut[xt];O.__webglColorRenderbuffer[xt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,O.__webglColorRenderbuffer[xt]);let Bt=s.convert(At.format,At.colorSpace),it=s.convert(At.type),ee=y(At.internalFormat,Bt,it,At.colorSpace,T.isXRRenderTarget===!0),Zt=ot(T);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,ee,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.RENDERBUFFER,O.__webglColorRenderbuffer[xt])}o.bindRenderbuffer(o.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=o.createRenderbuffer(),Pt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(et){e.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture),G(o.TEXTURE_CUBE_MAP,b,yt);for(let ut=0;ut<6;ut++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)vt(O.__webglFramebuffer[ut][xt],T,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else vt(O.__webglFramebuffer[ut],T,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);_(b,yt)&&x(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){let ut=T.texture;for(let xt=0,At=ut.length;xt<At;xt++){let Bt=ut[xt],it=i.get(Bt);e.bindTexture(o.TEXTURE_2D,it.__webglTexture),G(o.TEXTURE_2D,Bt,yt),vt(O.__webglFramebuffer,T,Bt,o.COLOR_ATTACHMENT0+xt,o.TEXTURE_2D,0),_(Bt,yt)&&x(o.TEXTURE_2D)}e.unbindTexture()}else{let ut=o.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ut=T.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,nt.__webglTexture),G(ut,b,yt),a&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)vt(O.__webglFramebuffer[xt],T,b,o.COLOR_ATTACHMENT0,ut,xt);else vt(O.__webglFramebuffer,T,b,o.COLOR_ATTACHMENT0,ut,0);_(b,yt)&&x(ut),e.unbindTexture()}T.depthBuffer&&bt(T)}function lt(T){let b=g(T)||a,O=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let nt=0,et=O.length;nt<et;nt++){let j=O[nt];if(_(j,b)){let yt=T.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,ut=i.get(j).__webglTexture;e.bindTexture(yt,ut),x(yt),e.unbindTexture()}}}function Z(T){if(a&&T.samples>0&&X(T)===!1){let b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],O=T.width,nt=T.height,et=o.COLOR_BUFFER_BIT,j=[],yt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=i.get(T),xt=T.isWebGLMultipleRenderTargets===!0;if(xt)for(let At=0;At<b.length;At++)e.bindFramebuffer(o.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let At=0;At<b.length;At++){j.push(o.COLOR_ATTACHMENT0+At),T.depthBuffer&&j.push(yt);let Bt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Bt===!1&&(T.depthBuffer&&(et|=o.DEPTH_BUFFER_BIT),T.stencilBuffer&&(et|=o.STENCIL_BUFFER_BIT)),xt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ut.__webglColorRenderbuffer[At]),Bt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[yt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[yt])),xt){let it=i.get(b[At]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,it,0)}o.blitFramebuffer(0,0,O,nt,0,0,O,nt,et,o.NEAREST),c&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,j)}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),xt)for(let At=0;At<b.length;At++){e.bindFramebuffer(o.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,ut.__webglColorRenderbuffer[At]);let Bt=i.get(b[At]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,Bt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function ot(T){return Math.min(n.maxSamples,T.samples)}function X(T){let b=i.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(T){let b=r.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function mt(T,b){let O=T.colorSpace,nt=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Wl||O!==De&&O!==xi&&(Qt.getTransfer(O)===ce?a===!1?t.has("EXT_sRGB")===!0&&nt===vi?(T.format=Wl,T.minFilter=ti,T.generateMipmaps=!1):b=Pr.sRGBToLinear(b):(nt!==vi||et!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}this.allocateTextureUnit=P,this.resetTextureUnits=Y,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Dt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=X}function D_(o,t,e){let i=e.isWebGL2;function n(s,r=xi){let a,l=Qt.getTransfer(r);if(s===vn)return o.UNSIGNED_BYTE;if(s===Wd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===qd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===um)return o.BYTE;if(s===dm)return o.SHORT;if(s===Fc)return o.UNSIGNED_SHORT;if(s===Gd)return o.INT;if(s===pn)return o.UNSIGNED_INT;if(s===Qi)return o.FLOAT;if(s===Di)return i?o.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fm)return o.ALPHA;if(s===vi)return o.RGBA;if(s===pm)return o.LUMINANCE;if(s===mm)return o.LUMINANCE_ALPHA;if(s===qn)return o.DEPTH_COMPONENT;if(s===ws)return o.DEPTH_STENCIL;if(s===Wl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===gm)return o.RED;if(s===$d)return o.RED_INTEGER;if(s===vm)return o.RG;if(s===Xd)return o.RG_INTEGER;if(s===Yd)return o.RGBA_INTEGER;if(s===sl||s===ol||s===rl||s===al)if(l===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ol)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===rl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===al)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ou||s===ru||s===au||s===lu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ou)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ru)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===au)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cu||s===hu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===cu)return l===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===hu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===uu||s===du||s===fu||s===pu||s===mu||s===gu||s===vu||s===xu||s===_u||s===yu||s===Mu||s===bu||s===Su||s===Eu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===uu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===du)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_u)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Su)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Eu)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ll||s===Tu||s===Au)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===ll)return l===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Au)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xm||s===wu||s===Ru||s===Cu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===ll)return a.COMPRESSED_RED_RGTC1_EXT;if(s===wu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ru)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wn?i?o.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:n}}var sc=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},te=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},N_={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},oc=class extends nn{constructor(t,e){super();let i=this,n=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=e.getContextAttributes(),g=null,m=null,_=[],x=[],y=new Q,w=null,S=new Le;S.layers.enable(1),S.viewport=new de;let R=new Le;R.layers.enable(2),R.viewport=new de;let z=[S,R],M=new sc;M.layers.enable(1),M.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let tt=_[G];return tt===void 0&&(tt=new co,_[G]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(G){let tt=_[G];return tt===void 0&&(tt=new co,_[G]=tt),tt.getGripSpace()},this.getHand=function(G){let tt=_[G];return tt===void 0&&(tt=new co,_[G]=tt),tt.getHandSpace()};function F(G){let tt=x.indexOf(G.inputSource);if(tt===-1)return;let pt=_[tt];pt!==void 0&&(pt.update(G.inputSource,G.frame,c||r),pt.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",P);for(let G=0;G<_.length;G++){let tt=x[G];tt!==null&&(x[G]=null,_[G].disconnect(tt))}E=null,D=null,t.setRenderTarget(g),f=null,d=null,u=null,n=null,m=null,rt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(g=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(y),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let tt={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,tt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new ii(f.framebufferWidth,f.framebufferHeight,{format:vi,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let tt=null,pt=null,Mt=null;v.depth&&(Mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=v.stencil?ws:qn,pt=v.stencil?Wn:pn);let vt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(vt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),m=new ii(d.textureWidth,d.textureHeight,{format:vi,type:vn,depthTexture:new Br(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let Pt=t.properties.get(m);Pt.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(a),rt.setContext(n),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function P(G){for(let tt=0;tt<G.removed.length;tt++){let pt=G.removed[tt],Mt=x.indexOf(pt);Mt>=0&&(x[Mt]=null,_[Mt].disconnect(pt))}for(let tt=0;tt<G.added.length;tt++){let pt=G.added[tt],Mt=x.indexOf(pt);if(Mt===-1){for(let Pt=0;Pt<_.length;Pt++)if(Pt>=x.length){x.push(pt),Mt=Pt;break}else if(x[Pt]===null){x[Pt]=pt,Mt=Pt;break}if(Mt===-1)break}let vt=_[Mt];vt&&vt.connect(pt)}}let N=new C,k=new C;function K(G,tt,pt){N.setFromMatrixPosition(tt.matrixWorld),k.setFromMatrixPosition(pt.matrixWorld);let Mt=N.distanceTo(k),vt=tt.projectionMatrix.elements,Pt=pt.projectionMatrix.elements,Ut=vt[14]/(vt[10]-1),bt=vt[14]/(vt[10]+1),Dt=(vt[9]+1)/vt[5],I=(vt[9]-1)/vt[5],lt=(vt[8]-1)/vt[0],Z=(Pt[8]+1)/Pt[0],ot=Ut*lt,X=Ut*Z,Et=Mt/(-lt+Z),mt=Et*-lt;tt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(mt),G.translateZ(Et),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let T=Ut+Et,b=bt+Et,O=ot-mt,nt=X+(Mt-mt),et=Dt*bt/b*T,j=I*bt/b*T;G.projectionMatrix.makePerspective(O,nt,et,j,T,b),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function q(G,tt){tt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(tt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;M.near=R.near=S.near=G.near,M.far=R.far=S.far=G.far,(E!==M.near||D!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,D=M.far);let tt=G.parent,pt=M.cameras;q(M,tt);for(let Mt=0;Mt<pt.length;Mt++)q(pt[Mt],tt);pt.length===2?K(M,S,R):M.projectionMatrix.copy(S.projectionMatrix),W(G,M,tt)};function W(G,tt,pt){pt===null?G.matrix.copy(tt.matrixWorld):(G.matrix.copy(pt.matrixWorld),G.matrix.invert(),G.matrix.multiply(tt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(tt.projectionMatrix),G.projectionMatrixInverse.copy(tt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Cs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let $=null;function J(G,tt){if(h=tt.getViewerPose(c||r),p=tt,h!==null){let pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(m,f.framebuffer),t.setRenderTarget(m));let Mt=!1;pt.length!==M.cameras.length&&(M.cameras.length=0,Mt=!0);for(let vt=0;vt<pt.length;vt++){let Pt=pt[vt],Ut=null;if(f!==null)Ut=f.getViewport(Pt);else{let Dt=u.getViewSubImage(d,Pt);Ut=Dt.viewport,vt===0&&(t.setRenderTargetTextures(m,Dt.colorTexture,d.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(m))}let bt=z[vt];bt===void 0&&(bt=new Le,bt.layers.enable(vt),bt.viewport=new de,z[vt]=bt),bt.matrix.fromArray(Pt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Pt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),vt===0&&(M.matrix.copy(bt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Mt===!0&&M.cameras.push(bt)}}for(let pt=0;pt<_.length;pt++){let Mt=x[pt],vt=_[pt];Mt!==null&&vt!==void 0&&vt.update(Mt,tt,c||r)}$&&$(G,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),p=null}let rt=new of;rt.setAnimationLoop(J),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}};function U_(o,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,sf(o)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,_,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ye&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ye&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let x=o._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*x,e(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),t.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ye&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function O_(o,t,e,i){let n={},s={},r=[],a=e.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){let y=x.program;i.uniformBlockBinding(_,y)}function c(_,x){let y=n[_.id];y===void 0&&(p(_),y=h(_),n[_.id]=y,_.addEventListener("dispose",g));let w=x.program;i.updateUBOMapping(_,w);let S=t.render.frame;s[_.id]!==S&&(d(_),s[_.id]=S)}function h(_){let x=u();_.__bindingPointIndex=x;let y=o.createBuffer(),w=_.__size,S=_.usage;return o.bindBuffer(o.UNIFORM_BUFFER,y),o.bufferData(o.UNIFORM_BUFFER,w,S),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,x,y),y}function u(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=n[_.id],y=_.uniforms,w=_.__cache;o.bindBuffer(o.UNIFORM_BUFFER,x);for(let S=0,R=y.length;S<R;S++){let z=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,E=z.length;M<E;M++){let D=z[M];if(f(D,S,M,w)===!0){let F=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value],P=0;for(let N=0;N<Y.length;N++){let k=Y[N],K=v(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,F+P,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,P),P+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,F,D.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(_,x,y,w){let S=_.value,R=x+"_"+y;if(w[R]===void 0)return typeof S=="number"||typeof S=="boolean"?w[R]=S:w[R]=S.clone(),!0;{let z=w[R];if(typeof S=="number"||typeof S=="boolean"){if(z!==S)return w[R]=S,!0}else if(z.equals(S)===!1)return z.copy(S),!0}return!1}function p(_){let x=_.uniforms,y=0,w=16;for(let R=0,z=x.length;R<z;R++){let M=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,D=M.length;E<D;E++){let F=M[E],Y=Array.isArray(F.value)?F.value:[F.value];for(let P=0,N=Y.length;P<N;P++){let k=Y[P],K=v(k),q=y%w;q!==0&&w-q<K.boundary&&(y+=w-q),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=K.storage}}}let S=y%w;return S>0&&(y+=w-S),_.__size=y,_.__cache={},this}function v(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){let x=_.target;x.removeEventListener("dispose",g);let y=r.indexOf(x.__bindingPointIndex);r.splice(y,1),o.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function m(){for(let _ in n)o.deleteBuffer(n[_]);r=[],n={},s={}}return{bind:l,update:c,dispose:m}}var xo=class{constructor(t={}){let{canvas:e=Xm(),context:i=null,depth:n=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=r;let f=new Uint32Array(4),p=new Int32Array(4),v=null,g=null,m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this._useLegacyLights=!1,this.toneMapping=gn,this.toneMappingExposure=1;let x=this,y=!1,w=0,S=0,R=null,z=-1,M=null,E=new de,D=new de,F=null,Y=new st(0),P=0,N=e.width,k=e.height,K=1,q=null,W=null,$=new de(0,0,N,k),J=new de(0,0,N,k),rt=!1,G=new vo,tt=!1,pt=!1,Mt=null,vt=new qt,Pt=new Q,Ut=new C,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Dt(){return R===null?K:1}let I=i;function lt(A,U){for(let H=0;H<A.length;H++){let V=A[H],B=e.getContext(V,U);if(B!==null)return B}return null}try{let A={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",dt,!1),I===null){let U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),I=lt(U,A),I===null)throw lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Z,ot,X,Et,mt,T,b,O,nt,et,j,yt,ut,xt,At,Bt,it,ee,Zt,Nt,Tt,_t,Vt,oe;function Se(){Z=new ix(I),ot=new Kv(I,Z,t),Z.init(ot),_t=new D_(I,Z,ot),X=new z_(I,Z,ot),Et=new ox(I),mt=new y_,T=new L_(I,Z,X,mt,ot,_t,Et),b=new jv(x),O=new ex(x),nt=new fg(I,ot),Vt=new Yv(I,Z,nt,ot),et=new nx(I,nt,Et,Vt),j=new cx(I,et,nt,Et),Zt=new lx(I,ot,T),Bt=new Jv(mt),yt=new __(x,b,O,Z,ot,Vt,Bt),ut=new U_(x,mt),xt=new b_,At=new R_(Z,ot),ee=new Xv(x,b,O,X,j,d,l),it=new I_(x,j,ot),oe=new O_(I,Et,ot,X),Nt=new Zv(I,Z,Et,ot),Tt=new sx(I,Z,Et,ot),Et.programs=yt.programs,x.capabilities=ot,x.extensions=Z,x.properties=mt,x.renderLists=xt,x.shadowMap=it,x.state=X,x.info=Et}Se();let $t=new oc(x,I);this.xr=$t,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(N,k,!1))},this.getSize=function(A){return A.set(N,k)},this.setSize=function(A,U,H=!0){if($t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,k=U,e.width=Math.floor(A*K),e.height=Math.floor(U*K),H===!0&&(e.style.width=A+"px",e.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(N*K,k*K).floor()},this.setDrawingBufferSize=function(A,U,H){N=A,k=U,K=H,e.width=Math.floor(A*H),e.height=Math.floor(U*H),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,U,H,V){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,U,H,V),X.viewport(E.copy($).multiplyScalar(K).floor())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,U,H,V){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,U,H,V),X.scissor(D.copy(J).multiplyScalar(K).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(A){X.setScissorTest(rt=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(A=!0,U=!0,H=!0){let V=0;if(A){let B=!1;if(R!==null){let gt=R.texture.format;B=gt===Yd||gt===Xd||gt===$d}if(B){let gt=R.texture.type,St=gt===vn||gt===pn||gt===Fc||gt===Wn||gt===Wd||gt===qd,Rt=ee.getClearColor(),zt=ee.getClearAlpha(),Wt=Rt.r,Ot=Rt.g,kt=Rt.b;St?(f[0]=Wt,f[1]=Ot,f[2]=kt,f[3]=zt,I.clearBufferuiv(I.COLOR,0,f)):(p[0]=Wt,p[1]=Ot,p[2]=kt,p[3]=zt,I.clearBufferiv(I.COLOR,0,p))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),xt.dispose(),At.dispose(),mt.dispose(),b.dispose(),O.dispose(),j.dispose(),Vt.dispose(),oe.dispose(),yt.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",Ke),$t.removeEventListener("sessionend",ge),Mt&&(Mt.dispose(),Mt=null),Je.stop()};function ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let A=Et.autoReset,U=it.enabled,H=it.autoUpdate,V=it.needsUpdate,B=it.type;Se(),Et.autoReset=A,it.enabled=U,it.autoUpdate=H,it.needsUpdate=V,it.type=B}function dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ft(A){let U=A.target;U.removeEventListener("dispose",ft),It(U)}function It(A){wt(A),mt.remove(A)}function wt(A){let U=mt.get(A).programs;U!==void 0&&(U.forEach(function(H){yt.releaseProgram(H)}),A.isShaderMaterial&&yt.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,H,V,B,gt){U===null&&(U=bt);let St=B.isMesh&&B.matrixWorld.determinant()<0,Rt=zp(A,U,H,V,B);X.setMaterial(V,St);let zt=H.index,Wt=1;if(V.wireframe===!0){if(zt=et.getWireframeAttribute(H),zt===void 0)return;Wt=2}let Ot=H.drawRange,kt=H.attributes.position,Ae=Ot.start*Wt,ri=(Ot.start+Ot.count)*Wt;gt!==null&&(Ae=Math.max(Ae,gt.start*Wt),ri=Math.min(ri,(gt.start+gt.count)*Wt)),zt!==null?(Ae=Math.max(Ae,0),ri=Math.min(ri,zt.count)):kt!=null&&(Ae=Math.max(Ae,0),ri=Math.min(ri,kt.count));let Fe=ri-Ae;if(Fe<0||Fe===1/0)return;Vt.setup(B,V,Rt,H,zt);let Wi,_e=Nt;if(zt!==null&&(Wi=nt.get(zt),_e=Tt,_e.setIndex(Wi)),B.isMesh)V.wireframe===!0?(X.setLineWidth(V.wireframeLinewidth*Dt()),_e.setMode(I.LINES)):_e.setMode(I.TRIANGLES);else if(B.isLine){let Xt=V.linewidth;Xt===void 0&&(Xt=1),X.setLineWidth(Xt*Dt()),B.isLineSegments?_e.setMode(I.LINES):B.isLineLoop?_e.setMode(I.LINE_LOOP):_e.setMode(I.LINE_STRIP)}else B.isPoints?_e.setMode(I.POINTS):B.isSprite&&_e.setMode(I.TRIANGLES);if(B.isBatchedMesh)_e.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)_e.renderInstances(Ae,Fe,B.count);else if(H.isInstancedBufferGeometry){let Xt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,tl=Math.min(H.instanceCount,Xt);_e.renderInstances(Ae,Fe,tl)}else _e.render(Ae,Fe)};function pe(A,U,H){A.transparent===!0&&A.side===ei&&A.forceSinglePass===!1?(A.side=Ye,A.needsUpdate=!0,Go(A,U,H),A.side=yi,A.needsUpdate=!0,Go(A,U,H),A.side=ei):Go(A,U,H)}this.compile=function(A,U,H=null){H===null&&(H=A),g=At.get(H),g.init(),_.push(g),H.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),A!==H&&A.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights(x._useLegacyLights);let V=new Set;return A.traverse(function(B){let gt=B.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){let Rt=gt[St];pe(Rt,H,B),V.add(Rt)}else pe(gt,H,B),V.add(gt)}),_.pop(),g=null,V},this.compileAsync=function(A,U,H=null){let V=this.compile(A,U,H);return new Promise(B=>{function gt(){if(V.forEach(function(St){mt.get(St).currentProgram.isReady()&&V.delete(St)}),V.size===0){B(A);return}setTimeout(gt,10)}Z.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let me=null;function Oe(A){me&&me(A)}function Ke(){Je.stop()}function ge(){Je.start()}let Je=new of;Je.setAnimationLoop(Oe),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(A){me=A,$t.setAnimationLoop(A),A===null?Je.stop():Je.start()},$t.addEventListener("sessionstart",Ke),$t.addEventListener("sessionend",ge),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&($t.cameraAutoUpdate===!0&&$t.updateCamera(U),U=$t.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,R),g=At.get(A,_.length),g.init(),_.push(g),vt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(vt),pt=this.localClippingEnabled,tt=Bt.init(this.clippingPlanes,pt),v=xt.get(A,m.length),v.init(),m.push(v),Oi(A,U,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(q,W),this.info.render.frame++,tt===!0&&Bt.beginShadows();let H=g.state.shadowsArray;if(it.render(H,A,U),tt===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(v,A),g.setupLights(x._useLegacyLights),U.isArrayCamera){let V=U.cameras;for(let B=0,gt=V.length;B<gt;B++){let St=V[B];Xh(v,A,St,St.viewport)}}else Xh(v,A,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,U),Vt.resetDefaultState(),z=-1,M=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Oi(A,U,H,V){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||G.intersectsSprite(A)){V&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(vt);let St=j.update(A),Rt=A.material;Rt.visible&&v.push(A,St,Rt,H,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||G.intersectsObject(A))){let St=j.update(A),Rt=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ut.copy(St.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(vt)),Array.isArray(Rt)){let zt=St.groups;for(let Wt=0,Ot=zt.length;Wt<Ot;Wt++){let kt=zt[Wt],Ae=Rt[kt.materialIndex];Ae&&Ae.visible&&v.push(A,St,Ae,H,Ut.z,kt)}}else Rt.visible&&v.push(A,St,Rt,H,Ut.z,null)}}let gt=A.children;for(let St=0,Rt=gt.length;St<Rt;St++)Oi(gt[St],U,H,V)}function Xh(A,U,H,V){let B=A.opaque,gt=A.transmissive,St=A.transparent;g.setupLightsView(H),tt===!0&&Bt.setGlobalState(x.clippingPlanes,H),gt.length>0&&Ip(B,gt,U,H),V&&X.viewport(E.copy(V)),B.length>0&&Vo(B,U,H),gt.length>0&&Vo(gt,U,H),St.length>0&&Vo(St,U,H),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Ip(A,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let gt=ot.isWebGL2;Mt===null&&(Mt=new ii(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?Di:vn,minFilter:xn,samples:gt?4:0})),x.getDrawingBufferSize(Pt),gt?Mt.setSize(Pt.x,Pt.y):Mt.setSize(Cr(Pt.x),Cr(Pt.y));let St=x.getRenderTarget();x.setRenderTarget(Mt),x.getClearColor(Y),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Rt=x.toneMapping;x.toneMapping=gn,Vo(A,H,V),T.updateMultisampleRenderTarget(Mt),T.updateRenderTargetMipmap(Mt);let zt=!1;for(let Wt=0,Ot=U.length;Wt<Ot;Wt++){let kt=U[Wt],Ae=kt.object,ri=kt.geometry,Fe=kt.material,Wi=kt.group;if(Fe.side===ei&&Ae.layers.test(V.layers)){let _e=Fe.side;Fe.side=Ye,Fe.needsUpdate=!0,Yh(Ae,H,V,ri,Fe,Wi),Fe.side=_e,Fe.needsUpdate=!0,zt=!0}}zt===!0&&(T.updateMultisampleRenderTarget(Mt),T.updateRenderTargetMipmap(Mt)),x.setRenderTarget(St),x.setClearColor(Y,P),x.toneMapping=Rt}function Vo(A,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let B=0,gt=A.length;B<gt;B++){let St=A[B],Rt=St.object,zt=St.geometry,Wt=V===null?St.material:V,Ot=St.group;Rt.layers.test(H.layers)&&Yh(Rt,U,H,zt,Wt,Ot)}}function Yh(A,U,H,V,B,gt){A.onBeforeRender(x,U,H,V,B,gt),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(x,U,H,V,A,gt),B.transparent===!0&&B.side===ei&&B.forceSinglePass===!1?(B.side=Ye,B.needsUpdate=!0,x.renderBufferDirect(H,U,V,B,A,gt),B.side=yi,B.needsUpdate=!0,x.renderBufferDirect(H,U,V,B,A,gt),B.side=ei):x.renderBufferDirect(H,U,V,B,A,gt),A.onAfterRender(x,U,H,V,B,gt)}function Go(A,U,H){U.isScene!==!0&&(U=bt);let V=mt.get(A),B=g.state.lights,gt=g.state.shadowsArray,St=B.state.version,Rt=yt.getParameters(A,B.state,gt,U,H),zt=yt.getProgramCacheKey(Rt),Wt=V.programs;V.environment=A.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(A.isMeshStandardMaterial?O:b).get(A.envMap||V.environment),Wt===void 0&&(A.addEventListener("dispose",ft),Wt=new Map,V.programs=Wt);let Ot=Wt.get(zt);if(Ot!==void 0){if(V.currentProgram===Ot&&V.lightsStateVersion===St)return Kh(A,Rt),Ot}else Rt.uniforms=yt.getUniforms(A),A.onBuild(H,Rt,x),A.onBeforeCompile(Rt,x),Ot=yt.acquireProgram(Rt,zt),Wt.set(zt,Ot),V.uniforms=Rt.uniforms;let kt=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Bt.uniform),Kh(A,Rt),V.needsLights=Dp(A),V.lightsStateVersion=St,V.needsLights&&(kt.ambientLightColor.value=B.state.ambient,kt.lightProbe.value=B.state.probe,kt.directionalLights.value=B.state.directional,kt.directionalLightShadows.value=B.state.directionalShadow,kt.spotLights.value=B.state.spot,kt.spotLightShadows.value=B.state.spotShadow,kt.rectAreaLights.value=B.state.rectArea,kt.ltc_1.value=B.state.rectAreaLTC1,kt.ltc_2.value=B.state.rectAreaLTC2,kt.pointLights.value=B.state.point,kt.pointLightShadows.value=B.state.pointShadow,kt.hemisphereLights.value=B.state.hemi,kt.directionalShadowMap.value=B.state.directionalShadowMap,kt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,kt.spotShadowMap.value=B.state.spotShadowMap,kt.spotLightMatrix.value=B.state.spotLightMatrix,kt.spotLightMap.value=B.state.spotLightMap,kt.pointShadowMap.value=B.state.pointShadowMap,kt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Ot,V.uniformsList=null,Ot}function Zh(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=Es.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Kh(A,U){let H=mt.get(A);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function zp(A,U,H,V,B){U.isScene!==!0&&(U=bt),T.resetTextureUnits();let gt=U.fog,St=V.isMeshStandardMaterial?U.environment:null,Rt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:De,zt=(V.isMeshStandardMaterial?O:b).get(V.envMap||St),Wt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),kt=!!H.morphAttributes.position,Ae=!!H.morphAttributes.normal,ri=!!H.morphAttributes.color,Fe=gn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Fe=x.toneMapping);let Wi=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_e=Wi!==void 0?Wi.length:0,Xt=mt.get(V),tl=g.state.lights;if(tt===!0&&(pt===!0||A!==M)){let mi=A===M&&V.id===z;Bt.setState(V,A,mi)}let Ee=!1;V.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==tl.state.version||Xt.outputColorSpace!==Rt||B.isBatchedMesh&&Xt.batching===!1||!B.isBatchedMesh&&Xt.batching===!0||B.isInstancedMesh&&Xt.instancing===!1||!B.isInstancedMesh&&Xt.instancing===!0||B.isSkinnedMesh&&Xt.skinning===!1||!B.isSkinnedMesh&&Xt.skinning===!0||B.isInstancedMesh&&Xt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Xt.instancingColor===!1&&B.instanceColor!==null||Xt.envMap!==zt||V.fog===!0&&Xt.fog!==gt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Bt.numPlanes||Xt.numIntersection!==Bt.numIntersection)||Xt.vertexAlphas!==Wt||Xt.vertexTangents!==Ot||Xt.morphTargets!==kt||Xt.morphNormals!==Ae||Xt.morphColors!==ri||Xt.toneMapping!==Fe||ot.isWebGL2===!0&&Xt.morphTargetsCount!==_e)&&(Ee=!0):(Ee=!0,Xt.__version=V.version);let Nn=Xt.currentProgram;Ee===!0&&(Nn=Go(V,U,B));let Jh=!1,Js=!1,el=!1,qe=Nn.getUniforms(),Un=Xt.uniforms;if(X.useProgram(Nn.program)&&(Jh=!0,Js=!0,el=!0),V.id!==z&&(z=V.id,Js=!0),Jh||M!==A){qe.setValue(I,"projectionMatrix",A.projectionMatrix),qe.setValue(I,"viewMatrix",A.matrixWorldInverse);let mi=qe.map.cameraPosition;mi!==void 0&&mi.setValue(I,Ut.setFromMatrixPosition(A.matrixWorld)),ot.logarithmicDepthBuffer&&qe.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&qe.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Js=!0,el=!0)}if(B.isSkinnedMesh){qe.setOptional(I,B,"bindMatrix"),qe.setOptional(I,B,"bindMatrixInverse");let mi=B.skeleton;mi&&(ot.floatVertexTextures?(mi.boneTexture===null&&mi.computeBoneTexture(),qe.setValue(I,"boneTexture",mi.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(qe.setOptional(I,B,"batchingTexture"),qe.setValue(I,"batchingTexture",B._matricesTexture,T));let il=H.morphAttributes;if((il.position!==void 0||il.normal!==void 0||il.color!==void 0&&ot.isWebGL2===!0)&&Zt.update(B,H,Nn),(Js||Xt.receiveShadow!==B.receiveShadow)&&(Xt.receiveShadow=B.receiveShadow,qe.setValue(I,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Un.envMap.value=zt,Un.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Js&&(qe.setValue(I,"toneMappingExposure",x.toneMappingExposure),Xt.needsLights&&Lp(Un,el),gt&&V.fog===!0&&ut.refreshFogUniforms(Un,gt),ut.refreshMaterialUniforms(Un,V,K,k,Mt),Es.upload(I,Zh(Xt),Un,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Es.upload(I,Zh(Xt),Un,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&qe.setValue(I,"center",B.center),qe.setValue(I,"modelViewMatrix",B.modelViewMatrix),qe.setValue(I,"normalMatrix",B.normalMatrix),qe.setValue(I,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let mi=V.uniformsGroups;for(let nl=0,Np=mi.length;nl<Np;nl++)if(ot.isWebGL2){let jh=mi[nl];oe.update(jh,Nn),oe.bind(jh,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function Lp(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Dp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,U,H){mt.get(A.texture).__webglTexture=U,mt.get(A.depthTexture).__webglTexture=H;let V=mt.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){let H=mt.get(A);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,H=0){R=A,w=U,S=H;let V=!0,B=null,gt=!1,St=!1;if(A){let zt=mt.get(A);zt.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(I.FRAMEBUFFER,null),V=!1):zt.__webglFramebuffer===void 0?T.setupRenderTarget(A):zt.__hasExternalTextures&&T.rebindTextures(A,mt.get(A.texture).__webglTexture,mt.get(A.depthTexture).__webglTexture);let Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(St=!0);let Ot=mt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?B=Ot[U][H]:B=Ot[U],gt=!0):ot.isWebGL2&&A.samples>0&&T.useMultisampledRTT(A)===!1?B=mt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?B=Ot[H]:B=Ot,E.copy(A.viewport),D.copy(A.scissor),F=A.scissorTest}else E.copy($).multiplyScalar(K).floor(),D.copy(J).multiplyScalar(K).floor(),F=rt;if(X.bindFramebuffer(I.FRAMEBUFFER,B)&&ot.drawBuffers&&V&&X.drawBuffers(A,B),X.viewport(E),X.scissor(D),X.setScissorTest(F),gt){let zt=mt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,zt.__webglTexture,H)}else if(St){let zt=mt.get(A.texture),Wt=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,H||0,Wt)}z=-1},this.readRenderTargetPixels=function(A,U,H,V,B,gt,St){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(Rt=Rt[St]),Rt){X.bindFramebuffer(I.FRAMEBUFFER,Rt);try{let zt=A.texture,Wt=zt.format,Ot=zt.type;if(Wt!==vi&&_t.convert(Wt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let kt=Ot===Di&&(Z.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ot!==vn&&_t.convert(Ot)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===Qi&&(ot.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-V&&H>=0&&H<=A.height-B&&I.readPixels(U,H,V,B,_t.convert(Wt),_t.convert(Ot),gt)}finally{let zt=R!==null?mt.get(R).__webglFramebuffer:null;X.bindFramebuffer(I.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(A,U,H=0){let V=Math.pow(2,-H),B=Math.floor(U.image.width*V),gt=Math.floor(U.image.height*V);T.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,A.x,A.y,B,gt),X.unbindTexture()},this.copyTextureToTexture=function(A,U,H,V=0){let B=U.image.width,gt=U.image.height,St=_t.convert(H.format),Rt=_t.convert(H.type);T.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,A.x,A.y,B,gt,St,Rt,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,St,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,V,A.x,A.y,St,Rt,U.image),V===0&&H.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(A,U,H,V,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let gt=A.max.x-A.min.x+1,St=A.max.y-A.min.y+1,Rt=A.max.z-A.min.z+1,zt=_t.convert(V.format),Wt=_t.convert(V.type),Ot;if(V.isData3DTexture)T.setTexture3D(V,0),Ot=I.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)T.setTexture2DArray(V,0),Ot=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);let kt=I.getParameter(I.UNPACK_ROW_LENGTH),Ae=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ri=I.getParameter(I.UNPACK_SKIP_PIXELS),Fe=I.getParameter(I.UNPACK_SKIP_ROWS),Wi=I.getParameter(I.UNPACK_SKIP_IMAGES),_e=H.isCompressedTexture?H.mipmaps[B]:H.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,A.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,A.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,A.min.z),H.isDataTexture||H.isData3DTexture?I.texSubImage3D(Ot,B,U.x,U.y,U.z,gt,St,Rt,zt,Wt,_e.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ot,B,U.x,U.y,U.z,gt,St,Rt,zt,_e.data)):I.texSubImage3D(Ot,B,U.x,U.y,U.z,gt,St,Rt,zt,Wt,_e),I.pixelStorei(I.UNPACK_ROW_LENGTH,kt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ae),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ri),I.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wi),B===0&&V.generateMipmaps&&I.generateMipmap(Ot),X.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),X.unbindTexture()},this.resetState=function(){w=0,S=0,R=null,X.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===kc?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ue?$n:Jd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===$n?ue:De}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},rc=class extends xo{};rc.prototype.isWebGL1Renderer=!0;var kr=class o{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new st(t),this.near=e,this.far=i}clone(){return new o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hr=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},_o=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new C,yo=class o{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new o(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var gd=new C,vd=new de,xd=new de,F_=new C,_d=new qt,dr=new C,zl=new hi,yd=new qt,Ll=new Ps,Vr=class extends Lt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=su,this.bindMatrix=new qt,this.bindMatrixInverse=new qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new fe),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,dr),this.boundingBox.expandByPoint(dr)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,dr),this.boundingSphere.expandByPoint(dr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zl.copy(this.boundingSphere),zl.applyMatrix4(n),t.ray.intersectsSphere(zl)!==!1&&(yd.copy(n).invert(),Ll.copy(t.ray).applyMatrix4(yd),!(this.boundingBox!==null&&Ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ll)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new de,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===su?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;vd.fromBufferAttribute(n.attributes.skinIndex,t),xd.fromBufferAttribute(n.attributes.skinWeight,t),gd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let r=xd.getComponent(s);if(r!==0){let a=vd.getComponent(s);_d.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(F_.copy(gd).applyMatrix4(_d),r)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},Mo=class extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ac=class extends Ve{constructor(t=null,e=1,i=1,n,s,r,a,l,c=Ie,h=Ie,u,d){super(null,r,a,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Md=new qt,B_=new qt,Gr=class o{constructor(t=[],e=[]){this.uuid=_i(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new qt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=t.length;s<r;s++){let a=t[s]?t[s].matrixWorld:B_;Md.multiplyMatrices(a,e[s]),Md.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new o(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new ac(e,t,t,vi,Qi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let s=t.bones[i],r=e[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Mo),this.bones.push(r),this.boneInverses.push(new qt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){let r=e[n];t.bones.push(r.uuid);let a=i[n];t.boneInverses.push(a.toArray())}return t}},Yn=class extends Te{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ms=new qt,bd=new qt,fr=[],Sd=new fe,k_=new qt,io=new Lt,no=new hi,ni=class extends Lt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yn(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,k_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ms),Sd.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(Sd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ms),no.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(no)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(i),t.ray.intersectsSphere(no)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,ms),bd.multiplyMatrices(i,ms),io.matrixWorld=bd,io.raycast(t,fr);for(let r=0,a=fr.length;r<a;r++){let l=fr[r];l.instanceId=s,l.object=this,e.push(l)}fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yn(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var bo=class extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ed=new C,Td=new C,Ad=new qt,Dl=new Ps,pr=new hi,Ls=class extends jt{constructor(t=new Ce,e=new bo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Ed.fromBufferAttribute(e,n-1),Td.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Ed.distanceTo(Td);t.setAttribute("lineDistance",new re(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(n),pr.radius+=s,t.ray.intersectsSphere(pr)===!1)return;Ad.copy(n).invert(),Dl.copy(t.ray).applyMatrix4(Ad);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){let m=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let x=m,y=_-1;x<y;x+=f){let w=p.getX(x),S=p.getX(x+1);if(c.fromBufferAttribute(g,w),h.fromBufferAttribute(g,S),Dl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let z=t.ray.origin.distanceTo(d);z<t.near||z>t.far||e.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,r.start),_=Math.min(g.count,r.start+r.count);for(let x=m,y=_-1;x<y;x+=f){if(c.fromBufferAttribute(g,x),h.fromBufferAttribute(g,x+1),Dl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let S=t.ray.origin.distanceTo(d);S<t.near||S>t.far||e.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},wd=new C,Rd=new C,Wr=class extends Ls{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)wd.fromBufferAttribute(e,n),Rd.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+wd.distanceTo(Rd);t.setAttribute("lineDistance",new re(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},qr=class extends Ls{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},So=class extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cd=new qt,lc=new Ps,mr=new hi,gr=new C,$r=class extends jt{constructor(t=new Ce,e=new So){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(n),mr.radius+=s,t.ray.intersectsSphere(mr)===!1)return;Cd.copy(n).invert(),lc.copy(t.ray).applyMatrix4(Cd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let p=d,v=f;p<v;p++){let g=c.getX(p);gr.fromBufferAttribute(u,g),Pd(gr,g,l,n,t,e,this)}}else{let d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let p=d,v=f;p<v;p++)gr.fromBufferAttribute(u,p),Pd(gr,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Pd(o,t,e,i,n,s,r){let a=lc.distanceSqToPoint(o);if(a<e){let l=new C;lc.closestPointToPoint(o,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}var Mi=class extends Ve{constructor(t,e,i,n,s,r,a,l,c){super(t,e,i,n,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,r;e?r=e:r=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-r,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===r)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(r-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let r=this.getPoint(n),a=this.getPoint(s),l=e||(r.isVector2?new Q:new C);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new C,n=[],s=[],r=[],a=new C,l=new qt;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new C)}s[0]=new C,r[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),r[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ze(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}r[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(ze(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),r[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Eo=class extends bi{constructor(t=0,e=0,i=1,n=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let i=e||new Q,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(r?s=0:s=n),this.aClockwise===!0&&!r&&(s===n?s=-n:s=s-n);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},cc=class extends Eo{constructor(t,e,i,n,s,r){super(t,e,i,i,n,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let o=0,t=0,e=0,i=0;function n(s,r,a,l){o=s,t=a,e=-3*s+3*r-2*a-l,i=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){n(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,h,u){let d=(r-s)/c-(a-s)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,n(r,a,d,f)},calc:function(s){let r=s*s,a=r*s;return o+t*s+e*r+i*a}}}var vr=new C,Nl=new Gc,Ul=new Gc,Ol=new Gc,hc=class extends bi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new C){let i=e,n=this.points,s=n.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%s]:(vr.subVectors(n[0],n[1]).add(n[0]),c=vr);let u=n[a%s],d=n[(a+1)%s];if(this.closed||a+2<s?h=n[(a+2)%s]:(vr.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Nl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,g),Ul.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,g),Ol.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(Nl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ul.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ol.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Nl.calc(l),Ul.calc(l),Ol.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new C().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Id(o,t,e,i,n){let s=(i-t)*.5,r=(n-e)*.5,a=o*o,l=o*a;return(2*e-2*i+s+r)*l+(-3*e+3*i-2*s-r)*a+s*o+e}function H_(o,t){let e=1-o;return e*e*t}function V_(o,t){return 2*(1-o)*o*t}function G_(o,t){return o*o*t}function ho(o,t,e,i){return H_(o,t)+V_(o,e)+G_(o,i)}function W_(o,t){let e=1-o;return e*e*e*t}function q_(o,t){let e=1-o;return 3*e*e*o*t}function $_(o,t){return 3*(1-o)*o*o*t}function X_(o,t){return o*o*o*t}function uo(o,t,e,i,n){return W_(o,t)+q_(o,e)+$_(o,i)+X_(o,n)}var Xr=class extends bi{constructor(t=new Q,e=new Q,i=new Q,n=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new Q){let i=e,n=this.v0,s=this.v1,r=this.v2,a=this.v3;return i.set(uo(t,n.x,s.x,r.x,a.x),uo(t,n.y,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},uc=class extends bi{constructor(t=new C,e=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new C){let i=e,n=this.v0,s=this.v1,r=this.v2,a=this.v3;return i.set(uo(t,n.x,s.x,r.x,a.x),uo(t,n.y,s.y,r.y,a.y),uo(t,n.z,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yr=class extends bi{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dc=class extends bi{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends bi{constructor(t=new Q,e=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Q){let i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(ho(t,n.x,s.x,r.x),ho(t,n.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fc=class extends bi{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(ho(t,n.x,s.x,r.x),ho(t,n.y,s.y,r.y),ho(t,n.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kr=class extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){let i=e,n=this.points,s=(n.length-1)*t,r=Math.floor(s),a=s-r,l=n[r===0?r:r-1],c=n[r],h=n[r>n.length-2?n.length-1:r+1],u=n[r>n.length-3?n.length-1:r+2];return i.set(Id(a,l.x,c.x,h.x,u.x),Id(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new Q().fromArray(n))}return this}},pc=Object.freeze({__proto__:null,ArcCurve:cc,CatmullRomCurve3:hc,CubicBezierCurve:Xr,CubicBezierCurve3:uc,EllipseCurve:Eo,LineCurve:Yr,LineCurve3:dc,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:fc,SplineCurve:Kr}),mc=class extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let r=n[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let r=s[n],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new pc[n.type]().fromJSON(n))}return this}},Zn=class extends mc{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Yr(this.currentPoint.clone(),new Q(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Zr(this.currentPoint.clone(),new Q(t,e),new Q(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,r){let a=new Xr(this.currentPoint.clone(),new Q(t,e),new Q(i,n),new Q(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Kr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,r){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,s,r),this}absarc(t,e,i,n,s,r){return this.absellipse(t,e,i,i,n,s,r),this}ellipse(t,e,i,n,s,r,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,r,a,l),this}absellipse(t,e,i,n,s,r,a,l){let c=new Eo(t,e,i,n,s,r,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},gc=class o extends Ce{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=ze(n,0,Math.PI*2);let s=[],r=[],a=[],l=[],c=[],h=1/e,u=new C,d=new Q,f=new C,p=new C,v=new C,g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=e;_++){let x=i+_*h*n,y=Math.sin(x),w=Math.cos(x);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*y,u.y=t[S].y,u.z=t[S].x*w,r.push(u.x,u.y,u.z),d.x=_/e,d.y=S/(t.length-1),a.push(d.x,d.y);let R=l[3*S+0]*y,z=l[3*S+1],M=l[3*S+0]*w;c.push(R,z,M)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){let y=x+_*t.length,w=y,S=y+t.length,R=y+t.length+1,z=y+1;s.push(w,S,z),s.push(R,z,S)}this.setIndex(s),this.setAttribute("position",new re(r,3)),this.setAttribute("uv",new re(a,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.points,t.segments,t.phiStart,t.phiLength)}},Jr=class o extends gc{constructor(t=1,e=1,i=4,n=8){let s=new Zn;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new o(t.radius,t.length,t.capSegments,t.radialSegments)}};var di=class o extends Ce{constructor(t=1,e=1,i=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],p=0,v=[],g=i/2,m=0;_(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function _(){let y=new C,w=new C,S=0,R=(e-t)/i;for(let z=0;z<=s;z++){let M=[],E=z/s,D=E*(e-t)+t;for(let F=0;F<=n;F++){let Y=F/n,P=Y*l+a,N=Math.sin(P),k=Math.cos(P);w.x=D*N,w.y=-E*i+g,w.z=D*k,u.push(w.x,w.y,w.z),y.set(N,R,k).normalize(),d.push(y.x,y.y,y.z),f.push(Y,1-E),M.push(p++)}v.push(M)}for(let z=0;z<n;z++)for(let M=0;M<s;M++){let E=v[M][z],D=v[M+1][z],F=v[M+1][z+1],Y=v[M][z+1];h.push(E,D,Y),h.push(D,F,Y),S+=6}c.addGroup(m,S,0),m+=S}function x(y){let w=p,S=new Q,R=new C,z=0,M=y===!0?t:e,E=y===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),p++;let D=p;for(let F=0;F<=n;F++){let P=F/n*l+a,N=Math.cos(P),k=Math.sin(P);R.x=M*k,R.y=g*E,R.z=M*N,u.push(R.x,R.y,R.z),d.push(0,E,0),S.x=N*.5+.5,S.y=k*.5*E+.5,f.push(S.x,S.y),p++}for(let F=0;F<n;F++){let Y=w+F,P=D+F;y===!0?h.push(P,P+1,Y):h.push(P+1,P,Y),z+=3}c.addGroup(m,z,y===!0?1:2),m+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jr=class o extends di{constructor(t=1,e=1,i=32,n=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,i,n,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new o(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vc=class o extends Ce{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],r=[];a(n),c(i),h(),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(s.slice(),3)),this.setAttribute("uv",new re(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new C,y=new C,w=new C;for(let S=0;S<e.length;S+=3)f(e[S+0],x),f(e[S+1],y),f(e[S+2],w),l(x,y,w,_)}function l(_,x,y,w){let S=w+1,R=[];for(let z=0;z<=S;z++){R[z]=[];let M=_.clone().lerp(y,z/S),E=x.clone().lerp(y,z/S),D=S-z;for(let F=0;F<=D;F++)F===0&&z===S?R[z][F]=M:R[z][F]=M.clone().lerp(E,F/D)}for(let z=0;z<S;z++)for(let M=0;M<2*(S-z)-1;M++){let E=Math.floor(M/2);M%2===0?(d(R[z][E+1]),d(R[z+1][E]),d(R[z][E])):(d(R[z][E+1]),d(R[z+1][E+1]),d(R[z+1][E]))}}function c(_){let x=new C;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(_),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){let _=new C;for(let x=0;x<s.length;x+=3){_.x=s[x+0],_.y=s[x+1],_.z=s[x+2];let y=g(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;r.push(y,1-w)}p(),u()}function u(){for(let _=0;_<r.length;_+=6){let x=r[_+0],y=r[_+2],w=r[_+4],S=Math.max(x,y,w),R=Math.min(x,y,w);S>.9&&R<.1&&(x<.2&&(r[_+0]+=1),y<.2&&(r[_+2]+=1),w<.2&&(r[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,x){let y=_*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function p(){let _=new C,x=new C,y=new C,w=new C,S=new Q,R=new Q,z=new Q;for(let M=0,E=0;M<s.length;M+=9,E+=6){_.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),S.set(r[E+0],r[E+1]),R.set(r[E+2],r[E+3]),z.set(r[E+4],r[E+5]),w.copy(_).add(x).add(y).divideScalar(3);let D=g(w);v(S,E+0,_,D),v(R,E+2,x,D),v(z,E+4,y,D)}}function v(_,x,y,w){w<0&&_.x===1&&(r[x]=_.x-1),y.x===0&&y.z===0&&(r[x]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.vertices,t.indices,t.radius,t.details)}};var Ds=class extends Zn{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Zn().fromJSON(n))}return this}},Y_={triangulate:function(o,t,e=2){let i=t&&t.length,n=i?t[0]*e:o.length,s=uf(o,0,n,e,!0),r=[];if(!s||s.next===s.prev)return r;let a,l,c,h,u,d,f;if(i&&(s=Q_(o,t,s,e)),o.length>80*e){a=c=o[0],l=h=o[1];for(let p=e;p<n;p+=e)u=o[p],d=o[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return To(s,r,e,a,l,f,0),r}};function uf(o,t,e,i,n){let s,r;if(n===hy(o,t,e,i)>0)for(s=t;s<e;s+=i)r=zd(s,o[s],o[s+1],r);else for(s=e-i;s>=t;s-=i)r=zd(s,o[s],o[s+1],r);return r&&da(r,r.next)&&(wo(r),r=r.next),r}function Kn(o,t){if(!o)return o;t||(t=o);let e=o,i;do if(i=!1,!e.steiner&&(da(e,e.next)||ye(e.prev,e,e.next)===0)){if(wo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function To(o,t,e,i,n,s,r){if(!o)return;!r&&s&&sy(o,i,n,s);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,s?K_(o,i,n,s):Z_(o)){t.push(l.i/e|0),t.push(o.i/e|0),t.push(c.i/e|0),wo(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=J_(Kn(o),t,e),To(o,t,e,i,n,s,2)):r===2&&j_(o,t,e,i,n,s):To(Kn(o),t,e,i,n,s,1);break}}}function Z_(o){let t=o.prev,e=o,i=o.next;if(ye(t,e,i)>=0)return!1;let n=t.x,s=e.x,r=i.x,a=t.y,l=e.y,c=i.y,h=n<s?n<r?n:r:s<r?s:r,u=a<l?a<c?a:c:l<c?l:c,d=n>s?n>r?n:r:s>r?s:r,f=a>l?a>c?a:c:l>c?l:c,p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Ms(n,a,s,l,r,c,p.x,p.y)&&ye(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function K_(o,t,e,i){let n=o.prev,s=o,r=o.next;if(ye(n,s,r)>=0)return!1;let a=n.x,l=s.x,c=r.x,h=n.y,u=s.y,d=r.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=xc(f,p,t,e,i),_=xc(v,g,t,e,i),x=o.prevZ,y=o.nextZ;for(;x&&x.z>=m&&y&&y.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==n&&x!==r&&Ms(a,h,l,u,c,d,x.x,x.y)&&ye(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==n&&y!==r&&Ms(a,h,l,u,c,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==n&&x!==r&&Ms(a,h,l,u,c,d,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==n&&y!==r&&Ms(a,h,l,u,c,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function J_(o,t,e){let i=o;do{let n=i.prev,s=i.next.next;!da(n,s)&&df(n,i,i.next,s)&&Ao(n,s)&&Ao(s,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),wo(i),wo(i.next),i=o=s),i=i.next}while(i!==o);return Kn(i)}function j_(o,t,e,i,n,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&ay(r,a)){let l=ff(r,a);r=Kn(r,r.next),l=Kn(l,l.next),To(r,t,e,i,n,s,0),To(l,t,e,i,n,s,0);return}a=a.next}r=r.next}while(r!==o)}function Q_(o,t,e,i){let n=[],s,r,a,l,c;for(s=0,r=t.length;s<r;s++)a=t[s]*i,l=s<r-1?t[s+1]*i:o.length,c=uf(o,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(ry(c));for(n.sort(ty),s=0;s<n.length;s++)e=ey(n[s],e);return e}function ty(o,t){return o.x-t.x}function ey(o,t){let e=iy(o,t);if(!e)return t;let i=ff(e,o);return Kn(i,i.next),Kn(e,e.next)}function iy(o,t){let e=t,i=-1/0,n,s=o.x,r=o.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===s))return n}e=e.next}while(e!==t);if(!n)return null;let a=n,l=n.x,c=n.y,h=1/0,u;e=n;do s>=e.x&&e.x>=l&&s!==e.x&&Ms(r<c?s:i,r,l,c,r<c?i:s,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(s-e.x),Ao(e,o)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&ny(n,e)))&&(n=e,h=u)),e=e.next;while(e!==a);return n}function ny(o,t){return ye(o.prev,o,t.prev)<0&&ye(t.next,o,o.next)<0}function sy(o,t,e,i){let n=o;do n.z===0&&(n.z=xc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==o);n.prevZ.nextZ=null,n.prevZ=null,oy(n)}function oy(o){let t,e,i,n,s,r,a,l,c=1;do{for(e=o,o=null,s=null,r=0;e;){for(r++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:o=n,n.prevZ=s,s=n;e=i}s.nextZ=null,c*=2}while(r>1);return o}function xc(o,t,e,i,n){return o=(o-e)*n|0,t=(t-i)*n|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function ry(o){let t=o,e=o;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==o);return e}function Ms(o,t,e,i,n,s,r,a){return(n-r)*(t-a)>=(o-r)*(s-a)&&(o-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(n-r)*(i-a)}function ay(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!ly(o,t)&&(Ao(o,t)&&Ao(t,o)&&cy(o,t)&&(ye(o.prev,o,t.prev)||ye(o,t.prev,t))||da(o,t)&&ye(o.prev,o,o.next)>0&&ye(t.prev,t,t.next)>0)}function ye(o,t,e){return(t.y-o.y)*(e.x-t.x)-(t.x-o.x)*(e.y-t.y)}function da(o,t){return o.x===t.x&&o.y===t.y}function df(o,t,e,i){let n=_r(ye(o,t,e)),s=_r(ye(o,t,i)),r=_r(ye(e,i,o)),a=_r(ye(e,i,t));return!!(n!==s&&r!==a||n===0&&xr(o,e,t)||s===0&&xr(o,i,t)||r===0&&xr(e,o,i)||a===0&&xr(e,t,i))}function xr(o,t,e){return t.x<=Math.max(o.x,e.x)&&t.x>=Math.min(o.x,e.x)&&t.y<=Math.max(o.y,e.y)&&t.y>=Math.min(o.y,e.y)}function _r(o){return o>0?1:o<0?-1:0}function ly(o,t){let e=o;do{if(e.i!==o.i&&e.next.i!==o.i&&e.i!==t.i&&e.next.i!==t.i&&df(e,e.next,o,t))return!0;e=e.next}while(e!==o);return!1}function Ao(o,t){return ye(o.prev,o,o.next)<0?ye(o,t,o.next)>=0&&ye(o,o.prev,t)>=0:ye(o,t,o.prev)<0||ye(o,o.next,t)<0}function cy(o,t){let e=o,i=!1,n=(o.x+t.x)/2,s=(o.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==o);return i}function ff(o,t){let e=new _c(o.i,o.x,o.y),i=new _c(t.i,t.x,t.y),n=o.next,s=t.prev;return o.next=t,t.prev=o,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function zd(o,t,e,i){let n=new _c(o,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function wo(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function _c(o,t,e){this.i=o,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hy(o,t,e,i){let n=0;for(let s=t,r=e-i;s<e;s+=i)n+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return n}var fo=class o{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return o.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];Ld(t),Dd(i,t);let r=t.length;e.forEach(Ld);for(let l=0;l<e.length;l++)n.push(r),r+=e[l].length,Dd(i,e[l]);let a=Y_.triangulate(i,n);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Ld(o){let t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Dd(o,t){for(let e=0;e<t.length;e++)o.push(t[e].x),o.push(t[e].y)}var Ro=class o extends Ce{constructor(t=new Ds([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];r(c)}this.setAttribute("position",new re(n,3)),this.setAttribute("uv",new re(s,2)),this.computeVertexNormals();function r(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:uy,x,y=!1,w,S,R,z;m&&(x=m.getSpacedPoints(h),y=!0,d=!1,w=m.computeFrenetFrames(h,!1),S=new C,R=new C,z=new C),d||(g=0,f=0,p=0,v=0);let M=a.extractPoints(c),E=M.shape,D=M.holes;if(!fo.isClockWise(E)){E=E.reverse();for(let I=0,lt=D.length;I<lt;I++){let Z=D[I];fo.isClockWise(Z)&&(D[I]=Z.reverse())}}let Y=fo.triangulateShape(E,D),P=E;for(let I=0,lt=D.length;I<lt;I++){let Z=D[I];E=E.concat(Z)}function N(I,lt,Z){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(lt,Z)}let k=E.length,K=Y.length;function q(I,lt,Z){let ot,X,Et,mt=I.x-lt.x,T=I.y-lt.y,b=Z.x-I.x,O=Z.y-I.y,nt=mt*mt+T*T,et=mt*O-T*b;if(Math.abs(et)>Number.EPSILON){let j=Math.sqrt(nt),yt=Math.sqrt(b*b+O*O),ut=lt.x-T/j,xt=lt.y+mt/j,At=Z.x-O/yt,Bt=Z.y+b/yt,it=((At-ut)*O-(Bt-xt)*b)/(mt*O-T*b);ot=ut+mt*it-I.x,X=xt+T*it-I.y;let ee=ot*ot+X*X;if(ee<=2)return new Q(ot,X);Et=Math.sqrt(ee/2)}else{let j=!1;mt>Number.EPSILON?b>Number.EPSILON&&(j=!0):mt<-Number.EPSILON?b<-Number.EPSILON&&(j=!0):Math.sign(T)===Math.sign(O)&&(j=!0),j?(ot=-T,X=mt,Et=Math.sqrt(nt)):(ot=mt,X=T,Et=Math.sqrt(nt/2))}return new Q(ot/Et,X/Et)}let W=[];for(let I=0,lt=P.length,Z=lt-1,ot=I+1;I<lt;I++,Z++,ot++)Z===lt&&(Z=0),ot===lt&&(ot=0),W[I]=q(P[I],P[Z],P[ot]);let $=[],J,rt=W.concat();for(let I=0,lt=D.length;I<lt;I++){let Z=D[I];J=[];for(let ot=0,X=Z.length,Et=X-1,mt=ot+1;ot<X;ot++,Et++,mt++)Et===X&&(Et=0),mt===X&&(mt=0),J[ot]=q(Z[ot],Z[Et],Z[mt]);$.push(J),rt=rt.concat(J)}for(let I=0;I<g;I++){let lt=I/g,Z=f*Math.cos(lt*Math.PI/2),ot=p*Math.sin(lt*Math.PI/2)+v;for(let X=0,Et=P.length;X<Et;X++){let mt=N(P[X],W[X],ot);vt(mt.x,mt.y,-Z)}for(let X=0,Et=D.length;X<Et;X++){let mt=D[X];J=$[X];for(let T=0,b=mt.length;T<b;T++){let O=N(mt[T],J[T],ot);vt(O.x,O.y,-Z)}}}let G=p+v;for(let I=0;I<k;I++){let lt=d?N(E[I],rt[I],G):E[I];y?(R.copy(w.normals[0]).multiplyScalar(lt.x),S.copy(w.binormals[0]).multiplyScalar(lt.y),z.copy(x[0]).add(R).add(S),vt(z.x,z.y,z.z)):vt(lt.x,lt.y,0)}for(let I=1;I<=h;I++)for(let lt=0;lt<k;lt++){let Z=d?N(E[lt],rt[lt],G):E[lt];y?(R.copy(w.normals[I]).multiplyScalar(Z.x),S.copy(w.binormals[I]).multiplyScalar(Z.y),z.copy(x[I]).add(R).add(S),vt(z.x,z.y,z.z)):vt(Z.x,Z.y,u/h*I)}for(let I=g-1;I>=0;I--){let lt=I/g,Z=f*Math.cos(lt*Math.PI/2),ot=p*Math.sin(lt*Math.PI/2)+v;for(let X=0,Et=P.length;X<Et;X++){let mt=N(P[X],W[X],ot);vt(mt.x,mt.y,u+Z)}for(let X=0,Et=D.length;X<Et;X++){let mt=D[X];J=$[X];for(let T=0,b=mt.length;T<b;T++){let O=N(mt[T],J[T],ot);y?vt(O.x,O.y+x[h-1].y,x[h-1].x+Z):vt(O.x,O.y,u+Z)}}}tt(),pt();function tt(){let I=n.length/3;if(d){let lt=0,Z=k*lt;for(let ot=0;ot<K;ot++){let X=Y[ot];Pt(X[2]+Z,X[1]+Z,X[0]+Z)}lt=h+g*2,Z=k*lt;for(let ot=0;ot<K;ot++){let X=Y[ot];Pt(X[0]+Z,X[1]+Z,X[2]+Z)}}else{for(let lt=0;lt<K;lt++){let Z=Y[lt];Pt(Z[2],Z[1],Z[0])}for(let lt=0;lt<K;lt++){let Z=Y[lt];Pt(Z[0]+k*h,Z[1]+k*h,Z[2]+k*h)}}i.addGroup(I,n.length/3-I,0)}function pt(){let I=n.length/3,lt=0;Mt(P,lt),lt+=P.length;for(let Z=0,ot=D.length;Z<ot;Z++){let X=D[Z];Mt(X,lt),lt+=X.length}i.addGroup(I,n.length/3-I,1)}function Mt(I,lt){let Z=I.length;for(;--Z>=0;){let ot=Z,X=Z-1;X<0&&(X=I.length-1);for(let Et=0,mt=h+g*2;Et<mt;Et++){let T=k*Et,b=k*(Et+1),O=lt+ot+T,nt=lt+X+T,et=lt+X+b,j=lt+ot+b;Ut(O,nt,et,j)}}}function vt(I,lt,Z){l.push(I),l.push(lt),l.push(Z)}function Pt(I,lt,Z){bt(I),bt(lt),bt(Z);let ot=n.length/3,X=_.generateTopUV(i,n,ot-3,ot-2,ot-1);Dt(X[0]),Dt(X[1]),Dt(X[2])}function Ut(I,lt,Z,ot){bt(I),bt(lt),bt(ot),bt(lt),bt(Z),bt(ot);let X=n.length/3,Et=_.generateSideWallUV(i,n,X-6,X-3,X-2,X-1);Dt(Et[0]),Dt(Et[1]),Dt(Et[3]),Dt(Et[1]),Dt(Et[2]),Dt(Et[3])}function bt(I){n.push(l[I*3+0]),n.push(l[I*3+1]),n.push(l[I*3+2])}function Dt(I){s.push(I.x),s.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return dy(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new pc[n.type]().fromJSON(n)),new o(i,t.options)}},uy={generateTopUV:function(o,t,e,i,n){let s=t[e*3],r=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new Q(s,r),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(o,t,e,i,n,s){let r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[n*3],f=t[n*3+1],p=t[n*3+2],v=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new Q(r,1-l),new Q(c,1-u),new Q(d,1-p),new Q(v,1-m)]:[new Q(a,1-l),new Q(h,1-u),new Q(f,1-p),new Q(g,1-m)]}};function dy(o,t,e){if(e.shapes=[],Array.isArray(o))for(let i=0,n=o.length;i<n;i++){let s=o[i];e.shapes.push(s.uuid)}else e.shapes.push(o.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qr=class o extends vc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new o(t.radius,t.detail)}};var Si=class o extends Ce{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(r+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){let _=[],x=m/i,y=0;m===0&&r===0?y=.5/e:m===i&&l===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){let S=w/e;u.x=-t*Math.cos(n+S*s)*Math.sin(r+x*a),u.y=t*Math.cos(r+x*a),u.z=t*Math.sin(n+S*s)*Math.sin(r+x*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(S+y,1-x),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let x=h[m][_+1],y=h[m][_],w=h[m+1][_],S=h[m+1][_+1];(m!==0||r>0)&&f.push(x,y,S),(m!==i-1||l<Math.PI)&&f.push(y,w,S)}this.setIndex(f),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ta=class extends Pe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ft=class extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ei=class extends Ft{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function yr(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function fy(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function py(o){function t(n,s){return o[n]-o[s]}let e=o.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function Nd(o,t,e){let i=o.length,n=new o.constructor(i);for(let s=0,r=0;r!==i;++s){let a=e[s]*t;for(let l=0;l!==t;++l)n[r++]=o[a+l]}return n}function pf(o,t,e,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(t.push(s.time),e.push.apply(e,r)),s=o[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=o[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(t.push(s.time),e.push(r)),s=o[n++];while(s!==void 0)}var yn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let r;i:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break e}r=e.length;break i}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break e}r=i,i=0;break i}break t}for(;i<r;){let a=i+r>>>1;t<e[a]?r=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let r=0;r!==n;++r)e[r]=i[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yc=class extends yn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gs,endingEnd:gs}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,r=t+1,a=n[s],l=n[r];if(a===void 0)switch(this.getSettings_().endingStart){case vs:s=t,a=2*e-i;break;case Er:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vs:r=t,l=2*i-e;break;case Er:r=1,l=i+n[1]-n[0];break;default:r=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*v+.5*p,y=f*g-f*v;for(let w=0;w!==a;++w)s[w]=m*r[h+w]+_*r[c+w]+x*r[l+w]+y*r[u+w];return s}},ea=class extends yn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}},Mc=class extends yn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ti=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Rs:e=this.InterpolantFactoryMethodDiscrete;break;case Xn:e=this.InterpolantFactoryMethodLinear;break;case cl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Xn;case this.InterpolantFactoryMethodSmooth:return cl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,r=n-1;for(;s!==n&&i[s]<t;)++s;for(;r!==-1&&i[r]>e;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);let a=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(n!==void 0&&fy(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===cl,s=t.length-1,r=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let v=e[u+p];if(v!==e[d+p]||v!==e[f+p]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];let u=a*i,d=r*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*i,l=r*i,c=0;c!==i;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Xn;var Mn=class extends Ti{};Mn.prototype.ValueTypeName="bool";Mn.prototype.ValueBufferType=Array;Mn.prototype.DefaultInterpolation=Rs;Mn.prototype.InterpolantFactoryMethodLinear=void 0;Mn.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends Ti{};ia.prototype.ValueTypeName="color";var on=class extends Ti{};on.prototype.ValueTypeName="number";var bc=class extends yn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)He.slerpFlat(s,0,r,c-a,r,c,l);return s}},Hi=class extends Ti{InterpolantFactoryMethodLinear(t){return new bc(this.times,this.values,this.getValueSize(),t)}};Hi.prototype.ValueTypeName="quaternion";Hi.prototype.DefaultInterpolation=Xn;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var bn=class extends Ti{};bn.prototype.ValueTypeName="string";bn.prototype.ValueBufferType=Array;bn.prototype.DefaultInterpolation=Rs;bn.prototype.InterpolantFactoryMethodLinear=void 0;bn.prototype.InterpolantFactoryMethodSmooth=void 0;var rn=class extends Ti{};rn.prototype.ValueTypeName="vector";var Ns=class{constructor(t,e=-1,i,n=Bc){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=_i(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,n=1/(t.fps||1);for(let r=0,a=i.length;r!==a;++r)e.push(gy(i[r]).scale(n));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,r=i.length;s!==r;++s)e.push(Ti.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){let s=e.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=py(l);l=Nd(l,1,h),c=Nd(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new on(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/i))}return new this(t,-1,r)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let r=[];for(let a in n)r.push(this.CreateFromMorphTargetSequence(a,n[a],e,i));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,p,v){if(f.length!==0){let g=[],m=[];pf(f,g,m,p),g.length!==0&&v.push(new u(d,g,m))}},n=[],s=t.name||"default",r=t.fps||30,a=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(let v in f){let g=[],m=[];for(let _=0;_!==d[p].morphTargets.length;++_){let x=d[p];g.push(x.time),m.push(x.morphTarget===v?1:0)}n.push(new on(".morphTargetInfluence["+v+"]",g,m))}l=f.length*r}else{let f=".bones["+e[u].name+"]";i(rn,f+".position",d,"pos",n),i(Hi,f+".quaternion",d,"rot",n),i(rn,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){let t=this.tracks,e=0;for(let i=0,n=t.length;i!==n;++i){let s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function my(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return on;case"vector":case"vector2":case"vector3":case"vector4":return rn;case"color":return ia;case"quaternion":return Hi;case"bool":case"boolean":return Mn;case"string":return bn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function gy(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=my(o.type);if(o.times===void 0){let e=[],i=[];pf(o.keys,e,i,"value"),o.times=e,o.values=i}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}var mn={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}},Sc=class{constructor(t,e,i){let n=this,s=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,a),r===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},vy=new Sc,an=class{constructor(t){this.manager=t!==void 0?t:vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};an.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki={},Ec=class extends Error{constructor(t,e){super(t),this.response=e}},Co=class extends an{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=mn.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Ki[t]!==void 0){Ki[t].push({onLoad:e,onProgress:i,onError:n});return}Ki[t]=[],Ki[t].push({onLoad:e,onProgress:i,onError:n});let r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ki[t],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,p=f!==0,v=0,g=new ReadableStream({start(m){_();function _(){u.read().then(({done:x,value:y})=>{if(x)m.close();else{v+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let S=0,R=h.length;S<R;S++){let z=h[S];z.onProgress&&z.onProgress(w)}m.enqueue(y),_()}})}}});return new Response(g)}else throw new Ec(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{mn.add(t,c);let h=Ki[t];delete Ki[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ki[t];if(h===void 0)throw this.manager.itemError(t),c;delete Ki[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Tc=class extends an{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=mn.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;let a=go("img");function l(){h(),mn.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),n&&n(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}};var na=class extends an{constructor(t){super(t)}load(t,e,i,n){let s=new Ve,r=new Tc(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}},Us=class extends jt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},sa=class extends Us{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Fl=new qt,Ud=new C,Od=new C,Po=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ud.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ud),Od.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Od),e.updateMatrixWorld(),Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ac=class extends Po{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Cs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},oa=class extends Us{constructor(t,e,i=0,n=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Ac}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Fd=new qt,so=new C,Bl=new C,wc=class extends Po{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),so.setFromMatrixPosition(t.matrixWorld),i.position.copy(so),Bl.copy(i.position),Bl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Bl),i.updateMatrixWorld(),n.makeTranslation(-so.x,-so.y,-so.z),Fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd)}},Os=class extends Us{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new wc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Rc=class extends Po{constructor(){super(new _n(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fs=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Rc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Sn=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var ra=class extends an{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=mn.get(t);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return mn.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){n&&n(c),mn.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});mn.add(t,l),s.manager.itemStart(t)}};var Bs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Bd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Bd(){return(typeof performance>"u"?Date:performance).now()}var Cc=class{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,r;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let i=this.buffer,n=this.valueSize,s=t*n+n,r=this.cumulativeWeight;if(r===0){for(let a=0;a!==n;++a)i[s+a]=i[a];r=e}else{r+=e;let a=e/r;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=r}accumulateAdditive(t){let e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=e*this._origIndex;this._mixBufferRegion(i,n,l,1-s,e)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(i[l]!==i[l+e]){a.setValue(i,n);break}}saveOriginalState(){let t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,r=n;s!==r;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)t[e+r]=t[i+r]}_slerp(t,e,i,n){He.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){let r=this._workIndex*s;He.multiplyQuaternionsFlat(t,r,t,e,t,i),He.slerpFlat(t,e,t,e,t,r,n)}_lerp(t,e,i,n,s){let r=1-n;for(let a=0;a!==s;++a){let l=e+a;t[l]=t[l]*r+t[i+a]*n}}_lerpAdditive(t,e,i,n,s){for(let r=0;r!==s;++r){let a=e+r;t[a]=t[a]+t[i+r]*n}}},Wc="\\[\\]\\.:\\/",xy=new RegExp("["+Wc+"]","g"),qc="[^"+Wc+"]",_y="[^"+Wc.replace("\\.","")+"]",yy=/((?:WC+[\/:])*)/.source.replace("WC",qc),My=/(WCOD+)?/.source.replace("WCOD",_y),by=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),Sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),Ey=new RegExp("^"+yy+My+by+Sy+"$"),Ty=["material","materials","bones","map"],Pc=class{constructor(t,e,i){let n=i||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},he=class o{constructor(t,e,i){this.path=e,this.parsedPath=i||o.parseTrackName(e),this.node=o.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new o.Composite(t,e,i):new o(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xy,"")}static parseTrackName(t){let e=Ey.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Ty.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=o.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[n];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Pc;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ic=class{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;let s=e.tracks,r=s.length,a=new Array(r),l={endingStart:gs,endingEnd:gs};for(let c=0;c!==r;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ym,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i){if(t.fadeOut(e),this.fadeIn(e),i){let n=this._clip.duration,s=t._clip.duration,r=s/n,a=n/s;t.warp(1,r,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,i){return t.crossFadeFrom(this,e,i)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){let n=this._mixer,s=n.time,r=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=t/r,c[1]=e/r,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let l=(t-s)*i;l<0||i===0?e=0:(this._startTime=null,e=i*l)}e*=this._updateTimeScale(t);let r=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case bm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(a);break;case Bc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(n,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,i=this.loop,n=this.time+t,s=this._loopCount,r=i===Mm;if(t===0)return s===-1?n:r&&(s&1)===1?e-n:n;if(i===_m){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=e||n<0){let a=Math.floor(n/e);n-=e*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(r&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){let n=this._interpolantSettings;i?(n.endingStart=vs,n.endingEnd=vs):(t?n.endingStart=this.zeroSlopeAtStart?vs:gs:n.endingStart=Er,e?n.endingEnd=this.zeroSlopeAtEnd?vs:gs:n.endingEnd=Er)}_scheduleFading(t,e,i){let n=this._mixer,s=n.time,r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);let a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=i,this}},Ay=new Float32Array(1),aa=class extends nn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,r=t._propertyBindings,a=t._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=n[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,r[u]=p;else{if(p=r[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let v=e&&e._propertyBindings[u].binding.parsedPath;p=new Cc(he.create(i,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),r[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}let e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){let s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){let s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){let n=this._actions,s=this._actionsByClip,r=s[e];if(r===void 0)r={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=r;else{let a=r.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=n.length,n.push(t),r.actionByRoot[i]=t}_removeInactiveAction(t){let e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){let s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){let e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){let n=this._bindingsByRootAndName,s=this._bindings,r=n[e];r===void 0&&(r={},n[e]=r),r[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,a=r[n],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete r[n]}_lendBinding(t){let e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){let e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,i=t[e];return i===void 0&&(i=new ea(new Float32Array(2),new Float32Array(2),1,Ay),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){let e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){let n=e||this._root,s=n.uuid,r=typeof t=="string"?Ns.findByName(n,t):t,a=r!==null?r.uuid:t,l=this._actionsByClip[a],c=null;if(i===void 0&&(r!==null?i=r.blendMode:i=Bc),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;let h=new Ic(this,r,e,i);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){let i=e||this._root,n=i.uuid,s=typeof t=="string"?Ns.findByName(i,t):t,r=s?s.uuid:t,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;let e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),r=this._accuIndex^=1;for(let c=0;c!==i;++c)e[c]._update(n,t,s,r);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){let r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){let c=r[a];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(t){let e=t.uuid,i=this._actionsByClip;for(let r in i){let a=i[r].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(let r in s){let a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var fa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var fi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wy=new _n(-1,1,1,-1,0,1),$c=class extends Ce{constructor(){super(),this.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new re([0,2,0,0,2,0],2))}},Ry=new $c,Tn=class{constructor(t){this._mesh=new Lt(Ry,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,wy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var pa=class extends fi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=En.clone(t.uniforms),this.material=new Pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Tn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Lo=class extends fi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},ma=class extends fi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ga=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Q);this._width=i.width,this._height=i.height,e=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Di}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pa(fa),this.copyPass.material.blending=ki,this.clock=new Bs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lo!==void 0&&(r instanceof Lo?i=!0:r instanceof ma&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var va=class extends fi{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=n}};var mf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Hs=class o extends fi{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new ii(s,r,{type:Di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new ii(s,r,{type:Di});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new ii(s,r,{type:Di});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}let a=mf;this.highPassUniforms=En.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=fa;this.copyUniforms=En.clone(h.uniforms),this.blendMaterial=new Pe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Mr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new Me,this.fsQuad=new Tn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Q(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=o.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=o.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Hs.BlurDirectionX=new Q(1,0);Hs.BlurDirectionY=new Q(0,1);var gf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var xa=class extends fi{constructor(){super();let t=gf;this.uniforms=En.clone(t.uniforms),this.material=new ta({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Tn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ne={villarosa:{id:"villarosa",nome:"Villa Rosa",sottotitolo:"Villette, cani da guardia, ragazzini annoiati",colore:"#6f9a5f",coloreEdifici:["#c9bfae","#b9ae9c","#d4cbbb"],ricchezza:.75,polizia:.9,densitaClienti:.7,pericolo:.15,altezzaEdifici:[4,9],intro:"Qui hai iniziato. Nessuno si aspetta niente da te, e questo \xE8 il tuo unico vantaggio."},latino:{id:"latino",nome:"Quartiere Latino",sottotitolo:"Locali, code fuori, musica fino alle sei",colore:"#b0568f",coloreEdifici:["#8c5a72","#a4667f","#6f4a63"],ricchezza:1.15,polizia:1.2,densitaClienti:1.8,pericolo:.35,altezzaEdifici:[8,18],intro:"La domanda non dorme mai. Nemmeno la Narcotici."},argento:{id:"argento",nome:"Distretto Argento",sottotitolo:"Vetro, uffici, gente che paga senza guardare il prezzo",colore:"#6d8fb8",coloreEdifici:["#8fa6bd","#a8bccf","#76889b"],ricchezza:1.9,polizia:2,densitaClienti:1,pericolo:.2,altezzaEdifici:[20,52],intro:"Pagano il triplo e chiamano la polizia il doppio pi\xF9 in fretta. Vestiti bene."},torri:{id:"torri",nome:"Le Torri",sottotitolo:"Case popolari, ascensori rotti, piazze di spaccio gi\xE0 occupate",colore:"#9a7a4f",coloreEdifici:["#7d6a58","#8f7a63","#6b5a4b"],ricchezza:.55,polizia:1.4,densitaClienti:2,pericolo:.75,altezzaEdifici:[14,28],intro:"Volumi enormi, margini bassi, e qualcuno che ti guarda le mani da una finestra."},porto:{id:"porto",nome:"Il Porto",sottotitolo:"Container, capannoni, gente che scarica di notte",colore:"#5f8f8f",coloreEdifici:["#5c6b6b","#6e7d7d","#4b5858"],ricchezza:.7,polizia:.6,densitaClienti:.8,pericolo:.6,altezzaEdifici:[5,12],intro:"Qui la roba entra. Chi controlla il porto non fa il dettaglio: fa il prezzo."}},oi=Object.values(ne),be=9,ie=44,Vs=13,si=ie+Vs,ve=be*si;function _a(o,t){return t<=1?"porto":t>=be-2?"torri":o>=3&&o<=5&&t>=3&&t<=5?"argento":o<=2?"latino":"villarosa"}function Ai(o,t){let e=Math.floor((o+ve/2)/si),i=Math.floor((t+ve/2)/si),n=Math.max(0,Math.min(be-1,e)),s=Math.max(0,Math.min(be-1,i));return _a(n,s)}function Gs(o,t){return{x:(o+.5)*si-ve/2,z:(t+.5)*si-ve/2}}var vf=[{id:"forn_porto",tipo:"fornitore",cella:[4,0],nome:"Vasi \u2014 magazzino 12",quartiere:"porto",tierMax:4,sconto:.78},{id:"forn_torri",tipo:"fornitore",cella:[7,8],nome:"Zia Mara \u2014 chiosco",quartiere:"torri",tierMax:3,sconto:.86},{id:"forn_latino",tipo:"fornitore",cella:[1,4],nome:"Bar Bianco Nero",quartiere:"latino",tierMax:2,sconto:.92},{id:"casa_villa",tipo:"casa",cella:[7,3],nome:"Casa tua",quartiere:"villarosa"},{id:"casa_torri",tipo:"casa",cella:[2,8],nome:"Appartamento Torri (affitto)",quartiere:"torri",prezzo:4e3},{id:"casa_argento",tipo:"casa",cella:[5,4],nome:"Loft Argento (affitto)",quartiere:"argento",prezzo:22e3},{id:"ospedale",tipo:"ospedale",cella:[6,5],nome:"Pronto soccorso San Rocco",quartiere:"villarosa"},{id:"centrale",tipo:"centrale",cella:[3,2],nome:"Commissariato centrale",quartiere:"argento"},{id:"pegni",tipo:"pegni",cella:[0,6],nome:"Compro Oro Delfino",quartiere:"latino"}];function wi(o){let t=o>>>0;return function(){t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function xf(o){let t=2166136261;for(let e=0;e<o.length;e++)t^=o.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}var at=(o,t,e)=>Math.max(t,Math.min(e,o)),Ri=(o,t,e)=>o+(t-o)*e;var xe=(o,t=Math.random)=>o[Math.floor(t()*o.length)];function Vi(o,t,e,i){return o+(t-o)*(1-Math.exp(-e*i))}function Ct(o){return"\u20AC "+Math.round(o).toLocaleString("it-IT")}function An(o){let t=Math.floor(o)%1440,e=Math.floor(t/60);return`${String(e).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function _f(o=Math.random){return(o()+o()+o()+o()+o()+o()-3)/1.2247}var Cy=["Marco","Sara","Youssef","Deborah","Nico","Ilaria","Fabio","Wanda","Tarek","Giulia","Enzo","Miriam","Boban","Cinzia","Rachid","Loredana","Simone","Katia","Andrei","Pino","Selin","Manuel","Ornella","Davide","Aisha","Gigi","Vera","Samir","Cristian","Nadia"],Py=["il Corto","Scintilla","Due Dita","la Rossa","Pomata","Zero","Bisturi","Lampo","Coniglio","Mezzanotte","Cera","Ossa","Trentini","Bocca","Falco","Rimmel","Pastore","Bufalo"];function ya(o=Math.random){return`${xe(Cy,o)} ${xe(Py,o)}`}var ke=new Map;function wn(o,t){let e=document.createElement("canvas");return e.width=o,e.height=t,[e,e.getContext("2d")]}function Rn(o,t=1,e=1){let i=new Mi(o);return i.wrapS=i.wrapT=en,i.repeat.set(t,e),i.anisotropy=8,i}var ae=(o,t)=>o+Math.random()*(t-o);function Ma(o,t,e,i,n=.05){for(let s=0;s<i;s++){o.fillStyle=`rgba(0,0,0,${ae(n*.3,n)})`;let r=ae(2,Math.min(t,e)*.14);o.beginPath(),o.arc(ae(0,t),ae(0,e),r,0,Math.PI*2),o.fill()}}function yf(o,t=4,e=4,i=""){let n=`f_${o}_${t}_${e}_${i}`;if(ke.has(n))return ke.get(n);let s=64,r=t*s,a=e*s,[l,c]=wn(r,a),[h,u]=wn(r,a),d=new st(o);c.fillStyle=`#${d.getHexString()}`,c.fillRect(0,0,r,a);for(let g=0;g<e;g++)c.fillStyle="rgba(0,0,0,0.13)",c.fillRect(0,g*s+s-5,r,5),c.fillStyle="rgba(255,255,255,0.05)",c.fillRect(0,g*s+s-8,r,3);u.fillStyle="#000",u.fillRect(0,0,r,a);let f=d.clone().lerp(new st(857634),.78),p=d.clone().lerp(new st(1053206),.45);for(let g=0;g<e;g++)for(let m=0;m<t;m++){let _=m*s,x=g*s,y=s*.52,w=s*.6,S=_+(s-y)/2,R=x+(s-w)/2;if(c.fillStyle=`#${p.getHexString()}`,c.fillRect(S-3,R-3,y+6,w+6),c.fillStyle=`#${f.getHexString()}`,c.fillRect(S,R,y,w),c.fillStyle="rgba(255,255,255,0.07)",c.beginPath(),c.moveTo(S,R+w),c.lineTo(S+y*.7,R),c.lineTo(S+y,R),c.lineTo(S+y,R+w*.25),c.lineTo(S,R+w),c.fill(),c.fillStyle=`#${p.getHexString()}`,c.fillRect(S+y/2-1.5,R,3,w),c.fillStyle="rgba(0,0,0,0.18)",c.fillRect(S-4,R+w+3,y+8,4),Math.random()<.52){let z=Math.random(),M=z<.72?[255,214,150]:z<.9?[180,210,255]:[140,255,200];u.fillStyle=`rgb(${M[0]},${M[1]},${M[2]})`,u.fillRect(S,R,y,w),Math.random()<.3&&(u.fillStyle="#000",u.fillRect(S,R,y,w*ae(.2,.6)))}}Ma(c,r,a,40,.07);let v={map:Rn(l),emissiveMap:Rn(h),colonne:t,righe:e};return ke.set(n,v),v}function Mf(o,t=""){let e=`pt_${o}_${t}`;if(ke.has(e))return ke.get(e);let i=512,n=256,[s,r]=wn(i,n),[a,l]=wn(i,n),c=new st(o).lerp(new st(2763310),.28);r.fillStyle=`#${c.getHexString()}`,r.fillRect(0,0,i,n),l.fillStyle="#000",l.fillRect(0,0,i,n);let h=["#ff4d6a","#4dd2ff","#ffd24d","#7dff9e","#c77dff","#ff8a4d"],u=4;for(let f=0;f<u;f++){let p=i/u*f,v=i/u-14,g=Math.random()<.35;if(r.fillStyle=g?"#2b2f36":"#0e1a24",r.fillRect(p+7,96,v,132),g)for(let _=100;_<226;_+=7)r.fillStyle="rgba(0,0,0,0.28)",r.fillRect(p+7,_,v,3);else r.fillStyle="rgba(255,255,255,0.10)",r.beginPath(),r.moveTo(p+7,228),r.lineTo(p+7+v*.55,96),r.lineTo(p+7+v,96),r.lineTo(p+7+v,130),r.lineTo(p+7,228),r.fill(),l.fillStyle="rgba(255,236,190,0.85)",l.fillRect(p+12,102,v-10,120);let m=h[Math.floor(Math.random()*h.length)];r.fillStyle="#15171c",r.fillRect(p+7,52,v,34),r.fillStyle=m,r.fillRect(p+14,60,v-14,18),l.fillStyle=m,l.fillRect(p+14,60,v-14,18),r.fillStyle="#191c22",r.fillRect(p+7+v*.42,150,v*.22,78)}Ma(r,i,n,60,.1);let d={map:Rn(s),emissiveMap:Rn(a)};return ke.set(e,d),d}function Xc(o=40){let t=`asf_${o}`;if(ke.has(t))return ke.get(t);let[e,i]=wn(256,256);i.fillStyle="#1c1e23",i.fillRect(0,0,256,256);let n=i.getImageData(0,0,256,256);for(let r=0;r<n.data.length;r+=4){let a=(Math.random()-.5)*26;n.data[r]+=a,n.data[r+1]+=a,n.data[r+2]+=a}i.putImageData(n,0,0);for(let r=0;r<5;r++)i.fillStyle=`rgba(10,11,14,${ae(.2,.45)})`,i.beginPath(),i.ellipse(ae(0,256),ae(0,256),ae(14,45),ae(10,30),ae(0,3),0,Math.PI*2),i.fill();i.strokeStyle="rgba(8,8,10,0.5)",i.lineWidth=1.6;for(let r=0;r<7;r++){i.beginPath();let a=ae(0,256),l=ae(0,256);i.moveTo(a,l);for(let c=0;c<6;c++)a+=ae(-30,30),l+=ae(-30,30),i.lineTo(a,l);i.stroke()}let s=Rn(e,o,o);return ke.set(t,s),s}function bf(o,t=8){let e=`mrc_${o}_${t}`;if(ke.has(e))return ke.get(e);let[i,n]=wn(256,256),s=new st(o);n.fillStyle=`#${s.getHexString()}`,n.fillRect(0,0,256,256);let r=64;for(let l=0;l<4;l++)for(let c=0;c<4;c++){let h=ae(-10,10),u=s.clone().offsetHSL(0,0,h/255);n.fillStyle=`#${u.getHexString()}`,n.fillRect(l*r+2,c*r+2,r-4,r-4)}n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=2;for(let l=0;l<=4;l++)n.beginPath(),n.moveTo(l*r,0),n.lineTo(l*r,256),n.stroke(),n.beginPath(),n.moveTo(0,l*r),n.lineTo(256,l*r),n.stroke();Ma(n,256,256,30,.09);let a=Rn(i,t,t);return ke.set(e,a),a}function Sf(o,t=6){let e=`pr_${o}`;if(ke.has(e))return ke.get(e);let[i,n]=wn(128,128),s=new st(o);n.fillStyle=`#${s.getHexString()}`,n.fillRect(0,0,128,128);for(let a=0;a<900;a++){let l=ae(-.06,.06),c=s.clone().offsetHSL(ae(-.02,.02),0,l);n.fillStyle=`#${c.getHexString()}`,n.fillRect(ae(0,128),ae(0,128),ae(1,3),ae(2,6))}let r=Rn(i,t,t);return ke.set(e,r),r}function Ef(){if(ke.has("tetto"))return ke.get("tetto");let[o,t]=wn(128,128);t.fillStyle="#3a3d42",t.fillRect(0,0,128,128);for(let i=0;i<1400;i++)t.fillStyle=`rgba(${ae(70,130)|0},${ae(70,130)|0},${ae(75,135)|0},0.6)`,t.fillRect(ae(0,128),ae(0,128),ae(1,3),ae(1,3));Ma(t,128,128,25,.12);let e=Rn(o,3,3);return ke.set("tetto",e),e}function Af(o,t=!1){let e=o[0].index!==null,i=new Set(Object.keys(o[0].attributes)),n=new Set(Object.keys(o[0].morphAttributes)),s={},r={},a=o[0].morphTargetsRelative,l=new Ce,c=0;for(let h=0;h<o.length;++h){let u=o[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<o.length;++d){let f=o[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=o[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Tf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in r){let u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<r[h].length;++v)f.push(r[h][v][d]);let p=Tf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Tf(o){let t,e,i,n=-1,s=0;for(let c=0;c<o.length;++c){let h=o[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let r=new t(s),a=0;for(let c=0;c<o.length;++c)r.set(o[c].array,a),a+=o[c].array.length;let l=new Te(r,e,i);return n!==void 0&&(l.gpuType=n),l}function Yc(o,t){if(t===Kd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===zo||t===ca){let e=o.getIndex();if(e===null){let r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}let i=e.count-2,n=[];if(t===zo)for(let r=1;r<=i;r++)n.push(e.getX(0)),n.push(e.getX(r)),n.push(e.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(e.getX(r)),n.push(e.getX(r+1)),n.push(e.getX(r+2))):(n.push(e.getX(r+2)),n.push(e.getX(r+1)),n.push(e.getX(r)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=o.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}var In=class extends an{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new eh(e)}),this.register(function(e){return new hh(e)}),this.register(function(e){return new uh(e)}),this.register(function(e){return new dh(e)}),this.register(function(e){return new nh(e)}),this.register(function(e){return new sh(e)}),this.register(function(e){return new oh(e)}),this.register(function(e){return new rh(e)}),this.register(function(e){return new th(e)}),this.register(function(e){return new ah(e)}),this.register(function(e){return new ih(e)}),this.register(function(e){return new ch(e)}),this.register(function(e){return new lh(e)}),this.register(function(e){return new jc(e)}),this.register(function(e){return new fh(e)}),this.register(function(e){return new ph(e)})}load(t,e,i,n){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let c=Sn.extractUrlBase(t);r=Sn.resolveURL(c,this.path)}else r=Sn.extractUrlBase(t);this.manager.itemStart(t);let a=function(c){n?n(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new Co(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,r,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s,r={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===If){try{r[Jt.KHR_BINARY_GLTF]=new mh(t)}catch(u){n&&n(u);return}s=JSON.parse(r[Jt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new bh(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Jt.KHR_MATERIALS_UNLIT:r[u]=new Qc;break;case Jt.KHR_DRACO_MESH_COMPRESSION:r[u]=new gh(s,this.dracoLoader);break;case Jt.KHR_TEXTURE_TRANSFORM:r[u]=new vh;break;case Jt.KHR_MESH_QUANTIZATION:r[u]=new xh;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(i,n)}parseAsync(t,e){let i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}};function zy(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}var Jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},jc=class{constructor(t){this.parser=t,this.name=Jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){let s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,i="light:"+t,n=e.cache.get(i);if(n)return n;let s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],c,h=new st(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],De);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Os(h),c.distance=u;break;case"spot":c=new oa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Pn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),n=Promise.resolve(c),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,i=this.parser,s=i.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(e.cache,a,l)})}},Qc=class{constructor(){this.name=Jt.KHR_MATERIALS_UNLIT}getMaterialType(){return Me}extendParams(t,e,i){let n=[];t.color=new st(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],De),t.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,ue))}return Promise.all(n)}},th=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},eh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ei}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let a=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Q(a,a)}return Promise.all(s)}},ih=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ei}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}},nh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_SHEEN}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ei}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new st(0,0,0),e.sheenRoughness=0,e.sheen=1;let r=n.extensions[this.name];if(r.sheenColorFactor!==void 0){let a=r.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],De)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",r.sheenColorTexture,ue)),r.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}},sh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ei}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(s)}},oh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_VOLUME}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ei}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;let a=r.attenuationColor||[1,1,1];return e.attenuationColor=new st().setRGB(a[0],a[1],a[2],De),Promise.all(s)}},rh=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_IOR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ei}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},ah=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ei}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",r.specularTexture));let a=r.specularColorFactor||[1,1,1];return e.specularColor=new st().setRGB(a[0],a[1],a[2],De),r.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",r.specularColorTexture,ue)),Promise.all(s)}},lh=class{constructor(t){this.parser=t,this.name=Jt.EXT_MATERIALS_BUMP}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ei}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(s)}},ch=class{constructor(t){this.parser=t,this.name=Jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Ei}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}},hh=class{constructor(t){this.parser=t,this.name=Jt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,r)}},uh=class{constructor(t){this.parser=t,this.name=Jt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let r=s.extensions[e],a=n.images[r.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,r.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},dh=class{constructor(t){this.parser=t,this.name=Jt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let r=s.extensions[e],a=n.images[r.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,r.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},fh=class{constructor(t){this.name=Jt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):r.ready.then(function(){let f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}},ph=class{constructor(t){this.name=Jt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=e.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==Ci.TRIANGLES&&c.mode!==Ci.TRIANGLE_STRIP&&c.mode!==Ci.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=i.extensions[this.name].attributes,a=[],l={};for(let c in r)a.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let v=new qt,g=new C,m=new He,_=new C(1,1,1),x=new ni(p.geometry,p.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,v.compose(g,m,_));for(let y in l)if(y==="_COLOR_0"){let w=l[y];x.instanceColor=new Yn(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,l[y]);jt.prototype.copy.call(x,p),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},If="glTF",Do=12,wf={JSON:1313821514,BIN:5130562},mh=class{constructor(t){this.name=Jt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Do),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==If)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Do,s=new DataView(t,Do),r=0;for(;r<n;){let a=s.getUint32(r,!0);r+=4;let l=s.getUint32(r,!0);if(r+=4,l===wf.JSON){let c=new Uint8Array(t,Do+r,a);this.content=i.decode(c)}else if(l===wf.BIN){let c=Do+r;this.body=t.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},gh=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Jt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,a={},l={},c={};for(let h in r){let u=yh[h]||h.toLowerCase();a[u]=r[h]}for(let h in t.attributes){let u=yh[h]||h.toLowerCase();if(r[h]!==void 0){let d=i.accessors[t.attributes[h]],f=Ws[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(let p in f.attributes){let v=f.attributes[p],g=l[p];g!==void 0&&(v.normalized=g)}u(f)},a,c,De,d)})})}},vh=class{constructor(){this.name=Jt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},xh=class{constructor(){this.name=Jt.KHR_MESH_QUANTIZATION}},ba=class extends yn{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let r=0;r!==n;r++)e[r]=i[s+r];return e}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-e,u=(i-e)/h,d=u*u,f=d*u,p=t*c,v=p-c,g=-2*f+3*d,m=f-d,_=1-g,x=m-d+u;for(let y=0;y!==a;y++){let w=r[v+y+a],S=r[v+y+l]*h,R=r[p+y+a],z=r[p+y]*h;s[y]=_*w+x*S+g*R+m*z}return s}},Ly=new He,_h=class extends ba{interpolate_(t,e,i,n){let s=super.interpolate_(t,e,i,n);return Ly.fromArray(s).normalize().toArray(s),s}},Ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rf={9728:Ie,9729:ti,9984:Sr,9985:Oc,9986:oo,9987:xn},Cf={33071:ci,33648:mo,10497:en},Zc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dy={CUBICSPLINE:void 0,LINEAR:Xn,STEP:Rs},Kc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ny(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),o.DefaultMaterial}function Jn(o,t,e){for(let i in e.extensions)o[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function Pn(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Uy(o,t,e){let i=!1,n=!1,s=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(o);let r=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(i){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(n){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(o.morphAttributes.position=h),n&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Oy(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)o.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Fy(o){let t,e=o.extensions&&o.extensions[Jt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Jc(e.attributes):t=o.indices+":"+Jc(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,n=o.targets.length;i<n;i++)t+=":"+Jc(o.targets[i]);return t}function Jc(o){let t="",e=Object.keys(o).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+o[e[i]]+";";return t}function Mh(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function By(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var ky=new qt,bh=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new zy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new na(this.options.manager):this.textureLoader=new ra(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Co(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){let a={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};return Jn(s,a,n),Pn(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n].joints;for(let a=0,l=r.length;a<l;a++)t[r[a]].isBone=!0}for(let n=0,s=t.length;n<s;n++){let r=t[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;let n=i.clone(),s=(r,a)=>{let l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(let[c,h]of r.children.entries())s(h,a.children[c])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){let n=t(e[i]);if(n)return n}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let i=[];for(let n=0;n<e.length;n++){let s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){let i=t+":"+e,n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){let i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,r){return i.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Jt.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,r){i.load(Sn.resolveURL(e.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){let n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){let e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){let r=Zc[n.type],a=Ws[n.componentType],l=n.normalized===!0,c=new a(n.count*r);return Promise.resolve(new Te(c,r,l))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){let a=r[0],l=Zc[n.type],c=Ws[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,p=n.normalized===!0,v,g;if(f&&f!==u){let m=Math.floor(d/f),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count,x=e.cache.get(_);x||(v=new c(a,m*f,n.count*f/h),x=new _o(v,f/h),e.cache.add(_,x)),g=new yo(x,l,d%f/h,p)}else a===null?v=new c(n.count*l):v=new c(a,d,n.count*l),g=new Te(v,l,p);if(n.sparse!==void 0){let m=Zc.SCALAR,_=Ws[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,w=new _(r[1],x,n.sparse.count*m),S=new c(r[2],y,n.sparse.count*l);a!==null&&(g=new Te(g.array.slice(),g.itemSize,g.normalized));for(let R=0,z=w.length;R<z;R++){let M=w[R];if(g.setX(M,S[R*l]),l>=2&&g.setY(M,S[R*l+1]),l>=3&&g.setZ(M,S[R*l+2]),l>=4&&g.setW(M,S[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){let e=this.json,i=this.options,s=e.textures[t].source,r=e.images[s],a=this.textureLoader;if(r.uri){let l=i.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,i){let n=this,s=this.json,r=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,i).then(function(h){h.flipY=!1,h.name=r.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Rf[d.magFilter]||ti,h.minFilter=Rf[d.minFilter]||xn,h.wrapS=Cf[d.wrapS]||en,h.wrapT=Cf[d.wrapT]||en,n.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let r=n.images[t],a=self.URL||self.webkitURL,l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=i.getDependency("bufferView",r.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;e.isImageBitmapLoader===!0&&(p=function(v){let g=new Ve(v);g.needsUpdate=!0,d(g)}),e.load(Sn.resolveURL(u,s.path),p,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=r.mimeType||By(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,i,n){let s=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),s.extensions[Jt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[Jt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(r);r=s.extensions[Jt.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return n!==void 0&&(r.colorSpace=n),t[e]=r,r})}assignFinalMaterial(t){let e=t.geometry,i=t.material,n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new So,ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(t.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new bo,ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||s||r){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}t.material=i}getMaterialType(){return Ft}loadMaterial(t){let e=this,i=this.json,n=this.extensions,s=i.materials[t],r,a={},l=s.extensions||{},c=[];if(l[Jt.KHR_MATERIALS_UNLIT]){let u=n[Jt.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(a,s,e))}else{let u=s.pbrMetallicRoughness||{};if(a.color=new st(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],De),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,ue)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=ei);let h=s.alphaMode||Kc.OPAQUE;if(h===Kc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Kc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Me&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Q(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==Me&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Me){let u=s.emissiveFactor;a.emissive=new st().setRGB(u[0],u[1],u[2],De)}return s.emissiveTexture!==void 0&&r!==Me&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,ue)),Promise.all(c).then(function(){let u=new r(a);return s.name&&(u.name=s.name),Pn(u,s),e.associations.set(u,{materials:t}),s.extensions&&Jn(n,u,s),u})}createUniqueName(t){let e=he.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[Jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Pf(l,a,e)})}let r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a],h=Fy(c),u=n[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[Jt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Pf(new Ce,c,e),n[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(t){let e=this,i=this.json,n=this.extensions,s=i.meshes[t],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){let h=r[l].material===void 0?Ny(this.cache):this.getDependency("material",r[l].material);a.push(h)}return a.push(e.loadGeometries(r)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let v=h[f],g=r[f],m,_=c[f];if(g.mode===Ci.TRIANGLES||g.mode===Ci.TRIANGLE_STRIP||g.mode===Ci.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new Vr(v,_):new Lt(v,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Ci.TRIANGLE_STRIP?m.geometry=Yc(m.geometry,ca):g.mode===Ci.TRIANGLE_FAN&&(m.geometry=Yc(m.geometry,zo));else if(g.mode===Ci.LINES)m=new Wr(v,_);else if(g.mode===Ci.LINE_STRIP)m=new Ls(v,_);else if(g.mode===Ci.LINE_LOOP)m=new qr(v,_);else if(g.mode===Ci.POINTS)m=new $r(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Oy(m,s),m.name=e.createUniqueName(s.name||"mesh_"+t),Pn(m,s),g.extensions&&Jn(n,m,g),e.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&Jn(n,u[0],s),u[0];let d=new te;s.extensions&&Jn(n,d,s),e.associations.set(d,{meshes:t});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(t){let e,i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Le(tf.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new _n(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Pn(e,i),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),r=n,a=[],l=[];for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u){a.push(u);let d=new qt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Gr(a,l)})}loadAnimation(t){let e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,r=[],a=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],p=n.samplers[f.sampler],v=f.target,g=v.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,_=n.parameters!==void 0?n.parameters[p.output]:p.output;v.node!==void 0&&(r.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(v))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],v=u[3],g=u[4],m=[];for(let _=0,x=d.length;_<x;_++){let y=d[_],w=f[_],S=p[_],R=v[_],z=g[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=i._createAnimationTracks(y,w,S,R,z);if(M)for(let E=0;E<M.length;E++)m.push(M[E])}return new Ns(s,void 0,m)})}createNodeMesh(t){let e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),r})}loadNode(t){let e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),r=[],a=n.children||[];for(let c=0,h=a.length;c<h;c++)r.push(i.getDependency("node",a[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ky)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(t){let e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],r=s.name?n.createUniqueName(s.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Mo:c.length>1?h=new te:c.length===1?h=c[0]:h=new jt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=r),Pn(h,s),s.extensions&&Jn(i,h,s),s.matrix!==void 0){let u=new qt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,i=this.json.scenes[t],n=this,s=new te;i.name&&(s.name=n.createUniqueName(i.name)),Pn(s,i),i.extensions&&Jn(e,s,i);let r=i.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(n.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof ui||d instanceof Ve)&&u.set(d,f);return h.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}_createAnimationTracks(t,e,i,n,s){let r=[],a=t.name?t.name:t.uuid,l=[];Cn[s.path]===Cn.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Cn[s.path]){case Cn.weights:c=on;break;case Cn.rotation:c=Hi;break;case Cn.position:case Cn.scale:c=rn;break;default:i.itemSize===1?c=on:c=rn;break}let h=n.interpolation!==void 0?Dy[n.interpolation]:Xn,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){let p=new c(l[d]+"."+Cn[s.path],e.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),r.push(p)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let i=Mh(e.constructor),n=new Float32Array(e.length);for(let s=0,r=e.length;s<r;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){let n=this instanceof Hi?_h:ba;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Hy(o,t,e){let i=t.attributes,n=new fe;if(i.POSITION!==void 0){let a=e.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let h=Mh(Ws[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let a=new C,l=new C;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let v=Mh(Ws[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}o.boundingBox=n;let r=new hi;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,o.boundingSphere=r}function Pf(o,t,e){let i=t.attributes,n=[];function s(r,a){return e.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(let r in i){let a=yh[r]||r.toLowerCase();a in o.attributes||n.push(s(i[r],a))}if(t.indices!==void 0&&!o.index){let r=e.getDependency("accessor",t.indices).then(function(a){o.setIndex(a)});n.push(r)}return Qt.workingColorSpace!==De&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),Pn(o,t),Hy(o,t,e),Promise.all(n).then(function(){return t.targets!==void 0?Uy(o,t.targets,e):o})}var pi=2,Sh=3,Vy={muro:"Brick_Plain_3",muroAlt:"Brick_HalfTrim",finestra:"Brick_Window_Square_Single",finestra2:"Brick_Window_Trim_Single",cornice:"Brick_TopTrim",vetrina:"Metal_FirstFloor_Window",serranda:"Metal_FirstFloor_Wall",porta:"DoorFrame_Metal_Single"},No=new Map,Eh=[],zf=null;function Df(){return zf??=Gy(),zf}async function Gy(){let o=new In;await Promise.all(Object.entries(Vy).map(async([t,e])=>{try{let i=await o.loadAsync(`assets/citta/${e}.gltf`),n=Wy(i.scene);n&&No.set(t,n)}catch{}}))}function Th(){return No.has("muro")}function Wy(o){o.updateMatrixWorld(!0);let t=[],e=[];if(o.traverse(n=>{if(!n.isMesh)return;let s=n.geometry.clone();s.applyMatrix4(n.matrixWorld);for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);s.attributes.uv||s.setAttribute("uv",new Te(new Float32Array(s.attributes.position.count*2),2)),t.push(s),e.push(qy(n.material))}),!t.length)return null;let i=Af(t,!0);return i?{geometria:i,materiali:e}:null}var Lf=new Map;function qy(o){let t=o.name||o.uuid,e=Lf.get(t);return e||(o.side=yi,o.vertexColors=!1,o.metalness=0,o.metalnessMap=null,/Glass/i.test(o.name??"")&&(o.color=new st(10466500),o.roughness=.15),/FakeInterior/i.test(o.name??"")&&(o.emissive=new st(16764822),o.emissiveMap=o.map??null,o.emissiveIntensity=0,Eh.push(o)),Lf.set(t,o),o)}function zn(...o){for(let t of o)if(No.has(t))return t;return"muro"}function Nf(o,t=Math.random){if(!Th()||!o.length)return null;let e=new Map,i=[];for(let c of o){let h=Math.max(2,Math.round(c.sx/pi)),u=Math.max(2,Math.round(c.sz/pi)),d=h*pi,f=u*pi,p=Math.max(2,Math.min(16,Math.round(c.sy/Sh))),v=new st(c.colore??12432036).lerp(new st(16777215),.45).multiplyScalar(3),g={finestra:t()<.5?zn("finestra","muro"):zn("finestra2","finestra","muro"),muro:"muro",passo:t()<.55?2:3,sfasa:Math.floor(t()*3),fascia:No.has("muroAlt")?3+Math.floor(t()*3):0,porta:Math.floor(t()*h)};for(let m=0;m<p;m++){let _=m*Sh,x=m===p-1;for(let y of $y(d,f,h,u))for(let w=0;w<y.n;w++){let S=Xy(m,x,y,w,g,t);e.set(S,(e.get(S)??0)+1),i.push({chiave:S,tinta:v,x:c.x+y.x(w),y:_,z:c.z+y.z(w),ry:y.ry})}}i.push({nucleo:!0,x:c.x,z:c.z,sx:d,sz:f,h:p*Sh})}let n=new te,s=new Map,r=new Map;for(let[c,h]of e){let u=No.get(c),d=new ni(u.geometria,u.materiali,h);d.castShadow=!0,d.receiveShadow=!0,s.set(c,d),r.set(c,0),n.add(d)}let a=new jt,l=[];for(let c of i){if(c.nucleo){l.push(c);continue}a.position.set(c.x,c.y,c.z),a.rotation.set(0,c.ry,0),a.scale.set(1,1,1),a.updateMatrix();let h=r.get(c.chiave),u=s.get(c.chiave);u.setMatrixAt(h,a.matrix),u.setColorAt(h,c.tinta),r.set(c.chiave,h+1)}for(let c of s.values())c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0);return n.add(Yy(l)),n}function $y(o,t,e,i){let n=o/2,s=t/2;return[{n:e,ry:0,x:r=>-n+pi*(r+.5),z:()=>s,fronte:!0},{n:e,ry:Math.PI,x:r=>-n+pi*(r+.5),z:()=>-s,fronte:!1},{n:i,ry:Math.PI/2,x:()=>n,z:r=>-s+pi*(r+.5),fronte:!1},{n:i,ry:-Math.PI/2,x:()=>-n,z:r=>-s+pi*(r+.5),fronte:!1}]}function Xy(o,t,e,i,n,s){return t?zn("cornice",n.muro):o===0?e.fronte&&i===n.porta?zn("porta","serranda","muro"):e.fronte||s()<.25?zn("vetrina","muro"):zn("serranda","muro"):n.fascia&&o%n.fascia===0?zn("muroAlt","muro"):(i+n.sfasa)%n.passo===0?n.finestra:n.muro}function Yy(o){let t=new Ze(1,1,1),e=new Ft({color:1776929,roughness:1}),i=new ni(t,e,o.length);i.castShadow=!1,i.receiveShadow=!0;let n=new jt;return o.forEach((s,r)=>{n.position.set(s.x,s.h/2,s.z),n.scale.set(s.sx-.3,s.h+.25,s.sz-.3),n.rotation.set(0,0,0),n.updateMatrix(),i.setMatrixAt(r,n.matrix)}),i.instanceMatrix.needsUpdate=!0,i}var Zy=.32,Ky=.55,Of=(ie+5)/2,Sa=class{constructor(t,e=20260811){this.scena=t,this.rng=wi(e),this.collisori=[],this.lampioni=[],this.luoghi=[],this.vicoli=[],this._costruisci()}_costruisci(){this._asfaltoEMarciapiedi(),this._edifici(),this._arredo(),this._luoghiInterattivi()}_asfaltoEMarciapiedi(){let t=new Lt(new sn(ve+60,ve+60),new Ft({map:Xc(Math.round((ve+60)/12)),color:16777215,roughness:.92,metalness:0}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scena.add(t);let e=[];for(let a=1;a<be;a++){let l=a*si-ve/2-Vs/2;for(let c=-ve/2;c<ve/2;c+=9)e.push({x:l,z:c,ruota:!1},{x:c,z:l,ruota:!0})}let i=new ni(new sn(1,4),new Ft({color:6974042,roughness:.9}),e.length),n=new jt;e.forEach((a,l)=>{n.position.set(a.x,.02,a.z),n.rotation.set(-Math.PI/2,0,a.ruota?Math.PI/2:0),n.updateMatrix(),i.setMatrixAt(l,n.matrix)}),i.instanceMatrix.needsUpdate=!0,this.scena.add(i);let s=new Ze(ie+5,.32,ie+5),r={};for(let a=0;a<be;a++)for(let l=0;l<be;l++){let c=_a(a,l);(r[c]??=[]).push(Gs(a,l))}for(let[a,l]of Object.entries(r)){let c=new st(ne[a].colore).lerp(new st(6974056),.72),h=new ni(s,new Ft({map:bf(`#${c.getHexString()}`,14),roughness:.95}),l.length);h.receiveShadow=!0;let u=new jt;l.forEach((d,f)=>{u.position.set(d.x,.16,d.z),u.updateMatrix(),h.setMatrixAt(f,u.matrix)}),h.instanceMatrix.needsUpdate=!0,this.scena.add(h)}}_edifici(){let t={},i=new Map;for(let l=0;l<be;l++)for(let c=0;c<be;c++){let h=_a(l,c),u=ne[h],d=Gs(l,c);if(this.rng()<.12){this._piazza(d,h);continue}let f=`${Math.floor(l/3)},${Math.floor(c/3)}`,p=i.get(f)??i.set(f,[]).get(f),v=this.rng()<.45?1:this.rng()<.6?2:4,g=this._suddividi(d,v);for(let m of g){if(this.rng()<.15)continue;let _=1.2+this.rng()*2.2,x=Math.max(5,m.sx-_*2),y=Math.max(5,m.sz-_*2),[w,S]=u.altezzaEdifici,R=Math.hypot(l-be/2,c-be/2)/(be/2),z=h==="argento"?1-R:this.rng(),M=Ri(w,S,Math.pow(Math.max(0,Math.min(1,z*.7+this.rng()*.5)),1.3)),E=Math.floor(this.rng()*u.coloreEdifici.length),D={x:m.x,z:m.z,sx:x,sz:y,sy:M,tinta:E,colore:u.coloreEdifici[E]};(t[h]??=[]).push(D),p.push(D);let F=Math.max(2,Math.round(x/pi))*pi,Y=Math.max(2,Math.round(y/pi))*pi;this.collisori.push({x:m.x,z:m.z,sx:F,sz:Y})}}if(Th()){for(let l of i.values()){let c=Nf(l,this.rng);c&&this.scena.add(c)}this._materialiNotte=Eh,this._forzaNotte=1.4;return}this._materialiNotte=[],this._forzaNotte=.55;let n=new Ze(1,1,1),s=new Ze(1,1,1),r=3.4,a=4.2;for(let[l,c]of Object.entries(t)){let h=ne[l].coloreEdifici,u=[[0,14],[14,26],[26,42],[42,200]];for(let w=0;w<h.length;w++)for(let[S,R]of u){let z=c.filter(rt=>rt.tinta===w&&rt.sy>=S&&rt.sy<R);if(!z.length)continue;let M=z.reduce((rt,G)=>rt+G.sy,0)/z.length,E=z.reduce((rt,G)=>rt+(G.sx+G.sz)/2,0)/z.length,D=Math.max(2,Math.round((M-a)/r)),F=Math.max(2,Math.round(E/3.6)),Y=yf(h[w],Math.min(F,6),Math.min(D,6),`${l}${w}${S}`),P=Y.map.clone();P.needsUpdate=!0;let N=Y.emissiveMap.clone();N.needsUpdate=!0,P.repeat.set(F/Y.colonne,D/Y.righe),N.repeat.copy(P.repeat);let k=new Ft({map:P,emissiveMap:N,emissive:16777215,emissiveIntensity:0,roughness:.82,metalness:.04});this._materialiNotte.push(k);let K=new Ft({map:Ef(),roughness:.95}),q=new Ft({color:855569,roughness:1}),W=[k,k,K,q,k,k],$=new ni(n,W,z.length);$.castShadow=!0,$.receiveShadow=!0;let J=new jt;z.forEach((rt,G)=>{J.position.set(rt.x,a+(rt.sy-a)/2,rt.z),J.scale.set(rt.sx,Math.max(1,rt.sy-a),rt.sz),J.updateMatrix(),$.setMatrixAt(G,J.matrix)}),$.instanceMatrix.needsUpdate=!0,this.scena.add($)}let d=Mf(h[0],l),f=d.map.clone();f.needsUpdate=!0;let p=d.emissiveMap.clone();p.needsUpdate=!0,f.repeat.set(2.2,1),p.repeat.copy(f.repeat);let v=new Ft({map:f,emissiveMap:p,emissive:16777215,emissiveIntensity:0,roughness:.7,metalness:.05});this._materialiNotte.push(v);let g=new Ft({color:2764083,roughness:.9}),m=new Ft({color:855569,roughness:1}),_=[v,v,g,m,v,v],x=new ni(s,_,c.length);x.castShadow=!0,x.receiveShadow=!0;let y=new jt;c.forEach((w,S)=>{y.position.set(w.x,Math.min(w.sy,a)/2,w.z),y.scale.set(w.sx+.5,Math.min(w.sy,a),w.sz+.5),y.updateMatrix(),x.setMatrixAt(S,y.matrix)}),x.instanceMatrix.needsUpdate=!0,this.scena.add(x)}}_suddividi(t,e){if(e===1)return[{x:t.x,z:t.z,sx:ie,sz:ie}];if(e===2){let n=this.rng()<.5,s=.35+this.rng()*.3;return n?[{x:t.x-ie*(1-s)/2,z:t.z,sx:ie*s,sz:ie},{x:t.x+ie*s/2,z:t.z,sx:ie*(1-s),sz:ie}]:[{x:t.x,z:t.z-ie*(1-s)/2,sx:ie,sz:ie*s},{x:t.x,z:t.z+ie*s/2,sx:ie,sz:ie*(1-s)}]}let i=ie/2;return this.vicoli.push({x:t.x,z:t.z,r:ie*.32}),[{x:t.x-i/2,z:t.z-i/2,sx:i,sz:i},{x:t.x+i/2,z:t.z-i/2,sx:i,sz:i},{x:t.x-i/2,z:t.z+i/2,sx:i,sz:i},{x:t.x+i/2,z:t.z+i/2,sx:i,sz:i}]}_piazza(t,e){let i=new Lt(new sn(ie-6,ie-6),new Ft({map:e==="porto"?Xc(6):Sf("#2f4a30",5),roughness:1}));i.rotation.x=-Math.PI/2,i.position.set(t.x,.35,t.z),i.receiveShadow=!0,this.scena.add(i);let n=new di(.28,.38,3.2,6),s=new Qr(2.1,0),r=new Ft({color:4864554,roughness:1}),a=new Ft({color:3103283,roughness:1,flatShading:!0});for(let l=0;l<6;l++){let c=t.x+(this.rng()-.5)*(ie-12),h=t.z+(this.rng()-.5)*(ie-12),u=new Lt(n,r);u.position.set(c,1.9,h),u.castShadow=!0;let d=new Lt(s,a);d.position.set(c,4.4,h),d.scale.set(1,.85+this.rng()*.4,1),d.castShadow=!0,this.scena.add(u,d),this.collisori.push({x:c,z:h,sx:.9,sz:.9})}}_arredo(){let t=[],e=[];for(let d=1;d<be;d++)for(let f=0;f<be;f++){let p=d*si-ve/2-Vs/2,v=(f+.5)*si-ve/2;t.push({x:p+5.5,z:v},{x:v,z:p+5.5})}for(let d=0;d<be;d++)for(let f=0;f<be;f++){if(this.rng()>.5)continue;let p=Gs(d,f);e.push({x:p.x+(this.rng()-.5)*ie,z:p.z+(this.rng()-.5)*ie,r:this.rng()*Math.PI})}let i=new di(.12,.16,7,5),n=new Ft({color:3488063,roughness:.8,metalness:.4}),s=new ni(i,n,t.length),r=new Si(.42,8,6);this.matLampada=new Ft({color:16764810,emissive:16764810,emissiveIntensity:0,roughness:.5});let a=new ni(r,this.matLampada,t.length),l=new jt;t.forEach((d,f)=>{l.position.set(d.x,3.5,d.z),l.scale.set(1,1,1),l.rotation.set(0,0,0),l.updateMatrix(),s.setMatrixAt(f,l.matrix),l.position.set(d.x,7.1,d.z),l.updateMatrix(),a.setMatrixAt(f,l.matrix)}),s.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,this.scena.add(s,a),this.lampioni=t;let c=new Ze(2.4,1.6,1.5),h=new Ft({color:4151877,roughness:.9}),u=new ni(c,h,e.length);u.castShadow=!0,e.forEach((d,f)=>{l.position.set(d.x,.95,d.z),l.rotation.set(0,d.r,0),l.scale.set(1,1,1),l.updateMatrix(),u.setMatrixAt(f,l.matrix),this.collisori.push({x:d.x,z:d.z,sx:2.6,sz:1.8}),this.vicoli.push({x:d.x,z:d.z,r:5})}),u.instanceMatrix.needsUpdate=!0,this.scena.add(u)}_luoghiInterattivi(){let t={fornitore:57504,casa:6332671,ospedale:16736352,centrale:4219135,pegni:16760896};for(let e of vf){let i=Gs(e.cella[0],e.cella[1]),n=new C(i.x,0,i.z+ie/2+3),s=t[e.tipo]??16777215,r=new Lt(new di(2.6,2.6,.12,16),new Me({color:s,transparent:!0,opacity:.2}));r.position.copy(n).setY(.4);let a=new Lt(new di(.9,1.4,9,12,1,!0),new Me({color:s,transparent:!0,opacity:.045,side:ei,depthWrite:!1}));a.position.copy(n).setY(4.5),this.scena.add(r,a),this.luoghi.push({...e,pos:n,alone:r,colonna:a,raggio:4.5})}}risolviCollisione(t,e,i){let n=t,s=e;for(let a of this.collisori){let l=a.sx/2+i,c=a.sz/2+i,h=n-a.x,u=s-a.z;if(Math.abs(h)<l&&Math.abs(u)<c){let d=l-Math.abs(h),f=c-Math.abs(u);d<f?n+=Math.sign(h||1)*d:s+=Math.sign(u||1)*f}}let r=ve/2-2;return{x:Math.max(-r,Math.min(r,n)),z:Math.max(-r,Math.min(r,s))}}quotaSuolo(t,e){let i=Math.floor((t+ve/2)/si),n=Math.floor((e+ve/2)/si);if(i<0||n<0||i>=be||n>=be)return 0;let s=Gs(i,n),r=Math.max(Math.abs(t-s.x),Math.abs(e-s.z));if(r>=Of)return 0;let a=Math.min(1,(Of-r)/Ky);return Zy*a*a*(3-2*a)}libero(t,e,i=.8){for(let n of this.collisori)if(Math.abs(t-n.x)<n.sx/2+i&&Math.abs(e-n.z)<n.sz/2+i)return!1;return!0}puntoSuStrada(t=Math.random){for(let e=0;e<60;e++){let i=t()<.5,s=(1+Math.floor(t()*(be-1)))*si-ve/2-Vs/2+(t()-.5)*(Vs-3),r=(t()-.5)*ve*.95,a=i?s:r,l=i?r:s;if(this.libero(a,l,1.2))return{x:a,z:l}}return{x:0,z:0}}alRiparo(t,e){for(let i of this.vicoli)if((t-i.x)**2+(e-i.z)**2<i.r*i.r)return!0;return!1}aggiornaIlluminazione(t){this.matLampada&&(this.matLampada.emissiveIntensity=t*2.6);for(let e of this._materialiNotte??[])e.emissiveIntensity=t*(this._forzaNotte??.55);for(let e of this.luoghi)e.alone.material.opacity=.14+t*.18}};function Ff(o){let t=new Map,e=new Map,i=o.clone();return Bf(o,i,function(n,s){t.set(s,n),e.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let s=n,r=t.get(n),a=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=a.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Bf(o,t,e){e(o,t);for(let i=0;i<o.children.length;i++)Bf(o.children[i],t.children[i],e)}var Jy=["Superhero_Male_FullBody","Superhero_Female_FullBody"],jy="assets/personaggi/animazioni.glb";function Qy(o){return/^(foot|ball)_/.test(o)?"scarpe":/^(thigh|calf)_/.test(o)||o==="pelvis"||o==="root"?"pantaloni":/^spine_|^clavicle_|^upperarm_/.test(o)?"giacca":"pelle"}var kf=[{giacca:2896960,pantaloni:2765380,scarpe:1382171,pelle:13081202},{giacca:7158574,pantaloni:3355706,scarpe:2104346,pelle:9264963},{giacca:3757119,pantaloni:3027256,scarpe:1711136,pelle:14726284},{giacca:9080728,pantaloni:2371658,scarpe:2761504,pelle:7030063},{giacca:4865891,pantaloni:2040104,scarpe:1513500,pelle:14132091},{giacca:11556159,pantaloni:3815998,scarpe:2236446,pelle:10711374},{giacca:2042167,pantaloni:4866100,scarpe:1645086,pelle:15778971},{giacca:3099791,pantaloni:2304051,scarpe:1382171,pelle:13081202}],tM={giacca:1981035,pantaloni:1713216,scarpe:1053206,pelle:13081202},jn=[],Uo=[],Hf=new Map,Vf=null;function Gf(){return Vf??=iM(),Vf}function eM(){return jn.length>0&&Uo.length>0}async function iM(){let o=new In;try{let t=await Promise.all([...Jy.map(i=>o.loadAsync(`assets/personaggi/${i}.gltf`)),o.loadAsync(jy)]);Uo=t.pop().animations??[];for(let i of t){let n=nM(i.scene);n&&jn.push({scena:i.scene,corpo:n,base:n.material.map??null})}Uo.length||(jn.length=0)}catch{jn.length=0,Uo=[]}}function nM(o){let t=null;return o.traverse(e=>{if(!e.isSkinnedMesh)return;let i=e.geometry.attributes.position.count;(!t||i>t.geometry.attributes.position.count)&&(t=e)}),t}function sM(o,t){let e=`${o}:${t.giacca}:${t.pantaloni}:${t.scarpe}:${t.pelle}`,i=Hf.get(e);if(i)return i;let n=512,s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d"),{corpo:a,base:l}=jn[o],c=a.geometry,h=c.attributes.uv,u=c.attributes.skinIndex,d=c.attributes.skinWeight,f=a.skeleton.bones,p=new Array(h.count);for(let x=0;x<h.count;x++){let y=0,w=-1;for(let S=0;S<4;S++){let R=d.getComponent(x,S);R>w&&(w=R,y=u.getComponent(x,S))}p[x]=Qy(f[y]?.name??"")}r.fillStyle=`#${new st(t.pelle).getHexString()}`,r.fillRect(0,0,n,n);let v=c.index,g=v?v.count:h.count,m={};for(let x of["giacca","pantaloni","scarpe","pelle"])m[x]=`#${new st(t[x]).getHexString()}`;for(let x=0;x<g;x+=3){let y=v?v.getX(x):x,w=v?v.getX(x+1):x+1,S=v?v.getX(x+2):x+2,R=p[y]===p[w]||p[y]===p[S]?p[y]:p[w];r.fillStyle=r.strokeStyle=m[R],r.beginPath(),r.moveTo(h.getX(y)*n,h.getY(y)*n),r.lineTo(h.getX(w)*n,h.getY(w)*n),r.lineTo(h.getX(S)*n,h.getY(S)*n),r.closePath(),r.fill(),r.lineWidth=2,r.stroke()}l?.image&&(r.globalCompositeOperation="luminosity",r.globalAlpha=.55,r.drawImage(l.image,0,0,n,n),r.globalAlpha=1,r.globalCompositeOperation="source-over");let _=new Mi(s);return _.flipY=!1,_.colorSpace=ue,_.anisotropy=4,_.needsUpdate=!0,Hf.set(e,_),_}var oM=[{fino:.25,clip:"Idle_Loop",tempo:1},{fino:2.2,clip:"Walk_Loop",tempo:1},{fino:4.6,clip:"Jog_Fwd_Loop",tempo:1},{fino:1/0,clip:"Sprint_Loop",tempo:1}];function Wf({seme:o=Math.random(),divisa:t=!1}={}){if(!eM())return null;let e=t?0:Math.floor(o*977)%jn.length,i=t?tM:kf[Math.floor(o*613)%kf.length],n=new te,s=Ff(jn[e].scena);n.add(s);let r=sM(e,i);s.traverse(g=>{!g.isMesh&&!g.isSkinnedMesh||(g.castShadow=!0,g.frustumCulled=!1,g.isSkinnedMesh&&g.geometry.attributes.skinWeight?.count>2e3&&(g.material=g.material.clone(),g.material.map=r,g.material.color=new st(16777215),g.material.metalness=0,g.material.roughness=.86,g.material.vertexColors=!1))});let a=new aa(s),l=new Map;for(let g of Uo)l.set(g.name,a.clipAction(g));let c=null,h=(g,m=.28)=>{if(c===g||!l.has(g))return;let _=l.get(g);_.enabled=!0,_.setEffectiveTimeScale(1),_.setEffectiveWeight(1),_.play(),m>0&&_.fadeIn(m),c&&l.has(c)&&l.get(c).fadeOut(m),c=g};h("Idle_Loop",0);for(let g of l.values())g.time=o*3.1;let u=null,d=0,f=g=>{let m=null;return s.traverse(_=>{!m&&_.isBone&&_.name===g&&(m=_)}),m},p={anca:f("pelvis"),manoS:f("hand_l"),manoD:f("hand_r"),piedeS:f("ball_l")??f("foot_l"),piedeD:f("ball_r")??f("foot_r")};n.userData.misuraGuida=()=>{if(!p.anca||!p.manoS||!p.manoD)return null;let g=c;h("Driving_Loop",0),a.update(.001),n.updateMatrixWorld(!0);let m=S=>n.worldToLocal(S.getWorldPosition(new C)),_=m(p.anca),x=m(p.manoS),y=m(p.manoD),w=[p.piedeS,p.piedeD].filter(Boolean).map(S=>m(S).y);return g&&g!=="Driving_Loop"&&(c=g),{anca:{y:_.y,z:_.z},mano:{y:(x.y+y.y)/2,z:(x.z+y.z)/2},piede:w.length?Math.min(...w):null}},n.userData.postura=g=>{n.userData.posturaAttuale=g,g==="sella"?(u="Driving_Loop",h("Driving_Loop")):u=null},n.userData.parla=g=>{u=g?"Idle_Talking_Loop":null,g&&h("Idle_Talking_Loop")},n.userData.abbatti=()=>{u="Death01",h("Death01",.12)},n.userData.aggiorna=(g,m=0,_=!1)=>{if(u||h(oM.find(x=>m<x.fino).clip),_){if(d+=g,d<.1)return;g=d,d=0}a.update(g)};let v=()=>new jt;return n.userData.arti={gambaS:v(),gambaD:v(),ginocchioS:v(),ginocchioD:v(),bracciaS:v(),bracciaD:v(),gomitoS:v(),gomitoD:v(),busto:v(),torace:v(),testa:v(),bacino:v(),collo:v(),capelli:v(),naso:v(),spallaS:v(),spallaD:v()},n.userData.riposo={busto:.96},n.userData.clipAttuale=()=>c,n.userData.modello=!0,n}var Ea=new Map,rM=new Ze(1,1,1);function Ta(o,t,e,i=null){let n=Math.min(o,t,e),s=i??n*.34;if(s=Math.min(s,o*.34,t*.34,e*.34),s<.015){let g=rM.clone();return g.scale(o,t,e),g}let r=`${o.toFixed(3)}|${t.toFixed(3)}|${e.toFixed(3)}|${s.toFixed(3)}`,a=Ea.get(r);if(a)return a;let l=Math.max(.001,o-s*2),c=Math.max(.001,t-s*2),h=Math.max(.001,e-s*2),u=Math.min(s,l*.49,c*.49),d=new Ds,f=l/2,p=c/2;d.moveTo(-f+u,-p),d.lineTo(f-u,-p),d.quadraticCurveTo(f,-p,f,-p+u),d.lineTo(f,p-u),d.quadraticCurveTo(f,p,f-u,p),d.lineTo(-f+u,p),d.quadraticCurveTo(-f,p,-f,p-u),d.lineTo(-f,-p+u),d.quadraticCurveTo(-f,-p,-f+u,-p);let v=new Ro(d,{depth:h,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:3,steps:1});return v.center(),v.computeVertexNormals(),Ea.set(r,v),v}function Aa(o,t,e=.06,i=[]){let n=`C|${t.toFixed(3)}|${e.toFixed(3)}|${o.map(h=>`${h[0].toFixed(3)},${h[1].toFixed(3)}`).join(";")}|${i.map(h=>`${h.z.toFixed(3)},${h.y.toFixed(3)},${h.r.toFixed(3)}`).join(";")}`,s=Ea.get(n);if(s)return s;let r=Math.min(e,t*.3),a=new Ds;a.moveTo(o[0][0],o[0][1]);for(let h=1;h<o.length;h++)a.lineTo(o[h][0],o[h][1]);a.closePath();for(let h of i){let u=new Zn;u.absarc(h.z,h.y,h.r,0,Math.PI*2,!0),a.holes.push(u)}let l=new Ro(a,{depth:Math.max(.001,t-r*2),bevelEnabled:r>.005,bevelThickness:r,bevelSize:r,bevelSegments:2,curveSegments:i.length?9:3,steps:1});l.rotateY(-Math.PI/2),l.computeBoundingBox();let c=l.boundingBox;return l.translate(-(c.min.x+c.max.x)/2,0,0),l.computeVertexNormals(),Ea.set(n,l),l}var $f=new Map;function Ln(o,t,e=8){let i=`${o.toFixed(3)}|${t.toFixed(3)}|${e}`,n=$f.get(i);return n||(n=new Jr(o,Math.max(.001,t),2,e),$f.set(i,n)),n}var Xf=new Map;function qs(o,t=10){let e=`${o.toFixed(3)}|${t}`,i=Xf.get(e);return i||(i=new Si(o,t,Math.max(5,t-2)),Xf.set(e,i)),i}var Yf=new C,aM=6.2,lM=12,Zf=.75,cM=[1709072,3811864,6965800,9071162,2763310,10518608],hM=[2765378,2041651,3813928,4866616,2240570,3025460],uM=new Si(.192,10,7,0,Math.PI*2,0,Math.PI*.6),Oo=1.02,wa=.635,Jf=.28,jf=.27;function $s(o=4016739,t=13081202,e=Math.random()){let i=Wf({seme:e,divisa:o===3099791});if(i)return i;let n=new te,s=Y=>Y[Math.floor(e*997+Y.length*7)%Y.length],r=new st(o);r.r+r.g+r.b<1.05&&r.lerp(new st(10133676),.42);let a=new Ft({color:r,roughness:.78}),l=new Ft({color:t,roughness:.72}),c=new Ft({color:s(hM),roughness:.88}),h=new Ft({color:1382171,roughness:.9}),u=new Ft({color:s(cM),roughness:.95}),d=(Y,P,N,k,K,q=1,W=1,$=1)=>{let J=new Lt(Y,P);return J.position.set(N,k,K),J.scale.set(q,W,$),J.castShadow=!0,J},f=new te;f.position.y=Oo;let p=d(Ln(.205,.32),a,0,.44,0,1.24,1,.72),v=d(Ln(.195,.09),c,0,.04,0,1.16,1,.8),g=d(qs(.113),a,-.252,wa,0,1,.92,.92),m=d(qs(.113),a,.252,wa,0,1,.92,.92),_=d(Ln(.07,.13),l,0,.785,0),x=d(qs(.168,12),l,0,.975,0,.94,1.14,1.02),y=d(qs(.04,6),l,0,.965,.152,1,1.1,1.2),w=new Lt(uM,u);w.position.set(0,.985,-.012),w.scale.set(.98,1.1,1.06),w.castShadow=!0;let S=Y=>{let P=new te;P.add(d(Ln(.079,.19),a,0,-.145,0));let N=new te;return N.position.y=-Jf,N.add(d(Ln(.069,.17),a,0,-.13,0)),N.add(d(qs(.072,8),l,0,-jf,0,1,1.15,.82)),P.add(N),P.position.set(Y*.255,wa,0),P.userData.gomito=N,P},R=S(-1),z=S(1);f.add(p,v,g,m,_,x,y,w,R,z);let M=Y=>{let P=new te;P.add(d(Ln(.101,.3),c,0,-.2,0));let N=new te;return N.position.y=-.4,N.add(d(Ln(.086,.28),c,0,-.19,0)),N.add(d(Ta(.19,.115,.3,.05),h,0,-.4,.05)),P.add(N),P.position.set(Y*.125,.96,0),P.userData.ginocchio=N,P},E=M(-1),D=M(1);n.add(f,E,D);let F={bracciaS:R,bracciaD:z,gambaS:E,gambaD:D,gomitoS:R.userData.gomito,gomitoD:z.userData.gomito,ginocchioS:E.userData.ginocchio,ginocchioD:D.userData.ginocchio,busto:f,torace:p,testa:x,bacino:v,collo:_,capelli:w,naso:y,spallaS:g,spallaD:m};return n.userData.arti=F,n.userData.riposo={busto:Oo},n.userData.postura=(Y,P={})=>{n.userData.posturaAttuale=Y;let N=Y==="sella",k=P.inclinazione??(N?.42:0),K=P.braccio??(N?-1.25:0),q=P.gomito??(N?.28:0);for(let[W,$]of[[E,F.ginocchioS],[D,F.ginocchioD]])W.rotation.set(N?-1.3:0,0,N?W===E?-.14:.14:0),$.rotation.x=N?1.46:0;for(let[W,$]of[[R,F.gomitoS],[z,F.gomitoD]])W.rotation.set(K,0,N?W===R?-.2:.2:0),$.rotation.x=q;f.rotation.x=k,f.position.y=Oo},n.userData.postura("piedi"),n}function dM(o,t,e,i,n){let s=o-e,r=i-t,a=Math.atan2(r,Math.max(.02,s));return at(-(a+n),-2.2,.4)}var Kf={ANCA:Oo,SPALLA:wa,OMERO:Jf,AVAMBRACCIO:jf},Ra=class{constructor(t,e,i,n){this.scena=t,this.citta=e,this.stato=i,this.comandi=n,this.assi={x:0,z:0},this.virtuali=new Set,this.gruppo=$s(i.ruolo==="cliente"?6969984:3955588);let s=e.puntoSuStrada(Math.random);this.gruppo.position.set(s.x,0,s.z),t.add(this.gruppo),this.velocita=new C,this.quota=0,this.direzione=0,this.passo=0,this.corre=!1,this.inChinato=!1,this.yaw=0,this.pitch=.38,this.distanza=8.5,this.distanzaTarget=8.5,this.camera=new Le(62,1,.1,900),this._camPos=new C,this._camLook=new C,this.tasti=new Set,this.veicolo=null,this._collegaInput()}get aBordo(){return this.veicolo!==null}sali(t){this.veicolo=t,t.occupato=!0;let e=t.mesh.userData.pilota;if(this.inSella=!!e,e){let i=e.inclinazione,n=e.sella.y+.1+Kf.SPALLA*Math.cos(i),s=e.sella.z+Kf.SPALLA*Math.sin(i);this.gruppo.userData.postura("sella",{inclinazione:i,braccio:dM(n,s,e.manubrio.y,e.manubrio.z,i),gomito:.26}),this.gruppo.visible=!0,this._sella=e.sella;let r=this.gruppo.userData.misuraGuida?.();if(r){let l=e.sella.y-r.anca.y;this._innesto={y:r.piede==null?l:Math.max(l,.1-r.piede),z:e.sella.z-r.anca.z}}else this._innesto={y:e.sella.y+.1-Oo,z:e.sella.z}}else this.gruppo.visible=!1;this.distanzaTarget=t.def.corpo.lungh>3?11.5:8.5,this.pitch=.3}scendi(t){let e=this.veicolo;if(!e)return;this.inSella=!1,this.gruppo.userData.postura("piedi"),this.gruppo.rotation.set(0,0,0);let i=e.mesh.rotation.y+Math.PI/2,n=e.mesh.position.x+Math.sin(i)*1.6,s=e.mesh.position.z+Math.cos(i)*1.6;t.libero(n,s,.8)||(n=e.mesh.position.x-Math.sin(i)*1.6,s=e.mesh.position.z-Math.cos(i)*1.6);let r=t.risolviCollisione(n,s,Zf);this.quota=t.quotaSuolo(r.x,r.z),this.gruppo.position.set(r.x,this.quota,r.z),this.direzione=e.mesh.rotation.y,this.gruppo.visible=!0,this.velocita.set(0,0,0),e.occupato=!1,e.velocita=0,this.veicolo=null,this.distanzaTarget=8.5}giu(t){return this.comandi.attiva(t,this.tasti)||this.virtuali.has(t)}get inputGuida(){return{avanti:this.giu("avanti")||this.assi.z<-.25,indietro:this.giu("indietro")||this.assi.z>.25,sinistra:this.giu("sinistra")||this.assi.x<-.25,destra:this.giu("destra")||this.assi.x>.25,freno:this.giu("freno")}}get posizione(){return this.gruppo.position}_collegaInput(){this._onKeyDown=t=>{t.repeat||this.tasti.add(t.code)},this._onKeyUp=t=>this.tasti.delete(t.code),this._onMouseMove=t=>{if(document.pointerLockElement==null)return;let e=.0022*(this.comandi?.sensibilita??1);this.yaw-=t.movementX*e,this.pitch=at(this.pitch+t.movementY*e*(this.comandi?.invertiY?-1:1),-.45,1.1),this._mouseRecente=1},this._onWheel=t=>{this.distanzaTarget=at(this.distanzaTarget+Math.sign(t.deltaY)*1.2,3.2,18)},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("wheel",this._onWheel,{passive:!0})}scollega(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("wheel",this._onWheel)}aggiorna(t,e=!1){let i=this.stato;if(this.veicolo){let z=this.veicolo,M=z.aggiorna(t,e?null:this.inputGuida,this.citta);if(this.inSella?(this.gruppo.quaternion.copy(z.mesh.quaternion),Yf.set(0,this._innesto.y,this._innesto.z).applyQuaternion(z.mesh.quaternion).add(z.mesh.position),this.gruppo.position.copy(Yf)):this.gruppo.position.copy(z.mesh.position),this.direzione=z.mesh.rotation.y,this._mouseRecente=Math.max(0,(this._mouseRecente??0)-t),this._mouseRecente<=0&&Math.abs(z.velocita)>.4){let D=z.mesh.rotation.y+Math.PI-this.yaw;for(;D>Math.PI;)D-=Math.PI*2;for(;D<-Math.PI;)D+=Math.PI*2;this.yaw+=D*Math.min(1,t*2.2)}return this.gruppo.userData.aggiorna?.(t,0),i.stamina=at(i.stamina+t*6,0,100),this.corre=z.kmh>55,this.aggiornaCamera(t),this.ultimoUrto=M,Math.abs(this.veicolo.velocita)}let n=0,s=0;e||(this.giu("avanti")&&(s-=1),this.giu("indietro")&&(s+=1),this.giu("sinistra")&&(n-=1),this.giu("destra")&&(n+=1),Math.hypot(this.assi.x,this.assi.z)>.12&&(n=this.assi.x,s=this.assi.z));let r=Math.min(1,Math.hypot(n,s));r>0&&(n=n/Math.hypot(n,s)*r,s=s/Math.hypot(n,s)*r);let a=!e&&this.giu("corri")&&r>.5&&i.stamina>2;this.inChinato=!e&&this.giu("chinati"),this.corre=a;let l=1+i.grado("fondo")*.15;a?i.stamina=at(i.stamina-t*13/l,0,100*l):i.stamina=at(i.stamina+t*(r>0?4:9)*l,0,100*l);let h=1-at(i.ingombro/Math.max(1,i.capienza),0,1)*.22,u=.55+i.salute/100*.45,d=(a?lM*(1+i.grado("scarti")*.05):aM)*h*u;this.inChinato&&(d*=.42);let f=Math.sin(this.yaw),p=Math.cos(this.yaw),v=n*p+s*f,g=-n*f+s*p,m=new C(v*d,0,g*d);this.velocita.x=Vi(this.velocita.x,m.x,14,t),this.velocita.z=Vi(this.velocita.z,m.z,14,t);let _=this.gruppo.position.x+this.velocita.x*t,x=this.gruppo.position.z+this.velocita.z*t,y=this.citta.risolviCollisione(_,x,Zf);this.gruppo.position.x=y.x,this.gruppo.position.z=y.z;let w=Math.hypot(this.velocita.x,this.velocita.z),R=this.yaw+Math.PI-this.direzione;for(;R>Math.PI;)R-=Math.PI*2;for(;R<-Math.PI;)R+=Math.PI*2;return this.direzione+=R*Math.min(1,t*16),this.gruppo.rotation.set(0,this.direzione,0),this._anima(t,w),this.aggiornaCamera(t),w}_anima(t,e){this.gruppo.userData.aggiorna?.(t,this.aBordo?0:e);let i=this.gruppo.userData.arti;this.passo+=t*(e*1.15+.6);let n=Math.min(.95,e*.11),s=Math.sin(this.passo*2.2),r=this.inChinato?1:0,a=-.55*r,l=1.05*r;i.gambaS.rotation.x=s*n+a,i.gambaD.rotation.x=-s*n+a,i.ginocchioS.rotation.x=Math.max(0,-s)*n*1.5+l,i.ginocchioD.rotation.x=Math.max(0,s)*n*1.5+l,i.bracciaS.rotation.x=-s*n*.85,i.bracciaD.rotation.x=s*n*.85,i.gomitoS.rotation.x=(.15+Math.max(0,s)*.5)*Math.min(1,n*2),i.gomitoD.rotation.x=(.15+Math.max(0,-s)*.5)*Math.min(1,n*2);let c=this.gruppo.userData.riposo;i.busto.rotation.x=Math.sin(this.passo*4.4)*n*.05+r*.42,i.busto.position.y=c.busto,this.quota=Vi(this.quota,this.citta.quotaSuolo(this.gruppo.position.x,this.gruppo.position.z),12,t),this.gruppo.position.y=this.quota+Math.abs(Math.sin(this.passo*2.2))*n*.06-r*.1}aggiornaCamera(t){this.distanza=Vi(this.distanza,this.distanzaTarget,8,t);let e=this.veicolo?at(this.veicolo.kmh/160,0,1)*3.2:0;this.distanza+=e;let i=this.veicolo?1.9:1.7,n=this._camLook.set(this.gruppo.position.x,this.gruppo.position.y+i,this.gruppo.position.z),s=Math.cos(this.pitch)*this.distanza,r=n.x+Math.sin(this.yaw)*s,a=n.z+Math.cos(this.yaw)*s,l=n.y+Math.sin(this.pitch)*this.distanza+.6,c=this.distanza;for(;c>1.6&&!this.citta.libero(r,a,.5);){c-=.6;let h=Math.cos(this.pitch)*c;r=n.x+Math.sin(this.yaw)*h,a=n.z+Math.cos(this.yaw)*h,l=n.y+Math.sin(this.pitch)*c+.6}this._camPos.set(r,Math.max(.9,l),a),this.camera.position.lerp(this._camPos,1-Math.exp(-18*t)),this.camera.lookAt(n)}};var Ah={cannabinoide:{nome:"Cannabinoide",colore:"#5fbf6a"},empatogeno:{nome:"Empatogeno",colore:"#e05fc0"},psichedelico:{nome:"Psichedelico",colore:"#9b7bff"},dissociativo:{nome:"Dissociativo",colore:"#5fd0e0"},stimolante:{nome:"Stimolante",colore:"#f0c040"},oppioide:{nome:"Oppioide",colore:"#d05050"},arma:{nome:"Armamento",colore:"#8a8f9a"}},Pi=[null,{id:1,nome:"Roba leggera",livello:1,colore:"#5fbf6a"},{id:2,nome:"Roba da festa",livello:5,colore:"#9b7bff"},{id:3,nome:"Roba pesante",livello:10,colore:"#d05050"},{id:4,nome:"Ferro",livello:16,colore:"#8a8f9a"}],Ge=[{id:"hash",nome:"Fumo",categoria:"cannabinoide",tier:1,unita:"g",prezzoBase:10,volatilita:.1,ingombro:.6,dipendenza:.06,tolleranza:.04,letalita:0,calore:.5,effetti:{euforia:.3,energia:-.2,lucidita:-.25,percezione:.15},durata:90,domanda:{villarosa:1.4,latino:1.2,torri:1.1,argento:.5,porto:.8},codex:"Resina di cannabis. Effetto lungo e morbido, rischio acuto basso, ma tagli con gomma e cera sono la norma sul mercato di strada: quello che compri quasi mai \xE8 quello che ti dicono."},{id:"erba",nome:"Erba",categoria:"cannabinoide",tier:1,unita:"g",prezzoBase:10,volatilita:.12,ingombro:1,dipendenza:.08,tolleranza:.05,letalita:0,calore:.6,effetti:{euforia:.35,energia:-.15,lucidita:-.2,percezione:.2},durata:80,domanda:{villarosa:1.5,latino:1.3,torri:1,argento:.7,porto:.8},codex:"Infiorescenza. Principio attivo il THC. Uso quotidiano e precoce \xE8 associato a calo di memoria e motivazione, e in chi \xE8 predisposto pu\xF2 slatentizzare episodi psicotici."},{id:"skunk",nome:"Skunk",categoria:"cannabinoide",tier:1,unita:"g",prezzoBase:15,volatilita:.18,ingombro:1,dipendenza:.12,tolleranza:.09,letalita:0,calore:.7,effetti:{euforia:.5,energia:-.25,lucidita:-.4,percezione:.4},durata:100,domanda:{villarosa:1.1,latino:1.5,torri:.9,argento:1,porto:.7},codex:"Selezione ad altissimo THC e CBD quasi assente. \xC8 proprio quello squilibrio a rendere gli attacchi d'ansia e gli episodi paranoidi molto pi\xF9 frequenti che con la cannabis tradizionale."},{id:"ecstasy",nome:"Pasticche",categoria:"empatogeno",tier:2,unita:"pz",prezzoBase:11,volatilita:.22,ingombro:.3,dipendenza:.18,tolleranza:.22,letalita:.25,calore:1.2,effetti:{euforia:.85,energia:.6,lucidita:-.15,percezione:.35},durata:240,domanda:{villarosa:.6,latino:1.8,torri:.7,argento:1,porto:.6},codex:`Compresse vendute come MDMA. Il dosaggio reale varia di ordini di grandezza da una pasticca all'altra e il contenuto spesso non \xE8 MDMA affatto. Alza la temperatura corporea: i morti in discoteca sono quasi sempre colpi di calore e iponatriemia, non "overdose" nel senso classico.`},{id:"mdma",nome:"Cristallo",categoria:"empatogeno",tier:2,unita:"g",prezzoBase:50,volatilita:.25,ingombro:.4,dipendenza:.22,tolleranza:.3,letalita:.3,calore:1.4,effetti:{euforia:.95,energia:.7,lucidita:-.1,percezione:.4},durata:260,domanda:{villarosa:.5,latino:1.9,torri:.6,argento:1.1,porto:.6},codex:'MDMA in cristalli. Brucia serotonina pi\xF9 in fretta di quanto il cervello la ricostruisca: il "marted\xEC nero" dopo il weekend \xE8 quello. Uso ravvicinato = tolleranza rapida e umore piatto per settimane.'},{id:"lsd",nome:"Francobolli",categoria:"psichedelico",tier:2,unita:"dose",prezzoBase:11,volatilita:.2,ingombro:.1,dipendenza:.03,tolleranza:.4,letalita:.05,calore:1,effetti:{euforia:.55,energia:.2,lucidita:-.6,percezione:1},durata:600,domanda:{villarosa:.7,latino:1.4,torri:.5,argento:.9,porto:.5},codex:"Tossicit\xE0 fisica bassissima, rischio psichico alto: 8-12 ore senza via d'uscita, e chi ha una fragilit\xE0 psicotica di famiglia pu\xF2 non tornare del tutto indietro. Nessuna dipendenza fisica."},{id:"funghi",nome:"Funghi",categoria:"psichedelico",tier:2,unita:"g",prezzoBase:10,volatilita:.18,ingombro:.9,dipendenza:.02,tolleranza:.35,letalita:.05,calore:.8,effetti:{euforia:.5,energia:.1,lucidita:-.5,percezione:.85},durata:300,domanda:{villarosa:.9,latino:1.2,torri:.6,argento:.7,porto:.5},codex:"Psilocibina. Il pericolo grosso \xE8 la raccolta: specie tossiche mortali somigliano a quelle attive. Effetto fortissimamente dipendente dallo stato d'animo di partenza."},{id:"keta",nome:"Ketamina",categoria:"dissociativo",tier:2,unita:"g",prezzoBase:45,volatilita:.24,ingombro:.4,dipendenza:.28,tolleranza:.35,letalita:.3,calore:1.3,effetti:{euforia:.7,energia:-.3,lucidita:-.75,percezione:.9},durata:90,domanda:{villarosa:.4,latino:1.7,torri:.8,argento:1.2,porto:.7},codex:"Anestetico dissociativo. L'uso continuato distrugge la vescica \u2014 cistite ulcerativa, in casi gravi asportazione. Combinata con alcol deprime il respiro."},{id:"speed",nome:"Speed",categoria:"stimolante",tier:2,unita:"g",prezzoBase:13,volatilita:.2,ingombro:.5,dipendenza:.35,tolleranza:.3,letalita:.3,calore:1.2,effetti:{euforia:.6,energia:.9,lucidita:.2,percezione:.15},durata:300,domanda:{villarosa:.9,latino:1.3,torri:1.2,argento:.8,porto:1.1},codex:"Amfetamina, tagliata pesantemente (caffeina, creatina). Sonno cancellato, appetito azzerato, cuore sotto sforzo per ore. Il crollo dopo \xE8 depressivo e spinge a ridosare."},{id:"coca",nome:"Bianca",categoria:"stimolante",tier:3,unita:"g",prezzoBase:85,volatilita:.3,ingombro:.4,dipendenza:.55,tolleranza:.45,letalita:.5,calore:2.4,effetti:{euforia:.9,energia:.85,lucidita:.3,percezione:.2},durata:45,domanda:{villarosa:.5,latino:1.4,torri:.9,argento:2,porto:.9},codex:"Cocaina. Effetto corto, craving immediato: il modello economico del prodotto \xE8 la ricaduta. Vasocostrizione violenta \u2014 infarti e ictus anche in ventenni sani. Con l'alcol il fegato produce cocaetilene, pi\xF9 cardiotossico di entrambi."},{id:"crack",nome:"Sassi",categoria:"stimolante",tier:3,unita:"g",prezzoBase:55,volatilita:.35,ingombro:.3,dipendenza:.85,tolleranza:.6,letalita:.55,calore:2.8,effetti:{euforia:1,energia:.95,lucidita:-.1,percezione:.25},durata:15,domanda:{villarosa:.2,latino:.6,torri:2.2,argento:.3,porto:1.3},codex:"Cocaina base fumata. Picco in secondi, fine in dieci minuti, craving devastante: \xE8 la sostanza che smonta una vita pi\xF9 in fretta di qualunque altra in questo elenco. Nel gioco i clienti crack ti fanno volumi enormi e ti bruciano il quartiere."},{id:"eroina",nome:"Roba",categoria:"oppioide",tier:3,unita:"g",prezzoBase:50,volatilita:.28,ingombro:.4,dipendenza:.9,tolleranza:.7,letalita:.85,calore:2.6,effetti:{euforia:1,energia:-.7,lucidita:-.6,percezione:.3},durata:240,domanda:{villarosa:.2,latino:.5,torri:2,argento:.3,porto:1.6},codex:`Eroina. Deprime il respiro: si muore smettendo di respirare, spesso da soli. La purezza cambia da una piazza all'altra, quindi la dose "di sempre" pu\xF2 essere quella di troppo. Il naloxone reverte l'overdose in minuti \u2014 nel gioco \xE8 un oggetto, e a volte \xE8 l'unica cosa che conta.`},{id:"meth",nome:"Cristalli",categoria:"stimolante",tier:3,unita:"g",prezzoBase:90,volatilita:.34,ingombro:.4,dipendenza:.88,tolleranza:.65,letalita:.6,calore:3,effetti:{euforia:.95,energia:1,lucidita:.1,percezione:.45},durata:600,domanda:{villarosa:.3,latino:.7,torri:1.6,argento:.5,porto:1.8},codex:"Metamfetamina. Giorni senza dormire, poi psicosi paranoide con allucinazioni tattili. Danno dopaminergico in parte permanente. Denti e pelle vanno per primi."},{id:"oppiacei",nome:"Blisters",categoria:"oppioide",tier:3,unita:"pz",prezzoBase:20,volatilita:.22,ingombro:.2,dipendenza:.7,tolleranza:.55,letalita:.6,calore:1.8,effetti:{euforia:.75,energia:-.45,lucidita:-.35,percezione:.15},durata:300,domanda:{villarosa:1,latino:.8,torri:1.5,argento:1.1,porto:1},codex:"Oppioidi da ricetta deviati dal circuito legale. Sembrano pi\xF9 sicuri perch\xE9 sono farmaci: \xE8 esattamente questo che ha aperto la crisi degli oppioidi. La strada verso l'eroina passa quasi sempre da qui, perch\xE9 costa meno."},{id:"fenta",nome:"Cerotti",categoria:"oppioide",tier:3,unita:"dose",prezzoBase:120,volatilita:.45,ingombro:.1,dipendenza:.95,tolleranza:.8,letalita:1,calore:3.6,effetti:{euforia:1,energia:-.8,lucidita:-.7,percezione:.2},durata:180,domanda:{villarosa:.1,latino:.3,torri:1.2,argento:.2,porto:1.4},codex:"Fentanil. Attivo a dosi di microgrammi: la differenza tra effetto e morte non \xE8 misurabile a occhio, e per questo viene tagliato dentro altre sostanze a insaputa di chi compra. Nel gioco uccide i tuoi clienti, ti fa scendere la polizia addosso e ti rovina la reputazione. \xC8 merce che non conviene: \xE8 il punto."},{id:"lama",nome:"Lama",categoria:"arma",tier:4,unita:"pz",prezzoBase:90,volatilita:.15,ingombro:1.5,dipendenza:0,tolleranza:0,letalita:0,calore:1.5,effetti:null,durata:0,difesa:.2,minaccia:.3,domanda:{villarosa:.4,latino:.9,torri:1.6,argento:.3,porto:1.2},codex:"Arma bianca. Alza la minaccia nelle trattative e la difesa nelle risse, ma il possesso da solo \xE8 gi\xE0 reato e la polizia lo tratta come aggravante su tutto il resto."},{id:"pistola",nome:"Ferro",categoria:"arma",tier:4,unita:"pz",prezzoBase:850,volatilita:.3,ingombro:3,dipendenza:0,tolleranza:0,letalita:0,calore:4,effetti:null,durata:0,difesa:.55,minaccia:.8,domanda:{villarosa:.3,latino:.7,torri:1.8,argento:.5,porto:1.5},codex:"Semiautomatica con matricola abrasa. Cambia ogni trattativa a tuo favore e ogni incontro con la polizia contro: la reazione passa da fermo a intervento armato."},{id:"fucile",nome:"Canne mozze",categoria:"arma",tier:4,unita:"pz",prezzoBase:1400,volatilita:.32,ingombro:6,dipendenza:0,tolleranza:0,letalita:0,calore:5,effetti:null,durata:0,difesa:.75,minaccia:1,domanda:{villarosa:.2,latino:.4,torri:1.5,argento:.2,porto:1.7},codex:"Ingombrante, impossibile da nascondere addosso. Alza la minaccia al massimo e ti rende immediatamente riconoscibile."},{id:"giubbotto",nome:"Kevlar",categoria:"arma",tier:4,unita:"pz",prezzoBase:700,volatilita:.18,ingombro:4,dipendenza:0,tolleranza:0,letalita:0,calore:1,effetti:null,durata:0,difesa:.9,minaccia:0,domanda:{villarosa:.3,latino:.6,torri:1.4,argento:.6,porto:1.3},codex:"Antiproiettile. Non \xE8 un'arma e non alza la minaccia, ma \xE8 l'unica cosa che ti tiene in piedi quando una consegna va storta."}],Ht=Object.fromEntries(Ge.map(o=>[o.id,o])),wh=[{id:"naloxone",nome:"Naloxone",prezzo:45,desc:"Reverte un'overdose da oppioidi. Uso singolo.",tier:1},{id:"burner",nome:"Telefono usa e getta",prezzo:120,desc:"Azzera 25 punti di heat. Uso singolo.",tier:1},{id:"panino",nome:"Cibo di strada",prezzo:8,desc:"Ripristina stamina e un po' di salute.",tier:1},{id:"bilancia",nome:"Bilancino di precisione",prezzo:60,desc:"Permanente: +8% sul prezzo di vendita (pesi onesti, clienti fedeli).",tier:1,permanente:!0},{id:"zaino",nome:"Zaino doppiofondo",prezzo:400,desc:"Permanente: +40 di capienza e -15% di rischio in perquisizione.",tier:2,permanente:!0},{id:"scanner",nome:"Scanner radio",prezzo:900,desc:"Permanente: vedi il cono visivo della polizia sul radar.",tier:2,permanente:!0}],Xs=Object.fromEntries(wh.map(o=>[o.id,o]));var fM=110,pM=145,Qf=[11558986,5075629,7370117,10522446,8016528,4165496,11579034,9388112,13682864,5270160,12614208,6328426],tp=[13081202,9263675,14726284,6240805,14263162],Ca=class{constructor(t,e,i,n=7){this.scena=t,this.citta=e,this.stato=i,this.rng=wi(n),this.npc=[],this.max=64,this.marcatori=new Map,this.geoMarcatore=new Si(.22,8,6),this.matMarcatore={cliente:new Me({color:3596410}),fisso:new Me({color:3590368}),civetta:new Me({color:4219135}),spacciatore:new Me({color:14725174}),rapinatore:new Me({color:14696512})}}aggiorna(t,e){for(let i=this.npc.length-1;i>=0;i--){let n=this.npc[i],s=Math.hypot(n.gruppo.position.x-e.x,n.gruppo.position.z-e.z);if(s>pM||n.morto){this._rimuovi(i);continue}this._aggiornaNpc(n,t,e,s)}for(;this.npc.length<this.max;){let i=this._genera(e);if(!i)break;this.npc.push(i)}}_rimuovi(t){let e=this.npc[t];this.scena.remove(e.gruppo),e.gruppo.traverse(i=>{i.isMesh&&i.geometry.dispose&&i.userData.usaEGetta&&i.geometry.dispose()}),this.npc.splice(t,1)}_genera(t){let e=null;for(let l=0;l<25;l++){let c=this.citta.puntoSuStrada(this.rng),h=Math.hypot(c.x-t.x,c.z-t.z);if(h>26&&h<fM){e=c;break}}if(!e)return null;let i=Ai(e.x,e.z),n=ne[i],s=this._sorteggiaTipo(n),r=$s(xe(Qf,this.rng),xe(tp,this.rng),this.rng());r.position.set(e.x,0,e.z),r.scale.setScalar(.92+this.rng()*.16),this.scena.add(r);let a={id:`npc_${Math.floor(this.rng()*1e9)}`,tipo:s,qid:i,gruppo:r,nome:ya(this.rng),passo:this.rng()*10,direzione:this.rng()*Math.PI*2,meta:this.citta.puntoSuStrada(this.rng),velocita:1.05+this.rng()*.75,attesa:0,parlato:!1,marcatore:null,rifiutato:!1};return(s==="cliente"||s==="fisso"||s==="civetta")&&this._configuraDomanda(a,n),s==="spacciatore"&&this._configuraOfferta(a,n),s==="rapinatore"&&(a.velocita=4.2+this.rng()*1.4,a.aggressivita=.4+this.rng()*.6),s!=="passante"&&this._creaMarcatore(a),a}_sorteggiaTipo(t){let e=this.stato,i=this.rng();if(e.ruolo==="cliente")return i<.16*(t.densitaClienti/1.2)?"spacciatore":i<.16+.05*t.pericolo*4?"rapinatore":i<.3?"civetta":"passante";let s=at((e.reputazione[t.id]??0)/100,0,1),r=at(.14*t.densitaClienti*(.7+s*.8),.05,.5),a=at(.012+e.heat/100*.13,0,.16),l=at(e.grado("rete")*.018+s*.05,0,.12),c=at(t.pericolo*.05,0,.06);return i<a?"civetta":i<a+l?"fisso":i<a+l+r?"cliente":i<a+l+r+c?"rapinatore":"passante"}_configuraDomanda(t,e){let i=this.stato,n=Ge.filter(f=>Pi[f.tier].livello<=i.livello&&f.categoria!=="arma"),s=i.livello>=Pi[4].livello?Ge.filter(f=>f.categoria==="arma"):[],r=[...n,...this.rng()<.12?s:[]],a=r.map(f=>(f.domanda[e.id]??1)**2.2),l=a.reduce((f,p)=>f+p,0),c=this.rng()*l,h=r[0];for(let f=0;f<r.length;f++)if(c-=a[f],c<=0){h=r[f];break}t.merce=h.id;let u=Ht[h.id];t.dipendenza=at(u.dipendenza*(.5+this.rng()),0,1);let d=u.unita==="pz"||u.unita==="dose"?3:2;t.quantita=Math.max(1,Math.round(d*(.6+this.rng()*1.8)*(1+t.dipendenza*2.2))),u.categoria==="arma"&&(t.quantita=1),t.pazienza=.35+this.rng()*.5,t.sogliaMax=(.75+e.ricchezza*.35)*(1+t.dipendenza*.55)*(.85+this.rng()*.45),t.budget=Math.round(t.quantita*u.prezzoBase*t.sogliaMax*(1.1+this.rng()*.9)),t.tentativi=0,t.tipo==="fisso"&&(t.sogliaMax*=1.18,t.pazienza=1,t.fedelta=100)}_configuraOfferta(t,e){let i=Ge.filter(l=>l.categoria!=="arma"),n=i.map(l=>(l.domanda[e.id]??1)**1.6),s=n.reduce((l,c)=>l+c,0),r=this.rng()*s,a=i[0];for(let l=0;l<i.length;l++)if(r-=n[l],r<=0){a=i[l];break}t.merce=a.id,t.quantita=1+Math.floor(this.rng()*6),t.ricarico=.85+this.rng()*.75,t.purezza=at(.25+this.rng()*.75+(e.ricchezza-1)*.15,.08,1),t.onesto=this.rng()>.22}_creaMarcatore(t){let e=this.matMarcatore[t.tipo];if(!e)return;let i=t.tipo==="civetta"?this.stato.grado("occhio")>=3?this.matMarcatore.civetta:this.matMarcatore.cliente:e,n=new Lt(this.geoMarcatore,i);n.position.y=2.6,t.gruppo.add(n),t.marcatore=n}_aggiornaNpc(t,e,i,n){if(t.volo){this._volo(t,e);return}t.tipo==="fisso"&&n<45&&!t.parlato&&(t.meta={x:i.x,z:i.z}),t.tipo==="rapinatore"&&((this.stato.ingombro>12||this.stato.contanti>800)&&n<30?t.meta={x:i.x,z:i.z}:n<8&&(t.meta=this.citta.puntoSuStrada(this.rng)));let s=t.meta.x-t.gruppo.position.x,r=t.meta.z-t.gruppo.position.z,a=Math.hypot(s,r),l=0;if(a<2.2)t.attesa-=e,t.attesa<=0&&(t.meta=this.citta.puntoSuStrada(this.rng),t.attesa=this.rng()*3);else{let c=n<2.4?.15:1,h=t.velocita*c;l=h,s/=a,r/=a;let u=t.gruppo.position.x+s*h*e,d=t.gruppo.position.z+r*h*e,f=this.citta.risolviCollisione(u,d,.6);Math.hypot(f.x-u,f.z-d)>.05?(t.bloccato=(t.bloccato??0)+e,t.bloccato>.8&&(t.meta=this.citta.puntoSuStrada(this.rng),t.bloccato=0)):t.bloccato=0,t.gruppo.position.x=f.x,t.gruppo.position.z=f.z,t.gruppo.position.y=this.citta.quotaSuolo(f.x,f.z);let v=Math.atan2(s,r)-t.direzione;for(;v>Math.PI;)v-=Math.PI*2;for(;v<-Math.PI;)v+=Math.PI*2;t.direzione+=v*Math.min(1,e*6),t.gruppo.rotation.y=t.direzione,t.passo+=e*h*1.15;let g=t.gruppo.userData.arti,m=Math.min(.7,h*.13),_=Math.sin(t.passo*2.2);g.gambaS.rotation.x=_*m,g.gambaD.rotation.x=-_*m,g.ginocchioS.rotation.x=Math.max(0,-_)*m*1.5,g.ginocchioD.rotation.x=Math.max(0,_)*m*1.5,g.bracciaS.rotation.x=-_*m*.8,g.bracciaD.rotation.x=_*m*.8,g.gomitoS.rotation.x=.12+Math.max(0,_)*m*.7,g.gomitoD.rotation.x=.12+Math.max(0,-_)*m*.7}t.gruppo.userData.aggiorna?.(e,l,n>40),t.marcatore&&(t.marcatore.position.y=2.6+Math.sin(performance.now()*.004+t.passo)*.12,t.marcatore.visible=n<55&&!t.parlato)}investimenti(t,e){for(let i of t){let n=Math.abs(i.velocita);if(n<2.2)continue;let s=i.mesh.position,r=i.mesh.rotation.y,a=Math.sin(r),l=Math.cos(r),c=(i.def.corpo.lungh??3.4)*.5+n*e+.35,h=(i.def.corpo.largh??1.6)*.5+.4;for(let u of this.npc){if(u.volo)continue;let d=u.gruppo.position.x-s.x,f=u.gruppo.position.z-s.z,p=d*a+f*l,v=d*l-f*a;Math.abs(p)>c||Math.abs(v)>h||this.travolgi(u,i,a,l,n)}}}travolgi(t,e,i,n,s){let r=Math.min(1,s/16),a=3.5+s*.9,l=(this.rng()-.5)*3.5;t.volo={vx:i*a+n*l,vz:n*a-i*l,vy:2.4+r*4.4,rotolio:(2.5+r*6)*(this.rng()<.5?-1:1),imbardata:(this.rng()-.5)*5,tempo:0,fermo:0},t.gruppo.position.y+=.75,t.parlato=!0,t.bruciato=!0,t.marcatore&&(t.marcatore.visible=!1),e.velocita*=.8,e.danno=Math.min(1,e.danno+r*.06),this.onInvestimento?.(t,r)}_volo(t,e){let i=t.volo,n=t.gruppo;if(i.tempo+=e,i.fermo<=0){i.vy-=24*e;let s=n.position.x+i.vx*e,r=n.position.z+i.vz*e,a=this.citta.risolviCollisione(s,r,.45);Math.hypot(a.x-s,a.z-r)>.05&&(i.vx*=-.35,i.vz*=-.35),n.position.set(a.x,n.position.y+i.vy*e,a.z),n.rotation.x+=i.rotolio*e,n.rotation.z+=i.imbardata*e;let l=this.citta.quotaSuolo(n.position.x,n.position.z)+.16;n.position.y<=l&&(n.position.y=l,i.vy=Math.abs(i.vy)*.3,i.vx*=.72,i.vz*=.72,i.rotolio*=.55,i.imbardata*=.55,i.vy<.8&&Math.hypot(i.vx,i.vz)<1.4&&(i.fermo=1e-4,n.rotation.set(-Math.PI/2,n.rotation.y,0)))}else i.fermo+=e,i.fermo>14&&(t.morto=!0);t.marcatore&&(t.marcatore.visible=!1)}bersaglio(t,e=3.4){let i=this.stato.ruolo!=="cliente",n=null,s=e;for(let r of this.npc){if(r.parlato||r.bruciato||r.tipo==="passante"&&!i)continue;let a=Math.hypot(r.gruppo.position.x-t.x,r.gruppo.position.z-t.z);a<s&&(s=a,n=r)}return n}avvicina(t){if(t.freddo)return t;let e=Ai(t.gruppo.position.x,t.gruppo.position.z),i=ne[e],n=this.stato;t.freddo=!0,t.insistenze=0,t.qid=e;let s=at((n.reputazione[e]??0)/100,0,1);return t.apertura=at(.08+i.densitaClienti*.15+s*.2-n.heat/100*.12,.03,.6),t.civile=this.rng()<at(.22-i.densitaClienti*.07,.04,.24),this._configuraDomanda(t,i),t.preferenza=t.merce,t.sogliaMax*=.86,t.quantita=Math.max(1,Math.round(t.quantita*.55)),t}accettaProposta(t,e,i){t.tipo="cliente",t.merce=e,t.quantita=Math.max(1,i);let n=Ht[e];return t.budget=Math.round(t.quantita*n.prezzoBase*t.sogliaMax*(1.15+this.rng()*.8)),t.tentativi=0,t.marcatore||this._creaMarcatore(t),t}testimoni(t,e=12){let i=0;for(let n of this.npc)n.tipo==="passante"&&Math.hypot(n.gruppo.position.x-t.x,n.gruppo.position.z-t.z)<e&&i++;return i}generaSuAppuntamento(t,e,i){let n=$s(xe(Qf,this.rng),xe(tp,this.rng),this.rng());n.position.set(e,0,i),this.scena.add(n);let s={id:`app_${t.contattoId}`,tipo:"fisso",qid:t.quartiere,gruppo:n,nome:t.nome,merce:t.merce,quantita:t.quantita,sogliaMax:t.prezzo/Math.max(1,this.stato.bonusPrezzo)/Math.max(1,t.prezzoMercato??t.prezzo),budget:t.prezzo*t.quantita*1.05,pazienza:1,dipendenza:.4,fedelta:100,passo:0,direzione:0,meta:{x:e,z:i},velocita:1.6,attesa:999,parlato:!1,marcatore:null,appuntamento:t};return this._creaMarcatore(s),this.npc.push(s),s}rimuoviNpc(t){let e=this.npc.indexOf(t);e>=0&&this._rimuovi(e)}svuota(){for(;this.npc.length;)this._rimuovi(0)}};var mM=170,Fo=26,Rh=Math.PI*.42,Pa=class{constructor(t,e,i,n=99){this.scena=t,this.citta=e,this.stato=i,this.rng=wi(n),this.pattuglie=[],this.inseguimento=!1,this.tempoInseguimento=0,this.tempoFuoriVista=0,this.onArresto=null,this.onGrida=null,this.segnalazioni=null,this.geoCono=new jr(1,1,16,1,!0),this.matCono=new Me({color:4491519,transparent:!0,opacity:.12,side:ei,depthWrite:!1})}get stelle(){let t=this.stato.heat;return t>=90?5:t>=70?4:t>=48?3:t>=26?2:t>=10?1:0}_quotaPattuglie(t){let i=1+ne[Ai(t.x,t.z)].polizia*1.4;return Math.min(12,Math.round(i+this.stelle*1.7))}aggiorna(t,e,i){let n=e.posizione,s=Math.hypot(e.velocita.x,e.velocita.z)<.6,r=this.citta.alRiparo(n.x,n.z),a=.35;s&&(a+=.5),r&&(a+=.7*(1+this.stato.grado("vicoli")*.33)),this.inseguimento&&(a=0),this.stato.heat=at(this.stato.heat-a*t,0,100);let l=this._quotaPattuglie(n);for(let h=this.pattuglie.length-1;h>=0;h--){let u=this.pattuglie[h],d=Math.hypot(u.gruppo.position.x-n.x,u.gruppo.position.z-n.z);(d>mM||this.pattuglie.length>l&&d>70&&!this.inseguimento)&&(this.scena.remove(u.gruppo),this.pattuglie.splice(h,1))}for(;this.pattuglie.length<l;){let h=this._generaPattuglia(n);if(!h)break;this.pattuglie.push(h)}let c=!1;for(let h of this.pattuglie)this._aggiornaPattuglia(h,t,e,i),h.tiVede&&(c=!0);if(this.inseguimento){this.tempoInseguimento+=t,this.tempoFuoriVista=c?0:this.tempoFuoriVista+t;let h=r?5:9;this.tempoFuoriVista>h&&this.fineInseguimento(!0)}}_generaPattuglia(t){let e=null;for(let r=0;r<25;r++){let a=this.citta.puntoSuStrada(this.rng),l=Math.hypot(a.x-t.x,a.z-t.z);if(l>(this.inseguimento?35:40)&&l<130){e=a;break}}if(!e)return null;let i=$s(3099791,13081202,.4);i.position.set(e.x,0,e.z);let n=new Lt(new di(.34,.34,.18,8),new Ft({color:989752}));n.position.y=2.24,i.add(n);let s=new Lt(this.geoCono,this.matCono);return s.rotation.x=Math.PI/2,s.position.set(0,.15,Fo/2),s.scale.set(Fo*Math.tan(Rh),Fo,Fo*Math.tan(Rh)),s.visible=this.stato.permanenti.has("scanner"),i.add(s),this.scena.add(i),{gruppo:i,cono:s,sospetto:0,tiVede:!1,passo:this.rng()*10,meta:this.citta.puntoSuStrada(this.rng),direzione:0,velocita:3.4+this.rng()*.8,attesa:0}}_aggiornaPattuglia(t,e,i,n){let s=i.posizione,r=s.x-t.gruppo.position.x,a=s.z-t.gruppo.position.z,l=Math.hypot(r,a),c=!1;if(l<Fo){let g=Math.atan2(r,a)-t.direzione;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;(Math.abs(g)<Rh||l<5)&&(c=this._lineaLibera(t.gruppo.position,s))}if(t.tiVede=c,c){let v=0;this.stato.heat>55&&(v+=(this.stato.heat-55)*.012),i.aBordo&&this.segnalazioni?.segnalata(i.veicolo.targa)&&(v+=1.1,t.riconosciuto=!0),i.corre&&this.stato.heat>20&&(v+=.5),this.stato.minaccia>.6&&(v+=.9),this.stato.carico>8&&(v+=.35),i.inChinato&&(v*=.45),l<7&&(v*=1.6),this.inseguimento&&(v=4),t.sospetto=at(t.sospetto+v*e,0,1),t.sospetto>=1&&!this.inseguimento&&this.iniziaInseguimento()}else t.sospetto=at(t.sospetto-e*.35,0,1);t.cono&&(t.cono.visible=this.stato.permanenti.has("scanner"),t.cono.material.opacity=.08+t.sospetto*.22);let h=t.meta,u=t.velocita;if(this.inseguimento){if(c&&(t.ultimaNota={x:s.x,z:s.z}),h=t.ultimaNota??{x:s.x,z:s.z},u=t.velocita*1.55,l<2&&c){this.arresta();return}}else t.sospetto>.35&&(h={x:s.x,z:s.z},u=t.velocita*1.15);let d=h.x-t.gruppo.position.x,f=h.z-t.gruppo.position.z,p=Math.hypot(d,f);if(p<2)t.attesa-=e,t.attesa<=0&&(t.meta=this.citta.puntoSuStrada(this.rng),t.attesa=this.rng()*2,t.ultimaNota=null);else{d/=p,f/=p;let v=t.gruppo.position.x+d*u*e,g=t.gruppo.position.z+f*u*e,m=this.citta.risolviCollisione(v,g,.6);Math.hypot(m.x-v,m.z-g)>.05?(t.bloccato=(t.bloccato??0)+e,t.bloccato>1&&!this.inseguimento&&(t.meta=this.citta.puntoSuStrada(this.rng),t.bloccato=0)):t.bloccato=0,t.gruppo.position.x=m.x,t.gruppo.position.z=m.z;let x=Math.atan2(d,f)-t.direzione;for(;x>Math.PI;)x-=Math.PI*2;for(;x<-Math.PI;)x+=Math.PI*2;t.direzione+=x*Math.min(1,e*5),t.gruppo.rotation.y=t.direzione,t.passo+=e*u*1.15;let y=t.gruppo.userData.arti,w=Math.min(.8,u*.12),S=Math.sin(t.passo*2.2);y.gambaS.rotation.x=S*w,y.gambaD.rotation.x=-S*w,y.bracciaS.rotation.x=-S*w*.8,y.bracciaD.rotation.x=S*w*.8}t.gruppo.userData.aggiorna?.(e,u??0)}_lineaLibera(t,e){for(let n=1;n<9;n++){let s=n/9,r=t.x+(e.x-t.x)*s,a=t.z+(e.z-t.z)*s;if(!this.citta.libero(r,a,.1))return!1}return!0}iniziaInseguimento(){this.inseguimento||(this.inseguimento=!0,this.tempoInseguimento=0,this.tempoFuoriVista=0,this.stato.aggiungiHeat(12),this.onGrida?.("Fermo! Polizia!"))}fineInseguimento(t){if(this.inseguimento){this.inseguimento=!1;for(let e of this.pattuglie)e.sospetto=0,e.ultimaNota=null;t&&(this.stato.stat.fughe++,this.stato.segna("fughe",1),this.stato.aggiungiXp(80+this.tempoInseguimento*6),this.stato.scriviLog("Li hai seminati.","ok"),this.onGrida?.("Seminati."))}}arresta(){let t=this.stato;this.inseguimento=!1;for(let l of this.pattuglie)l.sospetto=0;let e={...t.inventario},i=0;for(let[l,c]of Object.entries(e))i+=c*20;t.inventario={};let n=250+i*.8+t.arresti*400,s=1-t.grado("contabile")*.12,r=Math.round(n*s),a=Math.min(t.contanti,r);t.contanti-=a,t.debito+=r-a,t.arresti++,t.heat=25,t.minuti+=480,t.scriviLog(`Arrestato. Sequestro e ${r} \u20AC di cauzione.`,"male"),this.onArresto?.({cauzione:r,merceSequestrata:e})}svuota(){for(let t of this.pattuglie)this.scena.remove(t.gruppo);this.pattuglie=[],this.inseguimento=!1}};var we={CINQUANTINO:"cinquantino",SCOOTER:"scooter",MAXISCOOTER:"maxiscooter",TRICICLO:"triciclo",AUTO:"auto",PICKUP:"pickup",SUV:"suv"},ep=[{id:"mc2",nome:"Piaggetta MC2",classe:we.CINQUANTINO,anni:"1994",descrizione:"Il 50 squadrato di vent'anni fa. Lento, scassato, invisibile: nessuno guarda due volte un ragazzino su un MC2.",velMax:48,accelerazione:5.5,frenata:9,sterzo:2.6,massa:.35,vano:6,discrezione:.92,prezzo:350,corpo:{lungh:1.7,largh:.62,alt:.52,ruotaAnt:.24,ruotaPost:.24,ruoteAnt:1,pedana:!0,cupolino:.1,sella:.72,bauletto:!1,spigoloso:!0,scudo:.55},colori:["#b8342e","#2f4a8a","#d8d4cc","#2a2a2e"]},{id:"zeta_sp",nome:"Zeta SP",classe:we.CINQUANTINO,anni:"1996",descrizione:"Il cinquantino sportivo per eccellenza: carena affilata, marmitta che si sente da tre isolati. Veloce per quello che \xE8, e per questo la polizia lo conosce bene.",velMax:62,accelerazione:7.4,frenata:10,sterzo:3,massa:.33,vano:5,discrezione:.7,prezzo:900,corpo:{lungh:1.74,largh:.6,alt:.54,ruotaAnt:.26,ruotaPost:.26,ruoteAnt:1,pedana:!0,cupolino:.26,sella:.74,bauletto:!1,spigoloso:!0,scudo:.48,carena:!0},colori:["#e8e4dc","#1f6ad0","#e04a2a","#f0c020"]},{id:"zeta_fr",nome:"Zeta Fast Rider",classe:we.CINQUANTINO,anni:"1993",descrizione:"Versione a ruote alte e forcella lunga. Sui marciapiedi e sulle buche del Porto va dove gli altri si fermano.",velMax:58,accelerazione:6.6,frenata:9.5,sterzo:3.4,massa:.34,vano:7,discrezione:.8,prezzo:700,corpo:{lungh:1.8,largh:.62,alt:.6,ruotaAnt:.32,ruotaPost:.3,ruoteAnt:1,pedana:!0,cupolino:.14,sella:.82,bauletto:!1,spigoloso:!0,scudo:.5},colori:["#1a7a4a","#d8d4cc","#2a2a2e","#c05020"]},{id:"energia_mc3",nome:"Energia MC3",classe:we.CINQUANTINO,anni:"2001",descrizione:"Carena tagliata a spigoli, raffreddamento a liquido, radiatore a vista. Il pi\xF9 aggressivo della sua categoria \u2014 e il pi\xF9 rubato.",velMax:66,accelerazione:8.2,frenata:10.5,sterzo:3.1,massa:.34,vano:5,discrezione:.62,prezzo:1200,corpo:{lungh:1.78,largh:.62,alt:.56,ruotaAnt:.27,ruotaPost:.27,ruoteAnt:1,pedana:!0,cupolino:.3,sella:.76,bauletto:!1,spigoloso:!0,scudo:.44,carena:!0,radiatore:!0},colori:["#151518","#c8102e","#f0f0f0","#1f6ad0"]},{id:"buster",nome:"Buster 50",classe:we.CINQUANTINO,anni:"1997",descrizione:"Ruote grasse e piccole, niente scudo davanti, telaio a vista. Brutto e indistruttibile: ci sali in due, sali sui marciapiedi, lo lasci sotto la pioggia e riparte.",velMax:56,accelerazione:7,frenata:9.8,sterzo:3.6,massa:.4,vano:8,discrezione:.78,prezzo:800,corpo:{lungh:1.66,largh:.68,alt:.5,ruotaAnt:.24,ruotaPost:.24,ruoteAnt:1,gommeGrasse:!0,pedana:!0,cupolino:0,sella:.72,bauletto:!1,spigoloso:!0,scudo:0,telaioAVista:!0},colori:["#2a2a2e","#d84a20","#f0e8d0","#1f6ad0"]},{id:"fantom",nome:"Fantom 200",classe:we.SCOOTER,anni:"2008",descrizione:"Ruote alte, sella comoda, bauletto capiente. Il mezzo dei rider e dei fattorini: in strada nessuno lo distingue dagli altri mille.",velMax:88,accelerazione:8,frenata:11,sterzo:2.7,massa:.55,vano:22,discrezione:.95,prezzo:2600,corpo:{lungh:1.98,largh:.7,alt:.62,ruotaAnt:.33,ruotaPost:.31,ruoteAnt:1,pedana:!0,cupolino:.4,sella:.8,bauletto:!0,spigoloso:!1,scudo:.62},colori:["#2a2f38","#8a1a1a","#dcdcdc","#1a3a6a"]},{id:"tormax",nome:"TorMax 530",classe:we.MAXISCOOTER,anni:"2015",descrizione:"Maxi scooter: la velocit\xE0 di una moto con la comodit\xE0 di uno scooter. Semina le volanti in rettilineo, ma \xE8 grosso, lucido e si nota da lontano.",velMax:168,accelerazione:13.5,frenata:15,sterzo:2.1,massa:.95,vano:30,discrezione:.45,prezzo:9800,corpo:{lungh:2.28,largh:.8,alt:.7,ruotaAnt:.36,ruotaPost:.34,ruoteAnt:1,pedana:!0,cupolino:.62,sella:.82,bauletto:!0,spigoloso:!1,scudo:.78,carena:!0},colori:["#14161a","#4a4f58","#0d3a6a","#7a1520"]},{id:"trike",nome:"Trike 300",classe:we.TRICICLO,anni:"2012",descrizione:"Due ruote davanti, una dietro. Sul bagnato e sui sanpietrini non scivola: \xE8 l'unico mezzo che tiene la strada quando piove sul Porto.",velMax:118,accelerazione:10,frenata:16,sterzo:2.5,massa:.85,vano:26,discrezione:.68,prezzo:6400,corpo:{lungh:2.1,largh:.94,alt:.66,ruotaAnt:.3,ruotaPost:.32,ruoteAnt:2,carreggiataAnt:.42,pedana:!0,cupolino:.52,sella:.8,bauletto:!0,spigoloso:!1,scudo:.7,carena:!0},colori:["#1c1e22","#b8b4ac","#2a5a3a","#6a2a2a"]},{id:"golfo",nome:"Golfo GTI",classe:we.AUTO,anni:"1998",descrizione:"La compatta a due volumi che ha tutta Europa. Passa ovunque, parcheggia ovunque, e nessuno se la ricorda.",velMax:175,accelerazione:11,frenata:16,sterzo:1.8,massa:2.2,vano:60,discrezione:.9,prezzo:4200,corpo:{lungh:4.05,largh:1.72,alt:1.42,passo:2.45,ruota:.31,tetto:.6,sbalzoPost:.55,coda:"hatchback",vetri:.42},colori:["#c8102e","#e8e8e8","#1a1a1e","#2a5a8a","#7a8288"]},{id:"utilitaria",nome:"Cinquino",classe:we.AUTO,anni:"2005",descrizione:"Utilitaria da citt\xE0, tre porte, motore che sembra un frullatore. Costa niente e non attira niente.",velMax:145,accelerazione:8.5,frenata:14,sterzo:2,massa:1.7,vano:40,discrezione:.95,prezzo:1800,corpo:{lungh:3.55,largh:1.62,alt:1.48,passo:2.3,ruota:.28,tetto:.68,sbalzoPost:.4,coda:"hatchback",vetri:.46},colori:["#e0e0dc","#8ab0d0","#c8b040","#5a6a5a"]},{id:"ranchero",nome:"Ranchero 1500",classe:we.PICKUP,anni:"2011",descrizione:"Pick-up americano a cassone lungo. Ci carichi mezzo container, e in Europa lo vedono a un chilometro di distanza.",velMax:165,accelerazione:9.5,frenata:15,sterzo:1.5,massa:3.6,vano:160,discrezione:.35,prezzo:16e3,corpo:{lungh:5.6,largh:2.02,alt:1.88,passo:3.4,ruota:.42,tetto:.52,sbalzoPost:.3,coda:"cassone",vetri:.34,cabina:.42},colori:["#1a1a1e","#8a1a1a","#2a4a8a","#c8c4bc"]},{id:"discover",nome:"Discover 4",classe:we.SUV,anni:"2013",descrizione:"SUV squadrato da benestante. In Distretto Argento sei uno dei tanti; alle Torri sei un bancomat con le ruote.",velMax:178,accelerazione:10.5,frenata:16,sterzo:1.6,massa:3.2,vano:110,discrezione:.55,prezzo:21e3,corpo:{lungh:4.85,largh:1.96,alt:1.86,passo:2.88,ruota:.4,tetto:.78,sbalzoPost:.62,coda:"suv",vetri:.42},colori:["#2a3a30","#1a1a1e","#d8d8d4","#4a4a52"]}],ip=Object.fromEntries(ep.map(o=>[o.id,o])),Ys=o=>[we.CINQUANTINO,we.SCOOTER,we.MAXISCOOTER,we.TRICICLO].includes(o.classe),np={villarosa:["mc2","zeta_fr","utilitaria","golfo","fantom"],latino:["zeta_sp","energia_mc3","golfo","utilitaria","tormax","fantom"],argento:["tormax","discover","golfo","trike"],torri:["mc2","zeta_fr","zeta_sp","utilitaria","fantom"],porto:["ranchero","fantom","mc2","utilitaria","trike"]};var sp="ABCDEFGHJKLMNPRSTVWXYZ";function op(o){let t=wi(xf(String(o))),e=()=>sp[Math.floor(t()*sp.length)],i=()=>Math.floor(t()*10);return`${e()}${e()} ${i()}${i()}${i()} ${e()}${e()}`}var gM={argento:25,villarosa:70,latino:90,torri:180,porto:300};function rp(o){return o.corpo.sella?2.2:3.8}var Ia=class{constructor(t){this.stato=t,t.targheSegnalate??=[],t.furtiInCorso??=[],t.furtiTotali??=0}segnalata(t){return!!t&&this.stato.targheSegnalate.includes(t)}registraFurto(t,e,i){let n=this.stato;if(n.furtiTotali++,this.segnalata(t)||n.furtiInCorso.some(a=>a.targa===t))return;let s=gM[e]??90,r=1+n.grado("vicoli")*.25;n.furtiInCorso.push({targa:t,denunciaAlMinuto:i+s*r})}aggiorna(t){let e=this.stato,i=[];for(let n=e.furtiInCorso.length-1;n>=0;n--)if(t>=e.furtiInCorso[n].denunciaAlMinuto){let{targa:s}=e.furtiInCorso.splice(n,1)[0];this.segnalata(s)||(e.targheSegnalate.push(s),e.targheSegnalate.length>12&&e.targheSegnalate.shift(),i.push(s))}return i}ripulisci(t){let e=this.stato,i=e.targheSegnalate.indexOf(t);i>=0&&e.targheSegnalate.splice(i,1),e.furtiInCorso=e.furtiInCorso.filter(n=>n.targa!==t)}costoDocumenti(){return Math.round(600+this.stato.furtiTotali*180)}pesoSospetto(t){return this.segnalata(t)?1.1:0}};var vM=new In,za=new Map,ap=new Map,xM={auto:{file:"assets/veicoli/auto/scene.gltf",corpi:/_body$/i,ruote:/^wheel/i,vernice:/^body/i},vespa:{file:"assets/veicoli/vespa/scene.gltf",tuttaLaScena:!0,ruote:/wheel/i},vespaVecchia:{file:"assets/veicoli/vespa-vecchia/scene.gltf",tuttaLaScena:!0},scooter:{file:"assets/veicoli/scooter/scene.gltf",tuttaLaScena:!0}},_M={golfo:{pacchetto:"auto",pezzo:"Hatchback_Body",giro:0},utilitaria:{pacchetto:"auto",pezzo:"Compact_Body",giro:0},ranchero:{pacchetto:"auto",pezzo:"Pickup_Body",giro:0},discover:{pacchetto:"auto",pezzo:"Offroad_Body",giro:0},trike:{pacchetto:"vespaVecchia",giro:0},mc2:{pacchetto:"scooter",giro:2},zeta_sp:{pacchetto:"scooter",giro:2},zeta_fr:{pacchetto:"vespaVecchia",giro:0},energia_mc3:{pacchetto:"scooter",giro:2},buster:{pacchetto:"vespaVecchia",giro:0},fantom:{pacchetto:"vespa",giro:0},tormax:{pacchetto:"vespa",giro:0}},yM=/wheel|ruota|tire|tyre/i,MM=/front|stearing|steering/i,lp=/glass|optic|decal|light|wheel|tire|chrome/i,cp=/socle|pedestal|podium|base[_ ]?plate|display|ground|floor|plane/i,hp=null;function dp(){return hp??=bM(),hp}async function bM(){return{pacchetti:(await Promise.all(Object.entries(xM).map(async([t,e])=>{try{let i=await vM.loadAsync(e.file);return EM(t,e,i.scene),t}catch(i){return console.warn(`[modelli] ${t} non caricato: ${i.message}`),null}}))).filter(Boolean),mezzi:[...za.keys()]}}var SM=o=>`${o.pacchetto}:${o.pezzo??"*"}`;function EM(o,t,e){if(e.updateWorldMatrix(!0,!0),AM(e),t.tuttaLaScena){za.set(`${o}:*`,up(e,t));return}let i=[];t.ruote&&e.traverse(a=>{a.isMesh&&t.ruote.test(a.name)&&i.push(a)});let n=a=>t.corpi instanceof RegExp?t.corpi.test(a):t.corpi.includes(a),s=[];e.traverse(a=>{a.name&&n(a.name)&&s.push(a)});let r=new C;for(let a of s){let l=new te,c=new fe().setFromObject(a),h=c.getCenter(new C),u=Math.max(c.max.x-c.min.x,c.max.z-c.min.z)*.7,d=a.clone(!0);d.position.copy(a.getWorldPosition(r)),d.quaternion.copy(a.getWorldQuaternion(new He)),d.scale.copy(a.getWorldScale(new C)),l.add(d);let f=i.map(p=>{let v=new fe().setFromObject(p).getCenter(new C);return{r:p,d:Math.hypot(v.x-h.x,v.z-h.z)}}).filter(p=>p.d<=u).sort((p,v)=>p.d-v.d).slice(0,4);for(let{r:p}of f){let v=p.clone(!0);v.position.copy(p.getWorldPosition(r).clone()),v.quaternion.copy(p.getWorldQuaternion(new He)),v.scale.copy(p.getWorldScale(new C)),v.name=`wheel_${p.name}`,l.add(v)}za.set(`${o}:${a.name}`,up(l,t))}}function up(o,t){let e=new te,i=new te;i.add(o),e.add(i),e.updateMatrixWorld(!0),i.rotation.y=TM(e)-Math.PI/2,e.updateMatrixWorld(!0);let n=new fe().setFromObject(e);i.position.set(i.position.x-(n.min.x+n.max.x)/2,i.position.y-n.min.y,i.position.z-(n.min.z+n.max.z)/2),e.updateMatrixWorld(!0);let s=new fe().setFromObject(e);return e.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),{gruppo:e,lunghezza:s.max.z-s.min.z,vernice:t.vernice??null}}function TM(o){let t=0,e=0,i=0,n=0,s=0,r=0,a=new C;if(o.traverse(f=>{if(!f.isMesh)return;let p=f.geometry.getAttribute("position");if(!p)return;let v=Math.max(1,Math.floor(p.count/900));for(let g=0;g<p.count;g+=v)a.fromBufferAttribute(p,g).applyMatrix4(f.matrixWorld),t++,e+=a.x,i+=a.z,n+=a.x*a.x,s+=a.z*a.z,r+=a.x*a.z}),t<8)return Math.PI/2;let l=e/t,c=i/t,h=n/t-l*l,u=s/t-c*c,d=r/t-l*c;return .5*Math.atan2(2*d,h-u)}function AM(o){let t=new fe().setFromObject(o),e=t.max.y-t.min.y,i=[];o.traverse(n=>{if(!n.isMesh){n.name&&cp.test(n.name)&&i.push(n);return}let s=`${n.name??""} ${n.material?.name??""}`;if(cp.test(s)){i.push(n);return}let r=new fe().setFromObject(n),a=r.max.y-r.min.y,l=Math.max(r.max.x-r.min.x,r.max.z-r.min.z),c=r.max.y-t.min.y<e*.14;l>.01&&a<l*.07&&c&&i.push(n)});for(let n of i)n.parent?.remove(n)}function fp(o,{lunghezza:t,colore:e}={}){let i=_M[o],n=i&&za.get(SM(i));if(!n)return null;let s=n.gruppo.clone(!0);i.giro&&(s.children[0].rotation.y+=i.giro*Math.PI/2),t&&s.scale.setScalar(t/Math.max(.001,n.lunghezza));let r=wM(s);e&&n.vernice&&RM(s,e,n.vernice);let a=new te;return a.add(s),a.userData=r,a.updateMatrixWorld(!0),a}function wM(o){o.updateMatrixWorld(!0);let t=[];o.traverse(h=>{h.isMesh&&yM.test(h.name)&&t.push(h)});let e=[],i=[];if(!t.length)return{ruote:e,sterzanti:i,sterzo:null,tipo:"modello"};let n=new fe().setFromObject(o),s=n.max.z-n.min.z,r=t.filter(h=>{let u=new fe().setFromObject(h);return u.max.z-u.min.z<s*.55});if(!r.length)return{ruote:e,sterzanti:i,sterzo:null,tipo:"modello"};t.length=0,t.push(...r);let a=t.map(h=>new fe().setFromObject(h).getCenter(new C)),l=a.map(h=>h.z).sort((h,u)=>h-u),c=l[Math.floor(l.length/2)];return t.forEach((h,u)=>{let d=h.parent,f=a[u].clone();d.worldToLocal(f);let p=new te;p.position.copy(f),d.add(p),h.position.sub(f),p.add(h),e.push(p),(t.length===2?MM.test(h.name)||a[u].z>c:a[u].z>=c)&&i.push(p)}),{ruote:e,sterzanti:i,sterzo:null,tipo:"modello"}}function RM(o,t,e){let i=new st(t);o.traverse(n=>{if(!n.isMesh||!n.material)return;let s=n.material;if(s.name==="colormap"&&s.map?.image){n.material=s.clone(),CM(n,t);return}let r=s.name??"";lp.test(r)||lp.test(n.name??"")||e&&!e.test(r)||(n.material=s.clone(),n.material.color.copy(i))})}function CM(o,t){let e=o.material.map,i=PM(o.geometry,e);if(!i)return;let n=`${e.uuid}|${i.x},${i.y}|${t}`,s=ap.get(n);if(s){o.material.map=s;return}let r=e.image,a=document.createElement("canvas");a.width=r.width,a.height=r.height;let l=a.getContext("2d");l.drawImage(r,0,0);let c=l.getImageData(0,0,a.width,a.height),h=c.data,u=(i.y*a.width+i.x)*4,[d,f,p]=[h[u],h[u+1],h[u+2]],v=new st(t),[g,m,_]=[v.r*255,v.g*255,v.b*255].map(Math.round);for(let y=0;y<h.length;y+=4)Math.abs(h[y]-d)<=6&&Math.abs(h[y+1]-f)<=6&&Math.abs(h[y+2]-p)<=6&&(h[y]=g,h[y+1]=m,h[y+2]=_);l.putImageData(c,0,0);let x=new Mi(a);x.colorSpace=ue,x.flipY=e.flipY,x.wrapS=e.wrapS,x.wrapT=e.wrapT,ap.set(n,x),o.material.map=x,o.material.needsUpdate=!0}function PM(o,t){let e=o.getAttribute("uv"),i=o.getAttribute("position"),n=t.image;if(!e||!i||!n)return null;let s=n.width,r=n.height,a=o.getIndex(),l=a?a.count/3:i.count/3,c=new Map;for(let d=0;d<l;d++){let f=a?a.getX(d*3):d*3,p=a?a.getX(d*3+1):d*3+1,v=a?a.getX(d*3+2):d*3+2,g=i.getX(p)-i.getX(f),m=i.getY(p)-i.getY(f),_=i.getZ(p)-i.getZ(f),x=i.getX(v)-i.getX(f),y=i.getY(v)-i.getY(f),w=i.getZ(v)-i.getZ(f),S=m*w-_*y,R=_*x-g*w,z=g*y-m*x,M=Math.hypot(S,R,z);if(M<=0||R/M<-.5)continue;let E=(e.getX(f)+e.getX(p)+e.getX(v))/3,D=(e.getY(f)+e.getY(p)+e.getY(v))/3;t.flipY&&(D=1-D);let F=Math.min(s-1,Math.max(0,Math.floor(E*s))),P=Math.min(r-1,Math.max(0,Math.floor(D*r)))*s+F;c.set(P,(c.get(P)??0)+M*.5)}let h=null,u=0;for(let[d,f]of c)f>u&&(u=f,h=d);return h===null?null:{x:h%s,y:Math.floor(h/s)}}var La=1/3.6*.62,IM=new Ft({color:1711138,roughness:.95}),Ih=new Ft({color:10923190,roughness:.32,metalness:.65}),Nh=new Ft({color:1186340,roughness:.26,metalness:.15,transparent:!0,opacity:.86,envMapIntensity:.45}),We=new Ft({color:2237739,roughness:.78}),Zs=new Ft({color:14541288,roughness:.18,metalness:.9}),zM=[Ih,Nh,Zs],gp=null;function vp(o){gp=o;for(let t of zM)t.envMap=o,t.needsUpdate=!0}function zh(o,t={}){return new Ft({color:new st(o),roughness:.3,metalness:.5,envMap:gp,envMapIntensity:.9,...t})}var xp=new Ft({color:16773312,emissive:16773312,emissiveIntensity:.35,roughness:.3}),_p=new Ft({color:9048080,emissive:16719904,emissiveIntensity:.15,roughness:.4}),Lh=new di(1,1,1,18);Lh.rotateZ(Math.PI/2);var LM=new Ze(1,1,1),mp=new di(1,1,1,12),Ch=new Map;function DM(o){if(Ch.has(o))return Ch.get(o);let t=document.createElement("canvas");t.width=256,t.height=64;let e=t.getContext("2d");e.fillStyle="#f2f2ee",e.fillRect(0,0,256,64),e.fillStyle="#12275e",e.fillRect(0,0,26,64),e.fillRect(230,0,26,64),e.fillStyle="#f0c020",e.font="bold 13px monospace",e.textAlign="center",e.fillText("I",13,56),e.fillStyle="#101014",e.font='bold 40px "Helvetica Neue", Arial, sans-serif',e.textBaseline="middle",e.fillText(o.replace(/ /g,""),128,34);let i=new Mi(t);return i.anisotropy=4,Ch.set(o,i),i}function Ph(o,t,e,i,n,s=0){let r=new Lt(new sn(t,t*.25),new Ft({map:DM(o),roughness:.7}));return r.position.set(e,i,n),r.rotation.y=s,r}function se(o,t,e,i,n,s,r,a=0,l=0,c=0,h=null){let u=h??Math.min(Math.min(t,e,i)*.3,.075),d=new Lt(Ta(t,e,i,u),o);return d.position.set(n,s,r),d.rotation.set(a,l,c),d.castShadow=!0,d}function Da(o,t,e,i,n){let s=new te,r=new Lt(Lh,IM);r.scale.set(t,o,o),r.castShadow=!0;let a=new Lt(Lh,Ih);a.scale.set(t*1.12,o*.6,o*.6);for(let l of[0,Math.PI/2]){let c=new Lt(LM,Ih);c.scale.set(t*1.16,o*1.1,o*.13),c.rotation.x=l,s.add(c)}return s.add(r,a),s.position.set(e,i,n),s.userData.raggio=o,s}function NM(o,t){let e=o.corpo,i=zh(t,{roughness:e.spigoloso?.45:.3}),n=new te,s=e.lungh,r=e.largh,a=e.gommeGrasse?1.5:1,l=s*.38,c=-s*.36,h=e.sella,u=[],d=Da(e.ruotaPost,.14*a,0,e.ruotaPost,c);n.add(d),u.push(d),n.add(se(We,.07,.09,s*.3,r*.2,e.ruotaPost*1.05,c+s*.14));let f=new te;f.position.set(0,0,l);let p=h+.36,v=-.16;if(e.ruoteAnt===2){for(let D of[-1,1]){let F=Da(e.ruotaAnt,.12,D*e.carreggiataAnt,e.ruotaAnt,0);f.add(F),u.push(F),f.add(se(Zs,.055,p-e.ruotaAnt,.055,D*e.carreggiataAnt,(p+e.ruotaAnt)/2,.02,-.16))}f.add(se(We,e.carreggiataAnt*2.1,.08,.11,0,e.ruotaAnt+.22,0))}else{let D=Da(e.ruotaAnt,.13*a,0,e.ruotaAnt,0);f.add(D),u.push(D);for(let F of[-1,1])f.add(se(Zs,.05,p-e.ruotaAnt+.06,.05,F*.11,(p+e.ruotaAnt)/2,.03,-.17));f.add(se(i,.2,.06,e.ruotaAnt*1.7,0,e.ruotaAnt*1.5,.02))}let g=new Lt(mp,We);g.scale.set(.035,r*1.02,.035),g.rotation.z=Math.PI/2,g.position.set(0,p,v),f.add(g);for(let D of[-1,1]){let F=new Lt(mp,We);F.scale.set(.052,r*.22,.052),F.rotation.z=Math.PI/2,F.position.set(D*r*.4,p,v),f.add(F),f.add(se(We,.022,.19,.022,D*r*.46,p+.11,v)),f.add(se(We,.12,.07,.025,D*r*.48,p+.22,v))}f.add(se(We,r*.34,.09,.1,0,p-.03,v+.07)),f.add(se(xp,r*.42,.14,.09,0,e.ruotaAnt+e.scudo*.72+.14,.03)),e.cupolino>0&&f.add(se(Nh,r*.84,e.cupolino,.03,0,p+e.cupolino*.45,.02,-.24)),n.add(f);let m=h-e.ruotaPost*.85,_=e.ruotaPost*.72,x=e.ruotaPost+e.scudo,y=e.ruotaPost,w=e.ruotaAnt,S=y*2,R=[[c+y*1.05,S],[c+y*1.55,_],[s*.16,_],[s*.22,w*1.05]];if(e.scudo>0?R.push([s*.3,x],[s*.17,x*.9]):R.push([s*.2,h*.7]),R.push([s*.02,h*.8],[-s*.08,h*.9],[c+s*.16,h],[c-s*.06,h*.98],[c-s*.13,h*.62],[c-y*.35,S]),n.add(new Lt(Aa(R,r*.82,.055),i)),e.scudo<=0)for(let D of[-1,1])n.add(se(Zs,.05,h*.95,.05,D*r*.26,h*.52,s*.16,.34));if(e.carena)for(let D of[-1,1])n.add(se(i,.05,m*.62,s*.34,D*r*.44,e.ruotaPost+m*.45,c+s*.16,0,0,.07));e.radiatore&&n.add(se(Zs,r*.28,.19,.05,0,e.ruotaPost+.15,s*.31));let z=o.classe===we.MAXISCOOTER?s*.4:s*.32,M=c+s*.22;n.add(se(We,r*.74,.15,z,0,h+.075,M)),(o.classe===we.MAXISCOOTER||o.classe===we.TRICICLO)&&n.add(se(We,r*.68,.22,.1,0,h+.2,c+s*.02)),e.bauletto&&n.add(se(We,r*.64,.28,.34,0,h+.26,c-s*.06)),n.add(se(_p,r*.32,.09,.05,0,h+.01,c-s*.1)),n.add(se(Zs,.085,.085,s*.26,r*.32,e.ruotaPost*.8,c+s*.1));let E=o.classe===we.MAXISCOOTER||e.carena;return n.userData={ruote:u,sterzo:f,tipo:"due",pilota:{sella:{y:h+.15,z:M},manubrio:{y:p,z:l+v},inclinazione:E?.44:.3}},n}function UM(o,t){let e=o.corpo,i=new st(t),n=zh(i),s=zh(i.clone().multiplyScalar(.9),{roughness:.34}),r=new te,a=e.lungh,l=e.largh,c=e.ruota,h=e.passo,u=l*.9,d=[],f=[];for(let[q,W]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let $=Da(c,.2,q*(l/2-.03),c,W*(h/2));r.add($),d.push($),W>0&&f.push($)}let p=e.coda==="cassone",v=e.coda==="suv",g=e.coda==="hatchback",m=c*.42,_=e.alt*(v?.56:p?.55:.47),x=e.alt*(v?.62:p?.6:.56),y=e.alt,w=a/2,S=-a/2,R=p?a*.12:v?a*.16:a*.14,z=p||v?a*.02:-a*.02,M=p?-a*.12:v?-a*.4:-a*.3,E=p?-a*.18:v?-a*.46:g?-a*.42:-a*.38,D=p?e.alt*.52:v?y*.98:x*.96,F=[[S+.04,m],[w-.04,m],[w,m+(_-m)*.45],[w-a*.02,_],[R+a*.1,_+.01],[R,x],[z,y],[M,y],[E,x],[S+a*.02,D],[S,D-(D-m)*.35]],Y=[{z:h/2,y:c*1.02,r:c*1.3},{z:-h/2,y:c*1.02,r:c*1.3}],P=new Lt(Aa(F,u,.075,Y),n);P.castShadow=!0,r.add(P);let N=.07,k=[[R-N*.3,x+.03],[z+N,y-N],[M-N,y-N],[E+N*.3,x+.03]];if(r.add(new Lt(Aa(k,u+.03,.02),Nh)),r.add(se(s,u*.98,.05,Math.abs(z-M)+.1,0,y-.015,(z+M)/2,0,0,0,.02)),r.add(se(We,u*.96,c*.3,h-c*2.3,0,m+c*.12,0,0,0,0,.04)),p){let q=a*.4,W=-a*.26,$=e.alt*.3;for(let J of[-1,1])r.add(se(n,.1,$,q,J*(u/2-.05),D+$/2,W,0,0,0,.04));r.add(se(n,u*.99,$,.1,0,D+$/2,W-q/2,0,0,0,.04)),r.add(se(We,u*.92,.05,q,0,D+.02,W))}let K=_-.16;for(let q of[-1,1])r.add(se(xp,u*.3,.17,.1,q*u*.29,K,w-.06,0,0,0,.04)),r.add(se(_p,u*.26,.17,.1,q*u*.31,D-.24,S+.05,0,0,0,.04));r.add(se(We,u*.54,.13,.08,0,K-.03,w-.05,0,0,0,.03)),r.add(se(We,u*1.02,.17,.13,0,c+.02,w-.1,0,0,0,.06)),r.add(se(We,u*1.02,.17,.13,0,c+.02,S+.1,0,0,0,.06));for(let q of[-1,1])r.add(se(We,.07,.035,.035,q*(u/2+.03),x+.05,R-.06)),r.add(se(We,.055,.09,.13,q*(u/2+.08),x+.06,R-.08,0,0,0,.026));return r.userData={ruote:d,sterzanti:f,tipo:"auto"},r}function OM(o,t,e){let i=fp(o.id,{lunghezza:o.corpo.lungh,colore:t})??(Ys(o)?NM(o,t):UM(o,t));if(i.userData.def=o,i.userData.tipo==="modello"&&Ys(o)&&FM(i,o),e){let n=o.corpo,s=i.userData.tipo==="modello"?new fe().setFromObject(i):null,r=s?s.max.z-s.min.z:n.lungh,a=s?s.max.x-s.min.x:n.largh,l=s?s.max.y-s.min.y:n.alt,c=.52,h=.3;if(Ys(o)){let u=s?l*.4:n.sella*.42;i.add(Ph(e,Math.min(h,a*.6),0,u,-r*.49,Math.PI))}else{let u=s?l*.24:n.alt*.6-.34;i.add(Ph(e,c,0,u,r/2+.02)),i.add(Ph(e,c,0,u,-r/2-.02,Math.PI))}}return i}function FM(o,t){let e=new fe().setFromObject(o),i=e.max.y-e.min.y,n=e.max.z-e.min.z,s=new fe,r=new C,a=new fe;o.traverse(c=>{c.isMesh&&(a.setFromObject(c),a.getCenter(r),r.z>e.min.z+n*.68&&r.y>e.min.y+i*.55&&s.expandByPoint(r))});let l=s.isEmpty()?{y:i*.82,z:n*.32}:{y:(s.min.y+s.max.y)/2,z:(s.min.z+s.max.z)/2};o.userData.pilota={sella:{y:i*.56,z:-n*.06},manubrio:l,inclinazione:t.corpo.lungh>2.1?.4:.28}}var Dh=class{constructor(t,e,i,n,s=0,r=null){this.def=t,this.targa=r??op(`${t.id}_${i.toFixed(1)}_${n.toFixed(1)}`),this.rubato=!1,this.mesh=OM(t,e,this.targa),this.mesh.position.set(i,0,n),this.mesh.rotation.y=s,this.velocita=0,this.sterzoAttuale=0,this.inclinazione=0,this.beccheggio=0,this.danno=0,this.occupato=!1,this.raggio=Ys(t)?.9:Math.max(t.corpo.largh,t.corpo.lungh*.42)*.62,this.rotazioneRuote=0}posaSuolo(t){return this.mesh.position.y=t.quotaSuolo(this.mesh.position.x,this.mesh.position.z),this}get velMax(){return this.def.velMax*La*(1-this.danno*.35)}get kmh(){return Math.abs(this.velocita)/La}aggiorna(t,e,i){let n=this.def;e?(e.avanti?this.velocita+=n.accelerazione*La*10*t:e.indietro?this.velocita-=(this.velocita>.2?n.frenata:n.accelerazione*.45)*La*10*t:this.velocita*=Math.exp(-1.1*t),e.freno&&(this.velocita*=Math.exp(-4.5*t))):this.velocita*=Math.exp(-2*t),this.velocita=at(this.velocita,-this.velMax*.3,this.velMax);let s=0;e?.sinistra&&(s+=1),e?.destra&&(s-=1);let r=at(1-Math.abs(this.velocita)/this.velMax*.62,.3,1);this.sterzoAttuale=Vi(this.sterzoAttuale,s,9,t);let a=at(Math.abs(this.velocita)/(this.velMax*.1),0,1),l=this.sterzoAttuale*n.sterzo*r*a*t*Math.sign(this.velocita||1);this.mesh.rotation.y+=l;let c=Ys(n),h=-this.sterzoAttuale*at(Math.abs(this.velocita)/this.velMax,0,1);this.inclinazione=Vi(this.inclinazione,h*(c?.55:.07),6,t),this.mesh.rotation.z=this.inclinazione;let u=this.mesh.rotation.y,d=this.mesh.position.x+Math.sin(u)*this.velocita*t,f=this.mesh.position.z+Math.cos(u)*this.velocita*t,p=i.risolviCollisione(d,f,this.raggio);if(Math.hypot(p.x-d,p.z-f)>.02){let S=at(Math.abs(this.velocita)/this.velMax,0,1);this.danno=at(this.danno+S*.06,0,1),this.velocita*=.25,this.ultimoUrto=S}else this.ultimoUrto=0;this.mesh.position.x=p.x,this.mesh.position.z=p.z;let g=(n.corpo.lungh??3.4)*.34,m=Math.sin(u)*g,_=Math.cos(u)*g,x=i.quotaSuolo(p.x+m,p.z+_),y=i.quotaSuolo(p.x-m,p.z-_);this.mesh.position.y=Vi(this.mesh.position.y,Math.max(x,y),9,t),this.beccheggio=Vi(this.beccheggio,-Math.atan2(x-y,g*2),7,t),this.mesh.rotation.x=this.beccheggio,this.rotazioneRuote-=this.velocita*t/(n.corpo.ruota??n.corpo.ruotaPost??.3);for(let S of this.mesh.userData.ruote)S.rotation.x=this.rotazioneRuote;let w=this.sterzoAttuale*.5;this.mesh.userData.sterzo&&(this.mesh.userData.sterzo.rotation.y=w);for(let S of this.mesh.userData.sterzanti??[])S.rotation.y=w;return this.ultimoUrto}},Na=class{constructor(t,e,i=4242){this.scena=t,this.citta=e,this.rng=wi(i),this.veicoli=[],this.max=26,this.raggioVivo=130,this.raggioRiciclo=175,this.guidato=null}aggiorna(t,e){for(let i=this.veicoli.length-1;i>=0;i--){let n=this.veicoli[i];if(n===this.guidato)continue;Math.hypot(n.mesh.position.x-e.x,n.mesh.position.z-e.z)>this.raggioRiciclo&&(this.scena.remove(n.mesh),this.veicoli.splice(i,1))}for(;this.veicoli.length<this.max;){let i=this._parcheggia(e);if(!i)break;this.veicoli.push(i)}this.guidato&&(this.guidato.mesh.visible=!0)}_parcheggia(t){for(let e=0;e<30;e++){let i=Math.floor(this.rng()*be),n=Math.floor(this.rng()*be),s=(i+.5)*si-ve/2,r=(n+.5)*si-ve/2,a=Math.floor(this.rng()*4),l=ie/2+4.4,c=(this.rng()-.5)*ie*.8,h=[{x:s+c,z:r+l,rot:0},{x:s+c,z:r-l,rot:Math.PI},{x:s+l,z:r+c,rot:Math.PI/2},{x:s-l,z:r+c,rot:-Math.PI/2}][a];if(Math.abs(h.x)>ve/2-4||Math.abs(h.z)>ve/2-4)continue;let u=Math.hypot(h.x-t.x,h.z-t.z);if(u<14||u>this.raggioVivo||!this.citta.libero(h.x,h.z,2.6)||this.veicoli.some(v=>Math.hypot(v.mesh.position.x-h.x,v.mesh.position.z-h.z)<6))continue;let d=Ai(h.x,h.z),f=ip[xe(np[d]??["utilitaria"],this.rng)],p=new Dh(f,xe(f.colori,this.rng),h.x,h.z,h.rot);return p.posaSuolo(this.citta),p.danno=this.rng()*(d==="torri"||d==="porto"?.45:.15),this.scena.add(p.mesh),p}return null}vicino(t,e=3.6){let i=null,n=e;for(let s of this.veicoli){if(s===this.guidato)continue;let r=Math.hypot(s.mesh.position.x-t.x,s.mesh.position.z-t.z);r<n&&(n=r,i=s)}return i}svuota(){for(let t of this.veicoli)this.scena.remove(t.mesh);this.veicoli=[],this.guidato=null}};var BM=.55,kM=.06,Ua=class o{constructor(t=1234){this.rng=wi(t),this.giorno=0,this.saturazione={},this.deriva={};for(let e of oi){this.saturazione[e.id]={},this.deriva[e.id]={};for(let i of Ge)this.saturazione[e.id][i.id]=0,this.deriva[e.id][i.id]=1}this.eventi=[],this.storico={};for(let e of Ge)this.storico[e.id]=[]}prezzo(t,e){let i=Ht[t],n=ne[e];if(!i||!n)return 0;let s=i.domanda[e]??1,r=.55+n.ricchezza*.6,a=this.deriva[e][t],l=1-this.saturazione[e][t]*BM,c=this.moltiplicatoreEventi(t,e),h=i.tier>=3?.85+n.ricchezza*.25:1;return Math.max(1,i.prezzoBase*s*r*a*l*c*h)}prezzoFornitore(t,e){let i=this.prezzoMedioCitta(t),n=this.prezzo(t,e.quartiere),s=at(n/Math.max(1e-6,i),.72,1);return Math.max(1,i*s*(e.sconto??.85)*this.moltiplicatoreEventi(t,e.quartiere))}prezzoMedioCitta(t){let e=0;for(let i of oi)e+=this.prezzo0(t,i.id);return e/oi.length}prezzo0(t,e){let i=Ht[t],n=ne[e],s=i.domanda[e]??1,r=i.tier>=3?.85+n.ricchezza*.25:1;return i.prezzoBase*s*(.55+n.ricchezza*.6)*this.deriva[e][i.id]*r}indiceAffare(t,e){let i=this.prezzoMedioCitta(t);return i<=0?0:this.prezzo(t,e)/i-1}registraVendita(t,e,i){let n=Ht[t],s=40*(n.domanda[e]??1)*(n.tier===1?1.8:1),r=this.saturazione[e][t]+i/s;this.saturazione[e][t]=at(r,0,1)}moltiplicatoreEventi(t,e){let i=1;for(let n of this.eventi)n.merci&&!n.merci.includes(t)||n.categoria&&Ht[t].categoria!==n.categoria||n.quartiere&&n.quartiere!==e||(i*=n.moltiplicatore);return i}nuovoGiorno(){this.giorno++;for(let t of oi)for(let e of Ge){let i=this.deriva[t.id][e.id],n=i+_f(this.rng)*e.volatilita*.35+(1-i)*.18;this.deriva[t.id][e.id]=at(n,.55,2.1),this.saturazione[t.id][e.id]=Math.max(0,this.saturazione[t.id][e.id]-kM)}this.eventi=this.eventi.filter(t=>--t.giorniRimasti>0),this.rng()<.42&&this.eventi.push(this.generaEvento());for(let t of Ge){let e=this.storico[t.id];e.push(this.prezzoMedioCitta(t.id)),e.length>40&&e.shift()}return this.eventi}generaEvento(){let t=xe(oi,this.rng),e=[{titolo:`Retata a ${t.nome}`,testo:"Meno roba in giro, chi ce l'ha detta il prezzo.",quartiere:t.id,moltiplicatore:1.55,giorniRimasti:2,heat:20},{titolo:"Carico arrivato al Porto",testo:"Il mercato \xE8 pieno: i prezzi crollano ovunque.",moltiplicatore:.68,giorniRimasti:3},{titolo:"Festival al Quartiere Latino",testo:"Domanda di roba da festa alle stelle per tre notti.",quartiere:"latino",categoria:"empatogeno",moltiplicatore:1.9,giorniRimasti:3},{titolo:"Rave illegale in periferia",testo:"Psichedelici e dissociativi introvabili.",categoria:"psichedelico",moltiplicatore:1.7,giorniRimasti:2},{titolo:"Bonus in Distretto Argento",testo:"Trimestrale chiuso bene: la bianca vola.",quartiere:"argento",merci:["coca"],moltiplicatore:2,giorniRimasti:2},{titolo:"Guerra tra bande alle Torri",testo:"Nessuno vuole scendere in strada: volumi gi\xF9, prezzi su.",quartiere:"torri",moltiplicatore:1.4,giorniRimasti:3,pericolo:.3},{titolo:"Un lotto tagliato male ha fatto vittime",testo:"La gente ha paura di comprare: la domanda si ferma.",categoria:"oppioide",moltiplicatore:.55,giorniRimasti:4,heat:30},{titolo:"Sequestro in dogana",testo:"La roba che arriva via mare \xE8 dimezzata.",categoria:"stimolante",moltiplicatore:1.75,giorniRimasti:3},{titolo:"Depenalizzazione in discussione",testo:"Se ne parla in TV: sulla leggera cala l'attenzione, e cala il prezzo.",categoria:"cannabinoide",moltiplicatore:.75,giorniRimasti:4,heatDelta:-10}],i={...xe(e,this.rng)};return i.id=`ev_${this.giorno}_${Math.floor(this.rng()*9999)}`,i}serializza(){return{giorno:this.giorno,saturazione:this.saturazione,deriva:this.deriva,eventi:this.eventi}}static deserializza(t,e){let i=new o(e);return t&&(i.giorno=t.giorno??0,Object.assign(i.saturazione,t.saturazione??{}),Object.assign(i.deriva,t.deriva??{}),i.eventi=t.eventi??[]),i}};var Bo=o=>Math.round(180*Math.pow(o,1.55));function Uh(o){let t=1;for(;t<30&&o>=Bo(t);)o-=Bo(t),t++;return t}function yp(o){let t=1;for(;t<30&&o>=Bo(t);)o-=Bo(t),t++;return{livello:t,dentro:o,servono:Bo(t)}}var ko=[{id:"trattativa",ramo:"Commercio",nome:"Lingua sciolta",max:4,desc:"+6% sul prezzo spuntato in trattativa per grado."},{id:"fiuto",ramo:"Commercio",nome:"Fiuto per l'affare",max:3,desc:"Vedi sul radar dove la tua merce vale di pi\xF9. Il raggio cresce col grado."},{id:"scorte",ramo:"Commercio",nome:"Doppiofondo",max:4,desc:"+25 di capienza per grado."},{id:"fornitura",ramo:"Commercio",nome:"Cliente affezionato",max:3,desc:"-5% dal fornitore per grado, e scorte pi\xF9 profonde."},{id:"fondo",ramo:"Strada",nome:"Fiato",max:4,desc:"+15% stamina e corsa pi\xF9 lunga per grado."},{id:"scarti",ramo:"Strada",nome:"Gambe buone",max:3,desc:"Scatto pi\xF9 reattivo: semini le pattuglie pi\xF9 facilmente."},{id:"vicoli",ramo:"Strada",nome:"Conosco i vicoli",max:3,desc:"Il calo di heat quando sei fermo al riparo raddoppia al grado 3."},{id:"stomaco",ramo:"Strada",nome:"Stomaco",max:3,desc:"Reggi meglio le risse: +20% difesa per grado."},{id:"faccia",ramo:"Testa",nome:"Faccia pulita",max:4,desc:"-12% heat generato per transazione, per grado."},{id:"occhio",ramo:"Testa",nome:"Occhio per gli sbirri",max:3,desc:"I civetta si riconoscono: al grado 3 li vedi marchiati prima di parlarci."},{id:"contabile",ramo:"Testa",nome:"Contabile",max:3,desc:"Ripulisci pi\xF9 contante per giorno e paghi meno cauzione."},{id:"rete",ramo:"Testa",nome:"Rete di contatti",max:4,desc:"Pi\xF9 clienti fissi, che ti cercano da soli e non contrattano."}],zS=Object.fromEntries(ko.map(o=>[o.id,o])),HM=[{id:"d1",titolo:"Capitolo 1 \u2014 Il giro del palazzo",livelloMin:1,testo:"Hai 200 \u20AC, uno zaino e il numero di un tizio del Bar Bianco Nero. Nessuno ti conosce: fra un mese o sanno il tuo nome, o non lo sa pi\xF9 nessuno.",obiettivi:[{id:"d1_a",desc:"Compra merce da un fornitore",tipo:"acquisti",quantita:1},{id:"d1_b",desc:"Concludi 8 vendite",tipo:"vendite",quantita:8},{id:"d1_c",desc:"Metti da parte 1.500 \u20AC",tipo:"contanti",quantita:1500}],ricompensa:{xp:400,contanti:0,sblocca:"Fornitore Zia Mara alle Torri"}},{id:"d2",titolo:"Capitolo 2 \u2014 Fuori dal quartiere",livelloMin:3,testo:"Villa Rosa \xE8 satura. La domanda vera sta dove ci sono i locali \u2014 e dove c'\xE8 gi\xE0 chi lavora.",obiettivi:[{id:"d2_a",desc:"Vendi in 3 quartieri diversi",tipo:"quartieri",quantita:3},{id:"d2_b",desc:"Chiudi una giornata con heat sotto 15",tipo:"giornataPulita",quantita:1},{id:"d2_c",desc:"Fatturato totale 6.000 \u20AC",tipo:"fatturato",quantita:6e3}],ricompensa:{xp:900,sblocca:"Roba da festa (Tier 2)"}},{id:"d3",titolo:"Capitolo 3 \u2014 Le notti del Latino",livelloMin:5,testo:"Le pasticche si vendono da sole finch\xE9 la Narcotici non manda dentro qualcuno con la faccia giusta.",obiettivi:[{id:"d3_a",desc:"Vendi 40 unit\xE0 di roba da festa",tipo:"unitaTier",tier:2,quantita:40},{id:"d3_b",desc:"Riconosci e rifiuta un cliente civetta",tipo:"civettaSchivato",quantita:1},{id:"d3_c",desc:"Raggiungi 25.000 \u20AC di patrimonio",tipo:"patrimonio",quantita:25e3}],ricompensa:{xp:1800,sblocca:"Appartamento alle Torri acquistabile"}},{id:"d4",titolo:"Capitolo 4 \u2014 Il porto",livelloMin:8,testo:"Vasi non fa il dettaglio. Ti d\xE0 il prezzo che vuoi solo se dimostri di poter muovere volume \u2014 e se accetti quello che c'\xE8 dentro i container.",obiettivi:[{id:"d4_a",desc:"Compra 100 unit\xE0 in un solo acquisto",tipo:"acquistoGrosso",quantita:100},{id:"d4_b",desc:"Sopravvivi a 3 inseguimenti",tipo:"fughe",quantita:3},{id:"d4_c",desc:"Patrimonio 80.000 \u20AC",tipo:"patrimonio",quantita:8e4}],ricompensa:{xp:3200,sblocca:"Roba pesante (Tier 3)"}},{id:"d5",titolo:"Capitolo 5 \u2014 Quello che resta",livelloMin:12,testo:"La bianca paga il loft. L'eroina paga tutto il resto. Il conto, per\xF2, non lo paghi tu: lo paga il quartiere in cui vendi.",obiettivi:[{id:"d5_a",desc:"Fatturato totale 250.000 \u20AC",tipo:"fatturato",quantita:25e4},{id:"d5_b",desc:"Tieni 5 clienti fissi contemporaneamente",tipo:"clientiFissi",quantita:5},{id:"d5_c",desc:"Ripulisci 50.000 \u20AC di contante",tipo:"riciclato",quantita:5e4}],ricompensa:{xp:6e3,sblocca:"Loft Argento e mercato del ferro (Tier 4)"}},{id:"d6",titolo:"Capitolo 6 \u2014 Il ferro",livelloMin:16,testo:"Da qui in poi non sei pi\xF9 uno che vende. Sei uno che qualcuno vuole togliere di mezzo.",obiettivi:[{id:"d6_a",desc:"Concludi 10 scambi di armamenti",tipo:"venditeTier",tier:4,quantita:10},{id:"d6_b",desc:"Sopravvivi a una notte con heat sopra 80",tipo:"notteBollente",quantita:1},{id:"d6_c",desc:"Patrimonio 1.000.000 \u20AC",tipo:"patrimonio",quantita:1e6}],ricompensa:{xp:15e3,sblocca:'Finale \u2014 "Uscire puliti"'}}],VM=[{id:"c1",titolo:"Capitolo 1 \u2014 Il venerd\xEC",livelloMin:1,testo:"Hai un lavoro, un affitto e un venerd\xEC sera. Nessuno inizia pensando che sar\xE0 un problema.",obiettivi:[{id:"c1_a",desc:"Compra da uno spacciatore in strada",tipo:"acquistiCliente",quantita:1},{id:"c1_b",desc:"Passa un weekend senza scendere sotto 40 di salute",tipo:"weekendSano",quantita:1},{id:"c1_c",desc:"Presentati al lavoro 3 volte di fila",tipo:"turniFatti",quantita:3}],ricompensa:{xp:300,sblocca:"Contatti al Quartiere Latino"}},{id:"c2",titolo:"Capitolo 2 \u2014 La settimana lunga",livelloMin:3,testo:"La domenica \xE8 diventata mercoled\xEC. Il conto in banca lo sa prima di te.",obiettivi:[{id:"c2_a",desc:"Gestisci il craving senza consumare per 24 ore",tipo:"astinenzaRetta",quantita:1},{id:"c2_b",desc:"Tieni il lavoro per una settimana intera",tipo:"settimanaLavoro",quantita:1},{id:"c2_c",desc:"Non farti perquisire con roba addosso",tipo:"perquisizioneSchivata",quantita:2}],ricompensa:{xp:700,sblocca:"Gruppo di supporto \u2014 la strada della disintossicazione"}},{id:"c3",titolo:"Capitolo 3 \u2014 Il fondo o la porta",livelloMin:6,testo:"Da qui partono due strade, e il gioco non ti dice quale \xE8 quella giusta. Te lo dice il conto in banca, o il pronto soccorso.",obiettivi:[{id:"c3_a",desc:"Sopravvivi a un'overdose (tua o di qualcun altro)",tipo:"odSopravvissuta",quantita:1},{id:"c3_b",desc:"Scegli: 7 giorni puliti \u2014 oppure 100.000 \u20AC di debiti",tipo:"bivio",quantita:1}],ricompensa:{xp:2500,sblocca:`Finale \u2014 "Luned\xEC mattina" o "L'ultimo giro"`}}];function Oa(o){return o==="cliente"?VM:HM}var Oh="mydealer_save_v1",Fa=["mydealer_slot_1","mydealer_slot_2","mydealer_slot_3"],GM=60,Ui=class o{constructor(t="dealer",e=Date.now()%1e5){this.versione=1,this.ruolo=t,this.seed=e,this.nuovo=!0,this.contanti=t==="dealer"?200:1400,this.pulito=0,this.debito=0,this.xp=0,this.puntiAbilita=0,this.abilita={},this.inventario={},this.oggetti={},this.permanenti=new Set,this.heat=0,this.stelle=0,this.arresti=0,this.reputazione={villarosa:0,latino:0,argento:0,torri:0,porto:0},this.salute=100,this.stamina=100,this.craving=0,this.tolleranza={},this.sballo=[],this.lavoro={attivo:!0,turniFatti:0,turniSaltati:0,paga:90},this.minuti=480,this.giorno=1,this.capitolo=0,this.obiettivi={},this.completati=new Set,this.stat={vendite:0,acquisti:0,acquistiCliente:0,fatturato:0,spesa:0,unitaVendute:0,unitaPerTier:{1:0,2:0,3:0,4:0},venditePerTier:{1:0,2:0,3:0,4:0},quartieriVenduti:new Set,fughe:0,civettaSchivato:0,riciclato:0,clientiFissi:0,giornatePulite:0,turniFatti:0,odSopravvissute:0,perquisizioniSchivate:0,morti:0,clientiPersi:0},this.log=[]}get livello(){return Uh(this.xp)}get progressoLivello(){return yp(this.xp)}grado(t){return this.abilita[t]??0}get capienza(){let t=GM+this.grado("scorte")*25;return this.permanenti.has("zaino")&&(t+=40),t+=this.vanoVeicolo??0,t}get ingombro(){let t=0;for(let[e,i]of Object.entries(this.inventario))t+=(Ht[e]?.ingombro??1)*i;return t}get patrimonio(){return this.contanti+this.pulito-this.debito}get tierMax(){let t=this.livello,e=1;for(let i of Pi)i&&i.livello<=t&&(e=i.id);return e}get bonusPrezzo(){let t=1+this.grado("trattativa")*.06;return this.permanenti.has("bilancia")&&(t+=.08),t}get scontoFornitore(){return 1-this.grado("fornitura")*.05}get difesa(){let t=.1+this.grado("stomaco")*.2;for(let e of["giubbotto","fucile","pistola","lama"])(this.inventario[e]??0)>0&&(t=Math.max(t,Ht[e].difesa));return at(t,0,.95)}get minaccia(){let t=0;for(let e of["lama","pistola","fucile"])(this.inventario[e]??0)>0&&(t=Math.max(t,Ht[e].minaccia));return t}get carico(){let t=0;for(let[e,i]of Object.entries(this.inventario)){let n=Ht[e];n&&(t+=n.calore*i*.1)}return t}get capitoloCorrente(){return Oa(this.ruolo)[this.capitolo]??null}aggiungiXp(t){let e=this.livello;this.xp+=Math.round(t);let i=this.livello;return i>e?(this.puntiAbilita+=i-e,i):null}puoiPortare(t,e){let i=Ht[t];return this.ingombro+i.ingombro*e<=this.capienza+.001}aggiungiMerce(t,e){this.inventario[t]=(this.inventario[t]??0)+e}togliMerce(t,e){let i=this.inventario[t]??0,n=Math.min(i,e);return i-n<=0?delete this.inventario[t]:this.inventario[t]=i-n,n}quanti(t){return this.inventario[t]??0}aggiungiHeat(t){let e=1-this.grado("faccia")*.12;this.heat=at(this.heat+t*Math.max(.2,e),0,100)}scriviLog(t,e="info"){this.log.unshift({testo:t,tipo:e,giorno:this.giorno,minuti:this.minuti}),this.log.length>60&&this.log.pop()}segna(t,e=1,i={}){let n=this.capitoloCorrente;if(!n)return null;let s=!1;for(let r of n.obiettivi){if(r.tipo!==t||r.tier!=null&&i.tier!==r.tier||this.completati.has(r.id))continue;let a=Math.max(this.obiettivi[r.id]??0,0),c=["contanti","patrimonio","fatturato","riciclato","clientiFissi"].includes(t)?e:a+e;this.obiettivi[r.id]=c,c>=r.quantita&&this.completati.add(r.id)}return n.obiettivi.every(r=>this.completati.has(r.id))&&(s=!0),s?n:null}avanzaCapitolo(){let t=this.capitoloCorrente;return t?(t.ricompensa?.xp&&this.aggiungiXp(t.ricompensa.xp),t.ricompensa?.contanti&&(this.contanti+=t.ricompensa.contanti),this.capitolo++,t):null}aggiornaSoglie(){this.segna("contanti",this.contanti),this.segna("patrimonio",this.patrimonio),this.segna("fatturato",this.stat.fatturato),this.segna("riciclato",this.stat.riciclato),this.segna("quartieri",this.stat.quartieriVenduti.size),this.segna("vendite",0)}serializza(){return{versione:this.versione,ruolo:this.ruolo,seed:this.seed,contanti:this.contanti,pulito:this.pulito,debito:this.debito,xp:this.xp,puntiAbilita:this.puntiAbilita,abilita:this.abilita,inventario:this.inventario,oggetti:this.oggetti,permanenti:[...this.permanenti],heat:this.heat,arresti:this.arresti,reputazione:this.reputazione,salute:this.salute,stamina:this.stamina,craving:this.craving,tolleranza:this.tolleranza,lavoro:this.lavoro,minuti:this.minuti,giorno:this.giorno,capitolo:this.capitolo,obiettivi:this.obiettivi,completati:[...this.completati],stat:{...this.stat,quartieriVenduti:[...this.stat.quartieriVenduti]},log:this.log.slice(0,20),quando:Date.now()}}static deserializza(t){let e=new o(t.ruolo,t.seed);return Object.assign(e,{contanti:t.contanti,pulito:t.pulito??0,debito:t.debito??0,xp:t.xp,puntiAbilita:t.puntiAbilita,abilita:t.abilita??{},inventario:t.inventario??{},oggetti:t.oggetti??{},heat:t.heat??0,arresti:t.arresti??0,salute:t.salute??100,stamina:t.stamina??100,craving:t.craving??0,tolleranza:t.tolleranza??{},lavoro:t.lavoro??e.lavoro,minuti:t.minuti??480,giorno:t.giorno??1,capitolo:t.capitolo??0,obiettivi:t.obiettivi??{},log:t.log??[]}),e.nuovo=!1,e.permanenti=new Set(t.permanenti??[]),e.completati=new Set(t.completati??[]),e.reputazione=t.reputazione??e.reputazione,t.stat&&(e.stat={...e.stat,...t.stat,quartieriVenduti:new Set(t.stat.quartieriVenduti??[])}),e}salva(){try{return localStorage.setItem(Oh,JSON.stringify(this.serializza())),!0}catch(t){return console.warn("salvataggio fallito",t),!1}}static carica(){try{let t=localStorage.getItem(Oh);return t?o.deserializza(JSON.parse(t)):null}catch(t){return console.warn("caricamento fallito",t),null}}static esisteSalvataggio(){return!!localStorage.getItem(Oh)}salvaSu(t){try{return localStorage.setItem(Fa[t],JSON.stringify(this.serializza())),!0}catch(e){return console.warn("salvataggio fallito",e),!1}}static caricaDa(t){try{let e=localStorage.getItem(Fa[t]);return e?o.deserializza(JSON.parse(e)):null}catch(e){return console.warn("caricamento fallito",e),null}}static eliminaCasella(t){localStorage.removeItem(Fa[t])}static elencoCaselle(){return Fa.map((t,e)=>{try{let i=localStorage.getItem(t);if(!i)return{i:e,vuota:!0};let n=JSON.parse(i);return{i:e,vuota:!1,ruolo:n.ruolo==="cliente"?"Cliente":"Spacciatore",giorno:n.giorno??1,livello:Uh(n.xp??0),contanti:n.contanti??0,quando:n.quando??null}}catch{return{i:e,vuota:!1,rotta:!0}}})}};var WM=[{a:"oppioide",b:"dissociativo",mult:2.2,testo:"Oppioidi e dissociativi insieme spengono il respiro."},{a:"oppioide",b:"oppioide",mult:2.6,testo:"Due oppioidi si sommano: \xE8 cos\xEC che si muore per sbaglio."},{a:"stimolante",b:"stimolante",mult:2,testo:"Doppio stimolante: il cuore non ha una seconda marcia."},{a:"stimolante",b:"oppioide",mult:1.9,testo:"Su e gi\xF9 insieme: il crollo arriva quando lo stimolante finisce per primo."}],Ba=class{constructor(t){this.stato=t,this.onEvento=null,this.inOverdose=!1,this.tempoOd=0,this.ultimoAvviso=0}consuma(t,e=1){let i=this.stato,n=Ht[t];if(!n||!n.effetti)return{ok:!1,testo:"Non \xE8 roba da usare."};if(i.quanti(t)<e)return{ok:!1,testo:"Non ne hai abbastanza."};i.togliMerce(t,e);let s=i.tolleranza[t]??0,r=e*(1-s*.75);i.sballo.push({merceId:t,categoria:n.categoria,rimasto:n.durata*(.7+.3*e),intensita:r,iniziale:r}),i.tolleranza[t]=at(s+n.tolleranza*.16*e,0,.92),i.craving=at(i.craving-45*r,0,100),i.salute=at(i.salute-n.letalita*3.2*e,0,100),i.dipendenzaAttiva=at((i.dipendenzaAttiva??0)+n.dipendenza*.08*e,0,1);let a=this._rischioOverdose(),l=`Hai usato ${e} ${n.unita} di ${n.nome}.`,c="info",h=this._mixPericoloso();return h&&(l+=" "+h.testo,c="attenzione"),a>.75&&!this.inOverdose?(this._avviaOverdose(),l="Qualcosa non va. Le mani non rispondono.",c="male"):a>.45&&(l+=" Il cuore va troppo forte.",c="attenzione"),i.scriviLog(l,c),this.onEvento?.(l,c),{ok:!0,testo:l,tipo:c,rischio:a}}_rischioOverdose(){let t=this.stato,e=0;for(let s of t.sballo){let r=Ht[s.merceId];e+=r.letalita*s.intensita*(1-(t.tolleranza[s.merceId]??0)*.35)}let i=this._mixPericoloso();i&&(e*=i.mult);let n=2.4*(.45+t.salute/100*.55);return at(e/n,0,1.5)}_mixPericoloso(){let t=this.stato.sballo.filter(e=>e.intensita>.15);for(let e of WM)if(e.a===e.b){if(t.filter(i=>i.categoria===e.a).length>=2)return e}else if(t.some(i=>i.categoria===e.a)&&t.some(i=>i.categoria===e.b))return e;return null}_avviaOverdose(){this.inOverdose=!0,this.tempoOd=0,this.stato.scriviLog("OVERDOSE. Hai poco tempo.","male"),this.onEvento?.("OVERDOSE \u2014 usa il naloxone o raggiungi il pronto soccorso.","male")}usaNaloxone(){let t=this.stato;return(t.oggetti.naloxone??0)<=0?{ok:!1,testo:"Non hai naloxone."}:(t.oggetti.naloxone--,t.sballo.filter(i=>i.categoria==="oppioide").length?(t.sballo=t.sballo.filter(i=>i.categoria!=="oppioide"),this.inOverdose&&this._rischioOverdose()<.7?(this.inOverdose=!1,t.salute=at(t.salute+8,0,100),t.stat.odSopravvissute++,t.segna("odSopravvissuta",1),t.craving=100,{ok:!0,testo:"Torni a respirare. Il craving \xE8 insopportabile: \xE8 l'effetto del naloxone, passer\xE0."}):{ok:!0,testo:"Naloxone somministrato."}):{ok:!1,testo:"Il naloxone agisce solo sugli oppioidi. Qui non serve: chiama i soccorsi."})}soccorso(){let t=this.stato;this.inOverdose=!1,t.sballo=[],t.salute=at(t.salute+35,0,100),t.contanti=Math.max(0,t.contanti-300),t.minuti+=360,t.stat.odSopravvissute++,t.segna("odSopravvissuta",1),t.scriviLog("Pronto soccorso. Ti hanno rimesso in piedi, ti sono costati 300 \u20AC.","attenzione")}aggiorna(t,e){let i=this.stato;for(let r=i.sballo.length-1;r>=0;r--){let a=i.sballo[r];if(a.rimasto-=e,a.intensita=a.iniziale*at(a.rimasto/(a.rimasto+25),0,1),a.rimasto<=0){i.sballo.splice(r,1);let l=Ht[a.merceId];i.craving=at(i.craving+18*l.dipendenza*4*a.iniziale,0,100),i.stamina=at(i.stamina-25*(l.effetti?.energia>0?1:.4),0,100),this.onEvento?.("Ti sta calando.","info")}}let n=i.dipendenzaAttiva??0;i.craving=at(i.craving+e*.055*(.3+n*3.5),0,100);for(let r of Object.keys(i.tolleranza))i.tolleranza[r]=at(i.tolleranza[r]-e*16e-5,0,1);let s=i.craving>70?(i.craving-70)/30:0;i.salute=at(i.salute+e*(.012-s*.05),0,100),this.inOverdose&&(this.tempoOd+=t,i.salute=at(i.salute-t*4.2,0,100),i.salute<=0&&(i.stat.morti++,i.scriviLog("Non ce l'hai fatta.","male"),this.onEvento?.("MORTE","fine"),this.inOverdose=!1),this._rischioOverdose()<.55&&(this.inOverdose=!1)),this.ultimoAvviso-=t,this.ultimoAvviso<=0&&i.craving>85&&(this.ultimoAvviso=30,this.onEvento?.("Non riesci a pensare ad altro.","attenzione"))}get distorsione(){let t=0;for(let e of this.stato.sballo){let i=Ht[e.merceId];t+=(i.effetti?.percezione??0)*e.intensita*.4}return this.stato.craving>75&&(t+=(this.stato.craving-75)/25*.25),at(t,0,1)}get euforia(){let t=0;for(let e of this.stato.sballo)t+=(Ht[e.merceId].effetti?.euforia??0)*e.intensita*.5;return at(t,0,1)}vaiAlLavoro(){let t=this.stato;return t.lavoro.attivo?t.craving>80||this.euforia>.5?(t.lavoro.turniSaltati++,t.scriviLog("Ti sei presentato in quelle condizioni. Ti hanno mandato a casa.","male"),t.lavoro.turniSaltati>=3?(t.lavoro.attivo=!1,t.scriviLog("Licenziato.","male"),{ok:!1,testo:"Licenziato. Adesso i soldi devi trovarli altrove."}):{ok:!1,testo:"Ti hanno rimandato a casa. Ancora due e sei fuori."}):(t.lavoro.turniFatti++,t.stat.turniFatti++,t.segna("turniFatti",1),t.contanti+=t.lavoro.paga,t.minuti+=480,t.stamina=at(t.stamina-30,0,100),t.aggiungiXp(60),t.scriviLog(`Turno fatto: +${t.lavoro.paga} \u20AC.`,"ok"),{ok:!0,testo:`Otto ore. ${t.lavoro.paga} \u20AC netti.`}):{ok:!1,testo:"Ti hanno licenziato."}}};var Dn={ESPANSIONE:"espansione",ESTETICA:"estetica",COMFORT:"comfort",SUPPORTO:"supporto"},kh=[{id:"exp_provincia",tipo:Dn.ESPANSIONE,prezzo:7.99,nome:"Espansione \u2014 La Provincia",desc:'Tre nuove citt\xE0 collegate da statale, il mercato interregionale, i trasporti e la campagna "Il corriere". ~6 ore di gioco nuove.',effettoGioco:null},{id:"exp_cliente_plus",tipo:Dn.ESPANSIONE,prezzo:5.99,nome:"Espansione \u2014 Storie di Porto Nero",desc:"Cinque campagne Cliente aggiuntive con protagonisti e finali diversi, scritte come racconti a s\xE9.",effettoGioco:null},{id:"est_pack_anni90",tipo:Dn.ESTETICA,prezzo:3.99,nome:"Pacchetto estetico \u2014 Anni Novanta",desc:"Outfit, palette CRT, radio con 12 tracce nuove, interfaccia a pixel. Puramente estetico.",effettoGioco:null},{id:"est_veicoli",tipo:Dn.ESTETICA,prezzo:2.99,nome:"Pacchetto estetico \u2014 Ferri vecchi",desc:"Sei skin per scooter e utilitarie. Stessa velocit\xE0, stessa tenuta: cambia solo come ti vedono.",effettoGioco:null},{id:"com_slot",tipo:Dn.COMFORT,prezzo:1.99,nome:"Slot di salvataggio extra",desc:"Da 3 a 12 partite in parallelo. Utile per provare build diverse.",effettoGioco:null},{id:"com_foto",tipo:Dn.COMFORT,prezzo:2.99,nome:"Modalit\xE0 foto e replay",desc:"Camera libera, filtri, esportazione clip. Non tocca il gioco.",effettoGioco:null},{id:"sup_caffe",tipo:Dn.SUPPORTO,prezzo:4.99,nome:"Sostieni lo sviluppo",desc:"Nome nei credits e accesso al canale delle build di prova. Nessun vantaggio in gioco: \xE8 il punto.",effettoGioco:null}],Mp=["denaro di gioco","XP","punti abilit\xE0","sblocco tier merce","sblocco capitoli","riduzione heat","capienza inventario","immunit\xE0 arresto","casse a sorte / loot box","energia a tempo","pubblicit\xE0 forzata","abbonamento per progredire"];function qM(o=kh){let t=[];for(let e of o)e.effettoGioco!=null&&t.push(`${e.id}: ha un effetto sul gioco (pay-to-win)`),Object.values(Dn).includes(e.tipo)||t.push(`${e.id}: tipo non ammesso`),e.prezzo>9.99&&t.push(`${e.id}: prezzo oltre la soglia di decenza (9,99)`),e.consumabile&&t.push(`${e.id}: i consumabili a pagamento sono vietati`);return t}var Fh=class{async elenca(){throw new Error("non implementato")}async acquista(t){throw new Error("non implementato")}async ripristina(){throw new Error("non implementato")}},Bh=class extends Fh{constructor(t="mydealer_entitlements"){super(),this.chiave=t}_leggi(){try{return JSON.parse(localStorage.getItem(this.chiave)||"[]")}catch{return[]}}_scrivi(t){localStorage.setItem(this.chiave,JSON.stringify(t))}async elenca(){return this._leggi()}async acquista(t){let e=this._leggi();return e.includes(t)||(e.push(t),this._scrivi(e)),{ok:!0,id:t,simulato:!0}}async ripristina(){return this._leggi()}},ka=class{constructor(t=new Bh){this.provider=t,this.diritti=new Set,this.attivo=!1}async inizializza(){let t=qM();t.length&&console.warn("[negozio] catalogo non conforme:",t);for(let e of await this.provider.elenca())this.diritti.add(e)}ha(t){return this.diritti.has(t)}async acquista(t){let e=await this.provider.acquista(t);return e.ok&&this.diritti.add(t),e}};var Sp="mydealer_ia";function Ho(){let o={};try{o=JSON.parse(localStorage.getItem(Sp)??"{}")}catch{}return{accesa:!0,via:"intermediario",indirizzo:"./api/ia",chiave:"",...o}}function Va(o){localStorage.setItem(Sp,JSON.stringify({...Ho(),...o})),Hh=!1,Vh=0}var bp=["meta-llama/llama-3.3-70b-instruct","google/gemma-4-31b-it:free","openai/gpt-oss-20b:free","openrouter/free"],Hh=!1,Vh=0;function Gh(){let o=Ho();return!o.accesa||Hh?!1:o.via==="intermediario"?!!o.indirizzo:!!o.chiave}async function Ep({sistema:o,utente:t,schema:e=[],attesaMax:i=6e3}){if(!Gh())return null;let n=Ho(),s={temperature:.9,max_tokens:200,response_format:{type:"json_object"},messages:[{role:"system",content:o},{role:"user",content:t}]},r=AbortSignal.timeout(i);try{let a;if(n.via==="intermediario"?a=await fetch(n.indirizzo,{method:"POST",signal:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}):a=await fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",signal:r,headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.chiave}`},body:JSON.stringify({...s,models:bp,model:bp[0]})}),!a.ok)return Ha();let l=await a.json(),c=l.choices?.[0]?.message?.content??l.testo??"",h=$M(c);if(!h)return Ha();for(let u of e)if(h[u]===void 0)return Ha();return Vh=0,h}catch{return Ha()}}function Ha(){return++Vh>=3&&(Hh=!0),null}function $M(o){if(!o)return null;let t=String(o).replace(/```json\s*|```/g,""),e=t.indexOf("{"),i=t.lastIndexOf("}");if(e<0||i<=e)return null;try{return JSON.parse(t.slice(e,i+1))}catch{return null}}function Tp(o,t){return t==null?!0:(String(o).match(/\d+/g)??[]).includes(String(Math.round(t)))}function Ap(o){if(!o||typeof o!="string")return!1;let t=o.trim();return!(t.length<2||t.length>220||/^(certamente|ecco|come assistente|sono un modello|mi dispiace, ma)/i.test(t)||/\b(as an ai|language model|i cannot)\b/i.test(t))}var XM=[{id:"saluto",parole:["ciao","ehi","ehy","hey","buonasera","buongiorno","come va","tutto ok"]},{id:"disponibilita",parole:["hai","ci sono","c e","c'e","disponibile","disponibilita","roba","trovi","procuri","serve","servirebbe","vorrei","cerco"]},{id:"prezzo",parole:["quanto","prezzo","costa","costo","euro","quanti soldi","a quanto","sconto","meno"]},{id:"luogo",parole:["dove","posto","ci vediamo","vediamoci","vengo","passo","zona","indirizzo"]},{id:"quando",parole:["quando","che ora","adesso","subito","stasera","domani","pi\xF9 tardi","piu tardi"]},{id:"conferma",parole:["ok","okay","va bene","ci sto","affare","si","s\xEC","certo","perfetto","fatto","confermo","arrivo","ci vediamo li"]},{id:"rifiuto",parole:["no","lascia","niente","non posso","annulla","un altra volta","un'altra volta"]},{id:"insulto",parole:["vaffa","stronzo","idiota","coglione","merda"]}],Wh=new Map;function YM(o){if(!Wh.has(o)){let t=o.trim().replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/\s+/g,"\\s+");Wh.set(o,new RegExp(`(^|[^\\p{L}])${t}($|[^\\p{L}])`,"u"))}return Wh.get(o)}function ZM(o){let t=o.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),e=[];for(let n of XM)n.parole.some(s=>YM(s).test(t))&&e.push(n.id);let i=t.match(/\b(\d{1,3})\b/);return{intenti:e,quantita:i?parseInt(i[1],10):null}}function KM(o){let t=o.toLowerCase();for(let e of Ge)if(t.includes(e.nome.toLowerCase()))return e.id;return null}var Rp=0,Ga=class o{constructor(t,e){this.stato=t,this.mercato=e,t.contatti??=[],t.chat??={},t.appuntamenti??=[],t.nonLetti??=0,this.onNotifica=null,this.onChiamata=null,this.prossimoContattoSpontaneo=40+Math.random()*60,this.chiamataInCorso=null}get contatti(){return this.stato.contatti}contatto(t){return this.stato.contatti.find(e=>e.id===t)??null}chat(t){return this.stato.chat[t]??=[]}aggiungiContatto(t,e){if(this.stato.contatti.some(n=>n.nome===t.nome))return null;let i={id:`c${++Rp}_${Date.now()%1e5}`,nome:t.nome,numero:o.numeroCasuale(),merce:t.merce,fiducia:40,quartiere:e,giorno:this.stato.giorno};return this.stato.contatti.push(i),this.scriviDaLui(i.id,xe(["Ehi, sono io di prima. Segnati il numero.","Ciao. Se ti serve muovere roba, io ci sono.","Grazie per prima. Scrivimi quando hai qualcosa di buono."])),i}static numeroCasuale(){let t=xe(["320","328","333","338","340","347","349","366","389","392"]),e=()=>Math.floor(Math.random()*10);return`+39 ${t} ${e()}${e()}${e()} ${e()}${e()}${e()}${e()}`}aggiungiManuale(t,e,i){let n=(t||"").trim().slice(0,28)||ya();if(this.stato.contatti.some(d=>d.nome.toLowerCase()===n.toLowerCase()))return{ok:!1,testo:"Hai gi\xE0 un contatto con questo nome."};if(this.stato.contatti.length>=24)return{ok:!1,testo:"La rubrica \xE8 piena. Fai pulizia."};let s=i??xe(oi).id,r=Ge.filter(d=>Pi[d.tier].livello<=this.stato.livello&&d.categoria!=="arma"),a=r.map(d=>(d.domanda[s]??1)**2),l=a.reduce((d,f)=>d+f,0),c=Math.random()*l,h=r[0];for(let d=0;d<r.length;d++)if(c-=a[d],c<=0){h=r[d];break}let u={id:`c${++Rp}_${Date.now()%1e5}`,nome:n,numero:(e||"").trim()||o.numeroCasuale(),merce:h.id,fiducia:18,quartiere:s,giorno:this.stato.giorno,manuale:!0};return this.stato.contatti.push(u),{ok:!0,contatto:u,testo:`${u.nome} salvato in rubrica.`}}rinomina(t,e){let i=this.contatto(t);if(!i)return!1;let n=(e||"").trim().slice(0,28);return n?(i.nome=n,!0):!1}elimina(t){this._eliminaContatto(t)}scriviDaLui(t,e){this.chat(t).push({da:"lui",testo:e,giorno:this.stato.giorno,minuti:this.stato.minuti}),this.stato.nonLetti++;let i=this.contatto(t);i&&this.onNotifica?.(i,e)}scriviIo(t,e){this.chat(t).push({da:"io",testo:e,giorno:this.stato.giorno,minuti:this.stato.minuti})}rispondi(t,e,i,n=null){let s=this.contatto(t);if(!s)return{risposta:"Numero inesistente."};this.scriviIo(t,e);let r=ZM(e),a=n?.intenti?.length?n.intenti:r.intenti,l=n?.quantita??r.quantita;this._daIa=n?.testo??null;let c=KM(e),h=Ht[c??s.merce],u=this.stato;if(a.includes("insulto")){s.fiducia=at(s.fiducia-40,0,100);let p=this._battuta(s.fiducia<=0?"Non scrivermi pi\xF9.":"Ma che problemi hai? Stai calmo.");return this.scriviDaLui(t,p),s.fiducia<=0&&this._eliminaContatto(t),{risposta:p}}if(a.includes("rifiuto")){this._annullaAppuntamento(t);let p=this._battuta(xe(["Va bene, un'altra volta.","Ok, ci sentiamo.","Come vuoi."]));return this.scriviDaLui(t,p),{risposta:p}}let d=["prezzo","luogo","quando","disponibilita"].some(p=>a.includes(p))||e.includes("?");if(a.includes("conferma")&&!d&&s.trattativa){let p=this._creaAppuntamento(s),v=ne[p.quartiere],g=this._battuta(`Perfetto. ${p.quantita} ${h.unita} a ${p.prezzo} l'uno, ${p.quantita*p.prezzo} in tutto. Ci vediamo a ${v.nome}, ti aspetto l\xEC. Non tardare.`,p.quantita*p.prezzo);return this.scriviDaLui(t,g),s.trattativa=null,{risposta:g,appuntamento:p}}if(a.includes("prezzo")){let p=this._prezzoPerContatto(s,h,i);s.trattativa={merce:h.id,quantita:l??s.trattativa?.quantita??4,prezzo:p};let v=/sconto|meno/.test(e.toLowerCase()),g=v?Math.round(p*.92):p;v&&(s.trattativa.prezzo=g);let m=this._battuta(v?`Ti faccio ${g} e non se ne parla pi\xF9. Scrivi "ok" e ci vediamo.`:`${p} ${h.unita==="g"?"al grammo":"a pezzo"}. Se ti va scrivi "ok".`,g);return this.scriviDaLui(t,m),{risposta:m}}if(a.includes("disponibilita")||c||l){let p=l??2+Math.floor(Math.random()*6),v=this._prezzoPerContatto(s,h,i);s.trattativa={merce:h.id,quantita:p,prezzo:v};let g=u.quanti(h.id),m=l??null,_=this._battuta(g>=p?`S\xEC, mi servirebbero ${p} ${h.unita} di ${h.nome}. Quanto mi fai?`:`${h.nome}? Io ne prenderei ${p} ${h.unita}. Dimmi tu quando ce l'hai.`,m);return this.scriviDaLui(t,_),{risposta:_}}if(a.includes("luogo")||a.includes("quando")){let p=ne[s.quartiere],v=this._battuta(`Sto dalle parti di ${p.nome}. Quando arrivi mi trovi, ma non farmi aspettare in strada.`);return this.scriviDaLui(t,v),{risposta:v}}if(a.includes("saluto")){let p=this._battuta(s.fiducia>60?xe(["Ehi! Dimmi tutto.","Ciao, che si dice?","Oh, finalmente. Serve qualcosa?"]):xe(["Ciao.","Dimmi.","S\xEC?"]));return this.scriviDaLui(t,p),{risposta:p}}let f=this._battuta(xe(["Non ho capito. Dimmi cosa ti serve e quanto.","Scrivi chiaro: cosa, quanto, dove.","Boh. Fai una domanda secca."]));return this.scriviDaLui(t,f),{risposta:f,nonCapito:!this._daIa}}_battuta(t,e=null){let i=this._daIa;return this._daIa=null,!i||!Ap(i)||!Tp(i,e)?t:i}async rispondiConIa(t,e,i){let n=this.contatto(t);if(!n||!Gh())return this.rispondi(t,e,i);let s=Ht[n.merce],r=this._prezzoPerContatto(n,s,i),a=ne[n.quartiere],l=this.chat(t).slice(-6).map(f=>`${f.mio?"SPACCIATORE":"TU"}: ${f.testo}`).join(`
`),c=await Ep({schema:["intento","testo"],sistema:[`Sei ${n.nome}, un cliente italiano che scrive su WhatsApp allo spacciatore da cui compra.`,`Vivi a ${a?.nome??"Porto Nero"}. Compri ${s.nome}. Ti fidi di lui ${n.fiducia}/100.`,"Scrivi come si scrive davvero in chat: minuscolo, poca punteggiatura, niente emoji.","Da 4 a 18 parole: una frase intera, non due parole secche.","Hai una vita: puoi avere fretta, essere al lavoro, lamentarti della roba di","luned\xEC scorso, tirare sul prezzo, nominare un cugino che te la fa a meno.","NON sei un assistente: non offri aiuto, non spieghi, non ti scusi, non fai domande di servizio.",`Se parli di prezzo devi dire esattamente ${r} euro. Non inventarne altri.`,"","Rispondi SOLO con un oggetto JSON, senza commenti:",'{"intento": "<cosa ha inteso lo spacciatore: saluto|disponibilita|prezzo|luogo|quando|conferma|rifiuto|insulto|altro>",',' "quantita": <numero o null>, "testo": "<il tuo messaggio>"}'].join(`
`),utente:`Conversazione finora:
${l}

Ultimo messaggio dello spacciatore: \xAB${e}\xBB

Rispondi.`});if(!c)return this.rispondi(t,e,i);let u=["saluto","disponibilita","prezzo","luogo","quando","conferma","rifiuto","insulto"].includes(c.intento)?[c.intento]:[],d=Number.isFinite(+c.quantita)&&+c.quantita>0?Math.min(99,Math.round(+c.quantita)):null;return this.rispondi(t,e,i,{intenti:u,quantita:d,testo:c.testo})}_prezzoPerContatto(t,e,i){let n=this.mercato.prezzo(e.id,t.quartiere??i),s=1.05+t.fiducia/100*.28;return Math.max(1,Math.round(n*s*this.stato.bonusPrezzo))}_creaAppuntamento(t){let e=t.trattativa,i=ne[t.quartiere],n={contattoId:t.id,nome:t.nome,merce:e.merce,quantita:e.quantita,prezzo:e.prezzo,quartiere:t.quartiere,scadenzaMinuti:this.stato.giorno*1440+this.stato.minuti+90,x:null,z:null};return this.stato.appuntamenti.push(n),n}_annullaAppuntamento(t){this.stato.appuntamenti=this.stato.appuntamenti.filter(e=>e.contattoId!==t)}_eliminaContatto(t){this.stato.contatti=this.stato.contatti.filter(e=>e.id!==t),delete this.stato.chat[t],this._annullaAppuntamento(t)}chiudiAppuntamento(t,e){let i=this.contatto(t.contattoId);this.stato.appuntamenti=this.stato.appuntamenti.filter(n=>n!==t),i&&(e?(i.fiducia=at(i.fiducia+12,0,100),this.scriviDaLui(t.contattoId,xe(["Tutto a posto. Alla prossima.","Grazie, sei una persona seria.","Perfetto. Ti scrivo io."]))):(i.fiducia=at(i.fiducia-25,0,100),this.scriviDaLui(t.contattoId,xe(["Ho aspettato mezz'ora. Grazie eh.","Non sei venuto. La prossima volta chiamo un altro.","Lascia stare, ho risolto."])),i.fiducia<=0&&this._eliminaContatto(t.contattoId)))}aggiorna(t,e){let i=this.stato,n=i.giorno*1440+i.minuti;for(let c of[...i.appuntamenti])n>c.scadenzaMinuti&&this.chiudiAppuntamento(c,!1);if(!this.contatti.length||(this.prossimoContattoSpontaneo-=t,this.prossimoContattoSpontaneo>0))return;this.prossimoContattoSpontaneo=90+Math.random()*180;let s=xe(this.contatti);if(i.appuntamenti.some(c=>c.contattoId===s.id))return;let r=Ht[s.merce],a=2+Math.floor(Math.random()*7),l=this._prezzoPerContatto(s,r,e);s.trattativa={merce:s.merce,quantita:a,prezzo:l},this.scriviDaLui(s.id,xe([`Ehi, ci sono ${a} ${r.unita} di ${r.nome}? Pago ${l} l'uno.`,`Mi servirebbe ${r.nome}, ${a} ${r.unita}. Ci sei?`,`Domanda: hai ${r.nome}? Ne prenderei ${a}.`]))}bruciaSim(){let t=this.stato.contatti.length;return this.stato.contatti=[],this.stato.chat={},this.stato.appuntamenti=[],this.stato.nonLetti=0,this.stato.heat=Math.max(0,this.stato.heat-30),t}};var ln={ACCETTA:"accetta",CONTRATTA:"contratta",RIFIUTA:"rifiuta",OFFESO:"offeso"},Wa=class{constructor(t,e,i,n){this.npc=t,this.mercato=e,this.quartiere=i,this.stato=n,this.merce=Ht[t.merce],this.quantita=Math.min(t.quantita,n.quanti(t.merce)),this.prezzoMercato=e.prezzo(t.merce,i),this.umore=1,this.tentativi=0,this.maxTentativi=t.tipo==="fisso"?4:3,this.soglia=t.sogliaMax*n.bonusPrezzo,this.prezzoSuggerito=this.prezzoMercato*at(this.soglia*.88,.5,3)}get haRoba(){return this.quantita>0}puoPagare(t){return t*this.quantita<=this.npc.budget}valuta(t){this.tentativi++;let e=t/this.prezzoMercato,i=this.soglia*(.82+this.umore*.18);if(!this.puoPagare(t))return this.umore=at(this.umore-.2,0,1),{esito:ln.CONTRATTA,battuta:`Non ce li ho tutti. Ho ${Math.floor(this.npc.budget)} \u20AC in tasca, non uno di pi\xF9.`,massimoPagabile:Math.floor(this.npc.budget/this.quantita)};if(e<=i){let r=e<i*.65;return{esito:ln.ACCETTA,battuta:r?"Affare fatto. \u2014 E ti guarda come se avesse appena rubato qualcosa.":"Va bene, ci sto.",svenduto:r}}let n=e/i;if(this.umore=at(this.umore-(n-1)*1.4-.12,0,1),n>1.85||this.umore<=0)return{esito:ln.OFFESO,battuta:this.npc.tipo==="fisso"?"Da te non me lo aspettavo. Mi trovo un altro.":"Ma per chi mi hai preso? Lascia stare."};if(this.tentativi>=this.maxTentativi)return{esito:ln.RIFIUTA,battuta:"Basta, ho perso troppo tempo. Ciao."};let s=Math.max(1,Math.round(this.prezzoMercato*i*(.78+Math.random()*.14)));return{esito:ln.CONTRATTA,battuta:n>1.4?`Sei fuori mercato. Al massimo ${s} ${this.merce.unita==="g"?"al grammo":"a pezzo"}.`:`Un po' caro. Facciamo ${s} e non se ne parla pi\xF9.`,controproposta:s}}concludi(t,e,i,n){let s=this.stato,r=Math.round(t*this.quantita);s.togliMerce(this.merce.id,this.quantita),s.contanti+=r,this.mercato.registraVendita(this.merce.id,this.quartiere,this.quantita);let a=e.testimoni(n.posizione,13),l=s.minuti<360||s.minuti>1260,c=i.alRiparo(n.posizione.x,n.posizione.z),h=this.merce.calore*(.6+this.quantita*.06);h*=1+a*.16,l&&(h*=.7),c&&(h*=.55),n.inChinato&&(h*=.8),s.aggiungiHeat(h);let u=t/this.prezzoMercato,d=1.2;u<.85&&(d+=1),this.merce.id==="fenta"&&(d-=6),this.merce.letalita>.5&&(d-=1.2),s.reputazione[this.quartiere]=at((s.reputazione[this.quartiere]??0)+d,-100,100);let f=at(u,.3,2.5);return s.aggiungiXp(12*this.quantita*f*this.merce.tier),s.stat.vendite++,s.stat.fatturato+=r,s.stat.unitaVendute+=this.quantita,s.stat.unitaPerTier[this.merce.tier]+=this.quantita,s.stat.venditePerTier[this.merce.tier]++,s.stat.quartieriVenduti.add(this.quartiere),s.segna("vendite",1),s.segna("unitaTier",this.quantita,{tier:this.merce.tier}),s.segna("venditeTier",1,{tier:this.merce.tier}),s.aggiornaSoglie(),this.npc.tipo!=="fisso"&&u<1.05&&Math.random()<.12+s.grado("rete")*.05?(this.npc.tipo="fisso",this.npc.fedelta=100,s.stat.clientiFissi++,s.segna("clientiFissi",s.stat.clientiFissi),{totale:r,nuovoFisso:!0}):{totale:r,nuovoFisso:!1}}};var Cp="mydealer_comandi_v1",Ks=[{id:"avanti",nome:"Avanti",gruppo:"Movimento",tasti:["KeyW","ArrowUp"]},{id:"indietro",nome:"Indietro",gruppo:"Movimento",tasti:["KeyS","ArrowDown"]},{id:"sinistra",nome:"A sinistra",gruppo:"Movimento",tasti:["KeyA","ArrowLeft"]},{id:"destra",nome:"A destra",gruppo:"Movimento",tasti:["KeyD","ArrowRight"]},{id:"corri",nome:"Corri",gruppo:"Movimento",tasti:["ShiftLeft","ShiftRight"]},{id:"chinati",nome:"Chinati",gruppo:"Movimento",tasti:["ControlLeft","ControlRight"]},{id:"freno",nome:"Freno (alla guida)",gruppo:"Movimento",tasti:["Space",null]},{id:"interagisci",nome:"Interagisci / parla",gruppo:"Azioni",tasti:["KeyE",null]},{id:"veicolo",nome:"Sali o scendi dal mezzo",gruppo:"Azioni",tasti:["KeyF",null]},{id:"telefono",nome:"Cellulare",gruppo:"Schermate",tasti:["KeyP",null]},{id:"zaino",nome:"Zaino",gruppo:"Schermate",tasti:["Tab",null]},{id:"mercato",nome:"Mercato",gruppo:"Schermate",tasti:["KeyM",null]},{id:"abilita",nome:"Abilit\xE0",gruppo:"Schermate",tasti:["KeyK",null]},{id:"missioni",nome:"Storia",gruppo:"Schermate",tasti:["KeyJ",null]},{id:"enciclopedia",nome:"Enciclopedia",gruppo:"Schermate",tasti:["KeyC",null]},{id:"menu",nome:"Menu / chiudi",gruppo:"Schermate",tasti:["Escape",null]}],Pp=["Movimento","Azioni","Schermate"];function Gi(o){if(!o)return"\u2014";let t={Space:"Spazio",Escape:"Esc",Tab:"Tab",Enter:"Invio",Backspace:"Backspace",ShiftLeft:"Maiusc sx",ShiftRight:"Maiusc dx",ControlLeft:"Ctrl sx",ControlRight:"Ctrl dx",AltLeft:"Alt sx",AltRight:"Alt dx",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Minus:"-",Equal:"=",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Backslash:"\\",Comma:",",Period:".",Slash:"/",Backquote:"`",CapsLock:"Bloc Maiusc"};return t[o]?t[o]:o.startsWith("Key")?o.slice(3):o.startsWith("Digit")?o.slice(5):o.startsWith("Numpad")?`Tastierino ${o.slice(6)}`:(/^F\d+$/.test(o),o)}var JM=new Set(["F5","F11","F12","MetaLeft","MetaRight"]),qa=class{constructor(){this.mappa={},this.sensibilita=1,this.invertiY=!1,this.ripristina(!0),this.carica()}ripristina(t=!1){this.mappa={};for(let e of Ks)this.mappa[e.id]=[...e.tasti];this.sensibilita=1,this.invertiY=!1,t||this.salva()}carica(){try{let t=JSON.parse(localStorage.getItem(Cp)??"null");if(!t)return;for(let e of Ks)Array.isArray(t.mappa?.[e.id])&&(this.mappa[e.id]=t.mappa[e.id].slice(0,2));typeof t.sensibilita=="number"&&(this.sensibilita=t.sensibilita),this.invertiY=!!t.invertiY}catch{}}salva(){try{localStorage.setItem(Cp,JSON.stringify({mappa:this.mappa,sensibilita:this.sensibilita,invertiY:this.invertiY}))}catch{}}tasti(t){return this.mappa[t]??[]}assegna(t,e,i){if(!this.mappa[t]||JM.has(i))return{ok:!1,motivo:"Tasto riservato dal browser."};let n=null;for(let s of Ks){if(s.id===t)continue;let r=this.mappa[s.id];for(let a=0;a<r.length;a++)r[a]===i&&(r[a]=null,n=s.nome)}return this.mappa[t][e]=i,this.salva(),{ok:!0,rubatoA:n}}cancella(t,e){return this.mappa[t]?this.mappa[t].filter((n,s)=>n&&s!==e).length?(this.mappa[t][e]=null,this.salva(),!0):!1:void 0}attiva(t,e){let i=this.mappa[t];return i?i[0]&&e.has(i[0])||i[1]&&e.has(i[1]):!1}azionePer(t){for(let e of Ks){let i=this.mappa[e.id];if(i&&(i[0]===t||i[1]===t))return e.id}return null}etichetta(t){return Gi(this.tasti(t)[0])}};function Xa(){if(typeof navigator>"u")return!1;let o=matchMedia?.("(pointer: coarse)")?.matches,t=(navigator.maxTouchPoints??0)>0;return!!(o&&t)}var $a=class{constructor(t){this.g=t,this.attivo=!1,this.stickId=null,this.cameraId=null,this.origine={x:0,z:0},this.ultimaCamera={x:0,y:0},this._costruisci()}_costruisci(){let t=document.createElement("div");t.id="touch",t.hidden=!0,t.innerHTML=`
      <div class="touch-zona" id="touch-sx"></div>
      <div class="touch-zona" id="touch-dx"></div>
      <div id="touch-stick" hidden><i></i></div>
      <div id="touch-pulsanti">
        <button class="touch-btn grande" data-azione="interagisci">E</button>
        <button class="touch-btn" data-azione="veicolo">Sali</button>
        <button class="touch-btn" data-azione="corri">Corri</button>
        <button class="touch-btn" data-azione="freno">Freno</button>
      </div>
      <div id="touch-scorciatoie">
        <button class="touch-mini" data-pannello="telefono">\u{1F4F1}</button>
        <button class="touch-mini" data-pannello="zaino">\u{1F392}</button>
        <button class="touch-mini" data-pannello="mercato">\u20AC</button>
        <button class="touch-mini" data-pannello="menu">\u2630</button>
      </div>`,document.body.appendChild(t),this.root=t,this.stick=t.querySelector("#touch-stick"),this.pomello=this.stick.querySelector("i");let e=t.querySelector("#touch-sx");e.addEventListener("pointerdown",r=>{this.stickId===null&&(this.stickId=r.pointerId,e.setPointerCapture(r.pointerId),this.origine={x:r.clientX,y:r.clientY},this.stick.hidden=!1,this.stick.style.left=`${r.clientX}px`,this.stick.style.top=`${r.clientY}px`,this._muoviStick(r.clientX,r.clientY),r.preventDefault())}),e.addEventListener("pointermove",r=>{r.pointerId===this.stickId&&(this._muoviStick(r.clientX,r.clientY),r.preventDefault())});let i=r=>{if(r.pointerId!==this.stickId)return;this.stickId=null,this.stick.hidden=!0,this.pomello.style.transform="translate(-50%, -50%)";let a=this.g.giocatore;a&&(a.assi.x=0,a.assi.z=0)};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i);let n=t.querySelector("#touch-dx");n.addEventListener("pointerdown",r=>{this.cameraId===null&&(this.cameraId=r.pointerId,n.setPointerCapture(r.pointerId),this.ultimaCamera={x:r.clientX,y:r.clientY},r.preventDefault())}),n.addEventListener("pointermove",r=>{if(r.pointerId!==this.cameraId)return;let a=this.g.giocatore;if(a){let l=.0055*(this.g.comandi?.sensibilita??1);a.yaw-=(r.clientX-this.ultimaCamera.x)*l,a.pitch=Math.max(-.45,Math.min(1.1,a.pitch+(r.clientY-this.ultimaCamera.y)*l*(this.g.comandi?.invertiY?-1:1))),a._mouseRecente=1}this.ultimaCamera={x:r.clientX,y:r.clientY},r.preventDefault()});let s=r=>{r.pointerId===this.cameraId&&(this.cameraId=null)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s);for(let r of t.querySelectorAll(".touch-btn")){let a=r.dataset.azione,l=h=>{h.preventDefault(),r.classList.add("premuto");let u=this.g.giocatore;u&&(a==="interagisci"||a==="veicolo"?this.g.azioneRapida(a):u.virtuali.add(a))},c=h=>{h.preventDefault(),r.classList.remove("premuto"),this.g.giocatore?.virtuali.delete(a)};r.addEventListener("pointerdown",l),r.addEventListener("pointerup",c),r.addEventListener("pointercancel",c),r.addEventListener("pointerleave",c)}for(let r of t.querySelectorAll(".touch-mini"))r.addEventListener("pointerdown",a=>{a.preventDefault(),this.g.azioneRapida(r.dataset.pannello)})}_muoviStick(t,e){let i=t-this.origine.x,n=e-this.origine.y,s=Math.hypot(i,n);s>62&&(i*=62/s,n*=62/s),this.pomello.style.transform=`translate(calc(-50% + ${i}px), calc(-50% + ${n}px))`;let r=this.g.giocatore;if(!r)return;let a=i/62,l=n/62,c=Math.hypot(a,l);if(c<.14){r.assi.x=0,r.assi.z=0;return}let h=(c-.14)/(1-.14)/c;r.assi.x=a*h,r.assi.z=l*h}mostra(t){if(this.attivo=t,this.root.hidden=!t,document.body.classList.toggle("tattile",t),!t){let e=this.g.giocatore;e&&(e.assi.x=0,e.assi.z=0,e.virtuali.clear())}}aggiorna(){if(!this.attivo)return;let t=this.root.querySelector('[data-azione="veicolo"]');t&&(t.textContent=this.g.giocatore?.aBordo?"Scendi":"Sali")}};function Ya(o,t){let e=n=>Ks.filter(s=>s.gruppo===n).map(s=>`
    <tr>
      <td>${s.nome}</td>
      <td class="num"><button class="btn tasto" data-az="${s.id}" data-slot="0">${Gi(o.tasti(s.id)[0])}</button></td>
      <td class="num"><button class="btn tasto" data-az="${s.id}" data-slot="1">${Gi(o.tasti(s.id)[1])}</button></td>
    </tr>`).join(""),i=Pp.map(n=>`
    <div class="sezione-titolo">${n}</div>
    <table class="tab-comandi"><tr><th>Azione</th><th class="num">Tasto</th><th class="num">Alternativa</th></tr>${e(n)}</table>`).join("");return`
    <div class="griglia due">
      <div class="scheda">
        <h4>Camera</h4>
        <div class="trattativa-riga"><span>Sensibilit\xE0</span><b id="imp-sens-val">${o.sensibilita.toFixed(2)}\xD7</b></div>
        <input type="range" id="imp-sens" min="0.25" max="3" step="0.05" value="${o.sensibilita}" style="width:100%">
        <label class="riga-spunta"><input type="checkbox" id="imp-inv" ${o.invertiY?"checked":""}> Inverti l'asse verticale</label>
      </div>
      <div class="scheda">
        <h4>Comandi a schermo</h4>
        <p class="nota">Rilevamento automatico: ${Xa()?"questo \xE8 un dispositivo <b>tattile</b>, i comandi a schermo sono accesi da soli.":"questo dispositivo ha <b>mouse e tastiera</b>."}</p>
        <label class="riga-spunta"><input type="checkbox" id="imp-touch" ${t?"checked":""}> Joystick e pulsanti a schermo</label>
        <p class="nota">Su telefono e tablet: pollice sinistro per muoverti, trascina a destra per guardarti attorno.</p>
      </div>
    </div>
    ${jM()}
    <p class="nota" style="margin-top:14px">
      Clicca una casella e premi il tasto che vuoi. <kbd>Backspace</kbd> lo cancella, <kbd>Esc</kbd> annulla.
      Un tasto gi\xE0 assegnato altrove viene liberato.
    </p>
    ${i}
    <div class="riga-azione" style="margin-top:16px">
      <button class="btn pericolo" id="imp-reset">Ripristina i comandi predefiniti</button>
    </div>`}function jM(){let o=Ho();return`
    <div class="sezione-titolo">Conversazioni</div>
    <div class="scheda">
      <label class="riga-spunta"><input type="checkbox" id="ia-accesa" ${o.accesa?"checked":""}>
        Fai rispondere i clienti con un modello linguistico</label>
      <p class="nota">Acceso, i clienti al telefono rispondono a quello che scrivi davvero, con parole
        loro. Spento (o se il servizio non risponde) il gioco usa le risposte scritte a mano: si gioca
        uguale, ma sono sempre quelle.</p>
      <label class="riga-spunta"><input type="radio" name="ia-via" value="intermediario" ${o.via!=="openrouter"?"checked":""}>
        Usa il servizio del gioco</label>
      <label class="riga-spunta"><input type="radio" name="ia-via" value="openrouter" ${o.via==="openrouter"?"checked":""}>
        Usa la mia chiave OpenRouter</label>
      <input type="password" id="ia-chiave" placeholder="sk-or-\u2026" value="${o.chiave?"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022":""}"
        autocomplete="off" style="width:100%;margin-top:8px" />
      <p class="nota">La chiave resta su questo computer (nella memoria del browser) e viene mandata
        solo a OpenRouter. Non passa da noi e non finisce nei salvataggi.</p>
    </div>`}function Za(o,t){let e=t.comandi,i=o.querySelector("#imp-sens");i.oninput=()=>{e.sensibilita=+i.value,o.querySelector("#imp-sens-val").textContent=`${e.sensibilita.toFixed(2)}\xD7`,e.salva()},o.querySelector("#imp-inv").onchange=s=>{e.invertiY=s.target.checked,e.salva()},o.querySelector("#imp-touch").onchange=s=>{localStorage.setItem("mydealer_touch",s.target.checked?"1":"0"),t.setTattile(s.target.checked)},o.querySelector("#imp-reset").onclick=()=>{e.ripristina(),t.ridisegna(),t.tostino("Comandi riportati ai predefiniti.","ok")};let n=o.querySelector("#ia-accesa");if(n){n.onchange=r=>Va({accesa:r.target.checked});for(let r of o.querySelectorAll('input[name="ia-via"]'))r.onchange=a=>Va({via:a.target.value});let s=o.querySelector("#ia-chiave");s.onchange=()=>{let r=s.value.trim();!r||r.startsWith("\u2022")||(Va({chiave:r,via:"openrouter"}),t.tostino("Chiave salvata su questo computer.","ok"))}}for(let s of o.querySelectorAll("button.tasto"))s.onclick=()=>QM(s,t)}function QM(o,t){if(t.ascolto.get())return;let e=o.dataset.az,i=+o.dataset.slot,n=o.textContent;o.textContent="premi\u2026",o.classList.add("in-ascolto"),t.ascolto.set(!0);let s=r=>{if(r.preventDefault(),r.stopPropagation(),removeEventListener("keydown",s,!0),t.ascolto.set(!1),o.classList.remove("in-ascolto"),r.code==="Escape"){o.textContent=n;return}if(r.code==="Backspace"){t.comandi.cancella(e,i)===!1?(t.tostino("Ogni azione deve conservare almeno un tasto.","attenzione"),o.textContent=n):o.textContent=Gi(null);return}let a=t.comandi.assegna(e,i,r.code);if(!a.ok)return o.textContent=n,t.tostino(a.motivo,"male");a.rubatoA&&t.tostino(`Quel tasto era di \xAB${a.rubatoA}\xBB: gliel'ho tolto.`,"attenzione",4500),t.ridisegna()};addEventListener("keydown",s,!0)}var tb=o=>`\u20AC ${Math.round(o).toLocaleString("it-IT")}`;function eb(o){if(!o)return"";let t=new Date(o),e=t.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"}),n=Math.floor((new Date().setHours(0,0,0,0)-new Date(o).setHours(0,0,0,0))/864e5);return n===0?`oggi alle ${e}`:n===1?`ieri alle ${e}`:t.toLocaleDateString("it-IT",{day:"2-digit",month:"2-digit"})}function Ka(o){return`<div class="griglia tre">${Ui.elencoCaselle().map(e=>e.rotta?`<div class="scheda casella">
        <b>Casella ${e.i+1}</b>
        <p class="nota">Salvataggio illeggibile.</p>
        <div class="riga-azione"><button class="btn pericolo" data-elimina="${e.i}">Elimina</button></div>
      </div>`:e.vuota?`<div class="scheda casella vuota">
        <b>Casella ${e.i+1}</b>
        <p class="nota">Vuota.</p>
        <div class="riga-azione">
          ${o?`<button class="btn primario" data-scrivi="${e.i}">Salva qui</button>`:""}
        </div>
      </div>`:`<div class="scheda casella">
      <b>Casella ${e.i+1} \u2014 ${e.ruolo}</b>
      <p>Giorno ${e.giorno} \xB7 livello ${e.livello} \xB7 ${tb(e.contanti)}</p>
      <p class="nota">${eb(e.quando)}</p>
      <div class="riga-azione">
        <button class="btn primario" data-carica="${e.i}">Carica</button>
        ${o?`<button class="btn" data-scrivi="${e.i}">Sovrascrivi</button>`:""}
        <button class="btn pericolo" data-elimina="${e.i}">Elimina</button>
      </div>
    </div>`).join("")}</div>
    <p class="nota" style="margin-top:14px">
      Oltre a queste, il gioco tiene un <b>salvataggio automatico</b>: si aggiorna da solo
      a ogni cambio di giorno ed \xE8 quello che riprende \xABContinua la partita\xBB.
      Le caselle invece le scrivi solo tu, e restano finch\xE9 non le tocchi.
    </p>`}function Ja(o,{stato:t,carica:e,avviso:i,ridisegna:n}){o.querySelectorAll("[data-scrivi]").forEach(s=>{s.onclick=()=>{let r=+s.dataset.scrivi,a=t?.salvaSu(r);i?.(a?`Partita salvata nella casella ${r+1}.`:"Salvataggio fallito.",a?"ok":"male"),n?.()}}),o.querySelectorAll("[data-carica]").forEach(s=>{s.onclick=()=>{let r=Ui.caricaDa(+s.dataset.carica);if(!r)return i?.("Salvataggio illeggibile.","male");e(r)}}),o.querySelectorAll("[data-elimina]").forEach(s=>{s.onclick=()=>{let r=+s.dataset.elimina;confirm(`Cancellare la casella ${r+1}? Non si pu\xF2 recuperare.`)&&(Ui.eliminaCasella(r),n?.())}})}function ib(o){let t=e=>`<kbd>${Gi(o.tasti(e)[0])}</kbd>`;return`${t("avanti")}${t("sinistra")}${t("indietro")}${t("destra")} muoverti \xB7 ${t("corri")} correre \xB7 ${t("interagisci")} interagire \xB7 ${t("veicolo")} salire o scendere \xB7 ${t("telefono")} cellulare \xB7 ${t("zaino")} zaino \xB7 ${t("menu")} menu`}var Kt=o=>document.querySelector(o),ja=class{constructor(t){this.g=t,this.pannelloAperto=null,this.dialogoAperto=null,this.trattativa=null,this.el={hud:Kt("#hud"),contanti:Kt("#hud-contanti"),ora:Kt("#hud-ora"),giorno:Kt("#hud-giorno"),quartiere:Kt("#hud-quartiere"),livello:Kt("#hud-livello"),xp:Kt("#hud-xp"),stelle:Kt("#hud-stelle"),heat:Kt("#hud-heat"),capienza:Kt("#hud-capienza"),carico:Kt("#hud-carico"),inventario:Kt("#hud-inventario"),vitali:Kt("#hud-vitali"),salute:Kt("#v-salute"),craving:Kt("#v-craving"),stamina:Kt("#v-stamina"),prompt:Kt("#prompt-interazione"),obiettivo:Kt("#obiettivo-corrente"),tostini:Kt("#tostini"),radar:Kt("#radar"),pannello:Kt("#pannello"),pannelloTitolo:Kt("#pannello-titolo"),pannelloCorpo:Kt("#pannello-corpo"),dialogo:Kt("#dialogo"),dNome:Kt("#dialogo-nome"),dRuolo:Kt("#dialogo-ruolo"),dBattuta:Kt("#dialogo-battuta"),dCorpo:Kt("#dialogo-corpo"),dAzioni:Kt("#dialogo-azioni"),sballo:Kt("#effetto-sballo"),veloFine:Kt("#velo-fine"),fineTitolo:Kt("#fine-titolo"),fineTesto:Kt("#fine-testo"),fineOk:Kt("#fine-ok"),tasti:Kt("#hud-tasti")},this.ctxRadar=this.el.radar.getContext("2d"),Kt("#pannello-chiudi").onclick=()=>this.chiudiPannello(),Kt("#dialogo-chiudi").onclick=()=>this.chiudiDialogo(),this.el.fineOk.onclick=()=>{this.el.veloFine.hidden=!0,this.g.riprendi()},this.el.stelle.innerHTML="<span>\u2605</span>".repeat(5),this.aggiornaScorciatoie()}get aperto(){return!!this.pannelloAperto||!!this.dialogoAperto}aggiornaScorciatoie(){let t=this.g.comandi,e=[["interagisci","interagisci"],["veicolo","sali/scendi"],["telefono","cellulare"],["zaino","zaino"],["mercato","mercato"],["abilita","abilit\xE0"],["missioni","storia"],["enciclopedia","enciclopedia"],["menu","menu"]];this.el.tasti.innerHTML=e.map(([i,n])=>`<kbd>${Gi(t.tasti(i)[0])}</kbd> ${n}`).join(" \xB7 ")}mostraHud(t){this.el.hud.hidden=!t}aggiorna(){let t=this.g.stato,e=this.el;e.contanti.textContent=Ct(t.contanti),e.ora.textContent=An(t.minuti),e.giorno.textContent=`Giorno ${t.giorno}`;let i=ne[this.g.quartiereGiocatore];e.quartiere.textContent=i?i.nome:"\u2014";let n=t.progressoLivello;e.livello.textContent=`Lv ${n.livello}`,e.xp.style.width=`${n.dentro/n.servono*100}%`;let s=this.g.polizia.stelle;if([...e.stelle.children].forEach((r,a)=>r.classList.toggle("on",a<s)),e.heat.style.width=`${t.heat}%`,e.capienza.textContent=`${t.ingombro.toFixed(0)} / ${t.capienza}`,e.carico.style.width=`${at(t.ingombro/t.capienza*100,0,100)}%`,this._inventarioHud(),this._obiettiviHud(),t.ruolo==="cliente"){e.vitali.hidden=!1,e.salute.style.width=`${t.salute}%`,e.craving.style.width=`${t.craving}%`,e.stamina.style.width=`${at(t.stamina,0,100)}%`;let r=this.g.cliente.distorsione;e.sballo.style.opacity=r*.9,e.sballo.classList.toggle("rosso",this.g.cliente.inOverdose)}else e.vitali.hidden=!0,e.sballo.style.opacity=0;this._radar()}_inventarioHud(){let t=this.g.stato,e=Object.entries(t.inventario).filter(([,n])=>n>0),i=Object.entries(t.oggetti??{}).filter(([,n])=>n>0);if(!e.length&&!i.length){this.el.inventario.innerHTML='<li class="vuoto">vuoto</li>';return}this.el.inventario.innerHTML=[...e.map(([n,s])=>{let r=Ht[n];return`<li><span>${r.nome}</span><span class="q">${s} ${r.unita}</span></li>`}),...i.map(([n,s])=>`<li><span style="color:var(--neon-2)">${Xs[n]?.nome??n}</span><span class="q">\xD7${s}</span></li>`)].join("")}_obiettiviHud(){let t=this.g.stato,e=t.capitoloCorrente;if(!e){this.el.obiettivo.innerHTML="<b>Campagna completata</b>";return}let i=e.obiettivi.map(n=>{let s=t.completati.has(n.id),r=Math.min(t.obiettivi[n.id]??0,n.quantita),a=n.quantita>1&&!s?` (${Math.floor(r)}/${n.quantita})`:"";return`<div class="${s?"fatto":""}">${s?"\u2713":"\xB7"} ${n.desc}${a}</div>`}).join("");this.el.obiettivo.innerHTML=`<b>${e.titolo}</b>${i}`}_radar(){let t=this.ctxRadar,e=100,i=95;t.clearRect(0,0,200,200);let n=this.g.giocatore.posizione,s=this.g.giocatore.yaw;t.save(),t.beginPath(),t.arc(e,e,96,0,Math.PI*2),t.clip();for(let a=0;a<24;a++)for(let l=0;l<24;l++){let c=n.x+(a/24-.5)*i*2,h=n.z+(l/24-.5)*i*2;if(Math.abs(c)>ve/2||Math.abs(h)>ve/2)continue;let u=this.g.quartierePos(c,h);t.fillStyle=ne[u].colore+"18",t.fillRect(a/24*200,l/24*200,200/24+1,200/24+1)}let r=(a,l)=>{let c=a-n.x,h=l-n.z,u=Math.sin(-s),d=Math.cos(-s),f=c*d-h*u,p=c*u+h*d;return[e+f/i*96,e-p/i*96]};for(let a of this.g.citta.luoghi){let[l,c]=r(a.pos.x,a.pos.z);Math.hypot(l-e,c-e)>94||(t.fillStyle=a.tipo==="fornitore"?"#f0c040":a.tipo==="centrale"?"#4d9bff":"#8a94a5",t.fillRect(l-3,c-3,6,6))}for(let a of this.g.stato.appuntamenti??[]){if(a.x==null)continue;let[l,c]=r(a.x,a.z),h=Math.hypot(l-e,c-e),[u,d]=h>92?[e+(l-e)/h*92,e+(c-e)/h*92]:[l,c];t.fillStyle="#f0c040",t.save(),t.translate(u,d),t.rotate(Math.PI/4),t.fillRect(-4,-4,8,8),t.restore()}for(let a of this.g.popolazione.npc){if(a.tipo==="passante")continue;let[l,c]=r(a.gruppo.position.x,a.gruppo.position.z);Math.hypot(l-e,c-e)>94||(t.fillStyle=a.tipo==="fisso"?"#36c8e0":a.tipo==="spacciatore"?"#e0b036":a.tipo==="rapinatore"?"#e04040":a.tipo==="civetta"&&this.g.stato.grado("occhio")>=3?"#4060ff":"#36e07a",t.beginPath(),t.arc(l,c,2.6,0,Math.PI*2),t.fill())}for(let a of this.g.polizia.pattuglie){let[l,c]=r(a.gruppo.position.x,a.gruppo.position.z);if(!(Math.hypot(l-e,c-e)>94)&&(t.fillStyle=a.sospetto>.4?"#ff5a5a":"#4d9bff",t.beginPath(),t.arc(l,c,3.4,0,Math.PI*2),t.fill(),this.g.stato.permanenti.has("scanner"))){let h=-a.direzione+s+Math.PI/2;t.fillStyle="rgba(77,155,255,.13)",t.beginPath(),t.moveTo(l,c),t.arc(l,c,26/i*96,h-.42*Math.PI,h+.42*Math.PI),t.closePath(),t.fill()}}t.restore(),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(e,e-6),t.lineTo(e-4.5,e+5),t.lineTo(e+4.5,e+5),t.closePath(),t.fill()}tostino(t,e="info",i=4200){let n=document.createElement("div");n.className=`tostino ${e}`,n.textContent=t,this.el.tostini.appendChild(n),setTimeout(()=>{n.style.transition="opacity .3s",n.style.opacity="0",setTimeout(()=>n.remove(),320)},i)}prompt(t){if(!t){this.el.prompt.hidden=!0;return}this.el.prompt.hidden=!1,this.el.prompt.innerHTML=t}schermataFine(t,e){this.el.fineTitolo.textContent=t,this.el.fineTesto.textContent=e,this.el.veloFine.hidden=!1,this.g.pausa()}apriPannello(t,e,i,n){this.pannelloAperto=t,this.el.pannelloTitolo.textContent=e,this.el.pannelloCorpo.innerHTML=i,this.el.pannello.hidden=!1,n?.(this.el.pannelloCorpo),this.g.pausa()}chiudiPannello(){this.el.pannello.hidden=!0,this.pannelloAperto=null,this.dialogoAperto||this.g.riprendi()}togglePannello(t,e){this.pannelloAperto===t?this.chiudiPannello():e()}pannelloInventario(){let t=this.g.stato,e=this.g.quartiereGiocatore,i=Object.entries(t.inventario).filter(([,r])=>r>0).map(([r,a])=>{let l=Ht[r],c=this.g.mercato.prezzo(r,e),h=t.ruolo==="cliente"&&l.effetti;return`<tr>
        <td><b>${l.nome}</b> <span class="tag t${l.tier}">${Ah[l.categoria].nome}</span></td>
        <td class="num">${a} ${l.unita}</td>
        <td class="num">${Ct(c)}</td>
        <td class="num">${Ct(c*a)}</td>
        <td class="num">${(l.ingombro*a).toFixed(1)}</td>
        <td class="num">${h?`<button class="btn" data-usa="${r}">Usa 1</button>`:""}</td>
      </tr>`}).join(""),n=Object.entries(t.oggetti??{}).filter(([,r])=>r>0).map(([r,a])=>{let l=Xs[r];return`<tr><td><b>${l.nome}</b></td><td class="num">\xD7${a}</td><td colspan="3">${l.desc}</td>
        <td class="num"><button class="btn" data-oggetto="${r}">Usa</button></td></tr>`}).join(""),s=[...t.permanenti].map(r=>`<span class="tag su">${Xs[r]?.nome??r}</span>`).join(" ");this.apriPannello("inventario","Zaino",`
      <div class="riga-azione" style="justify-content:space-between;margin-bottom:14px">
        <div>Ingombro <b>${t.ingombro.toFixed(1)}</b> / ${t.capienza}</div>
        <div>Contanti <b style="color:var(--neon)">${Ct(t.contanti)}</b>${t.debito>0?` \xB7 debito <b style="color:var(--male)">${Ct(t.debito)}</b>`:""}</div>
      </div>
      ${i||n?`<table>
        <tr><th>Merce</th><th class="num">Q.t\xE0</th><th class="num">Prezzo qui</th><th class="num">Valore</th><th class="num">Ing.</th><th></th></tr>
        ${i}${n}
      </table>`:'<p class="nota">Lo zaino \xE8 vuoto. Trova un fornitore: sono i punti gialli sul radar.</p>'}
      ${s?`<div class="sezione-titolo">Equipaggiamento permanente</div><div>${s}</div>`:""}
    `,r=>{r.querySelectorAll("[data-usa]").forEach(a=>{a.onclick=()=>{let l=this.g.cliente.consuma(a.dataset.usa,1);this.tostino(l.testo,l.tipo??"info"),this.pannelloInventario()}}),r.querySelectorAll("[data-oggetto]").forEach(a=>{a.onclick=()=>{this.g.usaOggetto(a.dataset.oggetto),this.pannelloInventario()}})})}pannelloMercato(){let t=this.g.stato,e=Ge.filter(r=>Pi[r.tier].livello<=t.livello),i=oi.map(r=>`<th class="num">${r.nome}</th>`).join(""),n=e.map(r=>{let a=oi.map(l=>{let c=this.g.mercato.prezzo(r.id,l.id),h=this.g.mercato.indiceAffare(r.id,l.id);return`<td class="num" style="color:${h>.12?"var(--neon)":h<-.12?"var(--male)":"var(--testo-fioco)"}">${Math.round(c)}</td>`}).join("");return`<tr><td><b>${r.nome}</b> <span class="tag t${r.tier}">T${r.tier}</span></td>${a}</tr>`}).join(""),s=this.g.mercato.eventi.length?this.g.mercato.eventi.map(r=>`<div class="scheda"><h4>${r.titolo} <span class="tag ${r.moltiplicatore>1?"su":"giu"}">\xD7${r.moltiplicatore.toFixed(2)}</span></h4><p>${r.testo}</p></div>`).join(""):'<p class="nota">Nessun evento in corso. Il mercato \xE8 piatto.</p>';this.apriPannello("mercato","Mercato \u2014 prezzi al dettaglio",`
      <div class="sezione-titolo">Che cosa si muove</div>
      <div class="griglia due">${s}</div>
      <div class="sezione-titolo">Listino per quartiere (\u20AC per unit\xE0)</div>
      <table><tr><th>Merce</th>${i}</tr>${n}</table>
      <p class="nota">Verde = sopra la media citt\xE0, rosso = sotto. Ogni vendita satura la piazza:
      se martelli lo stesso quartiere con la stessa merce, il prezzo scende e ci mette giorni a tornare.</p>
    `)}pannelloAbilita(){let t=this.g.stato,i=[...new Set(ko.map(n=>n.ramo))].map(n=>`
      <div class="sezione-titolo">${n}</div>
      <div class="griglia due">
        ${ko.filter(s=>s.ramo===n).map(s=>{let r=t.grado(s.id),a=r>=s.max,l=t.puntiAbilita>0&&!a;return`<div class="scheda">
            <h4>${s.nome} <span class="tag">${r}/${s.max}</span></h4>
            <p>${s.desc}</p>
            <div style="margin-top:9px"><button class="btn ${l?"primario":""}" data-ab="${s.id}" ${l?"":"disabled"}>
              ${a?"Al massimo":"Migliora (1 punto)"}</button></div>
          </div>`}).join("")}
      </div>`).join("");this.apriPannello("abilita",`Abilit\xE0 \u2014 ${t.puntiAbilita} punti disponibili`,i,n=>{n.querySelectorAll("[data-ab]").forEach(s=>{s.onclick=()=>{let r=s.dataset.ab,a=ko.find(l=>l.id===r);t.puntiAbilita<=0||t.grado(r)>=a.max||(t.puntiAbilita--,t.abilita[r]=t.grado(r)+1,this.tostino(`${a.nome} \u2192 grado ${t.abilita[r]}`,"ok"),this.pannelloAbilita())}})})}pannelloMissioni(){let t=this.g.stato,i=Oa(t.ruolo).map((s,r)=>{let a=r===t.capitolo,l=r<t.capitolo,c=r>t.capitolo;return`<div class="scheda ${c?"bloccata":""}" style="${a?"border-color:var(--neon)":""}">
        <h4>${s.titolo} ${l?'<span class="tag su">completato</span>':a?'<span class="tag su">in corso</span>':`<span class="tag">Lv ${s.livelloMin}</span>`}</h4>
        <p style="margin-bottom:10px">${c?"\xB7\xB7\xB7":s.testo}</p>
        ${c?"":s.obiettivi.map(h=>{let u=t.completati.has(h.id),d=Math.min(t.obiettivi[h.id]??0,h.quantita);return`<p style="${u?"color:var(--neon)":""}">${u?"\u2713":"\u25CB"} ${h.desc} ${h.quantita>1?`<span class="q">(${Math.floor(d)}/${h.quantita})</span>`:""}</p>`}).join("")}
        ${c?"":`<p style="margin-top:9px;color:var(--oro)">Ricompensa: ${s.ricompensa.xp} XP${s.ricompensa.sblocca?` \xB7 sblocca ${s.ricompensa.sblocca}`:""}</p>`}
      </div>`}).join(""),n=t.log.slice(0,12).map(s=>`<p style="color:${s.tipo==="male"?"var(--male)":s.tipo==="ok"?"var(--neon)":"var(--testo-fioco)"}">
        <span class="q">G${s.giorno} ${An(s.minuti)}</span> \u2014 ${s.testo}</p>`).join("");this.apriPannello("missioni","Storia",`
      <div class="griglia">${i}</div>
      <div class="sezione-titolo">Diario</div>
      ${n||'<p class="nota">Ancora niente da raccontare.</p>'}
    `)}pannelloCodex(){let t=this.g.stato,e=Ge.map(i=>{let n=Pi[i.tier].livello<=t.livello;return`<div class="scheda ${n?"":"bloccata"}">
        <h4>${n?i.nome:"???"} <span class="tag t${i.tier}">${Ah[i.categoria].nome}</span></h4>
        <p>${n?i.codex:`Si sblocca al livello ${Pi[i.tier].livello}.`}</p>
        ${n&&i.effetti?`<p style="margin-top:8px;color:#6a7484">
          Dipendenza ${(i.dipendenza*100).toFixed(0)}% \xB7 tolleranza ${(i.tolleranza*100).toFixed(0)}% \xB7
          letalit\xE0 ${(i.letalita*100).toFixed(0)}% \xB7 attenzione della polizia ${i.calore.toFixed(1)}</p>`:""}
      </div>`}).join("");this.apriPannello("codex","Enciclopedia",`
      <p class="nota" style="margin:0 0 16px">
        Quello che segue \xE8 materiale di gioco, ma i rischi descritti sono quelli veri: il gioco
        li usa come meccaniche perch\xE9 sono la parte interessante. Non ci sono procedure, dosi
        n\xE9 istruzioni d'uso, e non ce ne saranno.
      </p>
      <div class="griglia due">${e}</div>
    `)}pannelloMenu(){let t=this.g.stato,e=oi.map(i=>{let n=t.reputazione[i.id]??0;return`<div class="trattativa-riga"><span>${i.nome}</span><b style="color:${n>20?"var(--neon)":n<-20?"var(--male)":"inherit"}">${n.toFixed(0)}</b></div>`}).join("");this.apriPannello("menu","Menu",`
      <div class="griglia due">
        <div class="scheda">
          <h4>Partita</h4>
          <p>${t.ruolo==="dealer"?"Spacciatore":"Cliente"} \xB7 livello ${t.livello} \xB7 giorno ${t.giorno}</p>
          <p>Patrimonio ${Ct(t.patrimonio)} \xB7 arresti ${t.arresti}</p>
          <p>Vendite ${t.stat.vendite} \xB7 fatturato ${Ct(t.stat.fatturato)}</p>
          <div class="riga-azione" style="margin-top:12px">
            <button class="btn primario" id="m-salva">Salva\u2026</button>
            <button class="btn" id="m-negozio">Negozio</button>
            <button class="btn pericolo" id="m-esci">Torna al menu</button>
          </div>
        </div>
        <div class="scheda">
          <h4>Reputazione per quartiere</h4>
          ${e}
          <p class="nota">Reputazione alta = pi\xF9 clienti e pi\xF9 clienti fissi. Vendere veleno la distrugge.</p>
        </div>
      </div>
      <div class="sezione-titolo">Comandi</div>
      <div class="scheda">
        <p>${ib(this.g.comandi)}</p>
        <div class="riga-azione" style="margin-top:12px">
          <button class="btn primario" id="m-impostazioni">Impostazioni e comandi</button>
        </div>
      </div>
    `,i=>{i.querySelector("#m-salva").onclick=()=>this.pannelloCaselle(),i.querySelector("#m-negozio").onclick=()=>this.pannelloNegozio(),i.querySelector("#m-impostazioni").onclick=()=>this.pannelloImpostazioni(),i.querySelector("#m-esci").onclick=()=>{t.salva(),location.reload()}})}pannelloCaselle(){let t=()=>{this.apriPannello("caselle","Partite salvate",Ka(!0),e=>{Ja(e,{stato:this.g.stato,carica:i=>{confirm("Caricare questa partita? Quella in corso viene abbandonata.")&&(i.salva(),location.reload())},avviso:(i,n)=>this.tostino(i,n),ridisegna:t})})};t()}pannelloImpostazioni(){this.apriPannello("impostazioni","Impostazioni",Ya(this.g.comandi,this.g.tattile),t=>Za(t,{comandi:this.g.comandi,tostino:(e,i,n)=>this.tostino(e,i,n),ridisegna:()=>this.pannelloImpostazioni(),setTattile:e=>{this.g.tattile=e,this.g.touch?.mostra(e),this.tostino(e?"Comandi a schermo attivi.":"Comandi a schermo nascosti.","info")},ascolto:{get:()=>this.inAscoltoTasto,set:e=>{this.inAscoltoTasto=e}}}))}pannelloNegozio(){let t=kh.map(e=>`
      <div class="scheda">
        <h4>${e.nome} <span class="tag">${e.prezzo.toFixed(2)} \u20AC</span></h4>
        <p>${e.desc}</p>
        <div style="margin-top:10px"><button class="btn" disabled>${this.g.negozio.ha(e.id)?"Gi\xE0 tuo":"Non ancora disponibile"}</button></div>
      </div>`).join("");this.apriPannello("negozio","Negozio",`
      <p class="nota" style="margin:0 0 16px">
        Il negozio \xE8 <b>predisposto ma spento</b>: non c'\xE8 nessun pagamento attivo. Quando ci sar\xE0,
        varr\xE0 una regola sola \u2014 niente di ci\xF2 che si compra d\xE0 vantaggio in partita.
      </p>
      <div class="griglia due">${t}</div>
      <div class="sezione-titolo">Cosa non sar\xE0 mai in vendita</div>
      <p class="nota">${Mp.join(" \xB7 ")}</p>
    `)}apriDialogo(t,e,i,n,s,r){this.dialogoAperto=!0,this.el.dNome.textContent=t,this.el.dRuolo.textContent=e,this.el.dBattuta.textContent=i,this.el.dCorpo.innerHTML=n??"",this.el.dAzioni.innerHTML="";for(let a of s??[]){let l=document.createElement("button");l.className=`btn ${a.classe??""}`,l.textContent=a.testo,l.disabled=!!a.disabilitato,l.onclick=a.azione,this.el.dAzioni.appendChild(l)}this.el.dialogo.hidden=!1,r?.(this.el.dCorpo),this.g.pausa()}chiudiDialogo(){this.el.dialogo.hidden=!0,this.dialogoAperto=!1,this.trattativa?.npc&&(this.trattativa.npc.parlato=!0),this.trattativa=null,this.pannelloAperto||this.g.riprendi()}dialogoFreddo(t){let e=this.g.stato;this.g.popolazione.avvicina(t);let i=Object.keys(e.inventario).filter(l=>e.quanti(l)>0).map(l=>Ht[l]).sort((l,c)=>l.tier-c.tier);if(!i.length)return this.apriDialogo(t.nome,"passante","S\xEC? \u2014 Ti guarda le mani. Sono vuote.","",[{testo:"Niente, scusa",azione:()=>this.chiudiDialogo()}]);let n=ne[t.qid]??ne[this.g.quartiereGiocatore],s=Math.floor(e.minuti%1440/60),r=s>=21||s<5,a=(l,c="passante")=>{let h=i.map(u=>`<option value="${u.id}">${u.nome} \u2014 ne hai ${e.quanti(u.id)} ${u.unita}</option>`).join("");this.apriDialogo(t.nome,c,l,`<div class="trattativa">
          <div class="trattativa-riga"><span>Quartiere</span><b>${n.nome}</b></div>
          <div class="trattativa-riga"><span>Ora</span><b>${An(e.minuti)}${r?" \u2014 \xE8 buio, meglio":""}</b></div>
          <div class="trattativa-riga"><span>Cosa gli proponi</span></div>
          <select id="fr-merce" style="width:100%">${h}</select>
          <div class="trattativa-riga" style="color:var(--testo-fioco);font-size:12px;margin-top:8px">
            <span>${t.insistenze?`hai gi\xE0 insistito ${t.insistenze} volta${t.insistenze>1?"e":""}`:"non ti conosce: la maggior parte dice di no"}</span>
          </div>
        </div>`,[{testo:t.insistenze?"Insisti":"Attacca discorso",classe:"primario",azione:()=>this._tentaFreddo(t,a,n,r)},{testo:"Lascia perdere",azione:()=>this.chiudiDialogo()}],u=>{this._selMerce=u.querySelector("#fr-merce")})};a(t.insistenze?"Te l'ho detto di no.":`${r?"Che vuoi?":"Dimmi."} \u2014 Si ferma, ma tiene le distanze.`)}_tentaFreddo(t,e,i,n){let s=this.g.stato,r=this._selMerce.value,a=Ht[r],l=a.domanda?.[i.id]??1,c=(t.preferenza===r?.34:0)+(l-1)*.16,h=t.apertura+c+s.grado("trattativa")*.05+s.grado("rete")*.03+(n?.07:0)+t.insistenze*.14;t.civile&&(h*=.25),h=at(h,.01,.9);let u=at(.04+t.insistenze*.11+(t.civile?.22:0)+s.heat/100*.1,0,.7),d=Math.random();if(t.insistenze++,s.aggiungiHeat(.6+t.insistenze*.5),d<u){this.chiudiDialogo();let p=this.g.popolazione.testimoni(this.g.giocatore.posizione,14);s.aggiungiHeat(9+p*1.5+t.insistenze*3),s.scriviLog(`${t.nome} ha chiamato la polizia dopo che gli hai proposto ${a.nome}.`,"male"),this.tostino(`${t.nome} tira fuori il telefono. Vattene.`,"male",6e3),t.bruciato=!0;return}if(Math.random()<h){let p=Math.min(t.quantita,s.quanti(r));return this.g.popolazione.accettaProposta(t,r,p),s.aggiungiXp(20),this.chiudiDialogo(),this.dialogoCliente(t)}if(t.insistenze>=3)return this.chiudiDialogo(),t.bruciato=!0,this.tostino(`${t.nome} se ne va. Insistere oltre non serve.`,"info",4e3);let f=["No guarda, hai sbagliato persona.","Non mi interessa.","Lasciami stare.","Non ho soldi, e comunque no."];e(f[Math.floor(Math.random()*f.length)],"ti sta dicendo di no")}dialogoCliente(t){let e=this.g.stato,i=Ht[t.merce],n=new Wa(t,this.g.mercato,this.g.quartiereGiocatore,e);this.trattativa=n;let s=t.tipo==="civetta"&&e.grado("occhio")>=2;if(!n.haRoba){this.apriDialogo(t.nome,"cliente",`Cerchi ${i.nome}? Io ne ho zero.`,"",[{testo:"Chiudi",azione:()=>this.chiudiDialogo()}]);return}let r=l=>{let c=Math.round(n.prezzoSuggerito),h=Math.max(1,Math.round(n.prezzoMercato*.4)),u=Math.round(n.prezzoMercato*2.8);this.apriDialogo(t.nome,t.tipo==="fisso"?"cliente fisso":s?"\u26A0 ha l'aria di uno sbirro":"cliente",l,`<div class="trattativa">
          <div class="trattativa-riga"><span>Vuole</span><b>${n.quantita} ${i.unita} di ${i.nome}</b></div>
          <div class="trattativa-riga"><span>Prezzo di mercato qui</span><b>${Ct(n.prezzoMercato)} / ${i.unita}</b></div>
          <div class="trattativa-riga"><span>Ti resta in zaino</span><b>${e.quanti(i.id)} ${i.unita}</b></div>
          <div class="prezzo-grande" id="tr-prezzo">${Ct(c)}</div>
          <input type="range" id="tr-slider" min="${h}" max="${u}" value="${c}" step="1" />
          <div class="trattativa-riga" style="color:var(--testo-fioco);font-size:12px">
            <span>totale <b id="tr-totale">${Ct(c*n.quantita)}</b></span>
            <span>tentativo ${n.tentativi+1}/${n.maxTentativi}</span>
          </div>
          <div class="umore"><i style="width:${n.umore*100}%"></i></div>
        </div>`,[{testo:"Proponi",classe:"primario",azione:()=>this._proponi(n,r)},...s?[{testo:"Riconoscilo e vattene",classe:"pericolo",azione:()=>this._schivaCivetta(t)}]:[],{testo:"Lascia perdere",azione:()=>this.chiudiDialogo()}],d=>{let f=d.querySelector("#tr-slider"),p=d.querySelector("#tr-prezzo"),v=d.querySelector("#tr-totale");f.oninput=()=>{p.textContent=Ct(+f.value),v.textContent=Ct(+f.value*n.quantita)},this._slider=f})},a=t.tipo==="fisso"?`Ehi. Il solito: ${n.quantita} ${i.unita}.`:s?`Ciao... senti, avresti ${i.nome}? \u2014 Ha le scarpe sbagliate e ti guarda le mani.`:`Hai ${i.nome}? Me ne servirebbero ${n.quantita}.`;r(a)}_proponi(t,e){let i=+this._slider.value,n=t.valuta(i);if(n.esito===ln.ACCETTA){if(t.npc.tipo==="civetta"){this.chiudiDialogo(),this.g.arrestoInFlagranza();return}let s=t.concludi(i,this.g.popolazione,this.g.citta,this.g.giocatore);if(this.chiudiDialogo(),t.npc.appuntamento)this.g.concludiAppuntamento(t.npc.appuntamento);else{let r=this.g.telefono.aggiungiContatto(t.npc,this.g.quartiereGiocatore);r&&this.tostino(`${r.nome} ti ha dato il numero. \xC8 in rubrica (P).`,"ok",5e3)}this.tostino(`Venduto: +${Ct(s.totale)}`,"ok"),s.svenduto&&this.tostino("L'hai data via troppo bassa. Controlla il mercato.","attenzione"),s.nuovoFisso&&this.tostino(`${t.npc.nome} \xE8 diventato un cliente fisso.`,"ok"),this.g.popolazione.rimuoviNpc(t.npc),this.g.controllaCapitolo();return}if(n.esito===ln.OFFESO||n.esito===ln.RIFIUTA){this.chiudiDialogo(),this.tostino(n.battuta,"male"),t.npc.tipo==="fisso"&&(this.g.stato.stat.clientiPersi++,this.g.stato.stat.clientiFissi=Math.max(0,this.g.stato.stat.clientiFissi-1)),this.g.popolazione.rimuoviNpc(t.npc);return}n.controproposta&&(this._ultimaControproposta=n.controproposta),e(n.battuta),n.controproposta&&this._slider&&(this._slider.value=n.controproposta,this._slider.dispatchEvent(new Event("input")))}_schivaCivetta(t){let e=this.g.stato;e.stat.civettaSchivato++,e.segna("civettaSchivato",1),e.aggiungiXp(150),e.aggiungiHeat(-4),this.chiudiDialogo(),this.tostino("Ti sei girato e sei andato via. Era un civetta.","ok"),this.g.popolazione.rimuoviNpc(t),this.g.controllaCapitolo()}dialogoFornitore(t){let e=this.g.stato,i=Ge.filter(a=>a.tier<=Math.min(t.tierMax,e.tierMax)),n=wh.filter(a=>a.tier<=e.tierMax),s=i.map(a=>{let l=this.g.mercato.prezzoFornitore(a.id,t)*e.scontoFornitore,h=(this.g.mercato.prezzoMedioCitta(a.id)/l-1)*100,u=Math.floor(e.contanti/l),d=Math.floor((e.capienza-e.ingombro)/a.ingombro),f=Math.max(0,Math.min(u,d,400));return`<tr ${h>45?'class="evidenza"':""}>
        <td><b>${a.nome}</b> <span class="tag t${a.tier}">T${a.tier}</span></td>
        <td class="num">${Ct(l)}</td>
        <td class="num" style="color:${h>20?"var(--neon)":h<0?"var(--male)":"inherit"}">${h>0?"+":""}${h.toFixed(0)}%</td>
        <td class="num"><input type="number" min="0" max="${f}" value="0" data-q="${a.id}" ${f===0?"disabled":""}></td>
        <td class="num"><button class="btn" data-compra="${a.id}" data-prezzo="${l}" ${f===0?"disabled":""}>Compra</button></td>
      </tr>`}).join(""),r=n.map(a=>`
      <tr><td><b>${a.nome}</b></td><td class="num">${Ct(a.prezzo)}</td><td colspan="2">${a.desc}</td>
      <td class="num"><button class="btn" data-oggetto="${a.id}" ${e.contanti<a.prezzo||a.permanente&&e.permanenti.has(a.id)?"disabled":""}>
        ${a.permanente&&e.permanenti.has(a.id)?"Gi\xE0 tuo":"Compra"}</button></td></tr>`).join("");this.apriDialogo(t.nome,"fornitore",t.tierMax>=4?"Dimmi cosa ti serve. E non farmi perdere tempo.":"Ciao. Guarda pure, ma non toccare.",`<div style="max-height:46vh;overflow:auto">
        <table><tr><th>Merce</th><th class="num">Prezzo</th><th class="num">Margine</th><th class="num">Q.t\xE0</th><th></th></tr>${s}</table>
        <div class="sezione-titolo">Attrezzatura</div>
        <table>${r}</table>
      </div>
      <p class="nota">Contanti ${Ct(e.contanti)} \xB7 spazio libero ${(e.capienza-e.ingombro).toFixed(0)}.
      Il margine \xE8 calcolato sul prezzo medio citt\xE0: nei quartieri giusti si guadagna di pi\xF9.</p>`,[{testo:"Chiudi",azione:()=>this.chiudiDialogo()}],a=>{a.querySelectorAll("[data-compra]").forEach(l=>{l.onclick=()=>{let c=l.dataset.compra,h=+l.dataset.prezzo,u=a.querySelector(`[data-q="${c}"]`),d=Math.max(0,Math.floor(+u.value));if(!d)return;let f=this.g.compraDaFornitore(c,d,h);this.tostino(f.testo,f.ok?"ok":"male"),f.ok&&this.dialogoFornitore(t)}}),a.querySelectorAll("[data-oggetto]").forEach(l=>{l.onclick=()=>{let c=this.g.compraOggetto(l.dataset.oggetto);this.tostino(c.testo,c.ok?"ok":"male"),c.ok&&this.dialogoFornitore(t)}})})}dialogoSpacciatore(t){let e=this.g.stato,i=Ht[t.merce],n=this.g.mercato.prezzo(t.merce,this.g.quartiereGiocatore),s=Math.round(n*t.ricarico),r=s*t.quantita,a=e.contanti>=r;this.apriDialogo(t.nome,"spacciatore",`Ho ${i.nome}. ${t.quantita} ${i.unita} per ${r} \u20AC. Prendere o lasciare.`,`<div class="trattativa">
        <div class="trattativa-riga"><span>Merce</span><b>${i.nome}</b></div>
        <div class="trattativa-riga"><span>Quantit\xE0 dichiarata</span><b>${t.quantita} ${i.unita}</b></div>
        <div class="trattativa-riga"><span>Prezzo</span><b>${Ct(s)} / ${i.unita}</b></div>
        <div class="trattativa-riga"><span>Rispetto al mercato</span>
          <b style="color:${t.ricarico>1.3?"var(--male)":t.ricarico<1.05?"var(--neon)":"inherit"}">
          ${t.ricarico>1?"+":""}${((t.ricarico-1)*100).toFixed(0)}%</b></div>
        <div class="trattativa-riga"><span>Purezza</span><b style="color:var(--testo-fioco)">non la sai finch\xE9 non la usi</b></div>
      </div>
      <p class="nota">Comprare in strada \xE8 questo: paghi un prezzo certo per una qualit\xE0 incerta.
      Craving attuale ${e.craving.toFixed(0)}%.</p>`,[{testo:`Compra \u2014 ${Ct(r)}`,classe:"primario",disabilitato:!a,azione:()=>{let l=this.g.compraDaSpacciatore(t,s);this.chiudiDialogo(),this.tostino(l.testo,l.tipo)}},{testo:"Contratta",azione:()=>{t.ricarico=Math.max(.85,t.ricarico-.12-Math.random()*.15),Math.random()<.25?(this.chiudiDialogo(),this.tostino("Si \xE8 stufato e se n'\xE8 andato.","male"),this.g.popolazione.rimuoviNpc(t)):this.dialogoSpacciatore(t)}},{testo:"Lascia stare",azione:()=>this.chiudiDialogo()}])}dialogoLuogo(t){let e=this.g.stato;if(t.tipo==="fornitore")return this.dialogoFornitore(t);if(t.tipo==="casa"){let i=e.caseProprie?.includes(t.id)||t.id==="casa_villa",n=[];return i?(n.push({testo:"Dormi fino a domani",classe:"primario",azione:()=>{this.chiudiDialogo(),this.g.dormi()}}),n.push({testo:"Lascia la roba in casa",azione:()=>{this.chiudiDialogo(),this.g.deposita()}})):t.prezzo&&n.push({testo:`Affitta \u2014 ${Ct(t.prezzo)}`,classe:"primario",disabilitato:e.contanti<t.prezzo,azione:()=>{this.chiudiDialogo(),this.g.affitta(t)}}),n.push({testo:"Esci",azione:()=>this.chiudiDialogo()}),this.apriDialogo(t.nome,"casa",i?"Quattro mura. Qui l'attenzione della polizia cala in fretta.":'Il cartello dice "affittasi". Il portiere ti guarda male.',e.deposito&&Object.keys(e.deposito).length?`<div class="trattativa">${Object.entries(e.deposito).map(([s,r])=>`<div class="trattativa-riga"><span>${Ht[s].nome}</span><b>${r}</b></div>`).join("")}</div>`:"",n)}if(t.tipo==="ospedale")return this.apriDialogo(t.nome,"ospedale",this.g.cliente?.inOverdose?"Ti prendono di peso e ti portano dentro.":"Accettazione. Sala d'attesa piena.",'<p class="nota">Cure: 300 \u20AC, ti rimettono in piedi e ti fanno perdere sei ore.</p>',[{testo:"Fatti curare \u2014 300 \u20AC",classe:"primario",disabilitato:e.contanti<300,azione:()=>{this.chiudiDialogo(),this.g.cliente.soccorso(),this.tostino("Rimesso in piedi.","ok")}},{testo:"Esci",azione:()=>this.chiudiDialogo()}]);if(t.tipo==="pegni"){let i=Math.min(e.contanti,5e3+e.grado("contabile")*4e3),n=this.g.giocatore.veicolo??this.g.parco.vicino(this.g.giocatore.posizione,9),s=n?this.g.segnalazioni.segnalata(n.targa):!1,r=this.g.segnalazioni.costoDocumenti();return this.apriDialogo(t.nome,"riciclaggio","Ti prendo il 22%. Se non ti va, la porta \xE8 quella.",`<div class="trattativa">
          <div class="trattativa-riga"><span>Contante sporco</span><b>${Ct(e.contanti)}</b></div>
          <div class="trattativa-riga"><span>Gi\xE0 ripulito</span><b>${Ct(e.pulito)}</b></div>
          <div class="trattativa-riga"><span>Massimo oggi</span><b>${Ct(i)}</b></div>
        </div>
        <p class="nota">Il contante pulito non si perde con l'arresto ed \xE8 l'unico che conta per uscirne.</p>
        ${n?`<div class="trattativa" style="margin-top:10px">
          <div class="trattativa-riga"><span>Il mezzo l\xE0 fuori</span><b>${n.def.nome} \u2014 ${n.targa}</b></div>
          <div class="trattativa-riga"><span>Stato</span><b style="color:${s?"var(--male)":"var(--neon)"}">${s?"segnalato rubato":"pulito"}</b></div>
        </div>`:""}`,[{testo:`Ripulisci ${Ct(i)}`,classe:"primario",disabilitato:i<100,azione:()=>{this.chiudiDialogo(),this.g.ricicla(i)}},...n?[{testo:`Documenti nuovi al mezzo \u2014 ${Ct(r)}`,disabilitato:e.contanti<r||!s,azione:()=>{this.chiudiDialogo(),this.g.rifaiDocumenti(n)}}]:[],{testo:"Esci",azione:()=>this.chiudiDialogo()}])}if(t.tipo==="centrale")return this.apriDialogo(t.nome,"commissariato","Non \xE8 un posto dove entrare di tua volont\xE0.",e.debito>0?`<p class="nota">Debito con la giustizia: <b style="color:var(--male)">${Ct(e.debito)}</b>.</p>`:"",[...e.debito>0?[{testo:`Salda il debito \u2014 ${Ct(e.debito)}`,classe:"primario",disabilitato:e.contanti<e.debito,azione:()=>{this.chiudiDialogo(),this.g.saldaDebito()}}]:[],{testo:"Vattene",azione:()=>this.chiudiDialogo()}]);this.chiudiDialogo()}dialogoRapina(t){let e=this.g.stato,i=Math.round(this.g._probabilitaRissa()*100);this.apriDialogo(t.nome,"rapinatore",e.minaccia>.5?"Ehi... no, scusa. Niente, ho sbagliato persona.":"Dammi quello che hai. Subito.",`<p class="nota">Se reagisci hai circa <b>${i}%</b> di avere la meglio:
        se vinci tieni tutto e gli prendi quello che ha in tasca, se perdi ti porta via
        il 40% dei contanti e met\xE0 di una merce.<br />
        Consegnare costa un quarto dei contanti, ma \xE8 sicuro.</p>`,[{testo:"Consegna tutto",azione:()=>{this.chiudiDialogo(),this.g.subisciRapina(t,!0)}},{testo:`Reagisci (${i}%)`,classe:"pericolo",azione:()=>{this.chiudiDialogo(),this.g.subisciRapina(t,!1)}},...e.minaccia>.5?[{testo:"Mostragli il ferro",azione:()=>{this.chiudiDialogo(),this.tostino("Si \xE8 girato e se n'\xE8 andato.","ok"),this.g.popolazione.rimuoviNpc(t)}}]:[]])}};var Qa=class{constructor(t){this.g=t,this.aperto=!1,this.schermata="home",this.chatAperta=null,this._costruisci()}_costruisci(){let t=document.createElement("div");t.id="cellulare",t.hidden=!0,t.innerHTML=`
      <div class="tel-corpo">
        <div class="tel-notch"></div>
        <div class="tel-barra">
          <span id="tel-ora">08:00</span>
          <span id="tel-titolo">My Dealer</span>
          <span id="tel-batteria">\u25AE\u25AE\u25AE</span>
        </div>
        <div class="tel-schermo" id="tel-schermo"></div>
        <button class="tel-home" id="tel-home" title="Home"></button>
      </div>`,document.body.appendChild(t),this.el=t,this.schermo=t.querySelector("#tel-schermo"),t.querySelector("#tel-home").onclick=()=>this.vai("home"),t.addEventListener("keydown",e=>e.stopPropagation()),t.addEventListener("keyup",e=>e.stopPropagation())}apri(){this.aperto=!0,this.el.hidden=!1,document.exitPointerLock?.(),this.vai(this.schermata==="chat"?"messaggi":this.schermata)}chiudi(){this.aperto=!1,this.el.hidden=!0,this.chatAperta=null}toggle(){this.aperto?this.chiudi():this.apri()}vai(t,e=null){this.schermata=t,t==="chat"&&(this.chatAperta=e),this.disegna()}aggiornaBarra(){this.aperto&&(this.el.querySelector("#tel-ora").textContent=An(this.g.stato.minuti))}disegna(){let t=this.g.stato,e=this.g.telefono;if(this.el.querySelector("#tel-ora").textContent=An(t.minuti),this.schermata==="home"){this.el.querySelector("#tel-titolo").textContent="Home";let i=(n,s,r,a)=>`
        <button class="tel-app" data-vai="${n}">
          <span class="tel-icona">${r}</span>
          <span>${s}</span>
          ${a?`<i class="tel-badge">${a}</i>`:""}
        </button>`;this.schermo.innerHTML=`
        <div class="tel-griglia">
          ${i("messaggi","Messaggi","\u2709",t.nonLetti||0)}
          ${i("contatti","Rubrica","\u2630",e.contatti.length)}
          ${i("appuntamenti","Appuntamenti","\u25CE",t.appuntamenti.length)}
          ${i("impostazioni","SIM","\u2699",0)}
        </div>
        <p class="tel-nota">Con i clienti in rubrica non si contratta in strada:
        ci si scrive, si concorda e ci si trova. Scrivi come scriveresti davvero.</p>`,this._collega();return}if(this.schermata==="messaggi"||this.schermata==="contatti"){let i=this.schermata==="messaggi"?"Messaggi":"Rubrica",n=this.schermata==="contatti";this.el.querySelector("#tel-titolo").textContent=i;let s=n?`
        <div class="tel-scheda">
          <b>Nuovo contatto</b>
          <input id="tel-nuovo-nome" type="text" placeholder="Nome o soprannome" maxlength="28" />
          <input id="tel-nuovo-num" type="text" placeholder="Numero (vuoto = ne genera uno)" maxlength="20" />
          <button class="tel-btn-ok" id="tel-salva-contatto">Salva in rubrica</button>
        </div>`:"";if(!e.contatti.length){this.schermo.innerHTML=`${s}<p class="tel-vuoto">Rubrica vuota.<br><br>
          I clienti ci finiscono da soli dopo che hai concluso con loro in strada.
          Oppure li aggiungi tu${n?" qui sopra":" dalla Rubrica"}.</p>`,this._collega();return}this.schermo.innerHTML=s+`<div class="tel-lista">${e.contatti.map(r=>{let a=e.chat(r.id),l=a[a.length-1],c=t.appuntamenti.find(h=>h.contattoId===r.id);return`<div class="tel-riga-box">
          <button class="tel-riga" data-chat="${r.id}">
            <div class="tel-riga-alto">
              <b>${r.nome}</b>
              <span class="tel-fiducia" title="fiducia ${r.fiducia}">${"\u25CF".repeat(Math.max(1,Math.round(r.fiducia/25)))}</span>
            </div>
            <div class="tel-riga-basso">${n?`${r.numero??"\u2014"} \xB7 ${ne[r.quartiere].nome}`:`${c?'<span class="tel-app-attivo">appuntamento in corso</span> \xB7 ':""}${l?`${l.da==="io"?"Tu: ":""}${l.testo.slice(0,44)}${l.testo.length>44?"\u2026":""}`:"nessun messaggio"}`}</div>
          </button>
          ${n?`<div class="tel-riga-azioni">
            <button data-rinomina="${r.id}">rinomina</button>
            <button data-elimina="${r.id}">elimina</button>
          </div>`:""}
        </div>`}).join("")}</div>`,this._collega();return}if(this.schermata==="chat"){let i=e.contatto(this.chatAperta);if(!i)return this.vai("messaggi");this.el.querySelector("#tel-titolo").textContent=i.nome,t.nonLetti=0;let n=e.chat(i.id);this.schermo.innerHTML=`
        <div class="tel-chat" id="tel-chat">
          ${n.map(r=>`<div class="tel-bolla ${r.da}">${r.testo}
            <i>${An(r.minuti)}</i></div>`).join("")}
          ${this.scrivendo?'<div class="tel-bolla lui tel-puntini"><span></span><span></span><span></span></div>':""}
        </div>
        <div class="tel-scrivi">
          <input id="tel-input" type="text" placeholder="Scrivi\u2026" autocomplete="off" maxlength="120" />
          <button id="tel-invia">Invia</button>
        </div>
        <div class="tel-suggerimenti">
          <button data-frase="Ciao, che ti serve?">saluta</button>
          <button data-frase="Ho la roba, quanti te ne servono?">disponibilit\xE0</button>
          <button data-frase="Quanto mi dai?">prezzo</button>
          <button data-frase="Dove ci vediamo?">luogo</button>
          <button data-frase="Ok, ci sto.">conferma</button>
        </div>`,this._collega();let s=this.schermo.querySelector("#tel-chat");s.scrollTop=s.scrollHeight,this.schermo.querySelector("#tel-input").focus();return}if(this.schermata==="appuntamenti"){if(this.el.querySelector("#tel-titolo").textContent="Appuntamenti",!t.appuntamenti.length){this.schermo.innerHTML=`<p class="tel-vuoto">Nessun appuntamento.<br><br>
          Si fissano scrivendo a un contatto e confermando con "ok".</p>`;return}let i=t.giorno*1440+t.minuti;this.schermo.innerHTML=`<div class="tel-lista">${t.appuntamenti.map(n=>{let s=Ht[n.merce],r=Math.max(0,n.scadenzaMinuti-i),a=t.quanti(n.merce);return`<div class="tel-scheda">
          <b>${n.nome}</b> \u2014 ${ne[n.quartiere].nome}
          <div>${n.quantita} ${s.unita} di ${s.nome} \xB7 ${Ct(n.prezzo)}/${s.unita} \xB7 totale <b>${Ct(n.prezzo*n.quantita)}</b></div>
          <div class="${a>=n.quantita?"tel-ok":"tel-male"}">
            hai ${a} ${s.unita} in zaino${a>=n.quantita?"":" \u2014 non basta"}</div>
          <div class="${r<20?"tel-male":"tel-fioco"}">scade tra ${Math.round(r)} minuti</div>
        </div>`}).join("")}</div>
      <p class="tel-nota">Il punto d'incontro \xE8 segnato in giallo sul radar.</p>`;return}this.schermata==="impostazioni"&&(this.el.querySelector("#tel-titolo").textContent="SIM",this.schermo.innerHTML=`
        <div class="tel-scheda">
          <b>Brucia la SIM</b>
          <div class="tel-fioco">Abbassa l'attenzione della polizia di 30 punti.
          Cancella <b>tutti</b> i ${e.contatti.length} contatti e gli appuntamenti.
          I numeri in rubrica sono prove: \xE8 per questo che funziona.</div>
          <button class="tel-btn-male" id="tel-brucia">Brucia \u2014 perdi ${e.contatti.length} contatti</button>
        </div>
        <div class="tel-scheda">
          <b>Numero attuale</b>
          <div class="tel-fioco">${t.numeroTelefono??"+39 3\u2022\u2022 \u2022\u2022\u2022 \u2022\u2022\u2022\u2022"}</div>
        </div>`,this._collega())}_collega(){this.schermo.querySelectorAll("[data-vai]").forEach(s=>{s.onclick=()=>this.vai(s.dataset.vai)}),this.schermo.querySelectorAll("[data-chat]").forEach(s=>{s.onclick=()=>this.vai("chat",s.dataset.chat)}),this.schermo.querySelectorAll("[data-frase]").forEach(s=>{s.onclick=()=>{let r=this.schermo.querySelector("#tel-input");r.value=s.dataset.frase,r.focus()}});let t=this.schermo.querySelector("#tel-input"),e=this.schermo.querySelector("#tel-invia");if(t){let s=async()=>{let r=t.value.trim();if(!r)return;t.value="";let a=this.chatAperta;this.scrivendo=!0,this.disegna();try{await this.g.inviaMessaggio(a,r)}finally{this.scrivendo=!1,this.aperto&&this.chatAperta===a&&this.disegna()}};t.onkeydown=r=>{r.key==="Enter"&&s()},e.onclick=s}let i=this.schermo.querySelector("#tel-brucia");i&&(i.onclick=()=>{this.g.bruciaSim(),this.vai("home")});let n=this.schermo.querySelector("#tel-salva-contatto");n&&(n.onclick=()=>{let s=this.schermo.querySelector("#tel-nuovo-nome").value,r=this.schermo.querySelector("#tel-nuovo-num").value,a=this.g.telefono.aggiungiManuale(s,r,this.g.quartiereGiocatore);this.g.ui.tostino(a.testo,a.ok?"ok":"male"),a.ok&&this.disegna()}),this.schermo.querySelectorAll("[data-rinomina]").forEach(s=>{s.onclick=r=>{r.stopPropagation();let a=this.g.telefono.contatto(s.dataset.rinomina),l=prompt("Nuovo nome per il contatto:",a?.nome??"");l&&this.g.telefono.rinomina(s.dataset.rinomina,l)&&this.disegna()}}),this.schermo.querySelectorAll("[data-elimina]").forEach(s=>{s.onclick=r=>{r.stopPropagation();let a=this.g.telefono.contatto(s.dataset.elimina);a&&confirm(`Eliminare ${a.nome} dalla rubrica?`)&&(this.g.telefono.elimina(s.dataset.elimina),this.disegna())}})}};var nb=new st("#fff0d2"),sb=new st("#ffa361"),ob=new st("#6f86c8"),rb=new st("#a9c9f2"),ab=new st("#ffc08a"),lb=new st("#5b6d9e"),cb=new st("#8fbce8"),hb=new st("#ff9d5c"),qh=1/.7,$h=class{constructor(){this.canvas=document.querySelector("#scena"),this.inPausa=!0,this.avviato=!1,this.orologio=new Bs,this.negozio=new ka,this.negozio.inizializza(),this.comandi=new qa;let t=localStorage.getItem("mydealer_touch");this.tattile=t===null?Xa():t==="1",this._collegaMenu()}_collegaMenu(){document.querySelectorAll(".ruolo").forEach(e=>{e.onclick=()=>{Ui.esisteSalvataggio()&&!confirm(`Hai una partita in corso nel salvataggio automatico.
Iniziandone una nuova verr\xE0 sovrascritta.

Continuo? (per tenerla, annulla e mettila in una casella da \xABPartite salvate\xBB)`)||this.avvia(new Ui(e.dataset.ruolo))}}),document.querySelector("#btn-caselle").onclick=()=>this.apriCaselleDalMenu();let t=document.querySelector("#btn-continua");Ui.esisteSalvataggio()&&(t.hidden=!1,t.onclick=()=>{let e=Ui.carica();e?this.avvia(e):alert("Salvataggio illeggibile.")}),document.querySelector("#btn-impostazioni").onclick=()=>this.apriImpostazioniDalMenu(),document.querySelector("#btn-info").onclick=()=>{alert(`MY DEALER \u2014 Porto Nero

Citt\xE0 e personaggi generati da codice; i veicoli sono modelli liberi.
Crediti: Comrade1280, Nadia Ribitis, Liberi Arcano, Jakob_Forseth (CC-BY);
Quaternius e Kenney (CC0).
I comandi si cambiano da \xABImpostazioni e comandi\xBB.
Su telefono e tablet i comandi a schermo compaiono da soli.

Opera di finzione. Non contiene procedure, dosi n\xE9 istruzioni d'uso reali.`)}}apriCaselleDalMenu(){let t=document.querySelector("#pannello"),e=document.querySelector("#pannello-corpo");document.querySelector("#pannello-titolo").textContent="Partite salvate",document.querySelector("#pannello-chiudi").onclick=()=>{t.hidden=!0};let i=()=>{e.innerHTML=Ka(!1),Ja(e,{stato:null,carica:n=>{t.hidden=!0,this.avvia(n)},avviso:n=>alert(n),ridisegna:i})};i(),t.hidden=!1}apriImpostazioniDalMenu(){let t=document.querySelector("#pannello"),e=document.querySelector("#pannello-corpo");document.querySelector("#pannello-titolo").textContent="Impostazioni",document.querySelector("#pannello-chiudi").onclick=()=>{t.hidden=!0};let i=()=>{e.innerHTML=Ya(this.comandi,this.tattile),Za(e,{comandi:this.comandi,tostino:n=>{this._notaMenu=n},ridisegna:i,setTattile:n=>{this.tattile=n,this.touch?.mostra(n)},ascolto:{get:()=>this._ascolto,set:n=>{this._ascolto=n}}})};i(),t.hidden=!1}async avvia(t){document.querySelector("#menu").hidden=!0,document.querySelector("#caricamento").hidden=!1,await new Promise(i=>setTimeout(i,30)),this.stato=t,this.mercato=new Ua(t.seed);for(let i=0;i<t.giorno;i++)this.mercato.nuovoGiorno();if(await Promise.all([dp(),Df(),Gf()]),this._costruisciScena(),this.citta=new Sa(this.scena,t.seed),this.giocatore=new Ra(this.scena,this.citta,t,this.comandi),this.popolazione=new Ca(this.scena,this.citta,t,t.seed+1),this.polizia=new Pa(this.scena,this.citta,t,t.seed+2),this.parco=new Na(this.scena,this.citta,t.seed+3),this.tattile&&(this.popolazione.max=34,this.parco.max=14),this.cliente=new Ba(t),this.segnalazioni=new Ia(t),this.polizia.segnalazioni=this.segnalazioni,this.scasso=null,this.telefono=new Ga(t,this.mercato),this._costruisciComposer(),this._costruisciLuciStrada(),t.nuovo&&t.ruolo==="cliente"){let i=this.citta.luoghi.find(n=>n.id==="casa_villa");i&&this.giocatore.gruppo.position.set(i.pos.x,0,i.pos.z+4)}this.ui=new ja(this),this.cellulare=new Qa(this),this.touch=new $a(this),this.touch.mostra(this.tattile),this.telefono.onNotifica=(i,n)=>{this.cellulare.aperto||this.ui.tostino(`\u{1F4F1} ${i.nome}: ${n}`,"info",6e3)},this.popolazione.onInvestimento=(i,n)=>this._dopoInvestimento(i,n),this.polizia.onArresto=i=>this._dopoArresto(i),this.polizia.onGrida=i=>this.ui.tostino(i,"male",2500),this.cliente.onEvento=(i,n)=>{if(n==="fine")return this._finePartita();this.ui.tostino(i,n)},this._collegaInputGioco(),document.querySelector("#caricamento").hidden=!0,this.ui.mostraHud(!0),this.avviato=!0,this.inPausa=!1,this.orologio.start();let e=ne[this.quartiereGiocatore];this.ui.tostino(`${e.nome} \u2014 ${e.sottotitolo}`,"info",6e3),t.nuovo&&(setTimeout(()=>this.ui.tostino(t.capitoloCorrente?.testo??"","info",9e3),1200),setTimeout(()=>this.ui.tostino(this.tattile?"Pollice sinistro per camminare, trascina a destra per guardarti attorno.":"Clic per catturare il mouse. Punti gialli sul radar = fornitori.","info",8e3),3e3)),t.nuovo=!1,this._loop()}_costruisciScena(){this.scena=new Hr,this.scena.fog=new kr(724240,80,400),this.renderer=new xo({canvas:this.canvas,antialias:!this.tattile,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.tattile?1.5:2)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=zc,this.renderer.toneMapping=Io,this.renderer.toneMappingExposure=1.05,this.ambiente=new sa(10467028,2763312,1.1),this.scena.add(this.ambiente),this._riflessi(),this.sole=new Fs(16767408,2),this.sole.position.set(60,110,40),this.sole.castShadow=!0,this.sole.shadow.mapSize.set(this.tattile?1024:2048,this.tattile?1024:2048);let t=78;Object.assign(this.sole.shadow.camera,{left:-t,right:t,top:t,bottom:-t,near:1,far:400}),this.sole.shadow.camera.updateProjectionMatrix(),this.scena.add(this.sole,this.sole.target),this.matCielo=new Pe({side:Ye,depthWrite:!1,uniforms:{alto:{value:new st(1784412)},basso:{value:new st(724240)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);} ",fragmentShader:`varying vec3 vP; uniform vec3 alto; uniform vec3 basso;
        void main(){ float h = clamp(normalize(vP).y * 0.5 + 0.5, 0.0, 1.0);
        gl_FragColor = vec4(mix(basso, alto, pow(h, 0.7)), 1.0);} `}),this.cielo=new Lt(new Si(430,24,16),this.matCielo),this.scena.add(this.cielo),addEventListener("resize",()=>{this.renderer.setSize(innerWidth,innerHeight),this.composer?.setSize(innerWidth,innerHeight),this.bloom?.resolution.set(innerWidth,innerHeight),this.giocatore.camera.aspect=innerWidth/innerHeight,this.giocatore.camera.updateProjectionMatrix()})}_costruisciLuciStrada(){this.luciStrada=[];for(let t=0;t<6;t++){let e=new Os(16763274,0,46,1.35);e.castShadow=!1,this.scena.add(e),this.luciStrada.push(e)}}_aggiornaLuciStrada(t){if(!this.luciStrada)return;let e=this.giocatore.posizione,i=this.citta.lampioni.map(n=>({l:n,d:(n.x-e.x)**2+(n.z-e.z)**2})).sort((n,s)=>n.d-s.d).slice(0,this.luciStrada.length);this.luciStrada.forEach((n,s)=>{let r=i[s];if(!r||t<.05){n.intensity=0;return}n.position.set(r.l.x,7,r.l.z),n.intensity=t*62*Math.max(0,1-Math.sqrt(r.d)/78)})}_riflessi(){let t=document.createElement("canvas");t.width=64,t.height=32;let e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,32);i.addColorStop(0,"#9fc4e8"),i.addColorStop(.46,"#dfe9f2"),i.addColorStop(.54,"#8d8f92"),i.addColorStop(1,"#3a3c40"),e.fillStyle=i,e.fillRect(0,0,64,32);let n=new Mi(t);n.mapping=po;let s=new zs(this.renderer),r=s.fromEquirectangular(n).texture;s.dispose(),n.dispose(),vp(r)}_costruisciComposer(){if(this.tattile){this.composer=null;return}this.composer=new ga(this.renderer),this.composer.addPass(new va(this.scena,this.giocatore.camera)),this.bloom=new Hs(new Q(innerWidth,innerHeight),.35,.62,.72),this.composer.addPass(this.bloom),this.composer.addPass(new xa)}_collegaInputGioco(){this.canvas.onclick=()=>{!this.ui.aperto&&!this.touch?.attivo&&this.canvas.requestPointerLock()},addEventListener("keydown",t=>{if(!this.avviato||/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName??"")&&t.code!=="Escape"||this.ui.inAscoltoTasto)return;let i=this.comandi.azionePer(t.code);if(i==="zaino"&&t.preventDefault(),i&&this.azioneRapida(i),t.code==="KeyN"&&this.stato.ruolo==="cliente"&&!this.ui.aperto){let n=this.cliente.usaNaloxone();this.ui.tostino(n.testo,n.ok?"ok":"male")}})}azioneRapida(t){let e=this.ui;if(e)switch(t){case"interagisci":e.aperto||this._interagisci();break;case"veicolo":e.aperto||this._saliScendi();break;case"telefono":(!e.aperto||this.cellulare.aperto)&&this.cellulare.toggle();break;case"zaino":e.togglePannello("inventario",()=>e.pannelloInventario());break;case"mercato":e.togglePannello("mercato",()=>e.pannelloMercato());break;case"abilita":e.togglePannello("abilita",()=>e.pannelloAbilita());break;case"missioni":e.togglePannello("missioni",()=>e.pannelloMissioni());break;case"enciclopedia":e.togglePannello("codex",()=>e.pannelloCodex());break;case"menu":e.dialogoAperto?e.chiudiDialogo():e.pannelloAperto?e.chiudiPannello():this.cellulare.aperto?this.cellulare.toggle():e.pannelloMenu();break}}_loop(){requestAnimationFrame(()=>this._loop());let t=Math.min(.05,this.orologio.getDelta());if(this.avviato){if(this.inPausa?this.giocatore.aggiornaCamera(t):(this._avanzaTempo(t),this.giocatore.aggiorna(t),this.parco.aggiorna(t,this.giocatore.posizione),this.popolazione.aggiorna(t,this.giocatore.posizione),this.polizia.aggiorna(t,this.giocatore,this.popolazione),this.popolazione.investimenti(this.parco.veicoli,t),this._guidaSpericolata(t),this._aggiornaScasso(t),this._controllaDenunce(),this.telefono.aggiorna(t*qh,this.quartiereGiocatore),this._gestisciAppuntamenti(),this.cellulare.aggiornaBarra(),this.stato.ruolo==="cliente"&&this.cliente.aggiorna(t,t*qh),this._controllaProssimita(),this.stato.aggiornaSoglie()),this.cameraLibera){let e=this.giocatore.camera;e.position.set(...this.cameraLibera.pos),e.lookAt(...this.cameraLibera.target)}this._illuminazione(t),this.ui.aggiorna(),this.composer?this.composer.render(t):this.renderer.render(this.scena,this.giocatore.camera)}}_guidaSpericolata(t){let e=this.giocatore.veicolo;if(!e)return;let i=1-e.def.discrezione;e.kmh>e.def.velMax*.75&&this.stato.aggiungiHeat(t*.5*(.4+i)),this.giocatore.ultimoUrto>.45&&(this.stato.aggiungiHeat(this.giocatore.ultimoUrto*5*(.5+i)),this.giocatore.ultimoUrto=0,this.ui.tostino("Botta. Qualcuno si \xE8 girato.","attenzione",2200))}_dopoInvestimento(t,e){this.stato.aggiungiHeat(6+e*22),this.ui.tostino(e>.55?"L'hai preso in pieno. La gente urla, qualcuno sta chiamando.":"L'hai messo sotto. Si \xE8 alzato un putiferio.","male",3400),this.stato.scriviLog(`Hai investito ${t.nome??"un passante"}.`,"male");let i=t.qid;i&&(this.stato.reputazione[i]=Math.max(0,(this.stato.reputazione[i]??0)-(t.tipo==="passante"?1.5:4)))}_controllaDenunce(){let t=this.segnalazioni.aggiorna(this.stato.giorno*1440+this.stato.minuti);for(let e of t){let i=this.giocatore.veicolo?.targa===e;this.ui.tostino(i?`Hanno denunciato il furto: la targa ${e} \xE8 in lista. Mollalo.`:`Targa ${e} segnalata rubata.`,i?"male":"attenzione",7e3),this.stato.scriviLog(`Denunciato il furto della targa ${e}.`,"male")}}_avanzaTempo(t){let e=this.stato;e.minuti+=t*qh,e.minuti>=1440&&(e.minuti-=1440,this._nuovoGiorno())}_nuovoGiorno(){let t=this.stato;t.giorno++;let e=this.mercato.nuovoGiorno();t.heat<15&&(t.stat.giornatePulite++,t.segna("giornataPulita",1));for(let n of e)n.heat&&t.aggiungiHeat(n.heat*.4),n.heatDelta&&t.aggiungiHeat(n.heatDelta);let i=e[e.length-1];i&&this.ui.tostino(`${i.titolo} \u2014 ${i.testo}`,"attenzione",7e3),t.debito>0&&(t.debito=Math.round(t.debito*1.03)),t.scriviLog(`Giorno ${t.giorno}.`,"info"),t.salva(),this.controllaCapitolo()}_illuminazione(t){let e=this.stato.minuti/60,i=at(1-Math.max(0,Math.sin(e/24*Math.PI*2-Math.PI/2)*.5+.5)*1.6+.3,0,1),n=Math.cos(e/24*Math.PI*2-Math.PI);this.sole.intensity=Ri(.34,2.1,at(1-i,0,1)),this.sole.position.set(Math.cos(e/24*Math.PI*2-Math.PI/2)*140,Math.max(12,Math.sin(e/24*Math.PI*2-Math.PI/2)*150+30),70),this.sole.target.position.copy(this.giocatore.posizione),this.sole.position.add(this.giocatore.posizione);let s=at(1-Math.abs(n),0,1),r=at(s*(1-i)*1.15,0,1);this.sole.color.copy(nb).lerp(sb,r).lerp(ob,i),this.ambiente.intensity=Ri(1.25,.52,i),this.ambiente.color.copy(rb).lerp(ab,r*.7).lerp(lb,i),this.matCielo.uniforms.alto.value.setHSL(Ri(.56,.63,i),Ri(.55,.42,i),Ri(.52,.07,i)),this.matCielo.uniforms.basso.value.copy(cb).lerp(hb,r).multiplyScalar(Ri(1,.09,i)),this.scena.fog.color.copy(this.matCielo.uniforms.basso.value),this.cielo.position.copy(this.giocatore.posizione),this.citta.aggiornaIlluminazione(i),this._aggiornaLuciStrada(i),this.renderer.toneMappingExposure=Ri(1.02,1.24,i),this.bloom&&(this.bloom.strength=Ri(.1,.42,i*i),this.bloom.threshold=Ri(.9,.74,i))}get quartiereGiocatore(){let t=this.giocatore.posizione;return Ai(t.x,t.z)}quartierePos(t,e){return Ai(t,e)}_tasto(t){return this.tattile?"\u2299":Gi(this.comandi.tasti(t)[0])}_controllaProssimita(){let t=this.giocatore.posizione;if(this.scasso)return;if(this.giocatore.aBordo){let s=this.giocatore.veicolo;this._bersaglio=null;let r=this.segnalazioni.segnalata(s.targa);return this.ui.prompt(`<kbd>${this._tasto("veicolo")}</kbd> scendi \xB7 <b>${s.def.nome}</b> \xB7 ${s.targa} \xB7 ${s.kmh.toFixed(0)} km/h`+(r?' \xB7 <span style="color:var(--male)">SEGNALATO</span>':"")+(s.danno>.5?' \xB7 <span style="color:var(--oro)">malandato</span>':""))}let e=this.citta.luoghi.find(s=>Math.hypot(s.pos.x-t.x,s.pos.z-t.z)<s.raggio);if(e)return this._bersaglio={tipo:"luogo",luogo:e},this.ui.prompt(`<kbd>${this._tasto("interagisci")}</kbd> ${e.nome}`);let i=this.popolazione.bersaglio(t,3.6);if(i){this._bersaglio={tipo:"npc",npc:i};let s={cliente:"cliente",fisso:"cliente fisso",civetta:"cliente",spacciatore:"spacciatore",rapinatore:"\u26A0 tipo losco",passante:i.freddo?"gli hai gi\xE0 parlato":"attacca discorso"}[i.tipo]??"qualcuno";return this.ui.prompt(`<kbd>${this._tasto("interagisci")}</kbd> ${i.nome} \u2014 ${s}`)}let n=this.parco.vicino(t,3.8);if(n){this._bersaglio={tipo:"veicolo",veicolo:n};let s=n.def,r=n.rubato||this.stato.targheProprie?.includes(n.targa);return this.ui.prompt(`<kbd>${this._tasto("veicolo")}</kbd> ${r?"sali":"forza"} \u2014 <b>${s.nome}</b> <span style="color:var(--testo-fioco)">${s.anni} \xB7 ${s.velMax} km/h \xB7 vano ${s.vano} \xB7 ${n.targa}</span>`+(this.segnalazioni.segnalata(n.targa)?' <span style="color:var(--male)">segnalato</span>':""))}this._bersaglio=null,this.ui.prompt(null)}_saliScendi(){let t=this.stato;if(this.scasso)return this.scasso=null,this.ui.tostino("Lasciato perdere.","info",1500);if(this.giocatore.aBordo){let n=this.giocatore.veicolo;if(n.kmh>25)return this.ui.tostino("Troppo veloce per scendere.","attenzione",1800);t.vanoVeicolo=0,n.carico??={};let s=0,r=Object.keys(t.inventario).sort((a,l)=>Ht[a].tier-Ht[l].tier);for(let a of r)for(;t.ingombro>t.capienza&&t.quanti(a)>0;)t.togliMerce(a,1),n.carico[a]=(n.carico[a]??0)+1,s++;this.parco.guidato=null,this.giocatore.scendi(this.citta),s&&this.ui.tostino(`${s} unit\xE0 restano nel vano del ${n.def.nome}.`,"attenzione",5e3);return}let e=this._bersaglio;if(e?.tipo!=="veicolo")return;let i=e.veicolo;if(!i.rubato&&!t.targheProprie?.includes(i.targa)){this.scasso={veicolo:i,tempo:0,durata:rp(i.def)};return}this._saliSuMezzo(i)}_aggiornaScasso(t){let e=this.scasso;if(!e)return;if(Math.hypot(e.veicolo.mesh.position.x-this.giocatore.posizione.x,e.veicolo.mesh.position.z-this.giocatore.posizione.z)>4.5)return this.scasso=null,this.ui.tostino("Ti sei allontanato.","info",1500);if(e.tempo+=t,this.stato.aggiungiHeat(t*.9),this.ui.prompt(`Stai forzando il ${e.veicolo.def.nome}\u2026 <b>${Math.max(0,e.durata-e.tempo).toFixed(1)}s</b> \xB7 <kbd>${this._tasto("veicolo")}</kbd> annulla`),e.tempo<e.durata)return;let n=e.veicolo;this.scasso=null,n.rubato=!0;let s=Ai(n.mesh.position.x,n.mesh.position.z);this.segnalazioni.registraFurto(n.targa,s,this.stato.giorno*1440+this.stato.minuti);let r=this.popolazione.testimoni(this.giocatore.posizione,15);this.stato.aggiungiHeat(6+r*2.5),this.stato.aggiungiXp(45),this.stato.scriviLog(`Rubato un ${n.def.nome}, targa ${n.targa}.`,"attenzione"),this.ui.tostino(`${n.def.nome} forzato \u2014 targa ${n.targa}. ${r?`${r} persone ti hanno visto. `:""}Prima o poi lo denunciano.`,"attenzione",6e3),this._saliSuMezzo(n)}_saliSuMezzo(t){let e=this.stato;this.parco.guidato=t,this.giocatore.sali(t),e.vanoVeicolo=t.def.vano;let i=0;for(let[n,s]of Object.entries(t.carico??{}))e.aggiungiMerce(n,s),i+=s;t.carico={},this.ui.tostino(`${t.def.nome} \u2014 ${t.def.descrizione}`,"info",6e3),i&&this.ui.tostino(`Riprese ${i} unit\xE0 dal vano.`,"ok")}_interagisci(){let t=this._bersaglio;if(!t)return;if(document.exitPointerLock?.(),t.tipo==="luogo")return this.ui.dialogoLuogo(t.luogo);let e=t.npc;return e.tipo==="rapinatore"?this.ui.dialogoRapina(e):e.tipo==="spacciatore"?this.ui.dialogoSpacciatore(e):this.stato.ruolo==="cliente"?this.ui.tostino("Non hai niente da vendergli. Sei dall'altra parte, adesso.","info"):e.tipo==="passante"?this.ui.dialogoFreddo(e):this.ui.dialogoCliente(e)}compraDaFornitore(t,e,i){let n=this.stato,s=Ht[t],r=Math.round(i*e);return n.contanti<r?{ok:!1,testo:"Non hai abbastanza contante."}:n.puoiPortare(t,e)?(n.contanti-=r,n.aggiungiMerce(t,e),n.stat.acquisti++,n.stat.spesa+=r,n.segna("acquisti",1),e>=100&&n.segna("acquistoGrosso",e),n.aggiungiXp(e*.8),n.aggiungiHeat(s.calore*.25),n.scriviLog(`Comprate ${e} ${s.unita} di ${s.nome} per ${Ct(r)}.`,"info"),this.controllaCapitolo(),{ok:!0,testo:`${e} ${s.unita} di ${s.nome} \u2014 ${Ct(r)}`}):{ok:!1,testo:"Non ci sta nello zaino."}}compraOggetto(t){let e=this.stato,i=Xs[t];return i?e.contanti<i.prezzo?{ok:!1,testo:"Non hai abbastanza contante."}:i.permanente&&e.permanenti.has(t)?{ok:!1,testo:"Ce l'hai gi\xE0."}:(e.contanti-=i.prezzo,i.permanente?e.permanenti.add(t):e.oggetti[t]=(e.oggetti[t]??0)+1,{ok:!0,testo:`${i.nome} acquistato.`}):{ok:!1,testo:"Non esiste."}}usaOggetto(t){let e=this.stato;if(!((e.oggetti[t]??0)<=0)){if(t==="naloxone"){let i=this.cliente.usaNaloxone();return this.ui.tostino(i.testo,i.ok?"ok":"male")}e.oggetti[t]--,t==="burner"?(e.heat=Math.max(0,e.heat-25),this.ui.tostino("Numero bruciato. L'attenzione cala.","ok")):t==="panino"&&(e.stamina=at(e.stamina+40,0,100),e.salute=at(e.salute+6,0,100),this.ui.tostino("Meglio di niente.","ok"))}}compraDaSpacciatore(t,e){let i=this.stato,n=Ht[t.merce],s=e*t.quantita;if(i.contanti<s)return{ok:!1,testo:"Non hai i soldi.",tipo:"male"};i.contanti-=s;let r=t.onesto?t.quantita:Math.max(1,Math.round(t.quantita*(.45+Math.random()*.35)));i.aggiungiMerce(t.merce,r),i.stat.acquistiCliente++,i.segna("acquistiCliente",1),i.aggiungiHeat(n.calore*.4),this.popolazione.rimuoviNpc(t),this.controllaCapitolo();let a=t.onesto?`Presi ${r} ${n.unita} di ${n.nome}.`:`Ne conti ${r}, non ${t.quantita}. Ti ha fregato ed \xE8 gi\xE0 lontano.`;return i.scriviLog(a,t.onesto?"info":"male"),{ok:!0,testo:a,tipo:t.onesto?"info":"male"}}_malloppoRapinatore(t){if(t.malloppo!=null)return t.malloppo;let e=60+Math.floor(Math.random()*180);return t.malloppo=Math.round(e*(1+this.stato.livello*.35)),t.malloppo}_probabilitaRissa(){let t=this.stato,e=.45+t.difesa*.45+t.minaccia*.3+(t.salute/100-.5)*.3+(t.stamina/100-.5)*.2;return at(e,.3,.85)}subisciRapina(t,e){let i=this.stato;if(e){let l=Math.round(i.contanti*.25);i.contanti-=l,i.scriviLog(`Consegnato ${Ct(l)} a un rapinatore.`,"male"),this.ui.tostino(`Gli hai dato ${Ct(l)}. Se n'\xE8 andato senza toccarti.`,"attenzione"),this.popolazione.rimuoviNpc(t);return}let n=this._malloppoRapinatore(t);if(Math.random()<this._probabilitaRissa()){i.contanti+=n,i.aggiungiXp(150),i.salute=at(i.salute-6-Math.floor(Math.random()*8),0,100),i.stamina=at(i.stamina-25,0,100),i.segna?.("rissaVinta",1),i.scriviLog(`Rissa vinta: gli hai preso ${Ct(n)}.`,"ok"),this.ui.tostino(`L'hai steso e gli hai svuotato le tasche: ${Ct(n)}. Ti fa male una mano.`,"ok",6e3),this.popolazione.rimuoviNpc(t);return}let s=Math.round(i.contanti*.4);i.contanti-=s;let r=Object.keys(i.inventario),a="";if(r.length){let l=r[Math.floor(Math.random()*r.length)],c=Math.ceil(i.quanti(l)*.5);i.togliMerce(l,c),a=" e met\xE0 di quello che avevi nello zaino"}if(i.salute=at(i.salute-26,0,100),i.stamina=at(i.stamina-40,0,100),i.scriviLog(`Rissa persa: ${Ct(s)}${a?" e della merce":""}.`,"male"),this.ui.tostino(`Le hai prese. Ti ha portato via ${Ct(s)}${a}.`,"male",6e3),i.salute<=0)return this._finePartita();this.popolazione.rimuoviNpc(t)}arrestoInFlagranza(){this.ui.tostino("Era un civetta. Ti hanno preso in flagranza.","male",6e3),this.stato.aggiungiHeat(30),this.polizia.arresta()}_dopoArresto({cauzione:t}){this.ui.schermataFine("Fermato",`Sequestro totale della merce e ${Ct(t)} di cauzione. Hai passato la notte dentro. ${this.stato.debito>0?`Ti resta un debito di ${Ct(this.stato.debito)}: cresce del 3% al giorno.`:""}`);let e=this.citta.luoghi.find(i=>i.tipo==="centrale");e&&this.giocatore.gruppo.position.set(e.pos.x+6,0,e.pos.z+6),this.popolazione.svuota()}dormi(){let t=this.stato,e=(1440-t.minuti+420)%1440;t.minuti=420,this._nuovoGiorno(),t.heat=Math.max(0,t.heat-30),t.stamina=100,t.salute=at(t.salute+35,0,100),t.craving=0,this.ui.tostino(`Hai dormito ${(e/60).toFixed(0)} ore. Sei a posto: forze recuperate, testa libera, e in giro si sono un po' dimenticati di te.`,"ok",6e3)}deposita(){let t=this.stato;t.deposito??={};let e=0;for(let[i,n]of Object.entries(t.inventario))t.deposito[i]=(t.deposito[i]??0)+n,e+=n;t.inventario={},t.aggiungiHeat(-8),this.ui.tostino(e?`${e} unit\xE0 al sicuro in casa.`:"Non avevi niente addosso.","ok")}affitta(t){let e=this.stato;e.contanti<t.prezzo||(e.contanti-=t.prezzo,e.caseProprie??=[],e.caseProprie.push(t.id),e.scriviLog(`Affittato ${t.nome}.`,"ok"),this.ui.tostino(`${t.nome} \xE8 tuo. Costa 60 \u20AC al giorno.`,"ok"))}ricicla(t){let e=this.stato,i=Math.round(t*.78);e.contanti-=t,e.pulito+=i,e.stat.riciclato+=i,e.segna("riciclato",e.stat.riciclato),e.aggiungiHeat(-6),e.scriviLog(`Ripuliti ${Ct(t)} \u2192 ${Ct(i)}.`,"ok"),this.ui.tostino(`${Ct(i)} puliti. Il resto se l'\xE8 preso lui.`,"ok"),this.controllaCapitolo()}rifaiDocumenti(t){let e=this.stato,i=this.segnalazioni.costoDocumenti();e.contanti<i||(e.contanti-=i,this.segnalazioni.ripulisci(t.targa),e.targheProprie??=[],e.targheProprie.includes(t.targa)||e.targheProprie.push(t.targa),t.rubato=!1,e.minuti+=90,e.scriviLog(`Documenti rifatti alla targa ${t.targa} per ${Ct(i)}.`,"ok"),this.ui.tostino(`${t.targa} \xE8 pulita e adesso \xE8 intestata a te. Ci ha messo un'ora e mezza.`,"ok",6e3))}async inviaMessaggio(t,e){let i=await this.telefono.rispondiConIa(t,e,this.quartiereGiocatore);if(i.appuntamento){let n=i.appuntamento,s=oi.find(a=>a.id===n.quartiere),r=this.citta.puntoSuStrada(Math.random);for(let a=0;a<200;a++){let l=this.citta.puntoSuStrada(Math.random);if(Ai(l.x,l.z)===n.quartiere){r=l;break}}n.x=r.x,n.z=r.z,n.prezzoMercato=this.mercato.prezzo(n.merce,n.quartiere),this.stato.scriviLog(`Appuntamento con ${n.nome} a ${ne[n.quartiere].nome}.`,"ok"),this.ui.tostino(`Appuntamento fissato: ${ne[n.quartiere].nome}. Segnato in giallo sul radar.`,"ok",6e3)}return i}_gestisciAppuntamenti(){let t=this.giocatore.posizione;for(let e of this.stato.appuntamenti){if(e.x==null)continue;let i=Math.hypot(e.x-t.x,e.z-t.z);i<42&&!e._npc?(e._npc=this.popolazione.generaSuAppuntamento(e,e.x,e.z),this.ui.tostino(`${e.nome} \xE8 qui che ti aspetta.`,"info",4e3)):i>90&&e._npc&&(this.popolazione.rimuoviNpc(e._npc),e._npc=null)}}concludiAppuntamento(t){this.telefono.chiudiAppuntamento(t,!0),this.stato.aggiungiXp(120),this.ui.tostino("Consegna fatta. La fiducia sale.","ok")}bruciaSim(){let t=this.telefono.bruciaSim();this.stato.scriviLog(`SIM bruciata: persi ${t} contatti.`,"attenzione"),this.ui.tostino(`SIM nuova. ${t} contatti persi, ma sei molto meno interessante.`,"attenzione",6e3)}saldaDebito(){let t=this.stato;t.contanti<t.debito||(t.contanti-=t.debito,t.scriviLog(`Debito saldato: ${Ct(t.debito)}.`,"ok"),t.debito=0,this.ui.tostino("Debito chiuso. Sei a posto con la giustizia \u2014 per ora.","ok"))}controllaCapitolo(){let t=this.stato;t.aggiornaSoglie();let e=t.capitoloCorrente;if(!e||!e.obiettivi.every(n=>t.completati.has(n.id))||t.livello<e.livelloMin)return;t.avanzaCapitolo();let i=t.capitoloCorrente;this.ui.schermataFine(e.titolo.split("\u2014")[1]?.trim()??"Capitolo concluso",`${e.ricompensa.sblocca?`Hai sbloccato: ${e.ricompensa.sblocca}. `:""}`+(i?i.testo:"Sei arrivato alla fine della campagna. La citt\xE0 continua senza di te.")),t.scriviLog(`Capitolo completato: ${e.titolo}`,"ok"),t.salva()}_finePartita(){let t=this.stato,e=t.ruolo==="cliente"?"L'ultimo giro":"Fine corsa",i=t.ruolo==="cliente"?`Giorno ${t.giorno}. ${t.stat.acquistiCliente} acquisti, ${t.stat.odSopravvissute} volte in cui \xE8 andata bene. Questa non \xE8 andata bene. Nella realt\xE0 quella telefonata ai soccorsi, fatta subito, cambia l'esito quasi sempre.`:`Giorno ${t.giorno}. Fatturato ${Ct(t.stat.fatturato)}, ${t.arresti} arresti. Finisce cos\xEC, per quasi tutti.`;this.ui.schermataFine(e,i),this.stato.salva()}pausa(){this.inPausa=!0,document.exitPointerLock?.()}riprendi(){this.inPausa=!1}};window.gioco=new $h;
