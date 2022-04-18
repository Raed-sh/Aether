import { FC, useEffect, useState } from "react";
import { icons } from "../../Assets";

export const OperatingSys:FC<any> = (props:any) => {


    const [osNodes, setOsNodes] = useState<string[]>([]);

    useEffect(() => {
        let _temp = [] ;
        for(let i =0; i< 13; i++){
            _temp.push("linux-amd64");
        }
        setOsNodes(_temp);
    },[]);



    return(
        <div className="os">
            <h1>Operating System</h1>
            <div className="os_cont">
                <div className="os_stats">
                    <ol>
                        {osNodes.map((o,idx) => 
                            <li key={idx}>
                                <img src={Object.values(icons.circles)[idx]}/>
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