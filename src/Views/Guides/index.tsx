import { FC, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Tokens } from "./tokens";

export const Guides:FC<any> = (props:any) => {

    const conts = [
        {
            title:"OxA",
            childs:[]
        },
        {
            title:"DAO",
            childs:[]
        },
        {
            title:"HUB",
            childs:[]
        },
        {
            title:"NODE",
            childs:[]
        },
        {
            title:"PROXY",
            childs:[]
        },
        {
            title:"TREASURY",
            childs:[]
        },
        {
            title:"TOKENS",
            childs:["ERC 720", "ERC 721", "ERC 1155"]
        },
        
    ];

    const [docType, setDocType] = useState<string>("");

    const {doc} = useParams();

    useEffect(() => {
        if(typeof(doc) !== "undefined"){
            setDocType(doc)
        }
    },[doc]);

    const navigate = useNavigate()

    const DocBody:FC<any> = (props:any) => {
        if(props.doc.toLowerCase().includes("erc") || props.doc.toLowerCase().includes("tokens")){
            return <Tokens edition={props.doc}/>
        }else{
            switch(props.doc.toLowerCase()){
                default:
                    return(
                        <div className="docs_body">
                            <h1>Head Line</h1>
                            {Array(5).fill(5).map((_,idx) => 
                                <section>
                                    <h3>Sub Line</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure., "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
                                </section>
                             )}
                        </div>
                )
            }
        }
       
    }

    return(
        <div className="docs">
            <div className="docs-cont">
                <div className="left_menu">
                    <h2>Guides</h2>
                    <ul>
                        <li onClick={() => setDocType("GetStarted")}>Get Started</li>
                        
                            <label>
                                Contracts
                            </label>
                            <ul>
                                {conts.map((c, idx) =>
                                <>
                                    {c.title === "TOKENS" ? <li key={idx}>{c.title}</li> : 
                                    <Link to={`/guides/${c.title}`}>
                                        <li key={idx}>{c.title}</li>
                                    </Link>
                                    }
                                    {c.childs.length > 0&&(
                                    <ol>
                                        {c.childs.map((i,idx) => <Link to={`/guides/${i}`}><li key={idx}>  {i}</li></Link>)}
                                    </ol>                                    
                                    )}

                                </>
                               )}
                            </ul>
                        </ul>
                </div>
                
                <DocBody doc={docType}/>
                
            </div>
        </div>
    );
};