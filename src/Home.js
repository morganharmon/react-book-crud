import Login from './Login';

export default function Home({ signInPassword, setSignInPassword, signInEmail, setSignInEmail, signUpEmail, setSignUpEmail, signUpPassword, setSignUpPassword }) {
  return (
    <div>
      Home page
      <Login signInPassword={signInPassword} setSignInPassword={setSignInPassword} signInEmail={signInEmail} setSignInEmail={setSignInEmail} signUpEmail={signUpEmail} setSignUpEmail={setSignUpEmail} signUpPassword={signUpPassword} setSignUpPassword={setSignUpPassword} />
    </div>
  );
}