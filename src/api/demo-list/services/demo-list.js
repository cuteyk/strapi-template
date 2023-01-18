'use strict';

/**
 * demo-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-list.demo-list');
