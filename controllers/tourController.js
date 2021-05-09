const Tour = require('./../models/tourModel');

exports.getAllTours = (async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours: tours
            }
        });
    } catch (e) {
        res.status(400).json({
            status: 'error',
            message: 'some error occurred while trying to access db'
        });
    }
});

exports.getTour = (async (req, res) => {
    try {
        const tours = await Tour.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                tours: tours
            }
        });
    } catch (e) {
        res.status(400).json({
            status: 'error',
            message: 'some error occurred while trying to access db'
        });
    }

});

exports.createTour = (async (req, res) => {
    try {
        const reqBody = req.body;
        const newTour = await Tour.create(reqBody);
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'error'
        });
    }
});

exports.deleteTour = (async (req, res) => {
    try {
        const result = await Tour.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status: 'success',
            data: {
                result: result
            }
        });
    } catch (e) {
        res.status(400).json({
            status: 'failed',
            message: 'error'
        });
    }

});

exports.updateTour = (async (req, res) => {
    console.log(req.body)
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(201).json({
            status: 'success',
            data: {
                tour
            }
        });
    } catch (e) {
        res.status(400).json({
            status: 'failed',
            message: 'error'
        });
    }


});