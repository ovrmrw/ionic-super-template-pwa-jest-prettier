import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule, NavController } from 'ionic-angular';
import { WelcomePage } from './welcome';

const mockNavController = {
  push: jest.fn()
};

describe('WelcomePage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePage],
      imports: [IonicModule.forRoot(WelcomePage), TranslateModule.forRoot()],
      providers: [{ provide: NavController, useValue: mockNavController }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  describe('with injection', () => {
    let fixture: ComponentFixture<WelcomePage>;
    let welcomePage: WelcomePage;

    beforeEach(() => {
      fixture = TestBed.createComponent(WelcomePage);
      welcomePage = fixture.componentInstance;
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should be created.', () => {
      expect(welcomePage).toBeTruthy();
    });

    it('when login function is called.', () => {
      welcomePage.login();
      expect(mockNavController.push.mock.calls.length).toBe(1);
      expect(mockNavController.push.mock.calls[0]).toEqual(['LoginPage']);
    });

    it('when signup function is called.', () => {
      welcomePage.signup();
      expect(mockNavController.push.mock.calls.length).toBe(1);
      expect(mockNavController.push.mock.calls[0]).toEqual(['SignupPage']);
    });
  });
});
