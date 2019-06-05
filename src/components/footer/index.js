import React from 'react';
import logoBottom from '../../assets/images/logo_bottom.png'

const styles = {
  width: '365px',
  marginLeft: '-200px'
}

const Footer = () => {
  return (
    <div className="ui container">
      <img src={ logoBottom } style={styles} alt="Logo" />
    </div>
  )
}

export default Footer