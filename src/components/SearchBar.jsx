import React from 'react'

const SearchBar = ( {handleSubtmit ,setPais} ) => {
 
  
  return (
    <div className="row d-flex justify-content-center mt-4">
        <div className="col-6 d-flex justify-content-center ">
            <form action="" className='form-group '  onSubmit={(e)=>handleSubtmit(e)}>
                <input type="text" className='input-clase' placeholder='Pais ' onChange={(e) => setPais(e.target.value)} />
                <button className='btn btn-outline-primary'>Buscar</button>
            </form>
        </div>
    </div>
  )
}

export  {SearchBar}