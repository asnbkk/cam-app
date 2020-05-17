import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cam-app';
  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  constructor(private renderer: Renderer2, private locationService: LocationService) { }

  videoWidth = 0;
  videoHeight = 0;

  constraints = {
    video: {
      facingMode: "environment",
      width: { ideal: 4096 },
      height: { ideal: 2160 }
    }
  };

  startCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
    } else {
      alert('Sorry, camera not available.');
    }
  }

  handleError(error) {
    console.log('Error: ', error);
  }

  attachVideo(stream) {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
      this.videoHeight = this.videoElement.nativeElement.videoHeight;
      this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
  }

  ngOnInit() {
    this.startCamera();
  }
  public pictures = []
  date
  location
  capture() {
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
    this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);

    let picture: any = this.canvas.nativeElement.toDataURL("image/png");
    this.date = document.lastModified; 

    console.log(picture)
    this.pictures.push(picture)
  }
}
