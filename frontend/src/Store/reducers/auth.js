import * as actionTypes from "../actions/actionTypes";

const initialState = {
    token: null,
    userId: null,
    loading: false,
    auth: false,
    adminAuth: false,
    verify: false,
    error: ""
};

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.AUTH_START:
            return{
                ...state,
                loading: true
            }

        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                auth: true,
                loading: false

            }

        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                auth: false,
                loading: false,
                error: action.error
            }

        case actionTypes.VERIFY_START:
            return{
                ...state,
                verify: true
            }

        case actionTypes.AUTH_SUCCESS_ADMIN:
            console.log('AUTH_ADMIN')
            return{
                ...state,
                adminAuth: true
            }

        case actionTypes.LOGOUT:
            console.log('LOGOUT')
            // localStorage.clear();
            return    {
                ...state,
                auth: false,
                adminAuth: false,
            }

        default:
            return state;
    }
}

export default reducer;