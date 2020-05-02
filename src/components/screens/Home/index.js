import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import ContentLayout from '../../layouts/ContentLayout'

class Home extends Component {
    render() {
        return (
            <MainLayout>
                <ContentLayout>
                    <h1>Home</h1>
                </ContentLayout>
            </MainLayout>
        )
    }
}

export default Home