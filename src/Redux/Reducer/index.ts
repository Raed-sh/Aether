import Web3 from 'web3';
import * as ActionTypes from '../ActionType';

const initial_providers:PROVIDER_STATE = {
    "bnb":{
        chain_id:"56",
        chain_name:"BINANCE",
        rpc:"https://bsc-dataseed.binance.org/",
        w3:null
    },
    "ftm":{
        chain_id:"250",
        chain_name:"FANTOM",
        rpc:"https://rpc.ftm.tools/",
        w3:null
    },
    "matic":{
        chain_id:"137",
        chain_name:"POLYGON",
        rpc:"https://polygon-rpc.com",
        w3:null
    },
    "reth":{
        chain_id:"3",
        chain_name:"ROPSTEN",
        rpc:"https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        w3:null
    },
};

const reducer = (state:PROVIDER_STATE = initial_providers, action:PROVIDER_ACTION):PROVIDER_STATE => {
    switch(action.type){
        case ActionTypes.SET_PROVIDER:
        var _providerObj:PROVIDER_STATE = state;
        for(var i=0; i<Object.keys(state).length; i++){
            var _syb = Object.keys(state)[i];
            var _temp:IPROVIDER = Object.values(state)[i];
            _temp["w3"] = new Web3(_temp["rpc"])
            _providerObj[_syb] = _temp;
        }

        return _providerObj;
        
        default:
            return state
    }
}

export default reducer;