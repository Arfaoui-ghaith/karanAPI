const express = require('express');
const router = express.Router();

const readController = require('./../controllers/readController');

router.get('/yep-desc-pref-terms',readController.yep_desc_pref_terms);
router.get('/yep-scr-pref-terms',readController.yep_scr_pref_terms);
router.get('/yep-desc-records',readController.yep_desc_records);
router.get('/yep-desc-terms',readController.yep_desc_terms);
router.get('/yep-desc-permuted-terms',readController.yep_desc_permuted_terms);
router.get('/yep-desc-permuted-terms/:page/:per_page',readController.yep_desc_permuted_terms_pagination);
router.get('/yep-scr-records',readController.yep_scr_records);
router.get('/yep-scr-terms',readController.yep_scr_terms);
router.get('/yep-qual',readController.yep_qual_records);

//JDMS
router.get('/yep-jdms-hsr-rec',readController.yep_desc_records);
router.get('/yep-jdms-term',readController.yep_desc_terms);
router.get('/yep-jdms-hsr-prefterm',readController.yep_desc_pref_terms);


router.get('/cur-scr/:date',readController.cur_scr);

router.get('/cur-desc/:date',readController.cur_desc);


router.get('/yep-allowed-subheadings',readController.aq_descriptors);
router.get('/yep-allowed-subheadings/:page/:per_page',readController.aq_descriptors_pagination);


//HM
router.get('/yep-hm',readController.yep_hm_sweep);

//EC
router.get('/yep-ec',readController.yep_ec);

//HSR
router.get('/yep-jdms-hsr-rec',readController.yep_desc_records);
router.get('/yep-jdms-hsr-prefterm',readController.yep_desc_pref_terms);

module.exports = router;