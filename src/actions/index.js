import treeAPI from '../api/treeAPI';

import history from '../history';

export const getTree = () =>
    async dispatch => {
        const res = await treeAPI.get('/tree');
        dispatch ({
            type: 'GET_TREE',
            payload: res.data.data.docs
        }) 
    }

export const addFactory = formValues => async dispatch => {
    const res = await treeAPI.post('/tree', formValues);
    dispatch ({
        type: 'ADD_FACTORY',
        payload: res.data.data
    })
}

export const editFactory = (formValues) => async dispatch => {
    const res = await treeAPI.put('/tree', formValues);
    dispatch ({
        type: 'EDIT_FACTORY',
        payload: formValues
    })
    history.push('/');
}

export const generateChildren = (formValues) => async dispatch => {
    const res = await treeAPI.put('/tree', formValues);
    dispatch ({
        type: 'GENERATE_CHILDREN',
        payload: formValues
    })
    history.push('/');
}

export const deleteFactory = (id) => async dispatch => {
    await treeAPI.delete(`/tree/${id}`);
    dispatch ({
        type: 'DELETE_FACTORY',
        payload: id
    })
    history.push('/');
}
