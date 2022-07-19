let cities = {
  omaha: {
    city: "Omaha",
    state: "Nebraska",
    zip: ["68102", "68116", "68198"],
    areaCode: ["302", "402"],
  },

  saltLake: {
    city: "Salt Lake City",
    state: "Utah",
    zip: ["84095", "84065", "84121"],
    areaCode: ["385", "801"],
  },

  sanFran: {
    city: "San Francisco",
    state: "California",
    zip: ["94016", "94102", "94117"],
    areaCode: ["415", "209", "510"],
  },

  chicago: {
    city: "Chicago",
    state: "Illinois",
    zip: ["60007", "60608", "60602"],
    areaCode: ["312", "773"],
  },

  philly: {
    city: "Philadelphia",
    state: "Pennsylvania",
    zip: ["19019", "19050", "19082"],
    areaCode: ["267", "215"],
  },
};

// generate random object, and acccess the key value pairs
// store the random data in a variable and then access the object dynamically; cities[storedRandomObject].anyproperty

let randomCity = Object.keys(cities);
let chosenCity = randomCity[Math.floor(Math.random() * randomCity.length)];

// console.log(
//   cities[chosenCity].city,
//   cities[chosenCity].areaCode[
//     Math.floor(Math.random() * cities[chosenCity].areaCode.length)
//   ]
// );

let generateAreaCode =
  cities[chosenCity].areaCode[
    Math.floor(Math.random() * cities[chosenCity].areaCode.length)
  ];

console.log(generateAreaCode);
