function Login() {
    return (
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>
          <span>
            Signup
          </span>
        </p>
      </div>
    );
  }
export default Login;