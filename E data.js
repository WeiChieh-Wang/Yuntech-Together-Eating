let idata;
let pn=[];
let fn=[],fn1=[],fn2=[],fn3=[];

function preload(){
  idata=loadJSON('https://spreadsheets.google.com/feeds/list/1jukkjyVdYyWGXWV2FYoDA4VbCYtSG-t0WFxSY4XUswY/od6/public/values?alt=json');
  
}
function setup() {
idata.feed.entry.forEach((o)=>{
   pn.push([o.gsx$姓名.$t]);
   fn.push([o.gsx$早餐.$t]);
   });

let fpn=pn.flat(Infinity);
let ffn=fn.flat(Infinity);  
a=fpn.length;
b=ffn.length;
for(i=0;i<b;i++){
    if(ffn[i]=="豬肉蛋土司"){
      fn1.push(ffn[i]);
  } else if (ffn[i]=="鮪魚蛋土司"){
    fn2.push(ffn[i]);
}else if (ffn[i]=="起司蛋土司"){
    fn3.push(ffn[i]);}
c=fn1.length;
d=fn2.length;
e=fn3.length;
document.getElementById("pn").innerText = a;
document.getElementById("fn1").innerText = c;
document.getElementById("fn2").innerText = d;
document.getElementById("fn3").innerText = e
  console.log(fn3);
}
}


