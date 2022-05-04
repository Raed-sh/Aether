import { FC } from "react"
import { images } from "../../Assets"
import { ftr, socials } from "../../Constants";
import { Link } from "react-scroll";


export const Footer:FC = () => {


    function handleRoutes(i:any){
        if(i.toLowerCase() === "guides"){
            //   return <Link to="guides" spy={true} smooth={true}>Guides</Link>
        }else{
          return <a href={i}>{i}</a>
        }
    };


    
    return(
        <div className="ftr">
            <div>
                <ul className="ftr_cont">
                    {ftr.map((t,idx) => 
                    <li key={idx}>
                        {t.title}
                        <ul>
                            {t.childs.map((c,idx) => <li key={idx}>
                                {handleRoutes(c)}
                            </li>
                        )}
                        </ul>
                    </li>
                    )}
                    <ul className="socs">{socials.map((s, idx) => 
                        <li key={idx}>
                            <a href={s.link} target="_blank"><img src={s.logo}/></a>
                        </li>
                    )}
                    </ul>
                </ul>
            </div>
            <img src={images.logo}/>
            <p>©Aetherlabs Inc 2022. All rights reserved.</p>
        </div>
    )
}