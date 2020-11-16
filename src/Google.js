import React from 'react';
import "./Google.css";
import { auth, providerGG, providerFB} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';


function Google() {
    const [state, dispatch] = useStateValue();

    const signInGG = () => {
        auth
            .signInWithPopup(providerGG)
            .then((result)=> {
                dispatch ({
                    type: actionType.SET_USER,
                    user: result.user,
                })
                console.log(result);
            })
            .catch((error) => alert(error.messages));
    };
    // fb
    
    const signInFB = () => {
        auth
            .signInWithPopup(providerFB)
            .then((result )=> {
                dispatch ({
                    type: actionType.SET_USER,
                    user: result.user,
                })
                console.log(result);
            })
            .catch((error) => alert(error.messages));
    };
    return (
        <div>
            <button type="submit" className="btn gg" onClick={signInGG}>
                Google
            </button>
            <button type="submit" className="btn fb" onClick={signInFB}>
                FaceBook
            </button>
        </div>
    )
}

export default Google
