import { FC } from "react";
import { Map } from "../../Components/Map";

export const Country:FC<any> = (props:any) => {
    return(
        <div className="os">
            <h1>Operating System</h1>
            <div className="os_cont">
                <div className="country_stats">
                   
                    <ul>
                        <li>
                            <h2>268</h2>
                            <p>Nodes</p>
                        </li>
                        <li>
                            <h2><span>23.89%</span></h2>
                            <p>Canada</p>
                        </li>
                    </ul>
                    

                </div>

                <div className="os_chart">
                    <Map/>
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