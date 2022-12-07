import { ScrollView, View, Text, TouchableHighlight } from "react-native";
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useContext } from "react";
import { ValueContext } from "../../hooks/HookUseContext";
import Header from "../../components/Header";
import styles from "./style";

const InvestmentOptionsScreen = ({route}) => {

  const { user } = route.params;
  const { showValues } = useContext(ValueContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={[
          styles.contentOptions, 
          styles.borderStyle
        ]}
        >
        <Text style={styles.title}>Acompanhe seu dinheiro</Text>
        <TouchableHighlight
          onPress={() => {}} 
          underlayColor='#a8a8aa'
          style={styles.buttonOption}
        >
          <>
            <View style={styles.viewIcon}>
              <Feather name="inbox" size={24} color="#020206" style={styles.icon}/>
              <Text style={styles.legendIcon}>Caixinhas</Text>
            </View>
            <Text style={styles.highlightText}>Conhecer</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {}} 
          underlayColor='#a8a8aa'
          style={styles.buttonOption}
        >
          <>
            <View style={styles.viewIcon}>
              <MaterialCommunityIcons name="finance" size={24} color="#020206" style={styles.icon} />
              <Text style={styles.legendIcon}>Investimentos</Text>
            </View>
            <Text style={styles.infoMoney}>R$ { showValues ? user.finances.moneyInvested.replace('.', ',') : '••••' }</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {}} 
          underlayColor='#a8a8aa'
          style={styles.buttonOption}
        >
          <>
            <View style={styles.viewIcon}>
              <FontAwesome name="bitcoin" size={24} color="#020206" style={styles.icon} />
              <Text style={styles.legendIcon}>Cripto</Text>
            </View>
            <Text style={styles.infoMoney}>R$ { showValues ? user.finances.cryptoMoney.replace('.', ',') : '••••' }</Text>
          </>
        </TouchableHighlight>
      </View>
      <View style={styles.contentOptions}>
        <Text style={styles.title}>Seguros</Text>
        <TouchableHighlight
          onPress={() => {}} 
          underlayColor='#a8a8aa'
          style={styles.buttonOption}
        >
          <>
            <View style={styles.viewIcon}>
              <FontAwesome name="heart-o" size={24} color="#020206" style={styles.icon}/>
              <Text style={styles.legendIcon}>Seguro vida</Text>
            </View>
            <Text style={styles.highlightText}>Conhecer</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {}} 
          underlayColor='#a8a8aa'
          style={styles.buttonOption}
        >
          <>
            <View style={styles.viewIcon}>
              <Feather name="smartphone" size={27} color="#020206" style={styles.icon}/>
              <Text style={styles.legendIcon}>Seguro Celular</Text>
            </View>
            <Text style={styles.highlightText}>Conhecer</Text>
          </>
        </TouchableHighlight>
      </View>
    </ScrollView>
  )
}

export default InvestmentOptionsScreen;