import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { setUser, googleLogin, emailPasswordLogin } = useContext(AuthContext)



    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(from, { replace: true });

            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage);

            });

    }

    /* Email Password Login Seystem  */
    const handaleEmailPassword = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        // console.log(email, password);


        emailPasswordLogin(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                form.reset()
                navigate(from, { replace: true });

                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });


        form.reset()


    }

    return (
        <div>
            <div className="flex justify-center h-screen w-screen items-center">
                <div className="w-full md:w-1/2 flex flex-col items-center " >
                    <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>
                    <form onSubmit={handaleEmailPassword}>
                        <div className=" mb-6">
                            <input type="email" name="email" id="email" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="User Name" />
                        </div>
                        <div className=" mb-6">
                            <input type="password" name="password" id="password" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 " placeholder="Password" />
                        </div>
                        <div className=" flex flex-row justify-between">
                            <div className=" flex items-center gap-x-1">
                                <Link to={'/signup'} className="text-sm text-slate-400">Create Account</Link>
                            </div>
                            <div>
                                <Link to={'/'} href="#" className="text-sm text-slate-400 hover:text-blue-500">Forgot?</Link>
                            </div>
                        </div>
                        <div className=" mt-4">
                            <button type="submit" className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN</button>
                        </div>
                    </form>
                    {/*  */}
                    <div className="mt-16 grid space-y-4">
                        <button onClick={handleGoogleSignIn} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <FcGoogle />
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <BsGithub />
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                            </div>
                        </button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;