export type PokemonList = {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[]
}

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  }
  types: {
    slot: number;
    type: {
      name: string;
    }
  }
}
