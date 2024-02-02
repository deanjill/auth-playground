'use client'

import styles from "./page.module.css";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <main className={styles.main}>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {user && <h1>Hello user!</h1>}

      <a href="/api/auth/login">Login</a>
    </main>
  );
}
