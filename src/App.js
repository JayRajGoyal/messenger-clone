import React ,{useState,useEffect} from 'react'
import {Button,FormControl,InputLabel,Input} from '@material-ui/core'
import './App.css';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from'react-flip-move'
import SendIcon from '@material-ui/icons/Send'
import IconButton from '@material-ui/core/IconButton'
import './Message.css'
function App() {
  const [input,setInput]= useState('')
  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState('Anonymus')

  useEffect(()=>{ 
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))  
    })
  }
  ,[])
  useEffect(()=>{
    setUsername(prompt('Enter your username'))
  },[])
  function sendmessage(event)
  {
    event.preventDefault()
    db.collection('messages').add({
      message:input,
      username:username?username:'Anonymus',
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages,{username:username,message:input}])
    setInput('')
  }
  return (
    <div className="App">
      <img src="https://en.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?h=100&w=100"/>
      <h1>Hello Programmer!</h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
      <FormControl className='messageBox'>
        <Input style={{flex:'0.9',backgroundColor:'#F1EEEE'}} value={input} onChange={event=>{setInput(event.target.value)}} placeholder="Enter a message..."/>
        <IconButton style={{flex:'0'}} type='submit' disabled={!input} variant='contained' color='primary' onClick={sendmessage}>
          <SendIcon/>
        </IconButton>
        {/* <Button disabled={!input} type='submit' variant='contained'color='primary' onClick={sendmessage}>Send messages</Button> */}
      </FormControl>
      </form>
      <FlipMove>
      {messages.map(m=>{return <Message key={m.id} username={username} message={m.message}/>})}
      </FlipMove>
    </div>
  );
}

export default App;
