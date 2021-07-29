export default class LocaleStorageAPI{

    constructor() {
        this.keyQueue = 'index';
        this.keyWatch = 'id';
        this.value = '';
    }

    getValueQueue() {
        const keyQueue = localStorage.getItem(this.keyQueue)
        if (keyQueue !== null) {
            return JSON.parse(keyQueue)
        }
        return []
    }
    getValueWatched() {
        const keyWatch = localStorage.getItem(this.keyWatch)
        if (keyWatch !== null) {
            return JSON.parse(keyWatch)
        }
        return []
    }

    saveValueWatched(id) {
        let keyWatched = this.getValueWatched()
        let pushKey = false
        const checkedWatchId = keyWatched.indexOf(id)

        if (checkedWatchId === -1) {
            keyWatched.push(id)
            pushKey = true
        }
        else {
            keyWatched.splice(checkedWatchId,1)
        }

        localStorage.setItem(this.keyWatch, JSON.stringify(keyWatched))
        return { pushKey , keyWatched}
    }
      saveValueQueue(index) {
          let keyQueue = this.getValueQueue()
          let pushKey = false
        const checkedQueueIndex = keyQueue.indexOf(index)

        if (checkedQueueIndex === -1) {
            keyQueue.push(index)
            pushKey = true
        }
        else {
            keyQueue.splice(checkedQueueIndex,1)
        }
          localStorage.setItem(this.keyQueue, JSON.stringify(keyQueue))
          return{pushKey , keyQueue}
    }
   
    fetchWatchedCards() {
        try {
            const arrayWatched =JSON.parse(localStorage.getItem(this.keyWatch))
            arrayWatched.forEach(id => {
                async function fetchCardData(id) {
                     const resonse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=6acc6746be8af475302214b8237b9c48&language=en-US`,
  );
  const movie = await resonse.json();
    refs.fil.innerHTML = `<li class="film-item">
                  <a href="" class="film-link">
                  <img src="https://image.tmdb.org/t/p/w342/${poster_path}" alt="{{original_title}}" class="film-img" id="${id}">
                  <p class="film-description">${original_title}
                  </p>
                  <p class="film-description  film-gengers">${makeStringOfGenres(genre_ids)},       
          Other | ${release_date.slice(0, 4)} <span class="film-raiting">${vote_average}<span>
                  </p>
                  </a>
                  </li>`   }
            })
        }
        catch (error) {
            console.log(console.error(error));
        }

    }
     fetchQueueCards() {
        try {
            const arrayQueue =JSON.parse(localStorage.getItem(this.keyQueue))
            
            arrayQueue.forEach(id => {
                renderModal(id)
            })
        }
        catch (error) {
            console.log(console.error(error));
        }

    }

}