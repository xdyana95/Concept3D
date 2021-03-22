import { validateLocation } from '../validationUtils';

describe('validationutils', () => {

    it('can find validation errors in a location', () => {
        const data = {
            name: undefined,
            lat: -100,
            lng: 39999,
        }
        const expectedResults = ["Name field is required.", "Latitude must be a number between -90 and 90.", "Longitude must be a number between -180 and 180."]
        expect(validateLocation(data)).toEqual(expectedResults)
    })

    it('returns empty array if all validations pass', () => {
        const data = {
            name: "denver",
            lat: -10,
            lng: 90,
        }
        const expectedResults = []
        expect(validateLocation(data)).toEqual(expectedResults)
    })
})