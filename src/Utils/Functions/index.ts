import Web3 from "web3";
import { truncateRegex } from "../../Constants";
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

export function TrimAddress(address:string){
  const match = address.match(truncateRegex);
  if (!match) {
    return address
  };
  return `${match[1]}…${match[2]}`;
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
};
export function explorerNav(id:string, hash:string){
  switch(id){
      case "1":
          return `https://etherscan.io/tx/${hash}`;
      case "3":
          return `https://ropsten.etherscan.io/tx/${hash}`;
      case "56":
          return `https://bscscan.com/tx/${hash}`;
      case "137":
          return `https://ftmscan.com/tx/${hash}`;
      case "250":
          return `https://polygonscan.com/tx/${hash}`;
      default:
          return `/logs/transactions/${hash}`
  }
};


// WEB3 CALLS

export  function initW3Contract(chainId: string, contractAddress: string, contractAbi: any){
  // const w3 = new Web3(getW3Provider(chainId)); this line should be reviewed
  const w3 = new Web3(Web3.givenProvider)
  return new w3.eth.Contract(contractAbi, contractAddress);
};