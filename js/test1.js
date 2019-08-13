// ;(function($) {
  // .animate(styleObj, optionObj)

  // .animate(styleObj, duration, easing, completeHandler)
//   $("#alex")
//     .stop()
//     .animate(
//       { marginTop: 200 },
//       {
//         duration: 2000
//       }
//     )
//     .animate(
//       { marginLeft: 100 },
//       {
//         duration: 2000
//       }
//     )
//     .animate(
//       { marginTop: 0 },
//       {
//         duration: 2000
//       }
//     )
//     .animate(
//       { marginLeft: 0 },
//       {
//         duration: 2000
//       }
//     );
// })($)

let people = function(name){
  this.name = name;
  this.hello = function(){
    console.log('hello');
    
  }
  this.intro = function(){
    console.log('my name is ' + this.name0);
    
  }
}