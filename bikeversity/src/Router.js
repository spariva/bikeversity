import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import GalleryComponent from "./components/GalleryComponent.vue";
import BikeversityComponent from "./components/BikeversityComponent.vue";
import DeberlinsonComponent from "./components/DeberlinsonComponent.vue";
import ItineraryComponent from "./components/ItineraryComponent.vue";
import ActivitiesComponent from "./components/ActivitiesComponent.vue";



const routes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/gallery", component: GalleryComponent
    },
    {
        path: "/itinerary", component: ItineraryComponent
    },
    {
        path: "/activities", component: ActivitiesComponent
    },
    {
        path: "/bikeversity", component: BikeversityComponent
    },
    {
        path: "/deberlinson", component: DeberlinsonComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;