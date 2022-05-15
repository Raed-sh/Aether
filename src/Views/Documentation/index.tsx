import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { icons, images } from "../../Assets";
import { chains, funcs, socials } from "../../Constants";

export const Documentation:FC<any> = (props:any) => {

    const [chain, setChain] = useState<string>("Polygon");

    return(
        <div className="docs">
        <div className="land_cont">
            <div className="land_h">
                <div className="l_h">
                    <h1>Discover the Aether documentation</h1>
                    <p>docs</p>
                    <a>Get Started Guide</a>
                </div>
                <div className="r_h">
                    <img src={images.bgm}/>
                </div>
            </div>
        </div>
       
        <div className="chains">
            <h1>Supported Blockchains</h1>
            <p>Aetherchain gives smart contract developers the oracle infrastructure and tooling they need to build scalable and externally-connected dApps on several blockchains and layer-2 networks. Select a blockchain to get started.</p>
            <ul >
                {chains.map((c, idx) => 
                <li key={idx} className={chain === c.name ? "chain" : ""} onClick={() => setChain(c.name)}>
                    <div className="ch_info">
                        <img src={c.logo}/>
                        <h3>{c.name}{'\n'}<span>{c.symbol}</span></h3>
                    </div>
                    <ul>
                        {c.features.map((f, idx) => 
                            <li key={idx}><img src={chain === c.name ? icons.act : icons.non_act}/> {f}</li>
                            )
                        }
                    </ul>
                    <button onClick={() => window.open(c.site, "_blank")}>Website</button>
                </li>
                    )
                }
            </ul>
        </div>

        <div className="funcs">
            <h1>Functions And Features</h1>
            <ul>
                   {funcs.map((f,idx) => 
                    <li key={idx}>
                        <h3>{f.title}</h3>
                        <div>
                            <p><img src={f.logo}/><span>{f.desc}</span></p>
                            <ol>
                                {chains.map((s,idx) => <li key={idx}><img src={s.logo}/></li>)}
                            </ol>
                        </div>
                    </li>
                )}
            </ul>
        </div>

        <div className="last_sec">
            <div className="land_cont">
                <div className="land_h">
                    <div className="l_h">
                        <h1>Need to run your own Aetherchain Node?</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure., "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
                        <a>Node Operator’s Guide</a>
                    </div>
                    <div className="r_h">
                        <img src={images.bg}/>
                    </div>
                </div>
            </div>
            <div className="community">
                <h2>Join Our Community</h2>
                <ul>
                    {socials.map((s,idx) => 
                    <li key={idx}>
                        <a href={s.link} target="_blank">
                            <h3><img src={s.logo}/>{s.name}</h3>
                            <p>{s.desc} <img src={icons.arrow}/></p>
                        </a>
                        </li>)}
                </ul>
            </div>
            <div>
            </div>
        </div>
    </div>
    )
}