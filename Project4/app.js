const input=document.querySelector("#searchcity")
const search=document.querySelector("#clicked")
const cityname=document.querySelector("#cityname")
const temperature=document.querySelector("#temperature")
const description1=document.querySelector("#description")
const humiddetail=document.querySelector("#humiddetail")
const windmeasure=document.querySelector("#windmeasure")
// let city=input.value; This will have empty value because instantly city value cannot be written

search.addEventListener("click",()=>{
    
    let city=input.value;
    async function fetchWeather(city)  {
         const apiKey = "690a20f0d0bf83883be8d0683d1b7bc2";
         const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
         try{
           const response=await fetch(url);
           const data = await response.json();
            console.log(data);
            let descriptions=data.weather[0].description;
            description1.innerText=descriptions;
            cityname.innerText=city;
            let celcius=data.main.temp-273.15;
            temperature.innerText=celcius.toFixed(2)+" °C";
            let humidity=data.main.humidity;
            humiddetail.innerText=data.main.humidity+"%";
            let wind1=data.wind.speed;
            windmeasure.innerText=wind1+"m/s";

    }
        catch(error){
            console.log(error);} 
        }

        fetchWeather(city) 

})
















































