import { Formik } from "formik";
import { connect } from "react-redux";
import { signIn } from "../../Redux/Action/loginAction";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <Formik
                initialValues={{ username: "", email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  props.signIn(values, navigate);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <input
                      className="form-control mb-3"
                      type="text"
                      name="username"
                      onChange={handleChange}
                      placeholder="Your username"
                      value={values.username}
                      autoComplete="current-username"
                    />
                    <input
                      className="form-control mb-3"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your email"
                      value={values.email}
                      autoComplete="current-email"
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                      className="form-control mb-3"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your password"
                      value={values.password}
                      autoComplete="current-password"
                    />
                    {errors.password && touched.password && errors.password}
                    <button
                      className="btn btn-primary w-100"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Sign In
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  signIn: PropTypes.func,
  loader: PropTypes.bool,
};

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    loader: state.login.loader,
  };
};

export default connect(mapStateToProps, { signIn })(Login);
