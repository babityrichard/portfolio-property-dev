import React, { useRef } from 'react';

const ContactForm = ({ onAddFormData }) => {
    const nameRef = useRef(null);
    const emailAddrRef = useRef(null);
    const messageRef = useRef(null);

    const submitHandler = e => {
        e.preventDefault();

        const formData = {
            name: nameRef.current.value,
            email: emailAddrRef.current.value,
            message: messageRef.current.value,
        }
        
        onAddFormData(formData);        

        nameRef.current.value = '';
        emailAddrRef.current.value = '';
        messageRef.current.value = '';
    }    

    return (
        <form onSubmit={submitHandler}>
            <div className="form-name">
                <label htmlFor="name">Your Name:</label>    
                <input 
                    ref={nameRef}
                    type="text" 
                    id="name"
                    required 
                />
            </div>    
            <div className="form-email">
                <label htmlFor="email">Email address:</label>    
                <input 
                    ref={emailAddrRef}
                    type="email" 
                    id="email"
                    required 
                />
            </div>  
            <div className="form-email">
                <label htmlFor="message">Your message:</label>    
                <textarea 
                    ref={messageRef}
                    id="message" 
                    rows="10">
                </textarea>
            </div>  
            <div className="form-button">
                <button>Send Email</button>    
            </div>
        </form>
    )
}

export default ContactForm;
