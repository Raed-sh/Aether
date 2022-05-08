export const CONTRACT = {
    addresses : {
       "bnb": "0x49f61266C5adE3BFe333A4DFD340b3c8ff42062b", 
        "matic": "0xd28a98aECC7130d28ce9626a04e6cD7B89Ad4AD1", 
        "ftm":"0x4D8bDf9C73c68883f12bC2AAE58b578f15aa5de5", 
        "reth": "0x56F69ba8A501a08a3E20B5c2029E4Be97CA9dD55", 
    },
   
    abi:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "ChainID",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "AetheredContract",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "Caller",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "Callee",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes4",
                    "name": "Selector",
                    "type": "bytes4"
                },
                {
                    "indexed": false,
                    "internalType": "bytes1",
                    "name": "Changer",
                    "type": "bytes1"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "Args",
                    "type": "bytes"
                }
            ],
            "name": "Aether",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_caller",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_callee",
                    "type": "address"
                },
                {
                    "internalType": "bytes4",
                    "name": "_selector",
                    "type": "bytes4"
                },
                {
                    "internalType": "bytes1",
                    "name": "_changer",
                    "type": "bytes1"
                },
                {
                    "internalType": "bytes",
                    "name": "_args",
                    "type": "bytes"
                }
            ],
            "name": "callAether",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_funcSig",
                    "type": "string"
                }
            ],
            "name": "getSelector",
            "outputs": [
                {
                    "internalType": "bytes4",
                    "name": "",
                    "type": "bytes4"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ]
};
