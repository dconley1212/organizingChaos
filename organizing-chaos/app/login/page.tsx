"use client";
import { useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/Login.module.css";
import { ImArrowRight2 } from "react-icons/im";
import Input from "../../components/Input";
import Button from "../../components/Button";

interface Login {
  email: string;
  password: string;
}

const initialDisplay = false;

const initialLogin = {
  email: "",
  password: "",
};

function login() {
  const [displayPassword, setDisplayPassword] =
    useState<boolean>(initialDisplay);
  const [loginCredentials, setLoginCredentials] = useState<Login>(initialLogin);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={styles.container}>
      <Header className={styles.title}>Log In</Header>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <Input
          className={styles.input}
          name="email"
          placeholder="Email"
          autoComplete="username"
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <Input
          className={styles.input}
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button className={styles.button}>
          Continue <ImArrowRight2 />
        </Button>
      </form>
    </div>
  );
}

export default login;
