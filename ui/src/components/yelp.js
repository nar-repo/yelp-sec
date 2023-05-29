import React from 'react';
import Rows from './rows.js';
import Table from 'react-bootstrap/Table';


function Yelp({ylist}) {

    return (    
        
            <Table striped hover>
                <thead>
                <tr>
                <th>Info</th>
                <th>Restaurant</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                    {ylist.map((ylist, i) => <Rows item={ylist}
                        key={i}/>)}
                </tbody>
            </Table>
        

    )
    
}

export default Yelp;