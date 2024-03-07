import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from "../../service/pokemon.service";
import {Pokemon} from "../../models/pokemon.model";
import {Subscription} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'card-pokemon',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.scss'
})
export class CardPokemonComponent implements OnInit, OnDestroy{
  pokemonService = inject(PokemonService);
  subscription? = Subscription;
  pokemon?: Pokemon;
  @Input() urlPokemon!: string

  ngOnInit() {
    this.getPokemon().subscribe({
      next: pokemon => {
      this.pokemon = pokemon
      },
      error: (error) => console.error('error', error)
    })

  }

  ngOnDestroy() {
    this.subscription?.EMPTY.unsubscribe();
  }

  getPokemon() {
      return this.pokemonService.getPokemon(this.urlPokemon);
  }
}
