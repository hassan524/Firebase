import React from 'react';
import { set, getDatabase, ref } from 'firebase/database';
import { app } from '../firebase';

const AddStudent = () => {
  
  const [name, setname] = React.useState('');
  const [address, setadress] = React.useState('');

  const db = getDatabase(app);

  const submithandler = (e) => {
    e.preventDefault();

    const uniqueId = Date.now();

    set(ref(db, `/Students/${uniqueId}`), {
      name,
      address,
    })

    setname('');
    setadress('');
  };

  return (
    <div className="w-[75vw] flex justify-center items-center">
      <div className="w-[28vw] h-[50vh] bg-slate-700 p-5 rounded-md">
        <form onSubmit={submithandler} className="flex items-center h-full gap-5 flex-col">
          <input
            className="p-2 rounded-md outline-slate-900 w-full"
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            className="p-2 rounded-md outline-slate-900 w-full"
            type="text"
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setadress(e.target.value)}
          />

          <button
            className="px-14 py-2 bg-slate-600 font-semibold rounded-md text-white active:scale-95"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
