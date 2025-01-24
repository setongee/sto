import React, {useState, useEffect} from 'react'
import './pages.scss';
import { getAdminData, updateAdminData } from '../../api/core/admin';
import Loader from '../../components/loader/loader';
import check from '../asset/correct.png';

const Contact = ({inData}) => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [ contact, setContact ] = useState({});

  const onChange = (e) => {

    setContact( () => {

      return {
        ...contact,
        [e.target.name] : e.target.value
      }

    } )

  }

  const onChangeSocials = (e) => {

    setContact( () => {

      return {
        ...contact,
        socials : {
          ...contact.socials,
          [e.target.name] : e.target.value
        }
      }

    } )

  }

  const submitContact = () => {

    data.contact = contact;
    updateData();

  }

  useEffect(() => {
  
      setData(inData);
      setContact(inData.contact);
  
    }, [inData]);

    console.log(data.contact)

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
console.log(contact)

  return (

    <div className="cantact__body">

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

        <p> Contact Information </p>

        <div className="actionBtn" onClick={ () => submitContact() } >Save Changes</div>

      </div>
      
      <form>

          <div className="form__child">

            <label htmlFor="name"> Phone Number </label>
            <input type="text" name = "phone" placeholder='Enter Phone' value={contact?.phone} onChange={ (e) => onChange(e) } />

          </div>

          <div className="form__child">

            <label htmlFor="name"> Email Address </label>
            <input type="email" name = "email" placeholder='Enter Email' value={contact?.email} onChange={ (e) => onChange(e) } />
            
          </div>

          <div className="form__child">

            <label htmlFor="name"> Office Address </label>
            <input type="text" name = "address" placeholder='Enter Address' value={contact?.address} onChange={ (e) => onChange(e) } />
            
          </div>

          <div className="form__child">

            <label htmlFor="name"> X (Formerly Twitter) </label>
            <input type="text" name = "x" placeholder='Enter X URL' value={contact?.socials?.x} onChange={ (e) => onChangeSocials(e) } />
            
          </div>

          <div className="form__child">

            <label htmlFor="name"> Facebook </label>
            <input type="text" name = "facebook" placeholder='Enter Facebook URL' value={contact?.socials?.facebook} onChange={ (e) => onChangeSocials(e) } />
            
          </div>

          <div className="form__child">

            <label htmlFor="name"> Linkedin </label>
            <input type="text" name = "linkedin" placeholder='Enter Linkedin URL' value={contact?.socials?.linkedin} onChange={ (e) => onChangeSocials(e) } />
            
          </div>

          <div className="form__child">

            <label htmlFor="name"> Instagram </label>
            <input type="text" name = "instagram" placeholder='Enter Instagram URL' value={contact?.socials?.instagram} onChange={ (e) => onChangeSocials(e) } />
            
          </div>

          <div className="form__child">

            <label htmlFor="name"> Youtube </label>
            <input type="text" name = "youtube" placeholder='Enter Youtube URL' value={contact?.socials?.youtube} onChange={ (e) => onChangeSocials(e) } />
            
          </div>

          {/* <div className="form__child submitAction"> Submit Agency </div> */}

      </form>

    </div>

  )

}

export default Contact
