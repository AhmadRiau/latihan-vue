const DEFAULT_STATE = {}

const App = Vue.createApp({
   data() {
      return{
         state : true,
         inputName : '',
         namesList : [],
         errorMessage : '',
         showError : false,
         result : '',
      }
   },
   computed: {
      isReady() {this.names.length > 1;} 
   },
   methods: {
      addNameTolist(){
         const getUserName = this.inputName;
         if(this.validate(getUserName)) {
            this.namesList.push(getUserName);
            this.inputName = '';
         } else {
            this.showError = true;
         }
      },
      validate(value) {
         if (value === '') {
            this.errorMessage
         }
      }
   }
})