import React, { useState } from "react";
import { StyleSheet, View, Image, AsyncStorage } from "react-native";
import { Button, Input, Card } from "react-native-elements";

export default function LoginScreen({ navigation }) {
  //Utilização de estados para controle das informações de login
  const [user, setUser] = useState([{ name: "", password: "" }]);

  //Retorna se o login utilizado existe no AsyncStorage e redireciona pra Home ou de volta pro Login
  const checkUser = async (name, password) => {
    try {
      let retrievedItem = await AsyncStorage.getItem(name);
      if (retrievedItem) {
        const userLogin = JSON.parse(retrievedItem);
        if (userLogin.password == password) return true;
        else {
          alert("Cheque suas credenciais");
          navigation.navigate("Login");
        }
      } else {
        alert("Usuário não encontrado");
        navigation.navigate("Login");
      }
    } catch (error) {
      // Error saving data
    }
  };

  return (
    <View style={{ paddingVertical: 20, backgroundColor: "#3FD8B4", flex: 1 }}>
      <View style={styles.logo}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 200, height: 90 }}
        />
      </View>

      <Card>
        <Input
          placeholder="Usuário"
          onChangeText={(name) =>
            setUser((prevUser) => {
              return { ...prevUser, name: name };
            })
          }
        />
        <Input
          secureTextEntry
          placeholder="Senha"
          onChangeText={(password) =>
            setUser((prevUser) => {
              return { ...prevUser, password: password };
            })
          }
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="Entrar"
          onPress={() => {
            const res = checkUser(user.name, user.password);
            if (res) {
              navigation.navigate("Home");
            } else {
              navigation.navigate("Login");
              alert("Cheque suas credenciais");
            }
          }}
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="Cadastre-se"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        />
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
