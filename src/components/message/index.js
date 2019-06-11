import React from 'react';
import { Message, Transition } from 'semantic-ui-react'

import './message.scss'

const SuccessMessage = (props) => {
  const { MessageVisible } = props
  return (
    <Transition className="success-message" visible={MessageVisible} animation='scale' duration={1500}>
      <Message size='big'>
        <Message.Header>See you there!</Message.Header>
        <p>
          The details of the invitation have been sent to your email address
        </p>
      </Message>
    </Transition>
  )  
}

export default SuccessMessage