// define global constants 
const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const url = "https://www.nycgovparks.org/bigapps/DPR_Beaches_001.json"

const dropDown = document.getElementById("dropdown");

const buttonsDiv = document.getElementById("buttons-div");

const directionsButton = document.getElementById("get-directions");
const accessibilityButton = document.getElementById("accessibility-notes");
const weatherButton = document.getElementById("get-weather");
const topButton = document.getElementById("top");

const directionsDiv = document.getElementById("directions");
const accessibilityDiv = document.getElementById("accessibility");
const weatherDiv = document.getElementById("weather");


//function appendNames populates the dropdown menu with the names of the beaches from the API call

const appendNames = (beachNames) => {
  beachNames.forEach (name => {
    const dropDownItem = document.createElement("option");
    dropDownItem.innerText = name;
    dropDown.append(dropDownItem);
  })
}

// async function getNames makes axios call to retrieve beach names [note: I had to prepend https://cors-anywhere.herokuapp.com/ to make this work]

const getNames = async () => {
  try { 
    const response = await axios.get(proxyUrl + url);
    const beachNames = [];
    for (let i = 0; i < response.data.length; i += 1) {
      beachNames.push(response.data[i].Name);
    }
    appendNames(beachNames);
  } catch (error) {
    console.error(error.message)
  }
}

// call getNames() on page load

getNames()


// event listener on dropdown menu clears and hides information divs, then makes API call for information for selected beach and calls getWeather function, passing in the lat and lon from the first API

dropDown.addEventListener("change", async () => {
  document.getElementById("info").childNodes.forEach(node => {
    node.remove();
  });
  hideElement(directionsDiv);
  hideElement(accessibilityDiv);
  hideElement(weatherDiv);
  hideElement(topButton);
  try {
    const response = await axios.get(proxyUrl + url);
    for (let i = 0; i < response.data.length; i += 1) {
      if (response.data[i].Name === dropDown.value) {
        
        let lat = response.data[i].lat;
        let lon = response.data[i].lon;
          getWeather(lat, lon);
        
        const basicInfo = document.createElement("p");
        basicInfo.innerHTML = 
        
        `<span>${response.data[i].Name}<br><br>Location:  </span>${response.data[i].Location}<br><span>Bathrooms:  </span>${response.data[i].Bathroom}<br><span>Accessible:  </span>${response.data[i].Accessible}<br><br>${response.data[i].Description}`;

        
        document.getElementById("info").append(basicInfo);
        const directionsDiv = document.getElementById("directions");
        directionsDiv.innerHTML = response.data[i].Directions;

        const accessibilityDiv = document.querySelector("#accessibility");
        if (response.data[i].Accessible_Notes === null) {
          accessibilityDiv.innerHTML = `For more information call ${response.data[i].Phone}.`
        }
        else if (response.data[i].Phone === null && response.data[i].Accessible_Notes === null) {
          accessibilityDiv.innerHTML = "For more information call 311."}
        else if (response.data[i].Phone === null) {accessibilityDiv.innerHTML = `${response.data[i].Accessible_Notes}<br> For more information call 311.`
        } else {
            accessibilityDiv.innerHTML = `${response.data[i].Accessible_Notes}<br> For more information call ${response.data[i].Phone}.`
          };

      }  
      
    }
    
  } catch (error) {
    console.error(error.message);
  }
  
  unhideElement(weatherButton);
  unhideElement(accessibilityButton);
  unhideElement(directionsButton);
})

//async function makes API call for weather and sets innerHTML of weather div to current conditions and temperature

const getWeather = async (lat, lon) => {
  
  const weatherKey = "ad7657fdc05f9179f6aa98706fa65f23";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=imperial&appid=${weatherKey}`
  
  try {
    const response = await axios.get(weatherUrl);
    weatherDiv.innerHTML = `<span>Current Conditions:</span> ${response.data.current.weather[0].description}<span><br>Temperature:</span> ${Math.round(response.data.current.temp)} F`;
    
  } catch (error) {
    console.error(error.message);
  }
}

// functions to hide and unhide elements by adding/removing hidden class

const unhideElement = (element) => {
  element.classList.remove("hidden");
}

const hideElement = (element) => {
  element.classList.add("hidden");
}

// event listeners display div with the relevant information and hide the other divs

weatherButton.addEventListener("click", () => {
  unhideElement(weatherDiv);
  hideElement(accessibilityDiv);
  hideElement(directionsDiv);
  unhideElement(topButton);
})

directionsButton.addEventListener("click", () => {
  unhideElement(directionsDiv);
  hideElement(accessibilityDiv);
  hideElement(weatherDiv);
  unhideElement(topButton);
});

accessibilityButton.addEventListener("click", () => {
  unhideElement(accessibilityDiv);
  hideElement(directionsDiv);
  hideElement(weatherDiv);
  unhideElement(topButton);
});