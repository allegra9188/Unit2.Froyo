// When they view the browser console,
// they observe a table listing how many of
// each flavor they have ordered.
// In this case, they will be able to observe
// that they have ordered three vanilla,
// two coffee, and one strawberry froyo.

function whatOrder() {
  const userInput = prompt(
    `Please enter a list of comma-seperated froyo flavors`,
    `vanilla,vanilla,vanilla,strawberry,coffee,coffee`
  );
  const userArray = userInput.split(",");
  const flavorCounts = {};

  for (const flavor of userArray) {
    console.log(flavor);
    if (flavorCounts[flavor]) {
      flavorCounts[flavor]++;
    } else {
      flavorCounts[flavor] = 1;
    }
  }

  console.table(flavorCounts);
}

whatOrder();
