import "../css/NewsList.css"
import NewsItem from "./NewsItem";

function NewsList (){
    return (
        <div className="NewsList">
            <div className="menu_bar">
              <select>
                <option value={"latest"}>최신순</option>
                <option value={"oldest"}>오래된 순</option>
              </select>
            </div>
            <div className="list_wrapper">
                <NewsItem/>
            </div>
        </div>
    );
}

export default NewsList