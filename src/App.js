import React, {useEffect, useState} from 'react';
import './App.css';
import tmdb from './tmdb';
import MovieRow from './componentes/MovieRow';
import FilmeDestaque from './componentes/Filme-destaque';
import Header from './componentes/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [dadosDetaque, setdadosDestaque] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

 useEffect(()=>{
    const loadAll = async () => {

      //pegando a lista total
      let list = await tmdb.getHomeList();
      setMovieList(list);

      // pegando os filme destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1)); 
      let chosen = originals[0].items.results[randomChosen]; 
      let chosenInfo = await  tmdb.getMovieInfo(chosen.id, 'tv');
      setdadosDestaque(chosenInfo); 

    }

    loadAll();
 }, []);
 
 useEffect(()=>{
   const scrollListener = () => {
    if (window.scrollY > 10) {
      setBlackHeader(true);
    } else{
      setBlackHeader(false);
    }
   }

window.addEventListener('scroll',scrollListener); 
return () => {
  window.removeEventListener('scroll',scrollListener);
}

 },[]);

  return (
<div className='page'>

 <Header black={blackHeader}/>

{dadosDetaque &&
  <FilmeDestaque item = {dadosDetaque}/>
}

<section className='lists'>
  {movieList.map((item, key)=>( 
   <MovieRow key={key} title={item.title} items={item.items} />
  ))}
</section>

<footer>
  Direitos de imagem para Netflix <br/>
  Dados pegos do site Themoviedb.org
  </footer>
</div>
  );
}  