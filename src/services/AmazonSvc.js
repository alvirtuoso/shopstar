import axios from 'axios'
import {fromPromise} from 'rxjs/observable/fromPromise'
import {from} from 'rxjs/observable/from'

export default {
  getXmlRequest() {
      // return  fromPromise(axios.get("https://jsonplaceholder.typicode.com/users/1"));
      return fromPromise(
        axios.get(
          'api/onca/xml?AWSAccessKeyId=AKIAJHBDJY4JNUZAPLPQ&AssociateTag=alvirtuoso-20&Keywords=iphone%20plus&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers&SearchIndex=All&Service=AWSECommerceService&Timestamp=2017-04-19T19%3A23%3A59.000Z&Signature=nJd1%2B1FUc%2FkGMvfSl4hPiaF2TwUMEvdQl34hb0s9RPk%3D')
        )
// http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAJHBDJY4JNUZAPLPQ&AssociateTag=alvirtuoso-20&Keywords=iphone%20plus&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers&SearchIndex=All&Service=AWSECommerceService&Timestamp=2017-04-19T18%3A55%3A59.000Z&Signature=ofMOnimg6WY3geg9%2FADrKjCL6rBBcQmUqAr62sbfL2w%3D
  }

}