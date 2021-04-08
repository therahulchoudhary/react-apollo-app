import { useQuery } from '@apollo/client';
import '../CSS/main.css';
import { Link, useHistory } from 'react-router-dom';
import { Companies } from '../Service/graphqlQuery';
import PlaceholderImage from '../Assets/placeholder_company_image.jpg';
import { useState } from 'react';


function CompanyList() {
    const { loading, error, data } = useQuery(Companies, {});
    const [searchTxt, setSearchTxt] = useState('');
    // const [queryParam, setQueryParam] = useState({});
    // const history = useHistory();
    // console.log("sdfsdfadf", history);

    return (
        <div className="main_container mt-5 pt-3">
            <div className="container" style={{ background: '#fafafa' }}>
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4 className="company_list_heading py-3 m-0">Companies</h4>
                    <div className="col-md-3 search_bar_div">
                        <input type="text" className="search_bar" placeholder="Search Job" onChange={(e) => { setSearchTxt(e.target.value) }} />
                        <i className="fa fa-search search_icon"></i>
                    </div>
                </div>

                <div className="row">
                    {loading ? <div className="loader"><div className="spinner"></div></div> : <>
                        {data.companies.map((element) => {
                            if (searchTxt && searchTxt.length > 0) {
                                if (element.name.toLowerCase().includes(searchTxt.toLowerCase())) {
                                    return <div className="col-md-6 my-2">
                                        <div className="grid_item" style={{ background: 'white' }}>
                                            <div className="company_sm_card">
                                                {/* <img src={background} width="100%" height="100px" alt="image" /> */}
                                                <div className="company_left_block">
                                                    <img src={element.logoUrl === null || element.logoUrl === "" ? PlaceholderImage : element.logoUrl} width="80px" height="80px" alt="logo" className="p-2" style={{ borderRadius: 15 }} />
                                                    <div className="company_sm_detail">
                                                        <Link to={`/companyDetail/${element.id}`} > <h1 className="m-0 pt-3">{element.name}</h1></Link>
                                                        <a href={element.websiteUrl} target="_blank" style={{ color: 'white' }}>{element.websiteUrl}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_com_sm_detail p-2">
                                                <div className="w-75 company_sm_des">
                                                    <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>About the company</p>
                                                    <p style={{ fontSize: 14, fontWeight: 400, margin: 0 }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                                </div>
                                                <div className="jobs_block w-25">
                                                    <div>
                                                        <p className="text-center m-0">Jobs</p>
                                                        <p className="text-center m-0 number_jobs">{element.jobs.length}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                } else {
                                    return <></>
                                }
                            } else {
                                return <div className="col-md-6 my-2">
                                    <div className="grid_item" style={{ background: 'white' }}>
                                        <div className="company_sm_card">
                                            {/* <img src={background} width="100%" height="100px" alt="image" /> */}
                                            <div className="company_left_block">
                                                <img src={element.logoUrl === null || element.logoUrl === "" ? PlaceholderImage : element.logoUrl} width="80px" height="80px" alt="logo" className="p-2" style={{ borderRadius: 15 }} />
                                                <div className="company_sm_detail">
                                                    <Link to={`/companyDetail/${element.id}`}> <h1 className="m-0 pt-3">{element.name}</h1></Link>
                                                    <a href={element.websiteUrl} target="_blank" style={{ color: 'white' }}>{element.websiteUrl}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_com_sm_detail p-2">
                                            <div className="w-75 company_sm_des">
                                                <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>About the company</p>
                                                <p style={{ fontSize: 14, fontWeight: 400, margin: 0 }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                            </div>
                                            <div className="jobs_block w-25">
                                                <div>
                                                    <p className="text-center m-0">Jobs</p>
                                                    <p className="text-center m-0 number_jobs">{element.jobs.length}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </>}
                </div>
            </div>
        </div>
    );
}

export default CompanyList;