import React from 'react';

const Form = (props) => {
  return ( 
    <form onChange={props.change}>
      <input 
        type="text" 
        value={props.value}
        placeholder="Wpisz miasto..."
        />
      <button 
        type="submit">Wyszukaj miasta</button> 
    </form>
   );
}
 
export default Form;