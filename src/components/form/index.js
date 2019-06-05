import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

import './form.scss'

const peopleInvited = [
  { key: '1', value: '1', text: '1' },
  { key: '2', value: '2', text: '2' },
  { key: '3', value: '3', text: '3' },
  { key: '4', value: '4', text: '4' },
 
]

class Form extends Component {
  render() {
    return(
      <div className="ui container form-container">
        <div className="form-wrapper">
          <h2 className="ui header form-title">Inschrijven*</h2>
          <form className="ui form">
            <div className="equal width fields">
              <div className="eight wide field">
                <div className="ui fluid input">
                  <input type="text" placeholder="Voornaam" />
                </div>
              </div>
              <div className="eight wide field">
                <div className="ui fluid input">
                  <input type="text" placeholder="Naam" />
                </div>
              </div>
              <div className="field">
                <div className="twelve wide ui fluid input">
                  <input type="email" placeholder="E-mailadres" />
                </div>
              </div>
              <div className="four wide field">
                <Dropdown
                  placeholder='1'
                  fluid
                  search
                  selection
                  options={peopleInvited}
                />
              </div>
              <div className="form-personen">
                <h3>Person/Personen</h3>
              </div>
            </div>
          </form>
          <div className="form-footer">
            <button className="positive ui button form-btn">Bevestigen</button>
            <h5 className="form-footer-note">*Dit event is helemaal gratis</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Form