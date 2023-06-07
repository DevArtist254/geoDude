// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time

// locateMe.btn.addEventListener("click", (e) => {
//  const {lang, lat} = e.target

//  return {lang, lat}
// })

const locateMeBtn = document.getElementById("locateMe")
const showMeDemo = document.getElementById("showMe")

locateMeBtn.addEventListener("click", (e) => {
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showMe, error)
 } else {
  showMeDemo.innerHTML = "Geolocation is not supported by this browser."
 }
})

function showMe(pos) {
 const crd = pos.coords

 showMeDemo.innerHTML =
  "Latitude: " + crd.latitude + "<br>Longitude: " + crd.longitude
}

function error(err) {
 console.warn(`ERROR(${err.code}): ${err.message}`)
}
