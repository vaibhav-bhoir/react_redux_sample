import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../redux/useSlice';

const Update = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("") ;

    const user  = useSelector((state) => state.user)

    const changeUser = {
        name:name,
        email:email
    }

    const dispatch = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(update(changeUser))

    }



    return (
        <div className="update">
            <div className="updateWrapper">
                <h3 className="updateTitle">Update Your Account</h3>
                <div className="updateContainer">
                    <form>
                        <div className="formItem">
                            <label>Username</label>
                            <input
                                className="formInput"
                                type="text"
                                placeholder={user.name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="formItem">
                            <label>Email</label>
                            <input
                                className="formInput"
                                type="text"
                                placeholder={user.email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>
                        <button className="updateButton" onClick={handleUpdate}>Update</button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Update