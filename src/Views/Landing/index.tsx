import React, { FC, useState } from "react";
import { icons, images } from "../../Assets";
import { chains, feats, socials } from "../../Constants";


export const Landing:FC<any> = (props:any) => {

    const [chain, setChain] = useState<string>("Polygon");

    return(
        <div className="landing">
            <div className="land_cont">
                <div className="land_h">
                    <div className="l_h">
                        <h1>Smart Contracts With{'\n'}AETHER Chain</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
                        <ul>
                            <li>
                                <img src={icons.qm}/>
                                <a href="/">Questions?</a>
                            </li>
                            <li>
                                <a href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="r_h">
                        <img src={images.bgm}/>
                    </div>
                </div>
                <section>
                        <ul>
                            <li className="act"><a href="/">Documentaion</a></li>
                            <li><a href="/">Logs&TXNS</a></li>
                            <li><a href="/">Dashboard</a></li>
                        </ul>
                    </section>
            </div>

            <div className="features">
                <h1>Features And Directions</h1>
                <ul>
                    {
                        feats.map((f, idx) => 
                        <li key={idx}>
                            <img src={f.img}/>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </li>
                        )
                    }
                </ul>
                <button>Try Aether way</button>
                <h1>Supported Blockchains</h1>
            </div>

            <div className="chains">
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
                    </li>
                        )
                    }
                </ul>
            </div>

            <div className="last_sec">
                
                <div className="guides">
                <ul >
                    {feats.map((f,idx) => 
                    
                    <li key={idx}>
                        <div>
                            <h4>Guides/{'\n'}<span>Lorem ipsum</span></h4>
                            <img src={""}/>
                        </div>
                        <div>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <img src={icons.arrow}/>
                        </div>
                    </li>
                )}
                </ul>
                <button>More developer guides</button>
                </div>
                
                <div className="community">
                    <h2>Join Our Community</h2>
                    <ul>
                        {socials.map((s,idx) => 
                        <li key={idx}>
                            <a href={s.link}>
                                <h3><img src={s.logo}/>{s.name}</h3>
                                <p>{s.desc} <img src={icons.arrow}/></p>
                            </a>
                            </li>)}
                    </ul>
                </div>
                
                

            </div>

        </div>
    );
};