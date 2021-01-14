
// voeg controls toe (teleport & WASD controls)
const controls = new Controls(1000);
controls.enableMovement();

//room 
const roommodel = new Model('Models/room/scene.gltf')
roommodel.setPosition(0, -2.332, 0);

// create an image
const image = new XRImage('Textures/table.jpg');
image.setPosition(-1.48819, 2.45839, -7.621);
image.setScale(3, 3, 3);
// create an image
const image1 = new XRImage('Textures/circle.jpg');
image1.setPosition(2, 2.45839, -7.621);
image1.setScale(3, 3, 3);


//ladder model
const laddermodel = new Model('Models/ladder/scene.gltf');
laddermodel.setPosition(15.535, -0.434, -7.295);
laddermodel.setScale(0.025, 0.025, 0.025);
laddermodel.setRotation(0, 0, 49.029);
//workbench model
const workbenchmodel = new Model('Models/bench/scene.gltf')
workbenchmodel.setPosition(-12.896, -0.903, 0.062);
workbenchmodel.setScale(0.03, 0.03, 0.03)
workbenchmodel.setRotation(0, -13.05, 0)

//bucket model
const bucketmodel = new Model('Models/bucket/scene.gltf');
bucketmodel.setPosition(-11.976, 0.754, -4.365);
bucketmodel.setScale(0.10, 0.10, 0.10);
// create some text
const testText = new Text('WebXR atelier');
testText.setPosition(-23.250, 19.523, -5);
testText.setFontsize(30);
testText.setColor('darkblue');

// create a 360 image
const image360 = new Sky('Textures/skybox.jpg');

//const spotLight = new SpotLight();
//spotLight.setPosition(-5.168, 4.72931, -5.962);
//spotLight.setType("point");
//spotLight.setIntensity(0.64);

// listen for an event
image.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML = "Folkert de Jong Nihilist Table");
image1.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML = "Folker de Jong Cirkel van het leven");
image.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML = "");
image1.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML = "");
laddermodel.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML = "Ladder");
laddermodel.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML = "");
bucketmodel.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML= "Emmer");
bucketmodel.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML= "...");
workbenchmodel.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML= "Werktafel");
workbenchmodel.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML= "...");