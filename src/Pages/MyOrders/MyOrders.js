import React, { useEffect, useState } from 'react';
import useAuth from './../../Hooks/useAuth';
import Table from 'react-bootstrap/Table'
import ProcessOrder from '../ProcessOrder/ProcessOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const client = user.displayName;

    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        // const url = `http://localhost:3050/orders?name=${client}`;
        const url = `https://haunted-castle-35810.herokuapp.com/orders?name=${client}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data.myOrderInfo))
    }, [client])

    return (
        <div className="col-lg-12 col-sm-12">
            <h2 className="text-center fw-bold fst-italic my-3">My Orders</h2>
            <div className="col-lg-10 col-sm-12 mx-auto mt-4 mb-5 overflow-auto">
                <Table className="px-5" bordered hover>
                    <thead>
                        <tr className="text-center">
                            <th>#ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Mobile</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder.map(order => <ProcessOrder
                                key={order.id}
                                order={order}
                            ></ProcessOrder>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;