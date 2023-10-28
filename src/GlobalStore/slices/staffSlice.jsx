import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffs: [],
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    addStaff: (state, action) => {
      const { id, name, email, phone, position } = action.payload;
      const staff = {
        id,
        name,
        email,
        phone,
        position,
      };
      state.staffs.push(staff);
    },
    updateAStaff: (state, action) => {
      const { id, name, email, phone, position } = action.payload;
      const staff = state.staffs.find((staff) => staff.id == id);
      if (staff) {
        staff.name = name;
        staff.email = email;
        staff.phone = phone;
        staff.position = position;
      }
    },

    deleteStaff: (state, action) => {
      state.staffs = state.staffs.filter(
        (staff) => staff.id !== action.payload
      );
    },
  },
});

export const { addStaff, updateAStaff, deleteStaff } = staffSlice.actions;
export default staffSlice.reducer;
