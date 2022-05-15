import { FC, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { icons } from "../../Assets";
import { ArgueC } from "../../Components/Argue";
import { Loader } from "../../Components/Loader";
import { dummy_cont, dummy_data, Tokens_Table } from "../../Constants";
import { initW3Contract } from "../../Utils/Functions";
import { callContractFunction } from "../../Utils/Functions/web3Calls";
import { ARG, DUMMY, FUNCTION } from "../../Utils/Types";

export const TokenStats: FC<any> = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const tab0: any = useRef();

  const [tokenData, setTokenData] = useState({
    name: location.state.name,
    logo: location.state.logo,
    symbole: location.state.symbol,
  });
  const [contractData, setContractData] = useState<FUNCTION[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [cont, setCont] = useState<any>();

  const onScroll = () => {
    if (tab0.current) {
      const { scrollTop, scrollHeight, clientHeight } = tab0.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log("reached bottom");
      }
    }
  };

  function SetContract() {
    var _funcs:FUNCTION[] = [];
    var func_name:string;

    setLoading(true)

    let _cont = initW3Contract("3", dummy_cont.address, dummy_cont.abi);
    setCont(_cont)

    for (const func in _cont.methods) {
      var _arguments:ARG[] = [];
      if (func.includes("("|| ")")) {

        if((func as any).match(/[^(]*\(([^)]*)\)/)[1]){
          var func_data = func.split(/\W+/);

          func_name = func_data[0].concat("()");
          for(var i=0; i< func_data.length; i++){

            if(func_data[i].includes("uint") || func_data[i].includes("address") || func_data[i].includes("string") || func_data[i].includes("bytes")){

              _arguments.push({
                name:`Argument`,
                type:func_data[i],
                value:""
              });
            }
          }
          _funcs.push({
            name:func_name,
            arguments:_arguments,
            response:""
          })
        }else{
          func_name = func;
          _arguments = [];
          _funcs.push({
            name:func_name,
            arguments:[],
            response:""
          })
        }
      }
    };
    setContractData(_funcs);
    setLoading(false);
  }


  async function callFunction(_name:string,_arguments:any,idx:number){
   let res = await callContractFunction(cont,_name,_arguments);
   console.log(res)
  
   setContractData((func:any) => func.map((f:any,fi:number) => fi === idx ? {...f,response:res}
    :
    f
    ))
  }




  return (
    <div className="tokens">
      {Tokens_Table.map((t, idx) => (
        <div className="s_cont" key={idx}>
          <div className="tok_h">
            <h2>
              <img src={tokenData.logo} />
              {tokenData.name}
            </h2>{" "}
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
          <div className="s_table" ref={tab0} onScroll={onScroll}>
            <table>
              <thead>
                <tr>
                  {t.headers.map((h, idx) => (
                    <th key={idx}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.tokens.map((i, idx) => (
                  <tr key={idx}>
                    <td>{i.t_name + " " + idx}</td>
                    <td>{i.t_adds}</td>
                    <td>{i.t_bal}</td>
                    <td>{i.t_type}</td>
                    <td>
                      <button
                        onClick={() => {
                          SetContract();
                        }}
                      >
                        Load Contract
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

        {typeof(contractData) !== "undefined" && 
        
        <div>
          <div className="pl_gr fc">
            {loading ? <Loader/> : 
            contractData.map((f, idx) => (
              <section key={idx}>
                {f.arguments.map((a, i) => (
                  <label key={i}>
                    <ArgueC
                      type={a.type}
                      title={a.name}
                      fi={idx}
                      ai={i}
                      contractData={contractData}
                      setContractData={setContractData}
                    />
                  </label>
                ))}
                <button onClick={() => callFunction(f.name,f.arguments,idx)}>{f.name.split('(')[0]}</button>

                {f.response !== "" && typeof(f.response) !== "undefined" && f.response !== null &&(
                  <p>{f.response}</p>
                )}
              </section>
            ))}
            <div className="close" onClick={() => setContractData(undefined)}>
              <img src={icons.close} />
            </div>
          </div>
        </div>
        }
    </div>
  );
};
