import React, { useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Button, ScrollView } from "react-native";
// import { WebView } from "react-native-webview";
import { WebView } from 'react-native-webview';
import styles from './HomePage.style';

const HomePage = () => {
  const [serverAdress, setServerAdress] = useState('')

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>

        {
          data.map((item, i) => {
            return <CustomCard
              key={i}
              properties={item}
              onchan={(item) => setServerAdress(item)}
              sa={serverAdress} />
          })
        }

      </ScrollView>

      <Button title="save" onPress={() => console.log(serverAdress)}></Button>

    </SafeAreaView>
  )
}

export default HomePage;


const data = [
  {
    id: 0,
    serverName: 'Türker',
    serverAdress: 'Tunalı',
    userName: 'admin',
    password: '0000',
  },
  {
    id: 1,
    serverName: 'Baran',
    serverAdress: 'soyadı',
    userName: 'ka',
    password: 'pass',
  },
  {
    id: 2,
    serverName: 'Şuayip',
    serverAdress: 'Işık',
    userName: 'user',
    password: '1234',
  },
  {
    id: 3,
    serverName: '',
    serverName: '',
    password: '',
  }
];


const CustomCard = ({ properties, onchan, sa }) => {
  return (
    <TouchableOpacity style={{ margin: '5%', borderRadius: 5, borderWidth: 1, padding: 10 }}>

      <View>
        <Text style={styles.text}>ServerName: {properties.serverName}</Text>

        <TextInput
          style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 5 }}
          value={sa}
          onChangeText={onchan}
          placeholder={'Server'}
        />

        <Text style={styles.text}>UserName: {properties.userName}</Text>
        <Text style={styles.text}>Password: {properties.password}</Text>
      </View>

    </TouchableOpacity>
  )
}