function validateEmail(email) {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

function validatePhone(phone) {
  var regex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
  return regex.test(phone);
}

function getMissingFields(object) {
  return Object.entries(object)
    .filter((field) => !field[1])
    .map((x) => x[0]);
}
module.exports = { validateEmail, getMissingFields, validatePhone };
