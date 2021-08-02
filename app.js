window.addEventListener('load', ()=>{
  let long
  let lat
  let currentDate = new Date()
  if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position =>{
  console.log(position)
  console.log(currentDate)
})
  }else {
    h1.textContent = " hey dis is not working"
  }
})