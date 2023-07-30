import React, {useState} from 'react';
import Emailjs from '@emailjs/browser';
import style from '../modules/contacts.module.css';
import ModalCheck from './modals/ModalCheck';


// <!-- contact section design -->
function ContactSec () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState( '' );
     const [showModal, setShowModal] = useState( false);

    
    const checkValidationForm = (email) => {
        const rgExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if ( email === "" ) {
             console.log( `please enter valid email` );
             setShowModal( true );
             return false;
            
        } else if ( !rgExp.test( email ) ) {
            console.log( "Email is not valid" );
             setShowModal( true );
             return false;
        } else {
             console.log( email );
             true;
        }
    }
    const actionBar = <span className="text-red-600">Geben Sie Email/Name richitig ein!</span>;

    let modal = <ModalCheck onClose={() => setShowModal( false )} actionBar={actionBar}></ModalCheck>
    
    
    const sendEmail = async ( event ) => {
        event.preventDefault();
        /////////
        let check = checkValidationForm( email );
        if (check) {
        await Emailjs.sendForm(
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
        
   }
            
            

        return (
          <div className={style.container}>
             <section className={style.contact} id="contact">
                <h2 className={style.heading}>Kontakt<span>mich!</span></h2>
                <form action="###"  onSubmit={sendEmail} >
                    <div className={style['input-box']}>
                        <input type="text" placeholder="Vorname" name="vorname" value={name} onChange={(event) => setName(event.target.value)}/>
                        <input type="email" placeholder="Email Addresse" name="user_email" value={email} onChange={( event ) => setEmail( event.target.value )} />
                    </div>
                    <div className={style['input-box']}>
                        <input type="number" placeholder="Handynummer" value={number} onChange={(event) => setNumber(event.target.value)} />
                        <input type="text" placeholder="Email-Betreff" value={subject} onChange={(event) => setSubject(event.target.value)} />
                    </div>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Deine Nachricht" value={message} onChange={(event) => setMessage(event.target.value)} ></textarea>
                       
                        <input type="submit" value="An Taha Senden" className={style.btn} />
                               
                         
                </form>
                    {showModal && modal} 
        </section>
      
      </div>
       
    
  )
};

export default ContactSec;
