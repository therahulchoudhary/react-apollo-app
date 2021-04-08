import './style.css';
import { useQuery } from '@apollo/client';
import JobCard from '../common/jobCard';
import { Jobs } from '../../Service/graphqlQuery';
import { useState } from 'react';

function Home() {
    const { loading, error, data } = useQuery(Jobs);
    const [searchTxt, setSearchTxt] = useState('');
    return (<div>
        <div className="container main_container mt-5 pt-4">
            <div className="filter_block">
                <div className="row justify-content-end">
                    <div className="col-md-9">
                        <h4 className="all_jobs_heading m-0">All Jobs</h4>
                    </div>
                    <div className="col-md-3 search_bar_div">
                        <input type="text" className="search_bar" placeholder="Search Job" onChange={(e) => { setSearchTxt(e.target.value) }} />
                        <i className="fa fa-search search_icon"></i>
                    </div>
                </div>
            </div>
            {loading ? <div className="loader"><div className="spinner"></div></div> : <div className="job_list_block">
                {data.jobs.map((el) => {
                    //(<JobCard job={el} />)
                    if (searchTxt && searchTxt.length > 0) {
                        if (el.title.toLowerCase().includes(searchTxt.toLowerCase())) {
                            return <JobCard job={el} />
                        } else {
                            return <></>
                        }
                    } else {
                        return <JobCard job={el} />
                    }
                })}
            </div>}

        </div>
    </div>);
}

export default Home;