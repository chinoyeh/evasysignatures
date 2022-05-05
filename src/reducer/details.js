import { getDownloadURL, uploadBytes, ref as sRef} from 'firebase/storage'
import { db,storage} from '../firebase'
import {set, ref,onValue} from 'firebase/database'




const gowndetails =[{}]


const detailsReducer =(state=gowndetails, action )=>{
    switch(action.type){
       

        case 'GET_DETAILS':
            const ids = 'l2sw9uwbtg4x7hsybaq'
    const categorys = 'Gown'
    const dbRef = ref(db, categorys + '/' + ids)

     onValue(dbRef, (snapshot)=>{
            var data = snapshot.val()
          
            return [
                ...state,
                {data}
            ]
               
     
           
        })
        
     
                  

                   
                   
             
          

          default:
              return state
    }

}
export default detailsReducer