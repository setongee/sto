import React, {useState, useEffect} from 'react'
import './pages.scss';
import { getAdminData, updateAdminData } from '../../api/core/admin';
import Loader from '../../components/loader/loader';
import check from '../asset/correct.png';
import { Edit, Trash, Xmark } from 'iconoir-react';

const Agency = ({inData}) => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [ newAgency, setNewAgency ] = useState({});
  const [index, setIndex] = useState(0);


  const openEditModal = (e) => {

    setIndex(e);
    setNewAgency(data.agencies[e]);
    setIsEditModalOpen(true);

  }

  const closeEditModal = () => {

    setNewAgency({})
    setIsEditModalOpen(false);

  }

  const openModal = () => {

    setIsModalOpen(true);

  }

  const closeModal = () => {

    setNewAgency({})
    setIsModalOpen(false);

  }
  
  const onChange = (e) => {

    setNewAgency( (data) => {

      return {
        ...newAgency,
        [e.target.name] : e.target.value
      }

    } )

  }

  // delete an item
  const deleteItem = (index) => {

  const shouldDelete = confirm(`Do you want to delete ${data.agencies[index].name}`)

  if (shouldDelete) {
    
    const filterOpt = data.agencies.filter( (e, idx) =>  index !== idx  );
    data.agencies = filterOpt;
    updateData();

  }

}

  useEffect(() => {

    setData(inData);

  }, [inData]);

  const submitData = () => {

    const filterData = data.agencies.filter( res => res.name === newAgency.name);

    if(filterData.length) alert(`${newAgency.name} already exists, try another!`)
      else{
        data.agencies.push(newAgency);
        updateData();
    }

  }

  const submitEditData = () => {

    data.agencies[index] = newAgency; 
    updateData();

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

              <div className="topic"> Add Agency / Department / Unit </div>
              <div className="closeModal" onClick={ () =>  closeModal() } > <Xmark/> </div>

              <form>

                  <div className="form__child">
                    <label htmlFor="name"> Name </label>
                    <input type="text" name = "name" placeholder='Enter Name' value={newAgency.name} onChange={ (e) => onChange(e) } />
                  </div>

                  <div className="form__child">
                    <label htmlFor="name"> Category </label>
                    <select name="category" onChange = { (e) => onChange(e) } value={newAgency.category} >
                      <option value="" > ----- Select Category ----- </option>
                      <option value="agency"> Agency </option>
                      <option value="department"> Department </option>
                      <option value="unit"> Unit </option>
                    </select>
                  </div>

                  <div className="form__child submitAction" onClick={submitData}> Submit Agency </div>

              </form>


          </div>

        </div>

        : null

      }

      {
        isEditModalOpen ?

        <div className="addModal">

          <div className="addModal__card">

              <div className="topic"> Edit Agency / Department / Unit </div>
              <div className="closeModal" onClick={ () =>  closeEditModal() } > <Xmark/> </div>

              <form>

                  <div className="form__child">
                    <label htmlFor="name"> Name </label>
                    <input type="text" name = "name" placeholder='Enter Name' value={newAgency.name} onChange={ (e) => onChange(e) } />
                  </div>

                  <div className="form__child">
                    <label htmlFor="name"> Category </label>
                    <select name="category" onChange = { (e) => onChange(e) } value={newAgency.category} >
                      <option value="" > ----- Select Category ----- </option>
                      <option value="agency"> Agency </option>
                      <option value="department"> Department </option>
                      <option value="unit"> Unit </option>
                    </select>
                  </div>

                  <div className="form__child submitAction" onClick={submitEditData}> Submit Agency </div>

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

        <p> Agencies </p>

        <div className='flex gap__10'>
          <div className="actionBtn button__primary2" onClick={ () => openModal() } > Add Agency </div>
        </div>

      </div>

      <div className="tableData">

          <div className="table__item item__header flex">

            <div className="tr__item name--item"># Name</div>

            <div className="tr__item cat--item" >Category</div>

            <div className="tr__item" >Actions</div>

          </div>

          {
            data?.agencies?.length ? data.agencies.map( (res, index) => (

              <div className="table__item flex">

                <div className="tr__item name--item"> {index+1}. {res.name} </div>

                <div className="tr__item cat--item cap"> {res.category} </div>

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

export default Agency
