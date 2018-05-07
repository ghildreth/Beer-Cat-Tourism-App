/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = ({handleChange}) => (
      <div>
        <label for="abv"><strong>1) How strong do you like your beer?</strong></label>
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

        <label for="srm"><strong>2) What color beer do you prefer?</strong></label>
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

        <label for="ibu"><strong>3) How about bitter beer?</strong></label>
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

        <label for="adventurous"><strong>4) Are you an adventurous drinker?</strong></label>
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

        <label for="sour"><strong>5) Do you like sours?</strong></label>
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
      </div>
)

export default Quiz