import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Sortear' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    border:'solid' ,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom:20,
    marginLeft:100,
    marginRight:100,
    borderRadius: 4,
    elevation: 100,
    backgroundColor: '#FBF1CD',
    opacity: 0.5
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight:'bold',
    letterSpacing: 0.25,
    color: '#000000',
    
    //teste
    
  },
});