// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");
let outputspan = document.getElementById("inner");

let contacts = [];
fetch("damn.json")
  .then((res) => res.json())
  .then((data) => (contacts = data));

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "display-all") {
    displayContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayByName();
  } else if (selection === "display-country") {
    displayByCountry();
  } else if (selection === "search-by-email") {
    searchbyemail();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  j = "";
  for (let i = 0; i < contacts.length; i++) {
    j += contactinfo(contacts[i]);
  }
  outputspan.innerHTML = j;
  console.log("Display Contacts");
}

function addContact() {
  l = prompt("add an email");

  let index = findemail(l);
  console.log(index);
  if (index === -1) {
    console.log("email not found");
  } else {
    tryagain(index);
  

    l = g;
  }

  j = prompt("add a name");
  k = prompt("add a country");
  g = prompt("add a lastname");
  f = prompt("add a number");
  contacts.push({
    email: l,
    name: j,
    country: k,
    lastname: g,
    number: f,
  });
  console.log("Add Contact");
}

function removeContact() {
  j = prompt("type email");
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].email === j) {
      contacts.splice(i, 1);
      console.log(contacts[i]);
    }
  }
  console.log("Remove Contact");
}

function displayByName() {
  l = " ";
  j = prompt("type name");
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].lastname === j) {
      l += contactinfo(contacts[i]);
    }
  }
  outputspan.innerHTML = l;
  console.log("Display by Name");
}

function displayByCountry() {
  l = " ";
  j = prompt("type country");
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].country === j) {
      l += contactinfo(contacts[i]);
    }
  }
  outputspan.innerHTML = l;
  console.log("Display by Country");
}
function searchbyemail() {
  l = "";
  a = prompt("type in email");
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].email === a) {
      l += contactinfo(contacts[i]);
    }
  }
  outputspan.innerHTML = l;
}

function contactinfo(x) {
  return `
<div>
  <p>
  <strong>${x.name}-${x.lastname}</strong><br> Email:${x.email}<br>${x.number}(${x.country})
  </p>
</div>`;
}

function findemail(a) {
  a;
  r = 0;
  for (i = 0; i < contacts.length; i++) {
    if (a === contacts[i].email) {
      r = contacts.indexOf(contacts[i]);

      return r;
    }
  }
  if (r === 0) {
    return -1;
  }
}
function tryagain(a) {
  index = a;
  while (index != -1) {
    alert("email already inuse");
    g = prompt("try diferent email");
    let index = findemail(g);
    if (index === -1) {
      break;
    }
    console.log(index);
    console.log("email found at position" + " " + index);
  }
 
  return g;
}
