import Login from './Login';

export default function Home({ signInPassword, setSignInPassword, signInEmail, setSignInEmail }) {
  return (
    <div>
      Home page
      <Login signInPassword={signInPassword} setSignInPassword={setSignInPassword} signInEmail={signInEmail} setSignInEmail={setSignInEmail} />
    </div>
  );
}