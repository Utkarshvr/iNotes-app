import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function NoteScreen() {
  const [title, setTitle] = useState("Colorsdd");
  const [content, setContent] = useState(
    "Red - Hygyyyuhfyhyhjjkfhtuggsthfgh fixing Gigi's rigid tofu\nHvy"
  );
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const contentInputRef = useRef(null);

  const getFontWeight = () => (isBold ? "bold" : "normal");
  const getFontStyle = () => (isItalic ? "italic" : "normal");
  const getTextDecoration = () => (isUnderline ? "underline" : "none");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-black"
    >
      <StatusBar barStyle="light-content" />

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
      <ScrollView className="flex-1 px-4" keyboardShouldPersistTaps="handled">
        {/* Title Input */}
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          placeholderTextColor="#8E8E93"
          className="text-white text-2xl font-montSemiBold mb-4"
          style={{ fontWeight: getFontWeight(), fontStyle: getFontStyle() }}
        />

        {/* Content Input */}
        <TextInput
          ref={contentInputRef}
          value={content}
          onChangeText={setContent}
          placeholder="Start typing..."
          placeholderTextColor="#8E8E93"
          multiline
          textAlignVertical="top"
          className="text-white text-base min-h-[400px]"
          style={{
            fontWeight: getFontWeight(),
            fontStyle: getFontStyle(),
            textDecorationLine: getTextDecoration(),
          }}
        />
      </ScrollView>

      {/* Formatting Toolbar */}
      <View className="bg-[#1C1C1E] border-t border-gray-800 px-4 py-2">
        <View className="flex-row items-center justify-between">
          {/* Left side tools */}
          <View className="flex-row items-center gap-4">
            {/* Text Size */}
            <TouchableOpacity className="p-2">
              <View className="flex-row items-center">
                <Text className="text-white text-base font-semibold">Aa</Text>
              </View>
            </TouchableOpacity>

            {/* Bold */}
            <TouchableOpacity
              className="p-2"
              onPress={() => setIsBold(!isBold)}
            >
              <MaterialCommunityIcons
                name="format-bold"
                size={24}
                color={isBold ? "#FFD700" : "white"}
              />
            </TouchableOpacity>

            {/* Italic */}
            <TouchableOpacity
              className="p-2"
              onPress={() => setIsItalic(!isItalic)}
            >
              <MaterialCommunityIcons
                name="format-italic"
                size={24}
                color={isItalic ? "#FFD700" : "white"}
              />
            </TouchableOpacity>

            {/* Underline */}
            <TouchableOpacity
              className="p-2"
              onPress={() => setIsUnderline(!isUnderline)}
            >
              <MaterialCommunityIcons
                name="format-underline"
                size={24}
                color={isUnderline ? "#FFD700" : "white"}
              />
            </TouchableOpacity>

            {/* Table */}
            <TouchableOpacity className="p-2">
              <MaterialCommunityIcons name="table" size={24} color="white" />
            </TouchableOpacity>

            {/* Attachment */}
            <TouchableOpacity className="p-2">
              <Ionicons name="attach" size={24} color="white" />
            </TouchableOpacity>

            {/* Camera */}
            <TouchableOpacity className="p-2">
              <Ionicons name="camera-outline" size={24} color="white" />
            </TouchableOpacity>

            {/* Checklist */}
            <TouchableOpacity className="p-2">
              <MaterialCommunityIcons
                name="checkbox-marked-circle-outline"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>

          {/* Right side - More options */}
          <TouchableOpacity className="p-2">
            <Ionicons name="chevron-forward" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
