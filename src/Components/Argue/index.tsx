import { FC } from "react";

export const ArgueC:FC<any> = (props:any) => {


    function argsValues(idx:number, i:number,e:string){
        props.setContractData((func:any) => func.map((f:any,fi:number) => fi === idx ? {
            ...f,
            arguments: f.arguments.map((a:any,ai:number) => ai === i ? ({
               ...a,
               value:e
           }):
           a
           )
        }:
        f
        ))
   };
    
    return(
        <>
        {props.type === "string" && (
                <label>{props.title}<input type={"text"} value={props.contractData[props.fi]['arguments'][props.ai]['value'] as string} onChange={(e) => argsValues(props.fi, props.ai, e.target.value)}/></label>
        )}
        {props.type === "address" && (
                <label>{props.title}<input type={"text"} value={props.contractData[props.fi]['arguments'][props.ai]['value'] as string} onChange={(e) => argsValues(props.fi, props.ai, e.target.value)}/></label>
        )}
        {props.type.includes("uint") && (
                <label>{props.title}<input type={"text"} value={props.contractData[props.fi]['arguments'][props.ai]['value'] as string} onChange={(e) => argsValues(props.fi, props.ai, e.target.value)}/></label>
        )}
        {props.type === "bytes" && (
                <label>{props.title}<input type={"text"} value={props.contractData[props.fi]['arguments'][props.ai]['value'] as string} onChange={(e) => argsValues(props.fi, props.ai, e.target.value)}/></label>
        )}
        </>
    )
};
