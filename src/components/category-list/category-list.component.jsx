import CategoryItem from "../category-item/category-item.components";
import "./category-list.styles.scss";

const CategoryList = ( {categories} ) => {
    return (
        <div className="categories-container">
            { categories.map(( category) => (
                <CategoryItem key={category.id} category={ category } />
            )) }
        </div>
    );
}

export default CategoryList;