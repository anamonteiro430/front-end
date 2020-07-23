import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Links,
	LinkStyled,
	ButtonStyled,
	TextArea,
	PurpleText,
	Highlighted,
	DeleteButton,
	HoverText,
	Button,
	StyledDashboardHeading,

	DashboardButton

} from '../../../styledcomp/Home';

import { useDispatch } from 'react-redux';
import { deleteProfile } from '../../actions/';

import { axiosWithAuthCompany } from '../../utils/axiosWithAuthCompany';

const CompanyEditProfile = props => {
	const { handleSubmit, register, errors } = useForm({});
	const id = localStorage.getItem('companyid');
	const dispatch = useDispatch();

	const [info, setInfo] = useState('');

	useEffect(() => {
		axiosWithAuthCompany()
			.get(`/companies/${id}`)
			.then(res => {
				console.log('this is edit profile', res);
				setInfo(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	const onSubmit = values => {
		console.log('values', values);
		axiosWithAuthCompany()
			.put(`/companies/${id}`, values)
			.then(res => {
				console.log('this is edit profile', res);
				props.history.push('/company-dashboard');
			})
			.catch(err => console.log(err));
	};

	const deleteProfile = () => {
		// dispatch(deleteProfile(id));
		console.log('this is the id', id);
		axiosWithAuthCompany()
			.delete(`/companies/${id}`)
			.then(res => {
				props.history.push('/company-login');

				console.log(res);
			})
			.catch(err => {
				console.log('delete errrrrrror  ', err.response);
			});
	};

	return (
		<>
			<Button onClick={() => props.history.goBack()}>Back</Button>
			<HomeStyled class='company-edit-container'>
				<StyledDashboardHeading>DROOM</StyledDashboardHeading>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<PurpleText className='addJobText'>Edit Profile</PurpleText>
					<Input
						type='text'
						placeholder={id}
						name='id'
						value={id}
						ref={register}
					/>

					<Input
						type='text'
						placeholder='Company'
						defaultValue={info.company_name}
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
					<Input
						name='company_email'
						placeholder='Email'
						defaultValue={info.company_email}
						type='text'
						ref={register({
							required: 'You must enter an Email'
						})}
					/>
					{errors.email && errors.email.message}
					<Input
						name='password'
						placeholder='Password'
						type='password'
						ref={register({
							required: 'You must enter a password',
							// style error messages. maybe turn red? className='red'
							minLength: {
								value: 1,
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

					<Input
						type='textarea'
						placeholder='Company descript'
						name='companies_description'
						defaultValue={info.companies_description}
						ref={register({
							required: 'You must enter a company description',
							minLength: {
								value: 1,
								message: 'Description must be at least 10 characters long'
							},
							maxLength: {
								value: 300,
								message: 'Description must be 300 characters or less'
							}
						})}
					/>
					<TextArea
						type='text'
						placeholder='Company Location'
						name='companies_location'
						defaultValue={info.companies_location}
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
					<Input
						type='text'
						placeholder='Industry'
						name='industry_type'
						defaultValue={info.industry_type}
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
					<DashboardButton>Save</DashboardButton>

					<DeleteButton onClick={deleteProfile}>Delete Profile</DeleteButton>
				</Form>
			</HomeStyled>
		</>
	);
};

export default CompanyEditProfile;
