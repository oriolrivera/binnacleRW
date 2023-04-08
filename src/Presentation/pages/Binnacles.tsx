import { useEffect, useState } from "react";
import { BinnacleListUserCases } from "../../application/useCases/Binnacle/BinnacleListUseCases";
import  { BinnacleItem } from "../../Domain/Model/Binnacle/BinnacleModel";

function Binnacles(){
    const [data, setData] = useState<BinnacleItem[]>()

    useEffect( () => {
        loadBinaccles();
    },[])

    const loadBinaccles = async() => {
       
       // setIsRefreshing(true);
        const result = await BinnacleListUserCases()
        setData(result?.data)
        //setIsRefreshing(false);
    }

    return (
        <div>
             <h5>Bitacoras cap 3</h5>
            <ul>
                {data?.map((item)=>(
                    <li key={item.id}>{item.attributes.name}</li>
                    
                ))
                }
               
            </ul> 
        </div>
    )
}

export default Binnacles;