import { StyleSheet, StatusBar } from "react-native";


const styles = StyleSheet.create({
    containerHeader: {
        paddingTop: StatusBar.currentHeight + 12,
        paddingBottom: 12,
        paddingHorizontal: 18,
        backgroundColor: '#820ad1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonNavigate: {
        width: 50,
        height: 50,
        backgroundColor: '#9c03fe',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    viewButtons: {
        flexDirection: 'row',
    },
    button: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 10
    }
});

export default styles;