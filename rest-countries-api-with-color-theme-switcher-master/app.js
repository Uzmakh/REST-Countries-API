const countries = document.querySelector(".countries")

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((countryCard) => {
      // console.log(countryCard)
      // console.log(countryCard.flags.svg)
      
     
      // paste the card code here
      let country = document.createElement("a")
      country.classList.add("country")
      countryCard.href = `./country.html?name=${countryCard.name.common}`

      country.innerHTML = `

<div class="country-img">
<img
  src="${countryCard.flags.svg}"
  alt="The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band."
/>
</div>

<div class="country-detail">
<h3>${countryCard.name.common}</h3>
<p>Population: ${countryCard.population.toLocaleString("en-IN")}</p>
<p>Region: ${countryCard.region}</p>
<p>Capital: ${countryCard.capital}</p>
</div>

`
      countries.append(country)
    })
  })

// const countryImg = document.createElement('img');
// countryImg.src = 'https://flagcdn.com/md.svg'
// country.append(countryImg)

// console.log(country);
// console.log(countryImg);
// console.log(countries);
