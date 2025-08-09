'use client'
import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import img from '../../public/img2 (8).png';
import img1 from '../../public/img2 (9).png';
import img2 from '../../public/img2 (10).png';
import Image from 'next/image';

const Todo = () => {
    const [data, setData] = useState([
        { image: img1, name: "Hellen Jummy", name1: "Financial Counselor", lorem: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.", id: "1" },
        { image: img2, name: "Ralph Edwards", name1: "Math Teacher", lorem: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.", id: "2" },
        { image: img, name: "Hellena John", name1: "Psychology Student", lorem: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.", id: "3" },
    ]);

    function deleteUser(id) {
        setData(data.filter(el => el.id !== id));
    }

  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Addname, setAddname] = useState("");
    const [Addname1, setAddname1] = useState("");
    const [Addlorem, setAddlorem] = useState("");
    const [base64ImageAdd, setBase64ImageAdd] = useState("");

    const handleFileChangeAdd = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setBase64ImageAdd(reader.result);
            reader.readAsDataURL(file);
        }
    };

    function AddUser() {
        if (!Addname || !Addname1 || !Addlorem || !base64ImageAdd) {
            alert("Заполните все поля");
            return;
        }
        const newUser = {
            name: Addname,
            name1: Addname1,
            lorem: Addlorem,
            image: base64ImageAdd,
            id: Date.now().toString()
        };
        setData([...data, newUser]);
        setIsModalOpen(false);
        setAddname(""); setAddname1(""); setAddlorem(""); setBase64ImageAdd("");
    }

  
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [Editname, setEditname] = useState("");
    const [Editname1, setEditname1] = useState("");
    const [Editlorem, setEditlorem] = useState("");
    const [base64ImageEdit, setBase64ImageEdit] = useState("");
    const [editId, setEditId] = useState(null);

    const handleFileChangeEdit = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setBase64ImageEdit(reader.result);
            reader.readAsDataURL(file);
        }
    };

    function OpenEdit(el) {
        setIsModalEdit(true);
        setEditname(el.name);
        setEditname1(el.name1);
        setEditlorem(el.lorem);
        setBase64ImageEdit(typeof el.image === "string" ? el.image : "");
        setEditId(el.id);
    }

    function SaveEdit() {
        setData(data.map(user =>
            user.id === editId
                ? { ...user, name: Editname, name1: Editname1, lorem: Editlorem, image: base64ImageEdit }
                : user
        ));
        setIsModalEdit(false);
    }

    return (
        <div className='my-[100px] w-[90%] mx-auto'>
            <div className='flex justify-between my-[30px] items-center'>
                <p className='font-bold text-2xl lg:text-5xl'>What everyone says</p>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>Add User</Button>
            </div>

        
            <Modal title="Add User" open={isModalOpen} onOk={AddUser} onCancel={() => setIsModalOpen(false)}>
                <Input value={Addname} onChange={(e) => setAddname(e.target.value)} placeholder='Full Name...' className='my-2' />
                <Input value={Addname1} onChange={(e) => setAddname1(e.target.value)} placeholder='Job Title...' className='my-2' />
                <Input value={Addlorem} onChange={(e) => setAddlorem(e.target.value)} placeholder='Description...' className='my-2' />
                <input type="file" onChange={handleFileChangeAdd} className='my-2' />
                {base64ImageAdd && <img src={base64ImageAdd} alt="Selected" className='w-[100px] h-[100px] rounded-full object-cover mt-2' />}
            </Modal>

        
            <Modal title="Edit User" open={isModalEdit} onOk={SaveEdit} onCancel={() => setIsModalEdit(false)}>
                <Input value={Editname} onChange={(e) => setEditname(e.target.value)} placeholder='Full Name...' className='my-2' />
                <Input value={Editname1} onChange={(e) => setEditname1(e.target.value)} placeholder='Job Title...' className='my-2' />
                <Input value={Editlorem} onChange={(e) => setEditlorem(e.target.value)} placeholder='Description...' className='my-2' />
                <input type="file" onChange={handleFileChangeEdit} className='my-2' />
                {base64ImageEdit && <img src={base64ImageEdit} alt="Selected" className='w-[100px] h-[100px] rounded-full object-cover mt-2' />}
            </Modal>

    
            <div className='flex flex-wrap gap-[30px]'>
                {data.map(el => (
                    <div key={el.id} className='border p-[20px] rounded-2xl w-[100%] lg:w-[31%]'>
                        <p>{el.lorem}</p>
                        <div className='flex items-center gap-[20px] my-[20px]'>
                            <div>
                                {typeof el.image === "string" && el.image.startsWith("data:")
                                    ? <img src={el.image} alt="User" className='w-[60px] h-[60px] rounded-full object-cover' />
                                    : <Image src={el.image} alt="User" width={60} height={60} className='rounded-full' />}
                            </div>
                            <div>
                                <p className='font-bold text-2xl'>{el.name}</p>
                                <p className='text-gray-600 font-black'>{el.name1}</p>
                            </div>
                        </div>
                        <button onClick={() => deleteUser(el.id)} className='hover:text-red-600 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                        <button onClick={() => OpenEdit(el)} className='hover:text-blue-600 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;
