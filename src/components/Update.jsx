import React from 'react';
import { useSelector } from 'react-redux';
import { ref, update, getDatabase } from 'firebase/database';
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const student = useSelector((state) => state.updatingStudent.currentStudent);

  const [UpdateName, setUpdateName] = React.useState(student?.name || 'NO VALUE');
  const [UpdateAddress, setUpdateAddress] = React.useState(student?.address || 'NO VALUE');

  const navigate = useNavigate(); // Initialize useNavigate hook

  const updateHandler = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const studentRef = ref(db, 'Students/' + student.id);

    // Corrected update call
    update(studentRef, { name: UpdateName, address: UpdateAddress })
      .then(() => {
        navigate('/ShowStudents'); // Use navigate to redirect
      })
      .catch((error) => {
        console.error('Update failed:', error); // Handle any error
      });
  };

  return (
    <div className="w-[75vw] h-[100vh] flex justify-center items-center">
      <div className="bg-slate-700 w-[28vw] p-5 rounded-md">
        <form className="flex items-center flex-col gap-5" onSubmit={updateHandler}>
          <input
            className="p-2 rounded-md outline-slate-900 w-full"
            type="text"
            placeholder="Update Your Name"
            value={UpdateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
          <input
            className="p-2 rounded-md outline-slate-900 w-full"
            type="text"
            placeholder="Update Your Address"
            value={UpdateAddress}
            onChange={(e) => setUpdateAddress(e.target.value)}
          />
          <button className="px-14 py-2 bg-slate-600 font-semibold rounded-md text-white active:scale-95" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
