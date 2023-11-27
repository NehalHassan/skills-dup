function validateEmail(email) {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

function getMissingFields(object) {
  return Object.entries(object)
    .filter((field) => !field[1])
    .map((x) => x[0]);
}
module.exports = { validateEmail, getMissingFields };
