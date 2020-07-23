import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { postJob } from './../../actions/companyAPIAction';
import { useDispatch } from 'react-redux';
import {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Button,
	LinkStyled,
	ButtonStyled,
	PurpleText,
	Highlighted,
	HoverText,
	StyledDashboardHeading,
	DashboardButton,
	TextArea
} from '../../../styledcomp/Home';

import { axiosWithAuthCompany } from './../../utils/axiosWithAuthCompany';

const AddJob = props => {
	const { handleSubmit, register, errors } = useForm();
	const dispatch = useDispatch();

	useEffect(() => {
		axiosWithAuthCompany()
			.get('/jobs/3')
			.then(res => {
				console.log(res.data);
			});
	}, []);

	const id = localStorage.getItem('companyid');

	const onSubmit = values => {
		console.log(values);
		dispatch(postJob(values)).then(props.history.push('/company-dashboard'));
	};

	return (
		<>
			<Button onClick={() => props.history.goBack()}>Back</Button>
			<HomeStyled>
				<StyledDashboardHeading>DROOM</StyledDashboardHeading>
				<Form className='addJob' onSubmit={handleSubmit(onSubmit)}>
					<PurpleText className='addJobText'>Add Job</PurpleText>
					<Input
						name='companies_id'
						placeholder={id}
						value={id}
						ref={register({
							required: 'Salary required',
							minLength: {
								value: 1,
								message: 'Salary must contain at least 4 characters'
							},
							maxLength: {
								value: 20,
								message: 'Salary must contain 30 or fewer characters'
							}
						})}
					/>
					{errors.salary && errors.salary}
					<Input
						name='job_position'
						placeholder='Job Title'
						ref={register({
							required: 'Job Title required',
							minLength: {
								value: 4,
								message: 'Job Title must contain at least 4 characters'
							},
							maxLength: {
								value: 20,
								message: 'Job Title must contain 20 or fewer characters'
							}
						})}
					/>
					{errors.job_position && errors.job_position.message}
					<Input
						name='company'
						placeholder='Company name'
						ref={register({
							required: 'company',
							minLength: {
								value: 4,
								message: 'Salary must contain at least 4 characters'
							},
							maxLength: {
								value: 20,
								message: 'Salary must contain 30 or fewer characters'
							}
						})}
					/>
					{errors.company && errors.company.message}
					<Input
						name='job_location'
						placeholder='Location'
						ref={register({
							required: 'Location required',
							minLength: {
								value: 3,
								message: 'Location must contain at least 3 characters'
							},
							maxLength: {
								value: 30,
								message: 'Location must contain 30 or fewer characters'
							}
						})}
					/>

					{errors.job_location && errors.job_location.message}

					<Input
						name='salary'
						placeholder='Salary'
						ref={register({
							required: 'Salary required',
							minLength: {
								value: 4,
								message: 'Salary must contain at least 4 characters'
							},
							maxLength: {
								value: 20,
								message: 'Salary must contain 30 or fewer characters'
							}
						})}
					/>
					{errors.salary && errors.salary.message}

					<DashboardButton type='submit'>Post Job</DashboardButton>
				</Form>
			</HomeStyled>
		</>
	);
};

export default AddJob;
