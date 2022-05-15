export async function initContracts(contract:any, _state:any){
    const _chains :any = Object.keys(contract.addresses);
    const chains_addr :any = Object.values(contract.addresses);
    var _contract;
    var _contracts:any = []
    for(var i=0; i< _chains.length; i++){
        var temp:string = _chains[i];
        var _address:string = chains_addr[i];
        var _w3 = _state[temp]['w3'];

        _contract = new _w3.eth.Contract(contract.abi, _address);
        _contracts.push({
            contract: _contract,
        });
    }
    return _contracts;
};

export async function getTokens(contract:any){
    var _tokens = await contract.methods.getToken().call();
    return _tokens;
};

export async function getContractData(contract:any, cont_address:string){
    var _data = contract.methods.getContractData(cont_address).call();
    return _data
}

export async function callContractFunction(_cont:any, fc_name:string,args:any){
    var _arg:any = []
    var _res;

    console.log(fc_name)
    try{
        if(args.length > 0){
            for (let { value} of args ) {
                  _arg.push(value)
                }
            console.log(_arg)
            console.log([..._arg])

            
            _res = await _cont.methods[fc_name](1,"oxa").call();
        }else{
            _res = await _cont.methods[fc_name]().call();
        }
    }catch(err){
        console.log(err)
    }
    
    return _res;
};