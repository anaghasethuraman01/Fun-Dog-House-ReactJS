import React from 'react';
import Resource from './Resource';

const Showdog = () => {

    const webURL = 'https://dog.ceo/api/breeds/image/random/50';
    const render=( data )=>{
        if(data.loading === true)return null;
        console.log('Got the data ',data);
        return (  data.trans.map( (dog,index) => (

            <div key={index} >
                
                <img className='image' src= { dog } alt='dog img' />

            </div>
          )
     )

     ) 
    }
    return (
        <div>
            <h1>showdog</h1>
            <Resource path={ webURL } render={render} />
        </div>
    )
}

export default Showdog
