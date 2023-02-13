import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NotificationService } from '@app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSpinner = false;
  title = 'client-inmueble-app';

  constructor(private fs: AngularFirestore, private notificationService: NotificationService) { }


  ngOnInit(): void {
    this.fs.collection('test').stateChanges().subscribe(personas=>{
      console.log(personas.map(x=>x.payload.doc.data()));
    })
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  onFilesChanged(urls: string | string[]): void {
    console.log('urls', urls);
  }

  onSuccess(): void {
    this.notificationService.success("El procedimiento fue exitoso");
  }

  onError(): void {
    this.notificationService.error("Se encontraron errores en el proceso");
  }
}
