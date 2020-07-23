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
	PurpleText,
	Button,
	StyledDashboardHeading,
	DashboardButton
} from '../../styledcomp/Home';
import { useDispatch } from 'react-redux';
import { axiosWithAuthJobSeeker } from '../../jobSeeker/utils/axiosWithAuthJobSeeker';

const JobSeekerEditProfile = props => {
	const { handleSubmit, register, errors } = useForm({});
	const id = localStorage.getItem('jobseekerid');
	const dispatch = useDispatch();

	const [info, setInfo] = useState('');

	useEffect(() => {
		axiosWithAuthJobSeeker()
			.get(`/seekers/${id}`)
			.then(res => {
				console.log('this is edit profile', res);
				setInfo(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	const onSubmit = values => {
		console.log('values', values);
		axiosWithAuthJobSeeker()
			.put(`/seekers/${id}`, values)
			.then(res => {
				console.log('this is edit profile', res);
				props.history.push('/jobseeker-dashboard');
			})
			.catch(err => {
				props.history.push('/jobseeker-dashboard');
				console.log(err);
			});
	};

	const deleteProfile = () => {
		// dispatch(deleteProfile(id));
		console.log('this is the id', id);
		axiosWithAuthJobSeeker()
			.delete(`/seekers/${id}`)
			.then(res => {
				console.log(id);
				console.log('deleting');
				props.history.push('/');

				console.log('res'.res);
			})
			.catch(err => {
				console.log('delete errrrrrror  ', err.response);
				console.log(id);
			});
	};

	return (
		<>
			<Button onClick={() => props.history.goBack()}>Back</Button>
			<HomeStyled className='company-edit-container'>
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
						placeholder='User Name'
						defaultValue={info.username}
						name='username'
						ref={register({
							required: 'You must enter a User Name',
							minLength: {
								value: 2,
								message: 'User name must contain at least 2 characters'
							},
							maxLength: {
								value: 30,
								message: 'must contain 30 characters or fewer'
							}
						})}
					/>
					<Input
						name='full_name'
						placeholder='Full Name'
						defaultValue={info.full_name}
						type='text'
						ref={register({
							required: 'You must enter your full name'
						})}
					/>
					{errors.email && errors.email.message}
					<Input
						name='seekers_email'
						placeholder='seekers_email'
						defaultValue={info.seekers_email}
						type='email'
						ref={register({
							required: 'You must enter an email',
							// style error messages. maybe turn red? className='red'
							minLength: {
								value: 6,
								message: 'email must contain at least 6 characters'
							},
							maxLength: {
								value: 25,
								message: 'Password must contain 25 characters or fewer'
							}
							// validation below was in the R-H-F docs, but not sure how to apply it to passwords.
							// validate: value => value !== "admin" || "Nice try!"
						})}
					/>
					{errors.password && <p className='red'>{errors.password.message}</p>}
					<Input
						type='text'
						placeholder='Occupation'
						name='occupation'
						defaultValue={info.occupation}
						ref={register({
							required: 'You must enter an occupation',
							minLength: {
								value: 3,
								message: 'Description must be at least 3 characters long'
							},
							maxLength: {
								value: 40,
								message: 'Description must be 40 characters or less'
							}
						})}
					/>
					<Input
						type='text'
						placeholder='Seekers Location'
						name='seekers_location'
						defaultValue={info.seekers_location}
						ref={register({
							required: 'You must enter a location',
							minLength: {
								value: 2,
								message: 'Location must contain at least 2 characters'
							},
							maxLength: {
								value: 20,
								message: 'Location must contain 20 characters or fewer'
							}
						})}
					/>
					<Input
						type='text'
						placeholder='Education'
						name='education'
						defaultValue={info.education}
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
					<div>
						<label>Experienced:</label>
						<input
							label='Experienced'
							type='checkbox'
							placeholder='true'
							name='experienced'
							defaultValue={true}
							ref={register({})}
						/>
					</div>
					{/* <Input
						type='text'
						placeholder={id}
						name='id'
						defaultValue={id}
						ref={register()}
					/> */}
					<DashboardButton>Save</DashboardButton>
					<DashboardButton onClick={deleteProfile}>
						Delete Profile
					</DashboardButton>
				</Form>
			</HomeStyled>
		</>
	);
};

export default JobSeekerEditProfile;
