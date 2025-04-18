import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Background from "@/components/Background";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {

    return (
        <Background className="flex flex-1 flex-col align-center h-screen -z-10">

            <View className="flex flex-col z-10 mx-10 text-white">
                {/* Title */}
                <View className="flex flex-col justify-center items-left mt-16 mb-10">
                    <View className="gap-y-2">
                        <Text className="text-4xl font-normal tracking-wide uppercase text-white">Crea il tuo account su</Text>
                        <Text className="text-6xl font-extrabold tracking-widest uppercase text-white">Neura</Text>
                    </View>
                </View>

                {/* Sign-in fields */}
                <View className="flex flex-col justify-center items-left my-8 gap-y-3.5">

                    <View>
                        <Text className="text-3xl font-normal tracking-wide uppercase mx-2 text-white">Registrati</Text>
                    </View>

                    <View className="border rounded-xl bg-neutral-100 px-3 ">
                        <TextInput placeholder="email" placeholderTextColor="#6b7280">
                        </TextInput>
                    </View>

                    <View className="border rounded-xl bg-neutral-100 px-3 ">
                        <TextInput placeholder="password" placeholderTextColor="#6b7280">
                        </TextInput>
                    </View>

                    <View className="border rounded-xl bg-neutral-100 px-3">
                        <TextInput placeholder="conferma password" placeholderTextColor="#6b7280">
                        </TextInput>
                    </View>

                    <CustomButton title="Registrati" className="bg-black" textStyle="text-white tracking-widest"/>

                </View>

            </View>
        </Background>
    )
}
export default SignIn;