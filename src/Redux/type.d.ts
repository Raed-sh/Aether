type PROVIDER_STATE = {
    [bnb:string]:IPROVIDER,
    [matic:string]:IPROVIDER,
    [ftm:string]:IPROVIDER,
    [reth:string]:IPROVIDER,
}

type PROVIDER_ACTION = {
    type:string
}

interface IPROVIDER {
    chain_id: string,
    chain_name:string,
    rpc:string,
    w3:any
}

type Dispatch_Provider = (args:PROVIDER_ACTION) => PROVIDER_ACTION;
