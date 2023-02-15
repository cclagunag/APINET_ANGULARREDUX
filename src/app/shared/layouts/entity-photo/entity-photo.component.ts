import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-entity-photo',
  templateUrl: './entity-photo.component.html',
  styleUrls: ['./entity-photo.component.scss']
})
export class EntityPhotoComponent implements OnInit {

  @Input() photoUrl !: string;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  get safePhotoURL(): SafeStyle | null {
    return this.photoUrl ? this.sanitizer.bypassSecurityTrustStyle(`url(${this.photoUrl})`): null;
  }

}
