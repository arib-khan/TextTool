import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';

//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [alert,setAlert] = useState(null); // object

  const showAlert = (massage,type) =>{
    setAlert({
      msg : massage,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }

  const [mode,setMode] = useState('light'); //

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark moad has been enabled","success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light has been enabled","success");
    }
  }

  return (
  <>
    {/* <Router> */}

    <Navbar  mode={mode} toggleMode={toggleMode}/> 

    <Alert alert= {alert} />

    <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
      
    {/* <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
    </Router> */}

  </>
  );
}

export default App;
