const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

const createVehicle = function (type, numWheels, color) {
  const object = {
    type: type,
    wheels: numWheels,
    color: color
  };
  return object;
};

const car = createVehicle("car", 4, "blue");
const bike = createVehicle("bike", 2, "purple");
const skateboard = createVehicle("skateboard", 4, "red");

const myVehicles = [car, bike, skateboard];
for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

bike.needsRepair = true;
skateboard.needsRepair = true;

console.log(skateboard);

button.addEventListener("click", function () {
  repairList.innerHTML = "";
  const vehicleRepairList = [];
  for (const vehicle of myVehicles) {
    if (vehicle.needsRepair) {
      const li = document.createElement("li");
      li.innerHTML = `My <span>${vehicle.type}</span> needs some 💜.`;
      repairList.append(li);
    }
  }
});
