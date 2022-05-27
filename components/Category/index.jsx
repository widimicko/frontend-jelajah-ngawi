import styles from "./styles.module.css";

const Category = ({ category, selectedCategory, handleCategoryChange }) => {
  return (
    <div
      className={`${styles.categoryItem} ${
        selectedCategory === category.name ? styles.selectedCategory : ""
      } bg-soft-grey rounded py-1 px-4`}
      onClick={handleCategoryChange}
    >
      <p className="fs-2 text-center my-auto">{category.name}</p>
    </div>
  );
};

export default Category;
