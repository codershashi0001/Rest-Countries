const c = document.querySelector("h1")    
const n = new URLSearchParams(location.search)
c.innerText = 'Country   -  '+n.get('name')
 
