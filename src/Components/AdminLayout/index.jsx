import PropTypes from "prop-types";
import admin from "../../Assets/Icons/user.svg";
import "./admin-layout.scss";
import { LuUsers } from "react-icons/lu";
import { AiOutlineDashboard } from "react-icons/ai";
import { PiUploadSimpleBold } from "react-icons/pi";
import { SiGooglemessages } from "react-icons/si";
import { RiAdvertisementLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="admin-layout">
        <div className="admin-layout__left">
          <div className="admin-layout__admin--information d-flex align-items-center">
            <img
              className="admin-layout__admin--image"
              src={admin}
              alt="Admin user"
              width="58"
              height="58"
            />
            <div className="admin-layout__admin--info">
              <h5 className="m-0">Username</h5>
              <p className="my-0 text-secondary">admin@mail.ru</p>
            </div>
          </div>
          <div className="admin-layout__admin-menus">
            <ul className="admin-layout__admin-menus--list">
              <li className="admin-layout__admin-menus--item d-flex align-items-center">
                <LuUsers />

                <Link to="#l" className="admin-layout__admin-menus--name">
                  Users
                </Link>
              </li>
              <li className="admin-layout__admin-menus--item d-flex align-items-center">
                <PiUploadSimpleBold />

                <Link to="#l" className="admin-layout__admin-menus--name">
                  Uploads
                </Link>
              </li>
              <li className="admin-layout__admin-menus--item d-flex align-items-center">
                <SiGooglemessages />

                <Link to="#l" className="admin-layout__admin-menus--name">
                  Messages
                </Link>
              </li>
              <li className="admin-layout__admin-menus--item d-flex align-items-center">
                <RiAdvertisementLine />

                <Link to="#l" className="admin-layout__admin-menus--name">
                  Advertisements
                </Link>
              </li>
              <li className="admin-layout__admin-menus--item d-flex align-items-center">
                <AiOutlineDashboard />

                <Link to="#l" className="admin-layout__admin-menus--name">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="admin-layout__right">{children}</div>
      </div>
    </>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.object,
};

export default AdminLayout;
