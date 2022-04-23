import { icons } from "../Assets";

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
        link:'/'
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
]



export const chains = [
    {
        logo:icons.chains.polygon,
        name:"Polygon",
        symbol:"MATIC",
        features:[
            "Cheap Gas Fees","Lorem ipsum dolor sit amet","EVM compatibility",
        ],
        site:"https://polygon.technology/"
    },
    {
        logo:icons.chains.ethereum,
        name:"Ethereum",
        symbol:"ETH",
        features:[
            "Consistant Uptime","Lorem ipsum dolor sit amet","EVM compatibility",
        ],
        site:"https://ethereum.org/en/"
    },
    {
        logo:icons.chains.binance,
        name:"Binance Smart Chain",
        symbol:"BSC",
        features:[
            "Transaction Volume","Lorem ipsum dolor sit amet","EVM compatibility",
        ],
        site:"https://www.bnbchain.world/en"
    },
    {
        logo:icons.chains.avalanche,
        name:"Avalanche",
        symbol:"AVAX",
        features:[
            "Fast Finality Time","Lorem ipsum dolor sit amet","EVM compatibility",
        ],
        site:"https://www.avax.network/"
    },
    {
        logo:icons.chains.fantom,
        name:"Fantom",
        symbol:"FTM",
        features:[
            "Scalability","Lorem ipsum dolor sit amet","EVM compatibility",
        ],
        site:"https://fantom.foundation/"
    },
    {
        logo:icons.chains.fantom,
        name:"Cronos",
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
}