import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, name, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        name: name,
        comment: comment
    }
});