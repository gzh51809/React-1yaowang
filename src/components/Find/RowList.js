import React, { Component } from "react";
import "../../sass/RowList.scss"

class RowList extends Component {
  render() {
      let { list } = this.props;
    return(
        <div>
            <ul className="rowList">
                {
                    list.map((item, idx) =>{
                        return(
                            <li key={idx}>
                                <img src={item.pic} alt={item.name}/>
                                <span>{item.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
  }
}

export default RowList;
