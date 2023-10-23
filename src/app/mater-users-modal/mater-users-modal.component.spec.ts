import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterUsersModalComponent } from './mater-users-modal.component';

describe('MaterUsersModalComponent', () => {
  let component: MaterUsersModalComponent;
  let fixture: ComponentFixture<MaterUsersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterUsersModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterUsersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
