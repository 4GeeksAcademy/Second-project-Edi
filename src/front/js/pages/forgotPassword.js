import React, { useState } from "react";
import TextDivider from "../component/textdivider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../utils/init-firebase-";

const ForgotPassword = () =>{
    const [email,setEmail] = useState("")

    const resetPasswordEmail = (email) =>{
        return sendPasswordResetEmail(auth,email, {url: "https://redesigned-palm-tree-66j994vvjv9hrxxw-3000.app.github.dev/login"})
    }

    return(
        <div className="forgotPassword container-fluid">
            <div className="row justify-content-center align-items-center mt-5">
                <div className="col-md-4">
                    <h1 className="my-5 text-center">Forgot Password</h1>
                    <div className="card-body border d-flex flex-column my-3 p-5">
                        <label id="forgotPassword" htmlFor="forgot-password" >Email Address</label> 
                        <input placeholder="Email" 
                               type="text"
                               className="border col-md-12 my-3 bg-light px-3 rounded" 
                               value={email} 
                               onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <button className="btn btn-warning"
                                onClick={resetPasswordEmail(email)}
                        >Submit</button>
                        <TextDivider/>
                        <div className="text-center">
                            <a href="/login" className=" btn bg-light col-md-2">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword