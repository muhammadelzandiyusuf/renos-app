import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';

function App() {
  return (
    <main className="App">
      <section>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </section>
      <style jsx global>
        {`
          *,
          ::after,
          ::before {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box;
          }

          html {
            font-family: sans-serif;
            -webkit-text-size-adjust: 100%;
          }

          body {
            margin: 0;
            font-weight: 400;
            color: #202020;
            letter-spacing: 0.01em;
          }

          main {
            display: block;
          }

          p {
            margin: 0;
            word-break: break-word;
          }

          h1 {
            margin: 0;
          }
        `}
      </style>
    </main>
  );
}

export default App;
