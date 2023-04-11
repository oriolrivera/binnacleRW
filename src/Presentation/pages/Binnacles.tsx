import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FaCheck, FaTrash, FaPlus } from "react-icons/fa";
import  BinnacleListUserCases  from "../../application/useCases/Binnacle/BinnacleListUseCases";
import { BinnacleItem } from "../../Domain/Model/Binnacle/BinnacleModel";

export async function loader(): Promise<BinnacleItem[]> {
    const results = await new BinnacleListUserCases().Get();
    const data = results?.data;
    return data;
}

function Binnacles() {
    const data = useLoaderData() as BinnacleItem[];

    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-5 ">
                <div className="col-md-8">
                    <div className="card">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="font-weight-bold">Binnacle</span>
                            <div className="d-flex flex-row">
                                <Link className="btn btn-primary new" to="/CreateBinnacle"> <FaPlus /> New</Link>
                            </div>
                        </div>

                        <div className="mt-3 inputs">
                            <i className="fa fa-search"></i>
                            <input type="text" className="form-control " placeholder="Search Binnacle..." />
                        </div>

                        {data.map((item) => (
                            <div key={item.id} className="mt-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex flex-row align-items-center">
                                        {/* <span className="star"><i className="fa fa-star yellow"></i></span> */}
                                        <div className="d-flex flex-column">
                                            <span>{item.attributes.name}</span>
                                            <div className="d-flex flex-row align-items-center time-text">
                                                <span className="dots"></span>
                                                <small>Edited 15 minutes ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-right">
                                        <button className="border-0 btn-transition btn btn-outline-success">
                                            <FaCheck />
                                        </button>
                                        <button className="border-0 btn-transition btn btn-outline-danger">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ))
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Binnacles;