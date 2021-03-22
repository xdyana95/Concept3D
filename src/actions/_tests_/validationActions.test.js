import { toggleValidationModal } from '../validationActions';

describe('validationActions', () => {
    
    it('should properly create the toggle validation modal action', () => {
        const errors = []
        const expectedAction = [{
            type: 'SHOW_MODAL',
            data: errors
        }]
        const dispatch = jest.fn();
        toggleValidationModal(errors)(dispatch)

        expect(dispatch.mock.calls.length).toBe(1)
        expect(dispatch.mock.calls[0]).toEqual(expectedAction)
    })
})