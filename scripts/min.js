function preload(){
  img=loadImage("images/YYuntech_map_E.jpg");
  user2=window.localStorage.getItem('username');
  user1=window.localStorage.getItem('manager');
  data3=loadJSON('https://spreadsheets.google.com/feeds/list/1_MXWO5Iz-fHN6Gp7uby4fpIbOgIK_bMpT9ZvfkktsHs/od6/public/values?alt=json');
  data2=loadJSON('https://spreadsheets.google.com/feeds/list/1ahCsxN9NJ5kCurS6WRCXBNzhjq_29_1yMMTOr0BnZrQ/od6/public/values?alt=json');
  GoogleJSON = loadJSON("https://spreadsheets.google.com/feeds/list/1LcYeY_pAKX4kyoUXDZjDA0-DFR5nDcpkuvbhy72JfnU/od6/public/values?alt=json");
  if(user1==1){
     document.getElementById("mm").style.display='';
   }else{
     document.getElementById("mm").style.display='none';
  }
  if(user2==null){
         document.getElementById("login").style.display='';
         document.getElementById("login1").style.display='';
         document.getElementById("mm1").style.display='none';
         document.getElementById("mm2").style.display='none';
   }else{
     document.getElementById("login").style.display='none'; 
     document.getElementById("login1").style.display='none';
     document.getElementById("mm1").style.display='';
     document.getElementById("mm2").style.display='';
  }    
}
function setup() {  
}

function draw() {  
}
