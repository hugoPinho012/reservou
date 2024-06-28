import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const handleOnPress = () => {
    console.log("catchau");

    router.push("/reserve");
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}
      contentContainerStyle={defaultStyles.container}
    >
      <View style={{ flexGrow: 1, paddingTop: 40 }} />

      <View style={{ flexGrow: 1, paddingTop: 30 }}>
        <View style={{ flexGrow: 1 }}>
          <View style={{ marginLeft: -10 }}>
            <Text style={defaultStyles.textTitle}>Login</Text>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-circle-outline"
              size={16}
              color={Colors.gray}
            />
            <TextInput //
              style={styles.textInput}
              placeholder="Usuário"
              placeholderTextColor={Colors.gray}
            />
          </View>
          <View style={[styles.inputContainer, { marginTop: 10 }]}>
            <Ionicons name="lock-closed" size={16} color={Colors.gray} />
            <TextInput //
              style={styles.textInput}
              placeholder="Senha"
              placeholderTextColor={Colors.gray}
            />
          </View>

          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity style={{ padding: 15, paddingRight: 0 }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: "500",
                  textDecorationLine: "underline",
                }}
              >
                Redefinir senha
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View // Login button container
          style={{
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <Button text={"Entrar"} handleOnPress={handleOnPress} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

  inputContainer: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: Colors.lightGray,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  textInput: {
    flexGrow: 1,
    paddingVertical: 25,
    fontSize: 16,
    paddingLeft: 8,
  },
});
