import { FC, useEffect, useState } from "react";
import { icons } from "../../Assets";
import { DChart } from "../../Components/DountChart";

export const Client:FC<any> = (props:any) => {


    const [osNodes, setOsNodes] = useState({
        ser:[],
        lab:[]
    });

    useEffect(() => {
        let _tempS:any = [];
        let _tempL:any = [];

        for(let i =0; i< 13; i++){
            _tempL.push(`client${i}`);
            _tempS.push(i);

        }
        setOsNodes({...osNodes, ser:_tempS, lab:_tempL});
    },[]);



    return(
        <div className="os">
            <h1>Client</h1>
            <div className="os_cont">
                <div className="os_stats">
                    <ol>
                        {osNodes.lab.map((o,idx) => 
                            <li key={idx}>
                                {/* <img src={Object.values(icons.circles)[idx]}/> */}
                                {o}
                            </li>
                        )}
                    </ol>

                    <ul>
                        <li>
                            <h2>92.87%</h2>
                            <p>From all Data</p>
                        </li>
                        <li>
                            <h2><span>3000</span></h2>
                            <p>Nodes</p>
                        </li>
                    </ul>
                    

                </div>

                <div className="os_chart">
                    <DChart series={osNodes.ser} labels={osNodes.lab}/>
                </div>
            </div>
            <div className="links">
                <ul>
                    <li>Node Stats <a href="/">View all stats</a></li>
                    <li>Client <a href="/">View all stats</a></li>
                    <li>Country <a href="/">View all stats</a></li>
                </ul>
            </div>
        </div>
    )
}