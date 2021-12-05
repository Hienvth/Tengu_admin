import React from 'react'

const login2 = () => {
    
    return (
        <form>
           <div>
                <label> Username:</label>
                <input type="text" name="username" >
                </input>
           </div>
           <div>
                <label> Password:</label>
                <input type="password" name="password" >
                </input>
           </div>
           <div>
               <button type="button">
                    Login
               </button>
            </div>

        </form>

    )
}

export default login2
