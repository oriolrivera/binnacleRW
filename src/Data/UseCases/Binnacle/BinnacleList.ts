import { useState, useEffect } from 'react';
import { BinnacleModel } from '../../../Domain/Model/Binnacle/BinnacleModel';
import APIService from '../../../Infrastructure/Http/APIService';


export const BinnacleList = ( id: string ) => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ binnacle, setBinnacle ] = useState<BinnacleModel>({} as BinnacleModel)

    const Get = async() => {
        const resp = await APIService.get<BinnacleModel>(`binnacles`);
        setBinnacle( resp.data );
        setIsLoading(false);
    }

    useEffect(() => {
        Get();
    }, [])

    return {
        isLoading,
        binnacle
    }
}