// data
const maleNames = [
  "Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "James",
  "William",
  "Benjamin",
  "Lucas",
  "Henry",
  "Theodore",
  "Jack",
  "Levi",
  "Alexander",
  "Jackson",
  "Mateo",
  "Daniel",
  "Michael",
  "Mason",
  "Sebastian",
  "Ethan",
  "Logan",
  "Owen",
  "Samuel",
  "Jacob",
  "Asher",
  "Aiden",
  "John",
  "Joseph",
  "Wyatt",
  "David",
  "Leo",
  "Luke",
  "Julian",
  "Hudson",
  "Grayson",
  "Matthew",
  "Ezra",
  "Gabriel",
  "Carter",
  "Isaac",
  "Jayden",
  "Luca",
  "Anthony",
  "Dylan",
  "Lincoln",
  "Thomas",
  "Maverick",
  "Elias",
  "Josiah",
  "Charles",
  "Caleb",
  "Christopher",
  "Ezekiel",
  "Miles",
  "Jaxon",
  "Isaiah",
  "Andrew",
  "Joshua",
  "Nathan",
  "Nolan",
  "Adrian",
  "Cameron",
  "Santiago",
  "Eli",
  "Aaron",
  "Ryan",
  "Angel",
  "Cooper",
  "Waylon",
];

const lastNames = [
  "Solace",
  "Levine",
  "Thatcher",
  "Raven",
  "Bardot",
  "St. James",
  "Hansley",
  "Cromwell",
  "Ashley",
  "Monroe",
  "West",
  "Langley",
  "Daughtler",
  "Madison",
  "Marley",
  "Ellis",
  "Hope",
  "Cassidy",
  "Lopez",
  "Jenkins",
  "Poverly",
  "McKenna",
  "Gonzales",
  "Collymore",
  "Stoll",
  "Verlice",
  "Adler",
  "Huxley",
  "Ledger",
  "Hayes",
  "Ford",
  "Finnegan",
  "Beckett",
  "Gatlin",
  "Pierce",
  "Zimmerman",
  "Dawson",
  "son",
  "Adair",
  "Gray",
];

const femaleNames = [
  "Olivia",
  "Emma",
  "Charlotte",
  "Amelia",
  "Ava",
  "Sophia",
  "Isabella",
  "Mia",
  "Evelyn",
  "Harper",
  "Luna",
  "Camila",
  "Gianna",
  "Elizabeth",
  "Eleanor",
  "Ella",
  "Abigail",
  "Sofia",
  "Avery",
  "Scarlett",
  "Emily",
  "Aria",
  "Penelope",
  "Chloe",
  "Layla",
  "Mila",
  "Nora",
  "Hazel",
  "Madison",
  "Ellie",
  "Lily",
  "Nova",
  "Isla",
  "Grace",
  "Violet",
  "Aurora",
  "Riley",
  "Zoey",
  "Willow",
  "Emilia",
  "Stella",
  "Zoe",
  "Victoria",
  "Hannah",
  "Addison",
  "Leah",
  "Lucy",
  "Eliana",
  "Ivy",
  "Everly",
  "Lillian",
  "Paisley",
  "Elena",
  "Naomi",
  "Maya",
  "Natalie",
  "Kinsley",
  "Delilah",
  "Claire",
  "Audrey",
  "Aaliyah",
  "Ruby",
  "Brooklyn",
  "Alice",
  "Aubrey",
  "Autumn",
  "Leilani",
  "Savannah",
  "Valentina",
  "Kennedy",
];

const occupations = [
  "Actor",
  "Doctor",
  "Lawyer",
  "Teacher",
  "Architect",
  "Musician",
  "Engineer",
  "Film Director",
  "Journalist",
  "Nurse",
  "Author",
  "Scientist",
  "Chef",
  "College Professor",
  "Photographer",
  "Police Officer",
  "Veterinarian",
  "Dentist",
  "Farmer",
  "President",
  "Artist",
  "Athlete",
  "Computer Programmer",
  "Firefighter",
  "Inventor",
];

const streetNames = [
  "Dodge",
  "Main",
  "Pine",
  "Maple",
  "Cedar",
  "Eigth",
  "Elm",
  "Washington",
  "Ninth",
  "Lake",
  "Oak",
  "Emmaline",
  "Park",
  "Pink",
  "Floyd",
  "Best",
  "Band",
];

