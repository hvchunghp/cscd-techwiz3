import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpChatComponent } from './pop-up-chat.component';

describe('PopUpChatComponent', () => {
  let component: PopUpChatComponent;
  let fixture: ComponentFixture<PopUpChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
