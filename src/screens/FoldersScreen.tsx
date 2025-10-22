import { ScrollView, Text } from "react-native";

export default function FoldersScreen() {
  return (
    <ScrollView contentContainerClassName="flex-1 bg-white dark:bg-black p-4">
      <Text className="text-black dark:text-white font-bold text-2xl">
        Folders
      </Text>
    </ScrollView>
  );
}
