// define global variables
// const proxyUrl = "http://localhost:8080/";
// const url = "https://www.nycgovparks.org/bigapps/DPR_Beaches_001.json";

const dropDown = document.getElementById("dropdown");

const buttonsDiv = document.getElementById("buttons-div");

const directionsButton = document.getElementById("get-directions");
const accessibilityButton = document.getElementById("accessibility-notes");
const weatherButton = document.getElementById("get-weather");
const topButton = document.getElementById("top");

const directionsDiv = document.getElementById("directions");
const accessibilityDiv = document.getElementById("accessibility");
const weatherDiv = document.getElementById("weather");


// workaround for CORS issue retrieving supposedly open data from NYC Open Data

const beachData = [{"Prop_ID":"X039","Name":"Orchard Beach and Promenade","Location":"On Long Island Sound in Pelham Bay Park","Phone":"(718) 885-2275","Surf":null,"Note":null,"Accessible":"Y","Accessible_Notes":"<a href=\"\/accessibility\/beach-trail\">Beach mats<\/a> are available in Sections 7 and 8. Two beach wheelchairs specially designed for use on the sand are available. For availability, call (718) 885-2275.","Barbecue_Allowed":"Yes (North and South Picnic Areas)","Bathroom":"Yes","Bicycle_and_Skate_Path":null,"Boardwalk":null,"Concession_Stand":"Orchard Beach Snack Bar's menu items include hamburgers,  hot dogs, chicken sandwiches, fried chicken, shish kabobs, fries, onion rings, nachos, wings, slushes, soda.","Performance_Pavilion":null,"Mobile_Charging_Stations":"Yes","Directions":"<h5>Directions<\/h5><p><a href=\"https:\/\/www.google.com\/maps\/dir\/\/Orchard+Beach+and+Promenade,+Park+Dr,+Bronx,+NY+10464\/@40.8663627,-73.7944606,17.5z\/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c28c6007a99c73:0x8d82518be70188cb!2m2!1d-73.7922899!2d40.8672924!3e0\">Directions via Google Maps<\/a><\/p><h5>Parking<\/h5><p>During the beach season, parking is $8.00 on Mondays through Fridays for cars and vans, and $10.00 on weekends and holidays. Parking is $13 on weekdays, weekends, and holidays for buses, trucks, and commercial vehicles. A senior citizen discount is available on weekdays for patrons aged 65 and older, please bring a valid ID and inquire at the parking lot toll booths. Once the beaches have closed for the year, parking is free.<\/p>","lat":"40.8664","lon":"-73.7938","Description":"<p>Orchard Beach, Bronx's sole public beach, was proclaimed &quot;The  Riviera of New York&quot; when it was created in the 1930s.  The 115-acre, 1.1-mile-long beach contains a  hexagonal-block promenade, a central pavilion, snack bars, food and souvenir carts, two playgrounds, two picnic areas, a large parking lot, and 26 courts  for basketball, volleyball, and handball. Changing areas and showers are available.<\/p>"},{"Prop_ID":"B251","Name":"Manhattan Beach","Location":"On Atlantic Ocean, Oriental Blvd., from Ocean Avenue to Mackenzie Street","Phone":"(718) 946-1373","Surf":null,"Note":null,"Accessible":"Y","Accessible_Notes":"<a href=\"\/accessibility\/beach-trail\">Beach mats<\/a> are available on the east side of the beach, near the picnic tables.","Barbecue_Allowed":"Yes (Northeast of promenade, median adjacent to parking lot, and Oriental Boulevard & Hastings Street)","Bathroom":"Yes","Bicycle_and_Skate_Path":"Yes (only permitted from 5:00 a.m.-10:00 a.m.)","Boardwalk":"Yes (promenade)","Concession_Stand":"Yes","Performance_Pavilion":null,"Mobile_Charging_Stations":null,"Directions":"<h5>Directions<\/h5>  <p><a href=\"https:\/\/www.google.com\/maps\/dir\/\/Manhattan+Beach+Park,+760+Oriental+Blvd,+Brooklyn,+NY+11235\/@40.5768267,-73.9447838,17z\/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c244715db7fa23:0xd4397da9e2453f37!2m2!1d-73.9425951!2d40.5768226!3e0\">Directions via Google Maps<\/a><\/p>  <h5>Parking<\/h5>  <p>Exit 8 off Belt Parkway and follow signs to parking: $7.00 Monday through Friday and $22.00 weekends and holidays. The parking lot is only open during beach season.<\/p>","lat":"40.5764","lon":"-73.9441","Description":"<p>This small, family-friendly beach east of Brighton Beach attracts locals looking for a somewhat calmer beach than its neighbor. Visitors bring full picnic baskets and set up barbecues along the water.<\/p>"},{"Prop_ID":"B169","Name":"Coney Island and Coney Island Boardwalk","Location":"On Atlantic Ocean, from W. 37th Street to Ocean Parkway","Phone":"(718) 946-1350","Surf":null,"Note":null,"Accessible":"Y","Accessible_Notes":"<a href=\"\/accessibility\/beach-trail\">Beach mats<\/a> are available at West 33 Street, Stillwell Avenue, West 5th Street, Brighton 2nd Street, and Brighton 6th Street.","Barbecue_Allowed":null,"Bathroom":"Yes (West 33st., West 27 st, West 22st, West 16st Streets, Stillwell Avenue, and West 8 Street)","Bicycle_and_Skate_Path":null,"Boardwalk":"Yes (closed 1:00 a.m.-5:00 a.m.)","Concession_Stand":"Yes","Performance_Pavilion":"Yes","Mobile_Charging_Stations":null,"Directions":"<h5>Directions<\/h5><p><a href=\"https:\/\/www.google.com\/maps\/dir\/\/Coney+Island+Beach+%26+Boardwalk,+37,+Riegelmann+Boardwalk,+Brooklyn,+NY+11224\/@40.5719326,-73.9829386,16.25z\/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c244359eeaa7af:0xac009374f15c26f4!2m2!1d-73.9787857!2d40.5726046!3e0\">Directions via Google Maps<\/a><\/p><h5>Parking<\/h5><p>Metered street parking<\/p>","lat":"40.573","lon":"-73.9441","Description":"<p>Iconic Coney Island is bursting with activity throughout the summer and even during the off-season. Walk along the famous boardwalk, ride on amusement  rides, enjoy swimming or sunbathing on its nearly three miles of sandy beaches,  or check out the courts for beach volleyball, handball, and basketball. Too  chilly out to swim&Alpha; Check out the New  York Aquarium, the Abe Stark Ice Skating Rink, or the MCU Park (formerly  KeySpan Park) baseball stadium where you can see the Brooklyn Cyclones play  ball.<\/p>"},{"Prop_ID":"Q162","Name":"Rockaway Beach and Boardwalk","Location":"On Atlantic Ocean, from Beach 9th Street, Far Rockaway, to Beach 149th Street, Neponsit","Phone":"(718) 318-4000","Surf":"Y","Note":"Surf beaches are located between Beach 68 -  Beach 71 Street, Beach 87 - Beach 91 Street, and Beach 110 - Beach 111 Street.<br \/>Additional rules apply to the surf beaches:  <a href=\"\/sub_things_to_do\/facilities\/images\/pdf\/RockawaySurfBeachRules.pdf\">Download Surf Beach Rules (PDF, 323KB)<\/a><br \/>Kayaking and stand-up paddleboarding areas are at Beach 32 Street and at Beach 57 Street.","Accessible":"Y","Accessible_Notes":null,"Barbecue_Allowed":null,"Bathroom":"Yes","Bicycle_and_Skate_Path":"Yes (Bicycle path along the boardwalk)","Boardwalk":"Yes (closed 10:00 p.m. - 6:00 a.m.)","Concession_Stand":"Yes (B.17th Street, B.86th Street Island, B.97th Street Island, and B.106th Street Island.)","Performance_Pavilion":null,"Mobile_Charging_Stations":"Yes (B. 108th St, B. 97th St, B. 84th St.)","Directions":"<h5>Directions<\/h5><p><a href=\"https:\/\/www.google.com\/maps\/dir\/\/Rockaway+Beach,+Boardwalk,+Far+Rockaway,+NY+11693\/@40.5831125,-73.8184775,17.25z\/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c268463993b79b:0x120f3543e1685b3!2m2!1d-73.8145956!2d40.5836696!3e0\">Directions via Google Maps<\/a><\/p><h5>Parking<\/h5><p>Free parking lots at B. 11th to B. 15th Street and B. 95th Street; free street parking.<\/p><!--<h5>Entrances<\/h5><p>Due to the installation of berms and other service changes, entrances to Rockaway Beach have changed. Visit our <a href=\"\/facility\/beaches\/rockaway-beach\/beach-access\">Rockaway Beach Access<\/a> page for more.<\/p>-->","lat":"40.5898","lon":"-73.7693","Description":"<p>From surfers to swimmers to the Ramones, everyone wants to \"hitch a ride to Rockaway Beach.\" Rockaway Beach is a year-round resource for residents all along the Rockaway peninsula, and it comes alive each summer with millions of visitors. <\/p>  <p>Beach goers can enjoy the sand and water, the variety of concessions, and the city's only legal surfing beaches. Rockaway Beach is also home to a variety of playgrounds and other outdoor activities.<\/p>"},{"Prop_ID":"R046","Name":"South Beach","Location":"On Lower New York Bay, from Fort Wadsworth to Miller Field, Midland Beach","Phone":null,"Surf":null,"Note":null,"Accessible":"Y","Accessible_Notes":"<a href=\"\/accessibility\/beach-trail\">Beach mats<\/a> are available at Jefferson Avenue & Father Capodanno Boulevard.","Barbecue_Allowed":null,"Bathroom":"Yes","Bicycle_and_Skate_Path":"Yes (only permitted from 5:00 a.m.-10:00 a.m.)","Boardwalk":null,"Concession_Stand":"Yes","Performance_Pavilion":null,"Mobile_Charging_Stations":"Yes","Directions":"<h5>Directions<\/h5><p><a href=\"https:\/\/www.google.com\/maps?cid=10915733185799212685&hl=en&_ga=2.62140780.1399457173.1529943378-874716952.1494370890\">Directions via Google Maps<\/a><\/p><h5>Parking<\/h5><p>Free parking lots<\/p>","lat":"40.5876","lon":"-74.0672","Description":"<p>Beachgoers can sunbathe while taking in a lovely view of the Verazzano Bridge, bike through a scenic trail, jog along the boardwalk, kayak, play tennis, or fish off of the Ocean Breeze Fishing Pier, one of the city's most popular.  A park on the beach designed especially for seniors contains chess tables, benches, and bocce courts. The beach's Fountain of Dolphins is a popular stop on any tour of the boardwalk. <\/p>"},{"Prop_ID":"R031","Name":"Wolfe's Pond Beach","Location":"On Raritan Bay and Prince's Bay, Holton to Cornelia Avenues","Phone":"(718) 984-8266","Surf":null,"Note":null,"Accessible":"Y","Accessible_Notes":"There are two informal ramps that can be used for wheelchair access.","Barbecue_Allowed":null,"Bathroom":null,"Bicycle_and_Skate_Path":null,"Boardwalk":null,"Concession_Stand":null,"Performance_Pavilion":null,"Mobile_Charging_Stations":null,"Directions":"<h5>Directions<\/h5><p><a href=\"https:\/\/www.google.com\/maps\/dir\/\/Wolfe's+Pond+Beach,+Wolfe's+Pond+Park,+Holton+to+Cornelia+Avenues,+Staten+Island,+NY+10312\/@40.5182403,-74.1888392,17z\/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c24bbdf1d35e1f:0x6e926a5cea979e3d!2m2!1d-74.1866505!2d40.5182362!3e0\">Directions via Google Maps<\/a><\/p><h5>Parking<\/h5><p>Free parking lot<\/p>","lat":"40.5151","lon":"-74.19","Description":"<p>Love the ocean but think NYC&rsquo;s beaches are just too chaotic? Wolfe&rsquo;s Pond Beach is the city&rsquo;s best-kept secret, a small, calm, and secluded beach that&rsquo;s a perfect retreat for those looking to get away from summer&rsquo;s crowds.<\/p>"},{"Prop_ID":"R046","Name":"Midland Beach and Franklin D. Roosevelt Boardwalk","Location":"On Lower New York Bay, from Fort Wadsworth to Miller Field, Midland Beach","Phone":"(718) 987-0709","Surf":null,"Note":null,"Accessible":"Y","Accessible_Notes":"<a href=\"\/accessibility\/beach-trail\">Beach mats<\/a> are available at Jefferson Avenue & Father Capodanno Boulevard.","Barbecue_Allowed":"Yes (Midland Avenue and Lincoln Avenue)","Bathroom":"Yes","Bicycle_and_Skate_Path":"Yes (only permitted from 5:00 a.m.-10:00 a.m.)","Boardwalk":"Yes (closed 9:00 p.m.-6:00 a.m.)","Concession_Stand":null,"Performance_Pavilion":null,"Mobile_Charging_Stations":"Yes","Directions":"<h5>Directions<\/h5><p><a href=\"https:\/\/www.google.com\/maps\/dir\/\/Midland+Beach,+Father+Capodanno+Blvd,+Staten+Island,+NY+10305\/@40.5742759,-74.0913511,16.75z\/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c24f27417e7075:0x2fa3b99ddd1b3d97!2m2!1d-74.0862603!2d40.5708004!3e0\">Directions via Google Maps<\/a><\/p><h5>Parking<\/h5><p>Free parking lots<\/p>","lat":"40.5694","lon":"-74.0878","Description":"<p>Midland Beach shares the Franklin D. Roosevelt Boardwalk with neighboring South Beach, and tends to be the somewhat less crowded of the two beaches. The beach's attractions include a playground and courts for tennis and shuffleball, as well as a sea turtle fountain for children.<\/p>"},{"Prop_ID":"R016","Name":"Cedar Grove Beach","Location":"Ebbitts Street and Cedar Grove Avenue","Phone":"(718) 987-2060","Surf":null,"Note":null,"Accessible":"Y","Accessible_Notes":"<a href=\"\/accessibility\/beach-trail\">Beach mats<\/a> are available for wheelchair access.","Barbecue_Allowed":null,"Bathroom":null,"Bicycle_and_Skate_Path":null,"Boardwalk":null,"Concession_Stand":null,"Performance_Pavilion":null,"Mobile_Charging_Stations":null,"Directions":"<h5>Directions<\/h5><p><a href=\"https:\/\/www.google.com\/maps\/dir\/\/Cedar+Grove+Beach,+Staten+Island,+NY\/@40.5562508,-74.1048445,17z\/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c249404fe91c0d:0xb411a5128955a2e5!2m2!1d-74.1023398!2d40.5563584!3e0\">Directions via Google Maps<\/a><\/p><h5>Parking<\/h5><p>Free parking lot<\/p>","lat":null,"lon":null,"Description":"<p>The city's newest beach is a converted oceanfront bungalow colony. This charming beach is smaller and somewhat more tranquil than its neighbors, Midland Beach and South Beach, and is popular with the area's families.<\/p>"},{"Prop_ID":"B169","Name":"Brighton Beach","Location":"On Atlantic Ocean, from Ocean Parkway to Corbin Place","Phone":"(718) 946-1350","Surf":"N","Note":null,"Accessible":"Y","Accessible_Notes":null,"Barbecue_Allowed":null,"Bathroom":"Yes (West 2nd Street and Brighton 2nd Street)","Bicycle_and_Skate_Path":"Yes (only permitted from 5:00 a.m.-10:00 a.m.)","Boardwalk":null,"Concession_Stand":"Yes","Performance_Pavilion":null,"Mobile_Charging_Stations":"Yes","Directions":"<h5>Directions<\/h5><p><a href=\"https:\/\/www.google.com\/maps\/dir\/\/Brighton+Beach+Boardwalk,+601+Riegelmann+Boardwalk,+Brooklyn,+NY+11235\/@40.5754678,-73.9628419,17.75z\/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c244403e24b1ab:0x171be42083b4bbb9!2m2!1d-73.9607143!2d40.5750993!3e0\">Directions via Google Maps<\/a><\/p><h5>Parking<\/h5><p>Metered street parking<\/p>","lat":"40.575","lon":"-73.963","Description":"<p>This beach next door to Coney Island is popular all summer long, as individuals and families from all over the city come to enjoy the beach&rsquo;s sand and water and to explore the surrounding neighborhood, known as &ldquo;Little  Odessa&rdquo; for its Eastern European shops and restaurants.<\/p>"}]

