export const findLocationInPolygon = (polygon, newLocation) => {
  return polygon.findIndex(position => position[0] === newLocation[0] && position[1] === newLocation[1])
}