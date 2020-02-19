'use strict';
import Range from './model/Components/Range.js';
import Color from './model/Components/Color.js';
import Television from './model/Devices/Television.js';
import Lamp from './model/Devices/Lamp.js';
import SmartHouse from './model/SmartHouse.js';

const smartHouse = new SmartHouse(Date.now().toString(), 'Cool house');

// some tests
// const volume = new Range(0, 100, 50);
// const saturation = new Range(0, 100, 50);
// const brightnessTV = new Range(0, 100, 100);

// const brightnessLamp = new Range(0, 100, 100);
// const color = new Color(
//   new Range(0, 255, 255),
//   new Range(0, 255, 255),
//   new Range(0, 255, 255),
// );

// const television = new Television(
//   Date.now().toString(),
//   'LG',
//   35,
//   volume,
//   saturation,
//   brightnessTV,
// );

// const lamp = new Lamp(
//   Date.now().toString(),
//   'RGB-Lamp-143',
//   brightnessLamp,
//   color,
// );

// smartHouse.addDevice(television);
// smartHouse.addDevice(lamp);

// television.enable();
// television.volume = 73;
// television.decreaseBrightness(18);
// television.increaseSaturation(999);
// television.toggleState();
// television.enable();

// console.log(television);

// lamp.enable();
// lamp.decreaseBrightness(841250);
// lamp.blue = 500;
// lamp.decreaseGreen(-150);
// lamp.red = 177;

// console.log(lamp);
