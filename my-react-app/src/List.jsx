import PropTypes from 'prop-types';

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
    }))
}

function List(props) {
    const {
        category = "Category",
        items = [],
    } = props;

    const listItems = items.map(item => (
        <li key={item.id}>
            {item.name}: {item.calories} calories
        </li>
    ))

    return (
        <>
            <h2 className="list-category">{category}</h2>
            <ul className="list-item">{listItems}</ul>
        </>
    )
}
export default List;