import React from "react";
import './sign-in.style.scss';
import FormInput from "../../components/form-input/form-input.component";
import Button from "../custom-button/custom-button.component";
import {auth,SignInWithGoogle} from "../../firebase/firebase.utils";
class SignIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
                email: '',
                password: ''
            }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: "",password: ""});
        }
        catch(error)
        {
            alert('wrong email or password');
            //console.error(error);
        }
        
    };

    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState({[name]: value});
    }


    render()
    {
        return( 
        
            <div className="sign-in">
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput handleChange={this.handleChange} name="email" type="email" label="Email" value={this.state.email} required/>
                        <FormInput handleChange={this.handleChange} name="password" type="password" label="Password" value={this.state.password} required/>
                        <div className="buttons">
                        <Button type="submit" >Sign In</Button>
                        <Button type="button" onClick={SignInWithGoogle} isGoogleSignIn >Sign In with Google</Button>
                        </div>
                    </form>
            </div>
            )
        
    }
}

export default SignIn;