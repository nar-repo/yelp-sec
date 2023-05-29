import React from 'react';



function Rows({item}) {


    return (    
        <tr>
            <td><a href={item.url} target="_blank"><img src={item.image_url} alt="restaurant" width="80" height="60"/></a></td>
            <td>{item.name}</td>
            <td>{item.rating}</td>
            <td>{item.price}</td>
            <td>{item.display_phone}</td>
        </tr>

    ) ;  
    
}  

export default Rows;