const beachNames = []
beachData.forEach(beach => beachNames.push(beach.Name))



//function appendNames populates the dropdown menu with the names of the beaches from the API call

const appendNames = (beachNames) => {
  beachNames.forEach((name) => {
    const dropDownItem = document.createElement("option");
    dropDownItem.innerText = name;
    dropDown.append(dropDownItem);
  });
};

appendNames(beachNames)
// async function getNames makes axios call to retrieve beach names [note: I had to prepend https://cors-anywhere.herokuapp.com/ to make this work but that won't work after Jan 2021]

// const getNames = async () => {
//   try {
//     const response = await axios.get(proxyUrl + url);
//     const beachNames = [];
//     for (let i = 0; i < response.data.length; i += 1) {
//       beachNames.push(response.data[i].Name);
//     }
//     appendNames(beachNames);
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// call getNames() on page load
// getNames();

// event listener on dropdown menu clears and hides information divs, then makes API call for information for selected beach and calls getWeather function, passing in the lat and lon from the first API

dropDown.addEventListener("change", () => {
  document.getElementById("info").childNodes.forEach((node) => {
    node.remove();
  });

  hideElement(directionsDiv);
  hideElement(accessibilityDiv);
  hideElement(weatherDiv);
  hideElement(topButton);

  beachData.forEach(beach => {
    if (beach.Name === dropDown.value) {
      let lat = beach.lat;
      let lon = beach.lon;
      getWeather(lat, lon);
      
      const basicInfo = document.createElement("p");
        basicInfo.innerHTML = `<span>${beach.Name}<br><br>Location:  </span>${beach.Location}<br><span>Bathrooms:  </span>${beach.Bathroom}<br><span>Accessible:  </span>${beach.Accessible}<br><br>${beach.Description}`;
        document.getElementById("info").append(basicInfo);
      
      const directionsDiv = document.getElementById("directions");
        directionsDiv.innerHTML = beach.Directions;

      const accessibilityDiv = document.querySelector("#accessibility");
        if (beach.Accessible_Notes === null) {
          accessibilityDiv.innerHTML = `For more information call ${beach.Phone}.`;
        } else if (
          beach.Phone === null &&
          beach.Accessible_Notes === null
        ) {
          accessibilityDiv.innerHTML = "For more information call 311.";
        } else if (beach.Phone === null) {
          accessibilityDiv.innerHTML = `${beach.Accessible_Notes}<br> For more information call 311.`;
        } else {
          accessibilityDiv.innerHTML = `${beach.Accessible_Notes}<br> For more information call ${beach.Phone}.`;
        }}
      })

    unhideElement(weatherButton);
    unhideElement(accessibilityButton);
    unhideElement(directionsButton);
      });
  



