import { useContext } from 'react';
import { OrganizationContext } from './organizationContext';

const useOrganization = () => useContext(OrganizationContext);

export default useOrganization;