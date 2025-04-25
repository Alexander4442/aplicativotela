import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 0.15,
        marginTop: "5%",
        width: "80%",
        marginHorizonta: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    button: {
        backgroundColor: "#000",
        height: 50,
        width:"80%",
        borderRadius: 10,
        justifyContent: "center"
    },
    text: {
        color: "#fff",
        textTransform: "uppercase",
        width: "100%",
        textAlign: "center"
    },
    newUser: {
        flexDirection: "row",
        gap: 6
    }
})