import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login with:', phoneNumber, password);
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleCustomerService = () => {
    console.log('Contact customer service');
  };

  return (
    <div className="login__container">
      <div className="navbar main">
        <div className="navbar-fixed">
          <div className="navbar__content">
            <div className="navbar__content-left" onClick={() => navigate(-1)}>
              <svg className="svg-icon">
                <use xlinkHref="#icon-arrow-left" />
              </svg>
            </div>
            <div className="navbar__content-center">
              <div className="headLogo" style={{ backgroundImage: 'url(/whitehjj.png)' }}></div>
              <div className="navbar__content-title"></div>
            </div>
            <div className="navbar__content-right">
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="login__container-heading">
        <h1 className="login__container-heading__title">Log in</h1>
        <div className="login__container-heading__subTitle">
          <div>Please log in with your phone number or email</div>
          <div>If you forget your password, please contact customer service</div>
        </div>
      </div>

      <div className="login_container-tab">
        <div className="tab active">
          <svg className="svg-icon icon-phone">
            <use xlinkHref="#icon-phone"></use>
          </svg>
          <div>Log in with phone</div>
        </div>
      </div>

      <div className="login__container-form">
        <div className="tab-content activecontent">
          <div className="signIn__container">
            <div className="phoneInput__container">
              <div className="phoneInput__container-label">
                <svg className="svg-icon icon-phone">
                  <use xlinkHref="#icon-phone"></use>
                </svg>
                <span>Phone number</span>
              </div>
              <div className="phoneInput__container-input">
                <div className="dropdown">
                  <div className="dropdown__value">
                    <span>+91</span>
                    <i className="van-badge__wrapper">
                      <svg className="svg-icon">
                        <use xlinkHref="#icon-arrow-down" />
                      </svg>
                    </i>
                  </div>
                </div>
                <input
                  id="phone_number_inp"
                  type="text"
                  name="userNumber"
                  placeholder="Please enter the phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="passwordInput__container">
              <div className="passwordInput__container-label">
                <svg className="svg-icon icon-editPswIcon passwordInput__container-label__icon">
                  <use xlinkHref="#icon-editPswIcon"></use>
                </svg>
                <span>Password</span>
              </div>
              <div className="passwordInput__container-input">
                <input
                  id="password_inp"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  maxLength={32}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  id="password_eye_btn"
                  src="/assets/png/eyeInvisible-821d9d16.png"
                  className="eye"
                  onClick={() => setShowPassword(!showPassword)}
                  alt="Toggle password visibility"
                />
              </div>
            </div>

            <div>
              <div
                role="checkbox"
                className={`van-checkbox ${rememberPassword ? 'van-checkbox--checked' : ''}`}
                tabIndex={0}
                aria-checked={rememberPassword}
                onClick={() => setRememberPassword(!rememberPassword)}
              >
                <div className={`van-checkbox__icon van-checkbox__icon--round ${rememberPassword ? 'van-checkbox__icon--checked' : ''}`}>
                  <i className="van-badge__wrapper van-icon van-icon-success"></i>
                </div>
                <span className="van-checkbox__label">Remember password</span>
              </div>
            </div>

            <div className="signIn__container-button">
              <button id="login_button" className="active" onClick={handleLogin}>
                Log in
              </button>
              <button className="register" onClick={handleRegister}>
                Register
              </button>
            </div>

            <div className="signIn_footer">
              <div className="forgetcon" onClick={handleForgotPassword}>
                <svg className="svg-icon icon-clock_b forgetbg">
                  <use xlinkHref="#icon-clock_b"></use>
                </svg>
                <div className="font24">Forgot password</div>
              </div>
              <div className="customcon" onClick={handleCustomerService}>
                <svg className="svg-icon icon-customer_b forgetbg">
                  <use xlinkHref="#icon-customer_b"></use>
                </svg>
                <div className="font24">Customer Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="customer" id="customerId" onClick={handleCustomerService}>
        <img src="/assets/png/icon_sevice-8a1f5628.png" alt="Customer Service" />
      </div>
    </div>
  );
};

export default Login;
