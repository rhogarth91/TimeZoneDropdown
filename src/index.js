function showSelectedCountry(event) {
  alert(event.target.value);
}

let countrySelected = document.querySelector("#countries");
countrySelected.addEventListener("change", showSelectedCountry);
