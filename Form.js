import React ,{ Fragment, useState}from 'react';
// import './Form.css'
import Styledbtn from "./Form.style"

const Form = () => {
 const [data, setdata] = useState('');
 function handleSubmit(e){
  e.preventDefault()
// console.log(e.target[3].value)
let obj={
 name:e.target[0].value,
 Email:e.target[1].value,
 Class:e.target[2].value,
 section:e.target[3].value,
 Date:e.target[4].value
}
setdata(obj)
 }
 // console.log(data);
 
  return (
   <Fragment>
    <form action='' id='form' onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor='name'>Name:</label>
      <input type="text" id='name' required></input>
      <label htmlFor='email'>Email:</label>
      <input type="email" id='email' required></input>
      <label htmlFor='class'>class:</label>
      <input type="text" id='class'required></input>
      <label htmlFor='section'required>section:</label>
     <select id='section'>
<option>A</option>
<option>B</option>
<option>C</option>
     </select>
     <label htmlFor='date'>DOB:</label>
     <input type="date" id='date' required></input>
     <Styledbtn variant="outline" type="submit">
     {/* <input type="submit" ></input> */}
     </Styledbtn>
    </form>
    <div id='data'>
     <h1>{data.name}</h1>
     <h1>{data.Email}</h1>
     <h1>{data.Class}</h1>
     <h1>{data.section}</h1>
     <h1>{data.Date}</h1>
     
    </div>
    </Fragment>
  );
}

export default Form;
