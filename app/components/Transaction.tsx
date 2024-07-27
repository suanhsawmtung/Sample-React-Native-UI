import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const Transaction = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, msg: "EPC Bill", type: "out", time: "Jul 6, 2024" },
        { id: 2, msg: "Deposit", type: "in", time: "Jul 5, 2024" },
        { id: 3, msg: "Transfer", type: "in", time: "Jul 5, 2024" },
        { id: 4, msg: "Wifi Bill", type: "out", time: "Jul 4, 2024" },
        { id: 5, msg: "Payment", type: "in", time: "Jul 4, 2024" },
    ]); 

    return (
        <ScrollView>
            { transactions.map(transaction => (
                <View
                    style={styles.transaction}
                    key={transaction.id}
                >
                    <MaterialIcons
                        name="compare-arrows"
                        size={32}
                        color={
                            transaction.type === "in" ? "green" : "brown"
                        }
                    />
                    <View>
                        <Text style={styles.textPayment}>
                            {transaction.msg}
                        </Text>
                        <Text style={styles.textMuted}>
                            {transaction.time}
                        </Text>
                    </View>
                </View>
               
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    transaction: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
    },
    textPayment: {
        fontSize: 21,  
    },
    textMuted: {
        color: "#888",
    },
});

export default Transaction;