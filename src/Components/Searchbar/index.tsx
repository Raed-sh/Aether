import { FC, useState } from "react";
import { icons } from "../../Assets";

export const Searchbar:FC<any> = (props:any) => {


    return(
        <div className="search">
            <select value={props.searchData.filter} onChange={(e) => props.setSearchData({...props.searchData,filter:e.target.value})}>
            <option disabled value="">All Filters</option>
            <option value={"option1"}>Option 1</option>
            </select>
            <input type={"text"} placeholder={"Search by Adress / Txn Hash / Block /Token / Ens"} onChange={(e) => props.setSearchData({...props.searchData,address:e.target.value})}/>
            <button><img src={icons.search}/></button>
        </div>
    )
}