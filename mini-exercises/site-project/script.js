let myProfile = {
  txtName: "John Leonoras",
  txtCareer: "Full stack developer",
  hobbies: ["Reading Books", "Watching Movies", "Drawing"],
  favFoods: ["Adobo", "Sinigang", "Sisig", "Chicken Inasal", "Lechon"],
  favSeries: ["Halo", "Moon Knight", "Peacemaker", "Arcane", "Hawkeye"],
  faveMovies: [
    "Doctor Strange in the Multiverse of Madness",
    "Spider-Man: No Way Home",
    "Eternals",
  ],
  profileList: [
    "Hobbies",
    "Favorite Foods",
    "Favorite Series",
    "Favorite Movies",
  ],
};

function displayInfo() {
  const xName = `Hi I'm ${myProfile.txtName},`;
  const xCareer = `Future ${myProfile.txtCareer}.`;

  document.getElementById("myName").innerHTML = xName;
  document.getElementById("myCareer").innerHTML = xCareer;

  document.getElementById("hobbies").innerHTML = myProfile.profileList[0];
  document.getElementById("favFoods").innerHTML = myProfile.profileList[1];
  document.getElementById("favSeries").innerHTML = myProfile.profileList[2];
  document.getElementById("favMovies").innerHTML = myProfile.profileList[3];
}

function makeUL(array) {
  // Create the list element:
  var list = document.createElement("ul");

  for (var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement("li");

    // Set its contents:
    item.appendChild(document.createTextNode(array[i]));

    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}

// Add the contents of myProfile list to #ul id's(<div #ul></div>):
document.getElementById("ulHobbies").appendChild(makeUL(myProfile.hobbies));
document.getElementById("ulFavFoods").appendChild(makeUL(myProfile.favFoods));
document.getElementById("ulFavSeries").appendChild(makeUL(myProfile.favSeries));
document
  .getElementById("ulFaveMovies")
  .appendChild(makeUL(myProfile.faveMovies));

function showMoreInfo() {
  let elms = document.getElementsByClassName("main-page-section-2");

  Array.from(elms).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });
}
