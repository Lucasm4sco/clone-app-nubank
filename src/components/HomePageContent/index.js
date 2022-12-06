import { View, TouchableHighlight, Text, ScrollView } from "react-native";
import { useContext } from "react";
import { ValueContext } from "../../hooks/HookUseContext";
import { Entypo, Octicons } from '@expo/vector-icons'; 
import listIcons from "./listIcons";
import styles from "./style";

const HomePageContent = ({user}) => {

    const { showValues } = useContext(ValueContext);

    return(
        <>
            <View style={styles.viewName}>
                <Text style={styles.textName}>Olá, {user.name.firstName}</Text>
            </View>
            <TouchableHighlight
                style={styles.moneyContainer}
                underlayColor='gainsboro'
                onPress={() => {}}
            >
                <>
                    <View>
                        <Text style={styles.infoMoney}>Conta</Text>
                        <Text style={styles.moneyValue}>
                            { showValues ? `R$ ${user.finances.currentMoney.replace('.', ',')}` : '●●●●' }
                        </Text>
                    </View>
                    <Entypo name="chevron-small-right" size={24} color="#76797f" />
                </>                
            </TouchableHighlight>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.listIcons}
            >
                {listIcons.map((icon, i) => (
                    <View key={i} style={styles.viewButtonIcon}>
                        <TouchableHighlight 
                            onPress={() => {}} 
                            underlayColor='#a8a8aa'
                            style={styles.buttonIcon}
                        >
                            {icon.icon}
                        </TouchableHighlight>
                        <Text style={styles.legendIcon}>{icon.legend}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.viewMyCard}>
                <TouchableHighlight
                    onPress={() => {}} 
                    underlayColor='#a8a8aa'
                    style={styles.buttonMyCard}
                >   
                    <>
                        <Octicons name="credit-card" size={24} color="#020206" style={styles.iconMyCard}/>
                        <Text style={{...styles.legendIcon, textAlign: 'left'}}>Meus Cartões</Text>
                    </>
                </TouchableHighlight>
            </View>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.listIcons}
            >
                <TouchableHighlight
                    onPress={() => {}} 
                    underlayColor='#a8a8aa'
                    style={styles.boxMessage}
                > 
                    <Text>
                        Do trabalho até o show da sua vida: <Text>Nubank Celular Seguro</Text>
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {}} 
                    underlayColor='#a8a8aa'
                    style={styles.boxMessage}
                > 
                    <Text>
                        Concorra a prêmios com o Nubank Vida a partir de R$4/...
                    </Text>
                </TouchableHighlight>
                    
                <TouchableHighlight
                    onPress={() => {}} 
                    underlayColor='#a8a8aa'
                    style={styles.boxMessage}
                > 
                    <Text>
                        <Text>Convide amigoss par ao Nubank</Text> e desbloqueie brasões incríveis.
                    </Text>
                </TouchableHighlight>
            </ScrollView>
        </>
    )
}

export default HomePageContent;