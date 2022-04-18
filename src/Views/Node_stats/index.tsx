import { FC } from "react";
import { icons } from "../../Assets";
import { stats_table } from "../../Constants";

export const NodeStats:FC<any> = (props:any) => {
    return(
        <div className="statistics">

            <div className="s_cont">
                <h1>Node Stats</h1>
                <div className="s_table">
                    <div className="table_header">
                        <p>A total 3230 nodes found</p>
                        <ul>
                            <li>First</li>
                            <li><img src={icons.l_arr}/></li>
                            <li>Page 1 Of 123</li>
                            <li><img src={icons.r_arr}/></li>
                            <li>Last</li>
                        </ul>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                {stats_table.titles.map((h,idx) => 
                                <th>{h}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {stats_table.childs.map((i,idx) => 
                            <tr>
                                <td>{i.Node_Id}</td>
                                <td>{i.Host}</td>
                                <td>{i.Port}</td>
                                <td>{i.Country}</td>
                                <td>{i.Client}</td>
                                <td>{i.Type}</td>
                                <td>{i.OS}</td>

                            </tr>
                            )}
                            
                        </tbody>
                    </table>
                    <div className="table_header">
                        <label>
                            Show
                            <input type={"number"} value={10}/>
                            Records
                        </label>
                        <ul>
                            <li>First</li>
                            <li><img src={icons.l_arr}/></li>
                            <li>Page 1 Of 123</li>
                            <li><img src={icons.r_arr}/></li>
                            <li>Last</li>
                        </ul>
                    </div>

                </div>
            </div>
            
            <div className="links">
                <ul>
                    <li>OS <a href="/">View all stats</a></li>
                    <li>Client <a href="/">View all stats</a></li>
                    <li>Country <a href="/">View all stats</a></li>
                </ul>
            </div>
        </div>
    )
}