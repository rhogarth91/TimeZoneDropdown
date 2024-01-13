function showSelectedCountry(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      alert(`It is ${parisTime}`);
    }
    {
      if (event.target.value === "tokyo") alert(`It is ${tokyoTime}`);
    }
    {
      if (event.target.value === "sydney") alert(`It is ${sydneyTime}`);
    }
  }
}

let countrySelected = document.querySelector("#countries");
countrySelected.addEventListener("change", showSelectedCountry);

let parisTime = moment().tz("Europe/Paris").format("dddd MMMM D, YYYY h:m A");
let tokyoTime = moment().tz("Asia/Tokyo").format("dddd MMMM D, YYYY h:m A");
let sydneyTime = moment()
  .tz("Australia/Sydney")
  .format("dddd MMMM D, YYYY h:m A");
