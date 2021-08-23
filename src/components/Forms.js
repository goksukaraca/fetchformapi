import React, { useState } from 'react';

const apikey = `3d3e67d7703a9d49cccfc8e5686daa94`;

const Forms = () => {

    const [data, setData] = useState([]);

    const apiGet = e =>{
        console.log(e);
        e.preventDefault();
        fetch(`https://api.jotform.com/user/forms?apikey=${apikey}&orderby=id`)
        .then(response => response.json()).then(veri => {
            setData(veri.content);
            console.log(veri.content)
        });
    };
    
    console.log(data);   

    return(
        <div className="container">
            <button onClick = {apiGet} className = "button-api">!!!Click to see your JotForm Forms!!!</button>
            <form className="form-api">
                <ul>
                {data.map(item => 
                        (<li key={item.id}>
                            <a target="_blank" href={`https://form.jotform.com/${item.id}`}>{item.title}</a> 
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );

}
    
export default Forms;