import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ username: 'shanu', message: 'Hi' }]);
  const [username, setUsername] = useState('');



  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your Name'));
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, { username: username, text: input }]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello, TechSaif Pro 🚀 </h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter a Message</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={sendMessage}>Send Message</Button>
      </form>

      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }
    </div>
  );
}

export default App;
