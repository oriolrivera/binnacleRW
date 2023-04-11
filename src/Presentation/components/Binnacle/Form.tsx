import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import  BinnacleListUserCases  from "../../../application/useCases/Binnacle/BinnacleListUseCases";

export default function Form() {
  const navigate = useNavigate()
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async () => {
    await new BinnacleListUserCases().Save(name, description);
    Swal.fire({
      icon: 'success',
      title: 'OK',
      text: `Record created successfully.`
    });
    navigate("/");
  }

  return (
    <div className="formthree ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="sr-only">Name</label>
                    <input type="text" 
                      className="form-control" 
                      id="name" 
                      placeholder="Name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}  />
                  </div>
                </div>
                
              </div>
            
              <div className="form-group">
                <label className="sr-only">Message</label>
                <textarea className="form-control textarea" 
                placeholder="Write Description"
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                />
              </div>
              <Button variant="primary" onClick={handleSubmit}>
                        Save
            </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
