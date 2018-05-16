/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Radio } from 'antd';
import './styles/quiz_modal.css'


class Quiz extends React.Component {
  constructor(props) {
    super(props)
  }

  // handleSubmit (e) {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       this.props.onSubmit(values)
  //     }
  //   });
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.input.focus();
  //   });
  // }

  render() {
    const handleNextQuestion = this.props.handleNextQuestion;
    const modalStep = this.props.modalStep;

    return (
      <div>
        <form onSubmit={this.props.onSubmit} className="form-group" >
          <div className={`${modalStep === 1 ? "display-block" : "display-none"}`}>
            <input name="name" className="form-control form-control-lg" placeholder="Full Name" autoFocus /><br/>
            <input name="email" type="email" className="form-control form-control-lg" placeholder="Email" autoFocus /><br/>
            <input name="userName" className="form-control form-control-lg" placeholder="User Name" autoFocus /><br/>
            <input name="password" type="password" className="form-control form-control-lg" placeholder="Password" /><br/>
            <input name="passwordConfirmation" type="password" className="form-control form-control-lg" placeholder="Password Confirmation" /><br/>
            <button type="button"  className="btn submit-button" onClick={() => handleNextQuestion(2)}>Next</button><br/><br/>
            <p><strong>Already signed up? <Link to="/login">Login, meow!</Link></strong></p>
          </div>

          <div className={`${modalStep === 2 ? "display-block" : "display-none"}`}>
            <h6>How strong do you like your beer?</h6>
            <br/>
            <label>I have to work in the morning, let's keep it light.&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_ABV" id="abv_choice1" value="false"/>
            </label><br/>
            <label>My beer should be like Superman! (cape optional)&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_ABV" id="abv_choice2" value= "true"/>
            </label><br/>
            <label>Beer has <em>'strength'</em>!?&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_ABV" id="abv_choice3" value="false"/>
            </label><br/>
            <label>Ummmm? I mean, I don't know, but I'm game!&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_ABV" id="abv_choice4" value= "true"/>
            </label><br/><br/>
            <button type="button"  className="btn submit-button" onClick={() => handleNextQuestion(3)}>Next</button>
            <button type="button"  className="btn back-button" onClick={() => handleNextQuestion(1)}>Back</button>
          </div>

          <div className={`${modalStep === 3 ? "display-block" : "display-none"}`}>
            <h6>Light Side? Dark Side?</h6>
            <br/>
            <label>Beer and chocolate are best enjoyed dark.&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_SRM" id="srm_choice1" value= "false" />
            </label><br/>
            <label>Light, sunny beers match my light, sunny personality!&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_SRM" id="srm_choice2" value= "true" />
            </label><br/>
            <label>I'm afraid of the dark, and that includes beer...&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_SRM" id="srm_choice3" value= "true" />
            </label><br/>
            <label>Give me a beer that eats like a meal!&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_SRM" id="srm_choice4" value= "false" />
            </label><br/><br/>
            <button type="button"  className="btn submit-button" onClick={() => handleNextQuestion(4)}>Next</button>
            <button type="button"  className="btn back-button" onClick={() => handleNextQuestion(2)}>Back</button>
          </div>

          <div className={`${modalStep === 4 ? "display-block" : "display-none"}`}>
            <h6>Are you a bitter (beer) person?</h6>
            <br/>
            <label>Bitter beer smells like moldy socks. No thanks!&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_IBU" id="ibu_choice1" value= "false" />
            </label><br/>
            <label>Bitter beer smells like moldy socks. Yes please!&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_IBU" id="ibu_choice2" value= "true" />
            </label><br/>
            <label>I'm like a bunny - hop, hop, hops!&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_IBU" id="ibu_choice3" value= "true" />
            </label><br/>
            <label>I have no idea... but I think I'll pass.&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_IBU" id="ibu_choice4" value= "false" />
            </label><br/><br/>
            <button type="button"  className="btn submit-button" onClick={() => handleNextQuestion(5)}>Next</button>
            <button type="button"  className="btn back-button" onClick={() => handleNextQuestion(3)}>Back</button>
          </div>

          <div className={`${modalStep === 5 ? "display-block" : "display-none"}`}>
            <h6>How adventurous are you?</h6><br/>
            <label>Adventure is my middle name!&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_adventurous" id="adventurous_choice1" value= "true" />
            </label><br/>
            <label>I like to leave exploring to other people...&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_adventurous" id="adventurous_choice2" value= "false" />
            </label><br/>
            <label>I'll try anything once!&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_adventurous" id="adventurous_choice3" value= "true" />
            </label><br/>
            <label>My adventurous spirit wandered off without me.&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_adventurous" id="adventurous_choice4" value= "false" />
            </label><br/><br/>
            <button type="button"  className="btn submit-button" onClick={() => handleNextQuestion(6)}>Next</button>
            <button type="button"  className="btn back-button" onClick={() => handleNextQuestion(4)}>Back</button>
          </div>

          <div className={`${modalStep === 6 ? "display-block" : "display-none"}`}>
            <h6>Sour Candies are...</h6><br/>
            <label>Totally gross. No way, no how.&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_sour" id="sour_choice1" value= "false" />
            </label><br/>
            <label>The best candy in the candy aisle, by far!&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_sour" id="sour_choice2" value= "true" />
            </label><br/>
            <label>Pretty good, but not my favourite.&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_sour" id="sour_choice3" value= "true" />
            </label><br/>
            <label>Over-hyped. I'd rather have chips and chocolate.&nbsp;&nbsp;&nbsp;
              <input type="radio" name="preference_sour" id="sour_choice4" value= "false" />
            </label><br/><br/>
            <input className="btn submit-button" value="Submit" type="submit"/>
            <button type="button"  className="btn back-button" onClick={() => handleNextQuestion(5)}>Back</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Quiz
