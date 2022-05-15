import { icons } from "../Assets";


export const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

export const appbar = [
    {
        name:'About',
        link:'/'
    },
    {
        name:'Guides',
        link:'/'
    },
    {
        name:'Logs&TXNS',
        link:'/logs'
    },
    {
        name:'Dashboard',
        link:'/dashboard'
    },
];

export const ftr = [
    {
        title:"Aetherlabs",
        childs: ["About", "Guides"]
    },
    {
        title:"Logs&TXNS",
        childs: []
    },
    {
        title:"Dashboard",
        childs: ["Map of nodes", "Tokens"]
    },
]

export const feats = [
    {
        img:icons.cost,
        title:"Minimize cost utilizing EVM compatible chains",
        desc:"While launching a contract is pretty standard thoroughout different chains, the Aether uses pseudo-proxies based on the token type to minimize costs of deploying across all supported blockchains."
    },
    {
        img:icons.ip,
        title:"Nominal Transaction Times",
        desc:"Optimizing an n-manifold parrallel structure, Aether nodes transaction confirmation speeds is unprecendented."
    },
    {
        img:icons.network,
        title:"Complete Node Decentralization",
        desc:"Anyone can connect to the Aether and run a node. The node packages are open-source, user-friendly and available on GitHub. Nodes are interactive, by using our CLI you can configure your node to best fit your infrastructure."
    },
    {
        img:icons.secure,
        title:"Inherited Security",
        desc:"The Aether inherits the blockchain security it is running on. All transactions verification is done on-chain by the nodes."
    },
];

export const guides = [
    {
        name:"DAO",
        desc:"The home of the Aether and it's community.",
        action:"Contribute to improving the Aether",
        site:"/guides/dao"
    },
    {
        name:"FACTORY",
        desc:"Where all Aethered contracts are created and deployed.",
        action:"Check supported contract types",
        site:"/guides/factory"
    },
    {
        name:"HUB",
        desc:"The facilitator of all Aether transactions.",
        action:"More about the Aether consensus mechanism",
        site:"guides/hub",
    },
    {
        name:"NODE",
        desc:"Thriving indivisual transaction emitters and verifieries.",
        action:"Check how to run an Aether node",
        site:"guides/node",
    },
];

export const chains = [
    {
        logo:icons.chains.polygon,
        name:"Polygon",
        id:"137",
        symbol:"MATIC",
        features:[
            "Cheap Gas Fees","Lorem ipsum dolor sit amet","EVM compatibility",
        ],
        site:"https://polygon.technology/",
    },
    {
        logo:icons.chains.ethereum,
        name:"Ethereum",
        id:"1",
        symbol:"ETH",
        features:[
            "Consistant Uptime","Lorem ipsum dolor sit amet","EVM compatibility",
        ],
        site:"https://ethereum.org/en/",
    },
    {
        logo:icons.chains.binance,
        name:"Binance Smart Chain",
        id:"56",

        symbol:"BSC",
        features:[
            "Transaction Volume","Lorem ipsum dolor sit amet","EVM compatibility",
        ],
        site:"https://www.bnbchain.world/en"
    },
    {
        logo:icons.chains.avalanche,
        name:"Avalanche",
        id:"43114",
        symbol:"AVAX",
        features:[
            "Fast Finality Time","Lorem ipsum dolor sit amet","EVM compatibility",
        ],
        site:"https://www.avax.network/"
    },
    {
        logo:icons.chains.fantom,
        name:"Fantom",
        id:"250",
        symbol:"FTM",
        features:[
            "Scalability","Lorem ipsum dolor sit amet","EVM compatibility",
        ],
        site:"https://fantom.foundation/"
    },
    {
        logo:icons.chains.cronos,
        name:"Cronos",
        id:"25",
        symbol:"CRO",
        features:[
            "Sustainable","Lorem ipsum dolor sit amet","EVM compatibility",
        ],
        site:"https://crypto.org/"
    },
];

export const socials = [
    {
        logo:icons.socials.discord,
        name:"Discord",
        link:"https://discord.gg/qbXRJeCm",
        desc:"Join channel",
    },
    {
        logo:icons.socials.telegram,
        name:"Telegram",
        link:"https://t.me/aetherOx",
        desc:"View discussion",

    },
    {
        logo:icons.socials.twitter,
        name:"Twitter",
        link:"https://twitter.com/aetherlabs_io?s=20&t=jLB-Af7qmctAJCcjPcMeDA",
        desc:"Read the lastest",

    },
    {
        logo:icons.socials.github,
        name:"Github",
        link:"https://github.com/A3therLabs",
        desc:"View updates",
    },
];

export const providers = [
    
    {
        title:'Metamask',
        logo:icons.metamask,
        desc:"Connect to your MetaMask Wallet",

    },
   
    {
        title:'WalletConnect',
        logo:icons.walletconnect,
        desc:"Scan with WalletConnect to connect",
    },
];

