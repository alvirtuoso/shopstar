import axios from 'axios'
import {fromPromise} from 'rxjs/observable/fromPromise'
import {from} from 'rxjs/observable/from'

export default {
  geItemsRequest(keywords) {
      // return  fromPromise(axios.get("/users/1"));
      return fromPromise(
          axios.get('http://127.0.0.1:5000/api/amazon?search=' + keywords)
        );

  }

}