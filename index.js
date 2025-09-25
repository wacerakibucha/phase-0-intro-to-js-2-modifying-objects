const circle = {};

circle.radius = 5;         
circle["diameter"] = 10;   

circle.circumference = circle.diameter * Math.PI;
circle["area"] = Math.PI * circle.radius ** 2;

console.log("Circle Object:", circle);

const mondayMenu = {
  cheesePlate: {
    soft: "Chèvre",
    semiSoft: "Gruyère",
    hard: "Manchego",
  },
  fries: "Curly",
  salad: "Cobb",
};

// Destructive update
mondayMenu.fries = "Sweet potato";
console.log("Monday Menu after fries update:", mondayMenu.fries); // Sweet potato

// Destructive update function
function destructivelyUpdateObject(obj, key, value) {
  obj[key] = value;
  return obj;
}

const tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "Caesar");
console.log("Tuesday Menu:", tuesdayMenu);
console.log("Monday Menu after destructive update:", mondayMenu); // Original changed


function nondestructivelyUpdateObject(obj, key, value) {
  return { ...obj, [key]: value };
}

const sundayMenu = nondestructivelyUpdateObject(tuesdayMenu, "fries", "Shoestring");

console.log("Tuesday Menu fries:", tuesdayMenu.fries); // Sweet potato → original intact
console.log("Sunday Menu fries:", sundayMenu.fries);   // Shoestring → new object

const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};

delete wednesdayMenu.salad;
console.log("Wednesday Menu after deleting salad:", wednesdayMenu);


const myArray = [2, 3, 5, 7];

// Add object-style property
myArray.summary = "This array is totally empty.";
console.log("Array summary property:", myArray.summary); // This array is totally empty.
console.log("Array length:", myArray.length);           // 4 → only counts elements

// Integer key → array element
myArray[0] = "first";

// String key → object property
myArray["01"] = "extra";

console.log("Array after updates:", myArray);              // ["first", 3, 5, 7, 01: "extra"]
console.log("Array length:", myArray.length);             // 4
console.log("Array keys:", Object.keys(myArray));         // ["0","1","2","3","01"]
