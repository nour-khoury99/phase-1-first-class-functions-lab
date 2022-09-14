// Code your solution in this file!

const drivers = ['Rebecca','Nour','Tony','georges'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}


const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiper = function(fraeMultiper){
    return function(value){
        return fareMultipler * value;
    }
}

const fareDoubler = createFareMultiper(2);
const fareTripler = createFareMultiper(3);

function fetchSpeecifiedDrivers(drivers,func){
    return func(drivers);
}


