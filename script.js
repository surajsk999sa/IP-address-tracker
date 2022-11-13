// let api= "https://geo.ipify.org/api/v2/country,city?apiKey=at_Jhomg6aS1KvrkhHL24RETIiykuMl8";
const searchInput = document.getElementById("search");
const submitForm= document.getElementById('btn')
const ip= document.getElementById('ip')
const locationOfIp= document.getElementById('location')
const timeZone= document.getElementById('timezone')
const isp= document.getElementById('isp')

 // manual ip address search function
  function ipLocationBySearch(e){
  try{
    e.preventDefault();
    let ipAddress= searchInput.value;
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Jhomg6aS1KvrkhHL24RETIiykuMl8&ipAddress=${ipAddress}`)
    .then((res)=> res.json())
    .then((data)=>{
      ip.innerHTML= data.ip;
      locationOfIp.innerHTML= `${data.location.country},${data.location.city}`;
      timeZone.innerHTML= `UTC${data.location.timezone}`;
      isp.innerHTML = data.isp;
        // map code 
        lat= data.location.lat;
    lang= data.location.lng;
   console.log(lat, lang)
   let map = L.map('map').setView([lat, lang], 13);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([lat, lang]).addTo(map);
    

    })
  }
     
catch(error){
  document.getElementById('map').innerHTML = error;
}

}
 submitForm.addEventListener('click', ipLocationBySearch);



