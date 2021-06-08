// store the dropdown menu in a constant
const dropDown = document.getElementById("dropdown");

// write a function appendNames() to populate the dropdown menu with the names of the beaches; thge function should 1) create an option for each name and 2) find the value for the key "Name" for each item in the response data and set it to the innerText of each option 

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
    const url = "https://cors-anywhere.herokuapp.com/https://www.nycgovparks.org/bigapps/DPR_Beaches_001.json"
  
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


// call getNames() on page load
getNames()






// write an async function getBeachInfo() to make an axios call to retrieve data for the beach selected and pass response to 

// write a function displayBeachInfo() to display the main info on in the #info div of the display section

// write a function displayDirections() to display directions & map in the #directions div of the display section and scroll to the top of that div

// write a function displayAccessibility() to display detailed accessibility information  #accessibility div of the display section and scroll to the top of that div


// add event listener to the dropdown menu to call getBeachInfo() when the user selects a beach

// add event listener to the directions button in the main info display (in the #info div) to call displayDirections()

// add event listener to the more info button in the main info display (in the #info div) to call displayAccessibility()

// add event listener to the "top" button to bring use back to the top of the page

// add media query for mobile screen size breakpoint 
