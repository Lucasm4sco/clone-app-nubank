import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        backgroundColor: '#fff',
    },
    contentOptions: {  
        paddingTop: 25,
    },
    borderStyle: {
        borderBottomWidth: 2,
        borderColor: '#f4f4f6',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 30,
        marginBottom: 12,
    },
    buttonOption: {
        width: '90%',
        maxWidth: 380,
        minHeight: 55,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#f0f1f5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    viewIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        paddingHorizontal: 20
    },
    legendIcon: {
        paddingVertical: 10,
        fontWeight: '600'
    },
    highlightText: {
        marginRight: 20,
        color: '#7e27b5',
        fontWeight: '600'
    },
    infoMoney: {
        marginRight: 20,
        fontFamily: 'Poppins_600SemiBold',
        color: '#1c1c1c'
    }
});

export default styles;