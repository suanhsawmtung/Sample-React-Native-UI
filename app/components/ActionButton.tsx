import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { router } from "expo-router";

const ActionButton = ({color, icon, label, path}: {
    color: string;
    icon?: string | any;
    label?: string;
    path: string;
}) => {
    return (
        <TouchableOpacity
            style={styles.action}
            onPress={() => router.navigate(path)}
        >
            <View
                style={[
                    styles.actionButton,
                    {backgroundColor: color ? color : "#7b48f4" }
                ]}
            >
                <MaterialIcons 
                    name={ icon ? icon : "attach-money" }
                    size={32}
                    color="white"
                />
                <Text 
                    style={styles.text}
                >
                    { label ? label : "Label" }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    action: {
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    actionButton: {
        width: 68,
        height: 68, 
        borderRadius: 68,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff"
    }
});

export default ActionButton;