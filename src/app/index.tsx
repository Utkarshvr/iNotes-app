import { useColorScheme } from "react-native";
import FoldersScreen from "../screens/FoldersScreen";

export default function Index() {
  const colorScheme = useColorScheme();

  return <FoldersScreen />;
}
