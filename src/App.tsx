import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { MarineStudies } from './components/sections/MarineStudies';
import { Events } from './components/sections/Events';
import { CoralReef } from './components/sections/CoralReef';
import { Contact } from './components/sections/Contact';
import { BubbleProvider } from './components/effects/BubbleContext';

function App() {
  return (
  <BrowserRouter basename="/college-static-website-four">
    <BubbleProvider>
      <Layout>
        <Hero />
        <About />
        <MarineStudies />
        <Events />
        <CoralReef />
        <Contact />
      </Layout>
    </BubbleProvider>
  </BrowserRouter>
);
}

export default App;