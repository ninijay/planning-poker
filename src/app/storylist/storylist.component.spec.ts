import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorylistComponent } from './storylist.component';

describe('StorylistComponent', () => {
  let component: StorylistComponent;
  let fixture: ComponentFixture<StorylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
