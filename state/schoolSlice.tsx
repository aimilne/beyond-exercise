import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type Employee = {
  id: string;
  surname: string;
  forename: string;
  title: string;
  classes: {
    id: string;
    name: string;
  }[];
};

export type Class = {
  id: string;
  name: string;
  employeeIds: string[];
};

export type Student = {
  id: string;
  surname: string;
  forename: string;
};

export interface School {
  employees: Employee[];
  classes: Class[];
  selectedEmployeeId: string | undefined;
  selectedClassId: string | undefined;
}

export const initialState: School = {
  employees: [],
  classes: [],
  selectedEmployeeId: undefined,
  selectedClassId: undefined,
};

export const classSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    updateEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
    updateSelectedEmployee: (state, action: PayloadAction<string>) => {
      state.selectedEmployeeId = action.payload;
    },
    updateSelectedClass: (state, action: PayloadAction<string>) => {
      state.selectedClassId = action.payload;
    },
  },
});

export const selectEmployees = (state: RootState) => state.school.employees;

export const selectSelectedClassId = (state: RootState) =>
  state.school.selectedClassId;

export const selectedSelectedEmployeeId = (state: RootState) =>
  state.school.selectedEmployeeId;

/**
 * return all the classes for the selected teacher
 */
export const selectClasses = createSelector(
  [selectEmployees, selectedSelectedEmployeeId],
  (employees, selectedEmployeeId) => {
    const selectedTeacher = employees.find(
      (employee) => employee.id === selectedEmployeeId
    );
    return selectedTeacher?.classes ?? [];
  }
);

export const { updateEmployees, updateSelectedEmployee, updateSelectedClass } =
  classSlice.actions;

export default classSlice.reducer;
