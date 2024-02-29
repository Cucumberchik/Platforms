import { FaArrowLeft } from "react-icons/fa6";
import logo from "../assets/Company_Logo.svg"
import { language } from "../language/language";
import { handleLanguage } from "../hooks/hooks";
import { useState } from "react";
export const ModalOAuth = ({ setmodalOAuth }) => {
  const [userType, setUserType] = useState(false)
  let btnId = userType ? 1 : 0
  let resId = userType ? 2 : 0
  let navId = userType ? 3 : 1

  // console.log(language[handleLanguage()].buttons.guest[0]);
  return (
    <div className="modal_window">
      <div className="modal_window_content OAuth">
        <div className="modal_window_btn_back_AOuth">
          <button onClick={() => setmodalOAuth(false)}><FaArrowLeft /></button>
        </div>
        <div className="modal_window_active OAuth">
          <img src={logo} alt="Company_Logo" />
          <h1>{language[handleLanguage()].OAuth[resId]}</h1>
          <input type="text" placeholder="E-mail" />
          {!userType && <input type="text" placeholder="Пароль" />}
          <button className="modal_btn OAuth1 buttons">{language[handleLanguage()].buttons.guest[btnId]}</button>
          <button onClick={() => setUserType(!userType)} className="modal_btn OAuth2">{language[handleLanguage()].OAuth[navId]}</button>
        </div>
      </div>
    </div>
  )
}
