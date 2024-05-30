const countryName = new URLSearchParams(location.search);
const flagImage = document.querySelector('.country-details img');
const countryNameElement = document.querySelector('.country-details h1');

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res) => res.json()) 
.then((country) => {

flagImage.src = country.flags.svg
countryNameElement.innerText = country.name.common

if(country.name.nativeName){
    console.log(object.values(country.name.nativeName)[0].common)
  }
})