import Repository from "./Repository";

const RepositoryList = (props) => {
    return (
        <>
            <div>
                <h1>
                    Trending Repositories
                </h1>
            </div>
            <ul className="repositoryList">
                {props?.items?.map((item, index) => (
                    <li key={index} className="repositoryItem">
                        <Repository repo={item} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default RepositoryList;