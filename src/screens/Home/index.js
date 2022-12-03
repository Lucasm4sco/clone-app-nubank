import { View, Text } from "react-native";

const HomeScreen = ({route}) => {
    const user = route.params;
    
    return(
        <View>
            <Text>{JSON.stringify(user)}</Text>
        </View>
    )
};

export default HomeScreen;