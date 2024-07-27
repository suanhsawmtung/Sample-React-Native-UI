import { Text, View, StyleSheet } from "react-native";

const BalanceCard = () => {
    return (
        <View style={styles.banner} >
            <Text style={styles.textLabel} >Balance</Text>
            <View style={styles.balance} >
                <Text style={styles.textLabel}>$</Text>
                <Text style={styles.textAmount}>12,543.74</Text>
            </View>
            <View style={styles.balanceGrowth}>
                <Text style={styles.textGrowth}>+520 Today</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        padding: 30,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: "#6d25e5",
    },
    balance: {
        marginTop: 12,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    balanceGrowth: {
        alignItems: "flex-end",
        paddingTop: 10,
    },
    textLabel: {
        fontWeight: "bold",
        color: "#aaa",
    },
    textAmount: {
        fontWeight: "bold",
        fontSize: 40,
        color: "#fff",
    },
    textGrowth: {
        color: "#6f6",
    }
});

export default BalanceCard;