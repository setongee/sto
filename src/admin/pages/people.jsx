import React, {useState, useEffect} from 'react'
import './pages.scss';
import { getAdminData, updateAdminData, uploadFile } from '../../api/core/admin';
import Loader from '../../components/loader/loader';
import check from '../asset/correct.png';
import { Edit, Trash, Xmark } from 'iconoir-react';

const People = ({inData}) => {

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

  
  // open edit modal
  const openEditModal = (e) => {

    setIndex(e);
    setNewOfficial(data.people[e]);
    setIsEditModalOpen(true);

    setPhoto(data.people[e].photo)

  }

  // close edit modal
  const closeEditModal = () => {

    setNewOfficial({})
    setPhoto("");
    setFile([]);
    setIsEditModalOpen(false);

  }

  // open add official modal
  const openModal = () => {

    setIsModalOpen(true);

  }

  // close add official modal
  const closeModal = () => {

    setNewOfficial({});
    setPhoto("");
    setFile([]);
    setIsModalOpen(false);

  }

  // handle file
  const handleFile = e => {

    if (e.target.files.length) {

        setFile(e.target.files);
        const min = window.URL.createObjectURL(e.target.files[0]);
        setPhoto(min);

    }

}

// format the fullname
const formatCategoryName = (name) => {

  return name.replaceAll(' ', '').replaceAll(',', '_').replaceAll('&', '_').toLowerCase();

}

// upload photo function
const uploadPhoto = () => {

  if(!file.length) {

    alert("You must add a photo");
    
  }

  else {

    const fileData = file[0];
    let uniqueName = formatCategoryName(newOfficial.name);
    setIsLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(fileData);

    reader.onloadend = () => { 

        try {

            uploadFile( { photo : {

                temp : uniqueName,
                data : reader.result
    
            } } )

            .then( response => {
               newOfficial.photo = response.url
               submitData();
            })
            
        } catch (error) {

            console.log(error.message);
            
        }

    }

  }

}

// handle click event
const handleClick = () => {

    document.getElementById('file').click()

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

  const shouldDelete = confirm(`Do you want to delete ${data.people[index].name}`)

  if (shouldDelete) {
    
    const filterOpt = data.people.filter( (e, idx) =>  index !== idx  );
    data.people = filterOpt;
    updateData();

  }

}

useEffect(() => {

    setData(inData);

}, [inData]);

const submitData = () => {

    data.people.push(newOfficial);
    updateData();

}

const submitEditData = () => {

    if(!file.length){
      
      data.people[index] = newOfficial; 
      updateData();

    }

    else {

      const fileData = file[0];
      let uniqueName = formatCategoryName(newOfficial.name);
      setIsLoading(true);
  
      const reader = new FileReader();
      reader.readAsDataURL(fileData);
  
      reader.onloadend = () => { 
  
          try {
  
              uploadFile( { photo : {
  
                  temp : uniqueName,
                  data : reader.result
      
              } } )
  
              .then( response => {

                 newOfficial.photo = response.url
                 data.people[index] = newOfficial; 
                 updateData();

              })
              
          } catch (error) {
  
              console.log(error.message);
              
          }
  
      }
  
    }
}

const updateData = () => {

    setIsLoading(true);

    updateAdminData(data._id, data)
    .then(e => {
      setTimeout(() => {

        setIsLoading(false);
        closeModal();
        closeEditModal();
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

              <div className="topic"> Add Official </div>
              <div className="closeModal" onClick={ () =>  closeModal() } > <Xmark/> </div>

              <div className="official__area" onClick={ () => handleClick() } >
                <img src={photo} alt="" />
                <span>Edit Image</span>
              </div>

              <input type="file" id='file' accept="image/*" name = 'file' onChange={(e) => handleFile(e) } hidden />
              
              <form className='people__zone'>

                  <div className="form__child">
                    <label htmlFor="name"> Fullame </label>
                    <input type="text" name = "name" placeholder='Enter Fullname' value={newOfficial.name} onChange={ (e) => onChange(e) } />
                  </div>

                  <div className="form__child">
                    <label htmlFor="name"> Role / Designation </label>
                    <input type="text" name = "role" placeholder='Enter Role / Designation' value={newOfficial.role} onChange={ (e) => onChange(e) } />
                  </div>

                  <div className="form__child submitAction" onClick={uploadPhoto}> Add Official </div>

              </form>


          </div>

        </div>

        : null

      }

      {
        isEditModalOpen ?

        <div className="addModal">

          <div className="addModal__card">

              <div className="topic"> Edit Official Details </div>
              <div className="closeModal" onClick={ () =>  closeEditModal() } > <Xmark/> </div>

              <div className="official__area" onClick={ () => handleClick() } >
                <img src={photo} alt="" />
                <span>Edit Image</span>
              </div>

              <input type="file" id='file' accept="image/*" name = 'file' onChange={(e) => handleFile(e) } hidden />
              
              <form className='people__zone'>

                  <div className="form__child">
                    <label htmlFor="name"> Fullame </label>
                    <input type="text" name = "name" placeholder='Enter Fullname' value={newOfficial.name} onChange={ (e) => onChange(e) } />
                  </div>

                  <div className="form__child">
                    <label htmlFor="name"> Role / Designation </label>
                    <input type="text" name = "role" placeholder='Enter Role / Designation' value={newOfficial.role} onChange={ (e) => onChange(e) } />
                  </div>

                  <div className="form__child submitAction" onClick={submitEditData}> Save Changes </div>

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

        <p> Our People </p>

        <div className='flex gap__10'>
          <div className="actionBtn button__primary2" onClick={ () => openModal() } > Add Official </div>
        </div>

      </div>

      <div className="tableData">

          <div className="table__item item__header flex">

            <div className="tr__item name--item"># Name</div>

            <div className="tr__item cat--item" > Role </div>

            <div className="tr__item" >Actions</div>

          </div>

          

          {
            data?.people?.length ? data.people.map( (res, index) => (

              <div className="table__item flex">

                  <div className="tr__item name--item flex ofiicial__name">

                    <span> {index+1}. </span>

                    <div className="official__image">
                      <img src={res.photo} alt="" />
                    </div>

                    <p> {res.name} </p>

                  </div>

                  <div className="tr__item cat--item cap"> {res.role} </div>

                  <div className="tr__item flex act--item"> 

                    <div className="action" onClick={ () => openEditModal(index) } > <Edit/> </div>
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

export default People
