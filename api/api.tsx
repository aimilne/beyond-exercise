import { Employee, Student } from "@/state/schoolSlice";

const BASE_URL = "https://api.wonde.com/v1.0";
const ENDPOINT_SCHOOLS = "schools";
const ENDPOINT_EMPLOYEES = "employees";
const ENDPOINT_CLASSES = "classes";
const PARAM_HAS_CLASS = "has_class";
const PARAM_PER_PAGE = "per_page";
const PARAM_INCLUDE = "include";

//Values hardcoded for the exercise
const TEST_SCHOOL = "A1930499544";
const TOKEN = "f0c4836caff1943b4aa2e99eb0d07e0afccb80bc";
const EMPLOYEE_COUNT = "100"; //AM I skipped implementing pagination for the exercise, this gets all employees for the test school

const AUTH_HEADERS = new Headers({
  Authorization: `Bearer ${TOKEN}`,
});

/**
 * @returns personal and class data for all employees of the test school
 */
export async function getEmployees(): Promise<Employee[]> {
  const url = new URL(
    `${BASE_URL}/${ENDPOINT_SCHOOLS}/${TEST_SCHOOL}/${ENDPOINT_EMPLOYEES}`
  );
  url.searchParams.set(PARAM_HAS_CLASS, "true");
  url.searchParams.set(PARAM_PER_PAGE, EMPLOYEE_COUNT);
  url.searchParams.set(PARAM_INCLUDE, "classes");

  const response = await fetch(url.toString(), {
    headers: AUTH_HEADERS,
  });
  const responseData = await response.json();

  return responseData.data.map((employee: any) => {
    return {
      id: employee.id,
      surname: employee.surname,
      forename: employee.forename,
      title: employee.title,
      classes: employee.classes.data.map((classData: any) => {
        return {
          id: classData.id,
          name: classData.name,
        };
      }),
    };
  });
}

/**
 * @returns personal data for all students in the provided class at the test school
 */
export async function getStudents(classId: string): Promise<Student[]> {
  const url = new URL(
    `${BASE_URL}/${ENDPOINT_SCHOOLS}/${TEST_SCHOOL}/${ENDPOINT_CLASSES}/${classId}`
  );
  url.searchParams.set(PARAM_INCLUDE, "students");

  const response = await fetch(url.toString(), {
    headers: AUTH_HEADERS,
  });
  const responseData = await response.json();

  return responseData.data.students.data.map((student: any) => {
    return {
      id: student.id,
      forename: student.forename,
      surname: student.surname,
    };
  });
}
