import reducer, {
  initialState,
  updateEmployees,
  updateSelectedEmployee,
  selectClasses,
} from "../schoolSlice";

const EMPLOYEE1 = {
  id: "E1",
  surname: "James",
  forename: "Brown",
  title: "Mr",
  classes: [
    {
      id: "C3",
      name: "Class3",
    },
  ],
};

const EMPLOYEE2 = {
  id: "E2",
  surname: "Anne",
  forename: "Little",
  title: "Ms",
  classes: [
    {
      id: "C1",
      name: "Class1",
    },
    {
      id: "C2",
      name: "Class2",
    },
  ],
};

test("should return the initial state", () => {
  expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
});

test("should add any employee", () => {
  expect(reducer(initialState, updateEmployees([EMPLOYEE1]))).toEqual({
    ...initialState,
    employees: [EMPLOYEE1],
  });
});

test("should get the classes for the select employee", () => {
  let state = reducer(initialState, updateEmployees([EMPLOYEE1, EMPLOYEE2]));
  state = reducer(state, updateSelectedEmployee("E2"));

  const result = selectClasses({ school: state });
  expect(result).toEqual([
    {
      id: "C1",
      name: "Class1",
    },
    {
      id: "C2",
      name: "Class2",
    },
  ]);
});
