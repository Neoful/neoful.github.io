var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//light to everything
var ambient=new THREE.AmbientLight(0x404040,1);
scene.add(ambient);

//resize browser
window.addEventListener('resize', function()
{
    var width=window.innerWidth;
    var height=window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect=width/height;
    camera.updateProjectionMatrix();
});

//Keyboard (btw not linked to button)//
let keyboard=[];
addEventListener('keydown',(e)=>
{
    keyboard[e.key]=true;
});
addEventListener('keyup',(e)=>
{
    keyboard[e.key]=false;
});

function processKeyboard()
{
    let speed=1.5;
    if(keyboard['w'])
    {
        controls.moveForward(+speed);
    }
    if(keyboard['s'])
    {
        controls.moveForward(-speed);
    }
    if(keyboard['a'])
    {
        controls.moveRight(-speed)
    }
    if (keyboard['d'])
    {
        controls.moveRight(speed);
    }
}

//camera or controls//
let controls=new THREE.PointerLockControls(camera, renderer.domElement, document.body);
let clock=new THREE.Clock();

document.getElementById("btn1")
document.addEventListener("click", function(){
    controls.lock();
    false
});




//shape//
var geometry=new THREE.BoxGeometry(1,1,1);
var cubeMaterials=
[
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/lol.jpg'), side: THREE.DoubleSide}),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('img/lol.jpg'), side: THREE.DoubleSide}),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('img/lol.jpg'), side: THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/lol.jpg'), side: THREE.DoubleSide}),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('img/lol.jpg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/lol.jpg'), side: THREE.DoubleSide}),
];

//material, color,image texture//
var cube=new THREE.Mesh(geometry,cubeMaterials);
scene.add(cube);

camera.position.z=3;

//3D
loader=new THREE.GLTFLoader();
loader.load("SupremeCourt.glb", function(gltf)
{
    gltf.scene.scale.multiplyScalar(20);
    gltf.scene.position.set(-50,-10,500);
    scene.add(gltf.scene);
});


//------------Background---------------//

// Actual Background //
scene.background=new THREE.Color(0xfFFAAAA);


///Amendment

//1
var floorGeometry=new THREE.CubeGeometry(30,0.1,25);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/1st.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = 50
floorCube.position.z = -15
floorCube.position.y = -10
scene.add(floorCube);

//2
var floorGeometry=new THREE.CubeGeometry(40,0.1,20);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/2nd.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = 50
floorCube.position.z = 10
floorCube.position.y = -10
scene.add(floorCube);

//4
var floorGeometry=new THREE.CubeGeometry(45,0.1,45);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/4th.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = 25
floorCube.position.z = 50
floorCube.position.y = -10
scene.add(floorCube);

//5
var floorGeometry=new THREE.CubeGeometry(45,0.1,45);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/5th.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = 25
floorCube.position.z = 100
floorCube.position.y = -10
scene.add(floorCube);

//6
var floorGeometry=new THREE.CubeGeometry(45,0.1,45);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/6th.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = 25
floorCube.position.z = 150
floorCube.position.y = -10
scene.add(floorCube);

//8
var floorGeometry=new THREE.CubeGeometry(45,0.1,25);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/8th.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = 25
floorCube.position.z = 190
floorCube.position.y = -10
scene.add(floorCube);

//14
var floorGeometry=new THREE.CubeGeometry(45,0.1,25);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/14th.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = 25
floorCube.position.z = 220
floorCube.position.y = -10
scene.add(floorCube);

//14.5
var floorGeometry=new THREE.CubeGeometry(45,0.1,25);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/14th.5.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = 25
floorCube.position.z = 250
floorCube.position.y = -10
scene.add(floorCube);

//a
var floorGeometry=new THREE.CubeGeometry(25,0.1,10);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/a.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = -50
floorCube.position.z = -15
floorCube.position.y = -10
scene.add(floorCube);

//b
var floorGeometry=new THREE.CubeGeometry(25,0.1,10);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/b.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = -50
floorCube.position.z = 0
floorCube.position.y = -10
scene.add(floorCube);

//c
var floorGeometry=new THREE.CubeGeometry(25,0.1,10);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/c.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = -50
floorCube.position.z = 15
floorCube.position.y = -10
scene.add(floorCube);

//II
var floorGeometry=new THREE.CubeGeometry(40,0.1,40);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/II.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = -50
floorCube.position.z = 45
floorCube.position.y = -10
scene.add(floorCube);

//Main
//II
var floorGeometry=new THREE.CubeGeometry(50,0.1,50);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/Main.png'), side: THREE.SingleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.x = 0
floorCube.position.z = 0
floorCube.position.y = -10
scene.add(floorCube);

//------------Background---------------//

var ambientLight=new THREE.AmbientLight(0xFFFFFF, 3);
//scene.add(ambientLight);

var light1=new THREE.PointLight(0xFF0040,4,50);
scene.add(light1);

var light2= new THREE.PointLight(0x0040FF, 2,50);
scene.add(light2);

var light3= new THREE.PointLight(0x80FF80, 4,50);
scene.add(light2);

var light4=new THREE.PointLight(0xFF0040,-5,-30);
scene.add(light4);


directionalLight=new THREE.DirectionalLight(0xFFFFFF,1);
directionalLight.position.set(0,1,0);
scene.add(directionalLight);

var spotLight=new THREE.SpotLight(0xFF45F6, 25);
spotLight.position.set(0,3,0);
scene.add(spotLight);


directionalLight=new THREE.DirectionalLight(0xFFFFFF,1);
directionalLight.position.set(-50,-10,500);
scene.add(directionalLight);





//audio
//var sound=new THREE.Audio(listener);
//var audioLoader=new THREE.Audio();
//audioLoader.load('audio1', function(buffer)
//{
//    sound.setBuffer(buffer);
//      sound.setLoop(true);
//     sound.setVolume(0.5);
//     sound.play();
//});

//game logic
var update = function()
{
    cube.rotation.x +=0.01;
    cube.rotation.y +=0.05

    var time = Date.now()*0.0005;

    light1.position.x=Math.sin(time*0.7)*30;
    light1.position.y=Math.cos(time*0.5)*40;
    light1.position.z=Math.cos(time*0.3)*30;

    light2.position.x=Math.cos(time*0.3)*30;
    light2.position.y=Math.sin(time*0.5)*40;
    light2.position.z=Math.sin(time*0.7)*30;

    light3.position.x=Math.cos(time*0.7)*30;
    light3.position.y=Math.sin(time*0.5)*40;
    light3.position.z=Math.sin(time*0.3)*30;
};
// draw scene/render
var render = function()
{
    renderer.render (scene, camera);
    processKeyboard();
};

//run game loop (update, render, repeat)
var GameLoop = function ()
{
    requestAnimationFrame (GameLoop);

    update();
    render();
};

GameLoop();