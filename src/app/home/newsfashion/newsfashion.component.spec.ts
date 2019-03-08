import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfashionComponent } from './newsfashion.component';

describe('NewsfashionComponent', () => {
  let component: NewsfashionComponent;
  let fixture: ComponentFixture<NewsfashionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfashionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
