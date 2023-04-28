import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    public: [
        {
            name: "home",
            label: "Home",
            route: "/"
        },
        {
            name: "about-us",
            label: "About Us",
            route: "/about-us"
        }
    ],
    private: [
        {
            name: "apps-portal",
            label: "Apps Portal",
            route: "/app"
        },
        {
            name: "app1",
            label: "App 1",
            route: "/app/app1"
        },
        {
            name: "sub-app-a",
            label: "Sub App A Dashboard",
            route: "/app/app1/sub-app-a"
        },
        {
            name: "feature-1",
            label: "Sub App A Feature 1",
            route: "/app/app1/sub-app-a/feature-1"
        },
        {
            name: "sub-app-b",
            label: "Sub App B Dashboard",
            route: "/app/app1/sub-app-b"
        },
        {
            name: "feature-2",
            label: "Sub App B Feature 2",
            route: "/app/app1/sub-app-b/feature-2"
        },
        {
            name: "app2",
            label: "App 2",
            route: "/app/app2"
        },
        {
            name: "sub-app-c",
            label: "Sub App C Dashboard",
            route: "/app/app2/sub-app-c"
        },
        {
            name: "feature-3",
            label: "Sub App C Feature 3",
            route: "/app/app2/sub-app-c/feature-3"
        },
        {
            name: "sub-app-d",
            label: "Sub App D Dashboard",
            route: "/app/app2/sub-app-d"
        },
        {
            name: "feature-2",
            label: "Sub App D Feature 2",
            route: "/app/app2/sub-app-d/feature-4"
        },
    ]
  });
})

export default router;