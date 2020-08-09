import React from 'react';

const url = "google.com";
export function CountryApi(api) {
    let countryUrl = "";
    if(!api) {
        countryUrl = url;
    } else {
        countryUrl = url + "  " + api;
    }
    return countryUrl;
}

export function GlobalApi(api) {
    const globalUrl = url;
    return globalUrl;
}