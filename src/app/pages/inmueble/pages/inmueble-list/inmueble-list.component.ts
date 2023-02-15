import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InmuebleResponse } from '../../store/save';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/save';

@Component({
  selector: 'app-inmueble-list',
  templateUrl: './inmueble-list.component.html',
  styleUrls: ['./inmueble-list.component.scss']
})
export class InmuebleListComponent implements OnInit {

  inmuebles$ !: Observable<InmuebleResponse[] | null>;
  loading$ !: Observable<boolean | null>;

  pictureDefault : string = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new fromList.Read());
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.inmuebles$ = this.store.pipe(select(fromList.getInmuebles));
  }

}
