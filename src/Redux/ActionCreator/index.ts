import * as ActionTypes from '../ActionType';


export function setProvider(){
    const action:PROVIDER_ACTION = {
        type: ActionTypes.SET_PROVIDER,
    }

    return _setw3provider(action);
}

export function _setw3provider(action:PROVIDER_ACTION){
    return (dispatch: Dispatch_Provider) => {
        dispatch(action);
    };
};