// let img = document.querySelector("img")

// fetch("https://dog.ceo/api/breeds/image/random")
// .then( (raw) => raw.json())
// .then ((t) => {
//     console.log("jai ho data mil gaya");
//     console.log(t.message)
// // img.setAttribute("src",t.message)
// img.src = t.message
// })

// document.querySelector("button").addEventListener("click",()=>{
//     location.reload()
// })


fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region')
.then(res => res.json())
.then((data) => {
    const container = document.querySelector(".countries")
    data.forEach((country) => {
        // console.log(country.capital[0]);
        // console.log(country.flags.svg);
        // console.log(country.population);
        // console.log(country.region);
        // console.log(country.name.common);
        // console.log(country);

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
