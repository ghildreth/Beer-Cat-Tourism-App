/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Radio } from 'antd';

const FormItem = Form.Item;

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Full Name">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your full name.' }],
              })
              (<Input placeholder="Full Name" />)
            }
          </FormItem>
          <FormItem label="Email">
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email.' }],
              })
              (<Input placeholder="Email" />)
            }
          </FormItem>
          <FormItem label="User Name">
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username.' }],
              })
              (<Input placeholder="User Name" />)
            }
          </FormItem>
          <FormItem label="Password">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your password.' }],
              })
              (<Input placeholder="Password" />)
            }
          </FormItem>
          <FormItem label="Password Confirmation">
            {getFieldDecorator('passwordConfirmation', {
              rules: [{ required: true, message: 'Please input your password confirmation.' }],
              })
            (<Input placeholder="Password Confirmation" />)
            }
          </FormItem>
          <FormItem label="How strong do you like your beer?">
            {getFieldDecorator('preference_ABV', {
              rules: [{ required: true, message: 'Please input your ABV preference.' }],
              })
              (<Radio.Group>
                <Radio.Button value= { false } >5% and lower</Radio.Button>
                <Radio.Button value= { true } >5% and higher</Radio.Button>
              </Radio.Group>)
            }
          </FormItem>
          <FormItem label="What color beer do you prefer?">
            {getFieldDecorator('preference_SRM', {
              rules: [{ required: true, message: 'Please input your SRM preference.' }],
            })
            (<Radio.Group >
              <Radio.Button value= { false } >Dark</Radio.Button>
              <Radio.Button value= { true } >True</Radio.Button>
            </Radio.Group>)
            }
          </FormItem>
          <FormItem label="How about bitter beer?">
            {getFieldDecorator('preference_IBU', {
              rules: [{ required: true, message: 'Please input your IBU preference.' }],
            })
            (<Radio.Group >
              <Radio.Button value= { false } >Nope!</Radio.Button>
              <Radio.Button value= { true } >Yup!</Radio.Button>
            </Radio.Group>)
            }
          </FormItem>
          <FormItem label="Are you an adventurous drinker?">
            {getFieldDecorator('preference_adventurous', {
             rules: [{ required: true, message: 'Please input your adventurous preference.' }],
            })
            (<Radio.Group >
              <Radio.Button value= { false } >Ummmmmm I'll pass</Radio.Button>
              <Radio.Button value= { true } >Oh yeah! Love those crazy combinations.</Radio.Button>
            </Radio.Group>)
            }
          </FormItem>
          <FormItem label="Do you like sours?">
            {getFieldDecorator('preference_sour', {
              rules: [{ required: true, message: 'Please input your sour preference.' }],
            })
            (<Radio.Group>
              <Radio.Button value= { false } >Ewwww</Radio.Button>
              <Radio.Button value= { true } >Like a lemon</Radio.Button>
            </Radio.Group>)
            }
          </FormItem>
          <FormItem>
            <input value="submit" type="submit"/>
          </FormItem>
        </Form>
      </div>
    );
  }

}

const WrappedFormLayout = Form.create()(Quiz);


export default WrappedFormLayout