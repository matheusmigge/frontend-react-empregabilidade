import "./Home.css";
import HomeCandidateContent from "./candidate-content/HomeCandidateContent.tsx";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/UseAuth.ts";
import HomeCompanyContent from "./company-content/HomeCompanyContent.tsx";


function Home() {
  const { userType, userData } = useAuth();
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locationRequested, setLocationRequested] = useState(false);
  const [viewMode, setViewMode] = useState<"view1" | "view2">("view1");

  useEffect(() => {
    if(!userData && !userType) {

      window.location.href = "/entrance";
    }
  
  }, [userData, userType]);

  const handleRequestLocation = () => {
    if (!locationRequested) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setLocationRequested(true); // Atualiza o estado para indicar que a localização foi obtida
          },
          (error) => {
            console.error("Erro ao obter localização:", error);
            setUserLocation(null); // Define como null caso o usuário negue a permissão
            setLocationRequested(true); // Atualiza o estado mesmo em caso de erro
          }
        );
      } else {
        console.error("Geolocalização não é suportada pelo navegador.");
        setUserLocation(null);
        setLocationRequested(true);
      }
    }
  };

  return (
    <div className="home" onClick={handleRequestLocation}>
      <Header
        title={userType === "candidate" ? "Vagas" : "Suas vagas"}
        useSearch={true}
        useToggle={true}
        useMenu={true}
        useNotification={true}
        useProfile={true}
        UserType="company"
        onToggleChange={(mode) => {
          setViewMode(mode);
        }}
      />

      {userType === "candidate" && <HomeCandidateContent userLocation={userLocation} viewMode={viewMode} />}
      {userType === "company" && <HomeCompanyContent userLocation={userLocation} viewMode={viewMode} />}
    </div>
  );
}

export default Home;