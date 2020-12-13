//Load header, footer and nav

  fetch('header.html')
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.querySelector('#head-placeholder').innerHTML = body;
  });

  fetch('navigation.html')
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.querySelector('#nav-placeholder').innerHTML = body;
  });

  fetch('footer.html')
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.querySelector('#foot-placeholder').innerHTML = body;
  });

//Calculator
var results = document.getElementById("results");

function displayResults(){

  results.innerHTML = "";
  document.getElementById("results").classList.remove("resultsOn");

  var beef = document.getElementById("beef").value;
  var pork = document.getElementById("pork").value;
  var lamb = document.getElementById("lamb").value;
  var chicken = document.getElementById("chicken").value;
  
  var cows = (beef*52/305.6).toFixed(2);
  var pigs = (pork*52/83.3).toFixed(2);
  var sheep = (lamb*52/19.4).toFixed(2);
  var birds = (chicken*52/1).toFixed(2);
  
    if(beef<0 || pork<0 || lamb<0 || chicken<0){
      alert("Only values above 0 are accepted!")
    }

    if(isNaN(beef)){
      alert("Please enter a number")
    }

    if(beef>0){
      results.innerHTML += `<p>You eat ${cows} cows a year. By eating ${beef/2}
      kg of beef a week, you could save ${(cows/2).toFixed(2)} cows a year!</p> <br>`;
    }

    if(pork>0){
      results.innerHTML += `<p>You eat ${pigs} pigs a year. By eating ${pork/2}
    kg of pork a week, you could save ${(pigs/2).toFixed(2)} pigs a year!</p> <br>`;
    }

    if(lamb>0){
      results.innerHTML += `<p>You eat ${sheep} lambs a year. By eating ${lamb/2}
    kg of lamb a week, you could save ${(sheep/2).toFixed(2)} lambs a year!</p> <br>`;
    }

    if(chicken>0){
      results.innerHTML += `<p>You eat ${birds} chicken a year. By eating ${chicken/2}
    kg of chicken a week, you could save ${(birds/2).toFixed(2)} chickens a year!</p> <br>`;
    }
    

    if(beef>0 || pork>0 || lamb>0 || chicken>0){
      document.getElementById("results").classList.add("resultsOn");
    }

    document.getElementById("beef").value = "";
    document.getElementById("pork").value = "";
    document.getElementById("lamb").value = "";
    document.getElementById("chicken").value = "";

}

//Changing quotes on home page

var timer = setInterval(changeQuote, 5000);

var quotes = ['"Until one has loved an animal, a part of one’s soul remains unawakened." – Anatole France',
 '"Kindness is the language which the deaf can hear and the blind can see." - Mark Twain',
'"Animals are my friends, and I don’t eat my friends." – George Bernard Shaw',
 '"The greatness of a nation... can be judged by the way its animals are treated." ― Mahatma Gandhi',
'"Animals are such agreeable friends―they ask no questions, they pass no criticisms." - George Eliot',
'"My body will not be a tomb for other creatures." - Leonardo Da Vinci'];

function changeQuote(){
  var random = Math.floor(Math.random() * 6);
  document.getElementById("home-quote").innerHTML = quotes[random];
}


//Collapisible FAQ

function revealAnswer(el){
  var id = el.id;
  var next = document.getElementById(id).nextElementSibling;
  document.getElementById(id).classList.toggle("active");

  if (next.style.display === "block") {
       next.style.display = "none";
     } else {
      next.style.display = "block";
     }
}

