import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

import db from '../../database/firebaseInit'
import Form from './Form'

const {
  REACT_APP_EMAILJS_TEMPLATEID: template_id,
  REACT_APP_EMAILJS_USERID: user_id,
  REACT_APP_EMAILJS_SERVICEID: service_id,
} = process.env

class FormContainer extends Component {
  state = {
    formSubmitted: false
  }

  finishInvitation = (tasker) => {
    this.saveInDatabase(tasker)
    this.sendEmail(tasker)
    this.setState({ formSubmitted: true })
  }

  saveInDatabase = (tasker) => {
    db.guests.add(tasker)
  }

  sendEmail = (tasker) => {
    const template_params = {
      name: `${tasker.voornaam} ${tasker.naam}`,
      guests: `${tasker.guests}`,
      email: `${tasker.email}`,
      image: `<div><img src='https://firebasestorage.googleapis.com/v0/b/kik-invitations.appspot.com/o/logo_bottom.png?alt=media&token=1d4f608f-5b05-41da-a4ad-986391478da6' alt='KlaarisKees' style='width:300px'/></div>` 
    };

    emailjs.send(service_id, template_id, template_params, user_id)
      .then( res => console.log('success', res.status, res.text))
      .catch(e => console.log('error', e))
  }

  render() {
    return (
      <div>
        <Form onFormSubmit={this.finishInvitation} />   
      </div>
    )
  }
}

export default FormContainer