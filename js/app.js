'use strict'

let seattleList = document.getElementById('seattleList');

console.log(seattleList);

let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m'];

let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    dailyTotal: 0,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
    },
    render: function () {
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            let avgBuyseattle = Math.floor(this.getRandomCustomers() * this.avg);
            let message = hours[i] + ': ' + avgBuyseattle + 'cookies';
            li.textContent = message;
            seattleList.appendChild(li)
        }
    }
}
seattle.render()
console.log(seattle.getRandomCustomers());


let tokyoList = document.getElementById('tokyoList');

let tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    dailyTotal: 0,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
    },
    render: function () {
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            let avgBuytokyo = Math.floor(this.getRandomCustomers() * this.avg);
            let message = hours[i] + ': ' + avgBuytokyo + 'cookies';
            li.textContent = message;
            tokyoList.appendChild(li)
        }
    }
}
tokyo.render()
console.log(tokyo.getRandomCustomers());



let dubaiList = document.getElementById('dubaiList');

let dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    dailyTotal: 0,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
    },
    render: function () {
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            let avgBuydubai = Math.floor(this.getRandomCustomers() * this.avg);
            let message = hours[i] + ': ' + avgBuydubai + 'cookies';
            li.textContent = message;
            dubaiList.appendChild(li)
        }
    }
}
dubai.render()
console.log(dubai.getRandomCustomers());




let parisList = document.getElementById('parisList');

let paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    dailyTotal: 0,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
    },
    render: function () {
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            let avgBuyparis = Math.floor(this.getRandomCustomers() * this.avg);
            let message = hours[i] + ': ' + avgBuyparis + 'cookies';
            li.textContent = message;
            parisList.appendChild(li)
        }
    }
}
paris.render()
console.log(paris.getRandomCustomers());






let limaList = document.getElementById('limaList');

let lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    dailyTotal: 0,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
    },
    render: function () {
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            let avgBuylima = Math.floor(this.getRandomCustomers() * this.avg);
            let message = hours[i] + ': ' + avgBuylima + 'cookies';
            li.textContent = message;
            limaList.appendChild(li)
        }
    }
}
lima.render()
console.log(lima.getRandomCustomers());