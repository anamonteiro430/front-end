import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosWithAuthJobSeeker } from '../utils/axiosWithAuthJobSeeker';
import { useSwipeable } from 'react-swipeable';
import axios from 'axios';

import { Card, CardWrapper } from 'react-swipeable-cards';

import {
	HomeStyled,
	StyledHeading,
	StyledHeadingSwipe,
	Button,
	HoverText,
	EditDisplayFlex,
	DescriptionStyled,
	StyledDashboardHeading,
	DashboardButton,
	DashboardCenter,
	EditButtonDisplayFlex,
	EditScreenText,
	CardDiv
} from '../../styledcomp/Home';

const JobSeekerSwipe = props => {
	const id = localStorage.getItem('jobseekerid');
	console.log(id);

	const state = useSelector(state => state);

	console.log('this is state from swipe', state.companyAPIReducer.data);

	//  Math.floor(Math.random() * Math.floor(3));
	// const [save, setSave] = useState({
	// 	seekers_id: id,
	// 	joblisting_id: '4',
	// 	fave_of_seeker: 'true',
	// 	fave_for_job: 'false',
	// 	matched_occupation: 'true'
	// });
	const [number, setNumber] = useState(0);

	// useEffect(() => {}, [number]);

	// const randomfunction = () => {
	//   console.log('numnbenrbamndbksabdksja');
	//   console.log(number);
	//   setNumber(number + 1);
	// };

	// const yesfunction = () => {
	//   //post to matches
	//   axiosWithAuthJobSeeker()
	//     .post('/matches', {
	//       seekers_id: id,
	//       fave_of_seeker: 'true',
	//       fave_for_job: 'false',
	//       matched_occupation: 'true'
	//     })
	//     .then(res => {
	//       //call random

	//     })
	//     .catch();
	//   //call random
	// };

	// const hello = () => {
	//   console.log('heeeeeeeeeeeeee')
	//   axios({
	//     method: 'post',
	//     url: 'https://droombwlambda.herokuapp.com/api/matches',
	//     headers: {
	//       Authorization: localStorage.getItem('jobseekertoken')
	//     },
	//     data: {
	//       seekers_id: id,
	//       fave_of_seeker: 'true',
	//       fave_for_job: 'false',
	//       matched_occupation: 'true'
	//     }
	//   })
	//     .then(res => {
	//       console.log('we did it')
	//     })
	//     .catch();
	//   //call random
	// };

	const hellos = () => {
		console.log('heeeeeeeeeeeeee');
		axiosWithAuthJobSeeker()
			.post('/matches', {
				seekers_id: id,
				fave_of_seeker: 'true',
				fave_for_job: 'false',
				matched_occupation: 'true'
			})
			.then(res => {
				console.log('we did it');
			})
			.catch();
		//call random
	};

	// axiosWithAuthCompany()
	//   .get('/jobs/3')
	//   .then(res => {
	//     console.log(res.data);
	//   });

	const nofunction = () => {
		console.log('nooooooooooooooo');
	};

	// const handlersWorking = useSwipeable({
	// 	// onSwipedLeft: () => setTimeout(next, 0),
	// 	onSwipedLeft: () => setTimeout(nofunction, 0),
	// 	trackMouse: true,
	// })

	// const handlersBugged = useSwipeable({
	//   onSwipedLeft: nofunction,
	//   onSwipedRight: nofunction,
	//   trackMouse: true
	// });

	const cardWrap = {
		// display: 'flex',
		// justifyContent: 'center',
		//border: "1px red solid",
		//paddingTop: '-1000px',
		height: '500px'
	};

	const cardStyle = {
		border: '1px #E5E5E5  solid',
		textAlign: 'left',
		height: '70%',
		width: '80%',
		marginTop: '100px;',
		paddingTop: '40px',
		paddingLeft: '20px',
		display: 'flex',
		flexDirection: 'column',
		//justifyContent: 'center',
		// padding: '40px',
		bordeRadius: '30px',
		fontSize: '30px',
		boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
		//boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
		transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
		opacity: '1'
		//pointerEvents: 'none'
	};

	if (
		typeof state.companyAPIReducer.data[number] === 'undefined' ||
		state.companyAPIReducer.data[number] === null
	) {
		return (
			<>
				<Button onClick={() => props.history.goBack()}>Back</Button>
				<HomeStyled>
					<Button onClick={() => props.history.goBack()}>Back</Button>

					<StyledHeading>No more jobs, </StyledHeading>
					<StyledHeading>time to go back to Tinder</StyledHeading>
				</HomeStyled>
			</>
		);
	} else {
		return (
			// <div>
			// 	 <Button onClick={() => props.history.goBack()}>Back</Button>

			// 		<CardDiv {...handlersBugged}>
			// 		<StyledHeading>
			// 			<p> Company:</p> {state.companyAPIReducer.data[number].company}
			// 		</StyledHeading>
			// 		<StyledHeading>
			// 			Salary: {state.companyAPIReducer.data[number].salary}
			// 		</StyledHeading>
			// 		<StyledHeading>
			// 			Job: {state.companyAPIReducer.data[number].job_position}
			// 		</StyledHeading>
			// 		<StyledHeading>
			// 			Educ: {state.companyAPIReducer.data[number].education}
			// 		</StyledHeading>
			// 		<DashboardButton onClick={yesfunction}>Yes</DashboardButton>
			// 		<DashboardButton onClick={nofunction}>No</DashboardButton>

			// 	</CardDiv>

			// </div>
			<>
				<Button onClick={() => props.history.goBack()}>Back</Button>
				<HomeStyled>
					<StyledHeadingSwipe>
						Swipe Right to Find your Dream Job
					</StyledHeadingSwipe>
					<CardWrapper style={cardWrap}>
						{state.companyAPIReducer.data.map(item => {
							return (
								<Card
									key={item}
									style={cardStyle}
									onSwipeRight={hellos}
									onSwipeLeft={nofunction}
								>
									<div className='help'>
										<label className='pLabel'>Salary: </label>
										<span>{item.salary}</span>
									</div>
									<div className='help'>
										<label className='pLabel'>Job: </label>
										<span>{item.job_position}</span>
									</div>
									{/* <div className="help">
                    <label className="pLabel">Type: </label>
                    <span>{item.employment_type}</span>
                  </div> */}
									<div className='help'>
										<label className='pLabel'>Education: </label>
										<span>{item.education}</span>
									</div>
									<div className='help'>
										<label className='pLabel'>Skills: </label>
										<span>{item.skills}</span>
									</div>
									<div className='help'>
										<label className='pLabel'>Location: </label>
										<span>{item.job_location}</span>
									</div>
								</Card>
							);
						})}
					</CardWrapper>
				</HomeStyled>
			</>
		);
	}
};

export default JobSeekerSwipe;
