import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { emailPasswordCreateAccount,  setError } = useContext(AuthContext)

    const handaleEmailPasswordCreate = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
        form.reset()

        emailPasswordCreateAccount(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                setError("")

                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });



    }
    return (
        <div className='flex justify-center h-screen w-screen items-center'>
           <div className="w-full md:w-1/2 flex flex-col items-center " >
                    <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>
                    <form onSubmit={handaleEmailPasswordCreate}>
                        <div className="mb-6">
                            <input type="email" name="email" id="email" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="User Name" />
                        </div>
                        <div className="mb-6">
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
                        <div className="w-3/4 mt-4">
                            <button type="submit" className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN</button>
                        </div>
                    </form>
                    </div>
        </div>
    );
};

export default SignUp;