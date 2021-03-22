
const isLatitude = num => isFinite(num) && Math.abs(num) <= 90;
const isLongitude = num => isFinite(num) && Math.abs(num) <= 180;

export const validateLocation = (data) => {
  let errors = [];
  if (!data.name) {
    errors.push("Name field is required.")
  }
  if(!isLatitude(Number(data.lat))) {
    errors.push("Latitude must be a number between -90 and 90.")
  }
  if(!isLongitude(Number(data.lng))) {
    errors.push("Longitude must be a number between -180 and 180.")
  }
  return errors;
}