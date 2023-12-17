import {Component} from 'react'
import {
  SubmitButton,
  BgContainer,
  FormHeading,
  InputBox,
  Label,
  Selection,
  ImageContainer,
  Text,
  InputContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    fontSize: fontSizesOptionsList[0].optionId,
    url: '',
    topText: '',
    bottomText: '',
    showResult: false,
  }

  onchangeUrl = event => {
    this.setState({url: event.target.value})
  }

  onchangeSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onchangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onchangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  generate = event => {
    event.preventDefault()
    this.setState({showResult: true})
  }

  render() {
    const {url, topText, bottomText, fontSize, showResult} = this.state

    return (
      <BgContainer>
        <form onSubmit={this.generate}>
          <FormHeading data-testid> Meme Generator</FormHeading>
          <InputContainer>
            <Label htmlFor="url" data-testid>
              {' '}
              Image URL{' '}
            </Label>
            <InputBox
              data-testid
              type="text"
              value={url}
              onChange={this.onchangeUrl}
              id="url"
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="topText" data-testid>
              {' '}
              Top text{' '}
            </Label>
            <InputBox
              data-testid
              type="text"
              value={topText}
              onChange={this.onchangeTopText}
              id="topText"
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="bottomText" data-testid>
              {' '}
              Bottom text{' '}
            </Label>
            <InputBox
              type="text"
              value={bottomText}
              onChange={this.onchangeBottomText}
              data-testid
              id="bottomText"
            />
          </InputContainer>

          <InputContainer>
            <Label data-testid htmlFor="font">
              {' '}
              Font Size{' '}
            </Label>
            <Selection
              data-testid
              value={fontSize}
              onChange={this.onchangeSize}
              id="font"
            >
              {fontSizesOptionsList.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {' '}
                  {each.displayText}
                </option>
              ))}
            </Selection>
          </InputContainer>
          <SubmitButton data-testid type="submit">
            {' '}
            Generate{' '}
          </SubmitButton>
        </form>
        {showResult && (
          <ImageContainer url={url} data-testid="meme">
            <Text data-testid fontSize={fontSize}>
              {topText}
            </Text>
            <Text data-testid fontSize={fontSize}>
              {bottomText}
            </Text>
          </ImageContainer>
        )}
      </BgContainer>
    )
  }
}

export default MemeGenerator
