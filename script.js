 async function getWeather() {
 const city = document.getElementById('city').value;
 const apiKey = 'c197d351dd5b43ffb8353959250403';
 const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
  try {
        const response = await fetch(url);
        const data = await response.json();
                 if (response.ok) {
                        document.getElementById('weather').innerHTML = `
                        <h3>${data.location.name}, ${data.location.country}</h3>
                        <p>Temperature: ${data.current.temp_c}°C</p>
                        <p>Weather: ${data.current.condition.text}</p>
                        <img src="${data.current.condition.icon}" alt="Weather icon">
                    `;
                } else {
                    document.getElementById('weather').innerHTML = `<p>Error: ${data.error.message}</p>`;
                }
            } catch (error) {
                document.getElementById('weather').innerHTML = '<p>Network error. Please try again.</p>';
            }
        
        }
