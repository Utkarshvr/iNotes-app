import { Ionicons } from "@expo/vector-icons";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function NotesListScreen() {
  const notes = [
    {
      section: "Today",
      items: [
        {
          title: "Colorsdd",
          time: "10:16 PM",
          preview: "Red - Hygyyyuhfyhyhjjkfhtuggsthfgh fixing G...",
        },
        {
          title: "Colors 170",
          time: "10:15 PM",
          preview: "Lights 300",
        },
      ],
    },
    {
      section: "Previous 30 Days",
      items: [
        {
          title: "Gym tracker-",
          date: "09/10/25",
          preview: "No additional text",
        },
        {
          title: "Periods tracker-",
          date: "09/10/25",
          preview: "October 6th",
        },
        {
          title: "ITR passwords",
          date: "22/09/25",
          preview: "Mummy",
        },
        {
          title: "Passwords",
          date: "22/09/25",
          preview: "99716.micro@AV",
        },
      ],
    },
    {
      section: "June",
      items: [
        {
          title: "I phone",
          date: "09/06/25",
          preview: "25.02.2025 : 13:916",
        },
      ],
    },
    {
      section: "April",
      items: [
        {
          title: "Netflix",
          date: "18/04/25",
          preview: "Avws@netflix",
        },
      ],
    },
  ];

  return (
    <View className="flex-1 bg-black">
      {/* Header */}
      <View className="px-4 pb-4">
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity className="w-10 h-10 rounded-full bg-[#1C1C1E] items-center justify-center">
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-[#1C1C1E] items-center justify-center">
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <Text className="text-white text-3xl font-montSemiBold">Notes</Text>
        <View className="flex-row items-center mt-1">
          <Ionicons name="cloud" size={14} color="#FF9500" />
          <Text className="text-gray-500 text-xs ml-1">
            iCloud Storage Full ·{" "}
            <Text className="text-[#FF9500]">Get More</Text>
          </Text>
        </View>
      </View>

      {/* Notes List */}
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {notes.map((section, sectionIdx) => (
          <View key={sectionIdx} className="mb-6">
            {/* Section Header */}
            <Text className="text-white text-xl font-montSemiBold mb-3">
              {section.section}
            </Text>

            {/* Notes in Section */}
            <View className="bg-[#1C1C1E] rounded-xl overflow-hidden">
              {section.items.map((note, noteIdx) => (
                <View key={noteIdx}>
                  <TouchableOpacity className="px-4 py-3">
                    <Text className="text-white text-base font-semibold mb-1">
                      {note.title}
                    </Text>
                    <Text className="text-gray-400 text-sm">
                      {note.time || note.date} {note.preview}
                    </Text>
                  </TouchableOpacity>

                  {/* Divider - only if not last item */}
                  {noteIdx < section.items.length - 1 && (
                    <View className="h-[0.5px] bg-gray-800 ml-4" />
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* Bottom spacing for search bar */}
        <View className="h-24" />
      </ScrollView>

      {/* Bottom Search Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-black border-t border-gray-900 px-4 py-2 pb-8">
        <View className="flex-row items-center gap-3">
          <View className="flex-1 flex-row items-center bg-[#1C1C1E] rounded-xl px-3 py-2.5">
            <Ionicons name="search" size={18} color="#8E8E93" />
            <Text className="text-[#8E8E93] text-base ml-2">Search</Text>
            <View className="ml-auto">
              <Ionicons name="mic" size={18} color="#8E8E93" />
            </View>
          </View>
          <TouchableOpacity className="w-12 h-12 rounded-full bg-[#FFD700] items-center justify-center">
            <Ionicons name="create-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
