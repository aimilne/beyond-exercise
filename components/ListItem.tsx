import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

type ListItemProps = {
  text: string;
  highlight: boolean;
};

export const ListItem = (props: ListItemProps) => {
  const { text, highlight } = props;
  return (
    <View style={[styles.textContainer, highlight && styles.highlight]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  highlight: {
    backgroundColor: Colors.highlightedRow,
  },
  text: {
    fontSize: 24,
  },
});
