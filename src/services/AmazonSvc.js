import axios from 'axios'
import {fromPromise} from 'rxjs/observable/fromPromise'
import {from} from 'rxjs/observable/from'

export default {
  getXmlRequest() {
      return  fromPromise(axios.get("https://jsonplaceholder.typicode.com/users/1"));
      // return fromPromise($http.get("http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAJHBDJY4JNUZAPLPQ&AssociateTag=alvirtuoso-20&Keywords=iphone%20plus&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers&SearchIndex=All&Service=AWSECommerceService&Timestamp=2017-04-18T03%3A07%3A59.000Z&Signature=k2QUzqKh6cVafPHx1O83nBAJ4uhEWM2ASuDzvSvy6%2FE%3D"))

  }

}