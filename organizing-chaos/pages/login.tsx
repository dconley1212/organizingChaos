import Layout from "../components/Layout";
import Header from "../components/Header";

function login() {
  return (
    <Layout className="example1">
      <Header className="example">Log In</Header>
      <form>
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="Email" autoComplete="username" />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button>Continue</button>
      </form>
    </Layout>
  );
}

export default login;
