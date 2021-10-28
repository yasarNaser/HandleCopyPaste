import './App.css';
import { useRef } from 'react'
function App() {
    const emailRef = useRef()
    const pswdRef = useRef()

    const handleCopy = (e) => {
        emailRef.current.innerText = 'Copy is detected in email'
    }
    const handlePaste = (e) => {
        if (e.target.type === "email"){
            emailRef.current.innerText = 'Paste is detected in email'

        }else{
            pswdRef.current.innerText = 'Paste is detected in password'

        }
    }

    return (
        <div className="App">
            <form>
                <label>
                    <p>Email</p>
                    <input
                        type="email"
                        className={'email'}
                        onCopy={handleCopy}
                        onPaste={handlePaste}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        className={'password'}
                        onPaste={handlePaste}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {emailRef && <span id = "emailDetect"  ref={emailRef}></span>} <br></br>
            {pswdRef && <span id = "passwordDetect" ref={pswdRef}></span>}
        </div>
    );
}

export default App
