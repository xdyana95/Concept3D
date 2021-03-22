import Locations from '../LocationsReducer';

describe('locations reducer', () => {

    it('should return initial state', () => {
        expect(Locations(undefined, {})).toEqual(
            {
                data: [],
                center: [39.750809, -104.996810],
            }
        )
    })

    it('properly handles STORE_LOCATIONS', () => {
        const oldState = {
            data: ['old'],
            center: [12, 35]
        }
        const newLocations = ['newLocation']
        expect(Locations(oldState, {type: 'STORE_LOCATIONS', data: newLocations})).toEqual({
            data: oldState.data.concat(newLocations),
            center: oldState.center
        })
    })

    it('properly handles SAVE_LOCATION', () => {
        const oldState = {
            data: ['old'],
            center: [12, 35]
        }
        const newLocation = {lat: 23, lng: 2}
        expect(Locations(oldState, {type: 'SAVE_LOCATION', data: newLocation})).toEqual({
            data: oldState.data.concat(newLocation),
            center: [newLocation.lat, newLocation.lng]
        })
    })
})