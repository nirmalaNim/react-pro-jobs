import React, { Component, useEffect } from 'react';
import axios from 'axios';
export default function JobComponent() {
    const [jobs, setjobs] = React.useState();
    const fetchjobs = async () => {
        try {
            const api = axios.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json")
            console.log(api);

        } catch (error) {
            console.log(error.message);
        }
    }
    React.useEffect(()=>{
        fetchjobs();
    },[])
    return null

}