import { IoIosArrowRoundBack } from "react-icons/io";
import notFound from "../../Assets/Images/404.jpg";
import "./notfound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <div className="container">
          <div className="not-found__wrapper">
            <img src={notFound} alt="Not Found" />
            <h1 className="not-found__title">
              Kechirasiz...Ushbu sahifa topilmadi
            </h1>
            <p className="not-found__text">
              Bizni his qilishingiz uchun o'rnimizda bo'lishingiz kerak
            </p>
            <Link className="not-found__btn" to='/home'>
              <IoIosArrowRoundBack />
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
