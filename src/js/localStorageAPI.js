export default class LocaleStorageAPI {
  constructor() {
    this.keyQueue = 'queue';
    this.keyWatch = 'watch';
    this.value = '';
  }

  getValueQueue() {
    const keyQueue = localStorage.getItem(this.keyQueue);
    if (keyQueue !== null) {
      return JSON.parse(keyQueue);
    }
    return [];
  }
  getValueWatched() {
    const keyWatch = localStorage.getItem(this.keyWatch);
    if (keyWatch !== null) {
      return JSON.parse(keyWatch);
    }
    return [];
  }

  saveValueWatched(id) {
    let keyWatched = this.getValueWatched();
    let pushKey = false;
    const checkedWatchId = keyWatched.indexOf(id);
    if (id === undefined) {
      return;
    }

    if (checkedWatchId === -1) {
      keyWatched.push(id);
      pushKey = true;
    } else {
      keyWatched.splice(checkedWatchId, 1);
    }

    localStorage.setItem(this.keyWatch, JSON.stringify(keyWatched));
    return { pushKey, keyWatched };
  }
  saveValueQueue(index) {
    let keyQueue = this.getValueQueue();
    let pushKey = false;
    const checkedQueueIndex = keyQueue.indexOf(index);
    if (index === undefined) {
      return;
    }

    if (checkedQueueIndex === -1) {
      keyQueue.push(index);
      pushKey = true;
    } else {
      keyQueue.splice(checkedQueueIndex, 1);
    }
    localStorage.setItem(this.keyQueue, JSON.stringify(keyQueue));
    return { pushKey, keyQueue };
  }

  fetchQueueCards() {
    try {
      const arrayQueue = JSON.parse(localStorage.getItem(this.keyQueue));
      arrayQueue.forEach(id => {
        renderModal(id);
      });
    } catch (error) {
      console.log(console.error(error));
    }
  }
}
