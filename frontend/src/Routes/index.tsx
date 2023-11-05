import { createBrowserRouter, Navigate } from "react-router-dom";
import { AdminLayout } from "../Components/Auth/admin";
import { RequireAuth } from "../Components/Auth/RequireAuth";
import { AppLayout } from "../Components/Layout/AppLayout";
import { BloodGroups } from "../Pages/admin/bloodGroups/bloodGroups";
import { BloodGroupPopup } from "../Pages/admin/bloodGroups/popup";
import { UserManagement } from "../Pages/admin/Users";
import { BloodRequest } from "../Pages/bloodRequest";
import { BloodRequestPopup } from "../Pages/bloodRequest/popup";
import { Dashboard } from "../Pages/Dashboard";
import { BloodDonation } from "../Pages/donation";
import ErrorPage from "../Pages/Error";
import { HealthReport } from "../Pages/healthReport";
import { HealthReportPopup } from "../Pages/healthReport/popup";
import { Login } from "../Pages/Login";
import { Logout } from "../Pages/Logout";
import { Profile } from "../Pages/profile";
import { AddressPopup } from "../Pages/profile/popup";
import { Register } from "../Pages/Register";
import { SingleUserView } from "../Pages/admin/Users/singleUser";
import { RequestManagement } from "../Pages/admin/requests";
import { AdminBloodDonation } from "../Pages/admin/donations";
import { AdminBloodDonationPopup } from "../Pages/admin/donations/popup";
import { DonorFinder } from "../Pages/admin/donorFinder";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        loader: () => null,
        action: () => null,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "logout",
                element: <Logout />,
            },
            {
                path: "",
                element: <RequireAuth />,
                children: [
                    {
                        path: "",
                        element: <Dashboard />,
                    },
                    {
                        path: "profile",
                        element: <Profile />,
                        children: [
                            {
                                path: "address/create",
                                element: <AddressPopup />,
                            },
                            {
                                path: "address/update/:id",
                                element: <AddressPopup />,
                            },
                        ],
                    },
                    {
                        path: "health-report",
                        element: <HealthReport />,
                        children: [
                            {
                                path: "create",
                                element: <HealthReportPopup />,
                            },
                            {
                                path: "update/:id",
                                element: <HealthReportPopup />,
                            },
                        ],
                    },
                    {
                        path: "requests",
                        element: <BloodRequest />,
                        children: [
                            {
                                path: "create",
                                element: <BloodRequestPopup />,
                            },
                            {
                                path: "update/:id",
                                element: <BloodRequestPopup />,
                            },
                        ],
                    },
                    {
                        path: "donations",
                        element: <BloodDonation />,
                    },

                    {
                        path: "admin",
                        element: <AdminLayout />,
                        children: [
                            {
                                path: "",
                                element: <Navigate to="/admin/bloodGroups"></Navigate>,
                            },
                            {
                                path: "bloodGroups",
                                element: <BloodGroups />,
                                children: [
                                    {
                                        path: "create",
                                        element: <BloodGroupPopup />,
                                    },
                                    {
                                        path: "update/:id",
                                        element: <BloodGroupPopup />,
                                    },
                                ],
                            },
                            {
                                path: "donations",
                                element: <AdminBloodDonation />,
                                children: [
                                    {
                                        path: "create",
                                        element: <AdminBloodDonationPopup />,
                                    },
                                    {
                                        path: "update/:id",
                                        element: <AdminBloodDonationPopup />,
                                    },
                                ],
                            },
                            {
                                path: "users",
                                element: <UserManagement />,
                                children: [
                                    {
                                        path: "update/:id",
                                        element: <BloodRequestPopup />,
                                    },
                                ],
                            },
                            {
                                path: "users/:id",
                                element: <SingleUserView />,
                            },
                            {
                                path: "finder",
                                element: <DonorFinder />,
                            },
                            {
                                path: "requests",
                                element: <RequestManagement />,
                            },

                            {
                                path: "*",
                                element: <Navigate to="/admin/bloodGroups"></Navigate>,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);
