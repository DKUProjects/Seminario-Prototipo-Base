import React, {useState} from "react";
import {IconContext} from "react-icons";
import {BsSun,BsMoon} from "react-icons/bs";
import "./css/Header.css";

export default function Header(props){

    const modo = props.modo
    const {setLocalMode} = props

    const lightHeader = ()=>{
        return(
            <div className="btn-form">
                <IconContext.Provider value={{color:'#FFFF00'}}>
                    <BsSun onClick={setLocalMode}/>
                </IconContext.Provider>
            </div>
        );
    }
    const darkHeader = ()=>{
        return(
            <div className="btn-form">
                <IconContext.Provider value={{color:"#696969"}}>
                    <BsMoon onClick={setLocalMode}/>
                </IconContext.Provider>
            </div>
        )
    }
    return(
        <>
            <div className={modo ? 'container-fluid d-inline-flex col-12 d-inline-block daybg':'container-fluid d-flex col-12 d-inline-block nigthbg'}>
                <div className='text-center col-8 col-lg-9 TituloIl'>
                    <span className={modo?'text-body font-weight-bold':'text-white font-weight-bold'}>DK PROJECTS</span>
                </div>
                <div className="btn-container d-inline-flex col-3 TituloIl">
                    <div className="col-1">{modo ? darkHeader():lightHeader()}</div>
                </div>
                <br/><br/>
            </div>
        </>
    )
}