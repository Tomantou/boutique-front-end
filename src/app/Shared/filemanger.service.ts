import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import 'regenerator-runtime/runtime'

import { BlobServiceClient } from '@azure/storage-blob';

@Injectable({
  providedIn: 'root'
})
export class FilemangerService {

  
  blobSasUrl = 'https://epibfilemanager.blob.core.windows.net/boutique?sp=racwdl&st=2020-12-05T11:24:01Z&se=2021-12-06T11:24:00Z&sv=2019-12-12&sr=c&sig=FLAGeoTAWrpa3LO2CDGIrx9Hn5V28j35D3%2BCWARoqgw%3D';
  blobServiceClient = new BlobServiceClient(this.blobSasUrl);

  containerName = 'boutique';
  containerClient = this.blobServiceClient.getContainerClient(this.containerName);

  constructor(
    private readonly http: HttpClient
    ) { }


  public async uploadImage(file: File) {
    if (file === undefined) {
        return null;
    }
      try {
          const promises = [];
          const blockBlobClient = this.containerClient.getBlockBlobClient(file.name);
          promises.push(blockBlobClient.uploadBrowserData(file));
          
          await Promise.all(promises);
          alert('Done.');
      }
      catch (error) {
          alert(error.message);
      }
  }
}

