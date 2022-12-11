import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../components/Loading/Loading';

const SignUp = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const nameRef = useRef('');
    const [signInWithGoogle, gUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    //const { register, formState: { errors }, handleSubmit } = useForm();
    let handleError;
    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }
    if (error || googleError) {
        handleError = <p className='text-red-500'><small>{error?.message || googleError?.message || updateError?.message}</small></p>
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = passRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }


    // const onSubmit = async data => {
    //     await createUserWithEmailAndPassword(data.email, data.password);
    //     
    //     console.log('update done');
    // }
    return (
        <div className='mt-5 pt-5 w-50 m-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login our website to view the latest movie and TV shows fully free.</p>
                    </div>
                    <form onSubmit={formSubmit} className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100 mb-5">
                        <div className="card-body">
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" required ref={nameRef} placeholder="Input your Name" className="input input-bordered bg-white text-dark" />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required ref={emailRef} placeholder="Input your Email" className="input input-bordered bg-white text-dark" />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" ref={passRef} required placeholder="Input Your Password" className="input input-bordered bg-white text-dark" />
                                {/* <label className="label">
                                    <button onClick={resetPassword} className="label-text-alt link link-hover">Forgot password?</button>
                                </label> */}
                            </div>
                            {handleError}
                            <div className=" mt-2 mb-2">
                                <button className="btn btn-warning">SignUp</button>
                            </div>
                            <p className='text-danger italic'>Already Have an account? <Link to="/login" className='text-primary no-underline'>Please Login</Link> </p>
                            <div className="divider">OR</div>
                            <div
                                onClick={() => signInWithGoogle()}
                                className="btn btn-warning"
                            >Continue with Google</div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;