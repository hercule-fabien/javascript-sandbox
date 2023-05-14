// const clearBtn = document.querySelector('#clear');

// function onClear() {
//   const itemList = document.querySelector('ul');
//   const items = itemList.querySelectorAll('li');

//   // itemList.innerHTML = '';

//   // items.forEach((item) => item.remove());

//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }
// }

// // JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };

// // addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear Items'));

// // Use named function
// clearBtn.addEventListener('click', onClear);

// // removeEventListener()
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// // Fire off event from JS
// setTimeout(() => clearBtn.click(), 5000);

const clearBtn = document.querySelector('#clear');
const list = document.querySelector('ul');
const lis = document.querySelectorAll('.items li');

const onClear = () => {
    lis.forEach((item) => {
        item.remove();
    });

    // while (list.firstChild) {
    //     list.removeChild(list.firstChild);
    // }
};

clearBtn.addEventListener('click', onClear);

// clearBtn.onclick = function () {
//     alert('clear Items');
// }

// clearBtn.onclick = function () {
//     console.log('clear Items');
// }

// add event listener

// clearBtn.addEventListener('click', () => alert('Clewer Items'));
// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => {
//     clearBtn.click();
// }, 5000);
