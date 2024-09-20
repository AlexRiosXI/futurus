import { useEffect, useState } from 'react';
import NavBar from './navbar/navbar';
import SideBar from './sidebar/sidebar';
import { cn } from '@nextui-org/react';
import { Outlet } from 'react-router-dom';
import useApp from '../../../appContext/useApp';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/helper/supabaseClient';
import { ToastContainer, toast } from 'react-toastify';


const Dashboard = () => {
  const {darkMode, setUserId,setUserName} = useApp();
  const navigate = useNavigate();
  

  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const getUserName = async (userId) => {
    console.log('obteniendo')
    let { data, error } = await supabase
      .from('user_profiles')
      .select('first_name,second_name,first_surname,preferred_name').eq('user_id', userId)
      console.log(data)
   if(error){
     toast.error('Error al obtener el nombre de usuario')
   }
   else{
    if(data.length===0){
      navigate('new-profile')
    }
    else{
      if(data[0].preferred_name === 1){
        setUserName(`${data[0].first_name} ${data[0].first_surname}`)
      }else if(data[0].preferred_name === 2){
        setUserName(`${data[0].second_name} ${data[0].first_surname}`)
      }
      else{
        setUserName(`${data[0].preferred_name} ${data[0].first_surname}`)
      }
    }
  }
  }
  const getUserId = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      navigate('/');
    } else {
      setUserId(data.user.id);
      getUserName(data.user.id);
    }
  };
  useEffect(() => {
   getUserId();
  }, [])

  return (
    
    <section className={cn('text-foreground bg-background flex h-screen max-w-screen max-h-screen overflow-hidden', darkMode)}>
      <ToastContainer />
      <SideBar sideBarIsOpen={sideBarIsOpen} />
      <div className='grow'>
        <NavBar setSideBarIsOpen={setSideBarIsOpen} />
        <section className='w-full p-2 h-full'>
          <Outlet />
        </section>
      </div>
    </section>
    
  );
};

export default Dashboard;
