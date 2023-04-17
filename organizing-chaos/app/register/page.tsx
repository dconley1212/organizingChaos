"use client";
import React, { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import styles from "../../styles/Register.module.css";
import { ImArrowRight2 } from "react-icons/im";
import Input from "../../components/Input";
import { STATES } from "mongoose";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

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
