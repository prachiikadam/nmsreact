

React router dom enables client side routing
Previous projects are likely to be on V5 
Currently we are using v6


useEffect hook
useEffect(()=>{})
generally called every after render of component

2 .
useEffect(()=>{},[])
generally called  after render of component, only once

useEffect(()=>{},[dependencies])
3. useeffect callback function called after componenent is rendered first time and after dependencioes are chaged

Basic nature of useEffect is to execute after every render .(fn is mandatory ).But behaviour is altered by giving optional parameter dependencies array

useRouteError is a hook to give more information about error
Link from react router dom which does not reloads entire page like anchor tag


UserContext.Consumer is used for react class based components for consuming context 
Inside this there will be callback which has access to context data
To modify user context value user
 <UserContext.Provider value ={{loggedinUser:'new value'}}> 
 <UserContext.Provider/> 



Other state managemengt libraries
Zustand
// con of tailwind css ---> js file become lenthier

# Redux toolkit
-Install @reduxjs/toolkit , react-redux
- Build store
- connect store to app



