import React, { useState,useContext } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import { Context} from "../store/appContext";
import Swal from 'sweetalert2';
import profile from "../../img/profile.png";
import google from "../../img/google.png";
import TextDivider from "../component/textdivider";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../../utils/init-firebase-";


const Login = () =>{
    const [loginEmail,setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const navigate = useNavigate()
    const image = profile
    const [showLogin, setShowLogin] = useState(true);
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const [password, setPassword] = useState("")
    const [location,setLocation] = useState("")
    

    const handleLoginClick = () => {
        setLoginEmail('');
        setLoginPassword('');
        setShowLogin(true);
    };

    const handleCreateClick = () => {
        setName('');
        setSurname('');
        setLocation('');
        setEmail('');
        setPassword('');
        setShowLogin(false);
    };

    const handleEmailBlur = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmail)) {
            Swal.fire({
                icon: 'error',
                title: 'oppss...',
                text: 'Please, insert a valid E-mail'            
            });
          }
        };


        const create_user = () =>{
            if(email === '') {
                alert(' Email is empty!')
            } else if(password === ''){
                alert('Password is empty!')
            } else if ( name === " "){
                alert("Name is empty")
            } else if ( surname === " "){
                alert("Surname is empty")
            }else if ( location === " "){
                alert("Location is empty")
            } else {
                fetch(process.env.BACKEND_URL + 'api/create-user', { 
                method: "POST", 
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name,password,surname,email: email.toLowerCase(),location,image}) 
            })
            .then((res) => res.json())
            .then((result) => {  
                console.log(result);
            })
            .catch((err) => {
            console.log(err);
            })
            }
        }
    
    const registerOnFirebase = async () => {
            try {
              await createUserWithEmailAndPassword(auth, email, password);
            } catch (error) {
              console.error("Error al registrar el usuario en Firebase:", error);
            }
          };
    
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
            return signInWithPopup(auth, googleProvider);
    };
        
    const user_login = () =>{
	    if(loginEmail ==='') {
			alert(' Email is Empty!')
		} else if(loginPassword === ''){
			alert('Password is empty!')
		} else {
			fetch( process.env.BACKEND_URL + `api/login`, { 
			method: "POST",
			headers: { 
				"Content-Type": "application/json",
			},
			body: JSON.stringify({loginEmail: loginEmail.toLowerCase(),loginPassword }) 
		})
		.then((res) => res.json())
		.then((result) => {
            if(result.msg){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: result.msg,
                });
            }else{
                Swal.fire({
                    icon: 'success',
                    text: result.loginOK,
                });
                localStorage.setItem('token', result.token)
                localStorage.setItem('userId', result.user_id);
                localStorage.setItem('username', result.username);
                localStorage.setItem('gmail', result.email);

                navigate('/');
            }
            })
            .catch((err) => {
                console.log(err);
            });
        };
    }
    return(
            <div className="general-container">
                <div className="row border col-8" id="loginCard">
                    <div className={showLogin ? "col-md-4 p-0" : "col-md-4 p-0"}>
                        {showLogin ? (
                            <div className="half-content d-flex text-center  justify-content-center flex-column">
                                <h3>Welcome!</h3>
                                <p>Sing in to find your next toy</p>
                            </div>
                        ) : (
                            <div className="half-content d-flex text-center  justify-content-center flex-column">
                                <h1>2nd Life</h1>
                                <p>Trade, Share, Renew <br/> Your Unwanted Treasures Find New Adventures Here</p>                                
                            </div>
                        )}
                    </div>
                <div className={showLogin ? "col-md-8" : "col-md-8 order-md-1"}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="row g-0 d-flex justify-content-center align-items-center mt-4">
                            {showLogin ? (
                                <>
                                <div class="col-md-12 d-flex justify-content-center align-items-center flex-column" id="login">
                                <h3 className="mb-5">Ecommerce App</h3>
                                <div className="input-board">
                                    <i class="fa-solid fa-user me-3"></i>
                                    <input
                                        type="text" 
                                        id="email" 
                                        className="p-3 col-10 login-input" 
                                        placeholder="Email" 
                                        value={loginEmail}
                                        onChange={(e)=>{setLoginEmail(e.target.value)}}
                                        name="email"
                                        /><br/><br/>
                                </div>
                                <div className="input-board mt-3">
                                    <i class="fa-solid fa-key me-3"></i>
                                    <input
                                        type="password" 
                                        id="password" 
                                        className="p-3 col-10 login-input"  
                                        placeholder="Password" 
                                        onChange={(e)=>{setLoginPassword(e.target.value)}}
                                        value={loginPassword}
                                        name="password"
                                        /><br/><br/>
                                </div>
                                <button type="submit" 
                                        className="btn btn-warning mt-4"
                                        onClick={user_login} 
                               >Login</button>
                               <TextDivider/>

                               < a href="#" className="btn bg-light mt-3" onClick={()=>{
                                signInWithGoogle()
                                .then(res=>{
                                    console.log(res);
                                })
                               }}> 
                               <img src={google} style={{height:40, width:40}} alt="google-image"/>Log in with Google</a>

                                <div className="d-flex flex-row mt-3">
                                    <a href="/forgot-password" className="me-5 text-muted"><small>Forgot password?</small></a>
                                    <a onClick={()=>{
                                        handleCreateClick()
                                    }} id="createAcount" className="me-5 text-muted"><small>Create Account</small></a>
                                </div>
                                <br/>
                            </div>
                            </>
                                
                            ) : (
                                <>
                                <div class="row g-0 d-flex justify-content-center align-items-center">
                                    <div class="col-md-10 d-flex justify-content-center align-items-center flex-column ">
                                        <h1 className="mb-3">CREATE ACCOUNT</h1>
                                        <p className="text-center">Create an account to join our comunity and give second opportunities to your items</p>
                                        <div className="input-board mt-3">
                                            <i class="fa-solid fa-user me-3"></i>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                className="p-3 col-10 register-input"  
                                                placeholder="Name" 
                                                value={name}
                                                onChange={(e)=>{setName(e.target.value)}}
                                                name="name"
                                                /><br/><br/>
                                        </div>
                                        <div className="input-board  mt-3">
                                            <i class="fa-solid fa-user  me-3"></i>
                                            <input 
                                                type="text" 
                                                id="surname" 
                                                value={surname}
                                                className="p-3 col-10 register-input" 
                                                placeholder="Surname"
                                                onChange={(e)=>{setSurname(e.target.value)}}
                                                name="Surname"
                                           
                                                /><br/><br/>
                                        </div>
                                        <div className="input-board  mt-3">
                                        <i class="fa-solid fa-location-pin me-3"></i>
                                            <input 
                                                type="text" 
                                                id="location" 
                                                value={location}
                                                className="p-3 col-10 register-input" 
                                                placeholder="Location" 
                                                onChange={(e)=>{setLocation(e.target.value)}}
                                                name="Location"
                                           
                                                /><br/><br/>
                                        </div>
                                        <div className="input-board mt-3">
                                            <i class="fa-solid fa-at me-3"></i>
                                            <input 
                                                type="text" 
                                                id="email" 
                                                value={email}
                                                className="p-3 col-10 register-input"  
                                                placeholder="Email" 
                                                name="email"
                                                onChange={(e)=>{setEmail(e.target.value)}}
                                                onBlur={handleEmailBlur}
                                                /><br/><br/>
                                        </div>
                                        <div className="input-board mt-3">
                                            <i class="fa-solid fa-key me-3"></i>
                                            <input 
                                                type="password" 
                                                value={password}
                                                id="password" 
                                                className="p-3 col-10 register-input"  
                                                placeholder="Password" 
                                                onChange={(e)=>{setPassword(e.target.value)}}
                                                name="password"
                                                /><br/><br/>
                                        </div>
                                        <div id="btn-container-login" className=" col-md-12 d-flex flex-row mt-4  align-items-center justify-content-between ">
                                            <button 
                                                id="loginSubmit"
                                                type="submit" 
                                                className="btn btn-warning mb-3"
                                                onClick={()=>{
                                                    create_user()
                                                    registerOnFirebase()
                                                    handleLoginClick()
                                                }}
                                                >SUBMIT</button> 
                                            <i class="fa-solid fa-arrow-right" onClick={handleLoginClick}></i>
                                        </div>
                                    </div>
                                </div>     
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login