import path from 'path';
import fs from 'fs';
import getAppDataPath from 'appdata-path';
import { call } from 'file-loader';

/**
 * Initialise data files.
 */
export const init = () => {
    if (!dataDirExists()) {
        console.log("Data directory does not exist, creating one...");
        createNewDataDir();
    }

    if (!dataFileExists()) {
        console.log('App data file does not exist, creating new one...');
        createNewDataFile();
    }
}

/**
 * Returns True if the appdata directory exists.
 */
export const dataDirExists = () => {
    return fs.existsSync(getConstellationDataDirPath());
}

/**
 * Returns True if the data file exists.
 */
export const dataFileExists = () => {
    return fs.existsSync(getConstellationDataPath());
}

/**
 * Creates a new appdata directory.
 */
export const createNewDataDir = () => {
    fs.mkdirSync(getConstellationDataDirPath());
}

/**
 * Creates a new data file. If the directory doesn't exist, the directory gets created.
 */
export const createNewDataFile = () => {
    if (!dataDirExists()) {
        createNewDataDir();
    }
    
    fs.writeFile(getConstellationDataPath(), getNewData(), (err) => {
        if (err) throw err;
    })
}

/**
 * Returns the app's appdata path.
 */
export const getConstellationDataDirPath = () => {
    return path.format(path.parse((getAppDataPath() + '/constellation')));    
}

/**
 * Returns the app's data file path.
 */
export const getConstellationDataPath = () => {
    return path.format(path.parse((getAppDataPath() + '/constellation' + '/data')));    
}

/**
 * Returns the app's empty data structure.
 */
export const getNewData = () => {
    return JSON.stringify({
        applications: []
    });
}

/**
 * Returns all applications data.
 */
export const getData = (callback) => {
    if (!dataFileExists) {
        console.log("Data file does not exist, create new one...");
        createNewDataFile();
    }
    fs.readFile(getConstellationDataPath(), 'utf8', (err, data) => {
        if (err) throw err;
        callback(JSON.parse(data));
    });
}

/**
 * Saves the data object to disk.
 * @param {object} data New data object to save to disk.
 */
export const saveData = (data) => {
    if (dataFileExists()) {
        fs.writeFile(getConstellationDataPath(), JSON.stringify(data), (err) => {
            if (err) throw err;
        })
    } else
        console.log('Can not save data! Data file does not exist.');
}