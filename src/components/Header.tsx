import { Text , View, StyleSheet} from "react-native";


export function Header(){
    return (
        <View style = {styles.container}>
            <Text style ={styles.title}>SmartCampus</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : 150,
        backgroundColor : "#1E7FD7",
        textAlign : "left",
        padding : 10,

    },
    title : {
        fontSize : 30,
        fontWeight : "bold",
        color : "white",
        paddingTop : 50,
    }
})