import {Banner} from "../components/banner";
import { Header } from "../components/header";
import { Search } from "../components/search";
import {Section} from "../components/section";
import  Constants  from "expo-constants";
import { Text, View, ScrollView } from "react-native";
import {TrendingFoods} from "../components/trending/index"
import {Restaurantes} from "../components/restaurantes";
import { RestaurantVerticalList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
    style={{flex: 1}} 
    className=" bg-slate-200"
    showsVerticalScrollIndicator={false}>

      <View className="w-full px-4 " style={{marginTop: statusBarHeight + 8}}>
        <Header/>
        <Banner/>
        <Search/>
        <Section
        name="Comidas em altas"
        label="Veja mais"
        action={() => console.log("Clicou pora")}
        size="text-2xl"
        />
        <TrendingFoods/>
        <Section
        name="Restaurantes famosos"
        label="mais"
        action={() => console.log("Clicou pora")}
        size="text-xl"
        />
        <Restaurantes/>
        <Section
        name="Lista dos famosos"
        label="veja mais"
        action={() => console.log("Clicou pora")}
        size="text-xl"
        />

        <RestaurantVerticalList/>
        
      </View>
    </ScrollView>
  );
}
