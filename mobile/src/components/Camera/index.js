import React, { Component } from 'react';

import { RNCamera } from 'react-native-camera';

const RNFetchBlob = require('rn-fetch-blob');

import { Container, Header, CameraView, TakeView, LogoutButton } from './styles';

export default class Camera extends Component {
  render() {
    return (
    <Container>
      <Header>
        <CameraView>
          <RNCamera
            ref ={ref=>{
              this.camera=ref;
            }}
            type={RNCamera.Constants.Type.back}

            flashMode={RNCamera.Constants.FlashMode.on}
          />
        </CameraView>
      </Header>

      <TakeView>
        <LogoutButton onPress={this.tackePicture.bind(this)}>
          Enviar
        </LogoutButton>
      </TakeView>
    </Container>
  )
 }
 tackePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };

      const data = await this.camera.takePictureAsync(options);

      console.tron.log('picture', data.base64)

      // const path = `${RNFetchBlob.fs.dirs.CacheDir}/signed.png`;

      // console.tron.log('path', path)

      try {
        RNFetchBlob.fs.writeFile(data.base64, 'base64')
      } catch (err) {
        console.tron.error(erro.message);
      }
    }
  }
}
