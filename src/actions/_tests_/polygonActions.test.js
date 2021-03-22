import { addPolygonPosition, removePolygonPosition } from '../polygonActions';

describe('polygonActions', () => {
    
    it('should properly create the add polygon position action', () => {
        const position = [1, 2]
        const expectedAction = [{
            type: 'ADD_POLYGON_POSITION',
            data: position
        }]
        const dispatch = jest.fn();
        addPolygonPosition(position)(dispatch)

        expect(dispatch.mock.calls.length).toBe(1)
        expect(dispatch.mock.calls[0]).toEqual(expectedAction)
    })
    
    it('should properly create the remove polygon position action', () => {
        const index = 4
        const expectedAction = [{
            type: 'REMOVE_POLYGON_POSITION',
            data: index
        }]
        const dispatch = jest.fn();
        removePolygonPosition(index)(dispatch)

        expect(dispatch.mock.calls.length).toBe(1)
        expect(dispatch.mock.calls[0]).toEqual(expectedAction)
    })
})