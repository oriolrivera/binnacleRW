import { BinnacleModel } from "../../../Domain/Model/Binnacle/BinnacleModel";
import BinnacleService from "../../../Infrastructure/Services/Binnacle/BinnacleService";

export async function BinnacleListUserCases(): Promise<BinnacleModel>  {
    const resp = await new BinnacleService().Get();
    return resp;
}
