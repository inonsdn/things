// import logo from './logo.svg';
// import './App.css';

// import './styles/lightBase.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// Standart Import
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Local Import
import ThingsView from './views/ThingsView';
import ThingsInfoView from './views/ThingsInfoView';
import LandingView from './views/LandingView';
import TopBar from './components/TopBar';


import './App.css'
import './styles/lightBase.css'

// Functions

// Main
export default function App () {

    return (
        <div className='app bg'>
            <TopBar/>
            <Routes>
                <Route path='/' element={<ThingsView/>}/>
                <Route path='/info/:name' element={<ThingsInfoView/>}/>
                <Route path='/*' element={<LandingView/>}/>
            </Routes>
            {/* <ThingsView/> */}
        </div>
    )
}
