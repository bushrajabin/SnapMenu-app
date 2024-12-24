import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, TextInput, View, Text } from "react-native";

export default function index() {
    return (
        <SafeAreaView style={Styles.mainContainer}>
            <View>
                <TextInput placeholder="Menu Title" style={Styles.menuInput} />
            </View>

            {/* Preview & Save Buttons---- */}
            <View style={Styles.Buttons}>
                <TouchableOpacity>
                    <Text style={Styles.previewButton}>Preview</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={Styles.saveButton}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

// Styles---

const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
    },
    menuInput: {
      //backgroundColor:"red",
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
    },

    Buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10,
    },
    previewButton: {
        padding: 17,
        textAlign: "center",
        fontSize: 16,
        borderRadius: 40,
        width: 160,
        borderColor: "grey",
        borderWidth: 1,
    },
    saveButton: {
        backgroundColor: "black",
        color: "white",
        padding: 17,
        fontSize: 16,
        borderRadius: 40,
        width: 160,
        textAlign: "center",
    },
});
