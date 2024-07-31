import { FlatList, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { Link } from "expo-router";

import { useAppSelector } from "@/state/storeHooks";
import { selectClasses, updateSelectedClass } from "@/state/schoolSlice";
import { ListItem } from "@/components/ListItem";

export default function TeachersScreen() {
  const dispatch = useDispatch();

  const classes = useAppSelector(selectClasses);

  return (
    <FlatList
      data={classes}
      renderItem={({ item, index }) => (
        <Link href={{ pathname: "/students" }} asChild>
          <Pressable
            onPressIn={() => {
              dispatch(updateSelectedClass(item.id));
            }}
          >
            <ListItem text={item.name} highlight={index % 2 === 0} />
          </Pressable>
        </Link>
      )}
    />
  );
}
