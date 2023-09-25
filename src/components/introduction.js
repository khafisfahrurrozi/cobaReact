// // import logo from './logo.svg';
// import './App.css';

function Introduction(props) {
    console.log('Sedang mengirim parameter',props.name)
  return (
    <div>
      <header>
        <h1>Mari kita kenalan</h1>
      </header>
      <section>
        <nav>Nama Saya Adalah : {props.name}</nav>  
      </section>

    </div>
  );
}

export default Introduction;
