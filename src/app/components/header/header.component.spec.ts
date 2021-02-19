import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommunicationService } from 'src/app/services/communication/communication.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let communicationServiceStub: CommunicationService = new CommunicationService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[
        { provide: CommunicationService, useValue: communicationServiceStub },
      ],
      imports:[RouterTestingModule],
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call reloadBoard from communication service  when restart button is clicked', () => {
    const reload = spyOn(communicationServiceStub, 'reloadBoard');
    component.onBoardRestartClick();
    expect(reload).toHaveBeenCalled();
  });
});
