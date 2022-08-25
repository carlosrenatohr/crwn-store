import "./category-item.styles.scss";
const CategoryItem = ({ category }) => {
    const {id, title, imageUrl} = category;
    return (
        <div key={id} className="directory-item-container">
            <div className="background-image" style={
                { backgroundImage: `url(${imageUrl})` }
            }></div>
            <div className="directory-item-body-container" >
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default CategoryItem;