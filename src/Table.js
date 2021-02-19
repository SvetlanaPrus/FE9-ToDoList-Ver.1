import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Table(props) {

    return (
        <div>
            <h5>List of items to buy:</h5>
            <ol>
                {props.items.map(el =>
                    <li key={el.id}>
                        {el.name} {el.price}
                        <button className="btn btn-primary m-2"
                                onClick={() => props.deleteFromList(el.id)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>
    )
}