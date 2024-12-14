import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  currentStudent: null,
};

const UpdateReducer = createSlice({
  name: 'UpdatingStudent',
  initialState,
  reducers: {
    UpdateStudent: (state, action) => {
      const currentStudentIndex = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      if (currentStudentIndex === -1) {
        
        const newStudent = {
          name: action.payload.name,
          address: action.payload.address,
          id: action.payload.id,
        };
        state.students.push(newStudent);

        state.currentStudent = newStudent;
      } else {

        state.currentStudent = state.students[currentStudentIndex];
      }
    },
  },
});

export const { UpdateStudent } = UpdateReducer.actions;
export default UpdateReducer.reducer;
