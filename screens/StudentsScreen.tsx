import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { selectSelectedClassId, Student } from "@/state/schoolSlice";
import { useAppSelector } from "@/state/storeHooks";
import { getStudents } from "@/api/api";
import { ListItem } from "@/components/ListItem";

export default function StudentsScreen() {
  const selectedClass = useAppSelector(selectSelectedClassId);

  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    if (selectedClass !== undefined) {
      getStudents(selectedClass)
        .then((students) => {
          const sortedStudents = students.sort((a, b) =>
            a.surname.localeCompare(b.surname)
          );
          setStudents(sortedStudents);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <FlatList
      data={students}
      renderItem={({ item, index }) => (
        <ListItem
          text={`${item.forename} ${item.surname}`}
          highlight={index % 2 === 0}
        />
      )}
    />
  );
}
