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
    console.log("IS THIS MODAL STEP????", modalStep)
    return (
      <div>
        <form onSubmit={this.props.onSubmit} className="form-group" >

          <div className={`${modalStep === 1 ? "display-block" : "display-none"}`}>
            <label>Full Name</label>
            <input name="name" className="form-control" placeholder="Full Name" autoFocus />
            <button type="button" className="btn btn-primary" onClick={() => handleNextQuestion(2)}>Next</button>
          </div>

          <div className={`${modalStep === 2 ? "display-block" : "display-none"}`}>
            <label >Email</label>
            <input name="email" className="form-control" placeholder="Email" autoFocus />
            <button type="button"  className="btn btn-primary" onClick={() => handleNextQuestion(3)}>Next</button>
          </div>

          <div className={`${modalStep === 3 ? "display-block" : "display-none"}`}>
            <label>User Name</label>
            <input name="userName" className="form-control" placeholder="User Name" autoFocus />
            <button type="button"  className="btn btn-primary" onClick={() => handleNextQuestion(4)}>Next</button>
          </div>

          <div className={`${modalStep === 4 ? "display-block" : "display-none"}`}>
            <label>Password</label>
            <input name="password" className="form-control" placeholder="Password" />
            <button type="button"  className="btn btn-primary" onClick={() => handleNextQuestion(5)}>Next</button>
          </div>

          <div className={`${modalStep === 5 ? "display-block" : "display-none"}`}>
            <label>Password Confirmation</label>
            <input name="passwordConfirmation" className="form-control" placeholder="Password Confirmation" />
            <button type="button"  className="btn btn-primary" onClick={() => handleNextQuestion(6)}>Next</button>
          </div>

          <div className={`${modalStep === 6 ? "display-block" : "display-none"}`}>
            <label>How strong do you like your beer?</label><br/>
            <input type="radio" name="preference_ABV" id="abv_choice1" value="false"/>5% and lower<br/>
            <input type="radio" name="preference_ABV" id="abv_choice2" value= "true" />5% and higher<br/>
            <button type="button"  className="btn btn-primary" onClick={() => handleNextQuestion(7)}>Next</button>
          </div>

          <div className={`${modalStep === 7 ? "display-block" : "display-none"}`}>
            <label>What color beer do you prefer?</label><br/>
            <input type="radio" name="preference_SRM" id="srm_choice1" value= "false" />Dark<br/>
            <input type="radio" name="preference_SRM" id="srm_choice2" value= "true" />True<br/>
            <button type="button"  className="btn btn-primary" onClick={() => handleNextQuestion(8)}>Next</button>
          </div>

          <div className={`${modalStep === 8 ? "display-block" : "display-none"}`}>
            <label>How about bitter beer?</label><br/>
            <input type="radio" name="preference_IBU" id="ibu_choice1" value= "false" />Nope!<br/>
            <input type="radio" name="preference_IBU" id="ibu_choice2" value= "true" />Yup!<br/>
            <button type="button"  className="btn btn-primary" onClick={() => handleNextQuestion(9)}>Next</button>
          </div>

          <div className={`${modalStep === 9 ? "display-block" : "display-none"}`}>
            <label>Are you an adventurous drinker?</label><br/>
            <input type="radio" name="preference_adventurous" id="adventurous_choice1" value= "false" />Ummmmmm I'll pass<br/>
            <input type="radio" name="preference_adventurous" id="adventurous_choice2" value= "true" />Oh yeah! Love those crazy combinations.<br/>
            <button type="button"  className="btn btn-primary" onClick={() => handleNextQuestion(10)}>Next</button>
          </div>

          <div className={`${modalStep === 10 ? "display-block" : "display-none"}`}>
            <label>Do you like sours?</label><br/>
            <input type="radio" name="preference_sour" id="sour_choice1" value= "false" />Ewwww<br/>
            <input type="radio" name="preference_sour" id="sour_choice2" value= "true" />Like a lemon<br/>
            <input className="btn btn-primary" value="submit" type="submit"/>
          </div>
        </form>
      </div>
    );
  }

}

export default Quiz
