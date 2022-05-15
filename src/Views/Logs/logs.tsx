import { FC, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { icons } from "../../Assets";
import { BarChart } from "../../Components/BarChart";
import { Loader } from "../../Components/Loader";
import { Searchbar } from "../../Components/Searchbar";
import { Tabs } from "../../Components/Tabs";
import { chains, commonData } from "../../Constants";
import { CONTRACT } from "../../Constants/contracts";
import { explorerNav, TrimAddress } from "../../Utils/Functions";
import {  SearchData, TRANSACTION } from "../../Utils/Types";

export const Logs:FC<any> = (props:any) => {

    const STATE = useSelector(state => state) as PROVIDER_STATE

    const [searchData, setSearchData] = useState<SearchData>({address:"",filter:""});
    const [lastTxns, setLastTxns] = useState<TRANSACTION[]>([]);
    const [shownblocks, setShownBlocks] = useState<number>(5);
    const [Aethers, setAethers] = useState<any>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [chainData, setChainData] = useState({
        "chain":"Binance",
        "chain ID":"56",
        "hub address":"0x2d9762564fa6802B5Ca0853830AA3676a3a7B706",
        "treasury address":"0x2d9762564fa6802B5Ca0853830AA3676a3a7B706",
        "native treasury":"300 BNB",
        "OxA treasury":"100,000,000 OxA",
        "avg deploy fees":"10000 OxA",
        "avg txn fees":"7760 OxA",
    });

    
    

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
                            {commonData.map((c,idx) => 
                                <li key={idx}>
                                    <img src={c.logo}/>
                                    <h3> {`${c.title} \n`}
                                        <span>{c.value}</span>{`\n`}
                                    </h3>
                                </li>
                            )}
                        </ul>
                    </div>


                    <div className="box chain_d">
                        <h2>Supported chians</h2>
                        <Tabs setChainData={setChainData} chainData={chainData}/>

                        <ul>
                            {typeof(chainData) !== "undefined"&& Object.keys(chainData).map((c,idx) => 
                            <li key={idx}>
                                <h3><img src={icons.qm}/> {c}:</h3>
                                <h3>{(chainData as any)[c]}</h3>
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="box txns">
                        <h2>Latest Transactions</h2>
                        {loading ? <Loader/> :
                            lastTxns.length > 0 ? 
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
                        :
                        <h1>No Txns currently!</h1>
                        }
                        
                    </div>
            </div>
        </div>
    );
};