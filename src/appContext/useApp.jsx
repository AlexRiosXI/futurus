import { useContext } from 'react';
import { AppContext } from './appContext';

const useApp = () => useContext(AppContext);

export default useApp;