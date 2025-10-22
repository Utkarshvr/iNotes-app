import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function FoldersScreen() {
  return (
    <ScrollView contentContainerClassName="flex-1 bg-white dark:bg-black">
      {/* Header */}
      <View className="px-4 pb-4 flex-row justify-between items-center">
        <View>
          <Text className="text-black dark:text-white text-3xl font-montSemiBold">
            Folders
          </Text>
          <View className="flex-row items-center mt-1">
            <Ionicons name="cloud" size={14} color="#FF9500" />
            <Text className="text-neutral-500 text-xs ml-1">
              iCloud Storage Full ·{" "}
              <Text className="text-[#FF9500]">Get More</Text>
            </Text>
          </View>
        </View>

        <View className="flex-row gap-3">
          <TouchableOpacity className="w-10 h-10 rounded-full bg-neutral-800 items-center justify-center">
            <MaterialCommunityIcons
              name="folder-plus-outline"
              size={18}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity className="py-2 px-4 rounded-full bg-neutral-800 items-center justify-center">
            <Text className="text-white font-semibold">Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* iCloud Section */}
      <View className="px-4 mt-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-white text-xl font-montSemiBold">iCloud</Text>
          <Ionicons name="chevron-down" size={20} color="white" />
        </View>

        <View className="bg-[#1C1C1E] rounded-xl overflow-hidden">
          {/* All iCloud */}
          <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-neutral-800">
            <View className="flex-row items-center gap-3">
              <Ionicons name="folder-outline" size={24} color="#FFD700" />
              <Text className="text-white text-base font-medium">
                All iCloud
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Text className="text-neutral-400 text-base">12</Text>
              <Ionicons name="chevron-forward" size={18} color="#636366" />
            </View>
          </TouchableOpacity>

          {/* Notes */}
          <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-neutral-800">
            <View className="flex-row items-center gap-3">
              <Ionicons name="folder-outline" size={24} color="#FFD700" />
              <Text className="text-white text-base font-medium">Notes</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Text className="text-neutral-400 text-base">11</Text>
              <Ionicons name="chevron-forward" size={18} color="#636366" />
            </View>
          </TouchableOpacity>

          {/* Pending */}
          <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-neutral-800">
            <View className="flex-row items-center gap-3">
              <Ionicons name="folder-outline" size={24} color="#FFD700" />
              <Text className="text-white text-base font-medium">Pending</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Text className="text-neutral-400 text-base">1</Text>
              <Ionicons name="chevron-forward" size={18} color="#636366" />
            </View>
          </TouchableOpacity>

          {/* Recently Deleted */}
          <TouchableOpacity className="flex-row items-center justify-between px-4 py-3">
            <View className="flex-row items-center gap-3">
              <Ionicons name="trash-outline" size={24} color="#FFD700" />
              <Text className="text-white text-base font-medium">
                Recently Deleted
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Text className="text-neutral-400 text-base">2</Text>
              <Ionicons name="chevron-forward" size={18} color="#636366" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Yahoo Section */}
      <View className="px-4 mt-6">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-white text-xl font-montSemiBold">Yahoo!</Text>
          <Ionicons name="chevron-down" size={20} color="white" />
        </View>

        <View className="bg-[#1C1C1E] rounded-xl overflow-hidden">
          <TouchableOpacity className="flex-row items-center justify-between px-4 py-3">
            <View className="flex-row items-center gap-3">
              <Ionicons name="folder" size={24} color="#FFD700" />
              <Text className="text-white text-base font-medium">Notes</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Text className="text-neutral-400 text-base">1</Text>
              <Ionicons name="chevron-forward" size={18} color="#636366" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom spacing */}
      <View className="h-24" />

      {/* Bottom Search Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-black border-t border-neutral-800 px-4 py-2">
        <View className="flex-row items-center gap-3">
          <View className="flex-1 flex-row items-center bg-[#1C1C1E] rounded-xl px-3 py-2">
            <Ionicons name="search" size={18} color="#8E8E93" />
            <Text className="text-[#8E8E93] text-base ml-2">Search</Text>
            <View className="ml-auto">
              <Ionicons name="mic" size={18} color="#8E8E93" />
            </View>
          </View>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-500  items-center justify-center">
            <Ionicons name="create-outline" size={18} color="#e5e5e5" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
