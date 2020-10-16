function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var ageCalc = (2020 - birthYear) * 365;
  var h3 = document.createElement("h3");
  var textAnswer = document.createTextNode("You are " + ageCalc + " days old");
  h3.setAttribute("id", "ageInDays");
  h3.appendChild(textAnswer);
  document.getElementById("results").appendChild(h3);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