export const stats_table = {
    titles : ["Node Id", "Host", "Port", "Country", "Client", "Type", "OS"],
    childs : [
        {
            Node_Id:"47hj63gk6j3j4hkjhkjk6...",
            Host:"24.87.158.233",
            Port:"30303",
            Country:"Canada",
            Client:"Geth",
            Type:"go.1.18",
            OS:"linux-arm64"
        },
        {
            Node_Id:"47hj63gk6j3j4hkjhkjk6...",
            Host:"24.87.158.233",
            Port:"30303",
            Country:"Canada",
            Client:"Geth",
            Type:"go.1.18",
            OS:"linux-arm64"
        },
        {
            Node_Id:"47hj63gk6j3j4hkjhkjk6...",
            Host:"24.87.158.233",
            Port:"30303",
            Country:"Canada",
            Client:"Geth",
            Type:"go.1.18",
            OS:"linux-arm64"
        },
        {
            Node_Id:"47hj63gk6j3j4hkjhkjk6...",
            Host:"24.87.158.233",
            Port:"30303",
            Country:"Canada",
            Client:"Geth",
            Type:"go.1.18",
            OS:"linux-arm64"
        },
        {
            Node_Id:"47hj63gk6j3j4hkjhkjk6...",
            Host:"24.87.158.233",
            Port:"30303",
            Country:"Canada",
            Client:"Geth",
            Type:"go.1.18",
            OS:"linux-arm64"
        },
        {
            Node_Id:"47hj63gk6j3j4hkjhkjk6...",
            Host:"24.87.158.233",
            Port:"30303",
            Country:"Canada",
            Client:"Geth",
            Type:"go.1.18",
            OS:"linux-arm64"
        },
        {
            Node_Id:"47hj63gk6j3j4hkjhkjk6...",
            Host:"24.87.158.233",
            Port:"30303",
            Country:"Canada",
            Client:"Geth",
            Type:"go.1.18",
            OS:"linux-arm64"
        },
        {
            Node_Id:"47hj63gk6j3j4hkjhkjk6...",
            Host:"24.87.158.233",
            Port:"30303",
            Country:"Canada",
            Client:"Geth",
            Type:"go.1.18",
            OS:"linux-arm64"
        },
        {
            Node_Id:"47hj63gk6j3j4hkjhkjk6...",
            Host:"24.87.158.233",
            Port:"30303",
            Country:"Canada",
            Client:"Geth",
            Type:"go.1.18",
            OS:"linux-arm64"
        },
        {
            Node_Id:"47hj63gk6j3j4hkjhkjk6...",
            Host:"24.87.158.233",
            Port:"30303",
            Country:"Canada",
            Client:"Geth",
            Type:"go.1.18",
            OS:"linux-arm64"
        },
    ],
};

export const funcs = [
    {
        title:"Data Feeds",
        logo: icons.feed,
        desc:"Get data and asset prices in your Smart Contracts.",
    },
    {
        title:"Verifiable Random Numbers (VRF)",
        logo: icons.varis,
        desc:"With Aetherchain VRF to consume randomness in your smart contracts.",
    },{
        title:"Call External APIs",
        logo: icons.api,
        desc:"Request & Receive data from any API using the Aetherchain contract library.",
    },
    {
        title:"Automate Contracts",
        logo: icons.auto,
        desc:"Automate smart contract functions and maintenance using Aetherchain Keepers.",
    },

];

export const commonData = [
    {
        title:"Aether price",
        value:"$0.34",
        logo:icons.A,
        childs:[],
    },
    {
        title:"Transactions",
        value:"14,445,678",
        logo:icons.txn,
        childs:[],
    },
    {
        title:"Market capitalization",
        value:"$345,3478,678.00",
        logo:icons.market,
        childs:[],
    },
];

export const dummy_data = [
    {
        "name":"function 1",
        "arguments" : [
        {
            "type":"address",
            "name":"ADDRESS 1",
            "value":""
        },
    {
        "type":"number",
        "name":"NUMBER 1",
        "value":""

    }],
        "response":""
    },
    {
        "name":"function 2",
        "arguments" : [
        {
            "type":"string",
            "name":"ADDRESS 2",
            "value":""

        },
        {
            "type":"bytes",
            "name":"NUMBER 1",
            "value":""
        }
    ],
    "response":""
    },
];

export const Tokens_Table = [
    {
        headers:["Token Name", "Token Address", "Balnace", "Token Type"],
        type:"",
        tokens:[
            {
                t_name:"name",
                t_adds:"47hj63gk6j3j4hkjhkjk6...",
                t_bal:"0.55",
                t_type:"ERC 721",
            },
            {
                t_name:"name",
                t_adds:"47hj63gk6j3j4hkjhkjk6...",
                t_bal:"0.55",
                t_type:"ERC 721",

            },
            {
                t_name:"name",
                t_adds:"47hj63gk6j3j4hkjhkjk6...",
                t_bal:"0.55",
                t_type:"ERC 721",

            },
            {
                t_name:"name",
                t_adds:"47hj63gk6j3j4hkjhkjk6...",
                t_bal:"0.55",
                t_type:"ERC 721",

            },
            {
                t_name:"name",
                t_adds:"47hj63gk6j3j4hkjhkjk6...",
                t_bal:"0.55",
                t_type:"ERC 721",
            },
            
        ]
    },
];


export const dummy_cont = {
    address:"0x4452149eb56A93a8e0EE3B117bb6E4101885Ec2C",
    abi:[
        {
            "inputs": [],
            "name": "getAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "newTemp",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_add",
                    "type": "address"
                }
            ],
            "name": "setData",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
}