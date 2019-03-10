// function getTime() {
//     setTimeout(() => {
//       console.log(Date());
//     }, 1000);
// }

// function execute() {
//     getTime();
//     console.log(1);
//     console.log(2);
// }
// execute();

// function getTime(callback) {
//     setTimeout(()=> {
//         callback(Date());
//     }, 1000);
// }

// function execute() {
//     getTime((time) => {
//         console.log(time);
//         console.log(1);
//     });
//     console.log(2);
// }
// execute();


// function getTime(onSuccess, onFailure) {
//     setTimeout(()=> {
//         const isSuccess = Math.random() >=0.5;
//         if(isSuccess) {
//             onSuccess(Date());
//         } else {
//             onFailure('시간을 가져오는 데 실패했습니다.');
//         }
//     }, 1000);
// }

// function execute() {
//     getTime((date) => {
//         console.log(date);
//     }, (err) => {
//         console.log(err);
//     });
// }
// execute();

// function getTime(callback) {
//     setTimeout(()=> {
//         callback(Date());
//     }, 1000)
// }

// function execute() {
//     getTime((time)=> {
//         console.log(time);
//         getTime((time) => {
//             console.log(time);
//         })
//     })
// }

// execute();

// Promise

function getTime() {
    return new Promise((resolve, reject)=> {

        setTimeout(()=> {
            const isSuccess = true;
            if(isSuccess) {
                resolve(Date());                
            } else {
                reject('시간을 가져오는데 실패했습니다.');
            }
        },1000);
    });
}

// function execute(){
//     getTime()
//     .then((date) => {
//         console.log(date);
//         return getTime();
//     })
//     .then((date)=> {
//         console.log(date);        
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// }

// execute();

async function execute() {
    try {
    console.log(await getTime());
    console.log(await getTime());
    console.log(await getTime());
    console.log(await getTime());
    console.log(await getTime());
    } catch (err) {
        console.log(err);
    }
}

execute();