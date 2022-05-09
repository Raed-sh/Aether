import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import React, { FC, useEffect } from 'react';
import { AppLayout } from './AppLayout';
import { MetamaskProvider } from './Utils/Wallet/MetamaskProvider';

export const Providers: FC = ({ children }) => {

    
    function getLibrary(provider: any) {
        const library = new Web3Provider(provider)
        library.pollingInterval = 12000
        return library
      }

     

    

    return(
        <Web3ReactProvider getLibrary={getLibrary}> 
            <MetamaskProvider>
                <AppLayout>
                    {children}
                </AppLayout>
            </MetamaskProvider>        
        </Web3ReactProvider>
    )
}