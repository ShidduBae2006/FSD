function twoprofiles({profile1},{profile2}){
    let mergedprofile = {};
    mergedprofile = {...profile1,...profile2};
    console.log(mergedprofile);
}
let profile1={name:"John",age:30};
let profile2={class:"A",city:"Agra",age:35};
twoprofiles({profile1},{profile2});