import { useEffect, useState } from "react";

const useUsertype = (USER_TYPE) => {
    const [usertype, setUsertype] = useState(() => localStorage.getItem('usertype') || '');

    useEffect(() => {
        const storedUsertype = localStorage.getItem('usertype');
        if (!storedUsertype || storedUsertype !== USER_TYPE) {
            localStorage.setItem('usertype', USER_TYPE);
            setUsertype(USER_TYPE);
        } else {
            setUsertype(storedUsertype);
        }
    }, [USER_TYPE]);

    return [usertype, setUsertype];
}

export default useUsertype;