function Dog({dogYears, colour, breed, name}) {
    //logic goes at the top outside of the return statement
    const styles = {
        backgroundColor: colour
    }

    function calculateHumanYears(n){
        return n * 7;
    }

    const humanYears = calculateHumanYears(dogYears);

    return (
        <div style={styles}>
        <h2>Hi, I guard my garden.</h2>
        <p>My name is  {name} and I am a {breed}</p> 
        {/* create a sentence that says how old I am in dog years and human years */}
        <p>I am {dogYears} years old. That is like being a {humanYears} year old human.
        I want to be let out at night so I can chase all the trespassers to my garden.</p>
    </div>
        
    )
} 

export default Dog;