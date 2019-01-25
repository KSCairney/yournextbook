var books = [
  {work:"Dune", author:"Frank Herbert", genre:"scifi", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg"},
  {work:"Stranger In a Strangeland", author:"Robert Heinlein", genre:"scifi", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/4/40/Stranger_in_a_Strange_Land_Cover.jpg"}, 
  {work:"Brothers Karamazov", author:"Fyodor Dostoyevsky", genre:"literary fiction", country:"Russia", age:"old", url:"https://upload.wikimedia.org/wikipedia/commons/2/2d/Dostoevsky-Brothers_Karamazov.jpg"},
  {work:"A Wild Sheep Chase", author:"Haruki Murakami", genre:"literary fiction", country:"Japan", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/a/a5/Haruki_murakami_a_wild_sheep_chase_9780375718946.jpg"},
  {work:"Jude the Obscure", author:"Thomas Hardy", genre:"literary fiction", country:"England", age:"old", url:"https://upload.wikimedia.org/wikipedia/commons/b/b0/Jude_the_Obscure_title_page.jpg"},
  {work:"The Left Hand of Darkness", author:"Ursula LeGuin", genre:"scifi", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/8/88/TheLeftHandOfDarkness1stEd.jpg"},
  {work:"Absalom! Absalom!", author:"William Faulkner", genre:"literary fiction", country:"USA", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/b/b9/AbsalomAbsalom.jpg"},
  {work:"The Eye of the World", author:"Robert Jordan", genre:"fantasy", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/0/00/WoT01_TheEyeOfTheWorld.jpg"},
  {work:"The Hobbit", author:"JRR Tolkien", genre:"fantasy", country:"England", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg"},
  {work:"The Gunslinger", author:"Stephen King", genre:"fantasy", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/d/db/The_Gunslinger.jpg"},
  {work:"The Picture of Dorian Gray", author:"Oscar Wilde", genre:"fantasy", country:"Ireland", age:"old", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lippincott_doriangray.jpg/800px-Lippincott_doriangray.jpg"},
  {work:"Jonathan Strange & Mr Norrell", author:"Susanna Clarke", genre:"fantasy", country:"England", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/4/4d/Jonathan_strange_and_mr_norrell_cover.jpg"},
  {work:"Less Than Zero", author:"Bret Easton Ellis", genre:"literary fiction", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/1/14/Lessthan01st1.png"},
  {work:"The Hitchhiker's Guide to the Galaxy", author:"Douglas Adams", genre:"scifi", country:"England", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg"},
  {work:"Hard-Boiled Wonderland and the End of the World", author:"Haruki Murakami", genre:"scifi", country:"Japan", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/d/d1/Haruki_murakami_hardboiled_9780679743460.jpg"},
  {work:"Frankenstein", author:"Mary Shelley", genre:"scifi", country:"England", age:"old", url:"https://upload.wikimedia.org/wikipedia/commons/3/35/Frankenstein_1818_edition_title_page.jpg"},
  {work:"1984", author:"George Orwell", genre:"scifi", country:"England", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/c/c3/1984first.jpg"},
  {work:"Brave New World", author:"Aldous Huxley", genre:"scifi", country:"England", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg"},
  {work:"Fahrenheit 451", author:"Ray Bradbury", genre:"scifi", country:"USA", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg"},
  {work:"A Canticle for Leibowitz", author:"Walter M. Miller Jr", genre:"scifi", country:"USA", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/d/d2/A_Canticle_for_Leibowitz_cover_1st_ed.jpg"},
  {work:"Ubik", author:"Philip K. Dick", genre:"scifi", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/a/af/Ubik%281stEd%29.jpg"},
  {work:"A Wizard of Earthsea", author:"Usula LeGuin", genre:"fantasy", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/5/59/AWizardOfEarthsea%281stEd%29.jpg"},
  {work:"All the Pretty Horses", author:"Cormac McCarthy", genre:"literary fiction", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/c/c4/All_the_pretty_horses_mccarthy_cover.jpg"},
  {work:"The Dispossessed", author:"Ursula LeGuin", genre:"scifi", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/f/fc/TheDispossed%281stEdHardcover%29.jpg"},
  {work:"The End of the Affair", author:"Graham Greene", genre:"literary fiction", country:"England", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/0/0a/GrahamGreene_TheEndOfTheAffair.jpg"},
  {work:"The Quiet American", author:"Graham Greene", genre:"literary fiction", country:"England", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/1/14/QuietAmerican.jpg"},
  {work:"The Heart of the Matter", author:"Graham Greene", genre:"literary fiction", country:"England", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/8/8e/HeartOfTheMatter.JPG"},
  {work:"The Power and the Glory", author:"Graham Greene", genre:"literary fiction", country:"England", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/f/f4/PowerAndTheGlory.jpg"},
  {work:"Brighton Rock", author:"Graham Greene", genre:"literary fiction", country:"England", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/9/90/BrightonRock.jpg"},
  {work:"We, the Drowned", author:"Carsten Jensen", genre:"literary fiction", country:"Denmark", age:"new", url:"https://images-na.ssl-images-amazon.com/images/I/61LEc0eJR1L._SX330_BO1,204,203,200_.jpg"},
  {work:"Hyperion", author:"Dan Simmons", genre:"scifi", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/7/73/Hyperion_cover.jpg"},
  {work:"The Violent Bear It Away", author:"Flannery O'Connor", genre:"literary fiction", country:"USA", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/7/78/ViolentBearItAway.JPG"},
  {work:"Wise Blood", author:"Flannery O'Connor", genre:"literary fiction", country:"USA", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/b/b3/Wise_Blood_%28novel%29_1st_edition_cover.jpg"},
  {work:"Midnight's Children", author:"Salman Rushdie", genre:"literary fiction", country:"India", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/9/9d/MidnightsChildren.jpg"},
  {work:"One Hundred Years of Solitude", author:"Gabriel Garcia Marquez", genre:"literary fiction", country:"Colombia", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg"},
  {work:"Never Let Me Go", author:"Kazuo Ishiguro", genre:"scifi", country:"England", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/2/25/Never_Let_Me_Go.jpg"},
  {work:"VALIS", author:"Philip K. Dick", genre:"scifi", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/1/1c/VALIS%281stEd%29.jpg"},
  {work:"Do Androids Dream of Electric Sheep?", author:"Philip K. Dick", genre:"scifi", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/e/ee/DoAndroidsDream.png"},
  {work:"Light in August", author:"William Faulkner", genre:"literary fiction", country:"USA", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/e/e1/LightInAugust.jpg"},
  {work:"A Clockwork Orange", author:"Anthony Burgess", genre:"scifi", country:"scifi", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/2/23/Clockwork_orange.jpg"},
  {work:"The Stranger", author:"Albert Camus", genre:"literary fiction", country:"France", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/f/f7/L%E2%80%99%C3%89tranger_%28Camus_novel%29.jpg"},
  {work:"Solaris", author:"Stanislaw Lem", genre:"scifi", country:"Poland", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/d/d1/SolarisNovel.jpg"},
  {work:"The Count of Monte Cristo", author:"Alexandre Dumas", genre:"literary fiction", country:"France", age:"old", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg/220px-Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg"},
  {work:"Cat's Cradle", author:"Kurt Vonnegut", genre:"scifi", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/e/e6/CatsCradle%281963%29.jpg"},
  {work:"South of the Border, West of the Sun", author:"Haruki Murakami", genre:"literary fiction", country:"Japan", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/f/f3/South_of_the_Border%2C_West_of_the_Sun_%28Haruki_Murakami_novel_-_front_cover%29.jpg"},
  {work:"The Wind-Up Bird Chronicle", author:"Haruki Murakami", genre:"literary fiction", country:"Japan", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/9/9f/Wind-up_Bird_Chronicle.jpg"},
  {work:"1Q84", author:"Haruki Murakami", genre:"scifi", country:"Japan", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/b/b9/1Q84bookcover.jpg"},
  {work:"Lolita", author:"Vladimir Nabokov", genre:"literary fiction", country:"Russia", age:"old", url:"https://upload.wikimedia.org/wikipedia/commons/5/57/Lolita_1955.JPG"},
  {work:"The Moon Is a Harsh Mistress", author:"Robert Heinlein", genre:"scifi", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/c/c0/The_Moon_Is_A_Harsh_Mistress_%28book%29.jpg"},
  {work:"Darkness at Noon", author:"Arthur Koestler", genre:"literary fiction", country:"Hungary", age:"old", url:"https://upload.wikimedia.org/wikipedia/commons/7/78/DarknessAtNoon.jpg"},
  {work:"Slaughterhouse-Five", author:"Kurt Vonnegut", genre:"scifi", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/6/6e/Slaughterhousefive.jpg"},
  {work:"Oryx and Crake", author:"Margaret Atwood", genre:"scifi", country:"Canada", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/c/cd/OryxAndCrake.jpg"},
  {work:"A Portrait of the Artist as a Young Man", author:"James Joyce", genre:"literary fiction", country:"Ireland", age:"old", url:"https://upload.wikimedia.org/wikipedia/commons/3/30/JamesJoyce_Portrait1916.jpg"},
  {work:"2001: A Space Odyssey", author:"Arthur C. Clarke", genre:"scifi", country:"England", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/7/77/2001_A_Space_Odyssey-Arthur_C._Clarke.jpg"},
  {work:"Childhood's End", author:"Arhtur C. Clarke", genre:"scifi", country:"England", age:"old", url:"https://upload.wikimedia.org/wikipedia/en/7/72/ChildhoodsEnd%281stEd%29.jpg"},
  {work:"Catch-22", author:"Joseph Heller", genre:"literary fiction", country:"USA", age:"new", url:"https://upload.wikimedia.org/wikipedia/en/9/99/Catch22.jpg"}
];

var fewerBooks = [];

var fewestBooks = [];

var placesLeft = [];

var theChoice = [];

function firstChoice() {
  var firstChoice = '<h3>Which genre?</h3>';
  var firstButtons = '<button onClick="fantasyPick()">fantasy</button><button onClick="lfPick()">literary fiction</button><button onClick="scifiPick()">scifi</button>';
  document.getElementById('question').innerHTML= firstChoice;
  document.getElementById('buttons').innerHTML= firstButtons;
}

function genreMatch(thisGenre) {
  for (var x = 0; x < books.length; x++) {
    if (books[x].genre == thisGenre) {
      fewerBooks.push(books[x]);
    }
  }
}

function stageTwo() {
  var secondChoice = '<h3>A newer book or an older book?</h3>';
  var secondButtons = '<button onClick="newPick()">new</button><button onClick="oldPick()">old</button>';
  document.getElementById('question').innerHTML= secondChoice;
  document.getElementById('buttons').innerHTML= secondButtons;
}

function fantasyPick() {
  genreMatch('fantasy');
  stageTwo();
}

function lfPick() {
  genreMatch('literary fiction')
  stageTwo();
}

function scifiPick() {
  genreMatch('scifi');
  stageTwo();
}

function ageMatch(thisAge) {
  for (var x = 0; x < fewerBooks.length; x++) {
    if (fewerBooks[x].age == thisAge) {
      fewestBooks.push(fewerBooks[x]);
    }
  }
}

function newPick() {
  ageMatch('new');
  stageThree();
}

function oldPick() {
  ageMatch('old')
  stageThree();
}

function stageThree() {
  var thirdChoice = '<h3>From where?</h3>';
  document.getElementById('question').innerHTML= thirdChoice;
  document.getElementById('buttons').innerHTML= '';
  for (var k = 0; k < fewestBooks.length; k++) {
    var thisCountry = fewestBooks[k].country;
    if (placesLeft.includes(thisCountry) === false) {
      placesLeft.push(thisCountry);
      var newButton = document.createElement('button');
      var fillButton = document.createTextNode(thisCountry);
      newButton.setAttribute('id', thisCountry);
      newButton.setAttribute('onClick', thisCountry+'()');
      newButton.appendChild(fillButton);
      document.getElementById('buttons').appendChild(newButton);
    }
  }
}

function place(aCountry) {
  for (var p = 0; p < fewestBooks.length; p++) {
    if (fewestBooks[p].country == aCountry) {
      theChoice.push(fewestBooks[p]);
    }
  }
  bookPick();
}

function USA() {
  place('USA');
}

function Russia() {
  place('Russia');
}

function Japan() {
  place('Japan');
}

function England() {
  place('England');
}

function Ireland() {
  place('Ireland');
}

function Denmark() {
  place('Denmark');
}

function India() {
  place('India');
}

function Colombia() {
  place('Colombia');
}

function France() {
  place('France');
}

function Poland() {
  place('Poland');
}

function Hungary() {
  place('Hungary');
}

function Canada() {
  place('Canada');
}

function bookPick() {
  var r = [Math.floor(Math.random() * theChoice.length)];
  var theBook = theChoice[r].work + ' by ' + theChoice[r].author + '<br><img class="bookCover" src="' + theChoice[r].url + '">';
  var reset = '<button onClick="location.reload()">Reset</button>';
  document.getElementById('recommended').innerHTML= theBook;
  document.getElementById('buttons').innerHTML= reset;
}