import Layout from "../components/Layout";
import Header from "../components/Header";
import styles from "../styles/Login.module.css";
import { ImArrowRight2 } from "react-icons/im";

function login() {
  return (
    <Layout className={styles.layout}>
      <div className={styles.container}>
        <Header className={styles.title}>Log In</Header>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            name="email"
            placeholder="Email"
            autoComplete="username"
          />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            name="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <button className={styles.button}>
            Continue <ImArrowRight2 />
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default login;
