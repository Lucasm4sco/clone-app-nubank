import { ScrollView, View, Text, TouchableHighlight } from "react-native";
import { useContext } from "react";
import { ValueContext } from "../../hooks/HookUseContext";
import { Entypo } from '@expo/vector-icons'; 
import styles from "./style";

const HomeScreen = ({route}) => {

    const { user } = route.params;
    const { showValues } = useContext(ValueContext);

    return(
        <ScrollView style={styles.container} >
            <View style={styles.viewName}>
                <Text style={styles.textName}>Olá, {user.name.firstName}</Text>
            </View>
            <TouchableHighlight
                style={styles.moneyContainer}
                underlayColor='gainsboro'
                onPress={() => {}}
            >
                <>
                    <View style={styles.moneyView}>
                        <Text style={styles.infoMoney}>Conta</Text>
                        <Text style={styles.moneyValue}>
                            { showValues ? `R$ ${user.finances.currentMoney}` : '●●●●' }
                        </Text>
                    </View>
                    <Entypo name="chevron-small-right" size={24} color="#76797f" />
                </>                
            </TouchableHighlight>
        </ScrollView>
    )
};

export default HomeScreen;