function App(n,m,s){

    //Declare your instance variables here.
    this.name = n
    this.memory = m
    this.state = s

    //Declare the instance function open here.
    this.open = function(){
      this.state = "active";
    };
    //Declare the instance function sleep here.
    this.sleep = function(){
      if(this.state = "active"){
        this.state = "sleep";
        this.memory = this.memory/2;
      }
    };
    //Declare the instance function active here.
    this.active = function(){
      if(this.state = "sleep"){
        this.state = "active";
        this.memory = this.memory*2
      }
    };
    //Declare the instance function close here.
    this.close = function(){
      if(this.state != null){
        this.state = null
        this.memory = this.memory*0
      }
    };
}

//Use the constructor to create 4 App objects below.
var mindNode = new App(mindNode,active,2);
var noodles = new App(noodles,active,5);
var safari = new App(safari,null,0);
var showbie = new App(showbie,active,24);

//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
var applist = [mindNode,noodles,safari,showbie];
