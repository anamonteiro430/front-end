import React, { useEffect } from 'react';
import { Button } from './../../styledcomp/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getMatches } from './../actions/jobSeekerAPIAction';
import {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Links,
	LinkStyled,
	ButtonStyled,
	PurpleText,
	StyledDashboardHeading,
	DashboardButton,
	CardDiv2
} from './../../styledcomp/Home';

const JobSeekerMatches = props => {
	const id = localStorage.getItem('jobseekerid');
	const dispatch = useDispatch();
	const state = useSelector(state => state.jobSeekerAPIReducer);
	console.log('this is state', state);

	useEffect(() => {
		dispatch(getMatches(id));
	}, []);

	if (Array.isArray(state.matches) && state.matches.length === 0) {
		return (
			<>
				<Button onClick={() => props.history.goBack()}>Back</Button>
				<HomeStyled>
					<StyledHeading>You have no matches</StyledHeading>
				</HomeStyled>
			</>
		);
	} else {
		return (
			<>
				<Button onClick={() => props.history.goBack()}>Back</Button>
				<div>
					<h1>You have {state.matches.length} matches</h1>
					{state.matches.map((job, index) => (
						<CardDiv2 className='jobs' key={index}>
							<p>{job.job_position}</p>
							<p>{job.company_name}</p>
							<p>{job.job_location}</p>
							<p>{job.salary}$/yr</p>
						</CardDiv2>
					))}
				</div>
			</>
		);
	}
};
export default JobSeekerMatches;
