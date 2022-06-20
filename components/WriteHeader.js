import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import TransparentCicleButton from "./TransparentCircleButton";

function WriteHeader({ onSave }) {
    const navigation = useNavigation();
    const onGoBack = () => {
        navigation.pop();
    };

    return (
        <View style={styles.block}>
            <View style={styles.iconButtonWrapper}>
                <TransparentCicleButton
                    onPress={onGoBack}
                    name="arrow-back"
                    color="#424242"
                />
            </View>
            <View style={styles.buttons}>
                <TransparentCicleButton
                    name="delete-forever"
                    color="#ef5350"
                    hasMarginRight
                />

                <TransparentCicleButton
                    name="check"
                    color="#009688"
                    onPress={onSave}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 48,
        paddingHorizontal: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconButtonWrapper: {
        width: 32,
        height: 32,
        borderRadius: 16,
        overflow: "hidden",
    },
    iconButton: {
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    buttons: {
        flexDirection: "row",
        alighItems: "center",
    },
    marginRight: {
        marginRight: 8,
    },
});

export default WriteHeader;
