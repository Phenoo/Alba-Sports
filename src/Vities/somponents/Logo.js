import React from 'react'
import styled from 'styled-components'


const LogoText = styled.h4`
font-size: ${props => props.theme.fontlg};
text-transform: uppercase;
font-weight: 300;
letter-spacing: 2px;
font-family: 'Arvo';
}

`

const Logo = () => {
  return (
    <div>
      <LogoText>
      desco.com
      </LogoText>
    </div>
  )
}

export default Logo