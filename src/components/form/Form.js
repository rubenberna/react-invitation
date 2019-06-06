import React, { Component } from 'react'
import { Button, Form, Input, Transition, Dropdown } from 'semantic-ui-react'

import './form.scss'

const nrGuests = [
  { key: 1, value: 1, text: 1 },
  { key: 2, value: 2, text: 2 },
  { key: 3, value: 3, text: 3 },
  { key: 4, value: 4, text: 4 },
]

class FormInvite extends Component {
  state = {
    guests: '1',
    visible: true,
  }

  toggleVisibility = () => {
    this.setState({visible: false })
  } 

  handleChange = (name, e) => {    
    const change = {}
    let inputValue = e.target.value
    if (name === 'voornaam' || 'naam') {
      inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    }
    change[name] = inputValue
    this.setState({ ...change })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { naam, voornaam, email, guests } = this.state
    const tasker = {
      naam,
      voornaam,
      email,
      guests
    }
    this.validateForm(tasker)
  }

  validateForm = (tasker) => {
    let change = {}
    let ready = true
    for (const key in tasker) {
      let value = tasker[key]
      if (value === undefined || value === '' || value === 'error') {
        change[key] = 'error'
        ready = false
        this.setState({ ...change })
      }
    }
    if (ready) {
    this.props.onFormSubmit(tasker)
    this.toggleVisibility()
    }
  }

  clearError = (property) => {
    const change = {}
    change[property] = ''
    this.setState({ ...change })
  }

  render() {
    const { visible, voornaam, naam, email, guests } = this.state
    return(
      <Transition visible={visible} animation='horizontal flip' duration={1500}>
        <div className="ui container form-container">
          <div className="form-wrapper">
            <h2 className="ui header form-title">Inschrijven*</h2>
            <Form>
              <Form.Group>
                <Form.Field width={6} control={Input} placeholder='Voornaam' error={voornaam === 'error'} onChange={e => this.handleChange('voornaam', e)} onFocus={e => this.clearError('voornaam')} />
                <Form.Field width={6} control={Input} placeholder='Naam' error={naam === 'error'} onChange={e => this.handleChange('naam', e)} onFocus={e => this.clearError('naam')} />
                <Form.Field width={8} control={Input} placeholder='Email' error={email === 'error'} onChange={e => this.handleChange('email', e)} onFocus={e => this.clearError('email')} />
                <Dropdown placeholder='1' error={guests === 'error'} style={{minWidth: '10px'}} selection options={nrGuests} onChange={e => this.setState({guests: e.target.innerText})}/>
                <h3 className="form-people">Person/Personen</h3>
              </Form.Group>
                <div className="form-footer">
                <Button positive className="form-btn" onClick={e => { this.handleSubmit(e);}} >Bevestigen</Button>
                  <h5 className="form-footer-note">*Dit event is helemaal gratis</h5>
                </div>
            </Form>
          </div>
        </div>
      </Transition>
    )
  }
}

export default FormInvite