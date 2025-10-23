import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";

export default function NoteScreen() {
  const [title, setTitle] = useState("Colorsdd");
  const richText = useRef(null);

  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-black"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      {/* Header */}
      <View className="px-4 pb-4">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity className="w-10 h-10 rounded-full bg-[#1C1C1E] items-center justify-center">
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>

          <View className="flex-row gap-2">
            <TouchableOpacity className="w-10 h-10 rounded-full bg-[#1C1C1E] items-center justify-center">
              <Ionicons name="share-outline" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-[#1C1C1E] items-center justify-center">
              <Ionicons name="ellipsis-horizontal" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-[#FFD700] items-center justify-center">
              <Ionicons name="checkmark" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

       {/* Note Content */}
       <ScrollView 
         className="flex-1"
         keyboardShouldPersistTaps="handled"
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{ 
           flexGrow: 1,
          //  paddingBottom: 200 // Only 200px extra scrolling
         }}
       >
         {/* Title Input */}
         <TextInput
           value={title}
           onChangeText={handleTitleChange}
           placeholder="Title"
           placeholderTextColor="#8E8E93"
           className="text-white text-2xl font-montSemiBold px-4"
         />

         {/* Rich Text Editor */}
         <RichEditor
           ref={richText}
           placeholder="Start typing..."
           editorStyle={{
             backgroundColor: "transparent",
             color: "white",
             contentCSSText:
               "font-size: 16px; padding: 16px;", // Removed min-height: 100vh
           }}
           containerStyle={{
            //  backgroundColor: "#333",
            //  minHeight: 900, // Fixed height instead of 100vh
           }}
           useContainer={true}
           initialFocus={false}
         />
       </ScrollView>

      {/* Rich Text Toolbar */}
      <RichToolbar
        editor={richText}
        actions={[
          "bold",
          "italic",
          "underline",
          "unorderedList",
          "orderedList",
          "link",
          "image",
        ]}
        iconTint="#FFFFFF"
        selectedIconTint="#FFD700"
        selectedButtonStyle={{
          backgroundColor: "#2C2C2E",
        }}
        style={{
          backgroundColor: "#1C1C1E",
          borderTopWidth: 1,
          borderTopColor: "#333333",
        }}
      />
    </KeyboardAvoidingView>
  );
}
