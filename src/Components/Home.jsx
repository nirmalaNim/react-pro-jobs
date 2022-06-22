import React, { Component } from 'react';
import JobComponent from './JobComponent';
import Search from './Search';
export default function Home() {
    return (
        <React.Fragment>
        <h1>Pro Jobs</h1>
        <Search/>
        <JobComponent/>
        </React.Fragment>
    )
}