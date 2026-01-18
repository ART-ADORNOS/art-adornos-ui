import {useEffect, useState} from "react";
import {getStartup} from "../services/startupGet";
import {getUserIndustry} from "../services/getUserIndustryService";

const useSellerDashboardData = () => {
    const [startups, setStartups] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchDashboardData = async () => {
            setLoading(true);
            setError(null);

            try {
                const [startupResponse, industryResponse] = await Promise.all([
                    getStartup(),
                    getUserIndustry(),
                ]);

                if (!isMounted) return;

                const normalizedStartups = startupResponse.map((startup) => ({
                    ...startup,
                    industry: Array.isArray(startup.industry)
                        ? startup.industry
                        : [startup.industry],
                }));

                setStartups(normalizedStartups);
                setIndustries(industryResponse.industries || []);
            } catch (err) {
                if (isMounted) {
                    setError("No se pudo cargar la información del dashboard");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchDashboardData();

        return () => {
            isMounted = false;
        };
    }, []);

    return {
        startups,
        industries,
        loading,
        error,
    };
};

export default useSellerDashboardData;
