import { type } from "os"

export type SearchData = {
    address:string
    filter:string
}

export type TxnDetails = {
    txn_hash1:string,
    txn_hash2:string,
    status:string,
    timestamp:string,
    from:string,
    to:string,
    value:string,
    txn_fee:string,
}

export type W3PROVIDER = {
    rpc:string
}

export type W3PROVIDERS = {
    bnb:string | null,
    matic:string | null,
    ftm:string| null,
    reth:string| null
}

export type TRANSACTION = {
    aethered_contract: string
    callee: string
    caller:string
    chainID: string
    changer: string
    selector:string
    args:any
    txn_hash:string
    block_number:number
}
