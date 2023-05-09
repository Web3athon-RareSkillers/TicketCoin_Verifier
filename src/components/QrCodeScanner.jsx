import React, {useState, useEffect} from 'react';

import {Text, View, Button} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default function QrCodeScanner() {
  const [hasPermission, setHasPermission] = useState < boolean > false;
  const [scanned, setScanned] = useState < boolean > false;
  const [text, setText] = useState < string > 'Not yet scanned';

  const askForCameraPermission = () => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = data => {
    setScanned(true);
    console.log(data.data);
    setText(data.data);
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
        <Button
          color="#7841c3"
          title={'Allow Camera'}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Return the View
  return (
    <View>
      <View>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{height: 400, width: 400}}
        />
      </View>
      <Text>{text}</Text>

      {scanned && (
        <Button
          title="Scan again?"
          color="#7841c3"
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
}
