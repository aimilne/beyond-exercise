import { Stack } from "expo-router";
import { store } from "@/state/store";
import { Provider } from "react-redux";
import { Strings } from "@/constants/Strings";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: Strings.teachersHeader }}
        />
        <Stack.Screen name="classes" options={{ title: Strings.classHeader }} />
        <Stack.Screen
          name="students"
          options={{ title: Strings.studentsHeader }}
        />
      </Stack>
    </Provider>
  );
}
