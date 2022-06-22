import React, { Component } from 'react';
export default function Search() {
    return (
        <form name="search">
            <label htmlFor="description">Description</label>
            <input type="search" placeholder="Developer" id="description" name="description" />
            <label htmlFor="location">Location</label>
            <input type="search" placeholder="Chennai" id="location" name="location" />
            <input type="checkbox" value="fulltime" name="fulltime" id="fulltime" /> <label htmlFor="fulltime" >Only Full Time</label>
        </form>
    )
}