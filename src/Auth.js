import { useState } from 'react';
import { signUp, signIn } from './services/fetch-utils';

export default function Auth({ setUser }) {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [error, setError] = useState('');

  async function signUpSubmit(e) {
    e.preventDefault();
    try {
      const user = await signUp(signUpEmail, signUpPassword);
      setUser(user);
    } catch (e) {
      setError(e.message);
      return error;
    }
  }
  async function signInSubmit(e) {
    e.preventDefault();
    const user = await signIn(signInEmail, signInPassword);
    setUser(user);
  }

  return (
    <div className='auth'>
      <form onSubmit={signUpSubmit}>
        <h3>Sign Up</h3>
        <label>
          Email: 
          <input value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
      <form onSubmit={signInSubmit}>
        <h3>Sign In</h3>
        <label>
          Email: 
          <input value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}