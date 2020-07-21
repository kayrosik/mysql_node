const {sequelize, Order, Item} = require('../../../models/');
const {EmptyRequiredParamsError} = require('../../../lib/errors');

async function createOrder(req, res, next) {
    let transaction;
    let order;
    try {
        if (!req.user.id || !req.body.itemId || !req.body.transaction) {
            throw new EmptyRequiredParamsError();
        }

        transaction = await sequelize.transaction();

        order = await Order.create({
            userId: req.user.id,
            itemId: req.body.itemId,
            transactionData: Order.encryptTransaction(req.body.transaction),
        }, {transaction});

        await transaction.commit();
    } catch (err) {
        if (transaction) {
            await transaction.rollback();
        }

        res.send({status: 'error', message: 'Error while creating order'});
    }

    res.send({status: 'OK', message: 'Order is created'});
}

async function getOrders(req, res, next) {
    const result = [];
    try {
        if (!req.user.id) {
            throw new EmptyRequiredParamsError();
        }

        const orders = await Order.findAll({
            where: {
                userId: req.user.id,
            },
            include: [{
                model: Item,
            }],
        });

        orders.forEach(order => {
            result.push(order.Item.name);
        });

    } catch (err) {
        res.send({status: 'error', message: 'Error while getting orders'});
    }

    res.send(result);
}

module.exports = {
    createOrder,
    getOrders,
};