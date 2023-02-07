import * as  React from "react";

function SearchForm(props){
  return (
       
<div>
   <form>
        <div className="form-group">
            <label htmlFor="search">Search for a Book:</label>
            <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id = "search" 
            value = {props.search} name = "search" type = "text"
            placeholder = "Search for a book"
            onChange={props.handleinputchange}
            />
            <button onClick = {props.handleformsubmit} className = "btn btn-primary"> Book Search</button>
            
        </div>
    </form>
   
 
</div>

    )
   
}
export default SearchForm;
