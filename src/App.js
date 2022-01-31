import './App.css';


//COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//IMAGES
import userImage from './assets/images/user-img.png';
import ItemList from './components/ItemList/ItemList';


const App = () => {
  return (
    <>
    <NavBar />
    <div className='UserSection'>
    <ItemListContainer 
    name='Marco Polo'
    description='Prova prova prova.'
    img={userImage}
    initial={4}
    stock={15}
    />
    <ItemListContainer 
    name='Galileo Galilei'
    description='Prova prova prova.'
    img={userImage}
    initial={1}
    stock={10}
    />
    <ItemListContainer 
    name='Critobal Colon'
    description='Prova prova prova.'
    img={userImage}
    initial={2}
    stock={30}
    />
    </div>
    <ItemList />
    </>
  );
}

export default App;
