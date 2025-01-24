import React, {useState, useEffect} from 'react'
import './pages.scss';
import { getAdminData, updateAdminData } from '../../api/core/admin';
import Loader from '../../components/loader/loader';
import check from '../asset/correct.png';

const Vision = ({inData}) => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
  
      setData(inData);
  
    }, [inData]);

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

    <div className="vision__body">

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

        <p>Our Vision & Mission</p>

        <div className="actionBtn" onClick={ () => updateData() } >Save Changes</div>

      </div>

      <div className="cards">

        <div className="card sub__card vision__card">

              <div className="tag">Our Vision</div>

              <div className="previewArea"> { data.vision } </div>

              <div className="form__action">

                <textarea name="vision" placeholder = "Enter vision" value={data.vision} onChange={ e => setData( { ...data, vision : e.target.value } ) } ></textarea>
              
              </div>

        </div>

        <div className="card sub__card vision__card">

            <div className="tag">Our Mission</div>

            <div className="previewArea"> { data.mission } </div>

            <div className="form__action">

              <textarea name="mission" placeholder = "Enter mission" value={data.mission} onChange={ e => setData( { ...data, mission : e.target.value } ) } ></textarea>
            
            </div>

         </div>

      </div>

    </div>

  )

}

export default Vision
