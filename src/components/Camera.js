import React, { useRef } from 'react';
import { Camera } from 'expo-camera';
import { View, Button } from 'react-native';

const CameraScreen = () => {
    const cameraRef = useRef(null);

    const takePicture = async () => {
        if (cameraRef.current) {
            const { uri } = await cameraRef.current.takePictureAsync();
            console.log('Foto tomada:', uri);
        }
    };

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
