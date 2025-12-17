import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Login.css";

const CLOSE_EYE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAP1BMVEUAAADExMTExMTDw8PExMTFxcXFxcXExMS/v7/FxcXFxcXExMTExMTDw8PExMTFxcXFxcXExMTPz8+/v7/ExMTkagEbAAAAFHRSTlMAIO/ff29fvxDfMD/PoI+fr1AQMBwdwB4AAAFQSURBVDjL5ZJbkoQgDEXDI4iAqN3sf61DIEFHqmvmv/OhEE5ycwvgm0Il+z9uLQU/HJ0OrTvD4IqdoZdbdOHQh+sczphlSmKlvZu4uPZG2bkqfnDRzFlKL/FKuM9cig+/OoLCmcs8Au7ZqUDcG4IW00OGE2Fh040D/G1baeFO8mDo07gmpdUAa5djVGQPgej3OFtuwqZX7U3o1C0RmjevL+/rWLZqVzqnyV0bc70atgVJInPUaR/ip5TkATrmIBYBd3Gq6pGSVWpc18mPY9jYGKk0jgeP0nCjPxtDTgpnZXDkjGy0kgv3AK+4FG6opMmQXJVwob8wK0/jgCu8qWS+c/oU7hJumUqyrl2MOdDLzd85maVs/p6iQScOMnG1HcYXANlBwsriH9zWua2NZ4zmR8l+Jy6Ycotk/czJfQU8kqmRdgwwhU9y7X+F3yx8VfwAZv4b1F/KTEQAAAAASUVORK5CYII=";
const OPEN_EYE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAOVBMVEUAAADExMTFxcXExMTFxcXFxcXExMTExMTExMTFxcW/v7/ExMTExMTFxcXGxsa/v7/Pz8/FxcXExMSmSILoAAAAEnRSTlMA338gMF/vP7+fEHBPj28wEM9PEbqRAAABB0lEQVQ4y+1TR5IDIQwkCBjCJP3/scvaQj3Feqfsu/sCJXUrIcwXH8GHzbmt0T0r5ciCmNu/tCqsARte0uh8xAlUjCkUHrGtfxHu116LAYLtJjfz3I1xMtld7gelY4zATsyKcmjhjsWDWcHz4AUWBGVGdNRlu0p4bSn3g2S0Pby2h0IWkRDcK3OS66mJC3NWdxFbHBpCwKTq1nNjIgSiahokF+IoLBZNvT5vuafWvk8kXNEMjWYQMBi4k+bmnNraD68Wi4HHm4EPyfyEO3jbvBRDWBKVMQX7d33e371594/N8pR3lCNf4egk+QrnDv+0+1dEhJvRrt81mVtQq87V4M0Xn+AHBckSwmsdObYAAAAASUVORK5CYII=";

const Login: React.FC = () => {
    const navigate = useNavigate();

    const [showSplash, setShowSplash] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [dialCode, setDialCode] = useState("+91");

    useEffect(() => {
        const hasSeenSplash = sessionStorage.getItem("splash") === "true";
        if (!hasSeenSplash) {
            setShowSplash(true);
            const timer = setTimeout(() => {
                setShowSplash(false);
                sessionStorage.setItem("splash", "true");
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phoneNumber || !password) {
            alert("Please enter details");
            return;
        }

        setIsLoading(true);
        try {
            // Replace with your actual backend URL if different
            const { data } = await axios.post("/api/webapi/login", {
                dialCode,
                phoneNumber,
                pwd: password,
            });

            if (data.status === true) {
                document.cookie = `token=${data.token}; path=/;`;
                navigate("/home");
            } else {
                alert(data.message || "Login Failed");
            }
        } catch (err) {
            alert("Server Error");
        } finally {
            setIsLoading(false);
        }
    };

    if (showSplash) {
        return (
            <div className="splash_root">
                <div className="splash_screen">
                    <div className="main_box">
                        <img src="/assets/png/start-4688a3c2.png" className="splash_img" alt="Start" />
                        <h2 className="splash__text">Withdraw fast, safe and stable</h2>
                    </div>
                    <div className="logo_box">
                        <img src="/h5setting_202308141709544lm1.png" className="logo__image" alt="Logo" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="login__container">
            {isLoading && <div className="van-overlay">Loading...</div>}

            <div className="navbar main">
                <div className="navbar__content">
                    <div className="navbar__content-left" onClick={() => navigate(-1)}>
                        <i className="van-icon van-icon-arrow-left" />
                    </div>
                    <div className="navbar__content-center">
                        <div className="headLogo" style={{backgroundImage: 'url(/whitehjj.png)'}} />
                    </div>
                </div>
            </div>

            <div className="login__container-heading">
                <h1 className="login__container-heading__title">Log in</h1>
                <p className="login__container-heading__subTitle">
                    Please log in with your phone number or email
                </p>
            </div>

            <form onSubmit={handleLogin} className="login__container-form">
                <div className="phoneInput__container">
                    <label>Phone number</label>
                    <div className="phoneInput__container-input">
                        <div className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <span>{dialCode}</span>
                            <i className="van-icon van-icon-arrow-down" />
                            {isDropdownOpen && (
                                <div className="dropdown__list">
                                    <div onClick={() => {setDialCode("+91"); setIsDropdownOpen(false)}}>+91 India</div>
                                </div>
                            )}
                        </div>
                        <input
                            type="text"
                            placeholder="Please enter the phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>

                <div className="passwordInput__container">
                    <label>Password</label>
                    <div className="passwordInput__container-input">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img
                            src={showPassword ? OPEN_EYE : CLOSE_EYE}
                            className="eye"
                            onClick={() => setShowPassword(!showPassword)}
                            alt="toggle"
                        />
                    </div>
                </div>

                <div className="signIn__container-button">
                    <button type="submit" className="active">Log in</button>
                    <button type="button" className="register" onClick={() => navigate("/register")}>Register</button>
                </div>
            </form>

            <div className="customer">
                <img src="/assets/png/icon_sevice-8a1f5628.png" alt="Service" />
            </div>
        </div>
    );
};

export default Login;
