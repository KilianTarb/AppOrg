import { getData, saveData } from './DataFile';

/**
 * Returns all applications.
 */
export const allApplications = () => {
    return getData.applications;
}

/**
 * Returns applications by that name.
 * @param {string} name Name of the application
 */
export const findApplicationByName = (name) => {
    let data = getData().applications;
    let foundApps = [];
    for (let i = 0; i < data.length; i++)
        if (data[i].name == name)
            foundApps.push(data[i]);
    return foundApps;
}

/**
 * Creates a new application and saves it to disk.
 * @param {string} name Name of the new Application
 * @param {string} url URL of the new Application
 */
export const createApplication = (name, url) => {
    console.log("Creating Application: " + name + ' ' + url);
    getData((data) => {
        data.applications.push({name: name, url: url});
        saveData(data);
    });
}