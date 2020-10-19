const nestedObjInsideOut = (value)=>{
    let shallow = value;
    let nested = [];
    while(Object.values(shallow)){
        nested.push(Object.keys(shallow)[0]);
        if(typeof Object.values(shallow)[0] === 'string'){
            nested.push( Object.values(shallow)[0]);
            break;
        }
        
        shallow = Object.values(shallow)[0];
    }
    
    return nested.reduce((accumulator,currentValue,index)=>{
        if(index ===0){
            return currentValue;
        }else{
            return { [currentValue]:accumulator }
        }
    },{});
}

module.exports = nestedObjInsideOut ;