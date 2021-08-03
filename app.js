window.addEventListener('load', () => {
  let long // making a var for long
  let lat // making a var for the latitude

  /* where using querySelectors to get the dom elements in our html that we put classes on.
  I'm putting the elements into variables to make easy to call.
  */
  let description = document.querySelector(".description")
  let degree = document.querySelector(".degree")
  let timezone = document.querySelector(".timezone")

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)

      long = position.coords.longitude
      lat = position.coords.latitude
      const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=1c76e30a9ba9fa0559a64deef6afdc05`

      fetch(api).then(response => {
        return response.json()
      }).then(data => {
        //Set DOM Elements from the API
        
        const {temp, icon} = data.current
        console.log(data.current)
        degree.textContent = temp
        console.log(temp)

        timezone.textContent = data.timezone
        console.log(data.timezone)

        const avg =  data.current.weather[0].main
        console.log(avg)
       
        description.textContent = avg
        // Set Icons according to weather description

        setIcons(icon, document.querySelector('.icon'))



      })  
    })
  } 
  function setIcons (icon,iconId){
    const skycons = new Skycons({color: "white"})
    const currentIcon = icon.replace(/-/g, "_").toUpperCase()
    skycons.play()
    return skycons.set(iconId, Skycons[currentIcon])
  }
})
