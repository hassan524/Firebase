import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-slate-700 px-4 w-[25vw] h-[100vh] p-3">
            <div className="flex flex-col gap-2 mt-5">
                <Link to="/AddStudent"> 
                    <button className="w-full bg-slate-800 text-slate-400 font-semibold p-3 rounded-md active:scale-95">
                        AddStudent
                    </button>
                </Link> 


                <Link className='w-full' to="/ShowStudents">
                    <button className="w-full bg-slate-800 text-slate-400 font-semibold p-3 rounded-md active:scale-95">
                        ShowStudents
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
