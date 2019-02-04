import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerPictureUploadComponent } from './beer-picture-upload.component';

describe('BeerPictureUploadComponent', () => {
  let component: BeerPictureUploadComponent;
  let fixture: ComponentFixture<BeerPictureUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerPictureUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerPictureUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
