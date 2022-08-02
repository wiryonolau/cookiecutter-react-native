import React from "react";
import { View, Text } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
    // receive param
    const { itemId, otherParam } = route.params;

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Detail Screen</Text>
            <Text>parameter passed: {JSON.stringify(itemId)}</Text>
            <Text>parameter passed: {JSON.stringify(otherParam)}</Text>
        </View>
    );
};

export default DetailsScreen;