const streetAbbv = [
  "St",
  "Blvd",
  "Cir",
  "Cor",
  "Ct",
  "Dr",
  "Hts",
  "Mtn",
  "Prk",
  "Plz",
  "Rd",
  "Way",
  "Ave",
];

const streetDirections = ["N", "E", "S", "W"];

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

const emailDomain = [
  "@gmail.com",
  "@yahoo.com",
  "@outlook.com",
  "@AOL.com",
  "@iCloud.com",
];

// selectors
const name = document.querySelector(".name");
const button = document.querySelector(".generate");
const nameSelect = document.querySelector("#gender");
const dob = document.querySelector(".dob");
const occupation = document.querySelector(".occupation");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const city = document.querySelector(".city");
const state = document.querySelector(".state");
const zip = document.querySelector(".zip");
const address = document.querySelector(".address");
const age = document.querySelector(".age");

// refactoring code functions
const randomizeArray = (x) => {
  return x[Math.floor(Math.random() * x.length)];
};

const randomizeBetweenTwoNums = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// functions
function generateMaleName() {
  let generateName = `${randomizeArray(maleNames)} ${randomizeArray(
    lastNames
  )}`;
  name.textContent = generateName;
}

function generateFemaleName() {
  let generateName = `${randomizeArray(femaleNames)} ${randomizeArray(
    lastNames
  )}`;
  name.textContent = generateName;
}

function generateDOB() {
  let dateOfBirth = `${Math.floor(Math.random() * 12) + 1}/${
    Math.floor(Math.random() * 30) + 1
  }/${randomizeBetweenTwoNums(1935, 2000)}`;

  // calculates age
  let birthDate = new Date(dateOfBirth);
  let monthDifference = Date.now() - birthDate.getTime();
  let ageDate = new Date(monthDifference);
  let year = ageDate.getUTCFullYear();
  let calcAge = Math.abs(year - 1970);

  dob.innerHTML = `<strong>DOB:</strong> ${dateOfBirth}`;
  age.innerHTML = `<strong>Age:</strong> ${calcAge}`;
}

function generateOccupation() {
  let randomOccupation = `${randomizeArray(occupations)}`;

  occupation.innerHTML = `<strong>Occupation:</strong> ${randomOccupation}`;
}

function generatePhoneCityStateZip() {
  let randomCity = Object.keys(cities);
  let chosenCity = randomizeArray(randomCity);
  let generateAreaCode =
    cities[chosenCity].areaCode[
      Math.floor(Math.random() * cities[chosenCity].areaCode.length)
    ];

  let randomPhoneNumber = `${Math.floor(randomizeBetweenTwoNums(100, 999))} - 
    ${randomizeBetweenTwoNums(1000, 9999)}`;

  phone.innerHTML = `<strong>Phone:</strong> (${generateAreaCode}) ${randomPhoneNumber}`;

  city.innerHTML = `<strong>City:</strong> ${cities[chosenCity].city}`;
  state.innerHTML = `<strong>State:</strong> ${cities[chosenCity].state}`;
  zip.innerHTML = `<strong>Zip:</strong> ${
    cities[chosenCity].zip[
      Math.floor(Math.random()) * cities[chosenCity].zip.length
    ]
  }`;
}

function generateEmail() {
  personName = name.textContent.split(" ");
  let randomEmail = randomizeArray(emailDomain);
  email.innerHTML = `<strong>Email:</strong> ${personName[0].split("")[0]}${
    personName[1]
  }${Math.floor(Math.random() * 99) + 1}${randomEmail}`.toLowerCase();
}

function generateStreetAddress() {
  let randomStreet = `${randomizeBetweenTwoNums(100, 8500)}`;
  let randomStreetName = `${randomizeArray(streetNames)}`;
  let randomStreetDirection = `${randomizeArray(streetDirections)}`;
  let randomStreetAbbv = `${randomizeArray(streetAbbv)}`;

  address.innerHTML = `<strong>Address</strong> ${randomStreet} ${randomStreetDirection} ${randomStreetName} ${randomStreetAbbv}`;
}

// main execution
button.addEventListener("click", function () {
  let nameSelectValue = nameSelect.options[nameSelect.selectedIndex].value;

  nameSelectValue === "Female" ? generateFemaleName() : generateMaleName();
  generateDOB();
  generateOccupation();
  generatePhoneCityStateZip();
  generateEmail();
  generateStreetAddress();
});
