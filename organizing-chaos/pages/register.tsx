import Layout from "../components/Layout";

function register() {
  return (
    <Layout className="example">
      <h1>Create your account!</h1>
      <form>
        <label>
          Name
          <input required autoComplete="name" placeholder="name"></input>
        </label>
        <label>
          Email
          <input required autoComplete="username" placeholder="Email"></input>
        </label>
        <label>
          Password
          <input
            required
            autoComplete="new-password"
            placeholder="Password"
          ></input>
        </label>
        <button>Create Account</button>
      </form>
    </Layout>
  );
}

export default register;
