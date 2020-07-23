import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../../actions/companyAPIAction';
import { useDispatch } from 'react-redux';
import logo from '../../../images/droom-logo.svg';
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
} from '../../../styledcomp/Home';

const CompanySignUp = props => {
	const { handleSubmit, register, errors } = useForm({});
	const dispatch = useDispatch();

	// const password = useRef({});
	// password.current = watch('password', '');

	const onSubmit = data => {
		console.log('hello from company', data);
		dispatch(postData(data)).then(res => {
			console.log('this is from signup', res);
			props.history.push('/company-login');
		});
	};

	return (
		<HomeStyled>
			<img src={logo} alt='droom_logo' className='logo' />
			<StyledHeading>Sign Up</StyledHeading>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Labels>Company Name</Labels>
				<Input
					type='text'
					// placeholder='Company'
					name='company_name'
					ref={register({
						required: 'You must enter a company name',
						minLength: {
							value: 2,
							message: 'Company name must contain at least 2 characters'
						},
						maxLength: {
							value: 30,
							message: 'Password must contain 30 characters or fewer'
						}
					})}
				/>
				{errors.company_name && errors.company_name.message}

				<Labels>Email</Labels>
				<Input
					name='company_email'
					// placeholder='Email'
					type='email'
					ref={register({
						required: 'You must enter an Email',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Invalid email address'
						}
					})}
				/>
				{errors.company_email && errors.company_email.message}
									
				<Labels>Password</Labels>
				<Input
					name='password'
					// placeholder='Password'
					type='password'
					ref={register({
						required: 'You must enter a password',
						// style error messages. maybe turn red? className='red'
						minLength: {
							value: 2,
							message: 'Password must contain at least 8 characters'
						},
						maxLength: {
							value: 20,
							message: 'Password must contain 20 characters or fewer'
						}
						// validation below was in the R-H-F docs, but not sure how to apply it to passwords.
						// validate: value => value !== "admin" || "Nice try!"
					})}
				/>
				{errors.password && <p className='red'>{errors.password.message}</p>}

				{/* <Input
          // name="passwordRepeat"
          placeholder="Repeat Password"
          type="password"
          ref={register({
            validate: value =>
              value === password.current || "The passwords do not match"
          })}
        />
        {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>} */}
		
				<Labels>Description</Labels>
				<TextArea
					type='textarea'
					// placeholder='Description'
					name='companies_description'
					ref={register({
						required: 'You must enter a company description',
						minLength: {
							value: 2,
							message: 'Description must be at least 10 characters long'
						},
						maxLength: {
							value: 300,
							message: 'Description must be 300 characters or less'
						}
					})}
				/>
				{errors.companies_description && errors.companies_description.message}
				
				<Labels>Location</Labels>
				<Input
					type='text'
					// placeholder='Company Location'
					name='companies_location'
					ref={register({
						required: 'You must enter a company location',
						minLength: {
							value: 2,
							message: 'Company location must contain at least 2 characters'
						},
						maxLength: {
							value: 20,
							message: 'Company location must contain 20 characters or fewer'
						}
					})}
				/>
				{errors.companies_location && errors.companies_location.message}
				
				<Labels>Industry</Labels>
				<Input
					type='text'
					// placeholder='Industry'
					name='industry_type'
					ref={register({
						required: 'You must enter an Industry type',
						minLength: {
							value: 2,
							message: 'Industry type must contain at least 2 characters'
						},
						maxLength: {
							value: 20,
							message: 'Industry type must contain 20 characters or fewer'
						}
					})}
				/>
				{errors.industry_type && errors.industry_type.message}

				<ButtonStyledSignUp type='submit' onClick={handleSubmit(onSubmit)}>
					Submit
				</ButtonStyledSignUp>
			</Form>
		</HomeStyled>
	);
};
export default CompanySignUp;
