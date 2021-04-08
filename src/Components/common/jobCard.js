import '../../CSS/main.css';

function jobCard(props) {
    return (
        <div className="main_container">
            <div className="card_body my-2">
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="card_title">{props.job.title}</h2>
                        <h4 className="card_subtitle">Posted by <span style={{ color: 'orange' }}>{props.job.company.name}</span></h4>
                        <div className="tags_div my-3">
                            {props.job.tags.map((element) => (<span className="job_tag">{element.name}</span>))}
                        </div>
                        <div className="card_detail_div my-2">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            {props.job.cities.length !== 0 ? <span>{props.job.cities.map((element) => (<span className="location_text">{element.name}</span>))}</span> : <span className="location_text">NA</span>}<span className="location_text">| {props.job.commitment.title}</span>
                            {props.job.remotes.length !== 0 && <span>{props.job.remotes.map((element) => (<span className="location_text">| {element.name}</span>))}</span>}
                        </div>
                        <div className="card_description">
                            <p className="m-0">{props.job.description}</p>
                        </div>
                    </div>
                    <div className="col-md-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <div className="apply_block">
                            <div className="about_publisher text-center">
                                <p className="m-0">Hiring Manager</p>
                                <p className="m-0" style={{ color: 'orange' }}>{props.job.userEmail ? props.job.userEmail : "Not Available"}</p>
                            </div>
                            <a href={props.job.applyUrl} target="_blank" className="apply_button">APPLY TO THIS JOB</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default jobCard;