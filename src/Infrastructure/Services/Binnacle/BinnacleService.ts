import { BinnacleItem, BinnacleModel } from "../../../Domain/Model/Binnacle/BinnacleModel";
import APIService from "../../Http/APIService";

const endPoint = "binnacles";

class BinnacleService {

    async Get(): Promise<any> {
        try {
            const resp = await APIService.get<BinnacleModel>(endPoint); 
            return resp.data
        } catch (error) {
            console.log('load Error:>> ', error);
        }    
    }

    async GetById(id: string): Promise<BinnacleItem> {
        const resp = await APIService.get<BinnacleItem>(`${ endPoint }/${ id }`);
        return resp.data;
    };
}

export default BinnacleService;