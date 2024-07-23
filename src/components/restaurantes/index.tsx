import { FlatList } from 'react-native';
import {useEffect, useState} from 'react'
import { RestaurantItem } from './horizontal';

export interface RestaurantesProps{
    id: string;
    name: string;
    image: string;
}

export  function Restaurantes() {
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
    <FlatList
   data={restaurantes}
   renderItem={({item})=> <RestaurantItem item={item}/>}
   horizontal={true}
   contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
   showsHorizontalScrollIndicator={false}
   />
  );
}