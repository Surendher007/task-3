// Using fetch API to fetch data from the REST Countries API

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      if (country.flags) {
        console.log(country.name.common + ': ' + country.flags.svg);
      } else {
        console.log(country.name.common + ': No flag available');
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));
