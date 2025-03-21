import React from "react";


export const useIndustryKeys = (industry) => {
    return React.useMemo(() =>
            (industry?.industries || []),
        [industry]
    );
};

export const getFilteredStartups = (startups, activeFilters) => {
    return activeFilters.length > 0
        ? startups.filter(startup =>
            activeFilters.includes(startup.industry)
        )
        : startups;
};