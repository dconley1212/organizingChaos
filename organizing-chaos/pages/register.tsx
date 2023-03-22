import Layout from "../components/Layout";
import Header from "../components/Header";
import Button from "../components/Button";
import styles from "../styles/Register.module.css";
import { ImArrowRight2 } from "react-icons/im";

function register() {
  return (
    <Layout className={styles.layout}>
      <div className={styles.container}>
        <Header className={styles.title}>Create an Account</Header>
        <form className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            className={styles.input}
            name="name"
            required
            autoComplete="name"
          ></input>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            className={styles.input}
            name="email"
            required
            autoComplete="username"
          ></input>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            className={styles.input}
            required
            autoComplete="new-password"
            name="password"
          ></input>
          <Button className={styles.button}>
            Continue <ImArrowRight2 />
          </Button>
        </form>
      </div>
    </Layout>
  );
}

export default register;
