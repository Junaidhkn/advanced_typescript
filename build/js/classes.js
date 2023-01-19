class Person {
   #money = 100  // Private Field
   education = 'High School'
   constructor( name, age ) {
      this.name = name;
      this.age = age

   }
   greet () {
      return `Hello ${this.name}`
   }
   get info () {  // getter
      console.log( `Name:${this.name} with age ${this.age}` );
   }
   set money ( money ) {
      if ( money < 0 ) return
      this.#money = money
   }

}

const jimmy = new Person( 'jimmy', 12 )

jimmy.greet()
jimmy.info
jimmy.money = -1
console.log( jimmy )