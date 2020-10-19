      var car,wall,caranimation1,caranimation2,caranimation3,caranimation4,caranimation5,track,border;
      var speed,weight;
      function preload(){
        caranimation1=loadAnimation("original.PNG");
        caranimation2=loadAnimation("car1.PNG");
        caranimation3=loadAnimation("car2.PNG");
        caranimation4=loadAnimation("car3.PNG");
        caranimation5=loadAnimation("car4.PNG");

      }
      function setup() {
        createCanvas(1400,700);
        
        speed=random(14,14);
        weight=random(400,1500);

        speed2=random(18,25);
        weight2=random(1600,2700);

        speed3=random(15,27);
        weight3=random(2700,3800);

        speed4=random(26,33);
        weight4=random(3900,5000);

        car1=createSprite(50,50,52,20);
        car1.addAnimation("car",caranimation1);
        car1.scale=0.5;


        car2=createSprite(50,200,52,20);
        car2.addAnimation("car",caranimation1);
        car2.scale=0.5;


        car3=createSprite(50,350,52,20);
        car3.addAnimation("car",caranimation1);
        car3.scale=0.5;


        car4=createSprite(50,500,51,20);
        car4.addAnimation("car",caranimation1);
        car4.scale=0.5;

        wall=createSprite(1300,50,20,45);
        wall.shapeColor="grey";

        wall2=createSprite(1300,200,20,45);
        wall2.shapeColor="grey";

        wall3=createSprite(1300,350,20,45);
        wall3.shapeColor="grey";

        wall4=createSprite(1300,500,20,45);
        wall4.shapeColor="grey";
        
       createTrack(75); 
       createTrack(210); 
       createTrack(355); 
       createTrack(510); 

       border1=createSprite(0,130,3300,10);
       border1.shapeColor="white";

       border2=createSprite(0,280,3300,10);
       border2.shapeColor="white";

       border3=createSprite(0,430,3300,10);
       border3.shapeColor="white";
      }

      function createTrack(yaxis) {

        for (var i = 50; i < 1200; i = i + 150) {
          var track = createSprite(i, yaxis, 60, 7);
          track.shapeColor="white";
  
      }

      }

      function draw() {
        background("black");
        car1.velocityX=speed;
      if(wall.x-car1.x<(car1.width+wall.width)/2){
        {
        car1.velocityX=0;
        var deformation=(0.5*weight*speed*speed)/2250;

        car1.addAnimation("car",caranimation5);
      }
      if(deformation<180 && deformation>100){
        car1.addAnimation("car",caranimation5);
      }
      if(deformation<100){
        car1.addAnimation("car",caranimation3);
      }
      if(deformation<180){
        car1.addAnimation("car",caranimation3);
      }
      }





      car2.velocityX=speed2;
      if(wall2.x-car2.x<(car2.width+wall2.width)/2 || car2.isTouching(wall3)){
        {
        car2.velocityX=0;
        var deformation2=(0.5*weight2*speed2*speed2)/2250;

        car2.addAnimation("car",caranimation2);
      }
      if(deformation2<180 && deformation2>100){
        car2.addAnimation("car",caranimation4);
      }
      if(deformation2<100){
        car2.addAnimation("car",caranimation3);
      }
      if(deformation2<180){
        car2.addAnimation("car",caranimation2);
      }
      }




      car3.velocityX=speed3;
      if(wall3.x-car3.x<(car3.width+wall3.width)/2){
        {
        car3.velocityX=0;
        var deformation3=(0.5*weight3*speed3*speed3)/2250;

        car3.addAnimation("car",caranimation4);
      }
      if(deformation3<180 && deformation3>100){
        car3.addAnimation("car",caranimation5);
      }
      if(deformation3<100){
        car3.addAnimation("car",caranimation1);
      }
      if(deformation3<180){
        car3.addAnimation("car",caranimation3);
      }
      }




      car4.velocityX=speed4;
      if(wall4.x-car4.x<(car4.width+wall4.width)/2){
        {
        car4.velocityX=0;
        var deformation4=(0.5*weight4*speed4*speed4)/2250;

        car4.addAnimation("car",caranimation5);
      }
      if(deformation4<180 && deformation4>100){
        car4.addAnimation("car",caranimation5);
      }
      if(deformation4<100){
        car4.shapeColor=color="yellow";
      }
      if(deformation4>180){
        car4.addAnimation("car",caranimation5);
      }
      }
        drawSprites();
      }