import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../actions/jobSeekerAPIAction';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../images/droom-logo.svg';
import {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	TextArea,
	Links,
	LinkStyled,
	ButtonStyled,
  ButtonStyledSignUp,
  Labels
} from '../../styledcomp/Home';

const JobSeekerSignUp = props => {
  const { handleSubmit, register, errors } = useForm({});
  const dispatch = useDispatch();

  // const password = useRef({});
  // password.current = watch('password', '');

  const onSubmit = data => {
    console.log("hello from company", { data, experienced: "true" });
    dispatch(postData(data)).then(res => {
      console.log("this is from signup", res);
      props.history.push("/");
    });
  };

  return (
    <HomeStyled>
      <img src={logo} alt="droom_logo" className="logo" />
      <StyledHeading>Sign Up</StyledHeading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Labels>Username</Labels>
        <Input
          type="text"
          name="username"
          // placeholder="Username"
          ref={register({
            required: "You must enter a username",
            minLength: {
              value: 1,
              message: "Username must contain at least 6 characters"
            },
            maxLength: {
              value: 15,
              message: "Username must contain 15 characters or less"
            }
          })}
        />
        {errors.username && errors.username.message}

        <Labels>Name</Labels>
        <Input
          type="text"
          name="full_name"
          // placeholder="Name"
          ref={register({
            required: "You must enter your Name",
            minLength: {
              value: 1,
              message: "Name must contain at least 6 characters"
            },
            maxLength: {
              value: 40,
              message: "Name must contain 40 characters or less"
            }
          })}
        />
        {errors.full_name && errors.full_name.message}

        <Labels>Email</Labels>
        <Input
          name="seekers_email"
          // placeholder="Email"
          type="email"
          ref={register({
            required: "You must enter an Email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address"
            }
          })}
        />
        {errors.seekers_email && errors.seekers_email.message}

        <Labels>Password</Labels>
        <Input
          name="password"
          // placeholder="Password"
          type="password"
          ref={register({
            required: "You must enter a password",
            // style error messages. maybe turn red? className='red'
            minLength: {
              value: 4,
              message: "Password must contain at least 4 characters"
            },
            maxLength: {
              value: 20,
              message: "Password must contain 20 characters or fewer"
            }
          })}
        />
        {errors.password && <p className="red">{errors.password.message}</p>}

        <Labels>Occupation</Labels>
        <Input
          type="text"
          // placeholder="Occupation"
          name="occupation"
          ref={register({
            required: "You must enter a company description",
            minLength: {
              value: 2,
              message: "Description must be at least 2 characters long"
            },
            maxLength: {
              value: 20,
              message: "Description must be 20 characters or less"
            }
          })}
        />
        {errors.occupation && errors.occupation.message}

        <Labels>Location</Labels>
        <Input
          type="text"
          // placeholder="Location"
          name="seekers_location"
          ref={register({
            required: "You must enter a Location",
            minLength: {
              value: 3,
              message: "Location must contain at least 3 characters"
            },
            maxLength: {
              value: 20,
              message: "Location must contain 20 characters or fewer"
            }
          })}
        />
        {errors.seekers_location && errors.seekers_location.message}

        <Labels>Education</Labels>
        <Input
          type="text"
          // placeholder="Education"
          name="education"
          ref={register({
            required: "You must enter highest form of Education",
            minLength: {
              value: 3,
              message: "Education must contain at least 3 characters"
            },
            maxLength: {
              value: 20,
              message: "Education must contain 20 characters or fewer"
            }
          })}
        />
        {errors.education && errors.education.message}

        <ButtonStyledSignUp type="submit">Submit</ButtonStyledSignUp>
      </Form>
    </HomeStyled>
  );
};

export default JobSeekerSignUp;