// dropDown.addEventListener("change", async () => {
//   document.getElementById("info").childNodes.forEach((node) => {
//     node.remove();
//   });
//   hideElement(directionsDiv);
//   hideElement(accessibilityDiv);
//   hideElement(weatherDiv);
//   hideElement(topButton);
//   try {
//     const response = await axios.get(proxyUrl + url);
//     for (let i = 0; i < response.data.length; i += 1) {
//       if (response.data[i].Name === dropDown.value) {
//         let lat = response.data[i].lat;
//         let lon = response.data[i].lon;
//         getWeather(lat, lon);

//         const basicInfo = document.createElement("p");
//         basicInfo.innerHTML = `<span>${response.data[i].Name}<br><br>Location:  </span>${response.data[i].Location}<br><span>Bathrooms:  </span>${response.data[i].Bathroom}<br><span>Accessible:  </span>${response.data[i].Accessible}<br><br>${response.data[i].Description}`;

//         document.getElementById("info").append(basicInfo);
//         const directionsDiv = document.getElementById("directions");
//         directionsDiv.innerHTML = response.data[i].Directions;

//         const accessibilityDiv = document.querySelector("#accessibility");
//         if (response.data[i].Accessible_Notes === null) {
//           accessibilityDiv.innerHTML = `For more information call ${response.data[i].Phone}.`;
//         } else if (
//           response.data[i].Phone === null &&
//           response.data[i].Accessible_Notes === null
//         ) {
//           accessibilityDiv.innerHTML = "For more information call 311.";
//         } else if (response.data[i].Phone === null) {
//           accessibilityDiv.innerHTML = `${response.data[i].Accessible_Notes}<br> For more information call 311.`;
//         } else {
//           accessibilityDiv.innerHTML = `${response.data[i].Accessible_Notes}<br> For more information call ${response.data[i].Phone}.`;
//         }
//       }
//     }
//   } catch (error) {
//     console.error(error.message);
//   }

//   unhideElement(weatherButton);
//   unhideElement(accessibilityButton);
//   unhideElement(directionsButton);
// });

//async function makes API call for weather and sets innerHTML of weather div to current conditions and temperature

const getWeather = async (lat, lon) => {
  const weatherKey = "ad7657fdc05f9179f6aa98706fa65f23";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=imperial&appid=${weatherKey}`;

  try {
    const response = await axios.get(weatherUrl);
    weatherDiv.innerHTML = `<span>Current Conditions:</span> ${
      response.data.current.weather[0].description
    }<span><br>Temperature:</span> ${Math.round(response.data.current.temp)} F`;
  } catch (error) {
    console.error(error.message);
  }
};

// functions to hide and unhide elements by adding/removing hidden class

const unhideElement = (element) => {
  element.classList.remove("hidden");
};

const hideElement = (element) => {
  element.classList.add("hidden");
};

// event listeners display div with the relevant information and hide the other divs

weatherButton.addEventListener("click", () => {
  unhideElement(weatherDiv);
  hideElement(accessibilityDiv);
  hideElement(directionsDiv);
  unhideElement(topButton);
});

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
