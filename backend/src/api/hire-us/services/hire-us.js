'use strict';

/**
 * hire-us service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hire-us.hire-us');
