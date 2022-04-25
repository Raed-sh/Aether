import { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { icons } from "../../Assets";
import { BarChart } from "../../Components/BarChart";
import { Searchbar } from "../../Components/Searchbar";
import { SearchData } from "../../Utils/Types";

export const Logs:FC<any> = (props:any) => {

    const [searchData, setSearchData] = useState<SearchData>({address:"",filter:""});

    const [dummyData, setDummyData] = useState<number>(5)

    return(
        <div className="logs">
            <div className="h_log">
                <h1>
                    Logs & Txns<span>Aether / <span>OxA</span></span>{'\n'}
                    <img src={icons.chains.aether}/>
                </h1>
                <Searchbar searchData={searchData} setSearchData={setSearchData}/>
            </div>

            <div className="h_cont">
                <div className="boxs_cont">
                    <div className="box info">
                        <ul>
                            <li>
                                <img src={icons.A}/>
                                <h3>
                                    Aether price {'\n'}
                                    <span>$0.34
                                        <span>(0.44%)</span>
                                    </span>
                                </h3>
                            </li>

                            <li>
                                <img src={icons.txn}/>
                                <h3>
                                    Transactions {'\n'}
                                    <span>14 445 678
                                        
                                    </span>
                                </h3>
                            </li>

                            <li>
                                <img src={icons.market}/>
                                <h3>
                                    Market capitalization {'\n'}
                                    <span>
                                        $345,3478,678.00
                                    </span>
                                </h3>
                            </li>

                            <li>
                                <img src={icons.diff}/>
                                <h3>
                                    Difficulty {'\n'}
                                    <span>
                                        9, 445.67 TH
                                    </span>
                                </h3>
                            </li>
                        </ul>
                        <div>
                            <BarChart/>
                        </div>
                    </div>
                    <div className="box txns">
                        <h2>Latest Contracts</h2>
                        <ul>
                            {Array(dummyData).fill(0,).map((_,idx) => 
                            <li>
                                
                                <div>CT</div>
                                <h4>14567896{'\n'}<span>9 Sec Ago</span></h4>
                                <h4>Miner 666 Mining Pool{'\n'}<span>70 txns <span>in 10sec</span></span></h4>
                                <h5>22.6769 Aether</h5>
                        </li>
                            )}
                        </ul>
                        {dummyData <= 5 &&(<button onClick={() => setDummyData(20)}>View all blocks</button>)}
                    </div>
                    <div className="box txns">
                        <h2>Latest Transactions</h2>
                        <ul>
                            {Array(dummyData).fill(0,).map((_,idx) =>
                            <li key={idx} onClick={() => window.open(`/logs/transactions/${"oxb527e1b22978"}`,"_blank")}>

                                <div>Tx</div>
                                <h4>oxb527e1b22978...{'\n'}<span>9 Sec Ago</span></h4>
                                <h4><span>From </span>0x0101d91c01aedd7bfo...{'\n'}
                                    <span>To </span>0x0101d91c01aedd7bfo...
                                </h4>
                                <h5>22.6769 Aether</h5>
                        </li>
                            )}
                        </ul>
                        {dummyData <= 5 &&(<button onClick={() => setDummyData(20)}>View all blocks</button>)}
                    </div>
                </div>
            </div>

        </div>
    )
}