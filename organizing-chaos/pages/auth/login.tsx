import React, { useState, useCallback } from "react";
import Header from "../../components/Header";
import styles from "../../styles/Login.module.css";
import { ImArrowRight2 } from "react-icons/im";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { loginCall } from "../../utils/api";

interface Login {
  email: string;
  password: string;
}

const initialDisplay = true;

const initialLogin = {
  email: "",
  password: "",
};

function login() {
  const [displayPassword, setDisplayPassword] =
    useState<boolean>(initialDisplay);
  const [loginCredentials, setLoginCredentials] = useState<Login>(initialLogin);
  // const [error, setError] = useState<String>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        loginCall(loginCredentials);
      } catch (err) {
        console.error(err);
        // setError(err)
      }
    },
    [loginCredentials]
  );
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header className={styles.title}>Log In</Header>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Input
            className={styles.input}
            name="email"
            value={loginCredentials.email}
            placeholder="Email"
            autoComplete="username"
            onChange={handleChange}
          />
          {displayPassword ? (
            <>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <Input
                className={styles.input}
                name="password"
                value={loginCredentials.password}
                placeholder="Password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </>
          ) : null}
          <Button className={styles.button}>
            Continue <ImArrowRight2 />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default login;
