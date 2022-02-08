import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Vibration} from 'react-native';
import {useState} from 'react';

export default function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  const buttons = ['C', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']

  function calculator() {

    let lastArr = currentNumber[currentNumber.length-1];

    if(lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.') {
      setCurrentNumber(currentNumber)
      return
    }
    else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result)
      return
    }
  }

  function handleInput(buttonPressed) {
      console.log(buttonPressed)

    setCurrentNumber(currentNumber + buttonPressed)
    //   if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/') {
    //     setCurrentNumber(currentNumber + buttonPressed)
    //     return
    //   }

    //   else if (
    //       buttonPressed === 7 || buttonPressed === 8 || buttonPressed === 9
    //       || buttonPressed === 4 || buttonPressed === 5 || buttonPressed === 6
    //       || buttonPressed === 1 || buttonPressed === 2 || buttonPressed === 3
    //       || buttonPressed === 0 || buttonPressed === '.') {
        // }

    switch(buttonPressed) {
      case 'DEL':
          setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
          return
      case 'C':
        setLastNumber('')
        setCurrentNumber('')
        return
      case '=':
        setLastNumber(currentNumber + '=')
        calculator()
        return
    }
  }

  const styles = StyleSheet.create({
    results: {
      backgroundColor: '#333333',
      maxWidth: '100%',
      minHeight: '34%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      maxHeight: 45,
      color: '#fff',
      margin: 15,
      fontSize: 35,
      fontWeight: 'bold'
    },
    historyText: {
      color: '#7c7c7c',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    buttons: {
      width: '100%',
      height: '35%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
    //   borderColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '24%',
        minHeight: '55%',
        flex: 2,
        backgroundColor: "#333333",
        // borderRadius: 10,
        // margin: 1
    },
    textButton: {
      color: '#e5e5e5',
      fontSize: 28,
    }
  })

  return(
    <View>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' || button === '/' || button === '*' || button === '-' || button === '+' ?
          <TouchableOpacity key={button} style={styles.button} onPress={() => handleInput(button)}>
            <Text style={[styles.textButton, {color: '#e78e33', fontSize: 28} ]}>{button}</Text>
          </TouchableOpacity>
          :
          button === 0 ?
          <TouchableOpacity key={button} style={[styles.button, {minWidth: '36%'} ]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          button === '.' ?
          <TouchableOpacity key={button} style={[styles.button, { minWidth: '37%'} ]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          button === 'DEL' || button === 'C' ?
          <TouchableOpacity key={button} style={[styles.button, {minWidth: '37%'} ]} onPress={() => handleInput(button)}>
                <Text style={[styles.textButton, { color: '#e78e33' }]}>{button}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity key={button} style={styles.button} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}