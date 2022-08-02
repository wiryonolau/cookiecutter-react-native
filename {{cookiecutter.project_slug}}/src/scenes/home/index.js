import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    const [txt, setTxt] = React.useState(null);

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home Screen</Text>
            <TextInput
                onChangeText={(val) => setTxt(val)}
                placeholder="type anything you want here ..."
                style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "gray",
                    marginVertical: 5,
                    padding: 10,
                }}
            />
            <Button
                title="Go to Details"
                onPress={() =>
                    navigation.navigate("Details", {
                        itemId: 99,
                        otherParam: txt,
                    })
                }
            />
        </View>
    );
};

export default HomeScreen;
