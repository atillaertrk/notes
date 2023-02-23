import {ref} from 'vue'
import {db} from '../firebase/config'
import moment from 'moment'

const readNote= (id)=>{
    let note=ref(null)
    let errors=ref(null)

    const getNote= async()=>{
        try {
            let res= await db.collection('posts').doc(id).get();
        if(!res.exists){
            throw Error("Makaleye ulaşılamadı. İçerik silinmiş veya bağlantı adresi yanlış olabilir")
        }
        // const data = doc.data()
        // const tarih= res.data().creationDate
        // const postDate= moment(tarih).locale('tr').calendar()
        note.value={...res.data(), id:res.id, creationDate: moment(res.data().creationDate.toDate()).locale('eng').calendar()}
        } catch (Error) {
            errors.value= Error.message
        }
        
    }
    return {note, errors, getNote}
}
export default readNote