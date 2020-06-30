import React, { useState } from "react";
import { StyleSheet, View, Image, AsyncStorage } from "react-native";
import { Button, Input, Card } from "react-native-elements";

export default function SignUpScreen({ navigation }) {
  //Utilização de estados para controle das informações de cadastro
  const [user, setUser] = useState([
    { name: "", password: "", check_password: "" },
  ]);

  //Armazena no AsyncStorage o usuário e senha, utilizando o usuário como chave
  const saveUser = async (name, password) => {
    try {
      await AsyncStorage.setItem(
        name,
        JSON.stringify({ name: name, password: password })
      );
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
        <Input
          secureTextEntry
          placeholder="Confirme sua senha"
          onChangeText={(check_password) =>
            setUser((prevUser) => {
              return { ...prevUser, check_password: check_password };
            })
          }
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="Cadastrar"
          onPress={() => {
            if (
              user.name &&
              user.password &&
              user.check_password &&
              user.password == user.check_password
            ) {
              saveUser(user.name, user.password);
              alert("Cadastrado com sucesso");
              navigation.navigate("Login");
            } else alert("Cheque suas credenciais");
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
