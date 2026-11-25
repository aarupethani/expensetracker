import { useNavigate } from 'react-router-dom'
import '../style/LoginPage.css'
import { useState } from 'react';
import { FaWallet } from 'react-icons/fa6';
import logo from "../assets/img.jpeg"


function LoginPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "name is required";
        if (!formData.email.trim()) {
            newErrors.email = "email is required";
        }
        if (!formData.password) {
            newErrors.password = "password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "password must be at least 6 characters";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        localStorage.setItem("user", JSON.stringify(formData));
        navigate("/");
    };
    return (
        <div className="login-page">
            {/*left section*/}
            <div className="login-left">
                <img src={logo} alt="logo" />
                <h1>
                    personal expense tracker
                </h1>
                <p>track,manage & control your daily expenses easily</p>
            </div>

            {/*right section*/}

            <div className="login-right">
                <div className="login-card">
                    <div className="header-row">
                        <FaWallet className="login-icon" />
                        <h3 className="app-title">welcome Back</h3>
                    </div>

                    <h2 className="login-title">login now</h2>

                    <form onSubmit={handleSubmit} noValidate>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="validation">{errors.name}</p>}

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="validation">{errors.email}</p>}

                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="validation">{errors.password}</p>}

                        <button type="submit" className="signin-btn">
                            SIGN IN
                        </button>


                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginPage
