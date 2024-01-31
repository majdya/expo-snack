import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert("Pressed")}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        hight: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3
    },
    button: {
        borderRadios: 10,
        width: '100%',
        hight: '100%',
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row'
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16
    }
});