import Rebase from 're-base'//faciliter l'integration de firebase ds des projets react
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBtSvyOkuSG821wbg1ZLGblKP_VDp9azeI',
  authDomain: 'chatbox-app-7cc75.firebaseapp.com',
  databaseURL: 'https://chatbox-app-7cc75.firebaseio.com'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
