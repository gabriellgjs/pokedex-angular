import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Pokemon, PokemonList} from "../models/pokemon.model";
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  limit = 20;

  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  getPokemonList() {
    return this.httpClient.get<PokemonList>(`${this.url}/pokemon?limit=${this.limit}&offset=0`)
  }

  getPokemon(url: string) {
    return this.httpClient.get<Pokemon>(url)
  }
}
