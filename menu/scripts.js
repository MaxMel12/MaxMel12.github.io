window.addEventListener("DOMContentLoaded",()=>{
    /*// module aliases
    var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

    console.log("working")
    
    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
    element: document.body,
    engine: engine
    });

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground]);

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);*/

    function listenorientation(o){
        console.log("gamma", o.gamma)
        document.getElementById("disp").innerHTML = "gamma "+ o.gamma
        document.getElementById("square").style.left = Math.abs(o.gamma)*100+"%"
    }
    

    /*if(window.DeviceOrientationEvent){
      //document.getElementById("disp").innerHTML = "we lit"
      window.addEventListener("deviceorientation", listenorientation, false);
    }else{
      console.log("DeviceOrientationEvent is not supported");
      document.getElementById("disp").innerHTML = "not supported"
    }*/

    function permission(){
      console.log("clicked")
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        document.getElementById("disp").innerHTML = "Bruh time"
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              document.getElementById("disp").innerHTML = "Yay"
              window.addEventListener('deviceorientation', listenorientation,false);
            }
          })
          .catch(document.getElementById("disp").innerHTML = "fuckk");
      }
    } 

    document.getElementById ("disp").addEventListener ("click", permission, false);

})