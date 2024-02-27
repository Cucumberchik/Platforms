import { NavLink } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import translatorLogo from "../../assets/translatorLogo.svg"

export default function HeaderWrapper({ reLangRu, reLangKg, paths, links, activMobile, setActiveMobile }) {
    const [activLang, setActiveLang] = useState(false)
    let [load, setLoad] = useState('')




    let stor = localStorage.getItem("langUser") || ''
    console.log(stor);

    return (
        <div className="header_wrapper " style={{
            top: activMobile ? "0px" : "-640px"
        }}>
            <button className="heaber_back_menu_btn" onClick={() => setActiveMobile(false)}><IoIosArrowUp /></button>
            <nav>

                <ul>
                    {links.map((el, id) => (
                        <NavLink className="link" key={id} to={paths[id]}>{el}</NavLink>
                    ))}
                </ul>
                <div className="header_translator_mobile">

                    <div style={{
                        overflow: !activLang && "hidden",
                        width: activLang ? "100%" : "0%"
                    }} className="header_translator_btn_mobile">
                        <button onClick={reLangRu}>Русский</button>
                        <button onClick={reLangKg}>Кыргызский</button>
                    </div>
                    <img onClick={() => setActiveLang(!activLang)} src={translatorLogo} alt="translator_logo" />
                </div>
            </nav>
        </div>
    )
}
