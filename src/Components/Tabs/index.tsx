import { FC } from "react";
import { chains } from "../../Constants";

export const Tabs:FC<any> = (props:any) => {
  return (
      <div className="tabs">
          {chains.map((c,idx) => 
            <li key={idx}>
            <input  type="radio" id={c.name} name="tabs" />
            <label  className="tab" htmlFor={c.name} onClick={() => props.setChainData({...props.chainData, chain: c.name, "chain ID":c.id})}>
              <img src={c.logo}/>
            </label>  
            </li>

          )}
        
      </div>
  );
};
