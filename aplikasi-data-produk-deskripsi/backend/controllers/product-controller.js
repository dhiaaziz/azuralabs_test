
const Product = require('../models').product;
const ApiError = require('../helpers/api-error');
const validator = require('../helpers/validator');

const index = async (req, res, next) => {
    try {
        const data = await Product.findAll({});
        res.status(200).json({
            success: true,
            message: 'products retrieved successfully',
            data
        });

    } catch (error) {
        next(error);
    }
}

const show = async (req, res, next) => {
    try {
        const data = await Product.findByPk(req.params.id);
        if (!data) throw ApiError.badRequest('product not found');

        res.status(200).json({
            success: true,
            message: 'product retrieved successfully',
            data
        });

    } catch (error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    try {
        const requiredFields = [
            'name',
            'description'
        ]
        validator(requiredFields, req.body);

        const data = await Product.create(req.body);
        res.status(201).json({
            success: true,
            message: 'product created successfully',
            data
        });

    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const requiredFields = [
            'name',
            'description'
        ]
        validator(requiredFields, req.body);

        const data = await Product.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true,
        });

        if (!data[0]) throw ApiError.badRequest('product not found');
        res.status(200).json({
            success: true,
            message: 'product updated successfully',
            data: data[1]
        });

    } catch (error) {
        next(error);
    }
}
const destroy = async (req, res, next) => {
    try {
        const data = await Product.destroy({
            where: {
                id: req.params.id
            },
            // returning: true,
        });
        // console.log(data);
        if (!data) throw ApiError.badRequest('product not found');

        res.status(200).json({
            success: true,
            message: 'product deleted successfully',
            // data: data[1]
        });

    } catch (error) {
        next(error);
    }
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy
}