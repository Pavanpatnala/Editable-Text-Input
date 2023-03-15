import {Component} from 'react'
import {
  MainContainer,
  CardContainer,
  Heading,
  InputContainer,
  InputField,
  ParagraphText,
  Button,
} from './styledComponents'

class Table extends Component {
  state = {EditText: '', isButtonClicked: false}

  onChangeSearchInput = event => {
    this.setState({EditText: event.target.value})
  }

  onButtonClick = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {EditText, isButtonClicked} = this.state
    const EditOrSaveButton = isButtonClicked ? 'Edit' : 'Save'

    return (
      <MainContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <ParagraphText>{EditText}</ParagraphText>
            ) : (
              <InputField
                type="text"
                value={EditText}
                onChange={this.onChangeSearchInput}
              />
            )}
            <Button onClick={this.onButtonClick}>{EditOrSaveButton}</Button>
          </InputContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}
export default Table
