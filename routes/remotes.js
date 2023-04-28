import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    [
        {
            appName: "Container",
            remotePath: "http://localhost:8080/"
        },
        {
            appName: "PublicPagesModule",
            remotePath: "PublicPagesModule@http://localhost:8081/remoteEntry.js"
        },
        {
            appName: "AppsPortal",
            remotePath: "AppsPortal@http://localhost:8082/remoteEntry.js"
        },
        {
            appName: "App1",
            remotePath: "App1@http://localhost:8083/remoteEntry.js"
        },
        {
            appName: "SubAppA",
            remotePath: "SubAppA@http://localhost:8084/remoteEntry.js"
        },
        {
            appName: "SubAppB",
            remotePath: "SubAppB@http://localhost:8085/remoteEntry.js"
        },
        {
            appName: "App2",
            remotePath: "App2@http://localhost:8086/remoteEntry.js"
        },
        {
            appName: "SubAppC",
            remotePath: "SubAppC@http://localhost:8087/remoteEntry.js"
        },
        {
            appName: "SubAppD",
            remotePath: "SubAppD@http://localhost:8088/remoteEntry.js"
        },
        
    ]);
})

export default router;