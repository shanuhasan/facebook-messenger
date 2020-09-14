import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react'
import './Message.css'

function Message(username, message) {
    const isUser = username === message.username;
    return (
        <div className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard" : "message_questCard"}>
                <CardContent>
                    <Typography variant="h5" component="h2" color="white">
                        {message.username}: {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    )
}

export default Message;
