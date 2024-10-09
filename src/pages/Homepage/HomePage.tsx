import BookInSection from "./BookInSection";
import ExploreClasses from "./ExploreClasses";
import Header from "./Header";
import HomeDevTool from "./HomeDevTool";
import HomePageService from "./HomePageService";
import HomeService from "./HomeService";

function HomePage() {

    // const [params, setParams] = useState({ page: 1, pageSize: 4, categoryId: null })
    // const { data, isLoading } = useQuery({
    //     queryKey: ['posts', params], queryFn: () => getPost(params)
    // })
    // const posts = data?.data?.data;
    // if (isLoading) {
    //     return <p className='text-center'>Loading...</p>
    // }

    return (
        <div>
            <Header />
            <HomePageService />
            <BookInSection />
            <HomeService />
            <HomeDevTool />
            <ExploreClasses />
        </div>

    )
}

export default HomePage;