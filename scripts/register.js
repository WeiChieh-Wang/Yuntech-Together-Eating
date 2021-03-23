let exeurl = 'https://script.google.com/macros/s/AKfycbzjxE18xRZiZyzSmNwVAo8RVVN4Ecjn3XAFTxnHhlD_o6geRWPkj9K55But98f8ny04mA/exec';

function preload(){
  GoogleJSON = loadJSON("https://spreadsheets.google.com/feeds/list/1LcYeY_pAKX4kyoUXDZjDA0-DFR5nDcpkuvbhy72JfnU/od6/public/values?alt=json");
}

let nameCheck;
var Check = 0;

function setup(){
  var a = GoogleJSON.feed.entry.length;
}

function getDATA(){
  ID = document.getElementById("id").value;
  NAME = document.getElementById("name").value;
  EMAIL = document.getElementById("mail_address").value;
  PHONE = document.getElementById("phone").value;
  PASSWORD = document.getElementById("password").value;
  password = document.getElementById("password").value.length;
}

function run(){
  getDATA();
  var a = GoogleJSON.feed.entry.length;
  nameCheck = ID;
  for(var i = 0; i < a; i++){
    var b = GoogleJSON.feed.entry[i].gsx$username.$t;
    var c = GoogleJSON.feed.entry[i].gsx$name.$t;
    if(nameCheck == b){
      Check=1;
    }
  }
  if(Check==0){
    document.write("請稍等......</br>");
    if(password>=6){
      $.post(exeurl,{
        "method":"write",
        "id":ID,
        "name":NAME,
        "mail_address":EMAIL,
        "phone":PHONE,
        "password":PASSWORD
      },
      function (data) {
        document.write(data+"<br>");
        document.write("3秒後跳轉......");
        setTimeout("javascript:location.href='https://weichieh-wang.github.io/Yuntech-Together-Eating/index.html'", 3000);
      })
    }
    else{
      alert("密碼低於6位數，請補齊後再送出");
    }
  }
  else{
    alert("帳號重複");
    window.location.href = "https://weichieh-wang.github.io/Yuntech-Together-Eating/webpages/register.html";
  }
}
