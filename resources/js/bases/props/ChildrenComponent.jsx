import PropTypes from 'prop-types';

export const ChildrenComponent = ({ btnText }) => {
  return <button>{btnText}</button>;
};

ChildrenComponent.propTypes = {
  btnText: PropTypes.string.isRequired,
};
