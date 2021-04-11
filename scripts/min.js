let btns = [];

function preload() {
  img = loadImage('map.jpg');
  posision= loadJSON('https://spreadsheets.google.com/feeds/list/1V933tiOGerTNQf3ferf7afYf4hLDOcPZ_DKRUsMA8bE/od6/public/values?alt=json');
}
function setup() {
  createCanvas(800, 916);
  textSize(25);
  posision.feed.entry.forEach((o)=>{
    btns.push(new btn(o.gsx$name.$t,
                      int(o.gsx$x.$t),
                      int(o.gsx$y.$t),
                      o.gsx$地點.$t,
                      o.gsx$活動狀態.$t,
                      o.gsx$傳送.$t
                     ));
  });
 
}

function draw() {
  image(img, 0, 0,width,height);
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
  }
 btns.forEach((v)=>{
    v.display();
  })
}
  
class btn{
 constructor(name,x,y,地點,活動狀態,傳送){
      this.name=name;
      this.x=x;
      this.y=y;
      this.size=35;
      this.地點 = 地點;
      this.活動狀態=活動狀態;
      this.傳送=傳送;
  }
  display(){
    strokeWeight(5);
    if (mouseX > this.x-this.size && mouseX < this.x+this.size &&
        mouseY > this.y-this.size && mouseY < this.y+this.size){
          noStroke();
          fill(0,0,255);
          text(this.name+'：'+this.地點, this.x-100,this.y+50);
          text("狀態:"+this.活動狀態, this.x-100,this.y+100)
          stroke(200,50,50);
          if(mouseIsPressed){
            window.location.href= this.傳送;
          }
    }else{
          stroke(0);
    }
    noFill();
    circle(this.x,this.y,this.size);
   }
