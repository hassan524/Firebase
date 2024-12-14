import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { ref, getDatabase, onValue, remove } from 'firebase/database';
import { useDispatch } from 'react-redux';  // Import useDispatch to dispatch actions
import { UpdateStudent } from '../redux/updateSlice';  // Import the UpdateStudent action

const ShowStudent = () => {
  const [studentData, setStudentData] = useState(null);
  const db = getDatabase(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();  

  useEffect(() => {
    const studentRef = ref(db, 'Students');

    const unsubscribe = onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      setStudentData(data);
    });

    return () => unsubscribe();
  }, []);

  const removeStudent = (deleteid) => {
    const studentRef = ref(db, 'Students/' + deleteid);
    remove(studentRef);
  };

  const update = (id, name, address) => {
    dispatch(UpdateStudent({ id, name, address }));  // Dispatch the action with student data
  };

  const handleUpdateClick = (e, id, name, address) => {
    e.preventDefault();
    update(id, name, address);
    navigate('/update');
  };

  return (
    <div className="w-[75vw] flex justify-center items-center">
      <div className="bg-slate-700 p-5 rounded-md">
        <h2 className="text-white text-lg font-semibold">Students Data</h2>
        {studentData ? (
          <ul className="flex flex-col">
            {Object.entries(studentData).map(([id, student]) => (
              <li
                key={id}
                className="text-white w-full gap-3 flex justify-between items-center py-2 border-b border-slate-500"
              >
                <div>
                  {`ID: ${id}, Name: ${student.name}, Address: ${student.address}`}
                </div>
                <div className="flex space-x-2">
                  <button
                    className="bg-slate-500 p-2 rounded-md"
                    onClick={() => removeStudent(id)}
                  >
                    Remove
                  </button>
                  <Link to="/update" onClick={(e) => handleUpdateClick(e, id, student.name, student.address)}>
                    <button className="bg-slate-500 p-2 rounded-md">
                      Update
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">No data found.</p>
        )}
      </div>
    </div>
  );
};

export default ShowStudent;
