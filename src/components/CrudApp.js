import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
      id: 1,
      name: "Seiya",
      constellation: "Pegaso",
    },
    {
      id: 2,
      name: "Shiryu",
      constellation: "Dragón",
    },
    {
      id: 3,
      name: "Hyoga",
      constellation: "Cisne",
    },
    {
      id: 4,
      name: "Shun",
      constellation: "Andrómeda",
    },
    {
      id: 5,
      name: "Ikki",
      constellation: "Fénix",
    },
  ];
  

export const CrudApp = () => {
    const [db, setdb] = useState(initialDb);
    const [dataToEdit, setdataToEdit] = useState(null)

    const createData = (data) => {
      data.id = Date.now();
     /*  console.log(data); */ 
       setdb([...db,data])
    };

    const updateData = (data) => {
      let newData = db.map(el => el.id === data.id ? data : el);
      setdb(newData);
    };

    const deleteData = (id) => {
      let isDelete = window.confirm(
        `Estas seguro de eliminar el id '${id}'`
      );

      if(isDelete) {
        let newData = db.filter(el => el.id !== id);
        setdb(newData);
      }else{
        return;
      }
    };

  return (
    <div>
      <h1>CRUD App</h1>
      <article className="grid-1-2">
      <CrudForm 
         createData={createData} 
         updateData={updateData} 
         dataToEdit={dataToEdit} 
         setDataToEdit={setdataToEdit}
      />
      <CrudTable 
        data={db} 
        setDataToEdit={setdataToEdit}
        deleteData={deleteData}/>
      </article>
    </div>
  )
}
