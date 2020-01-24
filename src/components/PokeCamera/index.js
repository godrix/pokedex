import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet
} from "react-native";
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons'

export default function PokeCamera({ isVisible, onChangePhoto, onCloseCamera }) {
  const [camera, setCamera] = useState();

  const onTakePicture = async () => {
    try {
      const { base64 } = await camera.takePictureAsync({
        base64:true,
        quality: 0,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true
      });
      onChangePhoto(base64);
    } catch (error) {
      Alert.alert("Erro", "Houve um erro ao tirar a foto.");
    }
  };

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <Camera
        ref={ref => setCamera(ref)}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        autoFocus={Camera.Constants.AutoFocus.on}
        flashMode={Camera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: "Permissão para usar a câmera",
          message: "Precisamos da sua permissão para usar a câmera.",
          buttonPositive: "Ok",
          buttonNegative: "Cancelar"
        }}
        captureAudio={false}
      >
        <MaterialIcons
          name="photo-camera"
          size={40}
          color={"#fff"}
          onPress={onTakePicture}
          style={styles.buttonTakePicture}
        />
        <MaterialIcons
          name="close"
          size={50}
          color={"#fff"}
          onPress={onCloseCamera}
          style={styles.buttonCloseCamera}
        />
      </Camera>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonTakePicture: {
    flex: 0,
    alignSelf: "center",
    position: "absolute",
    bottom: 20
  },
  buttonCloseCamera: {
    flex: 0,
    position: "absolute",
    top: 20,
    right: 20
  }
});
