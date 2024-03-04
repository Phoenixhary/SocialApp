import React from 'react'
import Navbar from './Components/SearchBar';
import Feed from './Components/Feed';
import ConnectButton from './Components/ConnectButton';
import {Routes, Route} from 'react-router-dom'
import DisconnectedPage from './Components/DisconnectedPage';
import Sidebar from './Components/Sidebar';
import Widget from './Components/Widget';
import OverallPage from './Components/OverallPage';
import CreateSpace from './Components/CreateSpace';

const App = () => {
  return ( 
    <div>
    <Routes>
      <Route path="/" element={<DisconnectedPage />} />
      <Route path="/Home" element={<OverallPage />} />
      <Route path="/Createspace" element={<CreateSpace />} />
     </Routes>
   </div>
   );
}
 
export default App;
