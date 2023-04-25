"use client";
import React, { useCallback, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import styles from "../../styles/Register.module.css";
import { ImArrowRight2 } from "react-icons/im";
import Input from "../../components/Input";
import { registerCall } from "../../utils/api";

interface RegisterInfo {
  name: string;
  email: string;
  password: string;
}

const intialState = {
  name: "",
  email: "",
  password: "",
};

function register() {
  const [newUser, setNewUser] = useState<RegisterInfo>(intialState);
  const [error, setError] = useState<String>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await registerCall(newUser);
      } catch (err) {
        setError(error);
      } finally {
        setNewUser({ ...newUser });
      }
    },
    [newUser.name, newUser.email, newUser.password]
  );

  return (
    <div className={styles.container}>
      <Header className={styles.title}>Create an Account</Header>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <Input
          className={styles.input}
          name="name"
          value={newUser.name}
          required
          autoComplete="name"
          onChange={handleChange}
        />
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <Input
          className={styles.input}
          name="email"
          value={newUser.email}
          required
          autoComplete="username"
          onChange={handleChange}
        />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <Input
          className={styles.input}
          required
          autoComplete="new-password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />
        <Button className={styles.button}>
          Continue <ImArrowRight2 />
        </Button>
      </form>
    </div>
  );
}

export default register;
