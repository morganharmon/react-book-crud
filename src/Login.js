export default function Login({ signInPassword, setSignInPassword, signInEmail, setSignInEmail, signUpEmail, setSignUpEmail, signUpPassword, setSignUpPassword, signUpSubmit, signInSubmit }) {
  return (
    <div>
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