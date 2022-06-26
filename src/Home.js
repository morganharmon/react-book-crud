import Login from './Login';

export default function Home({ signInInput, setSignInInput }) {
  return (
    <div>
      Home page
      <Login signInInput={signInInput} setSignInInput={setSignInInput} />
    </div>
  );
}