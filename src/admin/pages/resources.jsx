import React, {useState, useEffect} from 'react'
import './pages.scss';
import { getAdminData, updateAdminData, uploadDocument, uploadFile } from '../../api/core/admin';
import Loader from '../../components/loader/loader';
import check from '../asset/correct.png';
import { Edit, Trash, Xmark } from 'iconoir-react';
import pdff from '../../assets/pdff.png'

const Resources = ({inData}) => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [ newAgency, setNewAgency ] = useState({});
  const [ newOfficial, setNewOfficial ] = useState({});
  const [index, setIndex] = useState(0); 
  const [file, setFile] = useState([]);
  const [photo, setPhoto] = useState('');


  useEffect(() => {
    setData(inData);
}, [inData]);

  // open add official modal
  const openModal = () => {

    setIsModalOpen(true);

  }

  // close add official modal
  const closeModal = () => {

    setNewOfficial({});
    setFile([]);
    setIsModalOpen(false);

  }

  // handle file
  const handleFile = e => {

    if (e.target.files.length) {

        setFile(e.target.files);

    }

}

// format the fullname
const formatCategoryName = (name) => {

  return name.replaceAll(' ', '').replaceAll(',', '_').replaceAll('&', '_').toLowerCase();

}

// function on change on forms
const onChange = (e) => {

    setNewOfficial( (data) => {

      return {
        ...newOfficial,
        [e.target.name] : e.target.value
      }

    } )
}

// delete an item
const deleteItem = (index) => {

  const shouldDelete = confirm(`Do you want to delete ${data.resources[index].name}`)

  if (shouldDelete) {
    
    const filterOpt = data.resources.filter( (e, idx) =>  index !== idx  );
    data.resources = filterOpt;
    updateData();

  }

}

// upload file function
const uploadFile = async () => {

  setIsLoading(true);

  if(!file.length) {

    setIsLoading(false);
    alert("You must add a Document");
    
  }

  else {

      uploadDocument(file[0], newOfficial.name)
      .then( res => {
        newOfficial.url = res;
        submitData();
      } )

  }

}

const submitData = () => {

    data.resources.push(newOfficial);
    updateData();

}

const updateData = () => {

    updateAdminData(data._id, data)
    .then(e => {
      setTimeout(() => {

        setIsLoading(false);
        closeModal();
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
        isModalOpen ?

        <div className="addModal">

          <div className="addModal__card">

              <div className="topic"> Add Document </div>
              <div className="closeModal" onClick={ () =>  closeModal() } > <Xmark/> </div>
              
              <form className='people__zone docForm'>

                  <div className="form__child">
                    <label htmlFor="name"> File Document </label>
                    <input type="file" id='file' accept="application/pdf" name = 'file' onChange={(e) => handleFile(e) } />
                  </div>

                  <div className="form__child">
                    <label htmlFor="name"> Document Name </label>
                    <input type="text" name = "name" placeholder='Enter Document Name' value={newOfficial.name} onChange={ (e) => onChange(e) } />
                  </div>

                  <div className="form__child submitAction" onClick={uploadFile}> Add Official </div>

              </form>


          </div>

        </div>

        : null

      }

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

        <p> Resources </p>

        <div className='flex gap__10'>
          <div className="actionBtn button__primary2" onClick={ () => openModal() } > Add Document </div>
        </div>

      </div>

      <div className="tableData">

          <div className="table__item item__header flex">

            <div className="tr__item name--item"># Name</div>

            <div className="tr__item" >Actions</div>

          </div>

          {
            data?.resources?.length ? data.resources.map( (res, index) => (

              <div className="table__item flex">

                  <div className="tr__item name--item flex ofiicial__name">

                    <span> {index+1}. </span>

                    <div className="official__image">
                      <img src={pdff} alt="" />
                    </div>

                    <p> {res.name} </p>

                    <a href = {res.url} download target='_Blank' > Downlaod</a>

                  </div>

                  <div className="tr__item flex act--item"> 

                    <div className="action" onClick={ () => deleteItem(index) }> <Trash/> </div> 

                  </div>

              </div>
            
            ) )

            : null

          }

          
        
      </div>

    </div>

  )

}

export default Resources
