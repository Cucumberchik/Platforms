
import { handleLanguage } from '../../hooks/hooks';
import logo from "../../assets/Company_Logo.svg"
import translatorLogo from "../../assets/translatorLogo.svg"
import line from "../../assets/LinsMenu.svg"
import { language } from '../../language/language';
import { NavLink, useNavigate, } from 'react-router-dom';
import { useState } from 'react';
import HeaderWrapper from './HeaderWrapper';

export default function Header() {
    const [activLang, setActiveLang] = useState(false)
    const [activMobile, setActiveMobile] = useState(false)


    let navigate = useNavigate()
    const reLangKg = () => {

        localStorage.setItem("langUser", "kg")
        window.location.reload();
    }
    const reLangRu = () => {

        localStorage.setItem("langUser", "ru")
        window.location.reload();
    }

    const langId = handleLanguage()

    const links = language[langId].navbar.headerNav //Слова с переводом
    const paths = ["/curses", "school", "/club", "/trips", "/shop"]


    const screenWidth = window.innerWidth;




    console.log(screenWidth);
    return (
        <div className='header'>
            <header className="header_content">
                <nav>
                    <div onClick={() => navigate('/')} className="header_logo">
                        <img src={logo} alt="company_logo" />
                        <div className="header_logo_title">
                            <h4>{language[langId].navbar.headerTitle}</h4>
                        </div>
                    </div>
                    <div className="header_links">
                        {links.map((el, id) => (
                            <NavLink className="link" key={id} to={paths[id]}>{el}</NavLink>
                        ))}
                    </div>
                    <div className="header_translator">
                        <div style={{
                            overflow: !activLang && "hidden",
                            width: activLang ? "100%" : "0%"
                        }} className="header_translator_btn">
                            <button onClick={reLangRu}>Русский</button>
                            <button onClick={reLangKg}>Кыргызский</button>
                        </div>
                        <img onClick={() => setActiveLang(!activLang)} src={translatorLogo} alt="translator_logo" />
                    </div>
                    <button className='header_signin_btn'>
                        {language[langId].buttons.guest}
                    </button>
                    {screenWidth <= 375 && <div onClick={() => setActiveMobile(true)} className="lineMenuMobile">
                        <img src={line} alt="" />
                    </div>}
                </nav>
                {screenWidth <= 375 && <HeaderWrapper reLangRu={reLangRu} reLangKg={reLangKg} links={links} paths={paths} activMobile={activMobile} setActiveMobile={setActiveMobile} />}
            </header>
        </div>
    )
}
