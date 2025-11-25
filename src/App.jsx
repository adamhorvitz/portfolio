import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { resumeData } from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero data={resumeData.personalInfo} />
        <Education data={resumeData.education} />
        <Skills data={resumeData.skills} />
        <Experience data={resumeData.experience} />
        <Projects data={resumeData.projects} />
      </main>
      <Footer data={resumeData.personalInfo} />
    </div>
  );
}

export default App;
