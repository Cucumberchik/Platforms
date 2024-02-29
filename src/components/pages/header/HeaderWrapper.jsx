import { NavLink } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { language } from '../../language/language';
import translatorLogo from "../../assets/translatorLogo.svg"
import { handleLanguage } from "../../hooks/hooks";

export default function HeaderWrapper({ setmodalOAuth, reLangRu, reLangKg, paths, links, activMobile, setActiveMobile }) {
    const [activLang, setActiveLang] = useState(false)
    const langId = handleLanguage()

    let [load, setLoad] = useState('')

    let stor = localStorage.getItem("langUser") || ''
    console.log(stor);

    return (
        <div className="header_wrapper " style={{
            top: activMobile ? "0px" : "-100vh"
        }}>
            <button className="heaber_back_menu_btn" onClick={() => setActiveMobile(false)}><IoIosArrowUp /></button>
            <nav>

                <ul>
                    {links.map((el, id) => (
                        <NavLink onClick={() => setActiveMobile(false)} className="link" key={id} to={paths[id]}>{el}</NavLink>
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
                <button onClick={() => setmodalOAuth(true)} className='header_signin_btn buttons mobile'>
                    {language[langId].buttons.guest[0]}
                </button>
            </nav>

        </div>
    )
}
