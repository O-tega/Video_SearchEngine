// import React from 'react';
import axios from 'axios';

const KEY = 'AIzaSyAB3cld2RLB6MFHskM7WPBDbJZG3fZ0DU8';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults:'5',
        key: KEY
    }
})