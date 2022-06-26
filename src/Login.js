export default function Login({ signInInput, setSignInInput }) {
  return (
    <div>
      <form>
        <label>
          Email: 
          <input value={signInInput} onChange={(e) => setSignInInput(e.target.value)} />
        </label>
      </form>
    </div>
  );
}