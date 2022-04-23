import { FC, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export const DChart:FC<any> = (props:any) => {

    const options = {
        series: props.series,
        labels: props.labels
    };

    return(
        <></>
        // <ReactApexChart
        //     options={options}
        //     series={props.series}
        //     type="donut"
        //     width="100%"
        //     height={300}
        // />
    )
}