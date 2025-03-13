import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "lucide-react-native";
import images from "@/constants/images";
import axios from "axios"


export default function CameraPickerScreen() {
  const [image, setImage] = useState<string | null>(null);


  // Open camera
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Camera permission is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({ 
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log("Result: ",result)
    if (!result.canceled && result.assets?.length > 0) {
      setImage(result.assets[0].uri);
      const formData = new FormData();
      formData.append("file", {
          uri: result.assets[0].uri,
          type: result.assets[0].mimeType,
          name: result.assets[0].fileName,
      } as any);
      handleDisease(formData)
      // const uri = result.assets[0].uri
      // console.log("Image: ",uri)
      // console.log("asset: ", result.assets)
      
      // const file = {
      //   uri: result.assets[0].uri,
      //   type: result.assets[0].mimeType,  // Example: "image/jpeg"
      //   name: result.assets[0].fileName , // Ensure it has a valid name
      // };

      
      
      // console.log("Formdata: ",formData)
    }
  };

  // Select from gallery
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Gallery permission is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({ 
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets?.length > 0) {
      setImage(result.assets[0].uri);
      const formData = new FormData();
      formData.append("file", {
          uri: result.assets[0].uri,
          type: result.assets[0].mimeType,
          name: result.assets[0].fileName,
      } as any);
      handleDisease(formData)
    }  
  };

   

  const handleDisease = async(formData: any) => {
    try {
      // const response = await axios({
      //   method: 'post',
      //   url: 'http://192.168.0.102:8000/upload/',
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
        
      // });
      const response = await axios.post(
        // "http://192.168.232.196:8000/predict",
        "http://192.168.0.102:8000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      )
      // const response = await fetch(
      //   "http://192.168.0.102:8000/upload/",
      //   {
      //     method: "post",
      //     body: formData,
      //     headers: {
      //       "Content-Type": "multipart/form-data"
      //     }
      //   }
      // )
      // console.log("Response: ", await response.json())
      console.log("Response: ", response)
      console.log("Data: ", response.data)
      // for (let [key, value] of response.headers) {
      //   console.log(`${key}:`, value);
      // }
      // const data = await response.json();
      // console.log("Data : ", data);
      console.log("Upload Success");
    }catch (error) {
      console.log("Upload Error:", error);
      console.log("Upload Failed");
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-gray-900 mb-6">Capture or Select Image</Text>
      
      <View>
        {image && 
          <View className="flex flex-col gap-4 justify-center items-center"> 
            <Image source={{ uri: image }} className="w-64 h-64 rounded-lg mb-2" />
          </View>}
        
      </View>
      
      <View className="flex-row gap-2">
        <TouchableOpacity
          className="bg-blue-500 p-3 rounded-lg flex-row items-center"
          onPress={openCamera}
        >
          <Camera size={20} color="white" />
          <Text className="text-white text-lg font-semibold ml-2">Open Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-green-500 p-3 rounded-lg"
          onPress={pickImage}
        >
          <Text className="text-white text-lg font-semibold">Choose from Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
