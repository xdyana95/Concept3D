import Polygon from '../PolygonReducer';

describe('polygon reducer', () => {

    it('should return initial state', () => {
        expect(Polygon(undefined, {})).toEqual({
            polygon: []
        })
    })

    it('properly handles ADD_POLYGON_POSITION', () => {
        const oldState = {
            polygon: [[1, 2]]
        }
        const newPoint = [3, 4]
        expect(Polygon(oldState, {type: 'ADD_POLYGON_POSITION', data: newPoint})).toEqual({
            polygon: [...oldState.polygon, newPoint]
        })
    })

    it('properly handles REMOVE_POLYGON_POSITION', () => {
        const oldState = {
            polygon: [[1, 2], [4, 5]]
        }
        const index = 0
        expect(Polygon(oldState, {type: 'REMOVE_POLYGON_POSITION', data: index})).toEqual({
            polygon: [oldState.polygon[1]]
        })
    })
})