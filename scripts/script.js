// Load in modules
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

// Add assets for textures and null objects for switcher
Promise.all([

    Textures.findFirst('firepicker'),
    Textures.findFirst('smokepicker'),
    Textures.findFirst('waterpicker'),

    Scene.root.findFirst('nullObject0'),
    Scene.root.findFirst('nullObject1'),
    Scene.root.findFirst('nullObject2')

]).then(function(results){

const button1 = results[0];
const button2 = results[1];
const button3 = results[2];

const Obj1 = results[3];
const Obj2 = results[4];
const Obj3 = results[5];

const configuration = {

    selectedIndex: 0,

    items: [
        {image_texure: button1},
        {image_texure: button2},
        {image_texure: button3}
    ]

};

// Create the picker
const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;

});
