import { Component, inject} from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Data } from '../../model/pokemon.model';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent  {
  
  private _pokemonService: PokemonService = inject(PokemonService);
  pokemonCards$: Observable<Data[]> = this._pokemonService.getAllPokemonCards$();
  }
  



