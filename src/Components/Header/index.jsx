import { Link } from "react-router-dom";
import logo from "../../Assets/Icons/logo.svg";
import "./header.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const API_PATH =
    "https://api.openweathermap.org/data/2.5/weather?unites=metric&q=tashkent&appid=895284fb2d2c50a520ea537456963d9c";

  useEffect(() => {
    fetch(API_PATH)
      .then((res) => res.json())
      .then((data) => console.log(Math.round(data.main.temp) - 273))
      .catch((err) => console.error(err.message));
  }, []);

  // const [currency, setCurrency] = useState([]);
  // const API_URL =
  //   "http://api.exchangeratesapi.io/v1/latest?access_key=c46953a39648e87cac23a859c6b2a349";

  // useEffect(() => {
  //   fetch(
  //     API_URL
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setCurrency(data.rates))
  //     .catch((err) => console.log(err.message));
  // }, []);
  // console.log(currency);

  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(true);
  };

  const [language, setLanguage] = useState("Uz");

  const [isOpen, setIsOpen] = useState(false);
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__wrapper">
            <div className="site-header__start">
              <Link to="/">
                <img src={logo} alt="Qalampir.uz" width={160} height={38} />
              </Link>
            </div>

            <div className="site-header__end">
              <nav className={`site-header__nav ${isClick ? "d-none" : ""}`}>
                <p className="site-header__currency">Kurs UZS</p>
                <ul className="site-header__nav--list">
                  <li className="site-header__nav--item">
                    <p className="site-header__nav--currency">USD</p>
                    <p className="site-header__currency-value">
                      
                    </p>
                    <p className="site-header__currency-change">
                    
                    </p>
                  </li>
                  <li className="site-header__nav--item">
                    <p className="site-header__nav--currency">EUR</p>
                    <p className="site-header__currency-value">
                     
                    </p>
                    <p className="site-header__currency-change">-46.17</p>
                  </li>
                  <li className="site-header__nav--item">
                    <p className="site-header__nav--currency">RUB</p>
                    <p className="site-header__currency-value">146.46</p>
                    <p className="site-header__currency-change">-1.35</p>
                  </li>
                </ul>
              </nav>
              <div className="site-header__instruments">
                <div className={`site-header__instruments-search'`}>
                  <button
                    className="site-header__instruments-search--btn"
                    type="button"
                    onClick={handleClick}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_27)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.5937 14.5H14.8037L14.5237 14.23C15.7237 12.83 16.3437 10.92 16.0037 8.89002C15.5337 6.11002 13.2137 3.89002 10.4137 3.55002C6.18364 3.03002 2.62364 6.59002 3.14364 10.82C3.48364 13.62 5.70364 15.94 8.48364 16.41C10.5137 16.75 12.4237 16.13 13.8237 14.93L14.0937 15.21V16L18.3437 20.25C18.7537 20.66 19.4237 20.66 19.8337 20.25C20.2437 19.84 20.2437 19.17 19.8337 18.76L15.5937 14.5ZM9.59364 14.5C7.10364 14.5 5.09364 12.49 5.09364 10C5.09364 7.51002 7.10364 5.50002 9.59364 5.50002C12.0837 5.50002 14.0937 7.51002 14.0937 10C14.0937 12.49 12.0837 14.5 9.59364 14.5Z"
                          fill="#969696"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_27">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.09375 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div
                    className={`site-header__search-wrapper  ${
                      isClick ? "d-inline-block" : ""
                    }`}
                  >
                    <div className="site-header__search-input show">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_27)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.5937 14.5H14.8037L14.5237 14.23C15.7237 12.83 16.3437 10.92 16.0037 8.89002C15.5337 6.11002 13.2137 3.89002 10.4137 3.55002C6.18364 3.03002 2.62364 6.59002 3.14364 10.82C3.48364 13.62 5.70364 15.94 8.48364 16.41C10.5137 16.75 12.4237 16.13 13.8237 14.93L14.0937 15.21V16L18.3437 20.25C18.7537 20.66 19.4237 20.66 19.8337 20.25C20.2437 19.84 20.2437 19.17 19.8337 18.76L15.5937 14.5ZM9.59364 14.5C7.10364 14.5 5.09364 12.49 5.09364 10C5.09364 7.51002 7.10364 5.50002 9.59364 5.50002C12.0837 5.50002 14.0937 7.51002 14.0937 10C14.0937 12.49 12.0837 14.5 9.59364 14.5Z"
                            fill="#969696"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_27">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0.09375 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <form method="GET">
                        <input
                          className="site-header__input"
                          type="text"
                          placeholder="Qidiruv"
                          name="search"
                        />
                      </form>
                      <button
                        className="site-header__close"
                        type="button"
                        onClick={() => setIsClick(false)}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.99996 1.6665C5.39163 1.6665 1.66663 5.3915 1.66663 9.99984C1.66663 14.6082 5.39163 18.3332 9.99996 18.3332C14.6083 18.3332 18.3333 14.6082 18.3333 9.99984C18.3333 5.3915 14.6083 1.6665 9.99996 1.6665ZM13.5833 13.5831C13.2583 13.9081 12.7333 13.9081 12.4083 13.5831L9.99996 11.1748L7.59163 13.5831C7.26663 13.9081 6.74163 13.9081 6.41663 13.5831C6.09163 13.2581 6.09163 12.7331 6.41663 12.4081L8.82496 9.9998L6.41663 7.59147C6.09163 7.26647 6.09163 6.74147 6.41663 6.41647C6.74163 6.09147 7.26663 6.09147 7.59163 6.41647L9.99996 8.8248L12.4083 6.41647C12.7333 6.09147 13.2583 6.09147 13.5833 6.41647C13.9083 6.74147 13.9083 7.26647 13.5833 7.59147L11.175 9.9998L13.5833 12.4081C13.9 12.7248 13.9 13.2581 13.5833 13.5831Z"
                            fill="#E8E8E8"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="site-header__instruments-dark">
                  <form>
                    <input
                      className="site-header__input-dark"
                      type="checkbox"
                      id="darkmode-toggle"
                    />
                    <label
                      className="site-header__label-dark"
                      htmlFor="darkmode-toggle"
                    >
                      <svg
                        className="sun"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.9306 2.44525L2.72941 2.24406C2.52822 2.04286 2.20322 2.04802 2.00719 2.24406L2.00203 2.24921C1.80084 2.4504 1.80084 2.7754 2.00203 2.97144L2.20322 3.17263C2.40441 3.37382 2.72425 3.37382 2.92544 3.17263L2.9306 3.16747C3.13179 2.97144 3.13179 2.64128 2.9306 2.44525ZM1.36234 5.7262H0.836154C0.552424 5.7262 0.325439 5.95318 0.325439 6.23691V6.24207C0.325439 6.5258 0.552424 6.75279 0.836154 6.75279H1.35719C1.64607 6.75794 1.87306 6.53096 1.87306 6.24723V6.24207C1.87306 5.95318 1.64607 5.7262 1.36234 5.7262ZM6.0052 0.593262H6.00004C5.71115 0.593262 5.48417 0.820246 5.48417 1.10398V1.59921C5.48417 1.88294 5.71115 2.10993 5.99488 2.10993H6.00004C6.28893 2.11509 6.51592 1.8881 6.51592 1.60437V1.10398C6.51592 0.820246 6.28893 0.593262 6.0052 0.593262ZM9.99806 2.24921C9.79687 2.04802 9.47187 2.04802 9.27068 2.24406L9.06949 2.44525C8.8683 2.64644 8.8683 2.97144 9.06949 3.16747L9.07465 3.17263C9.27584 3.37382 9.60084 3.37382 9.79687 3.17263L9.99806 2.97144C10.1992 2.77025 10.1992 2.4504 9.99806 2.24921ZM9.06433 10.0389L9.26552 10.2401C9.46671 10.4413 9.79171 10.4413 9.9929 10.2401C10.1941 10.0389 10.1941 9.7139 9.9929 9.51271L9.79171 9.31152C9.59052 9.11032 9.26552 9.11548 9.06949 9.31152C8.86314 9.51787 8.86314 9.83771 9.06433 10.0389ZM10.127 6.23691V6.24207C10.127 6.5258 10.354 6.75279 10.6377 6.75279H11.1588C11.4425 6.75279 11.6695 6.5258 11.6695 6.24207V6.23691C11.6695 5.95318 11.4425 5.7262 11.1588 5.7262H10.6377C10.354 5.7262 10.127 5.95318 10.127 6.23691ZM6.00004 3.14683C4.2925 3.14683 2.9048 4.53453 2.9048 6.24207C2.9048 7.94961 4.2925 9.33731 6.00004 9.33731C7.70758 9.33731 9.09528 7.94961 9.09528 6.24207C9.09528 4.53453 7.70758 3.14683 6.00004 3.14683ZM5.99488 11.8909H6.00004C6.28377 11.8909 6.51076 11.6639 6.51076 11.3802V10.8849C6.51076 10.6012 6.28377 10.3742 6.00004 10.3742H5.99488C5.71115 10.3742 5.48417 10.6012 5.48417 10.8849V11.3802C5.48417 11.6639 5.71115 11.8909 5.99488 11.8909ZM2.00203 10.2349C2.20322 10.4361 2.52822 10.4361 2.72941 10.2349L2.9306 10.0337C3.13179 9.83255 3.12663 9.50755 2.9306 9.31152L2.92544 9.30636C2.72425 9.10517 2.39925 9.10517 2.19806 9.30636L1.99687 9.50755C1.80084 9.7139 1.80084 10.0337 2.00203 10.2349Z"
                        ></path>
                      </svg>

                      <svg
                        className="moon"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5625 8.41921C10.0772 8.61424 9.54718 8.72157 8.99211 8.72157C6.66496 8.72157 4.77843 6.83504 4.77843 4.50789C4.77843 3.95282 4.88576 3.42281 5.08079 2.9375C3.53141 3.56015 2.4375 5.07674 2.4375 6.84882C2.4375 9.17597 4.32403 11.0625 6.65118 11.0625C8.42326 11.0625 9.93985 9.96859 10.5625 8.41921Z"
                          stroke="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </label>
                  </form>
                </div>
                <div className="instruments-item">
                  <div
                    className={`site-header__dropdown ${isOpen ? "show" : ""}`}
                  >
                    <button
                      className="site-header__dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded={isOpen ? "true" : "false"}
                      onClick={toggleDropdown}
                    >
                      {language}
                      <span>
                        <svg
                          className={`${isOpen ? "show" : ""}`}
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.73125 4.64625L5.79125 6.58625L3.85125 4.64625C3.65625 4.45125 3.34125 4.45125 3.14625 4.64625C2.95125 4.84125 2.95125 5.15625 3.14625 5.35125L5.44125 7.64625C5.63625 7.84125 5.95125 7.84125 6.14625 7.64625L8.44125 5.35125C8.63625 5.15625 8.63625 4.84125 8.44125 4.64625C8.24625 4.45625 7.92625 4.45125 7.73125 4.64625Z"
                            fill="#969696"
                          ></path>
                        </svg>
                      </span>
                    </button>
                    <ul
                      className={`site-header__dropdown-menu ${
                        isOpen ? "show" : ""
                      }`}
                    >
                      <li>
                        <Link
                          className="site-header__dropdown-item"
                          to="/home/uz"
                          onClick={() => handleLanguageChange("Uz")}
                        >
                          Uz
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="site-header__dropdown-item"
                          to="/home/en"
                          onClick={() => handleLanguageChange("En")}
                        >
                          En
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="site-header__dropdown-item"
                          to="/home/ru"
                          onClick={() => handleLanguageChange("Ru")}
                        >
                          Ru
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
