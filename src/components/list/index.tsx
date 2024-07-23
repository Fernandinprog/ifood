import { useState, useEffect } from 'react';
import { View,  Text } from 'react-native';
import { RestaurantItem } from './item'
export interface RestaurantesProps{
    id: string;
    name: string;
    image: string;
}


export  function RestaurantVerticalList() {
    const [restaurantes, setRestaurantes] = useState<RestaurantesProps[]>([])
    useEffect(()=>{
        async function getFoods(){
            const response = await fetch("http://192.168.18.4:3000/restaurants")
            const data = await response.json()
            setRestaurantes(data)
        }
        getFoods();
    },[])
 return (
   <View className='px-4 flex-1 w-full h-full gap-4'>
    {restaurantes.map(item => (
        <RestaurantItem item={item} key={item.id}/>
    ))}
    </View>
  );
}