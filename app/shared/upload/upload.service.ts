import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx'
//http://stackoverflow.com/questions/35985347/how-to-upload-file-in-angular2
@Injectable()
export class UploadService {
    public progress;
    public progressObserver;
    constructor() { 
        this.progress = Observable.create( observer => {
            this.progressObserver = observer;
        }).share();
    }
public makeFileRequest (url: string, params: string[], files: File[]): Observable<any> {
    return Observable.create(observer => {
        let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();

        for (let i = 0; i < files.length; i++) {
            formData.append("FILE", files[i], files[i].name);
        }
        if(params.length >= 1) {
            formData.append("DTD", params[0]);
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    observer.next(JSON.parse(xhr.response));
                    observer.complete();
                } else {
                    observer.error(xhr.response);
                }
            }
        };

        xhr.upload.onprogress = (event) => {
            this.progress = Math.round(event.loaded / event.total * 100);

            this.progressObserver.next(this.progress);
        };

        xhr.open('POST', url, true);
        xhr.send(formData);
    });
  }
}