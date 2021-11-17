import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsUsedComponent } from './words-used.component';

describe('WordsUsedComponent', () => {
  let component: WordsUsedComponent;
  let fixture: ComponentFixture<WordsUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsUsedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
