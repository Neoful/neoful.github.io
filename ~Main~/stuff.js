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
    let speed=0.2;
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


//grid//
grid=new THREE.GridHelper(100,20,0x0a0a0a,0x0a0a0a);
grid.position.set(0,-5,0);
scene.add(grid);

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
loader.load("Ferrari.glb", function(gltf)
{
    gltf.scene.scale.multiplyScalar(50);
    gltf.scene.position.set(0,-2,-50);
    scene.add(gltf.scene);
});


//------------Background---------------//

// Actual Background //
scene.background=new THREE.Color(0xfFFAAAA);

// Floor //
var floorGeometry=new THREE.CubeGeometry(10, 1, 10);
var floorMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/Skybox/dn.jpg'), side:THREE.DoubleSide});
var floorCube=new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.y=-5;
scene.add(floorCube);

// Celling //
var ceilingGeometry=new THREE.CubeGeometry(10,1,10);
var ceilingMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/Skybox/up.jpg'), side: THREE.DoubleSide});
var ceilingCube=new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceilingCube.position.y=5;
scene.add(ceilingCube);

// Left Wall //
var leftWallGeometry=new THREE.CubeGeometry(1,10,10);
var leftWallMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/stone.jpg'), side: THREE.DoubleSide});
var leftWallCube=new THREE.Mesh(leftWallGeometry, leftWallMaterial);
leftWallCube.position.x = -5;
scene.add(leftWallCube);

// Right Wall //
var rightWallGeometry=new THREE.CubeGeometry(1,10,10);
var rightWallMaterial=new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/stone.jpg'), side: THREE.DoubleSide});
var rightWallCube=new THREE.Mesh(rightWallGeometry, rightWallMaterial);
rightWallCube.position.x=5;
scene.add(rightWallCube);



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