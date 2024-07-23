import { View, TextInput } from 'react-native';
import {Feather} from "@expo/vector-icons"

export  function Search() {
 return (
   <View className='w-full flex flex-row gap-2 border h-14 items-center bg-transparent rounded-full px-4'>
    <Feather name='search' size={24} color={"#64748b"}/>
    <TextInput className='w-full h-full flex-1 bg-transparent' placeholder='Procure seu lanche cussão...'/>
   </View>
  );
}