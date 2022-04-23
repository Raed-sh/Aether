import { FC, useRef, useState } from "react";
import { icons } from "../../Assets";
import { stats_table } from "../../Constants";

export const TokenStats:FC<any> = (props:any) => {
    const tab0:any = useRef();

    const [token, setToken] = useState<string>("");



    const Tokens_Table = [
        {
            headers:["Token Name", "Token Address", "Balnace"],
            type:"ERC720",
            tokens:[
                {
                    t_name:"name",
                    t_adds:"47hj63gk6j3j4hkjhkjk6...",
                    t_bal:"0.55"
                },
                {
                    t_name:"name",
                    t_adds:"47hj63gk6j3j4hkjhkjk6...",
                    t_bal:"0.55"
                },
                {
                    t_name:"name",
                    t_adds:"47hj63gk6j3j4hkjhkjk6...",
                    t_bal:"0.55"
                },
                {
                    t_name:"name",
                    t_adds:"47hj63gk6j3j4hkjhkjk6...",
                    t_bal:"0.55"
                },
                {
                    t_name:"name",
                    t_adds:"47hj63gk6j3j4hkjhkjk6...",
                    t_bal:"0.55"
                },
                
            ]
        },
        {
            headers:["Address", "ID", "Price"],
            type:"ERC721",
            tokens:[
                {
                    t_name:"47hj63gk6j3j4hkjhkjk6...",
                    t_adds:"0",
                    t_bal:"0.55"
                },
                
            ]
        },
    ];

    const toks = [
        {
            logo:icons.chains.ethereum,
            name:"Ethereum",
            symbol:"ETH",
            price:"34.568"
        },
        {
            logo:icons.chains.polygon,
            name:"Matic",
            symbol:"MATIC",
            price:"145.5"
        },
        {
            logo:icons.chains.binance,
            name:"Binance Coin",
            symbol:"BSC",
            price:"2345.5"
        },
        {
            logo:icons.chains.aether,
            name:"0xA",
            symbol:"0xA",
            price:"145.5"
        },
    ]

    const onScroll = () => {
        if (tab0.current) {
          const { scrollTop, scrollHeight, clientHeight } = tab0.current;
          if (scrollTop + clientHeight === scrollHeight) {
            console.log("reached bottom");
          }
        }
    };

    return(
        <div className="tokens">

        {Tokens_Table.map((t,idx) => 
        
            <div className="s_cont" key={idx}>
                <div className="tok_h"><img src={icons.chains.ethereum}/> <h2>Ethereum</h2> <h3><span>{t.type}</span></h3></div>
                <div className="s_table"  ref={tab0} onScroll={onScroll} >
                    <table>
                        <thead>
                            <tr>
                                {t.headers.map((h,idx) => 
                                <th key={idx}>{h}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {t.tokens.map((i,idx) => 
                            <tr key={idx}>
                                <td>{i.t_name +" "+ idx}</td>
                                <td>{i.t_adds}</td>
                                <td>{i.t_bal}</td>
                                <td><button>Switch chain</button></td>
                                <td><button>Transfer</button></td>
                            </tr>
                            )}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )}
        <div className="toks">
            <ul>
                {toks.map((t,idx) => 
                    <li key={idx}>
                        <h2><img src={t.logo}/>{t.name}</h2>
                        <h3>{t.price}{'\n'}<span>{t.symbol}</span></h3>
                        <button onClick={() => setToken(t.name)}>View stats</button>
                    </li>
                )}
            </ul>
        </div>
    </div>
    )
}