"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const aclData_1 = require("./aclData");
const slsData_1 = require("./slsData");
const fanatics_bleach_1 = require("./fanatics-bleach");
const fanatics_2_1 = require("./fanatics-2");
const fanatics_1 = require("./fanatics");
const nutrisystem_1 = require("./nutrisystem");
const fandango_1 = require("./fandango");
const cruise_1 = require("./cruise");
const sonyData_1 = require("./sonyData");
const sonyData_2_1 = require("./sonyData-2");
const bucksData_1 = require("./bucksData");
const giantsData_1 = require("./giantsData");
const giants_bleach_1 = require("./giants-bleach");
const nycfc_1 = require("./nycfc");
const man_city_1 = require("./man-city");
const cedar_point_1 = require("./cedar-point");
const worldBeachGamesData_1 = require("./worldBeachGamesData");
const thompson_1 = require("./thompson");
const mgm_1 = require("./mgm");
const blizzard_1 = require("./blizzard");
const virgin_1 = require("./virgin");
const hbo_1 = require("./hbo");
const disney_1 = require("./disney");
const hulu_1 = require("./hulu");
const alabama_1 = require("./alabama");
const whiteSoxAddOns_1 = require("./whiteSoxAddOns");
const costco_1 = require("./costco");
exports.offerPages = lodash_1.keyBy([
    aclData_1.offerPage,
    slsData_1.offerPage,
    thompson_1.offerPage,
    mgm_1.offerPage,
    costco_1.offerPage,
    blizzard_1.offerPage,
    virgin_1.offerPage,
    hbo_1.offerPage,
    disney_1.offerPage,
    hulu_1.offerPage,
    alabama_1.offerPage,
    fanatics_bleach_1.offerPage,
    fanatics_2_1.offerPage,
    fanatics_1.offerPage,
    nutrisystem_1.offerPage,
    fandango_1.offerPage,
    sonyData_1.offerPage,
    bucksData_1.offerPage,
    sonyData_2_1.offerPage,
    giantsData_1.offerPage,
    giants_bleach_1.offerPage,
    nycfc_1.offerPage,
    man_city_1.offerPage,
    cedar_point_1.offerPage,
    cruise_1.offerPage,
    worldBeachGamesData_1.offerPage,
    whiteSoxAddOns_1.offerPage
], 'uri');
