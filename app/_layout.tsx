import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const RootLayout = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack>
                <Stack.Screen 
                  name="index"
                  options={{ title: "Home", headerShown: false }}
                />
                <Stack.Screen 
                  name="transfer"
                  options={{ title: "Transfer" }}
                />
                <Stack.Screen 
                  name="scan"
                  options={{ title: "Scan" }}
                />
                <Stack.Screen 
                  name="fxrate"
                  options={{ title: "Exchange Rate" }}
                />
                <Stack.Screen 
                  name="history"
                  options={{ title: "History" }}
                />
            </Stack>
        </QueryClientProvider>
    );
}

export default RootLayout;