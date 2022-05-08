import { FC, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { icons } from "../../Assets";
import { BarChart } from "../../Components/BarChart";
import { Loader } from "../../Components/Loader";
import { Searchbar } from "../../Components/Searchbar";
import { CONTRACT } from "../../Constants/contracts";
import { TrimAddress } from "../../Utils/Functions";
import {  SearchData, TRANSACTION } from "../../Utils/Types";

export const Logs:FC<any> = (props:any) => {

    const STATE = useSelector(state => state) as PROVIDER_STATE

    const [searchData, setSearchData] = useState<SearchData>({address:"",filter:""});

    const [dummyData, setDummyData] = useState<number>(5);

    const [Aethers, setAethers] = useState<any>(undefined);
    const [lastTxns, setLastTxns] = useState<TRANSACTION[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [shownblocks, setShownBlocks] = useState<number>(5);


    useEffect(() => {
        if(typeof(Aethers) === "undefined"){
            console.log("CONTRACTS INIT")
            initContracts();
        }else{
            console.log("CHECK EVENTS")
            checkEvents();
        }
    },[Aethers])

    async function initContracts(){
        const _chains :any = Object.keys(CONTRACT.addresses);
        const chains_addr :any = Object.values(CONTRACT.addresses);
        var _contract;
        var _latest_block;
        var _contracts:any = []
        for(var i=0; i< _chains.length; i++){
            var temp:string = _chains[i];
            var _address:string = chains_addr[i];
            var _w3 = STATE[temp]['w3'];

            _contract = new _w3.eth.Contract(CONTRACT.abi, _address);
            _latest_block = await _w3.eth.getBlockNumber();
            _contracts.push({
                contract: _contract,
                block: _latest_block
            });
        }
        setAethers(_contracts);
    };

    async function checkEvents(){
        var _txn;
        var _txns:any = []
        for(var i=0; i<Aethers.length; i++){
            _txn = await Aethers[i].contract.getPastEvents("Aether",{fromBlock:Aethers[i].block - 3000, toBlock:"latest"});
            if(_txn.length > 0){
                _txns.push({
                    aethered_contract: _txn[0].returnValues.AetheredContract,
                    callee: _txn[0].returnValues.Callee,
                    caller:_txn[0].returnValues.Caller,
                    chainID: _txn[0].returnValues.ChainID,
                    changer: _txn[0].returnValues.Changer,
                    selector:_txn[0].returnValues.Selector,
                    args:_txn[0].returnValues.Args,
                    txn_hash:_txn[0].transactionHash,
                    block_number:_txn[0].blockNumber,
                })
            }
        }
        setLastTxns(_txns)
        setLoading(false)
    };

    function explorerNav(id:string, hash:string){
        switch(id){
            case "1":
                return `https://etherscan.io/tx/${hash}`;
            case "3":
                return `https://ropsten.etherscan.io/tx/${hash}`;
            case "56":
                return `https://bscscan.com/tx/${hash}`;
            case "137":
                return `https://ftmscan.com/tx/${hash}`;
            case "250":
                return `https://polygonscan.com/tx/${hash}`;
            default:
                return `/logs/transactions/${hash}`
        }
    };


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
                            <li key={idx}>
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
                        {loading ? <Loader/> :
                        <>
                        <ul>
                            {lastTxns.slice(0,shownblocks).map((t,idx) =>
                            <li key={idx} onClick={() => window.open(explorerNav(t.chainID,t.txn_hash),"_blank")}>
                                <div>Tx</div>
                                <h4 title={t.aethered_contract}>{`${TrimAddress(t.aethered_contract) } \n`}<span>9 Sec Ago</span></h4>
                                <h4>
                                    <span>From </span>{TrimAddress(t.caller)}
                                    {'\n'}
                                    <span>To </span>{TrimAddress(t.callee)}
                                </h4>
                                <h5>22.6769 Aether</h5>
                        </li>
                            )}
                        </ul>
                         {shownblocks < lastTxns.length &&( <button onClick={() => setShownBlocks(lastTxns.length)}>View all blocks</button>)}
                        </>
                        }
                        
                    </div>
                </div>
            </div>

        </div>
    )
}