import { getDownloadURL, uploadBytes, ref as sRef} from 'firebase/storage'
import { db,storage} from '../firebase'
import {set, ref,onValue} from 'firebase/database'




const INITIAL_STATE = {
    gown_details :{}
}

const detailsReducer =(state=INITIAL_STATE, action )=>{
    switch(action.type){
       

        case 'GET_DETAILS':
         
  
            return [
                ...state,
         
            ]
                   
                  

                   
                   
             
          

          default:
              return state
    }

}
export default detailsReducer