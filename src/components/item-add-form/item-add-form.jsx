import React from 'react';
import './item-add-form';

export default class ItemAddForm extends React.Component{


    render(){
        return(
            <div className="item-add-form">

                <button
                 className="btn btn-outline-secondary"
                 onClick={()=>this.props.onItemAdded('hello samer')}
                 >
                     Add Item</button>
            </div>
        )
    }
}