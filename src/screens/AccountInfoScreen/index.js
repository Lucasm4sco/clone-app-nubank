import { ScrollView, View, TouchableHighlight, Text } from "react-native";
import { AntDesign, MaterialIcons,Entypo } from '@expo/vector-icons'; 
import listIcons from "./listIcons";
import styles from "./style";

const AccountInfoScrenn = ({route, navigation}) => {
    const { user } = route.params;

    return(
        <ScrollView style={{
            backgroundColor: '#fff'
        }}>
            <View style={styles.viewAccount}>
                <TouchableHighlight
                    style={styles.btnClose}
                    underlayColor='#d9dadf'
                    onPress={() => navigation.navigate('Home')}
                >
                    <AntDesign name="close" size={24} color="#797885" />
                </TouchableHighlight>
                <View style={styles.containerRow}>
                    <TouchableHighlight 
                        style={styles.btnAddPhoto}
                        activeOpacity={1}
                        underlayColor="#61079d"
                        onPress={() => {}}
                    >
                        <MaterialIcons name="add-photo-alternate" size={27} color="white" />
                    </TouchableHighlight>
                    <Text style={styles.textName}>{user.name.firstName}</Text>
                </View>
                <View style={styles.viewAccountInfo}>
                    <Text style={styles.textAccountInfo}>
                        Agência {user.finances.account.numberAgency} ● Conta {user.finances.account.numberAccount}
                    </Text>
                    <Text style={styles.textAccountInfo}>
                        Banco {user.finances.account.numberBank} ● Nu Pagamentos S.A. - Instituição de Pagamento
                    </Text>
                </View>
            </View>
            <View style={styles.viewMoreOptions}>
                {listIcons.map((icon, i) => (
                    <TouchableHighlight
                        key={i}
                        onPress={() => {}}
                        underlayColor='#f0f1f5'
                        style={styles.buttonOption}
                    >
                        <>
                            <View style={styles.containerRow}>
                                <View style={styles.viewIcon}>
                                    {icon.icon}
                                </View>
                                <Text style={styles.legendIcon}>
                                {icon.legend}
                                </Text>
                            </View>
                            <Entypo name="chevron-small-right" size={24} color="#76797f" />
                        </>
                    </TouchableHighlight>
                ))}
            </View>
        </ScrollView>
    )
}

export default AccountInfoScrenn;
