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

const name = document.querySelector(".name");
const button = document.querySelector(".generate");
const nameSelect = document.querySelector("#gender");
const dob = document.querySelector(".dob");
const occupation = document.querySelector(".occupation");

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
  console.log(dateOfBirth);

  dob.innerHTML = `<strong>DOB:</strong> ${dateOfBirth}`;
}

function generateOccupation() {
  let randomOccupation = `${
    occupations[Math.floor(Math.random() * occupations.length)]
  }`;

  occupation.innerHTML = `<strong>Occupation:</strong> ${randomOccupation}`;
}

// main execution
button.addEventListener("click", function () {
  let nameSelectValue = nameSelect.options[nameSelect.selectedIndex].value;

  nameSelectValue === "Male" ? generateMaleName() : generateFemaleName();
  generateDOB();
  generateOccupation();
});
