import React from 'react';
import { View, Text, Image } from 'react-native';

const Pagina = () => {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Intestazione */}
      <View className="bg-[#003366] p-5 justify-center items-center">
        <Text className="text-white text-3xl font-bold">REGOLE DEL GIOCO</Text>
      </View>

      {/* Contenuto */}
      <View className="flex-1 p-5 justify-center items-center">
        <Text className="text-2xl font-bold mb-5">CHE SUONO SENTI?</Text>
        {/* Immagine al posto di "1/3" */}
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

      {/* Sfondo in basso */}
      <View className="absolute bottom-0 left-0 right-0 h-24 bg-[#003366] justify-center items-center">
        {/* Immagine sopra lo sfondo */}
        <Image
          source={require('@/assets/images/AVANTI.png')}
          className="w-30 h-10"
        />
      </View>
    </View>
  );
};

export default Pagina;
