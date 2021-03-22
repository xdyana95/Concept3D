
const isLatitudeValue = num => isFinite(num) && Math.abs(num) <= 90;
const isLongitudeValue = num => isFinite(num) && Math.abs(num) <= 180;

const nameValidator = data => !data.name;
const latitudeValidator = data => !isLatitudeValue(Number(data.lat));
const longitudeValidator = data => !isLongitudeValue(Number(data.lng));

const validations = [
  {validator: nameValidator, message: "Name field is required."}, 
  {validator: latitudeValidator, message: "Latitude must be a number between -90 and 90."}, 
  {validator: longitudeValidator, message: "Longitude must be a number between -180 and 180."}
];

export const validateLocation = (data) => validations.filter(v => v.validator(data)).map(error => error.message);