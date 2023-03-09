import React, {useEffect, useState} from 'react';
import "./modal.css"

function Modal({active,setActive,edit,setEdit}) {
    const [modalEditor,setModalEditor] = useState(edit)
    useEffect(() => {
        setModalEditor(edit)
    },[active])

    const handleChange = (e) => {
        if(e.target.value=== "Office" ){
            setModalEditor({...modalEditor,AddressType: true})
        }
        if(e.target.value=== "Home" ){
            setModalEditor({...modalEditor,AddressType: false})
        }
    }
    const submit = () => {
        setEdit(modalEditor)
        setActive(false)
    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <div>
                    <h1>Editor</h1>
                    <div className="EditeItem">
                    <label>Country</label>
                    <input value={modalEditor.Country} onChange={(e)=> setModalEditor({...modalEditor,Country: e.target.value}) } />
                    </div>
                    <div className="EditeItem">
                    <label>City:</label>
                    <input value={modalEditor.City} onChange={(e)=> setModalEditor({...modalEditor,City: e.target.value}) }/>
                    </div>
                    <div className="EditeItem">
                    <label>Street:</label>
                    <input value={modalEditor.Street} onChange={(e)=> setModalEditor({...modalEditor,Street: e.target.value}) }/>
                    </div>
                </div>
                <select className="MySelect" value={modalEditor.AddressType ? "Office" : "Home"} onChange={handleChange}>
                    <option value="Office">Office</option>
                    <option value="Home">Home</option>
                </select>
                <button type="submit" onClick={submit}>Submit</button>
            </div>

        </div>
    );
}

export default Modal;