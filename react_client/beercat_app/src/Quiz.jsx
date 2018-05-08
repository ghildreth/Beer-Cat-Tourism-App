/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/quiz_modal.css'

const Quiz = ({handleChange, handleClose, show, modalStep, handleNextStep}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log('show', showHideClassName)

      return (
      <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">

        <div className={`quiz-question ${modalStep === 1 ? "display-block" : "display-none"}`}>
          <label htmlFor="abv"><strong>1) How strong do you like your beer?</strong></label>
          <input type="radio" name="preference_ABV" value={ true }
          onChange={handleChange}/>
          5% and lower<br/>
          <input type="radio"
          value={ false }
          name="preference_ABV"
          onChange={handleChange}/>
          higher than 5%<br/>
          <button onClick={() => handleNextStep(2)}>Next</button>
        </div>


        <div className={`quiz-question ${modalStep === 2 ? "display-block" : "display-none"}`}>
          <label htmlFor="srm"><strong>2) What color beer do you prefer?</strong></label>
          <input type="radio" name="preference_SRM"
          value={true}
          onChange={handleChange}/>
          Light<br/>
          <input type="radio"
          name="preference_SRM"
          value={false}
          onChange={handleChange}/>
          Dark<br/>
          <button onClick={() => handleNextStep(3)}>Next</button>
        </div>


        <div className={`quiz-question ${modalStep === 3 ? "display-block" : "display-none"}`}>
          <label htmlFor="ibu"><strong>3) How about bitter beer?</strong></label>
          <input type="radio" name="preference_IBU"
          value={true}
          onChange={handleChange}/>
          Yup!<br/>
          <input type="radio"
          name="preference_IBU"
          value={false}
          onChange={handleChange}/>
          Nope!<br/>
          <button onClick={() => handleNextStep(4)}>Next</button>
        </div>


        <div className={`quiz-question ${modalStep === 4 ? "display-block" : "display-none"}`}>
          <label htmlFor="adventurous"><strong>4) Are you an adventurous drinker?</strong></label>
          <input type="radio" name="preference_adventurous"
          value={true}
          onChange={handleChange}/>
          Oh yeah! Love those crazy combinations.<br/>
          <input type="radio"
          name="preference_adventurous"
          value={false}
          onChange={handleChange}/>
          Ummmmmm I'll pass<br/>
          <button onClick={() => handleNextStep(5)}>Next</button>
        </div>


        <div className={`quiz-question ${modalStep === 5 ? "display-block" : "display-none"}`}>
          <label htmlFor="sour"><strong>5) Do you like sours?</strong></label>
          <input type="radio" name="preference_sour"
          value={true}
          onChange={handleChange}/>
          Like a lemon<br/>
          <input type="radio"
          name="preference_sour"
          value={false}
          onChange={handleChange}/>
          Eww<br/>
        </div>
        <button onClick={handleClose}>Submit</button>
        </section>
      </div>
      )
}

export default Quiz