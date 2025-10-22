import { ScrollView, Text } from "react-native";

export default function FoldersScreen() {
  return (
    <ScrollView contentContainerClassName="flex-1 bg-white dark:bg-black p-4">
      <Text className="text-black dark:text-white text-3xl font-montSemiBold">
        Folders
      </Text>
    </ScrollView>
  );
}
