import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsSummaryComponent } from './actors-summary.component';

describe('ActorsSummaryComponent', () => {
  let component: ActorsSummaryComponent;
  let fixture: ComponentFixture<ActorsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
