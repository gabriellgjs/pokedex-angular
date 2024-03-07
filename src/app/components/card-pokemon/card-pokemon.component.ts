import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from "../../service/pokemon.service";
import {Pokemon} from "../../models/pokemon.model";
import {Subscription} from "rxjs";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

interface listColorProps {
  [key: string]: string;
}

@Component({
  selector: 'card-pokemon',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgStyle
  ],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.scss'
})
export class CardPokemonComponent implements OnInit, OnDestroy{
  @Input() urlPokemon!: string
  pokemonService = inject(PokemonService);
  subscription? = Subscription;
  pokemon?: Pokemon;
  colorType: listColorProps = {
    'bug': "#729F3F",
    'dragon': "#F16E57",
    'fairy': "#FDB9E9",
    'fire': "#FD7D24",
    'ghost': "#7B62A3",
    'ground': "#AB9842",
    'normal': "#A4ACAF",
    'psychic': "#F366B9",
    'stell': "#A4A4A4",
    'dark': "#707070",
    'electric': "#EED535",
    'fighting': "#D56723",
    'flying': "#3DC7EF",
    'grass': "#9BCC50",
    'ice': "#51C4E7",
    'poison': "#B97FC9",
    'rock': "#A38C21",
    'water': "#4592C4"
  }

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
