import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Route } from 'react-router-dom';
import { loginCompany } from '../../actions/';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../../images/droom-logo.svg';
import {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Links,
	LinkStyled,
	ButtonStyled,
	PurpleText,
	Highlighted,
	HoverText,
	Labels,

	PurpleTextLogin


} from '../../../styledcomp/Home';

const CompanyLoginForm = props => {
	const { handleSubmit, register, errors } = useForm();

	const state = useSelector(state => state.companyLoginReducer);

	const dispatch = useDispatch();

	console.log(state);
	console.log(props);

	const onSubmit = values => {
		console.log('hello from company', values);
		dispatch(loginCompany(values)).then(res => {
			console.log('this is from login', res);
			props.history.push('/company-dashboard');
		});
	};

	return (
		<HomeStyled>
			<img src={logo} alt='droom_logo' className='logo' />
			<StyledHeading className='marginT15'>Sign In</StyledHeading>
			<Links className='marginT10'>
				<LinkStyled onClick={() => props.history.push('/')}>
					{' '}
					<HoverText>Job Applicant</HoverText>
				</LinkStyled>
				<LinkStyled>
					<Highlighted>Company</Highlighted>
				</LinkStyled>
			</Links>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<Labels className='marginT15'>Email</Labels>
				<Input
					name='company_email'
					// placeholder='Email'
					ref={register}

					//   ({
					//   required: "Required Field",
					//   pattern: {
					//     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
					//     message: "Invalid email address"
					//   }
					// })}
				/>
				{errors.email && errors.email.message}

				<Labels>Password</Labels>
				<Input
					name='password'
					// placeholder='Password'
					type='password'
					ref={register({
						required: 'You must enter a password',
						// style error messages. maybe turn red?
						minLength: {
							value: 2,
							message: 'Password must have a least 8 characters'
						}
						// validation below was in the R-H-F docs, but not sure how to apply it to passwords.
						// validate: value => value !== "admin" || "Nice try!"
					})}
				/>
				{errors.password && <p className='red'>{errors.password.message}</p>}

				{/* add a 'Forgot Password' page if we get time.
        <Link to='/forgotpassword' /> */}
				<LinkStyled className='marginT10'>
					<PurpleTextLogin>Forgot Password?</PurpleTextLogin>
				</LinkStyled>
				<LinkStyled to='/company-signup'>
					<PurpleTextLogin>Don't have an account? Sign up!</PurpleTextLogin>
				</LinkStyled>
				<ButtonStyled type='submit' onClick={handleSubmit(onSubmit)}>
					Sign in
				</ButtonStyled>
			</Form>
		</HomeStyled>
	);
};
export default CompanyLoginForm;
