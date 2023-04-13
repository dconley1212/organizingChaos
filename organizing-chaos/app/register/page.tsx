"use client";
import Header from "../../components/Header";
import Button from "../../components/Button";
import styles from "../../styles/Register.module.css";
import { ImArrowRight2 } from "react-icons/im";
import Input from "../../components/Input";

function register() {
  return (
    <div className={styles.container}>
      <Header className={styles.title}>Create an Account</Header>
      <form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <Input
          className={styles.input}
          name="name"
          required
          autoComplete="name"
        />
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <Input
          className={styles.input}
          name="email"
          required
          autoComplete="username"
        />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <Input
          className={styles.input}
          required
          autoComplete="new-password"
          name="password"
        />
        <Button className={styles.button}>
          Continue <ImArrowRight2 />
        </Button>
      </form>
    </div>
  );
}

export default register;
