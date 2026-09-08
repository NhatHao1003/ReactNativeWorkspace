import React, { useReducer } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

type FormState = {
  email: string;
  password: string;
  error: string;
};


type FormAction =
  | {
      type: 'SET_EMAIL';
      payload: string;
    }
  | {
      type: 'SET_PASSWORD';
      payload: string;
    }
  | {
      type: 'SET_ERROR';
      payload: string;
    }
  | {
      type: 'RESET';
    };


const initialState: FormState = {
  email: '',
  password: '',
  error: '',
};



function formReducer(
  state: FormState,
  action: FormAction
): FormState {
  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
        error: '',
      };

    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
        error: '',
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}



export default function LoginScreen() {
  const [state, dispatch] = useReducer(
    formReducer,
    initialState
  );



  const handleLogin = () => {
    if (!state.email || !state.password) {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Vui lòng nhập đầy đủ thông tin',
      });

      return;
    }

  
    dispatch({
      type: 'SET_ERROR',
      payload: '',
    });

    console.log('Email:', state.email);
    console.log('Password:', state.password);
  };



  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Đăng nhập
      </Text>

      {/* Email */}

      <TextInput
        style={styles.input}
        value={state.email}
        onChangeText={(text) => {
          dispatch({
            type: 'SET_EMAIL',
            payload: text,
          });
        }}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password */}

      <TextInput
        style={styles.input}
        value={state.password}
        onChangeText={(text) => {
          dispatch({
            type: 'SET_PASSWORD',
            payload: text,
          });
        }}
        placeholder="Mật khẩu"
        secureTextEntry
      />

      {/* Error */}

      {state.error ? (
        <Text style={styles.error}>
          {state.error}
        </Text>
      ) : null}

      {/* Login */}

      <Button
        title="Đăng nhập"
        onPress={handleLogin}
      />

      <View style={styles.spacing} />

      {/* Reset */}

      <Button
        title="Đặt lại"
        onPress={() => {
          dispatch({
            type: 'RESET',
          });
        }}
      />

    </View>
  );
}

/* =========================
   8. Style
========================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 15,
  },

  spacing: {
    height: 10,
  },
});
