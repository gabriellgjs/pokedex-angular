import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexCardsComponent } from './pokedex-cards.component';

describe('PokedexCardsComponent', () => {
  let component: PokedexCardsComponent;
  let fixture: ComponentFixture<PokedexCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokedexCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
