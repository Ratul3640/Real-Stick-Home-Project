import React from 'react';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../FirebaseProvider/FirebaseProvider";

const UpdateProfile = () => {


    const { updateUser, user } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [photoURL, setPhotoURL] = useState('')

    const handleNameChange = (e) => {

        setName(e.target.value)
    }


    const handlePhotoURLChange = (e) => {

        setPhotoURL(e.target.value)
    }
    useEffect(() => {

        if (user) {
            setName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser(name, photoURL)
            .then(result => {

                console.log(result)
                setPhotoURL()
                location.reload()

            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div data-aos="fade-down" className='flex  mt-6 flex-col bg-gradient-to-br from-orange-100 to-blue-300 
    justify-center bg-opacity-5 shadow-md items-center mb-12 rounded-lg'>
            <div data-aos="fade-down" className="flex flex-col justify-center  p-10 mt-3 w-3/6   sm:px-12  mb-6 ">
                <h2 className="md:text-3xl text-xl font-bold text-center mb-4 text-black">My Profile</h2>
                {photoURL && (
                    <img src={photoURL} alt="Profile" className="w-24 h-24 mx-auto rounded-full aspect-square ring-2 ring-offset-4 bg-[#5BC0EB] mb-4" />
                )}
                <div className=" w-full text-center ">
                    <div className="">
                        <form onSubmit={handleSubmit} className=''>
                            <h2 className='text-center text-xs ml-30 md:text-2xl mb-4 '>{user?.email}</h2>
                            <div className='flex md:flex-col gap-4 justify-center'>
                                <label className='text-left md:text-lg mb-1 font-semibold text-white'>Name:</label>
                                <input type="text" className="input input-bordered border-2 mb-4 " placeholder="Name" value={name} onChange={handleNameChange} />
                            </div>
                            <div className='flex md:flex-col gap-4 justify-center mb-2'>
                                <label className='text-left md:text-lg  font-semibold text-white'>Photo URL:</label>
                                <input type="text" className="input input-bordered  border-2 mb-4" placeholder="Photo url" value={photoURL} onChange={handlePhotoURLChange} />
                            </div>
                            <button type="submit" className=" btn font-medium text-white w-full text-xs md:text-xl py-2 rounded-lg bg-[#5BC0EB] border-none">Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;