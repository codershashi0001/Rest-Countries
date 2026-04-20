
fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region')
.then(res => res.json())
.then((data) => {
    const container = document.querySelector(".countries")
    data.forEach((country) => {

        const cc = document.createElement('div')
        cc.className = `carddd`;
     cc.innerHTML = `
    <div class="card">
         <a href="https://www.google.com/search?q=${encodeURIComponent(country.name.common)}" target='blank'>
  <img src= "${country.flags.svg}" alt="${country.flags.alt}">
  </a>
  
           <a href="./country.html?name=${country.name.common}&region=${country.region}" target='blank'>
        <div class="card-text">
           <p class="card-title"><b>${country.name.common}</b></p>
    <div class="p">   <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
       <p><b>Region: </b>${country.region}</p>
       <p><b>Capital: </b>${country.capital}</p></div>
       </div>
    </div>
    </a>
`
 container.appendChild(cc)

    })
})


// const cc = document.createElement('div')

// cc.className = `carddd`
// carddd.innerHTML = `
//    <a>
//     <div class="card">
//         <img src= "${country.flags.svg}" alt="${country.name.common}">
//         <div class="card-text">
//            <p class="card-title"><b>"${country.name.common}"</b></p>
//     <div class="p">   <p><b>Population: </b>"${country.population}"</p>
//        <p><b>Region: </b>"${country.region}"</p>
//        <p><b>Capital: </b>"${country.capital}"</p></div>
//        </div>
//     </div>
//     </a>
// `
