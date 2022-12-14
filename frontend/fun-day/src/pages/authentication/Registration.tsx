import './Registration.css';
import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { useAuthentication } from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

export const Registration = () => {
    
    const [registrationData, setRegistrationData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const { registerUser } = useAuthentication();
    const navigate = useNavigate();

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setRegistrationData({
            ...registrationData,
            [event.target.name]: event.target.value
        });
    }

    const isModelValid = (): boolean => {
        return registrationData.email !== '' && 
            registrationData.firstName !== '' && 
            registrationData.lastName !== '' &&
            registrationData.password !== '' ? 
            true : 
            false;
    };

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isModelValid()) {
            return;
        }

        await registerUser(registrationData);
        return navigate("/login");
    };

    return (
        <div className='registration-form'>
        <div className="title">
            Registration
        </div>
        <form onSubmit={handleRegister}>
            <div className='form-group'>
                <label htmlFor="first-name">First name:</label>
                <input type="text" 
                    name="firstName" 
                    id="firstName" 
                    className="outline"
                    onChange={handleInputChange}
                    value={registrationData.firstName}
                    />
                <div className="validation-message"></div>
            </div>
            <div className='form-group'>
                <label htmlFor="last-name">Last name:</label>
                <input type="text" name="lastName" id="lastName" 
                    className="outline"
                    onChange={handleInputChange}
                    value={registrationData.lastName}
                    />
                <div className="validation-message"></div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" 
                    className="outline"
                    onChange={handleInputChange}
                    value={registrationData.email}
                    />
                <div className="validation-message"></div>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" 
                    className="outline"
                    onChange={handleInputChange}
                    value={registrationData.password}
                    />
                <div className="validation-message"></div>
            </div>
            <div className='buttons'>
                <Button text='Sign up' 
                    chosenClass='default'/>
            </div>
        </form>
        </div>  
    );

}