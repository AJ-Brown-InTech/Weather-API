window.addEventListener('load', ()=>{
  let long //making a var for long
  let lat // making a var for the latitude
  let currentDate = new Date() // a var for me to keep track of my function working and having some fun with JavaScript

  /* where using querySelectors to get the dom elements in our html that we put classes on.
  I'm putting the elements into variables to make easy to call.
  */
  let description = document.querySelector(".description")
  let degree = document.querySelector(".degree")
  let timezone = document.querySelector(".timezone")

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
  console.log(position)
  console.log(currentDate)

    

  long = position.coords.longitude
  lat = position.coords.latitude
  const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=1c76e30a9ba9fa0559a64deef6afdc05`

  fetch(api)
  .then(response => {
    return response.json()
  })
  .then(data => {
console.log(data)
// const {temperature, summary} = data.currently
// //Set DOM Elements from the API
// degree.textContent = temperature
  })
})
}
})

