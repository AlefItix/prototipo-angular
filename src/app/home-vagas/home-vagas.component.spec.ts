import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVagasComponent } from './home-vagas.component';

describe('HomeVagasComponent', () => {
  let component: HomeVagasComponent;
  let fixture: ComponentFixture<HomeVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVagasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
