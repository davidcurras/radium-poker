import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import ContentLayout from '../../layouts/ContentLayout'

class Profile extends Component {
    render() {
        return (
            <MainLayout>
                <ContentLayout>
                    <h1>Profile</h1>
                </ContentLayout>
            </MainLayout>
        )
    }
}

export default Profile