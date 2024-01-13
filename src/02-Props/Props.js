import Car from "./Car"

const Props = () => {
    // const myElement = <Car brand ="Ford"/>
    // let variable = "Mustang"
    // const myElement2 = <Car brand={variable}/>

    // const carInfo = {
    //     name : "Ford",
    //     model: "Mustang"
    // }
    // const myElement3 = <Car brand={carInfo}/>

    const person = {
        name :"Hakan",
        age :53,
        location : "Turkey"
    }
    const myCar = {
        carName : "Ford",
        carAge :5,
        model :"Mustang"
    }

    const myProps= {
        person, myCar
    }

    const  myElement4 = <Car definition={myProps} addition={myCar}/>

    return (
    <>
    {/* {myElement}
    {myElement2} */}
    {/* {myElement3} */}
    {myElement4}

    </>
   ) 
}

export default Props