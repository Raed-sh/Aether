import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { icons, images } from "../../Assets";
import { chains, feats, socials } from "../../Constants";


export const Dashboard:FC<any> = (props:any) => {


    return(
        <div className="dashboard">
            <div className="land_cont">
                <div className="land_h">
                    <div className="l_h">
                        <h1>Dashboard</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure., "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis aute irure.
                        </p>
                        <Link to={"/contracts"}><button>Contracts</button></Link>
                    </div>
                    <div className="r_h">
                        <img src={images.bgm}/>
                    </div>
                </div>
                
            </div>

            <div className="nodes">
                <h1>My Nodes</h1>
                <div className="node_info">
                    <div className="node stats">
                        <h2>Node Stats</h2>
                        <button>View all nodes</button>
                        <div className="node_cont">
                            <ul>
                                <li>
                                    <h3><img src={icons.up_arr}/> 3.40%</h3>
                                    <p>Last 24 hours</p>
                                </li>
                                <li>
                                    <h3><img src={icons.up_arr}/> 0.40%</h3>
                                    <p>Last 24 hours</p>
                                </li>
                                <li className="downs">
                                    <h3><img src={icons.d_arr}/> 2.32%</h3>
                                    <p>Last 30 days</p>
                                </li>
                                <li>
                                    <h3>3230</h3>
                                    <p>Nodes for all time</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="node os">
                    <h2>OS</h2>
                        <button>View all stats</button>
                        <div className="node_cont">
                            <section>
                                <button><img src={icons.up_card}/></button>
                                <button><img src={icons.down_card}/></button>
                            </section>
                                 <ol>
                                    <li><img src={icons.p_p}/>Linux-amd64</li>
                                    <li><img src={icons.circles.c_o}/>Linux x64</li>
                                    <li><img src={icons.circles.c_g}/>windows-amd64</li>
                                </ol>
                                <ul>
                                    <li>
                                        <h3><img src={icons.up_arr}/> 3.40%</h3>
                                        <p>Last 24 hours</p>
                                    </li>
                                    <li>
                                        <h3><img src={icons.up_arr}/> 3.40%</h3>
                                        <p>Last 24 hours</p>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div className="node country">
                    <h2>Country</h2>
                        <button>View all nodes</button>
                        <div className="node_cont">
                            <section>
                                <button><img src={icons.up_card}/></button>
                                <button><img src={icons.down_card}/></button>
                            </section>
                            <ol>
                                    <li><img src={icons.p_p}/>US</li>
                                    <li><img src={icons.circles.c_o}/>UK</li>
                                    <li><img src={icons.circles.c_g}/>Germany</li>
                                </ol>
                                <ul>
                                    <li>
                                        <h3><img src={icons.up_arr}/> 83.59%</h3>
                                        <p>Last 24 hours</p>
                                    </li>
                                    <li>
                                        <h3><img src={icons.up_arr}/> 2700</h3>
                                        <p>Nodes</p>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div className="node client">
                    <h2>Client</h2>
                        <button>View all nodes</button>
                        <div className="node_cont">
                            <section>
                                <button><img src={icons.up_card}/></button>
                                <button><img src={icons.down_card}/></button>
                            </section>
                            <ol>
                                    <li><img src={icons.p_o}/>Geth</li>
                                    <li><img src={icons.circles.c_lb}/>CoreGeth</li>
                                    <li><img src={icons.circles.c_p}/>OpenEthereum</li>
                                </ol>
                                <ul>
                                    <li>
                                        <h3><img src={icons.up_arr}/> 79.25%</h3>
                                        <p>From all data</p>
                                    </li>
                                    <li>
                                        <h3>2560</h3>
                                        <p>Nodes</p>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>



                <h1>My Tokens</h1>
            </div>

            <div className="chains">
                <ul >
                    {chains.map((c, idx) => 
                    <li key={idx}>
                        <div className="ch_info">
                            <img src={c.logo}/>
                            <h3>{c.name}</h3>
                        </div>
                        <h3>34.5678{'\n'}<span>{c.symbol}</span></h3>
                        

                        <button>View stats</button>
                    </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};