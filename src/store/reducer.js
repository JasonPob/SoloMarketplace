import * as actionTypes from './actions';

const initialState = {
    products :[
        {
        model: "Big Ass Haiku H Series S3150-S0-BC-04-01-C-01",
        airflow: "5,467 CFM",
        maxpower: "21.14 W at max speed ",
        sound: "35 dBAat max speed",
        diameter: "60 fan sweep diameter"
    }, {
        model: "Emerson Luray Eco Series CF860",
        airflow: "8,500 CFM",
        maxpower: "33 W at max speed ",
        sound: "40 dBAat max speed",
        diameter: "60 fan sweep diameter"
    }, {
        model: "Minka Aviation Series F853-RW",
        airflow: "6,604 CFM",
        maxpower: "25.92 W at max speed ",
        sound: "36 dBAat max speed",
        diameter: "60 fan sweep diameter"
    },],

    promptModal: false
};

const reducer = (state = initialState, action ) => {

};

export default reducer; 