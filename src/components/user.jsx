import React from 'react';
import { useLoaderData } from 'react-router-dom';


const User = () => {

    let data = useLoaderData()




    return (
        <div>
            {
                data.map(res => <p key={res._id}>{res.name}</p>)
            }
        </div>
    );
};

export default User;