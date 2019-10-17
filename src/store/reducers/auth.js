import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';


// const initialState = {
//     products :[
//         {
//         model: "Big Ass Haiku H Series S3150-S0-BC-04-01-C-01",
//         airflow: "5,467 CFM",
//         maxpower: "21.14 W at max speed ",
//         sound: "35 dBAat max speed",
//         diameter: "60 fan sweep diameter"
//     }, {
//         model: "Emerson Luray Eco Series CF860",
//         airflow: "8,500 CFM",
//         maxpower: "33 W at max speed ",
//         sound: "40 dBAat max speed",
//         diameter: "60 fan sweep diameter"
//     }, {
//         model: "Minka Aviation Series F853-RW",
//         airflow: "6,604 CFM",
//         maxpower: "25.92 W at max speed ",
//         sound: "36 dBAat max speed",
//         diameter: "60 fan sweep diameter"
//     },],

//     promptModal: false
// };

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};
const authStart = (state, action) => {
    return updateObject (state, {error:null, loading:true});
}

const authSuccess = (state, action) => {
    return updateObject (state, { 
        token: action.idToken,
        userId: action.userId,
        error:null,
        loading: false 
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const reducer = (state = initialState, action ) => {
    switch (action.type) { 
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default: 
            return state;
        }
};

export default reducer; 