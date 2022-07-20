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

const emailDomain = ["@gmail.com", "@yahoo.com", "@outlook.com", "@AOL.com"];

// selectors
const name = document.querySelector(".name");
const button = document.querySelector(".generate");
const nameSelect = document.querySelector("#gender");
const dob = document.querySelector(".dob");
const occupation = document.querySelector(".occupation");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

// functions
function generateMaleName() {
  let generateName = `${
    maleNames[Math.floor(Math.random() * maleNames.length)]
  } ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  name.textContent = generateName;
}

function generateFemaleName() {
  let generateName = `${
    femaleNames[Math.floor(Math.random() * femaleNames.length)]
  } ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  name.textContent = generateName;
}

function generateDOB() {
  const min = 1935;
  const max = 2000;
  let dateOfBirth = `${Math.floor(Math.random() * 12) + 1}/${
    Math.floor(Math.random() * 30) + 1
  }/${Math.floor(Math.random() * (max - min + 1) + min)}`;

  dob.innerHTML = `<strong>DOB:</strong> ${dateOfBirth}`;
}

function generateOccupation() {
  let randomOccupation = `${
    occupations[Math.floor(Math.random() * occupations.length)]
  }`;

  occupation.innerHTML = `<strong>Occupation:</strong> ${randomOccupation}`;
}

function generatePhoneNumber() {
  let randomCity = Object.keys(cities);
  let chosenCity = randomCity[Math.floor(Math.random() * randomCity.length)];
  let generateAreaCode =
    cities[chosenCity].areaCode[
      Math.floor(Math.random() * cities[chosenCity].areaCode.length)
    ];

  let randomPhoneNumber = `${Math.floor(
    Math.random() * (999 - 100 + 1) + 100
  )} - 
    ${Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)}`;

  phone.innerHTML = `<strong>Phone:</strong> (${generateAreaCode}) ${randomPhoneNumber}`;
}

function generateEmail() {
  personName = name.textContent.split(" ");
  let randomEmail = emailDomain[Math.floor(Math.random() * emailDomain.length)];
  email.innerHTML = `<strong>Email:</strong> ${personName[0].split("")[0]}${
    personName[1]
  }${Math.floor(Math.random() * 99) + 1}${randomEmail}`.toLowerCase();
}

// main execution
button.addEventListener("click", function () {
  let nameSelectValue = nameSelect.options[nameSelect.selectedIndex].value;

  nameSelectValue === "Male" ? generateMaleName() : generateFemaleName();
  generateDOB();
  generateOccupation();
  generatePhoneNumber();
  generateEmail();
});
