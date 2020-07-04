import { useLocation } from 'react-router';

export const useGroupId = (): string | undefined => {
    const location = useLocation();
    const groupId = new URLSearchParams(location.search).get('groupId');

    if (groupId === null) {
        return 'G2008'; // TODO: enable groupId w/ autentication
    } else {
        return groupId;
    }
};
