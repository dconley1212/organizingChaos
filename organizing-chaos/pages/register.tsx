import Layout from "../components/Layout";
import Header from "../components/Header";
import styles from "../styles/Register.module.css";

function register() {
  return (
    <Layout className={styles.layout}>
      <div className={styles.container}>
        <Header className={styles.title}>Create an Account</Header>
        <form className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            className={styles.input}
            name="name"
            required
            autoComplete="name"
          ></input>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            className={styles.input}
            name="email"
            required
            autoComplete="username"
          ></input>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            className={styles.input}
            required
            autoComplete="new-password"
            name="password"
          ></input>
          <button className={styles.button}>Create Account</button>
        </form>
      </div>
    </Layout>
  );
}

export default register;
