import viteLogo from '/vite.svg'

function App() {

// callBack
const learnReactCallBack = (age, name, callback) => {
  console.log("Age", age)
  console.log("Name", name)

  // console.log(callback);
  callback(); // calling callMeWhenYouAreReadyTillThenDoOtherWorks function 
}

const callMeWhenYouAreReadyTillThenDoOtherWorks = () => {
  console.log("Ok call me when you are ready")
}

learnReactCallBack(22, "Anoop Shrestha", callMeWhenYouAreReadyTillThenDoOtherWorks);


// CallBack Hell
const learnReactCallBackHell = (onSuccess, onError) => {
  let x = 2;
  // if(x === 2){
  //   onSuccess("X is equals to 1")
  // }else{
  //   onError("X is not equals to 1");
  // }

  <div>{x === 1 ? onSuccess("X is equals to 1") : onError("X is not equals to 1")}</div>
}


learnReactCallBackHell(
  (message) => {
    console.log(message)
  },
  (message) => {
    console.log(message);
  }
)


// Promise 

const learnReactPromise = new Promise((resolve, reject) => {
  let x = 2;
  // if(x === 1){
  //   resolve("X is equals to 1");
  // }else{
  //   reject("X is not equals to 1")
  // }

  <div>{ x === 1 ? resolve("X is equals to 1") : reject("X is not equals to 1")}</div>
})


learnReactPromise
  .then(message => console.log(message))
  .catch(message => console.log(message));


  return(
    <>
      <div>Hello world</div>
    </>
  );

  
}

export default App
 