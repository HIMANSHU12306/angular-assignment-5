import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericUserFormComponent } from './generic-user-form.component';

describe('GenericUserFormComponent', () => {
  let component: GenericUserFormComponent;
  let fixture: ComponentFixture<GenericUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericUserFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
