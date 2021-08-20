import React from 'react';

const apikey = `3d3e67d7703a9d49cccfc8e5686daa94`;

const Forms = () => {
    let output = "";
    fetch(`https://api.jotform.com/user/forms?apikey=${apikey}&orderby=id`)
    .then(response => response.json()).then(data => {
        output += `Hello ${data.content.username}`;
        data.content.forEach(element => {
            output += `<li>${element.title}<a href=https://form.jotform.com/${element.id}></a></li>`
            console.log(`https://form.jotform.com/${element.id}`)            
        });
    })
    .catch(err => console.log(err));   
    return(output);

}
    
export default Forms;