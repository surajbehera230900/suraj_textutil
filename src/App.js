import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import{
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {

  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1800)
  }
  const toggleMode=()=>{
    if(mode==="light")
    {
    setMode("dark");
    document.body.style.backgroundColor="black"
    showAlert("Dark mode has been enabled...","success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled...","success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Suraj-Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      {/* <Routes> */}
        {/* <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}></Route> */}
      {/* </Routes> */}
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
