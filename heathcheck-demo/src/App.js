import './App.css';
import Main from './main/Main';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header/Header';
import CustomModel from './main/CustomModel';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  return (
    <>
      <Header className='general-border bottom' setIsModalOpen= {setIsModalOpen}/>
      <CustomModel setIsModalOpen= {setIsModalOpen} isModalOpen = {isModalOpen}/>
      <Main/>
      </>
  );
}

export default App;
