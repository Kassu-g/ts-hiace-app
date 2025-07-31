"use strict";
console.log("Hello World!");
const vehicle = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60
};
console.log("Generic vehicle:", vehicle);
const car = {
    model: "Ford focus",
    color: "Green",
    year: 2016,
    power: 150,
    bodyType: "Hatchback",
    wheelCount: 4
};
const plane = {
    model: "Boeing 777",
    color: "White",
    year: 2020,
    power: 170000,
    wingspan: 65
};
const boat = {
    model: "Bella",
    color: "Black",
    year: 2022,
    power: 100,
    draft: 0.42
};
console.log("Car instance:", car);
console.log("Plane instance:", plane);
console.log("Boat instance:", boat);
// 4. Generic VehicleService
class VehicleService {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    list() {
        return this.items;
    }
}
const cars = new VehicleService();
const boats = new VehicleService();
cars.add(car);
boats.add(boat);
console.log("Cars in service:", cars.list());
console.log("Boats in service:", boats.list());
