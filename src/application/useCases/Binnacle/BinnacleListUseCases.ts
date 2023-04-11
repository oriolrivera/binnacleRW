import { BinnacleModel, BinnacleItem } from "../../../Domain/Model/Binnacle/BinnacleModel";
import BinnacleService from "../../../Infrastructure/Services/Binnacle/BinnacleService";


class BinnacleListUserCases {
    async Get(): Promise<BinnacleModel> {
        const resp = await new BinnacleService().Get();
        return resp;
    }
   
    async Save(name: string, description: string): Promise<BinnacleItem> {
         return await new BinnacleService().Save(name, description);
    }
}

export default BinnacleListUserCases;

