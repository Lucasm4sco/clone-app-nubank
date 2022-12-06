import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    viewName: {
        backgroundColor: '#820ad1',
        paddingTop: 14,
        paddingHorizontal: 20,
        paddingBottom: 22
    },
    textName: {
        fontSize: 19,
        color: '#fff',
        fontWeight: '500'
    },
    moneyContainer: {
        paddingTop: 25,
        paddingBottom: 20,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoMoney: {
        fontSize: 18,
        fontWeight: '600'
    },
    moneyValue: {
        paddingTop: 17,
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        color: '#1c1c1c'
    },
    listIcons: {
        paddingHorizontal: 25,
        paddingTop: 10,
    },
    viewButtonIcon: {
        width: 75,
        alignItems: 'center',
        marginRight: 8
    },
    buttonIcon: {
        height: 72,
        width: 72,
        borderRadius: 41,
        backgroundColor: '#f0f1f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    legendIcon: {
        paddingVertical: 10,
        textAlign: 'center',
        fontWeight: '600'
    },
    viewMyCard: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15
    },
    buttonMyCard: {
        width: '90%',
        maxWidth: 380,
        minHeight: 55,
        borderRadius: 10,
        backgroundColor: '#f0f1f5',
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconMyCard: {
        paddingHorizontal: 20
    },
    boxMessage: {
        backgroundColor: '#f0f1f5',
        minHeight: 80,
    }
});

export default styles;