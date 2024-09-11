import React, { useState } from 'react'
import Input from '../../../components/Input/input';
import Select from '../../../components/Select/Select';
import '../../../App.css'
import { useDispatch } from 'react-redux';
import { actions } from './adminSlice';

const CreateJob = () => {
    const [formData,SetFormData]=useState({jobId:'',companyName:'',jobTitle:'',jobRole:'',jobLocation:'',package:'',skills:'',
        genderPreference:'',qualification:'',streams:'',yearOfPassing:'',backlog:'',sslc:'',diploma:'',graduate:'',gap:'',openings:'',interviewRound:'',mode:'',agreement:'',deposit:'',relocation:'',certificateSubmission:'',shifts:'',blockingPeriod:'',startsIn:'',endsIn:'',
        emplotblityScore:'',interviewType:''
    });

    const [errors,setErrors]=useState({});

    const dispatch=useDispatch();

    const currentDate = new Date().toISOString().split('T')[0];

    const validation=(name,value)=>{
        let error = '';
        switch (name) {
            case 'jobId':
            case 'package':
            case 'openings':
            case 'blockingPeriod':
            case 'emplotblityScore':
                if(+(value)<=0){ 
                    error=`${name} must be positive number and not 0`
                }
            break;
            case 'skills':
            case 'jobRole':
            case 'interviewRound':
            case 'relocation':
                const trim=value.trim();
                if (!/^[A-Za-z\s]{3,}$/.test(trim)){
                    error='Name must contain at least three alphabetic characters and no special characters';
                }
                break;
            case 'startsIn':
                if(value<currentDate){
                    error="Date cannot be in past"
                }
                break;
                case 'endsIn':
                    if(value<currentDate){
                        error="Date cannot be in past"
                    }else if(formData.startsIn && value<formData.startsIn){
                        error="End date cannot be less than start date"
                    }
                break;
                case 'sslc':
                case 'diploma':
                case 'graduate':
                    if(+(value)<=0){ 
                        error=`${name} must be positive number and not 0`
                    }    
                else if(value>100){
                        error='Precentage should not greater than 100';
                    }
                    break
            default:
                if(!value){
                    error = `${name} is required`;
                }
            break;
        }   
            
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    }

    const validateAll=()=>{
        const newErrors={};
        Object.keys(formData).forEach((name) => {
            const value = formData[name];
            validation(name, value);
            if (!value) {
                newErrors[name] = `${name} is required`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;
        SetFormData({
            ...formData,
            [name]:value
        })
        validation(name,value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const isFormValid=validateAll();
        if (isFormValid) {
            console.log(formData)
            dispatch(actions.addDatas(formData))
            SetFormData({jobId:'',companyName:'',jobTitle:'',jobRole:'',jobLocation:'',package:'',skills:'',
                genderPreference:'',qualification:'',streams:'',yearOfPassing:'',backlog:'',sslc:'',diploma:'',graduate:'',gap:'',openings:'',interviewRound:'',mode:'',agreement:'',deposit:'',relocation:'',certificateSubmission:'',shifts:'',blockingPeriod:'',startsIn:'',endsIn:'',
                emplotblityScore:'',interviewType:''
            });
            setErrors({})
        }
        console.log(formData);
    }

    const companyNames=[
        {value:'',label:'Company Name'},
        {value:'Tap Academy',label:'Tap Acaademy'},
        {value: 'Zoho',label:'Zoho'},
        {value: 'VVDN',label:'VVDN'}
    ]

    const jobTitles=[
        {value:'',label:'Job Title'},
        {value:'SDE',label:'SDE'},
        {value:'Software Engineer',label:'Software Engineer'},
        {value:'Trainee',label:'Trainee'}
    ]
    const jobLocations=[
        {value:'',label:'Job Locations'},
        {value:'BTM',label:'BTM'},
        {value:'Bangalore',label:'Bangalore'},
        {value:'Chennai',label:'Chennai'}
    ]
    const genders=[
        {value:'',label:'Gender Preference'},
        {value:'Male',label:'Male'},
        {value:'Female',label:'Female'},
        {value:'Others',label:'Others'}
    ]
    const qualifications=[
        {value:'',label:'Qualifications'},
        {value:'BE',label:'BE'},
        {value:'MCA',label:'MCA'},
        {value:'ANY',label:'ANY'}
    ]

    const branches=[
        {value:'',label:'Streams'},
        {value:'IT',label:'IT'},
        {value:'Civil',label:'Civil'},
        {value:'CSE',label:'CSE'}
    ]

    const years=[
        {value:'',label:'Year of Passing'},
        {value:'2024',label:'2024'},
        {value:'2023',label:'2023'},
        {value:'Any',label:'Any'}
    ]

    const backlogs=[
        {value:'',label:'Backlog Allowed'},
        {value:'Yes',label:'Yes'},
        {value:'No',label:'No'},
    ]

    const gaps=[
        {value:'',label:'Gap in education'},
        {value:'Yes',label:'Yes'},
        {value:'No',label:'No'},
    ]

    const modes=[
        {value:'',label:'Mode of Interview'},
        {value:'Online',label:'Online'},
        {value:'Offline',label:'Offline'},
        {value:'Both',label:'Both'}
    ]

    const agreements=[
        {value:'',label:'Agreement'},
        {value:'Yes',label:'Yes'},
        {value:'No',label:'No'},
    ]

    const deposits=[
        {value:'',label:'Deposits'},
        {value:'Yes',label:'Yes'},
        {value:'No',label:'No'},
    ]

    const certificateSubmissions=[
        {value:'',label:'certificateSubmissions'},
        {value:'Yes',label:'Yes'},
        {value:'No',label:'No'},
    ]

    const shift=[
        {value:'',label:'shift'},
        {value:'Night',label:'Night'},
        {value:'Morning',label:'Morning'},
    ]

    const interviewTypes=[
        {value:'',label:'Interview Type'},
        {value:'Technical',label:'Technical'},
        {value:'Non-Technical',label:'Non-Technical'},
    ]

  return (
    <div>
        <h1>CreateJob</h1>
        <form  onSubmit={handleSubmit}>
            <h3>Company Details</h3>
            <div className='job-form'>
        <Input
                label='Job Id: '
                type='number'
                name='jobId'
                value={formData.jobId}
                onChange={handleChange}
                placeholder='Job Id'
                error={errors.jobId}
            />
            <Select 
            label='Company Name :'
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
            options={companyNames}
            error={errors.companyName}
            />
            </div>
            <h3>Job Details</h3>
            <div className='job-form'>
            <Select
            label='Job Title'
            name='jobTitle'
            value={formData.jobTitle}
            onChange={handleChange}
            options={jobTitles}
            error={errors.jobTitle}
            />
            <Input 
            label='Job Role: '
            type='text'
            name='jobRole'
            value={formData.jobRole}
            onChange={handleChange}
            placeholder='Job Role'
            error={errors.jobRole}
            />
            <Select
            label='Job Location'
            name='jobLocation'
            value={formData.jobLocation}
            onChange={handleChange}
            options={jobLocations}
            error={errors.jobLocation}
            />
            <Input 
            label='Package (CTC): '
            type='number'
            name='package'
            value={formData.package}
            onChange={handleChange}
            placeholder='Package (CTC)'
            error={errors.package}
            />
            <Input 
            label='Skills: '
            type='text'
            name='skills'
            value={formData.skills}
            onChange={handleChange}
            placeholder='Skills'
            error={errors.skills}
            />
            </div>
            <h3>Job Criteria Details</h3>
            <div className='job-form'>
               <Select
                label='Gender Preference'
                name='genderPreference'
                value={formData.genderPreference}
                onChange={handleChange}
                options={genders}
                error={errors.genderPreference}
            />
             <Select
                label='Qualification'
                name='qualification'
                value={formData.qualification}
                onChange={handleChange}
                options={qualifications}
                error={errors.qualification}
            />
            <Select
                label='Streams'
                name='streams'
                value={formData.streams}
                onChange={handleChange}
                options={branches}
                error={errors.streams}
            />
             <Select
                label='Year Of Passing'
                name='yearOfPassing'
                value={formData.yearOfPassing}
                onChange={handleChange}
                options={years}
                error={errors.yearOfPassing}
            />
            <Select
                label='Backlog Allowed'
                name='backlog'
                value={formData.backlog}
                onChange={handleChange}
                options={backlogs}
                error={errors.backlog}
            />
            <Input 
            label='SSLC Min Percentage : '
            type='number'
            name='sslc'
            value={formData.sslc}
            onChange={handleChange}
            placeholder='SSLC Min Percentage :'
            error={errors.sslc}
            />
             <Input 
            label='Diploma Min Percentage : '
            type='number'
            name='diploma'
            value={formData.diploma}
            onChange={handleChange}
            placeholder='Diploma Min Percentage :'
            error={errors.diploma}
            />
            <Input 
            label='Graduate Min Percentage : '
            type='number'
            name='graduate'
            value={formData.graduate}
            onChange={handleChange}
            placeholder='Graduate Min Percentage :'
            error={errors.graduate}
            />
            <Select
                label='Gap in education'
                name='gap'
                value={formData.gap}
                onChange={handleChange}
                options={gaps}
                error={errors.gap}
            />
            <Input 
            label='No Of Positions '
            type='number'
            name='openings'
            value={formData.openings}
            onChange={handleChange}
            placeholder='No Of Positions'
            error={errors.openings}
            />
            </div>
            <h3>Interview Detais</h3>
        <div className='job-form'>
            <Input 
            label='Interview Round'
            type='text'
            name='interviewRound'
            value={formData.interviewRound}
            onChange={handleChange}
            placeholder='interview Round'
            error={errors.interviewRound}
            />
            <Select
                label='Mode Of Interview'
                name='mode'
                value={formData.mode}
                onChange={handleChange}
                options={modes}
                error={errors.mode}
            />
             <Select
                label='Service AgreeMent'
                name='agreement'
                value={formData.agreement}
                onChange={handleChange}
                options={agreements}
                error={errors.agreement}
            />
            <Select
                label='Deposits'
                name='deposit'
                value={formData.deposit}
                onChange={handleChange}
                options={deposits}
                error={errors.deposit}
            />
            <Input 
            label='Relocation'
            type='text'
            name='relocation'
            value={formData.relocation}
            onChange={handleChange}
            placeholder='relocation'
            error={errors.relocation}
            />
             <Select
                label='Certificate Submission'
                name='certificateSubmission'
                value={formData.certificateSubmission}
                onChange={handleChange}
                options={certificateSubmissions}
                error={errors.certificateSubmission}
            />
            <Select
                label='Shifts'
                name='shifts'
                value={formData.shifts}
                onChange={handleChange}
                options={shift}
                error={errors.shifts}
            />
            <Input 
            label='Blocking Period'
            type='number'
            name='blockingPeriod'
            value={formData.blockingPeriod}
            onChange={handleChange}
            placeholder='Blocking Period'
            error={errors.blockingPeriod}
            />
            <Input 
            label='Starts On'
            type='date'
            name='startsIn'
            value={formData.startsIn}
            onChange={handleChange}
            placeholder='StartsIn'
            error={errors.startsIn}
            />
            <Input 
            label='Expires In'
            type='date'
            name='endsIn'
            value={formData.endsIn}
            onChange={handleChange}
            placeholder='Ends On'
            error={errors.endsIn}
            />
            </div>
            <h3>Others</h3>
            <div className='job-form'>
            <Input 
            label='Employblity Score'
            type='number'
            name='emplotblityScore'
            value={formData.emplotblityScore}
            onChange={handleChange}
            placeholder='Emplotblity Score'
            error={errors.emplotblityScore}
            />
            <Select
                label='Interview Type'
                name='interviewType'
                value={formData.interviewType}
                onChange={handleChange}
                options={interviewTypes}
                error={errors.interviewType}
            />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreateJob;