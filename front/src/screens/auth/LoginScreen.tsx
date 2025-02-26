import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import InputField from '../../components/InputField';
import {SafeAreaView} from 'react-native-safe-area-context';

function LoginScreen({}: LoginScreenProps) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChangeText = (name: string, text: string) => {
    setValues({
      ...values,
      [name]: text,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error={'이메일을 입력해주세요'}
          inputMode="email"
          value={values.email}
          onChangeText={text => handleChangeText('email', text)}
        />
        <InputField
          placeholder="비밀번호"
          error={'비밀번호를 입력해주세요'}
          secureTextEntry
          value={values.password}
          onChangeText={text => handleChangeText('password', text)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});

export default LoginScreen;
