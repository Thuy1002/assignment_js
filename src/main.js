import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/abuot";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newsDetail";
import signin from "./form/signin";
import signup from "./form/signup";
import dashboard from "./admin/dashboard";
import news from "./admin/news";
import edit_news from "./admin/edit_news";
import add_news from "./admin/add_news";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewsDetail.render(id));
    },
    "/signin": () => {
        print(signin.render());
    },
    "/signup": () => {
        print(signup.render());
    },
    "/dashboard": () => {
        print(dashboard.render());
    },
    "/news": () => {
        print(news.render());
    },
    "/edit_news": () => {
        print(edit_news.render());
    },
    "/add_news": () => {
        print(add_news.render());
    },
});

router.resolve();
