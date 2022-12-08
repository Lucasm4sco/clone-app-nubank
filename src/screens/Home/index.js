import { ScrollView } from "react-native";

import Header from "../../components/Header";
import HomePageContent from "../../components/HomePageContent";

const HomeScreen = ({route, navigation}) => {
    
    const { user } = route.params;
   
    return(
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            style={{
                backgroundColor: '#fff'
            }} 
        >
            <Header navigation={navigation} />
            <HomePageContent user={user}/>
        </ScrollView>
    )
};

export default HomeScreen;