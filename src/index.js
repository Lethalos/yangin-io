import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import AmbulansForm from "./forms/AmbulansForm";
import AracForm from "./forms/AracForm";
import BarinmaForm from "./forms/BarinmaForm";
import GidaForm from "./forms/GidaForm";
import HayvanForm from "./forms/HayvanForm";
import İtfaiyeForm from "./forms/İtfaiyeForm";
import AracTemin from "./helpers/AracTemin";
import KonutTemin from "./helpers/KonutTemin";
import GidaTemin from "./helpers/GidaTemin";
import VetTemin from "./helpers/VetTemin";
import AracList from "./istekler/AracList";
import EvMusaitList from "./istekler/EvMusaitList";
import GidaList from "./istekler/GidaList";
import GidaVerenList from "./istekler/GidaVerenList";
import HayvanList from "./istekler/HayvanList";
import HayvanYardimList from "./istekler/HayvanYardimList";
import KonutLİst from "./istekler/KonutList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ambulans",
    element: <AmbulansForm />,
    },
    {
    path: "/arac",
    element: <AracForm />,
    },
    {
    path: "/barinma",
    element: <BarinmaForm />,
    },
    {
    path: "/gida",
    element: <GidaForm />,
    },
    {
    path: "/hayvan",
    element: <HayvanForm />,
    },
    {
    path: "/itfaiye",
    element: <İtfaiyeForm />,
    },
    {
    path: "/aractemin",
    element: <AracTemin />,
    },
    {
    path: "/konuttemin",
    element: <KonutTemin />,
    },
    {
    path: "/gidatemin",
    element: <GidaTemin />,
    },
    {
    path: "/vettemin",
    element: <VetTemin />,
    },
    {
    path: "/araclist",
    element: <AracList />,
    },
    {
    path: "/evmusaitlist",
    element: <EvMusaitList />,
    },
    {
    path: "/gidalist",
    element: <GidaList />,
    },
    {
    path: "/gidaverenlist",
    element: <GidaVerenList />,
    },
    {
    path: "/hayvanlist",
    element: <HayvanList />,
    },
    {
    path: "/hayvanyardimlist",
    element: <HayvanYardimList />,
    },
    {
    path: "/konutlist",
    element: <KonutLİst />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);