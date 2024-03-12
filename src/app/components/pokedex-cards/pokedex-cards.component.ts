import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CardPokemonComponent} from "../card-pokemon/card-pokemon.component";
import {PokemonService} from "../../service/pokemon.service";
import {PokemonList} from "../../models/pokemon.model";
import {Subscription} from "rxjs";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'pokedex-cards',
  standalone: true,
  imports: [CardPokemonComponent, AsyncPipe, NgForOf, JsonPipe, NgIf, ButtonComponent],
  templateUrl: './pokedex-cards.component.html',
  styleUrl: './pokedex-cards.component.scss'
})
export class PokedexCardsComponent implements OnInit, OnDestroy{
  subscription? = Subscription;
  pokemonService = inject(PokemonService)
  pokemonList!: PokemonList;
  next?: string;

  constructor() {}

  ngOnInit() {
    this.getPokemonList().subscribe({
      next: response => {
        this.pokemonList = response;
        this.next = response.next;
      },
      error: error => console.error('error', error),
    })
  }

  ngOnDestroy() {
    this.subscription?.EMPTY.unsubscribe();
  }

  getPokemonList() {
    return this.pokemonService.getPokemonList()
  }

  getPokemonURL() {
    return this.pokemonService.getPokemonURL(this.next ?? '')
  }

  loadMorePokemons() {
    this.getPokemonURL().subscribe({
      next: response => {
        console.log(this.next)
        const test= {
          count: this.pokemonList.count + response.count,
          next: response.next,
          results: [...this.pokemonList.results, ...response.results],
        }
        this.pokemonList = test
        this.next = response.next;
        console.log(test)
      },
      error: error => console.error('error', error),
    })
  }
}
