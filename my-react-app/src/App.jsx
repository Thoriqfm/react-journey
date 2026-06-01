// Render lists
import List from './List';

function App() {
  const fruit = [
        {id: 1, name: 'Apple', calories: 95}, 
        {id: 2, name: 'Orange', calories: 62}, 
        {id: 3, name: 'Banana', calories: 105}, 
        {id: 4, name: 'Grapes', calories: 151}, 
        {id: 5, name: 'Mango', calories: 203}
    ];

  const vegetable = [
        {id: 1, name: 'Carrot', calories: 41},
        {id: 2, name: 'Broccoli', calories: 55},
        {id: 3, name: 'Spinach', calories: 23},
        {id: 4, name: 'Potato', calories: 77},
        {id: 5, name: 'Tomato', calories: 22}
    ];

  return (
    <>
      {fruit.length > 0 && <List items={fruit} category="Fruits" />}  
      {vegetable.length > 0 && <List items={vegetable} category="Vegetables" />}
    </>
  )
}

export default App;
