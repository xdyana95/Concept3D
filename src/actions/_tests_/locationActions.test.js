import { fetchAllLocations, saveLocation } from '../locationActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('locationActions', () => {

    afterEach(() => {
        fetchMock.restore()
    })

    it('can fetch all locations', () => {
        const locations = ['location']
        fetchMock.getOnce('/locations', {
            body: { locations: locations },
            headers: { 'content-type': 'application/json' }
        })
        const expectedAction = [{
            type: 'STORE_LOCATIONS',
            data: locations,
        }]
        const store = mockStore({ locations: [] })
        return store.dispatch(fetchAllLocations()).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
    // todo: test saveLocation
})