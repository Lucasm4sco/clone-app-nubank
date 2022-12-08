import { StyleSheet, StatusBar} from "react-native";

const styles = StyleSheet.create({
    viewAccount: {
        paddingTop: StatusBar.currentHeight + 12,
        paddingBottom: 12,
        paddingHorizontal: 18,
        justifyContent: 'space-between',
        backgroundColor: '#f0f1f5'
    },
    btnClose: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 20,
    },
    containerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnAddPhoto: {
        width: 45,
        height: 45,
        backgroundColor: '#9c03fe',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    viewAccountInfo:{
        marginTop: 38,
        marginBottom: 15
    },
    textName: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: '600'
    },
    textAccountInfo: {
        fontWeight: '700',
        color: '#1d1e22'
    },
    buttonOption:{
        minHeight: 74,
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: '#f2f1f6'
    },
    viewIcon: {
        width: 32
    },
    legendIcon: {
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 16
    }
});

export default styles;