import {  View, TouchableHighlight } from "react-native";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useContext } from "react";
import { ValueContext } from "../../hooks/HookUseContext";
import styles from "./style";

const Header = ({navigation}) => {
    
    const { showValues, handleState } = useContext(ValueContext);

    return(
    <View style={styles.containerHeader}>
        <TouchableHighlight 
            style={styles.buttonNavigate}
            activeOpacity={1}
            underlayColor="#61079d"
            onPress={() => navigation.navigate('Settings')}
        >
            <MaterialIcons name="add-photo-alternate" size={27} color="white" />
        </TouchableHighlight>
        <View style={styles.viewButtons}>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={1}
                underlayColor="#61079d"
                onPress={handleState}
                >
                <Ionicons name={ showValues ? "md-eye" : "md-eye-off" } size={24} color="white" />
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={1}
                underlayColor="#61079d"
                onPress={() => alert('Rota vazia')}
            >
                <MaterialIcons name="help-outline" size={24} color="white" />
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={1}
                underlayColor="#61079d"
                onPress={() => alert('Rota vazia')}
            >
                <Ionicons name="people-outline" size={24} color="white" />
            </TouchableHighlight>
        </View>
    </View>
    )
};

export default Header;