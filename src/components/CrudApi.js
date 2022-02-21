import React, { useEffect, useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';
import Message from './Message';
import Loader from './Loader';


  

export const CrudApi = () => {
    const [db, setdb] = useState(null);
    const [dataToEdit, setdataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    let api = helpHttp();
    let url = "http://localhost:5000/santos";

    useEffect(()=>{
      setLoading(true);
      helpHttp().get(url).then((res) => {
          //console.log(res);
          if (!res.err) {
            setdb(res);
            setError(null);
                        
          } 
         
        }).catch((err)=>{

          setError(err);
          setdb(null);
          
        
        }).finally(()=>{setLoading(false);})
                
    },[]);

    const createData = (data) => {
      data.id = Date.now();
     /*  console.log(data); */ 

     let options = {
       body: data,
       headers:{"content-type":"application/json"}
      }

     api.post(url, options).then((res)=>{
       console.log(res);

       if(!res.err){
         setdb([...db,res]);
         
       }else{
         setError(res);
       }
     })
       
       setdb([...db,data]);       
       
    };

    const updateData = (data) => {
      let endpoint = `${url}/${data.id}`;
      console.log(endpoint);

      let options = {
        body: data,
        headers: {"content-type":"application/json"}
      }
 
      api.put(endpoint, options).then((res)=>{
       // console.log(res);
 
        if(!res.err){
           let newData = db.map(el => ( el.id === data.id ? data : el));
           setdb(newData);
        }else{
          setError(res);
        }
      });
        
    };

    const deleteData = (id) => {
      let isDelete = window.confirm(
        `Esta seguro de eliminar el registro con el id '${id}'?`
      );

      if(isDelete) {
        let endpoint = `${url}/${id}`;
        let options = {
          headers: {"content-type":"application/json"},
        };

        api.del(endpoint,options).then(res=>{
          //console.log(res);
          if(!res.err) {
            let newData = db.filter((el)=> el.id !== id);
            setdb(newData);
          }else {
            setError(res);
          }
        })
      } else {
        return;
      }
    };

  return (
    
    <div>
      <h2>CRUD API</h2>
      <article className='grid-1-2'>
        <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setdataToEdit={setdataToEdit}
        />
        {loading && <Loader/>}
        {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545"/>}
       
        {db &&( 
          <CrudTable
          data={db}
          setdataToEdit={setdataToEdit}
          deleteData={deleteData}
          />)
        }
      </article>
    </div>
  )
}

export default CrudApi