import BrandStory from "../components/BrandStory";
import Footer from "../components/Footer";
import HappenedIssue from "../components/HappenedIssue";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Products from "../components/Products";
import Video from "../components/Video";

export default function Home() {
    return (
        <>
            <Header />
            <Introduction />
            <Products />
            <BrandStory />
            <HappenedIssue />
            <Video />
            <Footer />
        </>
    )
}
