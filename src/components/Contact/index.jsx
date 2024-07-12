import React,{useState,useRef,useEffect} from "react";
import './index.css'
import mail from '../../assets/email.png'
import location from '../../assets/location.png'
import bottle from '../../assets/bottle.png'

export default function Contact(){
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    
    const ContactRef=useRef(null)

    const options={
        threshold:0
    }

    useEffect(()=>{
        const observerContact=new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("ContactAnimate")
                    observerContact.unobserve(entry.target)
                }
            })
        },options)
        observerContact.observe(ContactRef.current)
    },[])

    function sendEmail(event){
        event.preventDefault();
        const params={
            user_name:document.querySelector("#user_name").value,
            email_id:document.querySelector("#email_id").value,
            message:document.querySelector("#message").value
        }
        if(!validateEmail(email)){
            alert("Please enter a valid email.")
            return
        }
        emailjs.send("service_f5n5iew","template_ur75cug",params)
        .then(()=>alert("Email sent successfully. I will connect to you asap.")).catch((err)=>alert("Email not sent."))
    }
    function handleEmail(event){
        setEmail(event.target.value)
        
        if(!validateEmail(event.target.value))setError("Please enter a valid email")
        else setError('')
        if(event.target.value=='')setError('')
    }
    function validateEmail(email){
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(regex.test(String(email).toLowerCase()))return true;
        return false;
    }
    return (
        <div className="contactPage">
            <div ref={ContactRef} className="Contact">
                <div className="leftPane">
                    <div className="leftPaneBody">
                        <div className="contactDeclaration">
                            <p className="partner">Let's Partner up!!</p>
                            <p className="partnerSupp">Together for a better solution</p>                        
                        </div>
                        <form onSubmit={sendEmail}>
                            <div className="nameWrapper">
                                <label htmlFor="user_name">Name</label><br/>
                                <input type="text" id="user_name" placeholder={"Enter your Name"} required/>
                            </div>
                            <div className="emailWrapper">
                                <label htmlFor="email_id">Email</label><br/>
                                <input type="email" id="email_id" placeholder={"Enter your Email"} value={email} onChange={handleEmail} required/>
                                {error && <p style={{ color: 'red' ,fontSize:15 }}>{error}</p>}
                            </div>
                            <div className="messageWrapper">
                                <label htmlFor="message">Message</label><br/>
                                <textarea type="text" id="message" placeholder={"Message"} rows={3}  required/>
                            </div>
                            <div className="submitWrapper"><input type="submit" value="Submit"/></div>
                        </form>
                    </div>
                </div>
                <div className="rightPane">
                    <div className="contactInfoBody">
                        <div>Contact Me</div>
                        <div className="myEmail"><a href="mailto:utpal6dubey@gamil.com" ><img src={mail} alt="email" height={30} /> <div style={{paddingTop:2,paddingLeft:12}}>utpal6dubey@gmail.com</div></a></div>
                        <div className="myLocation"><img src={location} alt="location" height={30} style={{paddingTop:20}}/><div style={{paddingLeft:12}}> Indian Institute of Technology Kanpur<br/>Kanpur, Uttar Pradesh, India 208016</div></div>
                        <div style={{display:"flex",justifyContent:"center"}}><img src={bottle} alt="bottle" height={150} width={195} padding={0} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}