import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Web3 from "web3";
import { icons } from "../../Assets";
import { Searchbar } from "../../Components/Searchbar";
import { SearchData, TxnDetails } from "../../Utils/Types";

export const Transaction:FC<any> = (props:any) => {
    const {txn_id} = useParams();

    const [searchData, setSearchData] = useState<SearchData>({address:"",filter:""});
    const [txnDetails, setTxnDetails] = useState<TxnDetails | undefined>(undefined);



    // We need to solve config.js issues to use WEB3 calls.

    // useEffect(() => {
    //     if(Web3.utils.isAddress(txn_id!)){
    //         setTxnDetails({
    //             txn_hash1:"0xe56f66b0efb019a11c1f378e26d3a4ec26227af2be3f38ff03e16c562268e09e",
    //             txn_hash2:"0xe56f66b0efb019a11c1f378e26d3a4ec26227af2be3f38ff03e16c562268e09e",
    //             status:"Success",
    //             timestamp:"Apr-25-2022 09:52:40 PM",
    //             from:"0x4872dbd459a0f226a2b4d10fa0cb53f1c151a916",
    //             to:"0x4872dbd459a0f226a2b4d10fa0cb53f1c151a916",
    //             value:"1.665362",
    //             txn_fee:"1.665362",
    //         })
    //     }
    // },[])

    return(
        <div className="logs">
            <div className="h_log">
                <h1>
                    Transactions<span>Aether / <span>OxA</span></span>{'\n'}
                    <img src={icons.chains.aether}/>
                </h1>
                <Searchbar searchData={searchData} setSearchData={setSearchData}/>
            </div>

            <div className="h_cont">
                <div className="boxs_cont">
                    
                    <div className="box trans">
                        <h2>Transaction Details</h2>
                        {typeof(txnDetails) !== "undefined" ? 
                        <>
                            <ul>
                                <li>
                                    <h3><img src={icons.qm} title="Transaction Hash 1"/>Transaction Hash 1:</h3>
                                    <h3>{txnDetails.txn_hash1}</h3>
                                </li>
                                <li>
                                    <h3><img src={icons.qm} title="Transaction Hash 2"/>Transaction Hash 2:</h3>
                                    <h3>{txnDetails.txn_hash2}</h3>
                                </li>
                                <li>
                                    <h3><img src={icons.qm} title="Status"/>Status:</h3>
                                    <h4>{txnDetails.status}</h4>
                                </li>
                                <li>
                                    <h3><img src={icons.qm} title="Timestamp"/>Timestamp:</h3>
                                    <h3>{txnDetails.timestamp}</h3>
                                </li>                            
                            </ul>

                            <ul>
                                <li>
                                    <h3><img src={icons.qm} title="From"/>From:</h3>
                                    <h3><span>{txnDetails.from}</span></h3>
                                </li>
                                <li>
                                    <h3><img src={icons.qm} title="To"/>To:</h3>
                                    <h3><span>{txnDetails.to}</span></h3>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <h3><img src={icons.qm} title="Value"/>Value:</h3>
                                    <h3>{txnDetails.value} Aether</h3>
                                </li>
                                <li>
                                    <h3><img src={icons.qm} title="Transactions"/>Transaction Fee:</h3>
                                    <h3>{txnDetails.txn_fee} Aether</h3>
                                </li>
                            </ul>
                        </>
                        :
                        <section>
                            <h3>An invalid transaction hash has been entered:{'\n'}
                                <span>{txn_id}</span>
                            </h3>
                        </section>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}