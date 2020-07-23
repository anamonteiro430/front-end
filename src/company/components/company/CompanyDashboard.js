import React, { useEffect, useState } from 'react';
import {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Signout,
	Links,
	LinkStyled,
	ButtonStyled,
	PurpleText,
	Highlighted,
	HoverText,
	EditDisplayFlex,
	DescriptionStyled,
	StyledDashboardHeading,
	DashboardButton,
	DashboardCenter,
	EditButtonDisplayFlex,
	EditScreenText,
	Button
} from '../../../styledcomp/Home';
import { axiosWithAuthCompany } from './../../utils/axiosWithAuthCompany';

const CompanyDashboard = props => {
	const id = localStorage.getItem('companyid');
	const [info, setInfo] = useState('');

	console.log('my info', info);

	useEffect(() => {
		axiosWithAuthCompany()
			.get(`/companies/${id}`)
			.then(res => {
				console.log('this is edit profile', res);
				setInfo(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	const signout = () => {
		props.history.push('/company-login');
		localStorage.removeItem('companytoken');
	};

	return (
		<>
			<Button onClick={() => props.history.goBack()}>Back</Button>
			<DescriptionStyled>
				<StyledDashboardHeading>DROOM</StyledDashboardHeading>
				<DashboardCenter>
					<EditButtonDisplayFlex>
						<h3>
							<PurpleText>
								<span onClick={() => props.history.push('/edit-profile')}>
									Edit
								</span>
							</PurpleText>
						</h3>
					</EditButtonDisplayFlex>
					<EditDisplayFlex>
						<EditScreenText>{info.company_name}</EditScreenText>
						{/* <EditScreenText>{props.company_name}</EditScreenText> */}
					</EditDisplayFlex>

					<EditDisplayFlex>
						<EditScreenText>{info.companies_description}</EditScreenText>
						{/* <EditScreenText>{props.industry_type}</EditScreenText> */}
					</EditDisplayFlex>

					<EditDisplayFlex>
						<EditScreenText>{info.companies_location}</EditScreenText>
						{/* <EditScreenText>{props.companies_location}</EditScreenText> */}
					</EditDisplayFlex>
					<EditDisplayFlex>
						<EditScreenText>{info.company_email}</EditScreenText>
						{/* <EditScreenText>{props.companies_location}</EditScreenText> */}
					</EditDisplayFlex>
					<EditDisplayFlex>
						<EditScreenText>{info.industry_type}</EditScreenText>
						{/* <EditScreenText>{props.companies_location}</EditScreenText> */}
					</EditDisplayFlex>
				</DashboardCenter>
				<DashboardCenter>
					<h3>
						<DashboardButton onClick={() => props.history.push('/add-a-job')}>
							Add a Job
						</DashboardButton>
					</h3>
					<h3>
						<DashboardButton
							onClick={() => props.history.push('/current-jobs')}
						>
							Current Jobs
						</DashboardButton>
						<Signout onClick={signout}>Signout</Signout>
					</h3>
				</DashboardCenter>
			</DescriptionStyled>
		</>
	);
};

export default CompanyDashboard;
