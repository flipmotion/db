import React from 'react';
import styled from 'styled-components';
import interfaceIn from './interfaceIn';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fadeFromBottom, almostIn, fadeFromRight } from '../../animations';

const FixedWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  padding: 1em;
  justify-content: space-between;
  box-sizing: border-box;
`;

const CloseButton = styled(
  ({ transitionDuration, transitionStage, delayIn, delayOut, ...props }) => (
    <Link {...props} to="#">
      X
    </Link>
  )
)`
  align-self: flex-start;
  text-decoration: none;
  ${fadeFromRight};
`;

CloseButton.propTypes = {
  transitionDuration: PropTypes.number.isRequired,
  transitionStage: PropTypes.oneOf(['entering', 'entered', 'exiting', 'exited'])
    .isRequired,
  delayIn: PropTypes.number,
  delayOut: PropTypes.number
};

const SubmitButton = styled.button.attrs({ type: 'submit' })`
  padding: 2em;
  width: 100%;
  background: white;
  border: 1px solid black;
  cursor: pointer;
`;

// Just for symmetry with CloseButton
function BalanceArea(props) {
  return <CloseButton {...props} style={{ visibility: 'hidden' }} />;
}

function Field({
  icon,
  onChange,
  value,
  validationErrors,
  displayValidationErrors
}) {
  const invalid = displayValidationErrors && !!validationErrors();
  return (
    <div style={invalid ? { background: 'red' } : {}}>
      <label>
        {icon}
        <input value={value} onChange={onChange} />
        {displayValidationErrors && validationErrors()}
      </label>
    </div>
  );
}

Field.propTypes = {
  icon: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  validationErrors: PropTypes.func.isRequired,
  displayValidationErrors: PropTypes.bool.isRequired
};

class Form extends React.Component {
  static propTypes = {
    lang: PropTypes.string.isRequired
  };

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameValidationErrors = this.nameValidationErrors.bind(this);
    this.phoneValidationErrors = this.phoneValidationErrors.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.phrase = this.phrase.bind(this);
    this.state = {
      name: '',
      phone: '',
      displayValidationErrors: false,
      submitted: false
    };
  }

  phrase(phraseId) {
    return interfaceIn(this.props.lang)(phraseId);
  }

  nameValidationErrors() {
    return this.state.name.length < 3
      ? this.phrase('The name must be at least 3 chars long')
      : '';
  }

  phoneValidationErrors() {
    return this.state.phone.length < 11
      ? 'The phone must be at least 11 chars long'
      : '';
  }

  handleSubmit(event) {
    event.preventDefault();
    const fieldsAreOK =
      this.nameValidationErrors().length === 0 &&
      this.phoneValidationErrors().length === 0;
    if (fieldsAreOK) {
      this.setState({ displayValidationErrors: false, submitted: true });
      // TODO: should actually submit
      console.log('The form (kind of) submitted');
    } else {
      this.setState({ displayValidationErrors: true, submitted: false });
    }
  }

  handleNameChange(event) {
    const name = event.target.value;
    // i.e. trim numbers
    this.setState({ name });
  }

  handlePhoneChange(event) {
    const phone = event.target.value;
    // dance with brackets, 8 => +7
    this.setState({ phone });
  }

  render() {
    const phrase = interfaceIn(this.props.lang);
    return this.state.submitted ? (
      <p>{phrase("thanks for the eqnuiry, we'll call you back")}</p>
    ) : (
      <form onSubmit={this.handleSubmit}>
        <Field
          icon={
            <span role="img" aria-label="Name">
              👨‍💼
            </span>
          }
          displayValidationErrors={this.state.displayValidationErrors}
          value={this.state.name}
          validationErrors={this.nameValidationErrors}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <Field
          icon={
            <span role="img" aria-label="Phone">
              📞
            </span>
          }
          displayValidationErrors={this.state.displayValidationErrors}
          value={this.state.phone}
          validationErrors={this.phoneValidationErrors}
          onChange={this.handlePhoneChange}
        />
        <SubmitButton>Submit</SubmitButton>
      </form>
    );
  }
}

const Main = styled(
  ({
    lang,
    transitionDuration,
    transitionStage,
    delayIn,
    delayOut,
    ...otherProps
  }) => {
    const phrase = interfaceIn(lang);
    return (
      <div {...otherProps}>
        <h1>{phrase('fill the from')}</h1>
        <Form lang={lang} />
      </div>
    );
  }
)`
  align-self: center;
  background: white;
  padding: 3em;
  ${fadeFromBottom};
`;

Main.propTypes = {
  transitionDuration: PropTypes.number.isRequired,
  transitionStage: PropTypes.oneOf(['entering', 'entered', 'exiting', 'exited'])
    .isRequired,
  delayIn: PropTypes.number,
  delayOut: PropTypes.number
};

const Cover = styled(FixedWrapper)`
  background: rgb(230, 230, 230);
  ${almostIn};
`;

Cover.propTypes = {
  transitionDuration: PropTypes.number.isRequired,
  transitionStage: PropTypes.oneOf(['entering', 'entered', 'exiting', 'exited'])
    .isRequired,
  delayIn: PropTypes.number,
  delayOut: PropTypes.number
};

const Enquiry = ({ lang, transitionStage, transitionDuration }) => (
  <React.Fragment>
    <Cover
      transitionStage={transitionStage}
      transitionDuration={transitionDuration}
      delayOut={transitionDuration}
    />

    <FixedWrapper>
      <BalanceArea
        // just for parity with CloseButton
        // to avoid warnings
        transitionStage={transitionStage}
        transitionDuration={transitionDuration}
        delayIn={transitionDuration * 0.67}
      />
      <Main
        transitionStage={transitionStage}
        transitionDuration={transitionDuration}
        delayIn={transitionDuration * 0.67}
        lang={lang}
      />
      <CloseButton
        transitionStage={transitionStage}
        transitionDuration={transitionDuration}
        delayIn={transitionDuration * 0.67}
      />
    </FixedWrapper>
  </React.Fragment>
);

export default Enquiry;
