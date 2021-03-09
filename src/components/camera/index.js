import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import styles from './style';
export default function CameraTaker (props){
  const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ alignItems: 'center'}} >
      <View style={styles.viewShot} >
        <Image source={props.mascara} style={styles.mascara} />
        <Camera ref={ref => props.setarRef(ref)}  style={styles.camera} type={'front'}>
          <View 
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
          </View>
        </Camera>
      </View>
    </View>
  );
}