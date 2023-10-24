import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDiaDiaComponent } from './gestion-dia-dia.component';

describe('GestionDiaDiaComponent', () => {
  let component: GestionDiaDiaComponent;
  let fixture: ComponentFixture<GestionDiaDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GestionDiaDiaComponent]
    });
    fixture = TestBed.createComponent(GestionDiaDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
