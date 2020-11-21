import React,{useState,forwardRef} from 'react'
import {Card,CardContent,Typography} from'@material-ui/core'
import './Message.css'

const Message = forwardRef((props,ref) =>  {
    const {message,username} = props.message
    const isUser = username===props.username
    return(
        <div ref={ref} className={isUser?'userMessage':'guestMessage'}>
        <Card className={isUser?'userCard':'guestCard'}>
            <CardContent>
                <Typography
                color='white'
                variant='h5'
                conponent='h2'    
                >
                     {isUser?message:`${username}: ${message}`}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
}
)

export default Message