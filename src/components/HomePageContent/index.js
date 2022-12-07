import { View, TouchableHighlight, Text, ScrollView, Image } from "react-native";
import { useContext } from "react";
import { ValueContext } from "../../hooks/HookUseContext";
import { Entypo, Octicons, Foundation } from '@expo/vector-icons'; 
import listIcons from "./listIcons";
import listCards from "./listCards";
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
                        <Text style={styles.titleButton}>Conta</Text>
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
                    style={styles.buttonCard}
                >   
                    <>
                        <Octicons name="credit-card" size={24} color="#020206" style={styles.iconCard}/>
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
                    <Text  style={styles.textMessage}>
                        Do trabalho até o show da sua vida: <Text style={styles.highlightText}>Nubank Celular Seguro</Text>
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {}} 
                    underlayColor='#a8a8aa'
                    style={styles.boxMessage}
                > 
                    <Text  style={styles.textMessage}>
                        Concorra a prêmios com o Nubank Vida a partir de R$4/...
                    </Text>
                </TouchableHighlight>
                    
                <TouchableHighlight
                    onPress={() => {}} 
                    underlayColor='#a8a8aa'
                    style={styles.boxMessage}
                > 
                    <Text style={styles.textMessage}>
                        <Text style={styles.highlightText}>Convide amigos para o Nubank </Text> 
                        e desbloqueie brasões incríveis.
                    </Text>
                </TouchableHighlight>
            </ScrollView>
            <TouchableHighlight
                style={styles.buttonCredCard}
                underlayColor='gainsboro'
                onPress={() => {}}
            >
                <>
                    <View>
                        <Text style={styles.titleButton}>Cartão de crédito</Text>
                        <Text style={styles.subtitleButton}>Fatural atual</Text>
                        <Text style={styles.moneyValue}>R$ 0,00</Text>
                        <Text style={styles.subtitleButton}>Limite disponível de R$ {user.finances.creditLimit},00</Text>
                        <TouchableHighlight
                            onPress={() => {}} 
                            underlayColor='#a8a8aa'
                            style={styles.buttonInstallments}
                        >
                            <Text style={styles.textInstallments}>Parcelar compras</Text>
                        </TouchableHighlight>
                    </View>
                    <Entypo name="chevron-small-right" size={24} color="#76797f" />
                </>
            </TouchableHighlight>
            <View style={styles.viewPaymentAssistant}>
                <Text style={styles.titleButton}>Acompanhe também</Text>
                <TouchableHighlight
                    onPress={() => {}} 
                    underlayColor='#a8a8aa'
                    style={styles.buttonCard}
                >   
                    <>
                        <Foundation name="dollar" size={24} color="#020206" style={styles.iconCard} />
                        <Text style={{...styles.legendIcon, textAlign: 'left'}}>Assistente de pagamentos</Text>
                    </>
                </TouchableHighlight>
            </View>
            <TouchableHighlight
                style={styles.viewButtonLoan}
                underlayColor='gainsboro'
                onPress={() => {}}
            >
                <>
                    <View>
                        <Text style={styles.titleButton}>Empréstimo</Text>
                        <Text style={styles.textLoan}>
                            Crie um aviso para saber quando um empréstimo ficar disponível
                        </Text>
                    </View>
                    <Entypo name="chevron-small-right" size={24} color="#76797f" />
                </>
            </TouchableHighlight>
            <View style={styles.viewFindOutMore}>
                <Text style={styles.titleButton}>
                    Descubra mais
                </Text>
            </View>
            <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listCards}
                >
                    {listCards.map((card, i) => (
                        <TouchableHighlight 
                            key={i} 
                            style={styles.viewBox}
                            onPress={() => {}} 
                            underlayColor='#a8a8aa'
                        >
                            <>
                                <Image 
                                    source={card.image} 
                                    style={styles.boxImage}
                                />
                                <Text style={styles.boxTitle}>{card.titleCard}</Text>
                                <Text 
                                    style={styles.boxText}
                                >
                                    {card.textCard}
                                </Text>
                                <View style={styles.boxButton}>
                                    <Text style={styles.boxTextButton}>{card.textButtonCard}</Text>
                                </View>
                            </>
                        </TouchableHighlight>
                    ))}
            </ScrollView>
        </>
    )
}

export default HomePageContent;