import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg"
          alt="background image"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-70 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full bg-gray-700 border border-gray-400 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full bg-gray-700 border border-gray-400 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 border border-gray-400 rounded-md"
        />
        <button className="p-2 my-6 bg-red-700 w-full border border-transparent rounded-md">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
          {isSignInForm
            ? 'New to Netflix SignUp Now'
            : 'Already Registered. SignIn'}
        </p>
      </form>
    </div>
  );
};

export default Login;
