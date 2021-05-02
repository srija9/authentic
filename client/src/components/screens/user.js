import React from 'react'

const user = ({privateData}) => {
    return(
        <div>
            {privateData.map((data, key) => (
                <div> 
                    <p>id: {data._id}</p>
                    <p>email: {data.email}</p>
                    <p>username: {data.username}</p>
                    <p>---------------------------------------------------------------------</p>
                </div>
            ))}
        </div>
    )
}

export default user;