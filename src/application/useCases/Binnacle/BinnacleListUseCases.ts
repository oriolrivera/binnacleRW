import { BinnacleModel } from "../../../Domain/Model/Binnacle/BinnacleModel";
import { binnacleService } from "../../../Infrastructure/Services/Binnacle/BinnacleService"

// const BinnacleListUserCases = async() =>{
//     const respo = binnacleService.Get();
//     return respo;
// }

export async function BinnacleListUserCases() {
    const resp = await binnacleService.Get();
    return resp;
  }

//export default BinnacleListUserCases;