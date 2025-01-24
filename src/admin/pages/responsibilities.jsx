import React, {useState, useEffect} from 'react'
import './pages.scss';
import { getAdminData, updateAdminData } from '../../api/core/admin';
import Loader from '../../components/loader/loader';
import check from '../asset/correct.png';
import LASGEditor from '../component/editor/lasg_custom_editor';

const Responsibilities = ({inData}) => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [responsible, setResponsible] = useState("");

  useEffect(() => {
  
      setData(inData);
  
    }, [inData]);

    const submitData = () => {

      data.responsibilities = responsible; 
      updateData();
  
    }

  const updateData = () => {

    setIsLoading(true);

    updateAdminData(data._id, data)
    .then(e => {
      setTimeout(() => {

        setIsLoading(false);
        setMessage(e.message);

        setTimeout(() => {

          setMessage("")
          
        }, 3000);
        
      }, 1000);

    })
    .catch(err => console.log(err));

  }

  return (

    <div className="table__main__body">

      {
        isLoading ? <div className="loading"> <Loader/> </div> : null
      }

      {
        
        message !== "" ? <div className="messageAlert"> 

          <div className="photoIcon"> 
            <img src={check} alt="check icon for success" /> 
          </div> 
          
          {message} 
          
          </div> 
          
          : null

      }

      <div className="titleAdmin flex">

        <p>Responsibilities</p>

        <div className="actionBtn" onClick={ () => submitData() } >Save Changes</div>

      </div>

      <LASGEditor dataText = { setResponsible } value = {data.responsibilities} />

    </div>

  )

}

export default Responsibilities
