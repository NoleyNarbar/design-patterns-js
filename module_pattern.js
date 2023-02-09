var personModule = (function(){
  
    var firstName;
    var lastName;
    
    return{
      setName(f,l){
        firstName = f;
        lastName = l;
      },
      getName(){
        return firstName + " " + lastName;
      }
    }
    
  })();
  
  personModule.setName('akash','pal')
  personModule.getName() //"akash pal"