const {ItemAttribute, Item, Attribute, ItemCategory, Category} = require('../../../models');

/**
 * @param {Object} category 
 * @returns {Object}
 */
function getCategory(category) {
    return {
        title: category.Category.name,
        description: category.Category.description || '',
    };
}

/**
 * @param {Object} attribute 
 * @param {String} value 
 * @returns {Object}
 */
function getAttribute(attribute, value) {
    return {
        name: attribute.name,
        value,
    };
}

/**
 * @param {String} name
 * @returns {Object} 
 */
function initItem(name) {
    return {
        title: name,
        attributes: [],
        categories: [],
    };
}

/**
 * @param {Array} items
 * @returns {Array<Object>}
 */
function mapItems(items) {
    const itemAttributeMap = {};
    items.forEach(item => {
        if (!itemAttributeMap[item.itemId]) {
          itemAttributeMap[item.itemId] = initItem(item.Item.name);
        }

        (item.Item.ItemCategories || []).forEach(category => {
            itemAttributeMap[item.itemId].categories.push(getCategory(category));
        });

        if (item.Attribute) {
          itemAttributeMap[item.itemId].attributes.push(getAttribute(item.Attribute, item.value));
        }
    });

    return [...Object.values(itemAttributeMap)];
}

async function catalog(req, res, next) {
    const result = [];
    try {
      const items = await ItemAttribute.findAll({
        include: [{
          model: Item,
          include: [{
            model: ItemCategory,
            include: [{
              model: Category,
            }],
          }],
        }, {
          model: Attribute,
        }],
      });

      result.push(...mapItems(items));
    } catch(err) {
      res.send({status: 'error', message: 'Error while getting catalog'});
    }
    
    res.send(result);
}

module.exports = catalog;