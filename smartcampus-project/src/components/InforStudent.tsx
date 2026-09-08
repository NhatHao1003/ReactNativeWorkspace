import { StyleSheet, View, Text } from "react-native";

export function InforStudent(){
    return (
        <View style = {styles.container}>
            <Text style = {[styles.text,
                 {fontSize : 15, fontWeight : 'bold',color : '#1C2434'}]}
                 >Thông tin sinh viên</Text>
            <Text style = {styles.text}>Email: nhathao@gmail.com</Text>
            <Text style = {styles.text}>Lớp: DHKTPM19B</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginHorizontal : 10,
        width : '80%',
        height : 120,
        borderWidth : 1,
        borderColor : '#E2E4E8',
        backgroundColor : '#eef5fc',
        borderRadius : 10
    },
    text : {
        paddingLeft : 10,
        paddingTop : 10

    }
})