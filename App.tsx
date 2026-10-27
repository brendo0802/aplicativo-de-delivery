import { Text, View, ScrollView } from 'react-native';
import { Header } from '../food/src/components/header';
import Constants from 'expo-constants';
import "./src/styles/global.css";
import { Banner } from './src/components/banner';
import { Search } from './src/components/search';
import { Section } from './src/components/section';
import { TrendingFoods } from './src/components/trending';
import { Restaurants } from './src/components/restaurants';
import { RestaurantVerticalList } from './src/components/list';


const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1, backgroundColor: '#e2e8f0' }}
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full" style={{ marginTop: statusBarHeight + 15 }}>
        <Header />

        <Banner/>

        <Search/>
      </View>

      <Section
      name="Comidas em alta"
      label="Veja mais"
      action={ () => console.log("CLICOU NO VEJA MAIS")}
      size="text-2xl"
     />

      <TrendingFoods/>

      
    <Section
        name="Restaurantes"
        label="Veja todos"
        action={ () => console.log("CLICOU NO RESTAURANTES")}
        size="text-xl"
      />

      <Restaurants/>
      <Section
        name="Famosos no DevFood"
        label="Veja todos"
        action={ () => console.log("CLICOU NO FAMOSOS")}
        size="text-xl"
      />
      <RestaurantVerticalList/>

    </ScrollView>
  );
}