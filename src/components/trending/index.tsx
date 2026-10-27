import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { CardHorizontalFood } from "./food";


export interface FoodProps{
    id: string;
    name: string;
    price:number;
    time:string;
    delivery:number;
    rating:number;
    image:string;
    restarurantId:string;
}

export function TrendingFoods() {
    const [foods, setFoods] = useState <FoodProps[]>([])

    useEffect(() => {
        async function getFoods(){
            const reponse = await fetch("http://10.23.45.23:3000/foods")
            const data = await reponse.json()
            console.log(data);
            setFoods(data);
        }

        getFoods();
    },[])

    return(
        <FlatList
        data={foods}
        renderItem={({ item }) => <CardHorizontalFood food={item}/>}
        horizontal={true}
        contentContainerStyle={{gap: 16, paddingRight: 16}}
        showsVerticalScrollIndicator={false}
        />
    );
}