import React, { useState } from "react";

const Login = () => {

  const [isSignup, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignup);
  }

  return (
    <>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="text-3xl mb-7 ml-2">Sign In</h1>
        {isSignup && <input type="text" name="signupname" className="p-4 my-4 w-full rounded-md bg-slate-700 bg-gray-700" placeholder="Enter you name"/>}
        <input type="text" name="username" className="p-4 my-4 w-full rounded-md bg-slate-700 bg-gray-700" placeholder="Enter email"/>
        <input type="password" name="password" className="p-4 my-4 w-full rounded-md bg-slate-700 bg-gray-700" placeholder="Enter password"/>
        <button type="button" className="p-2 my-6 bg-red-700 w-full mx-auto rounded-md">{isSignup ? 'Register' :'Sign in'}</button>
        <p className="py-6 cursor-pointer" onClick={() => toggleSignUp()}>{isSignup ? 'Back to Sign in': 'New to Netflix? Sign Up Now!'}</p>
      </form>
    </>
  );
};

export default Login;
