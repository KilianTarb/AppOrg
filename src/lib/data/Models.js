import { v4 as uuidv4 } from 'uuid';
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
 * @returns {void}
 */
export const createApplication = (name, url) => {
    console.log("Creating Application: " + name + ' ' + url);
    getData((data) => {
        data.applications.push({id: uuidv4(), name: name, url: url});
        saveData(data);
    });
}

/**
 * Assigns the application to the supplied category.
 * @param {number} categoryId Id of the Category.
 * @param {number} applicationId Id of the Application.
 * @returns {void}
 */
export const assignApplicationToCategory = (categoryId, applicationId) => {
    getData((data) => {
        let applications = data.applications;
        for (let i = 0; i < applications.length; i++)
            if (applications[i].id == applicationId)
                applications[i].category = categoryId;
        saveData(data);
    });
}

/**
 * Checks if the application is in the supplied category.
 * @param {number} categoryId Id of the Category.
 * @param {number} applicationId Id of the Application.
 * @returns {boolean} True if the application is in the category.
 */
export const isApplicationInCategory = (categoryId, applicationId) => {
    getData((data) => {
        let applications = data.applications;
        for (let i = 0; i < applications.length; i++)
            if (applications[i].id == applicationId && applications[i].category == categoryId)
                return true;
        return false;
    });
}

/**
 * Returns all saved categories.
 * @returns {object[]} all categories.
 */
export const allCategories = () => {
    return getData.categories;
}

/**
 * Finds a category by name.
 * @param {string} name Name of the category.
 * @returns {object} returns category object.
 */
export const findCategoryByName = (name) => {
    let data = allCategories();
    let foundCategories = [];
    for (let i = 0; i < data.length; i++)
        if (data[i].name == name)
            foundCategories.push(data[i]);
    return foundCategories;
}

/**
 * Creates a new category.
 * @param {string} name The new category's name.
 * @returns {void}
 */
export const createCategory = (name) => {
    getData((data) => {
        data.categories.push({id: uuidv4(), name: name, applications: []});
        saveData(data);
    });
}