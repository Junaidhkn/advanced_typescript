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

}

const jimmy = new Person( 'jimmy', 12 )

jimmy.greet()
console.log( jimmy )