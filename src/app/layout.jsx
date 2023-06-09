"use client";
import './globals.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from 'next/font/google'
import { ReducerWithoutAction, useReducer } from 'react';
import { authReducer } from '@/reducers/auth';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'News App',
  description: 'News app',
}

const initialUserData = { user: {}, token: '' };
export const baseUrl = "http://localhost:8080/api"

export default function RootLayout({
  children,
}) {

  const [authState, dispatch] = useReducer(authReducer, initialUserData);

  function onLogin(email, password) {
    dispatch({ type: 'login', payload: { emil, password } });
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header onLogin={onLogin} />
        {children}
        <Footer />
      </body>
    </html>
  )
}