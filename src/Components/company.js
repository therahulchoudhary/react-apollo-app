import background from '../Assets/background_image.jpg';
import logo from '../logo.svg';
import JobCard from './common/jobCard';
import { useQuery } from '@apollo/client';
import { Companies } from '../Service/graphqlQuery';
import { useParams } from 'react-router-dom';
import PlaceholderImage from '../Assets/placeholder_company_image.jpg';

function Company(props) {
    const params = useParams();
    const { loading, error, data } = useQuery(Companies, {});
    console.log(data, (params.id === data.companies[0].id))
    return <>
        <div className="main_container">
            {data.companies.map((element, key) => {
                if (params.id == element.id) {
                    return <div className="container p-0" style={{ background: '#fafafa' }}>
                        <div className="company_cover">
                            <img src={background} width="100%" style={{ opacity: 0.6 }} alt="placeholder" />
                            <div className="company_card">
                                <div className="company_left_block">
                                    <img src={element.logoUrl === null || element.logoUrl === "" ? PlaceholderImage : element.logoUrl} width="100px" height="100px" alt="logo" style={{ padding: 12, borderRadius: 20 }} />
                                    <div className="company_detail">
                                        <h1>{element.name}</h1>
                                        <a href={element.websiteUrl} target="_blank" style={{ color: 'white' }}>{element.websiteUrl}</a>
                                    </div>
                                </div>
                                <div className="company_right_block">
                                    <a href={element.twitter} target="_blank"><i className="fa fa-twitter" aria-hidden="true" style={{ color: '#52A7E7', fontSize: 32 }}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="company_main_body">
                            <h3 className="company_body_heading">Jobs posted by {element.name}</h3>
                            {element.jobs.map((nestedElement) => (
                                <JobCard job={nestedElement} />
                            ))}
                        </div>
                    </div>
                } else {
                    return <></>;
                }

            })}
        </div>
    </>;
}

export default Company;