import { useEffect } from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { Link } from "expo-router";

import {
  selectEmployees,
  updateEmployees,
  updateSelectedEmployee,
} from "@/state/schoolSlice";
import { useAppSelector } from "@/state/storeHooks";
import { ListItem } from "@/components/ListItem";
import { getEmployees } from "@/api/api";

export default function TeachersScreen() {
  const dispatch = useDispatch();

  const employees = useAppSelector(selectEmployees);

  useEffect(() => {
    getEmployees()
      .then((employees) => {
        dispatch(updateEmployees(employees));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <FlatList
      data={employees}
      renderItem={({ item, index }) => (
        <Link href={{ pathname: "/classes" }} asChild>
          <Pressable
            onPressIn={() => {
              dispatch(updateSelectedEmployee(item.id));
            }}
          >
            <ListItem
              text={`${item.title} ${item.forename} ${item.surname}`}
              highlight={index % 2 === 0}
            />
          </Pressable>
        </Link>
      )}
    />
  );
}
