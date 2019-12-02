import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesSelectionComponent } from './stories-selection.component';

describe('StoriesSelectionComponent', () => {
  let component: StoriesSelectionComponent;
  let fixture: ComponentFixture<StoriesSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
