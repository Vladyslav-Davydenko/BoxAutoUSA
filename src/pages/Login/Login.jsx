import Input from "../../components/UI/Input/Input.jsx"
import Button from "../../components/UI/Button/Button.jsx"
import {useState} from "react"
import { Link } from "react-router-dom";

//TODO: prepare data for sending to backend

/*
Component for Lofin page
*/
export default function Login() {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("loged in")
    }

    return(
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
                    <h1 className="title--m">Login</h1>
                </div>
                <form action="" method="" className="login-form" onSubmit={handleFormSubmit}>
                    <Input 
                    placeholder="Email"
                    name="email" 
                    type="email"
                    value={loginEmail} 
                    onChange={(event) => setLoginEmail(event.target.value)}
                    required/>
                    <Input 
                    placeholder="Password" 
                    name="password" 
                    type="password"
                    value={loginPassword} 
                    onChange={(event) => setLoginPassword(event.target.value)}
                    required/>
                    <Button 
                    type="submit"
                    className="btn--raised"
                    >
                    Log in
                    </Button>
                </form>
                <div className="reg-redirection">
                    <p className="text--sm">Do not have an account</p>
                    <Link
                    className="btn btn--redirect"
                    to="/register"
                    >
                    Create Account
                    </Link>
                </div>
            </div>
        </div>
    )
}