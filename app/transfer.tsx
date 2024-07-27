import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useRef } from "react";

const Transfer = () => {
    const toInput = useRef<any>();
    const amountInput = useRef<any>();
    const noteInput = useRef<any>();

    const [available, setAvailable] = useState("12,543.74");
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");

    return (
        <View style={styles.container} >
            <TextInput 
                style={styles.input}
                placeholder="To"
                ref={toInput}
                value={to}
                onChangeText={setTo}
            />

            <TextInput
                style={styles.input}
                placeholder="Amount"
                ref={amountInput}
                value={amount}
                onChangeText={setAmount}
            />

            <TouchableOpacity
                style={styles.inputDes}
                onPress={() => setAmount(available)
            }>
                <Text>Balance: </Text>
                <Text style={styles.balance}>{available}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 15,
        padding: 20,
        marginTop: 10,
    },
    input: {
        flexGrow: 1,
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    inputDes: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    balance: {
        color: "#0e9ce2",
        textDecorationLine: "underline",
    },
    button: {
        marginTop: 20,
        alignItems: "center",
        padding: 15,
        backgroundColor: "#6d25e5",
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        color: "white",
    },
});

export default Transfer;
   