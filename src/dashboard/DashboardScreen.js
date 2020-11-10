import React from 'react'
import { Sidebar } from './ui/Sidebar'
import "../css/dashboard.css";

export const DashboardScreen = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
            </div>
        </div>
    )
}
