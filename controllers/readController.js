const models = require('./../models');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.yep_desc_pref_terms = catchAsync(async (req, res, next) => {
    const yep_desc_pref_terms = await models.Yep_desc_pref_term.findAll({attributes:{exclude:['id']}, order: ['trans_date','trans_code']});

    if(!yep_desc_pref_terms){
        return next(new AppError('No yep_desc_pref_terms found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: yep_desc_pref_terms.length,
        yep_desc_pref_terms
    });
});

exports.yep_scr_pref_terms = catchAsync(async (req, res, next) => {
    const yep_scr_pref_terms = await models.yep_scr_pref_terms.findAll({attributes:{exclude:['id']}, order: ['trans_date','trans_code']});

    if(!yep_scr_pref_terms){
        return next(new AppError('No yep_scr_pref_terms found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: yep_scr_pref_terms.length,
        yep_scr_pref_terms
    });
});

exports.yep_desc_records = catchAsync(async (req, res, next) => {
    const yep_desc_records = await models.yep_desc_records.findAll({attributes:{exclude:['id']}, order: ['trans_date','trans_code']});

    if(!yep_desc_records){
        return next(new AppError('No yep_desc_records found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: yep_desc_records.length,
        yep_desc_records
    });
});

exports.yep_desc_terms = catchAsync(async (req, res, next) => {
    const yep_desc_terms = await models.yep_desc_terms.findAll({attributes:{exclude:['id']}, order: ['trans_date','trans_code']});

    if(!yep_desc_terms){
        return next(new AppError('No yep_desc_terms found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: yep_desc_terms.length,
        yep_desc_terms
    });
});

exports.yep_desc_permuted_terms = catchAsync(async (req, res, next) => {
    const yep_permuted_terms = await models.yep_permuted_terms.findAll({
        attributes:{exclude:['id']}, 
        order: ['trans_date','trans_code']
    });

    if(!yep_permuted_terms){
        return next(new AppError('No yep_desc_permuted_terms found.', 404));
    }


    res.status(200).json({
        status: 'success',
        yep_permuted_terms
    });
});

exports.yep_desc_permuted_terms_pagination = catchAsync(async (req, res, next) => {
    const yep_permuted_terms = await models.yep_permuted_terms.findAndCountAll({
        attributes:{exclude:['id']}, 
        order: ['trans_date','trans_code'],
        limit: req.params.per_page,
        offset: req.params.page
    });

    if(!yep_permuted_terms){
        return next(new AppError('No yep_desc_permuted_terms found.', 404));
    }


    res.status(200).json({
        status: 'success',
        yep_permuted_terms: {page: req.params.page*1, per_page: req.params.per_page*1, ...yep_permuted_terms}
    });
});

exports.yep_scr_records = catchAsync(async (req, res, next) => {
    const yep_scr_records = await models.yep_scr_records.findAll({
        attributes:{exclude:['id']}, 
        order: ['trans_date','trans_code']
    });

    if(!yep_scr_records){
        return next(new AppError('No yep_scr_records found.', 404));
    }


    res.status(200).json({
        status: 'success',
        results: yep_scr_records.length,
        yep_scr_records
    });
});

exports.yep_scr_terms = catchAsync(async (req, res, next) => {
    const yep_scr_terms = await models.yep_scr_terms.findAll({
        attributes:{exclude:['id']}, 
        order: ['trans_date','trans_code']
    });

    if(!yep_scr_terms){
        return next(new AppError('No yep_scr_terms found.', 404));
    }


    res.status(200).json({
        status: 'success',
        results: yep_scr_terms.length,
        yep_scr_terms
    });
});

exports.yep_qual_records = catchAsync(async (req, res, next) => {
    const yep_qual_records = await models.yep_qual_records.findAll({
        attributes:{exclude:['id']}, 
        order: ['trans_date','trans_code']
    });

    if(!yep_qual_records){
        return next(new AppError('No yep_qual_records found.', 404));
    }


    res.status(200).json({
        status: 'success',
        results: yep_qual_records.length,
        yep_qual_records
    });
});

exports.cur_scr = catchAsync(async (req, res, next) => {

    if(!req.params.date){
        return next(new AppError('Please set a date!', 401));
    }

    const date = new Date(`${req.params.date.slice(4)}-${req.params.date.slice(2,4)}-${req.params.date.slice(0,2)}`)

    const cur_scr_records = await models.cur_scr_records.findAll({
        where: { trans_date: date },
        attributes:{exclude:['id']}, 
        order: ['trans_date','trans_code']
    });

    const cur_scr_terms = await models.cur_scr_terms.findAll({
        where: { trans_date: date },
        attributes:{exclude:['id']}, 
        order: ['trans_date','trans_code']
    });

    const cur_scr_pref_terms = await models.cur_scr_pref_terms.findAll({
        where: { trans_date: date },
        attributes:{exclude:['id']}, 
        order: ['trans_date','trans_code']
    });

    const cur_hm_records = await models.cur_hm_records.findAll({
        where: { trans_date: date },
        attributes:{exclude:['id']}, 
        order: ['trans_date','trans_code']
    });


    res.status(200).json({
        status: 'success',
        cur_scr:{
            cur_scr_records: {results: cur_scr_records.length,cur_scr_records},
            cur_scr_terms: {results: cur_scr_terms.length,cur_scr_terms},
            cur_scr_pref_terms: {results: cur_scr_pref_terms.length,cur_scr_pref_terms},
            cur_hm_records: {results: cur_hm_records.length,cur_hm_records},
        }
    });
});

exports.aq_descriptors = catchAsync(async (req, res, next) => {
    const aq_descriptors = await models.aq_descriptors.findAll({
        attributes:{exclude:['id']}
    });

    console.log('hi')

    if(!aq_descriptors){
        return next(new AppError('No aq_descriptors found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: aq_descriptors.length,
        aq_descriptors
    });
});

exports.aq_descriptors_pagination = catchAsync(async (req, res, next) => {
    const aq_descriptors = await models.aq_descriptors.findAll({
        attributes:{exclude:['id']},
        limit: req.params.per_page,
        offset: req.params.page
    });

    console.log('hi')

    if(!aq_descriptors){
        return next(new AppError('No aq_descriptors found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: aq_descriptors.length,
        aq_descriptors: {page: req.params.page*1, per_page: req.params.per_page*1, ...aq_descriptors}
    });
});

exports.cur_desc = catchAsync(async (req, res, next) => {

    if(!req.params.date){
        return next(new AppError('Please set a date!', 401));
    }

    const date = new Date(`${req.params.date.slice(4)}-${req.params.date.slice(2,4)}-${req.params.date.slice(0,2)}`)

    const cur_desc_records = await models.cur_desc_records.findAll({
        where: { trans_date: date },
        attributes:{exclude:['id']}, 
        
    });

    const cur_desc_terms = await models.cur_desc_terms.findAll({
        where: { trans_date: date },
        attributes:{exclude:['id']}, 
      
    });

    const cur_desc_pref_terms = await models.cur_desc_pref_terms.findAll({
        where: { trans_date: date },
        attributes:{exclude:['id']}, 
       
    });

    const cur_desc_ec = await models.cur_desc_ec.findAll({
        where: { trans_date: date },
        attributes:{exclude:['id']}, 
        
    });

    const cur_desc_fx = await models.cur_desc_fx.findAll({
        where: { trans_date: date },
        attributes:{exclude:['id']}, 
        
    });

    const cur_desc_pubtype = await models.cur_desc_pubtype.findAll({
        where: { trans_date: date },
        attributes:{exclude:['id']}, 
        
    });

    const cur_desc_trees = await models.cur_desc_trees.findAll({
        where: { trans_date: date },
        attributes:{exclude:['id']}, 
        
    });


    res.status(200).json({
        status: 'success',
        cur_desc:{
            cur_desc_records: {results: cur_desc_records.length,cur_desc_records},
            cur_desc_terms: {results: cur_desc_terms.length,cur_desc_terms},
            cur_desc_pref_terms: {results: cur_desc_pref_terms.length,cur_desc_pref_terms},
            cur_desc_ec: {results: cur_desc_ec.length,cur_desc_ec},
            cur_desc_fx: {results: cur_desc_fx.length,cur_desc_fx},
            cur_desc_pubtype: {results: cur_desc_pubtype.length,cur_desc_pubtype},
            cur_desc_trees: {results: cur_desc_trees.length,cur_desc_trees},
        }
    });
});

exports.yep_hm_sweep = catchAsync(async (req, res, next) => {
    const yep_hm_sweep = await models.yep_hm_sweep.findAll({attributes:{exclude:['id']}});

    if(!yep_hm_sweep){
        return next(new AppError('No yep_hm_sweep found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: yep_hm_sweep.length,
        yep_hm_sweep
    });
});


exports.yep_ec = catchAsync(async (req, res, next) => {
    const yep_ec = await models.yep_ec.findAll({attributes:{exclude:['id']}});

    if(!yep_ec){
        return next(new AppError('No yep_ec found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: yep_ec.length,
        yep_ec
    });
});