'use strict';


import togglePopUp from './modules/togglePopUp';
import sendForm from './modules/sendForm';
import accordion from './modules/accordion';
import calcAccordion from './modules/calcAccordion';
import moreBtn from './modules/moreBtn';


// popup's
togglePopUp();
//send ajax form
sendForm(calcAccordion());
// accordion
accordion();
// calc-accordion
calcAccordion();
// btn more
moreBtn();

