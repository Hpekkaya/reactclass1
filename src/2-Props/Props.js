import Car from "./Car"

const Props = () => {
    // const myElement = <Car brand ="Ford"/>
    // let variable = "Mustang"
    // const myElement2 = <Car brand={variable}/>

    const carInfo = {
        name : "Ford",
        model: "Mustang"
    }
    const myElement3 = <Car brand={carInfo}/>
    return (
    <>
    {/* {myElement}
    {myElement2} */}
    {myElement3}

    </>
   ) 
}

export default Props