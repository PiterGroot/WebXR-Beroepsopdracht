
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
const image1 = new XRImage('Textures/circle.JPG');
image1.setPosition(2, 2.45839, -7.621);
image1.setScale(3, 3, 3);

// create an image
const image2 = new XRImage('Textures/stilleven.jpg');
image2.setPosition(0.453, 2.458, 9.389);
image2.setScale(3, 3, 3);
// create an image
const image3 = new XRImage('Textures/assemblage.jpg');
image3.setPosition(4.558, 2.458, 9.336);
image3.setScale(3, 3, 3);

//ladder model
const laddermodel = new Model('Models/ladder/scene.gltf');
laddermodel.setPosition(15.535, -0.434, -7.295);
laddermodel.setScale(0.025, 0.025, 0.025);
laddermodel.setRotation(0, 0, 49.029);
//workbench model
const workbenchmodel = new Model('Models/bench/scene.gltf');
workbenchmodel.setPosition(-6.365, -1.495, 2.212);
workbenchmodel.setScale(0.03, 0.03, 0.03);
workbenchmodel.setRotation(0, 17.863, 0);
//chandelier model
const chandeliermodel = new Model('Models/chandelier/scene.gltf');
chandeliermodel.setPosition(-7.583, 10.929, 0);
chandeliermodel.setScale(0.035, 0.035, 0.035);
//chandelier1 model
const chandeliermodel1 = new Model('Models/chandelier/scene.gltf');
chandeliermodel1.setPosition(7.583, 10.929, 0);
chandeliermodel1.setScale(0.035, 0.035, 0.035);
//bucket model
const bucketmodel = new Model('Models/bucket/scene.gltf');
bucketmodel.setPosition(-7.042, 0.235, -2.089);
bucketmodel.setScale(0.10, 0.10, 0.10);
//human model
const humanmodel = new Model('Models/human/scene.gltf')
humanmodel.setPosition(-3.920, -1.377, 7.237);
humanmodel.setScale(0.052, 0.052, 0.052);
humanmodel.setRotation(-45.862, 20.191, 2.847);
//shelf model
const shelfmodel = new Model('Models/shelf/scene.gltf')
shelfmodel.setPosition(12.559, -1.359, -2.574);
shelfmodel.setScale(3.5, 3.5, 3.5);
shelfmodel.setRotation(0, -90, 0);
//workbench1
const workbench1 = new Model('Models/workbench/scene.gltf')
workbench1.setPosition(11.999, -1.364, 4.395);
workbench1.setScale(3.3, 3.3, 3.3);
workbench1.setRotation(0, 180, 0);
// create some text
const testText = new Text('WebXR atelier');
testText.setPosition(-23.250, 19.523, -5);
testText.setFontsize(30);
testText.setColor('darkblue');

// create a 360 image
const image360 = new Sky('Textures/skybox.jpg');

// listen for an event
image.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML = "Folkert de Jong Nihilist Table");
image1.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML = "Folker de Jong Cirkel van het leven");
image.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML = "...");
image1.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML = "...");
laddermodel.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML = "Ladder");
laddermodel.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML = "...");
humanmodel.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML = "Etalagepop");
humanmodel.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML = "...");
shelfmodel.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML = "Kast");
shelfmodel.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML = "...");
bucketmodel.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML= "Emmer");
bucketmodel.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML= "...");
workbenchmodel.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML= "Tafel");
workbenchmodel.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML= "...");
workbench1.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML= "Werktafel");
workbench1.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML= "...");
image2.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML= "Folkert de Jong Stilleven");
image2.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML= "...");
image3.addEventListener('mouseenter', () => document.getElementById('extraText').innerHTML= "Folkert de Jong Assemblage");
image3.addEventListener('mouseleave', () => document.getElementById('extraText').innerHTML= "...");