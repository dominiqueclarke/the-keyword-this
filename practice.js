//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //to give context to functions you you're envoking

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Explicit - is it invoked with call, apply or bind
      //Implicit - is there something to the left of the dot
      //Default/Window - if it's not explicitly or implicitly invoked, context defaults to Window
      //New - a constructor function is used to provide context

  // 3) What is the difference between call and apply?

      //Answer

  // 4) What does .bind do?

      //Answer


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: "deeclarke"
  , email: "dominiquedclarke@gmail.com"
  , getUsername: function() {
    return this.username;
  }
}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).
function Car(make, model, year) {
  this.move = 0
  this.make = make
  this.model = model
  this.year = year
  this.moveCar = function() {
    return this.move += 10;
  }
}


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  getYear.call(mustang);
  getYear.call(prius);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //window

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
