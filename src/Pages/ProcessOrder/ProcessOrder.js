import React from 'react';

const ProcessOrder = ({ order }) => {
    const { _id, name, email, address, city, mobile } = order;

    const handleDelete = id => {
        const deleteConfirm = window.confirm('Want to delete ?');
        if (deleteConfirm) {
            // const url = `http://localhost:3050/orders/${id}`;
            const url = `https://haunted-castle-35810.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('User deleted successfully. Reload for remaining orders');
                    }
                })
        }
    }

    return (
        <tr className="text-center">
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{city}</td>
            <td>{mobile}</td>
            <button onClick={() => handleDelete(_id)} className="bg-danger text-white btn btn-danger py-1 my-1">Delete</button>
        </tr>
    );
};

export default ProcessOrder;