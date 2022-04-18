import React from 'react';
import { Appbar } from '../Components/Appbar';
import { Footer } from '../Components/Footer';


export const AppLayout = React.memo(function AppLayoutImpl(props: any) {
    return (
      <>
          <Appbar/>
          {props.children}
          <Footer/>
        </>
    );
  });
  