import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export function SearchField(){
    const [keyword, setKeyword] = useState("");

    return (
        <View style = {styles.container}>
            <TextInput style = {styles.input}
            value={keyword}
            onChangeText={setKeyword}
            placeholder="Tìm kiếm thông tin...."
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginHorizontal : 8,
        width : '80%',
        height : 100
    },
    input : {
        height : 50,
        width : '100%',
        backgroundColor : '#F5F6F8',
        borderWidth : 1,
        borderRadius : 10,
        borderColor : '#E2E4E8',
        paddingHorizontal : 10,
        color : '#1C2434'
    }
})