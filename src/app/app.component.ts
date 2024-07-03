import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    // setTimeout(() => {
    //   this.openCamera();
    // }, 1000);
  }

  // async takePicture() {
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: false,
  //     resultType: CameraResultType.Base64
  //   });
  //   return image;
  //   };

  // async openCamera() {
  //   const image = await this.takePicture();
  //   const base64String = image.base64String;
  //   if (base64String) {
  //     // this.testTexts(base64String);
  //   }
  // }

  // async testTexts(base64String: string) {
  //   // const result: OCRResult = await this.ocr.recText(OCRSourceType.BASE64, base64String);
  //   this.ocr.recText(OCRSourceType.BASE64, base64String)
  //     .then((res: OCRResult) => console.log('RESULT:', JSON.stringify(res)))
  //     .catch((error: any) => console.error(error));
  // }

}

