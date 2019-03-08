import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectlistComponent } from './prodectlist.component';

describe('ProdectlistComponent', () => {
  let component: ProdectlistComponent;
  let fixture: ComponentFixture<ProdectlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdectlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
