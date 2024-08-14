import React, { useState } from 'react';

//Task 1: Initializing and Displaying a List

const MoviesList = () => {
    const [movies, setMovies] = useState(["Anchorman","Hit Man", "Old School", "Mile 22", "Friday", 
        "Ace Ventura Pet Detective", "Zoolander", "Bad Boys For Life", "White Chicks", "Dumb and Dumber"]);

//Task 2: Conditional Rendering of Movie Details

    const [description, setDescription] = useState(["A 2004 satirical comedy film about a 1970s television anchorman who clashes with a new female reporter",
        "A professor moonlighting as a hit man of sorts for his city police department, descends into dangerous, dubious territory when he finds himself attracted to a woman who enlists his services",
        "An American semi-autobiographical coming-of-age novel by Tobias Wolff",
        "A 2018 American action thriller film about a CIA paramilitary unit that must transport a police officer with sensitive information 22 miles to an extraction point while being hunted by the government",
        "A 1995 American comedy-drama film about two unemployed friends, Craig Jones (Ice Cube) and Smokey (Chris Tucker), who spend a day in their South Central Los Angeles neighborhood dealing with a variety of issues", 
        "A 1994 American comedy film about a private investigator who specializes in finding missing animals", 
        "A 2001 comedy film that satirizes the fashion industry and follows the story of Derek Zoolander (Ben Stiller), a dimwitted male model who is brainwashed into assassinating the Prime Minister of Malaysia", 
        "A 2020 action movie about two Miami narcotics detectives, Mike Lowrey (Will Smith) and Marcus Burnett (Martin Lawrence), who are partners for 25 years.",
        "A 2004 comedy-crime film about two disgraced FBI agents who go undercover as white women to protect hotel heiresses from a kidnapping plot",
        "A 1994 American comedy film about two well-meaning but not-so-smart best friends, Harry Dunne (Jeff Daniels) and Lloyd Christmas (Jim Carrey), who get involved in a criminal scheme after trying to return a briefcase to its owner"]);
            
        
    const [selectedMovie, setSelectedMovie] = useState(-1)

//Task 3: Implementing Movie Removal

    const deleteMovie = index => {
        setMovies(movies.filter((movie, i) => i !== index));
    }
//Task 4: Toggling List View

    const comedyMovies = ["Anchorman", "Old School", "Friday", "Ace Ventura Pet Detective", "Zoolander","White Chicks","Dumb and Dumber"];

        return (
            <div>
                
                <ul>
                    {movies.map((movie, index) => (
                        index == selectedMovie ? 
                        <>
                        <li onClick={() => setSelectedMovie(index)} key={index}>{movie} <button onClick={() => deleteMovie(index)}>Remove</button></li> 
                        <p> {description[selectedMovie]}</p>
                        </>
                        : <li onClick={() => setSelectedMovie(index)} key={index}>{movie} <button onClick={() => deleteMovie(index)}>Remove</button></li>
                    ))}
                </ul>

                <button onClick={() => setMovies(comedyMovies)}>Comedy Movies</button>        
                

                
            </div>
    );

    };


        


export default MoviesList;