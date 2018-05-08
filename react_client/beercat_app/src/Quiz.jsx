/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/quiz_modal.css'

const Quiz = ({handleChange, handleClose, show}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log('show', showHideClassName)

      return (
      <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <label htmlFor="abv"><strong>1) How strong do you like your beer?</strong></label>
        <div>
          <input type="radio" name="preference_ABV" value={ true }
          onChange={handleChange}/>
          5% and lower<br/>
          <input type="radio"
          value={ false }
          name="preference_ABV"
          onChange={handleChange}/>
          higher than 5%<br/>
        </div>

        <label htmlFor="srm"><strong>2) What color beer do you prefer?</strong></label>
        <div>
          <input type="radio" name="preference_SRM"
          value={true}
          onChange={handleChange}/>
          Light<br/>
          <input type="radio"
          name="preference_SRM"
          value={false}
          onChange={handleChange}/>
          Dark<br/>
        </div>

        <label htmlFor="ibu"><strong>3) How about bitter beer?</strong></label>
        <div>
          <input type="radio" name="preference_IBU"
          value={true}
          onChange={handleChange}/>
          Yup!<br/>
          <input type="radio"
          name="preference_IBU"
          value={false}
          onChange={handleChange}/>
          Nope!<br/>
        </div>

        <label htmlFor="adventurous"><strong>4) Are you an adventurous drinker?</strong></label>
        <div>
          <input type="radio" name="preference_adventurous"
          value={true}
          onChange={handleChange}/>
          Oh yeah! Love those crazy combinations.<br/>
          <input type="radio"
          name="preference_adventurous"
          value={false}
          onChange={handleChange}/>
          Ummmmmm I'll pass<br/>
        </div>

        <label htmlFor="sour"><strong>5) Do you like sours?</strong></label>
        <div>
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
        <button onClick={handleClose}>close</button>
        </section>
      </div>
      )
}

export default Quiz