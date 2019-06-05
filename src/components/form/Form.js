import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

import './form.scss'

class FormInvite extends Component {
  state = {
    guests: '1'
  }

  handleChange = (name, e) => {    
    const change = {}
    change[name] = e.target.value
    this.setState({ ...change })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const tasker = this.state
    this.props.onFormSubmit(tasker)
  }

  render() {
    return(
      <div className="ui container form-container">
        <div className="form-wrapper">
          <h2 className="ui header form-title">Inschrijven*</h2>
          <Form>
            <Form.Group>
              <Form.Field required width={6} control={Input} placeholder='Voornaam' onChange={ e => this.handleChange('voornaam', e) }/>
              <Form.Field required width={6} control={Input} placeholder='Naam' onChange={e => this.handleChange('naam', e)} />
              <Form.Field required width={8} control={Input} placeholder='Email' onChange={e => this.handleChange('email', e)}/>
                <select className="ui dropdown" onChange={e => this.setState({ guests: e.target.value})}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <h3 className="form-people">Person/Personen</h3>
            </Form.Group>
              <div className="form-footer">
                <Button positive className="form-btn" onClick={ this.handleSubmit }>Bevestigen</Button>
                <h5 className="form-footer-note">*Dit event is helemaal gratis</h5>
              </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default FormInvite