import { useColorScheme } from "react-native";
import NoteScreen from "../screens/NoteScreen";

export default function Index() {
  const colorScheme = useColorScheme();

  return <NoteScreen />;
  // return <NotesListScreen />;
  // return <FoldersScreen />;
}
