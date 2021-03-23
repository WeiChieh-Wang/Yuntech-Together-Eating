function preload(){
  var j=document.getElementById("join1");
  user11=window.localStorage.getItem('username');
  console.log(window.localStorage.getItem('username'))
  if(user11==null){
    j.style.display='none';
  }
  else{
    j.style.display='';
  }
}



function setup() {
}

function draw() {
  
}
