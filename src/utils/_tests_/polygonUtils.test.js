import { findLocationInPolygon } from '../polygonUtils';

describe('polygonutils', () => {

    it('can find location in polygon', () => {
        const polygon = [[1, 2], [4, 5]]
        const newLocation = [1, 2]
        expect(findLocationInPolygon(polygon, newLocation)).toEqual(0)
    })

    it('returns -1 if location is not in polygon', () => {
        const polygon = [[1, 2], [4, 5]]
        const newLocation = [1, 8]
        expect(findLocationInPolygon(polygon, newLocation)).toEqual(-1)
    })
})