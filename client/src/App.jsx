import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar, Navbar } from './components';
import { Home, Password, User} from './pages';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#1d1d1d] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
				<Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto">
        <Navbar />
				<Routes>
					<Route path='/' element={<Home />}/>
					<Route path='/user' element={<User/>}/>
					<Route path='/password' element={<Password/>}/>
				</Routes>
      </div>
    </div>
  );
};

export default App;