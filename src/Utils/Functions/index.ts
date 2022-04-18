import { injectedConnector, walletconnect } from "../Wallet/connectors";

export function AdjustmentScreen() {
    let viewheight = window.innerHeight;
    let viewwidth = window.innerWidth;
    let viewport = document.querySelector("meta[name=viewport]") as HTMLElement;
    viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
  };

  // Wallet Handling Functions
async function connectInjected(activate:any) {
  console.log("Start connecting")
  try {
      await activate(injectedConnector)
  } catch (ex) {
      console.log(ex)
  }
};
async function connectWalletConnect(activate:any){
      console.log("Connecting to WalletConnect...")
      await activate(walletconnect)
};
export async function disconnect(deactivate:any) {
  try {
     await deactivate()
      console.log("Disconnected!")
  } catch (ex) {
    console.log(ex)
  }
};
export function connectedWallet (account:any, active:any){
  if (active && account) {
    const address = account.split('');
    return (
        address[0] +
          address[1] +
          address[2] +
          address[3] +
          '...' +
          address[38] +
          address[39] +
          address[40] +
          address[41]
          )
      }
      return "Connect Wallet";
};
export function connectMapper(conn_type:string,active:any,activate:any){
  if(!active){
   switch(conn_type){
      case 'Metamask':
          return connectInjected(activate);
      case 'WalletConnect':
          return connectWalletConnect(activate);
      default:
          return connectInjected(activate);
      }   
  }
};

export function toTimestamp(humDate:any){
  var datum = Date.parse(humDate);
  return datum/1000;
}