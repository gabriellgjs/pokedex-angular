import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CardPokemonComponent} from "../card-pokemon/card-pokemon.component";
import {PokemonService} from "../../service/pokemon.service";
import {PokemonList} from "../../models/pokemon.model";
import {Subscription} from "rxjs";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'pokedex-cards',
  standalone: true,
  imports: [CardPokemonComponent, AsyncPipe, NgForOf, JsonPipe, NgIf],
  templateUrl: './pokedex-cards.component.html',
  styleUrl: './pokedex-cards.component.scss'
})
export class PokedexCardsComponent implements OnInit, OnDestroy{
  subscription? = Subscription;
  pokemonService = inject(PokemonService)
  pokemonList!: PokemonList;
  constructor() {}

  ngOnInit() {
    this.getPokemonList().subscribe({
      next: response => {
        this.pokemonList = response;
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

}
