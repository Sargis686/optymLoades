import React, { useState, setState, useEffect } from 'react';
import './style.css'
function RegistrationForm() {


    //http://10.20.8.158:5002/swagger-ui.html

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        alert(firstName, lastName, email, password, confirmPassword);
        console.log(firstName, lastName, email, password, confirmPassword);

        // alert("http://10.20.8.158:5002/api/v2/accounts/register");
        let datas = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        // "http://10.20.8.158:5002/api/v2/accounts/register"
    }


    useEffect(() => {

       

        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
        // };

        fetch('http://10.20.8.158:5002/api/v2/accounts/register', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ datas2: 'datas'})

        })
            .then(response => response.json())
            .then(json => console.log(json))
    }, [])


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    // let datas={

    // }


    return (
        <div className="form">
                            <h3>Registration</h3>

            <div className="form-body">
                <div className="username">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="LastName" />
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
                </div>
            </div>
            <div className="footer">
                <button onClick={() => handleSubmit()} type="submit" className="btn">Register</button>
            </div>
        </div>

    )
}

export default RegistrationForm