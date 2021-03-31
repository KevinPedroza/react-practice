import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_STREAM':
            return { ...state, [action.payLoad.id]: action.payLoad };
        case 'CREATE_STREAM':
            return { ...state, [action.payLoad.id]: action.payLoad };
        case 'EDIT_STREAM':
            return { ...state, [action.payLoad.id]: action.payLoad };
        case 'DELETE_STREAM':
            return _.omit(state, action.payLoad);
        default:
            return state;
    }
}