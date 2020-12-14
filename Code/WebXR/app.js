// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const laddermodel = new Model('Models/ladder.gltf');
laddermodel.setPosition(3.04114, 1.54, -9.55352);
laddermodel.setScale(1.34, 0.1, 0.1);
laddermodel.setRotation(0, -36.95, 0);

// create some text
const testText = new Text('Test WebXR');
testText.setPosition(1.5, 0, -5);
testText.setFontsize(30);
testText.setColor('green')


// create a 360 image
const image360 = new Sky('Textures/skybox_Test.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(laddermodel);

// listen for an event
laddermodel.addEventListener('click', () => console.log('je klikt op mij'));