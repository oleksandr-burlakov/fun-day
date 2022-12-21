import './Registration.css';
import React, { useState } from 'react';
import { useAuthentication } from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

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
                <TextField
                    name="firstName"
                    label="First name:"
                    id="firstName" 
                    variant="standard"
                    onChange={handleInputChange}
                    value={registrationData.firstName}
                    />
                <div className="validation-message"></div>
            </div>
            <div className='form-group'>
                <TextField 
                    type="text" 
                    name="lastName" 
                    id="lastName"
                    label="Last name:" 
                    variant='standard'
                    onChange={handleInputChange}
                    value={registrationData.lastName}
                    />
                <div className="validation-message"></div>
            </div>
            <div className="form-group">
                <TextField 
                    label="Email:"
                    type="email" 
                    name="email" 
                    id="email"  
                    variant='standard'
                    onChange={handleInputChange}
                    value={registrationData.email}
                    />
                <div className="validation-message"></div>
            </div>
            <div className="form-group">
                <TextField 
                    type="password" 
                    name="password" 
                    id="password" 
                    variant="standard"
                    label="Password:"
                    onChange={handleInputChange}
                    value={registrationData.password}
                    />
                <div className="validation-message"></div>
            </div>
            <div className='buttons'>
                <Button variant='contained' type='submit'>
                    Sign up
                </Button>
            </div>
        </form>
        </div>  
    );

}