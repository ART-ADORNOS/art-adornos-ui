import {useEffect, useState} from "react";

const useFilteredCarts = (carts) => {
    const [filteredCarts, setFilteredCarts] = useState([]);
    const [selectedStartup, setSelectedStartup] = useState("Todos");

    useEffect(() => {
        setFilteredCarts(carts);
    }, [carts]);

    const handleFilter = (startupName) => {
        if (!startupName || startupName === "Todos") {
            setFilteredCarts(carts);
            setSelectedStartup("Todos");
        } else {
            const result = carts.filter((cart) => cart.name_startup === startupName);
            setFilteredCarts(result);
            setSelectedStartup(startupName);
        }
    };

    const uniqueStartups = [...new Set(carts.map((cart) => cart.name_startup))];

    return {
        filteredCarts,
        uniqueStartups,
        handleFilter,
        selectedStartup,
    };
};

export default useFilteredCarts;