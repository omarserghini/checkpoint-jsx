import imageInSrc from './imageInSrc.jpg';
import './App.css';
import styles from './mystyle.module.css';


function App() {
  return (  
    <div style={{border:'solid 1px black', maxWidth:'100vw'}}>

 <h1 className={styles.title}>Your name here</h1>
<br/>
 <img src={imageInSrc} alt="nature" className="image"/>
<br/>
 

 <img src="/imageInPublic.png"  alt="img" className="image" />

</div>
  );
}

export default App;