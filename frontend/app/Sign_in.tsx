import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Signing in with", email, password);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 justify-center items-center bg-gray-100 p-4">
          <Text className="text-3xl font-bold text-gray-900 mb-6">Sign In</Text>

          <TextInput
            className="w-full bg-white p-3 rounded-lg border border-gray-300 mb-4"
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            className="w-full bg-white p-3 rounded-lg border border-gray-300 mb-4"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            className="w-full bg-blue-500 p-3 rounded-lg mt-2"
            onPress={handleSignIn}
          >
            <Text className="text-white text-center text-lg font-semibold">Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity className="mt-4" onPress={() => console.log("Navigate to Sign Up")}>
            <Text className="text-blue-500">Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
