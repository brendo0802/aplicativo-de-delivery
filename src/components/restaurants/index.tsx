import { FlatList, View, Text } from "react-native";
import { useEffect, useState } from "react";
import { RestaurantsItem } from "./horinzontal";

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
}


export function Restaurants() {
    const [ restaurants, setRestaurants ] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        async function getFoods(){
            const reponse = await fetch("http://10.23.45.23:3000/restaurants")
            const data = await reponse.json()
            console.log(data);
            setRestaurants(data);
        }

        getFoods();
    },[])

    return(
        <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantsItem item={item}/>}
        horizontal={true}
        contentContainerStyle={{gap: 16, paddingRight: 16}}
        showsVerticalScrollIndicator={false}
        />
    );
}
