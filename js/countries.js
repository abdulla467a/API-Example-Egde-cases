const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = counties => {
    
    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
        console.log(country);


        const div = document.createElement('div');
        div.classList.add('country')


        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        // countriesDiv.appendChild(div);


        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`;
    // console.log(url);
    fetch(url)


        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = country => {
    // console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h5>${country.name}</h5>
        <p>population: ${country.population}</p>
        <img width="200px" src="${country.flag}">
    `
}
