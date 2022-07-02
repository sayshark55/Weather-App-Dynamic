const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const hiddenData = document.querySelector(".middle_layer");

const getInfo = async (event)=>{
  event.preventDefault();
  let cityVal = cityName.value;
  if(cityVal===""){
    city_name.innerText = "Please Write City Name Before Search";
    hiddenData.classList.add("data_hide");
  } else {
    try{
      let url = `http://api.weatherapi.com/v1/current.json?key=3ce822748f384ba9a0e122940222906&q=${cityVal}&aqi=no`;
      const resp =await fetch(url);
      const data = await resp.json();
      const arrData = [data];
      // console.log(arrData);
      temp_real_val.innerText = arrData[0].current.temp_c;
      const tempStatus = arrData[0].current.is_day;
      // const tempStatus = 1;
      hiddenData.classList.remove("data_hide");
          if (tempStatus == 1) {
            temp_status.innerHTML =
            "<i class='fas fa-sun' style='color: #eccc68;'></i>";
          } else {
            temp_status.innerHTML =
            "<i class='fas fa-thin fa-cloud-moon'></i>"
          }
          city_name.innerText = `${arrData[0].location.name}, ${arrData[0].location.region}, ${arrData[0].location.country}`;
    } catch {
      hiddenData.classList.add("data_hide");
      city_name.innerText = "Please Write City Name Correctly";
    }
    

  }
}

submitBtn.addEventListener("click",getInfo);