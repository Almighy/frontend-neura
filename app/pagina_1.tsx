import Background from '@/components/Background';
import React from 'react';
import { View, Text, Image } from 'react-native';

const Pagina = () => {
  return (
    <Background className="-z-10">
        <View className="flex-1 z-10">
    
        <View className=" p-5 justify-center items-center">
            <Text className="text-white text-7xl font-bold">REGOLE DEL GIOCO</Text>
        </View>


        <View className="flex-1 p-5 justify-center items-center">
            <Text className="text-5xl font-bold mb-5">CHE SUONO SENTI?</Text>
           
            <Image
            source={require('@/assets/images/1_3.png')} // Sostituisci con il percorso corretto dell'immagine
            className="w-12 h-12 mb-5"
            />
            <Text className="text-base text-center text-blue-500">
            INDOVINA IL VERSO DELL'ANIMALE{'\n'}
            IL SUONO SI RIPETERÀ OGNI 15 SECONDI{'\n'}
            FINCHÉ IL TEMPO FINIRÀ O NON RISPONDERAI{'\n\n'}
            FAI ATTENZIONE AL TEMPO!
            </Text>
        </View>

                                                       
<View className="absolute bottom-10 left-0 right-0 h-24 justify-center items-center">
  
    <Image
        source={require('@/assets/images/AVANTI.png')}
        className="w-30 h-500"
    />
</View>
        </View>
    </Background>
  );
};

export default Pagina;
