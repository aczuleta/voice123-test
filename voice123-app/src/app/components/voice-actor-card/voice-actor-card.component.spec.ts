import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceActorCardComponent } from './voice-actor-card.component';

describe('VoiceActorCardComponent', () => {
  let component: VoiceActorCardComponent;
  let fixture: ComponentFixture<VoiceActorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceActorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceActorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
