import { combineReducers } from "redux";
import { companyLoginReducer } from './companyLoginReducer'
import{ companyAPIReducer} from './companyAPIReducer'
import {jobSeekerLoginReducer} from '../../jobSeeker/reducers/jobSeekerLoginReducer'
import { jobSeekerAPIReducer} from '../../jobSeeker/reducers/jobSeekerAPIReducer'


export default combineReducers({
  companyLoginReducer,
  companyAPIReducer,
  jobSeekerLoginReducer,
  jobSeekerAPIReducer
});