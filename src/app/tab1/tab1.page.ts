import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { createWorker } from 'tesseract.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  worker: Tesseract.Worker | undefined;
  workerReady = false;
  image: string = 'https://tesseract.projectnaptha.com/img/eng_bw.png';
  ocrResult: string | undefined = '';
  captureProgress = 0;

  constructor() {
    this.loadWorker();
  }

  async loadWorker() {
    this.worker = await createWorker({
      logger: progress => {
        console.log(progress)
        if (progress.status == 'recognizing text') {
          this.captureProgress = parseInt('' + progress.progress *100);
        }
      }
    });
    await this.worker.load();
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    console.log('FINISHED LOADING WORKER');
    this.workerReady = true;
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    })
    console.log('image', image);
    if (image && image.dataUrl) {
      this.image = image.dataUrl;
    }
  }

  async recognizeImage() {
    const result = await this.worker?.recognize(this.image);
    console.log('result', result);
    this.ocrResult = result?.data.text;
  }

}
