import './PageButton.css';

const PageButton = ({ page, updatePage }) => {

    return (
        <>
            <div className="pageButtonList">
                <button className="pageButton" onClick={() => updatePage(1)} disabled={page === 1}>1</button>
                <button className="pageButton" onClick={() => updatePage(2)} disabled={page === 2}>2</button>
            </div>
        </>
    )
}

export default PageButton;