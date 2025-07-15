import React, { useState } from 'react';

const Validation = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        isChecked: false,
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        // Username Validation
        const { username, password, isChecked } = formData;
        const forbiddenUsernames = ['taimoor', 'ahmed', 'mustafa'];
        const hasSpecialChar = /[^A-Za-z0-9]/.test(username);
        const hasSpace = /\s/.test(username);
        const isNumeric = /^\d+$/.test(username);

        if (!username) {
            errors.username = 'Username is required';
        } else if (isNumeric) {
            errors.username = 'Username cannot be a number only';
        } else if (!hasSpecialChar) {
            errors.username = 'Username must include at least one special character';
        } else if (hasSpace) {
            errors.username = 'Username cannot contain spaces';
        } else if (username.length < 8 || username.length > 20) {
            errors.username = 'Username must be between 8 and 20 characters';
        } else if (forbiddenUsernames.includes(username.toLowerCase())) {
            errors.username = 'This username is not allowed';
        }

        // Password Validation
        const hasNumber = /\d/.test(password);
        const hasCapital = /[A-Z]/.test(password);
        const hasSpecialPasswordChar = /[^A-Za-z0-9]/.test(password);

        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        } else if (!hasNumber) {
            errors.password = 'Password must include at least one number';
        } else if (!hasCapital) {
            errors.password = 'Password must include at least one capital letter';
        } else if (!hasSpecialPasswordChar) {
            errors.password = 'Password must include at least one special character';
        }

        if (!isChecked) {
            errors.isChecked = 'You must accept the privacy policy';
        }

        return errors;
    };


    const inputValueHandler = (event) => {
        const { name, type, value, checked } = event.target;
        console.log(event.target);
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const FormHandler = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert('Form submitted successfully!');
        }
    };

    return (
        <form onSubmit={FormHandler} style={{ color: 'white', background: '#111', padding: '20px' }}>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={inputValueHandler}
                    name="username"
                    style={{ border: errors.username ? '1px solid red' : '1px solid #ccc' }}
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={inputValueHandler}
                    name="password"
                    style={{ border: errors.password ? '1px solid red' : '1px solid #ccc' }}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <div>
                <input
                    type="checkbox"
                    checked={formData.isChecked}
                    onChange={inputValueHandler}
                    name="isChecked"
                />
                <label style={{ marginLeft: '8px' }}>Accept Privacy Policy</label>
                {errors.isChecked && <p style={{ color: 'red' }}>{errors.isChecked}</p>}
            </div>

            <button type="submit" style={{ marginTop: '10px' }}>Login</button>
        </form>
    );
};

export default Validation;
