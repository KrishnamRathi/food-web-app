import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, name, comment) => (dispatch) => {

    var newComment = {
        dishId: dishId,
        rating: rating,
        name: name,
        comment: comment 
    }
    newComment.date =new Date().toISOString();

    return fetch(baseUrl + 'comments',{
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json" 
        },
        credentials: 'same-origin'
    } )
    .then(response => {
        if(response.ok){
            return response;
        }else {
            var error =new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess =new Error(error.message);
        throw errmess
    }
    )
    
    .then(response => response.json())
    .then(newComment => dispatch(addComment(newComment)))
    .catch(error => dispatch(commentsFailed(error)))


}

export const fetchDishes = () => (dispatch) =>{
    dispatch(dishesLoading(true));


    return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok){
            return response;
        }else {
            var error =new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess =new Error(error.message);
        throw errmess
    }
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)))

};

export const dishesLoading = () =>({
    type: ActionTypes.DISHES_LOADING,

});

export const dishesFailed = (errmsg) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmsg
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
}) 

export const fetchComments = () => (dispatch) =>{
    return fetch(baseUrl + 'comments')
    .then(response => {
        if(response.ok){
            return response;
        }else {
            var error =new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess =new Error(error.message);
        throw errmess
    }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)))
    

};
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if(response.ok){
            return response;
        }else {
            var error =new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess =new Error(error.message);
        throw errmess
    }
    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)))
    
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) =>{
    return fetch(baseUrl + 'leaders')
    .then(response => {
        if(response.ok){
            return response;
        }else {
            var error =new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess =new Error(error.message);
        throw errmess
    }
    )
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)))
    
};

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders,
})
 

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
})

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
})


export const submitFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    var feedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message,
    }
    feedback.date =new Date().toISOString();

    return fetch(baseUrl + 'feedback',{
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
            "Content-Type": "application/json" 
        },
        credentials: 'same-origin'
    } )
    .then(response => {
        if(response.ok){
            return response;
        }else {
            var error =new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess =new Error(error.message);
        throw errmess
    }
    )
    
    .then(response => response.json())
    .then(feedback => alert(JSON.stringify(feedback)))
    .catch(error => alert(error.message))
    
}

