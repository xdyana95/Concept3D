import Validations from '../ValidationsReducer';

describe('validations reducer', () => {

    it('should return initial state', () => {
        expect(Validations(undefined, {})).toEqual(
            {
                openModal: false,
                errors: [],
            }
        )
    })

    it('properly handles SHOW_MODAL', () => {
        const oldState = {
            openModal: false,
            errors: [],
        }
        const errors = ['error']
        expect(Validations(oldState, {type: 'SHOW_MODAL', data: errors})).toEqual({
            openModal: !oldState.openModal,
            errors: errors,
        })
    })
})