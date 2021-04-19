import axios from 'axios' ;

export const Get_All_Items  = ()=> 
{
   return async (dispatch) =>
   {
    dispatch({ type : 'GET_ALL_ITEMS_ATTEMPT'});
    
    //call the backend 
     let Res =  await axios.get(`https://jobs.github.com/positions.json?description=api`)
         onhandleResponse( dispatch , Res) 
   }
   
}
const onhandleResponse = ( dispatch , data) =>
{
    onGet_Data( dispatch , data )
}

const onGet_Data= ( dispatch , items    ) => 
{
        dispatch({ type : 'GET_ALL_ITEMS_SUCCESS' , items  }) 
}