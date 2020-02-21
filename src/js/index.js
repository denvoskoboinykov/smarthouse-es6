'use strict';
import ShortId from './model/Utils/ShortId.js';
import Range from './model/Components/Range.js';
import Color from './model/Components/Color.js';
import Television from './model/Devices/Television.js';
import Lamp from './model/Devices/Lamp.js';
import DelayedAction from './model/Components/DelayedAction.js';
import SmartHouse from './model/SmartHouse.js';

const smartHouse = new SmartHouse(ShortId.generate(), 'Cool house', new Map());

// some tests
const volume = new Range(0, 100, 50);
const saturation = new Range(0, 100, 50);
const brightnessTV = new Range(0, 100, 100);

const brightnessLamp = new Range(0, 100, 100);
const color = new Color(
  new Range(0, 255, 255),
  new Range(0, 255, 255),
  new Range(0, 255, 255),
);

const television = new Television(
  ShortId.generate(),
  'LG',
  35,
  volume,
  saturation,
  brightnessTV,
);

const lamp = new Lamp(
  ShortId.generate(),
  'RGB-Lamp-143',
  brightnessLamp,
  color,
);

smartHouse.addDevice(television);
smartHouse.addDevice(lamp);

television.enable();
television.volume = 73;
television.decreaseBrightness(18);
television.increaseSaturation(999);
television.toggleState();
television.disable();

console.log(television);

lamp.enable();
lamp.decreaseBrightness(841250);
lamp.blue = 500;
lamp.decreaseGreen(-150);
lamp.red = 177;

console.log(lamp);

smartHouse.delayAction(
  new DelayedAction(
    smartHouse.devices[1].id,
    1000,
    smartHouse.devices[1].decreaseRed,
    67890,
  ),
);

smartHouse.delayAction(
  new DelayedAction(
    smartHouse.devices[1].id,
    1500,
    smartHouse.devices[1].decreaseGreen,
    254,
  ),
);

smartHouse.delayedActions.forEach((value, key) => {
  console.log(value);
  console.log(key);
});

console.log('1: ', smartHouse._delayedActions.get(1));

smartHouse.cancelDelayedAction(1);
console.log(smartHouse.delayedActions);

setTimeout(() => {
  console.log('3s');
  console.log(smartHouse.delayedActions);
  console.log(lamp);
}, 3000);
