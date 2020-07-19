import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteformComponent } from './deleteform.component';

describe('DeleteformComponent', () => {
  let component: DeleteformComponent;
  let fixture: ComponentFixture<DeleteformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
