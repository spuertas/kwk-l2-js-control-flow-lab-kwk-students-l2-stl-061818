// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!"
  }
  else if (someValue > 2000 && someValue < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (someValue > 2500) {
    return "No can do."
  }
}
function ternaryCheckCity(city) {
  //var voteable = (age < 18) ? "Too young":"Old enough";
  let location = (city==="NYC") ? "Ok, sounds good.":"No go.";
  return location;
}
function switchOnCharmFromTip() {
  
}