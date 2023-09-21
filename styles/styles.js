import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 1,
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    selectedButton: {
        backgroundColor: 'orange',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    result: {
        marginTop: 10,
        fontSize: 16,
        color: '#722424ff'
    },
    buttonrow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    }
});


