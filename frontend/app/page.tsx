'use client';
import { useState } from 'react';
import { Header } from '../components/Header';
import { Login } from '../components/login';
import { Board } from '../components/Board';
import { calculateWinner } from '../components/CalculateWinner';

export default function Dashboard() {
  


  return (
    <div className="game">
      <Header />

      <Login />
    </div>
  );
}

