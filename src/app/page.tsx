"use client";  // Добавьте эту строку в начало файла

import Head from 'next/head';
import { useState } from 'react';
import Line from '../../components/Line';

const Home: React.FC = () => {
  const [angle, setAngle] = useState<number>(45);

  return (
    <div style={{ height: '100vh', backgroundColor: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Head>
        <title>Line Angle App</title>
      </Head>
      <Line angle={angle} />
      <div style={{ position: 'absolute', bottom: 20 }}>
        <button onClick={() => setAngle((prev) => (prev + 10) % 360)} style={{ marginRight: 10 }}>
          Increase Angle
        </button>
        <button onClick={() => setAngle((prev) => (prev - 10 + 360) % 360)}>
          Decrease Angle
        </button>
      </div>
    </div>
  );
};

export default Home;
