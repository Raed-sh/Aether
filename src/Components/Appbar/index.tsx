import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { FC, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { images } from "../../Assets";
import { appbar } from "../../Constants";
import { connectedWallet } from "../../Utils/Functions";
import { Loader } from "../Loader";
import { Modal } from "../Modal";

export const Appbar:FC = () => {
    const { active, account, activate} = useWeb3React<Web3Provider>();
    const [displayModal, setDisplayModal] = useState<boolean>(false);
    const [path, setPath] = useState<string>();

    useEffect(() => {
        setPath(window.location.pathname);
      }, []);

      function handleRoutes(i:any){
          if(i.name.toLowerCase() === "guides"){
                // return <Link to="guides" spy={true} smooth={true}>Guides</Link>
          }else{
            return <a href={i.link}>{i.name}</a>
          }
      }


    return(
        <>
        {displayModal&&(
            <Modal 
                active={active}
                activate={activate}
                setDisplayModal={setDisplayModal}
            />
        )}
        <div className="appbar">
            
            <a href="/" className="logo">
                <img src={images.logo} alt="LOGO"/>
            </a>
            <ul>
                {appbar.map((i,idx) =>
                    <li key={idx}>
                        {/* {handleRoutes(i)} */}
                        <a href={i.link}>{i.name}</a>
                    </li>
                )}
            </ul>

            <button onClick={()=> setDisplayModal(true)}>
                {displayModal ? <Loader/> : connectedWallet(account,active)}
            </button>
        </div>
        </>

    )
}