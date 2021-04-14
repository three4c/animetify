import React from 'react';

import Top from '../pages/Top/Top';
import Header from '../modules/Header/Header';
import Section from '../modules/Section/Section';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <main>
      <Section>
        <Top />
      </Section>
    </main>
  </div>
);

export default App;
