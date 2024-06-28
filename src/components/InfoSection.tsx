import JobRequirements from './JobRequirements'
import JobDescription from './JobDescription'
import CompanyDescription from './CompanyDescription'
import JobRole from './JobRole'

type Props = {}

const InfoSection = (props: Props) => {
    return (
        <div className='flex flex-col items-start justify-between'>
            <JobRole/>
            <JobRequirements/>
            <JobDescription/>
            <CompanyDescription/>

        </div>
    )
}

export default InfoSection