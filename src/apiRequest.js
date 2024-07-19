

const apiRequest = async (url = "", objOptions = null, errMsg = null) => {
   try{
     const response = await fetch(url, objOptions);
   } catch (err) {
        errMsg = err.Message;
   } finally {
        return errMsg; 
   }
}

export default apiRequest