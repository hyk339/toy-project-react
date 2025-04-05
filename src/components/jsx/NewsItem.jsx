import "../css/NewsItem.css"

function NewsItem({id, content, date}){

    return (
        <div className="NewsItem">
            
            <div className="info_section">
                <div className="content">
                    {content}
                </div>
            </div>
            
        </div>
    );
}

export default NewsItem;