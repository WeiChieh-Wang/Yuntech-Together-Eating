let idata;
let pn=[];
let fn=[],fn1=[],fn2=[];

function preload(){
  idata=loadJSON('https://spreadsheets.google.com/feeds/list/1i0acxnbNw0giY38Edl7QRwIP8qGJH8Rx8_VR1ptIaVk/od6/public/values?alt=json');
  
}
function setup() {
idata.feed.entry.forEach((o)=>{
   pn.push([o.gsx$姓名.$t]);
   fn.push([o.gsx$食物.$t]);
   });

let fpn=pn.flat(Infinity);
let ffn=fn.flat(Infinity);  
a=fpn.length;
b=ffn.length;
for(i=0;i<b;i++){
    if(ffn[i]=="葷粥"){
      fn1.push(ffn[i]);
  } else if (ffn[i]=="素粥"){
    fn2.push(ffn[i]);
}}
c=fn1.length;
d=fn2.length;
document.getElementById("pn").innerText = a;
document.getElementById("fn1").innerText = c;
document.getElementById("fn2").innerText = d;
}

function draw() {

}