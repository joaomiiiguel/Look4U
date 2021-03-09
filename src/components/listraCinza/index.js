import React from 'react'
import {View} from 'react-native'
export default function ({propsStyle}) {
  const style = {
    width: '100%',
    backgroundColor: '#f2f2f2',
    height: 100,
    zIndex: -1,
    position: 'absolute',
  }
  return (
    <View style={{...style, ...propsStyle }} />
  )
}