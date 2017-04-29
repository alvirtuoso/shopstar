import axios from 'axios'
import {fromPromise} from 'rxjs/observable/fromPromise'
import {from} from 'rxjs/observable/from'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

export default {
  /**
   * Sends a http get request using rxjs observable from promise returned by axios.
   * @param {*} keywords 
   */
  geItemsRequest(keywords) {
      return fromPromise(
          axios.get(`http://127.0.0.1:5000/api/amazon?search=` + keywords)
          // axios.get('http://jsonplaceholder.typicode.com/users')
        );
      // return axios.get('http://127.0.0.1:5000/api/amazon?search=' + keywords);
  },

  /**
   * Uses axios http get request.
   */
  http(){
    return axios.create({
      baseURL: `http://127.0.0.1:5000/api/amazon?search=`
    })
  }
}