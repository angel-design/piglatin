import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Container";

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
   render() {
    return (
      <header>
        <h1 className="display-1">{this.props.pigLatin}</h1>
      </header>
    );
  }
}

class PigLatin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pigLatin: "Oremlay Ipsumway",
      text: "Lorem Ipsum"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value, changed: true });
  }
  
  handleClick(){
    event.preventDefault();
    const atinizeLay = (pig) => {
     return pig = pig.toLowerCase()
       .replace(/\'/g, "") //remove apostrophes
       .replace(/(\b[aeiou]\w*)/g, "$1way") //if the first letter is a vowel
       .replace(/(\b[^aeiou\s]*qu)(\w*)/g, "$2$1ay") //if the word starts with a consonant sound including qu
       .replace(/(\b[^aeiou\s]+)([aeiou]\w*)/g, "$2$1ay") //if the word otherwise starts with a consonant group
       .replace(/(\b\w)/g, function(u) {return u.toUpperCase()}) //capitalize the first letter
    }
    
    this.setState(prevState => {
        return { pigLatin: atinizeLay(prevState.text)}
    })
  }
  
  render() {
     return (
      <Container>
         <Header pigLatin={this.state.pigLatin} />
         <Form>
           <Form.Control as="textarea" rows="1" id="input_text" name="text" value={this.state.text} onChange={this.handleChange} />
           <Button block className="mt-3 pink" onClick={this.handleClick}>Pig Latinize</Button>
         </Form>
      </Container>
    );
  }
}

ReactDOM.render(<PigLatin />, document.getElementById("wrapper"));