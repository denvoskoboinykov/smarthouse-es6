'use strict';

const house = new SmartHouse(ShortId.generate(), 'Cool house', new Map());

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

house.addDevice(television);
house.addDevice(lamp);

//house.devices[0].enable();
house.devices[0].volume = 73;
house.devices[0].decreaseBrightness(18);
house.devices[0].increaseSaturation(999);
house.devices[0].toggleState();
//house.devices[0].disable();

console.log(house.devices[0]);

//house.devices[1].enable();
house.devices[1].decreaseBrightness(841250);
house.devices[1].blue = 500;
house.devices[1].decreaseGreen(-150);
house.devices[1].red = 177;

console.log(house.devices[1]);

const delayedActionOne = new DelayedAction(house.devices[1].id, 2000, () => {
  house.devices[1].enable();
});

const delayedActionTwo = new DelayedAction(house.devices[1].id, 2000, () => {
  house.devices[1].disable();
});

house.delayAction(delayedActionOne, () => {
  house.delayAction(delayedActionTwo, () => {
    console.log(house.devices[1]);
  });
});
