import React, {useState, useEffect} from 'react';
import './Header.css';

import { Link, useNavigate } from 'react-router-dom';
import { setIsAuthenticated } from '../../redux/actions/AuthAction';
import { useDispatch, useSelector } from 'react-redux';


function JobSeekerMenu() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let isAuth =
    useSelector((state) => state?.auth?.isAuthenticated) ||
    JSON.parse(localStorage.getItem('isAuthenticated'));

    const [user, setUser] = useState();
    console.log(isAuth);

    

    useEffect(() => {
        if ( isAuth ) {
        
            setUser(JSON.parse(localStorage.getItem('user')));
        }
       
      }, [isAuth]);

    const logOut = () => {
        localStorage.removeItem("user");
        dispatch(setIsAuthenticated(false));
        window.location.reload();
    };

//    const jobSeekerSignup = () => {
       
//         navigate('/jobseeker-signup');
//     }

//     const JobSeekerLogin = () => {
       
//         navigate('/jobseeker-signin');
//     }
    // const employerSignup = () => {
    //     navigate('/employer-signup');
    // }




    return (
        <div classNameName='HeaderScreen'>
              
           
            
            
          
        </div>
    )
}


export default JobSeekerMenu;