import './Repository.css';

const Repository = (props) => {
    if (!props) {
        return null;
    }

    return (
        <>
            <div className="repository">
                <a href={props.repo?.html_url} target="_blank"><div className="repositoryName">{props.repo?.name}</div></a>
                <div className="repositoryDesc">{props.repo?.description}</div>
                <span className="repositoryInfo">
                    <div className="repositoryOwner">
                        <img className="repositoryIcon" src={props.repo?.owner?.avatar_url} alt={props.repo?.owner?.login} width="50" />
                        <div className="ownerName">{props.repo?.owner?.login}</div>
                    </div>
                    <div className='repositoryStars'>
                        <img className="repositoryIcon" src="src/assets/star.png" alt="Star Icon" />
                        <p>{props.repo?.stargazers_count}</p>
                    </div>
                </span>
            </div>
        </>
    )
}

export default Repository;