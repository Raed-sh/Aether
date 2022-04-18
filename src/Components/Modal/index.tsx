import React, { FC } from "react";
import { providers } from "../../Constants";
import { connectMapper } from "../../Utils/Functions";

export const Modal:FC<any> = (props:any) => {
    

   async function ConnectW(prov_name:string) {
      
       await connectMapper(prov_name,props.active,props.activate)?.then(() => {
           props.setDisplayModal(false);
       }).catch(() => {
           props.setDisplayModal(false)
       });
    }

    return(
        <div className="modal">
            <div className="modal_bg" onClick={() => props.setDisplayModal(false)}/>
            <div className="modal_cont">
                <ul >
                    {
                        providers.map((p,idx) =>
                        <li key={idx} onClick={() => ConnectW(p.title)}>
                            <img src={p.logo}/>
                            <h2>{p.title}</h2>
                            <p>{p.desc}</p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )

}