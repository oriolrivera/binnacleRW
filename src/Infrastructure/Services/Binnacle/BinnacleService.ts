import { BinnacleModel } from "../../../Domain/Model/Binnacle/BinnacleModel";
import APIService from "../../Http/APIService";

const endPoint = "binnacles";
class BinnacleService {
   
     Get = async() => {
        try {
            const resp = await APIService.get<BinnacleModel>(endPoint); 
            const respo = resp.data;
            return respo
            //setItemsTransactions([ ...resp.data ]);
        } catch (error) {
            console.log('load Error:>> ', error);
        } finally{
            //setIsLoading(false);
        }       
    }
}

// const loadPokemon = async() => {
//     const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${ id }`);
//     setPokemon( resp.data );
//     setIsLoading(false);
// }

const binnacleService = new BinnacleService();

export { binnacleService }