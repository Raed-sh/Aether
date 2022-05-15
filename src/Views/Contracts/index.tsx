import { FC, useEffect, useState } from "react";
import Web3 from "web3";
import { ArgueC } from "../../Components/Argue";
import { dummy_data } from "../../Constants";
import { DUMMY, FUNCTION } from "../../Utils/Types";

export const Contracts: FC<any> = (props: any) => {

    

    const [checkType, setCheckType] = useState<boolean[]>([true, false]);
    const [contractData, setContractData] = useState<FUNCTION[]>([]);
    

    

    
  return (
    <div className="contracts">
      <div className="s_cont">
        <h1>Contracts</h1>
        <div className="conts">
            <div className={checkType[0] ? "last_c c_act" : "last_c"}>
            <label>
                <input type={"checkbox"} checked={checkType[0]} onChange={(e) => setCheckType({...checkType,0:e.target.checked,1:false})}/>
                Last Contracts 
            </label>
            <div className="s_search">
            <label>
                Search for contract
                <input type={"text"} placeholder={"Contract Address:...eg:OxA"}/>
                <button>Search</button>
            </label>
            </div>
            <ul>
                <li>Contract 1</li>
                <li>Contract 1</li>
            </ul>

            </div>
            <div className={checkType[1] ? "new_c c_act" : "new_c"}>
                <label>
                    <input type={"checkbox"} checked={checkType[1]} onChange={(e) => setCheckType({...checkType,1:e.target.checked,0:false})}/>
                        New Contract
                </label>
                <p>By Filling the contract information.that contract will connect to Aether</p>
            </div>
        </div>


        {checkType[0] ? 
        <div className="pl_gr fc">
            {contractData.map((f,idx) => 
                <section key={idx}>
                    {f.arguments.map((a,i) => 
                        <label key={i}>
                            <ArgueC 
                            type={a.type}
                            title={a.name}
                            fi={idx}
                            ai={i}
                            contractData={contractData}
                            setContractData={setContractData}/>
                        </label>
                    
                    )}
                    <button>{f.name}</button>
                </section>
            )}
        </div>      
        :
        
        <div className="pl_gr">
            <label>Contract address
                <input type={"text"} placeholder="Enter Contract Address...eg:oxA45dswe"/>
            </label>
            <label>Contract type
            <select>
                <option>
                    ERC 721
                </option>
            </select>
            </label>
            <button>Aether IT</button>
        </div>
}

      </div>
    </div>
  );
};


/*
    There's mainly two types of Aether contracts:
        1. Aethered => only once, will support inflow and outflow 
        2. Aethering => always, changes takes place everywhere.
*/