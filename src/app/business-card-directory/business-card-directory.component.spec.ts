import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardDirectoryComponent } from './business-card-directory.component';

describe('BusinessCardDirectoryComponent', () => {
  let component: BusinessCardDirectoryComponent;
  let fixture: ComponentFixture<BusinessCardDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCardDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCardDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
