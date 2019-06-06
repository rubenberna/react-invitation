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
    // this.sendEmail(tasker)
    console.log('saved');
    this.setState({ formSubmitted: true })
  }

  saveInDatabase = (tasker) => {
    db.guests.add(tasker)
  }

  sendEmail = (tasker) => {
    const template_params = {
      name: `${tasker.voornaam} ${tasker.voornaam}`,
      guests: `${tasker.guests}`,
      email: `${tasker.email}` 
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