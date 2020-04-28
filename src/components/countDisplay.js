import React, {useContext} from 'react';
import { CounterContext } from '../../store'
import {

  View,
  Text,

} from 'react-native';

export default function CountDisplay(props) {
    const [count] = useContext(CounterContext);

  
  return (
    <View>
        <Text style={{color:'red'}}>{count}</Text>
    </View>
  );
}
