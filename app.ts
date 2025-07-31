
console.log("Hello World!");

interface IVehicle {
  model: string;
  color: string;
  year: number;
  power: number;
}

interface ICar extends IVehicle {
  bodyType: string;
  wheelCount: number;
}

interface IBoat extends IVehicle {
  draft: number;
}

interface IPlane extends IVehicle {
  wingspan: number;
}

const car: ICar = {
  model: "Ford focus",
  color: "Green",
  year: 2016,
  power: 150,
  bodyType: "Hatchback",
  wheelCount: 4
};

const plane: IPlane = {
  model: "Boeing 777",
  color: "White",
  year: 2020,
  power: 170000,
  wingspan: 65
};

const boat: IBoat = {
  model: "Bella",
  color: "Black",
  year: 2022,
  power: 100,
  draft: 0.42
};

console.log(car);
console.log(plane);
console.log(boat);

  