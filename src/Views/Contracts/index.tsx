import { FC, useState } from "react";
import { icons } from "../../Assets";

export const Contracts: FC<any> = (props: any) => {

    const [checkType, setCheckType] = useState<boolean[]>([false, true]);


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
        <div className="pl_gr">
            {Array(10).fill(0).map((_,idx) => <button>Function {idx}</button>)}
            
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
