import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { icons, images } from "../../Assets";
import { chains, feats, socials, guides } from "../../Constants";


export const Landing:FC<any> = (props:any) => {

    const [chain, setChain] = useState<string>("Polygon");

    return(
        <div className="landing">
            <div className="land_cont">
                <div className="land_h">
                    <div className="l_h">
                        <h1>
                        <span>0</span> 
                        <span>x </span> 
                        <span><img src={icons.A} /></span>
                        {'\n'}
                        The <span>Multi</span>chain Haven
                        </h1>
                        {/*<p>The Aether, a decentralized bridge connecting <strong>EVM</strong> chains. {'\n'}</p>*/}
                        {/*<ul>
                            <li>
                                <img src={icons.qm}/>
                                <a href="/">Questions?</a>
                            </li>
                            <li>
                                <a href="/">Contact Us</a>
                            </li>
                        </ul>*/}
                    </div>
                    <div className="r_h">
                        <img src={images.bgm}/>
                    </div>
                </div>
                <section>
                        <ul>
                            <li className="act"><a >Documentaion</a></li>
                            <li><a>Logs&TXNS</a></li>
                            <Link to="/dashboard"><li>Dashboard</li></Link>
                        </ul>
                    </section>
            </div>
            {/*
                needs to be aligned so the title and the image and the description are all on the same line 
                vertically and horizontally
            */}
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
                <button>More Info</button>
                <div></div>
            </div>

            <div className="chains">
                <h1>Supported Blockchains</h1>
                <ul>
                    {chains.map((c, idx) => 
                    <li key={idx} className={chain === c.name ? "chain" : ""} onClick={() => setChain(c.name)}>
                        <div>
                            <h3>{c.name}{'\n'}</h3>
                            <div className="ch_info">
                                <img src={c.logo}/>
                                <h3><span>{c.symbol}</span></h3>
                            </div>
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

            <div className="last_sec">
                
                <div className="guides">
                <ul >
                    {guides.map((g,idx) => 
                    
                    <li key={idx} onClick={() => window.open(g.site, "_blank")}>
                        <div>
                            <h4>Guides/{g.name}{'\n'}<span>{g.desc}</span></h4>
                            <img src={""}/>
                        </div>
                        <div>
                            <h3>{g.action}</h3>
                            <img src={icons.arrow}/>
                        </div>
                    </li>
                )}
                </ul>
                <button onClick={() => window.open("/guides", "_blank")}>More developer guides</button>
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
                 {/*<ul>
                            <li>
                                <img src={icons.qm}/>
                                <a href="/">Questions?</a>
                            </li>
                            <li>
                                <a href="/">Contact Us</a>
                            </li>
                        </ul>*/}
                </div>
            </div>
        </div>
    );
};