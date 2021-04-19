import axios from 'axios' ;

export const Get_All_Items  = ()=> 
{
   return (dispatch) =>
   {
    dispatch({ type : 'GET_ALL_ITEMS_ATTEMPT'});
    
    //call the backend 
      axios.get(`https://jobs.github.com/positions.json?description=api`)
      .then(response => {
          // If request is good...
          onhandleResponse( dispatch , response) 
         
       })
   }
   
}
const onhandleResponse = ( dispatch , data) =>
{
    onGet_Data( dispatch , data )
   //  console.log('ITEMS');
   //  console.log(data.data );
}

const onGet_Data= ( dispatch , items    ) => 
{
        dispatch({ type : 'GET_ALL_ITEMS_SUCCESS' , items  }) 
}