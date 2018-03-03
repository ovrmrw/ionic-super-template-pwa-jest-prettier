import { TestBed } from '@angular/core/testing';
import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleService]
    });
  });

  describe('with injection', () => {
    let simpleService: SimpleService;

    beforeEach(() => {
      simpleService = TestBed.get(SimpleService);
    });

    it('add', () => {
      const expected = 3;
      const actual = simpleService.add(1, 2);
      expect(actual).toBe(expected);
    });

    it('subtract', () => {
      const expected = -1;
      const actual = simpleService.subtract(1, 2);
      expect(actual).toBe(expected);
    });
  });
});
