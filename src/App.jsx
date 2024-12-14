import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AddStudent from './components/AddStudents';
import ShowStudent from './components/ShowStudent';
import Update from './components/Update';

const Layout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/AddStudent' element={<AddStudent />} />
        <Route path='/ShowStudents' element={<ShowStudent />}></Route>
        <Route path='/update' element={<Update />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
