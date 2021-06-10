// define gloabl constants 
const url = "https://cors-anywhere.herokuapp.com/https://www.nycgovparks.org/bigapps/DPR_Beaches_001.json"

const dropDown = document.getElementById("dropdown");

const buttonsDiv = document.getElementById("buttons-div");

const directionsButton = document.getElementById("get-directions");
const accessibilityButton = document.getElementById("accessibility-notes");

const directionsDiv = document.getElementById("directions");

const accessibilityDiv = document.getElementById("accessibility");

// write a function appendNames() to populate the dropdown menu with the names of the beaches from the API call

const appendNames = (beachNames) => {
  beachNames.forEach (name => {
    const dropDownItem = document.createElement("option");
    dropDownItem.innerText = name;
    dropDown.append(dropDownItem);
  })
}

// write an async function getNames() to make an axios call to retrieve beach names [note: I had to prepend https://cors-anywhere.herokuapp.com/ to make this work]

const getNames = async () => {
  try { 
    const response = await axios.get(url);
    const beachNames = [];
    for (let i = 0; i < response.data.length; i += 1) {
      beachNames.push(response.data[i].Name);
    }
    appendNames(beachNames);
  } catch (error) {
    console.error(error.message)
  }
}
// write an async function getBeachInfo() to make an axios call to retrieve data for the beach selected and pass response to / get the [i] of the beach object from beachNames?
const getBeachInfo = async (beach) => {
  try {
    const response = await axios.get(url);
    console.log(response.data[beach].Location); //[beach] needs to be defined by the # of the option selected by the user
  } catch (error) {
    console.error(error.message);
  }
}


// directionsButton.addEventListener("click", unhideElement);




// call getNames() on page load


getNames()







// write a function displayBeachInfo() to display the main info on in the #info div of the display section

// write a function displayDirections() to display directions & map in the #directions div of the display section and scroll to the top of that div
// write a function displayAccessibility() to display detailed accessibility information  #accessibility div of the display section and scroll to the top of that div


// add event listener to the dropdown menu to call getBeachInfo() when the user selects a beach

dropDown.addEventListener("change", async () => {
  document.getElementById("info").childNodes.forEach(node => {
    node.remove();
  hideElement(directionsDiv);
  hideElement(accessibilityDiv);
  });
  try {
    const response = await axios.get(url);
    for (let i = 0; i < response.data.length; i += 1) {
      if (response.data[i].Name === dropDown.value) {
        const basicInfo = document.createElement("p");
        basicInfo.innerHTML = 
        
        `<span>${response.data[i].Name}<br>Location:  </span>${response.data[i].Location}<br><span>Bathrooms:  </span>${response.data[i].Bathroom}<br><span>Accessible:  </span>${response.data[i].Accessible}<br><br>${response.data[i].Description}`;

        
        document.getElementById("info").append(basicInfo);
        const directionsDiv = document.getElementById("directions");
        directionsDiv.innerHTML = response.data[i].Directions;
        console.log(response.data[i].Accessible_Notes);

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
  unhideElement(buttonsDiv);
})

const unhideElement = (element) => {
  element.classList.remove("hidden");
}

const hideElement = (element) => {
  element.classList.add("hidden");
}
// add event listener to the directions button in the main info display (in the #info div) to toggle the display property of the #directions div to display on the page
directionsButton.addEventListener("click", () => {unhideElement(directionsDiv)});

// add event listener to the disability info button in the main info display (in the #info div) to call displayAccessibility()
accessibilityButton.addEventListener("click", () => {unhideElement(accessibilityDiv)});
// add event listener to the "top" button to bring use back to the top of the page

// add media query for mobile screen size breakpoint 
