import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import "./index.css";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { onErrorResponseInterceptor, RequestInterceptor } from "./Services/axios";

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => RequestInterceptor(config));

axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => onErrorResponseInterceptor(error)
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
