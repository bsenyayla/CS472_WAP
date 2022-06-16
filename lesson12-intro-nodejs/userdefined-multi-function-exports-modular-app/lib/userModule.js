/**
 * userModule.js
 * 
 * This library module defines a set of functionality
 * that presents data about a user. i.e. their name, location and dateOfBirth
 */
const getName = () => {
    return "Jim";
};
const getLocation = () => {
    return "Fairfield, Iowa, USA";
};
const dateOfBirth = new Date(1980, 1, 13);

const dbConectionMgr = (function(dbConfig) {

    /**
     * Makes and returns a Database Connection pool using the given config
     */
    const getConnection = function() {
        return mysql.createPool(dbConfig);
    }
    return {
        getConnection: getConnection
    }
})(dbConfig);

module.exports = dbConectionMgr;

exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;
exports.dbConectionMgr = dbConectionMgr;
