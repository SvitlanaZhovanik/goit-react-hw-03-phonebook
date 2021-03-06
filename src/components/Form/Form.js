import { Component } from 'react';
import { FcBusinessContact, FcCallback } from 'react-icons/fc';
import { WrapperForm, Label, Input, ButtonForm } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onChange(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <WrapperForm onSubmit={this.handleSubmit}>
        <Label>
          <FcBusinessContact style={{ verticalAlign: 'middle' }} size="27px" /> Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <FcCallback style={{ verticalAlign: 'middle' }} size="27px" /> Phone
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Enter your number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <ButtonForm type="submit">Add contacts</ButtonForm>
      </WrapperForm>
    );
  }
}

export default Form;
