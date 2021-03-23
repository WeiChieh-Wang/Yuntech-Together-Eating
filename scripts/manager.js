let data2;
let data1;
let data3;
let jo=[];
let ini=[];
let ev=[];
let date=[],food1=[],drink1=[],menu1=[],smenu1=[],tmenu1=[];
let i=0;
let event1=[];
function preload(){
  data3=loadJSON('https://spreadsheets.google.com/feeds/list/1_MXWO5Iz-fHN6Gp7uby4fpIbOgIK_bMpT9ZvfkktsHs/od6/public/values?alt=json')
  data2=loadJSON('https://spreadsheets.google.com/feeds/list/1ahCsxN9NJ5kCurS6WRCXBNzhjq_29_1yMMTOr0BnZrQ/od6/public/values?alt=json')
  
}
function setup() {
   data3.feed.entry.forEach((b)=>{
    jo.push([ b.gsx$你想參加何時的共食呢.$t]);
    food1.push([ b.gsx$主餐.$t]);
    drink1.push([ b.gsx$飲料.$t]);
     
   })
  data2.feed.entry.forEach((b)=>{
    ev.push([ b.gsx$subject.$t]);
    date.push([ b.gsx$startdate.$t]);
    })
  let fj=jo.flat(Infinity);
  let fev=ev.flat(Infinity);
  let fdate=date.flat(Infinity);
  let ffo1=food1.flat(Infinity);
  let fdr1=drink1.flat(Infinity);
  //console.log(ffo1);
  a=fj.length;
  b=fev.length;
  lmlm=menu1.length;
  
  //console.log(fdate);
  for(i=0;i<b;i++){
   ini.push(date[i])
  }  
  for(j=0;j<a;j++){
    for(k=0;k<b;k++){
      if(fj[j].includes(fdate[k])==true){
       //console.log(fj[j].includes(fdate[k]));
        ini[k].push(fdate[k]);
    }}
      if(ffo1[j]!=""){
       menu1.push(ffo1[j]);
       menu1.push(fdr1[j]); 
    }
  }
  dmenu1 = menu1.filter((item, index, arr) => {
	return arr.indexOf(item) === index;
})
c=menu1.length;
d=dmenu1.length;
  for(ss=0;ss<d;ss++){
    smenu1.push([dmenu1[ss]]);
  }
  console.log(smenu1);
  for(m=0;m<c;m++){
    for(n=0;n<d;n++){
      if(menu1[m]==smenu1[n][0]){
         smenu1[n].push(menu1[m]);
         }
    }
  }
  for(l=0;l<b;l++){
    c=ini[l].length-1
    event1.push(["<h3>活動:"+fev[l]+"目前參加人數:"+c+"人"+"</h3>"]);
  }
  for(o=0;o<smenu1.length;o++){
    l1=smenu1[o].length-1
    event1[1].push("<h4>"+smenu1[o][0]+":目前預定食物數量:"+l1+"人"+"</h4>")
  }
   document.getElementById("event").innerHTML = event1;
  //document.getElementById("menu").innerHTML =  tmenu1;
    //console.log(smenu1);   
} 
