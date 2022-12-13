import './Registration.css';
import React from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export class Registration extends React.Component {
    render(): React.ReactNode {
        return (
          <div className='registration-form'>
            <div className="title">
                Registration
            </div>
            <form>
                <div className='form-group'>
                    <label htmlFor="username">Name:</label>
                    <Input type="text" name="username" id="username" 
                        chosenClass="outline"></Input>
                    <div className="validation-message"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <Input type="email" name="email" id="email" 
                        chosenClass="outline"></Input>
                    <div className="validation-message"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <Input type="password" name="password" id="password" 
                        chosenClass="outline"></Input>
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
}