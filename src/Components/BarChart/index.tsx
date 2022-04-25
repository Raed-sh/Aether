import { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";

export const BarChart:FC<any> = (props:any) => {
    const [chData, setChData] = useState<any>({
        series: [{
            name: 'Transactions',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66,44, 55, 57, 56, 61]
            
          }],

          options: {
            title:{
                text:"Aether transactions history in 14 days",
                style:{
                    color:"#898A9A",
                    fontSize:"16px"
                }
            },

            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '20%',
                endingShape: 'rounded'
              },
            },
            
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14'],
            },
            fill: {
              opacity: 1
            },
          },
    }) 



    return(
            <></>
    );
};