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
  switch () {
    case "generous":
        let response = "Thank you so much.";
        return response;
    case 'not as generous':
        let response = 'Thank you.';
        return response;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
}

    it('should return "Thank you so much." if the tip is generous', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('should return "Thank you." if the tip is not as generous', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('should return "Bye." if anything else', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
    });