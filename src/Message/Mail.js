import { useState } from "react";

const Mail = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function emailEnteredHandler(event) {
    setEnteredEmail(event.target.value)
  }

  function evaluateEmail(event) {
    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      setErrorMessage('Invalid email addres entered');
    } else {
      setErrorMessage('');
    }
  };

  return (
      <div>
          <input placeholder="Your email" type="email" onBlur={emailEnteredHandler}/>
          <br/>
          <button onClick={evaluateEmail}>Sumbit</button>
          <p>{errorMessage}</p>
      </div>
  )
}

export default Mail;