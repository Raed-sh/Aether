import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injectedConnector, walletconnect } from './connectors';
import { Web3Provider } from '@ethersproject/providers';
import { Loader } from '../../Components/Loader';


interface Props {
  children: React.ReactElement,
}
declare let window: any;



export const MetamaskProvider = ({children}:Props): React.ReactElement =>  {
  const { active, error, chainId, activate } = useWeb3React<Web3Provider>()
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    setLoaded(true)
    // for connect automatically to metamask 

    if(!loaded){
      injectedConnector.isAuthorized().then((isAuthorized) => {
        setLoaded(true)
        
        if (isAuthorized && !active && !error) {
          activate(injectedConnector)
        }
      })
      .catch(() => {
        setLoaded(true)
      })
    };

    if (window.ethereum && window.ethereum.on && !active && !error) {
      const handleChainChanged = () => {
        activate(injectedConnector);
      };
    
      const handleAccountsChanged = (accounts:any) => {
        if (accounts.length > 0) {
          activate(injectedConnector);
        }
      };
    
      const handleNetworkChanged = () => {
        activate(injectedConnector);
      };

      window.ethereum.on("chainChanged", handleChainChanged);
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("networkChanged", handleNetworkChanged);

      return () => {
        if (window.ethereum.removeListener) {
          window.ethereum.removeListener("chainChanged", handleChainChanged);
          window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
          window.ethereum.removeListener("networkChanged", handleNetworkChanged);
        }
      };
    };

  }, [active, error, activate]);

  if (loaded) {
    
    return children;
  };
  
  return (
    <div style={{height:"100vh"}}> <Loader/></div>
  );
}
