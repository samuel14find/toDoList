import React from 'react'
import PropTypes from 'prop-types';
export function TodoListItem(props) {
    return(
        <div>
            <b style={{textDecoration: props.status === 'completed' ? 'line-through': 'none'}}>{props.name}</b>
            <input type='checkbox' onChange={(event)=> props.onToggleCompleted(props.id, event)}/>
        </div>
    )
}
TodoListItem.propTypes ={
    id:PropTypes.number,
    name:PropTypes.string,
    status:PropTypes.string,
    onToggleCompleted:PropTypes.func
};