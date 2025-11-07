import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const MyBids = () => {

    const { user } = use(AuthContext);
    const [bids, setBids] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/bids?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setBids(data);
                })
        }
    }, [user?.email]);

    const handleDeleteBid = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/bids/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your bid has been deleted.",
                                icon: "success"
                            });
                            const remainingBids = bids.filter(bid => bid._id !== _id);
                            setBids(remainingBids);
                        }
                    })

                x
            }
        });

    };

    return (
        <div className='mx-20'>
            <div>
                <h3 className="font-bold text-center text-3xl mb-10 mt-20 ">My Bids: <span className='text-purple-700'>{bids.length}</span></h3>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL No.</th>
                                <th>Buyer Name</th>
                                <th>Buyer Email</th>
                                <th>Bid Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}


                            {
                                bids.map((bid, index) => <tr>
                                    <th> {index + 1} </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{bid.buyer_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {bid.buyer_email}
                                    </td>
                                    <td>
                                        {bid.bid_price}
                                    </td>

                                    <td className='badge badge-warning mt-5'>{bid.status}</td>

                                    <td>
                                        <button className="btn bg-transparent text-purple-600 border-2 border-purple-600 hover:text-white hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] px-2 transition-all mr-2">Edit</button>

                                        <button onClick={() => handleDeleteBid(bid._id)} className="btn bg-transparent text-red-600 border-2 border-red-600 hover:text-white hover:bg-red-600 px-2 transition-all mr-2">Delete</button>

                                        <button className="btn bg-transparent text-green-600 border-2 border-green-600 hover:text-white hover:bg-green-600 px-2 transition-all">Make Sold</button>

                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBids;