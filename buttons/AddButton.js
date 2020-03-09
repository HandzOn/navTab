import React from 'react'
import { View, StyleSheet } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

export default function AddButton() {
        return (
            <View style={styles.button}>
                <FontAwesome5 
                    name="plus" 
                    size={24} 
                    color="#FFF" 
                />
            </View>
        )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#7F58FF",
        //position: "absolute",
        marginTop: -30,
        shadowColor: "#7F58FF",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFFFFF"
    }
})
