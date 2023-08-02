import Input from "../UI/Input/Input"
import Button from "../UI/Button/Button"
import {useState} from "react"
import { Link } from "react-router-dom";

//TODO: create better validation for users
//TODO: prepare data for sending to backend

/* 
Component for registration part
*/
export default function Register() {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [validation, setValidation] = useState(false)

    function handleFormSubmit(event) {
        event.preventDefault();
        if(registerPassword !== confirmPassword){
            setValidation(true)
        }
        else{
            console.log("You are register now")
        }
    }

    return (
        <div className="shadow-back">
            <div className="log-reg-container">
                <div className="log-return">
                    <Link
                    to="/"
                    >
                        <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="var(--gray-dark)" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="var(--gray-dark)" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </Link>
                </div>
                <div className="login-title">
                    <h1 className="title--m">Register</h1>
                </div>
                <form action="" method="" className="login-form" onSubmit={handleFormSubmit}>
                    <Input 
                    placeholder="Email"
                    name="email" 
                    type="email"
                    value={registerEmail} 
                    onChange={(event) => setRegisterEmail(event.target.value)}
                    required/>
                    <Input 
                    placeholder="Password" 
                    name="password" 
                    type="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    value={registerPassword} 
                    onChange={(event) => setRegisterPassword(event.target.value)}
                    required/>
                    <Input 
                    placeholder="Confirm password" 
                    name="confirm-password" 
                    type="password"
                    value={confirmPassword} 
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required/>
                    {validation && <p className="text--err">Passwords do not match</p>}
                    <Button 
                    type="submit"
                    className="btn--raised"
                    >
                    Register
                    </Button>
                </form>
                <div className="reg-redirection">
                    <p className="text--sm">Already have an account</p>
                    <Link
                    className="btn btn--redirect"
                    to="/login"
                    >
                    Log In
                    </Link>
                </div>
            </div>
        </div>
    )
}