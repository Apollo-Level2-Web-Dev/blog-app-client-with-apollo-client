import React, { useEffect, useState } from 'react';
import './Signup.css'
import { gql, useMutation } from '@apollo/client';

const SIGNUP = gql`
    mutation Reg($name: String!, $email: String!, $password: String!, $bio: String) {
        signup(name: $name, email: $email, password: $password, bio: $bio) {
        userError
        token
        }
    }
`

const Signup = () => {
    const [signup, { data, loading, error }] = useMutation(SIGNUP);

    // if (loading) return 'Submitting...';
    // if (error) return `Submission error! ${error.message}`;

    const handleRegister = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            bio: e.target.bio.value
        }
        console.log("data: ", data)

        signup({
            variables: data
        })
    }

    console.log("data: ", data)
    const [userError, setUserError] = useState(null);

    useEffect(() => {
        if (data && data.signup.token) {
            console.log("token", data.signup.token)
            localStorage.setItem("token", data.signup.token)
        }
        if (data && data.signup.userError) {
            setUserError(data.signup.userError)
        }
    }, [data]);

    return (
        <div className="form">
            <form onSubmit={handleRegister}>
                <label htmlFor="">Your Name</label>
                <input name="name" type="text" />
                <label htmlFor="">Your Email</label>
                <input name="email" type="email" />
                <label htmlFor="">Your Password</label>
                <input name="password" type="password" />
                <label htmlFor="">Your Bio</label>
                <input name="bio" type="text" />
                <button type="submit" className='rounded-full p-2 bg-white text-black'>Register</button>
            </form>
        </div>
    );
};

export default Signup;