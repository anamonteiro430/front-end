import React, { useState, useEffect } from 'react';
import { axiosWithAuthCompany } from './../../utils/axiosWithAuthCompany';
import { CardDiv2 } from './../../../styledcomp/Home';
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
} from '../../../styledcomp/Home';

const CurrentJobs = props => {
	const [information, setInformation] = useState([]);
	const id = localStorage.getItem('companyid');

	useEffect(() => {
		axiosWithAuthCompany()
			.get(`/jobs/company/${id}`)
			.then(response => {
				console.log('This is the data frp, current jobs', response);
				setInformation(response.data);
			})
			.catch(error => {
				console.log('the data returned this error: ', error);
			});
	}, []);
	/* */

	const deleteJob = () => {
		axiosWithAuthCompany()
			.delete(`/jobs/${id}`)
			.then(response => {
				console.log('This is the data frp, current jobs', response);
				console.log(props);
				setInformation(response.data);
			})
			.catch(error => {
				console.log('the data returned this error: ', error);
			});
	};

	return (
		<>
			<Button onClick={() => props.history.goBack()}>Back</Button>
			{information.map((job, index) => (
				<CardDiv2 className='jobs' key={index}>
					<button onClick={deleteJob}>X</button>
					<p>{job.job_position}</p>
					<p>{job.company_name}</p>
					<p>{job.job_location}</p>
					<p>{job.salary}$/yr</p>
				</CardDiv2>
			))}
		</>
	);
};

export default CurrentJobs;
