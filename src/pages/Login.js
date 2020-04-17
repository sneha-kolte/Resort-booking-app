import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import '../animate-custom.css';
import { Formik } from 'formik';
//import * as EmailValidator from 'email-validator';
import * as Yup from 'yup'



const Login = () => ( 

<Formik 
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) =>{
        console.log("Submitting");
    }}

    validationSchema = { Yup.object().shape({
       email: Yup.string()
       .email() 
       .required("Email Required"),
       password: Yup.string()
       .required("Password Required")
       .min(8, "Password is too short")
       .matches(/(?=.*[0-9])/, "Password must contain number")

    })}
    >

    {props => {
        const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
        } = props;
    

    return (
        <>
        {/* <Hero hero="roomsHero">
            <Banner title="Join Us" >
                <Link to="/" classNameName="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero> */}

        <div className="container">
       
            <section>				
                <div id="container_demo" >
                    <div id="wrapper">
                        <div id="login" className="animate form">
                            <form onSubmit={handleSubmit}> 
                                <h1>Log in</h1> 
                                <p> 
                                    <label className="uname" data-icon="u" > Your email or username </label>
                                    <input 
                                    name="email" 
                                    type="text" 
                                    value={values.email}
                                    placeholder="myusername or mymail@mail.com"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.email && touched.email && "errors"}
                                    />
                                    {errors.email && touched.email && (
                                        <div className="input-feedback">{errors.email} </div>
                                    )}
                                </p>
                                <p> 
                                    <label className="youpasswd" data-icon="p"> Your password </label>
                                    <input id="password" 
                                    name="password" 
                                    
                                    type="password" 
                                    value={values.password}
                                    placeholder="eg. X8df!90EO" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password && "errors"}
                                    />
                                    {errors.password && touched.password && (
                                        <div className="input-feedback">{errors.password} </div>
                                    )}
                                </p>
                                {/* <p className="keeplogin"> 
									<input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
									<label>Keep me logged in</label>
								</p> */}
                                <p className="login button"> 
                                    <input type="submit" value="Login" disabled={isSubmitting} /> 
                                    {/* <button type="submit" disabled={isSubmitting}>Login</button> */}
								</p>
                                {/* <p className="change_link">
									Not a member yet ?
									<a href="#toregister" className="to_register">Join us</a>
								</p> */}
                            </form>
                        </div>

                        {/* <div id="register" className="animate form">
                            <form  onSubmit={handleSubmit}> 
                                <h1> Sign up </h1> 
                                <p> 
                                    <label className="uname" data-icon="u">Your username</label>
                                    <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
                                </p>
                                <p> 
                                    <label className="youmail" data-icon="e" > Your email</label>
                                    <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="mysupermail@mail.com"/> 
                                </p>
                                <p> 
                                    <label className="youpasswd" data-icon="p">Your password </label>
                                    <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO"/>
                                </p>
                                <p> 
                                    <label className="youpasswd" data-icon="p">Please confirm your password </label>
                                    <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO"/>
                                </p>
                                <p className="signin button"> 
									<input type="submit" value="Sign up"/> 
								</p>
                                <p className="change_link">  
									Already a member ?
									<a href="#tologin" className="to_register"> Go and log in </a>
								</p>
                            </form>
                        </div> */}
						
                    </div>
                </div>  
            </section>
        </div>
        </>
    );
}}
    </Formik>
)


export default Login;
// import React, { Component } from 'react';
// //import { Link } from 'react-router-dom';
// import '../animate-custom.css';

// export default class Login extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             username : ''
//         }
//     }

//     handleUsernameChage = (e) => {
//         this.setState({
//             username : e.target.value
//         })

//     }
//     render() {
//         function handleSubmit(event) {
//                     event.preventDefault();
//                   }
//         return (
//             <>
                
//                 <div className="container">
       
//                    <section>				
//                        <div id="container_demo" >
                           
//                            <p className="hiddenanchor" id="toregister"></p>
//                             <p className="hiddenanchor" id="tologin"></p>
//                             <div id="wrapper">
//                                 <div id="login" className="animate form">
//                                     <form onSubmit={this.handleSubmit}> 
//                                         <h1>Log in</h1> 
//                                         <p> 
//                                         <label data-icon="e"> Your email or username </label>
//                                         <input id="username" 
//                                         name="username" value={this.state.username} 
//                                         onChange={this.handleUsernameChage}
//                                         type="text" 
//                                         placeholder="myusername or mymail@mail.com" />
//                                        </p>
//                                        <p> 
//                                            <label className="youpasswd" data-icon="p"> Your password </label>
//                                            <input id="password" name="password" type="password" placeholder="eg. X8df!90EO" /> 
//                                        </p>
//                                        <p className="keeplogin"> 
//        									<input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
//        									<label >Keep me logged in</label>
//        								</p>
//                                        <p className="login button"> 
//                                            <input type="submit" value="Login" /> 
//        								</p>
//                                        <p className="change_link">
//        									Not a member yet ?
//        									<a href="#toregister" className="to_register">Join us</a>
//        								</p>
//                                    </form>
//                                </div>
       
//                                <div id="register" className="animate form">
//                                    <form  onSubmit={handleSubmit}> 
//                                        <h1> Sign up </h1> 
//                                        <p> 
//                                            <label className="uname" data-icon="u">Your username</label>
//                                            <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
//                                        </p>
//                                        <p> 
//                                            <label className="youmail" data-icon="e" > Your email</label>
//                                            <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="mysupermail@mail.com"/> 
//                                        </p>
//                                        <p> 
//                                            <label className="youpasswd" data-icon="p">Your password </label>
//                                            <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO"/>
//                                        </p>
//                                        <p> 
//                                            <label className="youpasswd" data-icon="p">Please confirm your password </label>
//                                            <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO"/>
//                                        </p>
//                                        <p className="signin button"> 
//        									<input type="submit" value="Sign up"/> 
//        								</p>
//                                        <p className="change_link">  
//        									Already a member ?
//        									<a href="#tologin" className="to_register"> Go and log in </a>
//        								</p>
//                                    </form>
//                                </div>
                               
//                            </div>
//                        </div>  
//                    </section>
//                </div>
//                </>
//         )
//     }
// }


