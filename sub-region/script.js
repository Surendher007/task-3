// Make an HTTP GET request to fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json()) 
  .then(data => {
    data.forEach(country => {
      // Extract country name, region, subregion, and population

      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;

      console.log(`Country: ${name}`);
      console.log(`Region: ${region}`);
      console.log(`Subregion: ${subregion}`);
      console.log(`Population: ${population}`);
      console.log('-----------------------------');
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
