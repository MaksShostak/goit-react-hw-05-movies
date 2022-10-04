import React from 'react';
import PropTypes from 'prop-types';
import { IoArrowBackSharp } from 'react-icons/io5';
import { ButtonLink, Button } from './ButtonGoBack.styled';

const ButtonGoBack = ({ location }) => {
  // console.log(location);
  return (
    <ButtonLink to={location.state?.from ?? `/movies`}>
      <Button type="button">
        <IoArrowBackSharp /> Go back
      </Button>
    </ButtonLink>
  );
};

Button.propTypes = {
  location: PropTypes.object,
};

export default ButtonGoBack;
