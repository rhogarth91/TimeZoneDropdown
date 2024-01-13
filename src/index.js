function showSelectedCountry(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      alert("Paris");
    }
    {
      if (event.target.value === "tokyo") alert("Tokyo");
    }
    {
      if (event.target.value === "sydney") alert("Sydney");
    }
  }
}

let countrySelected = document.querySelector("#countries");
countrySelected.addEventListener("change", showSelectedCountry);
