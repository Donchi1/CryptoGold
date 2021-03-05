import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
const igs = '../../assets/test1.jpg'

function Chat() {
  const theme = {
    background: '#f87d18',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'darkblue',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#12021d',
    botFontColor: '#fff',
    userBubbleColor: 'darkblue',
    userFontColor: '#fff',
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Welcome to cryptogold support. How can we help',
              trigger: '2',
            },
            {
              id: '2',
              user: true,

              trigger: 'q_name',
            },
            {
              id: 'q_name',
              message: 'what is your name',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: 'hi',
            },

            {
              id: 'hi',
              message: 'Hi {previousValue} nice to meet you',
              trigger: 'age',
            },

            {
              id: 'age',
              message: 'how old are you',
              trigger: 'q_age',
            },
            {
              id: 'q_age',
              user: true,
              validator: (value) => {
                if (!isNaN(value)) {
                  return true
                } else {
                  return 'please input numbers only.'
                }
              },
              trigger: 'q_gender',
            },
            {
              id: 'q_gender',
              message: 'choose your gender',
              trigger: 'gender_choose',
            },
            {
              id: 'gender_choose',
              options: [
                { value: 1, label: 'Male', trigger: 'q_member' },
                { value: 2, label: 'Female', trigger: 'q_member' },
              ],
            },

            {
              id: 'q_member',
              message: 'Are you a crypgold registered member?',
              trigger: 'member_answer',
            },
            {
              id: 'member_answer',
              options: [
                { value: 1, label: 'yes', trigger: 'intouch' },
                { value: 2, label: 'No', trigger: 'not_member' },
              ],
            },
            {
              id: 'not_member',
              message: 'How did you find us',
              trigger: 'how_find',
            },
            {
              id: 'how_find',
              user: true,
              trigger: 'intouch',
            },
            {
              id: 'intouch',
              message:
                'Sorry no customer service member available at this moment. Contact us directly on Whatsapp for quick and easier response or email us at support@cryptosgold.info thanks',

              end: true,
            },
          ]}
          floating={true}
          headerTitle="Cryptogold Support"
          botDelay={3000}
          userDelay={3000}
          botAvater={igs}
        />
      </ThemeProvider>
    </div>
  )
}

export default Chat
