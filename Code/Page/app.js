// voeg controls toe (teleport & WASD controls)
const controls = new Controls(1000);
controls.enableMovement();

//ladder model
const laddermodel = new Model('Models/ladder/scene.gltf');
laddermodel.setPosition(3.092, 0, -4.073);
laddermodel.setScale(0.015, 0.015, 0.015);
laddermodel.setRotation(0, 0, 49.029);

//bucket model
const bucketmodel = new Model('Models/bucket/scene.gltf');
bucketmodel.setPosition(-1.82, 0.754, -4.355);
bucketmodel.setScale(0.100, 0.100, 0.100);
// create some text
const testText = new Text('Test WebXR BO');
testText.setPosition(1.5, 0, -5);
testText.setFontsize(30);
testText.setColor('darkblue');

// create a 360 image
const image360 = new Sky('Textures/skybox.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(laddermodel);

// listen for an event
laddermodel.addEventListener('click', () => console.log('je klikt op mij'));
bucketmodel.addEventListener('click', () => console.log('EMMER'));