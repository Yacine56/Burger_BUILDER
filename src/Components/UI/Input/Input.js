import React from 'react'
import classes from './Input.css' 


const Input =(props)=>{
    let inputElement=null
    let inputClasses=[classes.InputElement]
   if(props.invalid && props.touched){
       inputClasses.push(classes.Invalid)
   }

           switch(props.elementType){
               case 'input': inputElement=<input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} /> ;break;
               case 'textarea':inputElement=<textarea className={inputClasses.join()} {...props.elementConfig} value={props.value} onChange={props.changed} />;break;
               case 'select': inputElement=(<select>
                              {props.elementConfig.options.map(opt=>{
                               return  ( <option value={opt.value} key={opt.value}>
                                      {opt.displayValue}
                                  </option>) 
                              })} 
                            </select>);break;
               default: inputElement=<input className={inputClasses.join()} {...props.elementConfig} value={props.value} />
            }
            let validationError = null;
if (props.invalid && props.touched) {
    validationError = <p className={classes.ValidationError}>Please enter a valid value!</p>;
}
    return(
        <div className={classes.Input}>
            <label className={classes.Label} >{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
}

export default Input