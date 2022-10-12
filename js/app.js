'use strict'

// let seattleList = document.getElementById('seattleList');

// console.log(seattleList);


// let seattle = {
    //     name: 'Seattle',
    //     min: 23,
    //     max: 65,
    //     avg: 6.3,
    //     dailyTotal: 0,
    //     cookiesSoldEachHourArray: [],
    //     getRandomCustomers: function () {
        //         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
        //     },
//     calcHourlySales: function () {
    //         for (let i = 0; i < hours.length; i++) {
        //             let randNum = this.getRandomCustomers();
        //             let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
        //             this.cookiesSoldEachHourArray.push(cookiesSoldThisHour);
        //             this.dailyTotal += cookiesSoldThisHour;
        //         }
        //     },
        //    renderList: function () {
            //         this.calcHourlySales();
            //         for (let i = 0; i < hours.length; i++) {
                //             let listItemSea = document.createElement('li');
                //             listItemSea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
                //             seattleList.appendChild(listItemSea);
                //         }
                //         let totalLi = document.createElement('li');
                //         totalLi.textContent = `Total: ${this.dailyTotal}`;
                //         seattleList.appendChild(totalLi);
                //     }
                // }
                // seattle.renderList();
let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m'];
const locationTable = document.getElementById('table')
console.log(locationTable)
const locationBody = document.createElement('tbody');
locationTable.appendChild(locationBody);

function Location(name, min, max, avg) {
    this.name = name,
    this.min = min,
    this.max = max,
    this.avg = avg,
    this.dailyTotal = 0,
    this.cookiesSoldEachHourArray=[]
    
}
Location.prototype.getRandomCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
}

Location.prototype.calcHourlySales = function () {
    for (let i = 0; i < hours.length; i++) {
        let randNum = this.getRandomCustomers();
        let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
        this.cookiesSoldEachHourArray.push(cookiesSoldThisHour);
        this.dailyTotal += cookiesSoldThisHour;
    }
    
}

function createTableHeader(){
    let headerRow = document.createElement('tr');
    let tableHeader = document.createElement('th');
    tableHeader.textContent = 'hours';
    headerRow.appendChild(tableHeader);
    locationTable.appendChild(headerRow);
    for (let i =0; i< hours.length; i++){
        let tableElem = document.createElement('th')
        //tableHeader = document.createElement('th');
        tableElem.textContent = hours[i];
        headerRow.appendChild(tableElem);

    }

}
Location.prototype.renderTable = function() {
    this.calcHourlySales();
    let tr = document.createElement('tr');
    locationTable.appendChild(tr);
    let locationName = document.createElement('td');
    locationName.textContent = this.name;
    tr.appendChild(locationName);
    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        td.textContent = this.cookiesSoldEachHourArray[i];
        tr.appendChild(td);
    }
    
}
createTableHeader();
let seattle = new Location('Seattle', 23, 65, 6.3); 
seattle.renderTable();
let tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.renderTable();
let dubai = new Location('Dubai', 11, 38, 3.7);
dubai.renderTable();
let paris = new Location('Paris', 20, 38, 2.3);
paris.renderTable();
let lima = new Location('Lima', 2, 16, 4.6);
lima.renderTable();

function createTableFooter(){
    let footerRow = document.createElement('tr');
    let tableFooter = document.createElement('td');

}