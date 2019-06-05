import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

import db from '../../database/firebaseInit'
import Form from './Form'

const {
  REACT_APP_EMAILJS_TEMPLATEID: template,
  REACT_APP_EMAILJS_USERID: user_id,
  REACT_APP_EMAILJS_SERVICEID: serviceId,
} = process.env

class FormContainer extends Component {
  state = {

  }

  finishInvitation = (tasker) => {
    this.saveInDatabase(tasker)
    this.sendEmail(tasker)
  }

  saveInDatabase = (tasker) => {
    db.guests.add(tasker)
  }

  sendEmail = (tasker) => {
    const template_params = {
      name: `${tasker.voornaam} ${tasker.voornaam}`,
      guests: `${tasker.guests}`, 
    };

    emailjs.send(serviceId, template, template_params, user_id)
      .then( res => console.log('success', res.status, res.text))
      .catch(e => console.log('error', e))
  }

  render() {
    return(
      <Form onFormSubmit={ this.finishInvitation } />
    )
  }
}

export default FormContainer