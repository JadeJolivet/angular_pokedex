import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Data, PokemonServiceApiResponse, } from '../model/pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _http: HttpClient = inject(HttpClient);
  private readonly _BASE_API_URL: string = "https://api.pokemontcg.io/v2/";

  constructor() { }

  getAllPokemonCards$(): Observable<Data[]> {
    return this._http.get<PokemonServiceApiResponse>(this._BASE_API_URL + "cards")
      .pipe(
        map((response: PokemonServiceApiResponse) => response.data)
      );
  }
}