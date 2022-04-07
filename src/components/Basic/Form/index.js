import PropTypes from 'prop-types';

const Form = ({ children, ...props }) => <form {...props}>{children}</form>;

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

export default Form;
