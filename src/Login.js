import React, { useState } from 'react'
import './log.css'
import Nav from "./nav"
import { useNavigate } from 'react-router-dom'
import Validation from './Validation'


const Login = () => {
    const logacc = [
        {
            email: 'sajin@amail.com',
            password: "sajin1S"
        },
        {
            email: "jack@amail.com",
            password: "jack1J"
        },
        {
            email: "jhon@amail.com",
            password: "jhon1J"
        }
    ]

    const navigete = useNavigate()

    const [errors, setErrors] = useState({});
    const [mail, setMail] = useState("");
    const [pin, setPin] = useState("");
    const [none, setNone] = useState(false);

    let values = {
        pin,
        mail
    }
    const hint = () => {
        setNone(true)
    }

    const close = () => {
        setNone(false)
    }

    function handlevalidation(event) {
        event.preventDefault()
        setErrors(Validation(values));

        if (logacc.find((e) => e.email === mail && e.password === pin)) {
            navigete("/loca/City")
        } else {


        }






    }
    return (
        <>
            <Nav />


            <div className="log">
                <form action="" className='card' onSubmit={handlevalidation}>
                    <label htmlFor="">Email address</label>
                    <input type="email" placeholder='jack@example.com' value={mail} onChange={(e) => setMail(e.target.value)} />


                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='******' value={pin} onChange={(e) => setPin(e.target.value)} />


                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}




                    {/* <Link to='/loca/City'>  */}

                    <div> <button>LOGIN</button></div>
                    {/* </Link> */}
                </form>
                <div className="hint">
                    <button onClick={hint}>HINT</button>

                    <div className={none ? "show" : "none"}>
                        <p>username:sajin@amail.com</p>
                        <p>password:sajin1S</p>
                        <button onClick={close}>close</button>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Login
