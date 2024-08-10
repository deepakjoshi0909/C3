import React from 'react';
import './App.css';
import HomeComponent from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Component/Navbar/Navbar';
import Event from './Component/Events/Events';
import FAQ from './Component/FAQ/FAQ';
import GetInTouch from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import TeamMembers from './Component/TeamMember/TeamMember';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeComponent/>
      <Event/>
      <FAQ/>
      <TeamMembers/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
