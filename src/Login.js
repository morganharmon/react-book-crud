export default function Login({ signInPassword, setSignInPassword, signInEmail, setSignInEmail }) {
  return (
    <div>
      <form>
        <label>
          Email: 
          <input value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
        </label>
      </form>
    </div>
  );
}