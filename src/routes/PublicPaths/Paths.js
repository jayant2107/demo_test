import Oneoffevent from "../../components/Oneoffevent";
import SearchMelbourne from "../../pages/SearchMelbourne";
import Complitebooking from "../../pages/Complitebooking";
import Landing from "../../pages/Landing";
import Sharing from "../../test/Sharing";

export const Paths = [
    {
        path:"/",
        components: <Landing />
    },
    {
        path:"/searchMelbourne",
        components: <SearchMelbourne />
    },
    {
        path:"/oneoffevent",
        components: <Oneoffevent/>
    },
    {
        path:"/complitebooking",
        components: <Complitebooking/>
    },
    {
        path:"/sharingTest",
        components: <Sharing/>
    },
    
]