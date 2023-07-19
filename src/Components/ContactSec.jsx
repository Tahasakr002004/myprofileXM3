import React, {useState} from 'react';
import Emailjs from '@emailjs/browser';
import style from '../modules/contacts.module.css';



// <!-- contact section design -->
function ContactSec () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState( '' );
    
    const sendEmail = ( event ) => {
        event.preventDefault();
        /////////
        Emailjs.sendForm(
            'service_xl8edzk',
            'template_mccwvzr',
            event.target,
            'uWMCq64tivT7vgTIm'
        ).then( response => {
            console.log( response );
             // Clear the form fields
            setName('');
            setEmail('');
            setNumber('');
            setSubject('');
            setMessage('');
   

            
        } ).catch( err => console.log( err ) );

       
    }

    
  return (
      <div className={style.container}>
             <section className={style.contact} id="contact">
                <h2 className={style.heading}>Kontakt<span>mich!</span></h2>
                <form action="###"  onSubmit={sendEmail} >
                    <div className={style['input-box']}>
                        <input type="text" placeholder="Vorname" name="vorname" value={name} onChange={(event) => setName(event.target.value)}/>
                        <input type="email" placeholder="Email Addresse" name="user_email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className={style['input-box']}>
                        <input type="number" placeholder="Handynummer" value={number} onChange={(event) => setNumber(event.target.value)} />
                        <input type="text" placeholder="Email-Betreff" value={subject} onChange={(event) => setSubject(event.target.value)} />
                    </div>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Deine Nachricht" value={message} onChange={(event) => setMessage(event.target.value)} ></textarea>
                    <input type="submit" value="An Taha Senden" className={style.btn}/>
                </form>
        </section>
      
      </div>
       
    
  )
};

export default ContactSec;

// import React, { useState } from 'react';
// import { google } from 'googleapis';
// import { GoogleAuth } from 'google-auth-library';

// const MyForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // Authenticate the user and obtain an access token
//     const auth = new GoogleAuth({
//       scopes: 'https://www.googleapis.com/auth/gmail.send',
//       credentials: {
//         // Insert the contents of your credentials file here
//       },
//     });
//     const { access_token } = await auth.getClient().authorize();

//     // Use the Gmail API to send an email
//     const gmail = google.gmail({ version: 'v1', auth });
//     await gmail.users.messages.send({
//       userId: 'me',
//       requestBody: {
//         raw: btoa(`From: ${email}\nTo: your.email@example.com\nSubject: New job application\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`),
//       },
//     });

//     // Clear the form fields
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//       </label>
//       <label>
//         Message:
//         <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;
