import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';

const treeReducer = (state={}, action) => {
    switch (action.type) {
        case 'GET_TREE':
            return { ...state, ..._.mapKeys(action.payload, '_id') };
        case 'ADD_FACTORY':
            return { ...state, [action.payload._id ]: action.payload };
        case 'EDIT_FACTORY':
            return { ...state, [action.payload._id ]: action.payload };
        case 'GENERATE_CHILDREN':
            return { ...state, [action.payload._id ]: action.payload };
        case 'DELETE_FACTORY':
            return _.omit(state, action.payload);
        default:
            return state;
    }
}


export default combineReducers ({
    tree: treeReducer,
    form: formReducer
});
