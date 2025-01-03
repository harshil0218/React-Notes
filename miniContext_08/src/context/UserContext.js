// context api is specially use for global state management in react js
/* problem : main->div->div->card suppose we want to chane content of card then we need to give props 
to all the parent to avoid this problem wi use context api */

import React from 'react'; 

const UserContext = React.createContext();

export default UserContext;
/* we make provider also with user context it will act as a wrapper for our component and global variable.
 Example :
<userContext>
    <Login/>
    // card can access all data through usercontext 
    <Card>
        <Data></Data>
    </Card>
</userContext>
*/
