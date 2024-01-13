function showSelectedCountry(event) {
  if (event.target.value.length > 0) {
    let countryCurrentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    alert(`It is ${countryCurrentTime} in ${event.target.value}`);
  }
}

let countrySelected = document.querySelector("#countries");
countrySelected.addEventListener("change", showSelectedCountry);
