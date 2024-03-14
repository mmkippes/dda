import React, { useRef, useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { View, Button, Alert } from 'react-native';

const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (!hasPermission) {
            console.log('Los permisos de la cámara fueron rechazados, favor de revisar los mismos en la configuración de tu celular.');
            return;
        }
        if (cameraRef.current) {
            const { uri } = await cameraRef.current.takePictureAsync();
            console.log('Foto tomada:', uri);
        }
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return (
            <View>
                <Text>Se rechazaron los permisos de la cámara.</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} ref={cameraRef}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <Button
                        title="Tomar Foto"
                        onPress={takePicture}
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                    />
                </View>
            </Camera>
        </View>
    );
};

export default CameraScreen;
