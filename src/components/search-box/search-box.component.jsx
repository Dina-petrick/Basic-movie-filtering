import React from "react";
import './search-box.style.css'
class SearchBox extends React.Component{
  render(){

    const {onChangeHandler} = this.props;
    return(
      <input type="text" 
      className="search__bar" 
      placeholder="search movies"
      onChange={onChangeHandler}
      />
    )
}
}
  
export default SearchBox;