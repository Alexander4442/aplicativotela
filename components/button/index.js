import { TouchableOpacity,  Text, View } from "react-native";
import { styles } from "./styles";


export function ButtonComponent({ tile }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{tile}</Text>
            </TouchableOpacity>
            <View style={styles.newUser}>
                <Text>Novo por aqui?</Text>
                <Text>Crie uma conta</Text>
            </View>
        </View>
    )
}